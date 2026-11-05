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
import { part10 } from "./part10";
import { part11 } from "./part11";

// Deep rewrite of "Home warranty vs homeowners insurance" (same slug as the
// short Oct 12 version it replaces), framed around the 2024-2026 insurance
// cost squeeze. Built on ISO HO 00 03 language, endorsement terms, NAIC/
// Treasury/Senate/S&P/ICE/III data, regulator guidance and warranty contracts.
export const warrantyVsInsuranceGuide: ArticleData = {
  slug: "home-warranty-vs-homeowners-insurance",
  title: "Home Warranty vs Homeowners Insurance (2026): Who Pays for What",
  description:
    "What homeowners insurance and home warranties each cover, a 34-failure coverage map, the add-ons that fill the gaps, and how 2026 insurance costs change it.",
  category: "Guides",
  readTime: "50 min read",
  publishedAt: "2026-10-12",
  updatedAt: "2026-10-31",
  heroColor: "#FDE1CB",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "Homeowners insurance covers sudden damage (fire, wind, hail, theft, burst pipes) and liability, but the standard policy excludes 'wear and tear' and 'mechanical breakdown' - so it almost never pays to fix a worn-out furnace, AC or water heater.",
    "A home warranty covers systems and appliances that wear out, but never the damage they cause: when a water heater bursts, insurance typically pays for the soaked floors and walls, and a warranty pays for the heater.",
    "Some failures fall through both: slow leaks and mold, sewer backups, and buried water and sewer lines - gaps that low-cost endorsements (water backup, service line) are designed to fill.",
    "With average premiums up about 46% since 2021 (Insurify) and deductibles rising, more failures fall below the deductible - but a home warranty is never a substitute for insurance.",
  ],
  sections: [...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part9, ...part7, ...part10, ...part11, ...part8],
};
