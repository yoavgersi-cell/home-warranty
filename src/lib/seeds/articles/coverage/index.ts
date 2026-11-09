import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";
import { part7 } from "./part7";
import { part7b } from "./part7b";
import { part8 } from "./part8";

// "What does a home warranty cover?" hub (Nov 2026). Search Console showed a
// coverage cluster with no dedicated page - "what is home warranty coverage",
// "what does a 1 year home warranty cover", "does home warranty cover
// electrical / water heater / dishwasher", "do home warranties cover
// appliances" - ranking ~30-90. Item-by-item coverage for the seven companies
// we track, A-to-Z checklist, limits, exclusions, who-pays routing and FAQs.
// Links out to the electrical, water heater, heat pump and dishwasher guides.
export const coverageGuide: ArticleData = {
  slug: "what-does-a-home-warranty-cover",
  title: "What Does a Home Warranty Cover? 2026 Item-by-Item Guide",
  description:
    "What a home warranty covers and doesn't: 50+ items rated, plan-by-plan coverage for 7 companies, limits, add-ons, exclusions and real claim examples.",
  category: "Guides",
  readTime: "50 min read",
  publishedAt: "2026-11-09",
  updatedAt: "2026-11-09",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "A home warranty covers repair or replacement of major systems (heating, AC, ductwork, plumbing, electrical, water heater) and appliances (refrigerator, range, dishwasher, built-in microwave, disposal, washer, dryer) that fail from normal wear and tear.",
    "It doesn't cover the roof, foundation, windows, water damage, mold, storm or fire damage, pre-existing problems or failures from missed maintenance; pools, well pumps, septic and roof leaks are add-ons.",
    "Limits decide payouts: per-appliance caps range from about $500 (Select) to $7,000 (First American Premium), and HVAC limits from about $3,000 to no dollar limit for conventional systems at First American.",
    "In This Old House's January 2026 survey of 2,000 customers, 29% of denials were for pre-existing conditions, 29% for items not covered and 20% for costs over the limit - all checkable in the sample contract before you buy.",
  ],
  topProviders: { afterSection: 0, title: "Our top 3 home warranty companies" },
  sections: [...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7, ...part7b, ...part8],
};
