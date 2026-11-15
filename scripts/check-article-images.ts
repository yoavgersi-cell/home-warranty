/**
 * Build guard (runs as `prebuild`): every article first published on or after
 * IMAGE_REQUIRED_FROM must have a hero image and alt text, and every image it
 * references must exist in public/. Fails the build otherwise, so a new
 * article can't go live without an image. Fix with:
 *   npm run images:generate -- --new
 */
import { existsSync } from "node:fs";
import path from "node:path";
import { homeWarrantyConfig } from "../src/lib/seeds/home-warranty";
import { IMAGE_REQUIRED_FROM } from "../src/lib/article-images";

const problems: string[] = [];
for (const a of homeWarrantyConfig.articles ?? []) {
  if (a.image) {
    if (!existsSync(path.join(process.cwd(), "public", a.image))) problems.push(`${a.slug}: image file missing (${a.image})`);
    if (!a.imageAlt?.trim()) problems.push(`${a.slug}: image has no alt text`);
  } else if (a.publishedAt >= IMAGE_REQUIRED_FROM) {
    problems.push(`${a.slug}: published ${a.publishedAt} without an image (required from ${IMAGE_REQUIRED_FROM})`);
  }
}

const total = homeWarrantyConfig.articles?.length ?? 0;
const withImage = homeWarrantyConfig.articles?.filter((a) => a.image).length ?? 0;
if (problems.length) {
  console.error(`✗ Article image check failed:\n  - ${problems.join("\n  - ")}\nRun: npm run images:generate -- --new`);
  process.exit(1);
}
console.log(`✓ Article images OK (${withImage}/${total} articles have images).`);
