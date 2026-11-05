import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part3b } from "./part3b";
import { part4 } from "./part4";
import { part5 } from "./part5";

// Deep rewrite of the "appliance insurance" guide (same slug). Search Console
// (Nov 2026) showed this cluster - "appliance insurance", "home appliance
// insurance", "best appliance insurance" - with ~280 impressions/28 days at
// ~position 80. Covers all six real options: home warranty appliance plans,
// manufacturer warranties, retailer/manufacturer extended warranties, credit
// card benefits, homeowners equipment breakdown endorsements and utility
// plans, plus costs, failure rates, consumer rights and right-to-repair laws.
export const applianceInsuranceGuide: ArticleData = {
  slug: "best-appliance-insurance",
  title: "Best Appliance Insurance (2026): Every Option Compared",
  description:
    "Home appliance insurance explained: home warranties, store and maker extended warranties, credit card coverage and insurance add-ons, compared.",
  category: "Guides",
  readTime: "30 min read",
  publishedAt: "2026-10-25",
  updatedAt: "2026-11-05",
  heroColor: "#FFF3EA",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "There's no standard 'appliance insurance' in the US: the real options are home warranty appliance plans, store or manufacturer extended warranties, credit card extended warranties, an equipment breakdown endorsement on your homeowners policy, utility repair plans, or a repair fund.",
    "Home warranty appliance plans cost about $35-$60 a month plus $65-$125 per claim and cover wear and tear on several appliances - but per-appliance limits range from about $500 to $7,000.",
    "Extended warranties average about 14% of an appliance's price (WarrantyWeek, 2026); Consumer Reports found buyers who skipped them spent a median of only about $26 more on repairs.",
    "Homeowners equipment breakdown coverage costs about $25-$50 a year but excludes wear and tear - the way most appliances fail.",
  ],
  sections: [...part1, ...part2, ...part3, ...part3b, ...part4, ...part5],
};
