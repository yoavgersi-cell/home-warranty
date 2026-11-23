import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";

// "Home warranty coverage limits" (Nov 2026). Search Console showed AI-style
// questions ranking near page 1 with no dedicated page: "what home warranty
// plans have worthwhile coverage limits?" (~4), "what providers offer the
// highest appliance replacement limits?" (~9). Edge vs competitor pages: all
// four limit types explained, item-by-item limits for 7 companies with
// conflicts called out, limits vs 2026 repair/replacement costs, refrigerant
// math, cash-in-lieu valuation compared, sub-limits, state disclosure rules.
export const coverageLimitsGuide: ArticleData = {
  slug: "home-warranty-coverage-limits",
  title: "Home Warranty Coverage Limits Compared (2026): What Each Pays",
  description:
    "Home warranty coverage limits for 7 companies: HVAC, appliance, refrigerant and annual caps, cash-out rules, and how limits compare with 2026 repair costs.",
  category: "Guides",
  readTime: "25 min read",
  publishedAt: "2026-11-23",
  updatedAt: "2026-11-23",
  heroColor: "#EAF4FF",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "A coverage limit is the most a plan pays for a repair or replacement; most plans have per-item limits, sub-limits (refrigerant, code, access) and often an annual total cap.",
    "HVAC limits cluster at $3,000-$5,000 while a central AC replacement averages about $6,000 (Angi, 2026) - so limits cover repairs well but often only part of an HVAC replacement.",
    "First American has the highest limits where sold (no dollar cap on conventional HVAC, $3,500-$7,000 per appliance); AHS caps HVAC at $5,000 per system; Choice pays up to $3,000 per item; Select's ~$500 caps are the lowest.",
    "How cash payouts are valued matters as much as the limit: company cost, wholesale or depreciated value - check the cash-in-lieu clause and the refrigerant limit before you buy.",
  ],
  topProviders: { afterSection: 0, limit: 1 },
  sections: [...part1, ...part2, ...part3, ...part4],
};
