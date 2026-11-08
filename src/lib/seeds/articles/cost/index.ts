import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part4b } from "./part4b";
import { part5 } from "./part5";
import { part6 } from "./part6";

// Deep rewrite of "How much does a home warranty cost?" (same slug as the
// short Oct 12 version it replaces). 2025-2026 quotes by company and add-on,
// price drivers, fee break-even math, real estate pricing, Frontdoor
// economics, inflation context, cancellation rules and savings tactics.
export const costGuide: ArticleData = {
  slug: "how-much-does-a-home-warranty-cost",
  title: "How Much Does a Home Warranty Cost? 2026 Prices & Fees",
  description:
    "2026 home warranty prices by company, plan and add-on, service fee math, state and home-size factors, real estate plan costs, and 12 ways to pay less.",
  category: "Costs",
  readTime: "22 min read",
  publishedAt: "2026-10-12",
  updatedAt: "2026-11-02",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "Most home warranties cost about $40-$85 a month in 2026 - This Old House's 4,000-quote study averages $56 a month ($672 a year), NerdWallet's 2026 analysis $73 - plus a service fee averaging about $108 per claim.",
    "With add-ons and fees, real spending is higher: $1,200 was the most common annual amount among customers who pay yearly in This Old House's 2026 survey.",
    "A higher service fee lowers the premium by about $10 a month at American Home Shield (break-even at 4.8 claims a year) and about $5 at First American (2.4 claims a year).",
    "Compare true annual cost - premium, add-ons, expected fees and amounts over caps - not the monthly price; the cheapest plans usually have the lowest limits.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part4b, ...part5, ...part6],
};
