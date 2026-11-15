import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part2b } from "./part2b";
import { part3 } from "./part3";
import { part4 } from "./part4";

// Deep rewrite (same slug) of the buyers/sellers guide, Nov 2026. Search
// Console showed "best home warranty for sellers" (~pos 31), "home buyer
// warranty", "buyers home warranty" and "is a home warranty required at
// closing" with impressions but weak positions. Edge vs competitor pages:
// real estate vs consumer plan terms, seller-coverage comparison, the
// inspection/pre-existing interplay, RESPA s.8 / HUD 2010 rule and litigation
// history, state purchase-contract treatment (TX 7H + RSC-4, AZ AAR, CA),
// a concession negotiation table and 2026 market data (NAR, Redfin, NAHB).
export const buyersSellersGuide: ArticleData = {
  slug: "home-warranty-for-home-buyers-and-sellers",
  title: "Best Home Warranty for Sellers & Buyers (2026 Expert Guide)",
  description:
    "Home warranties in a home sale: who pays, real estate plan costs, seller listing coverage compared, inspection and pre-existing rules, and how to negotiate.",
  category: "Buying",
  readTime: "35 min read",
  publishedAt: "2026-10-12",
  updatedAt: "2026-11-15",
  heroColor: "#FFF3EA",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "A real estate home warranty usually costs about $400-$850 for a year, is often seller-paid at closing, and starts covering the buyer on closing day - typically with no 30-day waiting period.",
    "Listing coverage protects the seller while the home is on the market, but terms differ: AHS includes HVAC (current $1,500 limit), while First American, Choice, HWA and Old Republic make HVAC optional.",
    "Problems found in the inspection are excluded as pre-existing; some real estate plans cover pre-existing problems no inspection could detect - so negotiate known issues separately and keep the report.",
    "A home warranty is never required by a lender, the buyer can choose the company, and federal rules bar warranty companies from paying agents for referrals.",
  ],
  topProviders: { afterSection: 0, limit: 2, title: "Our top 2 home warranty companies" },
  sections: [...part1, ...part2, ...part2b, ...part3, ...part4],
};
