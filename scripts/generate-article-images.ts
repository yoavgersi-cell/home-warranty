/**
 * Generate hero images + alt text for articles that don't have one yet.
 *
 *   npm run images:generate                 # next 5 articles without images
 *   LIMIT=2 npm run images:generate         # custom batch size
 *   npm run images:generate -- --slug=a,b   # specific articles (regenerates)
 *   npm run images:generate -- --new        # only articles that MUST have one
 *                                           # (published on/after IMAGE_REQUIRED_FROM)
 *
 * Needs OPENAI_API_KEY (in GitHub Actions: repository secret; in Claude cloud
 * sessions the proxy injects it). Writes public/article-images/<slug>.webp and
 * records { image, imageAlt, width, height, model, generatedAt } in
 * src/lib/seeds/article-images.json, which the site merges into the articles.
 *
 * Pipeline per article:
 *   1. a text model turns the article's title/summary into a concrete scene
 *      (no text, logos, brands or identifiable faces - those render badly or
 *      raise trademark/likeness issues),
 *   2. the image model renders it at 1536x1024,
 *   3. sharp crops to 16:9 (1536x864, >=1200px wide for Google Discover) WebP,
 *   4. a vision model writes alt text from the FINISHED image, so the alt
 *      describes what is actually shown (accessibility + image SEO).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { homeWarrantyConfig } from "../src/lib/seeds/home-warranty";
import { IMAGE_REQUIRED_FROM, type ArticleImageEntry } from "../src/lib/article-images";

const ROOT = process.cwd();
const MANIFEST = path.join(ROOT, "src/lib/seeds/article-images.json");
const OUT_DIR = path.join(ROOT, "public/article-images");
const API = "https://api.openai.com/v1";
const KEY = process.env.OPENAI_API_KEY || "proxy-injected";
const IMAGE_MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2";
const TEXT_MODEL = process.env.OPENAI_TEXT_MODEL || "gpt-4.1-mini";
const QUALITY = process.env.OPENAI_IMAGE_QUALITY || "medium";
const LIMIT = Number(process.env.LIMIT || 5);
const WIDTH = 1536;
const HEIGHT = 864;

const STYLE = [
  "Editorial photograph for a US consumer home-services publication.",
  "Realistic, natural light, warm and calm, shallow depth of field, clean composition with negative space, 16:9 framing with the subject centered.",
  "Setting: an ordinary, well-kept American home.",
  "Absolutely no text, letters, numbers, signs, labels, documents with readable writing, logos, brand names or trademarks anywhere in the image.",
  "If people appear, show them naturally from the side, from behind or at a distance - no close-up or identifiable faces.",
  "No company uniforms with logos, no money or price tags, no dramatic disaster imagery.",
].join(" ");

type Manifest = Record<string, ArticleImageEntry>;

async function openai(endpoint: string, body: unknown): Promise<any> {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(`${API}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${KEY}` },
      body: JSON.stringify(body),
    });
    if (res.ok) return res.json();
    const text = await res.text();
    if (res.status >= 500 || res.status === 429) {
      console.warn(`  ${endpoint} ${res.status}, retry ${attempt}/3`);
      await new Promise((r) => setTimeout(r, 4000 * attempt));
      continue;
    }
    throw new Error(`${endpoint} ${res.status}: ${text.slice(0, 300)}`);
  }
  throw new Error(`${endpoint} failed after 3 attempts`);
}

async function chat(system: string, user: unknown, maxTokens = 300): Promise<string> {
  const d = await openai("/chat/completions", {
    model: TEXT_MODEL,
    temperature: 0.4,
    max_tokens: maxTokens,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
  });
  return String(d.choices?.[0]?.message?.content ?? "").trim();
}

function plain(html: string, words = 120): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().split(" ").slice(0, words).join(" ");
}

async function generate(a: (typeof homeWarrantyConfig.articles)[number]): Promise<ArticleImageEntry> {
  const summary = [a.description, ...(a.keyTakeaways ?? []).slice(0, 2), plain(a.sections[0]?.body ?? "")].join(" ");

  // 1. Scene
  const scene = await chat(
    "You art-direct hero images for articles about home warranties, home systems, appliances and home insurance. Reply with ONE concrete visual scene (2-3 sentences) that a reader would instantly connect to the article's topic: name the specific objects, room and action. Make the physical home, system or appliance at the heart of the topic the subject (for example an outdoor AC condenser, a water heater, a roof, a refrigerator, a home exterior) - do NOT use generic scenes of people reviewing paperwork, laptops, charts or tablets. Avoid text, logos, brands, money and identifiable faces. No preamble.",
    `Article title: ${a.title}\nCategory: ${a.category}\nSummary: ${summary}`,
    220,
  );
  console.log(`  scene: ${scene}`);

  // 2. Image
  const img = await openai("/images/generations", {
    model: IMAGE_MODEL,
    prompt: `${scene}\n\nStyle: ${STYLE}`,
    size: "1536x1024",
    quality: QUALITY,
    n: 1,
  });
  const b64 = img.data?.[0]?.b64_json;
  if (!b64) throw new Error("image response had no b64_json");

  // 3. Crop to 16:9 WebP
  const webp = await sharp(Buffer.from(b64, "base64"))
    .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
    .webp({ quality: 80 })
    .toBuffer();
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(path.join(OUT_DIR, `${a.slug}.webp`), webp);

  // 4. Alt text from the finished image
  const alt = await chat(
    "You write alt text for images on a consumer website. Describe what is actually visible, specifically and concretely, in one sentence of 80-125 characters. Mention the topic context only if it is visible. Do not start with 'Image of' or 'Photo of'. No brand names, no keyword stuffing, no quotes.",
    [
      { type: "text", text: `This image illustrates the article "${a.title}". Write the alt text.` },
      { type: "image_url", image_url: { url: `data:image/webp;base64,${webp.toString("base64")}` } },
    ],
    120,
  );
  const imageAlt = alt.replace(/^["']|["']$/g, "").trim();
  console.log(`  alt: ${imageAlt} (${(webp.length / 1024).toFixed(0)} KB)`);

  return {
    image: `/article-images/${a.slug}.webp`,
    imageAlt,
    width: WIDTH,
    height: HEIGHT,
    model: IMAGE_MODEL,
    generatedAt: new Date().toISOString().slice(0, 10),
  };
}

async function main() {
  const args = process.argv.slice(2);
  const slugArg = args.find((x) => x.startsWith("--slug="))?.slice(7);
  const newOnly = args.includes("--new");
  const manifest: Manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
  const articles = homeWarrantyConfig.articles ?? [];
  const hasImage = (slug: string) => Boolean(manifest[slug]) || Boolean(articles.find((x) => x.slug === slug)?.image);

  let queue = slugArg
    ? articles.filter((a) => slugArg.split(",").includes(a.slug))
    : articles
        .filter((a) => !hasImage(a.slug))
        .filter((a) => !newOnly || a.publishedAt >= IMAGE_REQUIRED_FROM)
        // Newest / most recently updated first: those are the pages we're
        // actively pushing in search.
        .sort((x, y) => (y.updatedAt || y.publishedAt).localeCompare(x.updatedAt || x.publishedAt));
  if (!slugArg && !newOnly) queue = queue.slice(0, LIMIT);

  const remaining = articles.filter((a) => !hasImage(a.slug)).length;
  console.log(`Articles without images: ${remaining}. Generating ${queue.length} with ${IMAGE_MODEL} / ${TEXT_MODEL}.`);

  let ok = 0;
  for (const a of queue) {
    console.log(`\n▶ ${a.slug}`);
    try {
      manifest[a.slug] = await generate(a);
      writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
      ok++;
    } catch (e) {
      console.error(`  ✗ ${a.slug}: ${(e as Error).message}`);
    }
  }
  console.log(`\nDone: ${ok}/${queue.length} generated.`);
  if (ok < queue.length) process.exitCode = 1;
}

main();
