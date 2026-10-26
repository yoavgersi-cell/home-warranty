import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";
import { part7 } from "./part7";
import { part8 } from "./part8";
import { part9 } from "./part9";

// Deep dive: denied and underpaid home warranty claims. Built on our original
// analysis of 351 Trustpilot reviews (captured Oct 26, 2026; same data as
// src/lib/seeds/trustpilot/*), published sample contracts, state regulators,
// AG enforcement actions, the FTC/CFPB and Frontdoor filings.
export const claimDeniedGuide: ArticleData = {
  slug: "home-warranty-claim-denied",
  title: "Home Warranty Claim Denied? How to Fight Back (2026)",
  description:
    "Why home warranty claims get denied or lowballed, from 351 recent reviews and 7 contracts - plus how to appeal, negotiate cash-outs and file complaints.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-26",
  updatedAt: "2026-10-26",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "In 351 recent Trustpilot reviews of five home warranty companies, the top complaints were slow or unresolved repairs (52), denied claims (47), hard-to-reach service (42), fees paid with little repaired (24) and low cash-out offers (20).",
    "Most denials trace to pre-existing conditions, missing maintenance, parts or areas the contract excludes, or coverage caps - and pre-existing denials are the most worth challenging when your plan covers undetectable conditions.",
    "Most contracts calculate cash-in-lieu payments at the company's own cost, not retail; 2-10's sample contract is an exception, using an estimate of local retail cost.",
    "To fight a denial: get the diagnosis and reason in writing, appeal in writing with evidence, request a second diagnosis, then escalate to your state regulator, the BBB or a card dispute.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7, ...part8, ...part9],
};
