import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";

// Deep rewrite of "Is a home warranty worth it?" (same slug as the short
// Oct 12 version it replaces). Built on Frontdoor's SEC filings, Fed SHED
// 2025, Bankrate, Angi and other 2025-2026 cost guides, NAHB/InterNACHI
// lifespans, Consumer Reports/FTC guidance, and our 351-review study.
export const worthItGuide: ArticleData = {
  slug: "is-a-home-warranty-worth-it",
  title: "Is a Home Warranty Worth It? The Honest Math (2026)",
  description:
    "When a home warranty pays off and when it doesn't, using real repair costs, the industry's own financials and 351 customer reviews - plus a 10-minute test.",
  category: "Buying",
  readTime: "24 min read",
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-29",
  heroColor: "#FFF3EA",
  author: "Top Home Warranty Editorial Team",
  keyTakeawaysTitle: "⚡ Key Takeaways & Quick Verdict",
  keyTakeaways: [
    "On average, home warranty customers pay in more than they get back: Frontdoor, the largest company, spent roughly 45 cents of each revenue dollar on delivering service in 2025 (55% gross margin).",
    "A warranty pays off on big-system replacements - an AC (~$6,000) or furnace (~$4,800) - but loses money in years with no claims or only small repairs, which usually cost less than a year of premiums.",
    "It's most worth it when two or more major systems are past 75% of their expected life and a $5,000 surprise would go on a credit card; it's rarely worth it for new homes, high-end appliances or people with a solid repair fund.",
    "Caps and the cash-out formula matter more than price: most companies pay cash at their own cost, and reviewers reported offers like $406 toward a $1,799 refrigerator.",
  ],
  sections: [...part1, ...part3, ...part4, ...part5, ...part6],
};
