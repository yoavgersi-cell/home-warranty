import type { ArticleData } from "@/lib/config";
import manifest from "@/lib/seeds/article-images.json";

// Generated article images (scripts/generate-article-images.ts writes the
// files to public/article-images/ and records them in article-images.json).
// Kept as data, not code, so the daily GitHub Action can add images without
// touching article modules. An image set directly on an article wins.

export interface ArticleImageEntry {
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  model?: string;
  generatedAt?: string;
}

export const ARTICLE_IMAGES = manifest as Record<string, ArticleImageEntry>;

// Articles first published on/after this date must ship with an image -
// enforced at build time by scripts/check-article-images.ts.
export const IMAGE_REQUIRED_FROM = "2026-11-16";

export function applyArticleImages(articles: ArticleData[]): ArticleData[] {
  return articles.map((a) => {
    const entry = ARTICLE_IMAGES[a.slug];
    if (a.image || !entry) return a;
    return { ...a, image: entry.image, imageAlt: a.imageAlt ?? entry.imageAlt };
  });
}

export function articleImageSize(slug: string): { width: number; height: number } {
  const entry = ARTICLE_IMAGES[slug];
  return { width: entry?.width ?? 1536, height: entry?.height ?? 864 };
}
