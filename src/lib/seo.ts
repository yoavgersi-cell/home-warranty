// Shared SEO building blocks so every page emits the same entity graph and
// crawler directives.
//
// Why this exists: Next.js metadata merging is shallow - a page that sets its
// own `openGraph` object drops the root layout's siteName/locale, and a page
// that returns `robots: undefined` drops the root's googleBot directives
// (max-image-preview:large, max-snippet:-1). Pages spread these constants
// instead of relying on inheritance.

export const SITE_URL = "https://www.thetophomewarranty.com";
export const SITE_NAME = "Top Home Warranty";

// Stable @id anchors so Organization, WebSite, Article publisher and author
// references all resolve to ONE entity in Google's / Bing's knowledge graph.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_URL = `${SITE_URL}/logo-mark.png`;

export const INDEX_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
};

export const OG_BASE = {
  siteName: SITE_NAME,
  locale: "en_US",
};

export function publisherSchema() {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: LOGO_URL },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path === "/" ? "" : it.path}`,
    })),
  };
}
