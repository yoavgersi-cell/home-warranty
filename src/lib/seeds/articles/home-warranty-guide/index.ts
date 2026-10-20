import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";

// Pillar guide: the site's long-form, hub article on home warranties. Every
// figure is sourced from the same researched facts as the provider reviews
// (see src/lib/seeds/home-warranty.ts); prices and caps are approximate and
// checked October 2026. Split into parts only to keep files manageable.
export const homeWarrantyGuide: ArticleData = {
  slug: "home-warranty-guide",
  title: "The Complete Home Warranty Guide (2026): Cost, Coverage & Claims",
  description:
    "Everything to know before buying a home warranty in 2026: what's covered, real costs and service fees, coverage caps, exclusions, claims, denials and the best companies.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-20",
  updatedAt: "2026-10-20",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "A home warranty is a service contract that repairs or replaces covered systems and appliances that fail from normal wear and tear - it is not homeowners insurance.",
    "Most plans cost about $300-$700 a year plus a $60-$150 service call fee per claim; coverage usually starts after a 30-day waiting period.",
    "Coverage caps decide your payout: they range from about $500 per item to $4,000+ per appliance and $5,000 for HVAC, depending on the company and plan.",
    "Most denials come from pre-existing conditions, missing maintenance, code upgrades and amounts over the cap - read those clauses and keep maintenance records.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part6, ...part5],
};
