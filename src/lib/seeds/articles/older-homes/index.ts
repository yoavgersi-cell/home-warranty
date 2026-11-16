import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";

// "Best home warranty for older homes" (Nov 2026). Edge vs competitor pages:
// the four contract terms that actually decide older-home claims (age
// language, known vs unknown pre-existing, code/permits/modifications,
// depreciation) compared across 7 companies; boiler/steam sub-limits; R-22 and
// SEER/refrigerant-standard upgrades; knob-and-tube, aluminum wiring (CPSC),
// FPE/Zinsco, polybutylene, galvanized and lead service lines (EPA LCRI),
// asbestos/RRP; housing-age data (NAHB/ACS 2024, AHS 2023, RECS) and 2026
// replacement costs (Angi). Top-3 cards show the overall ranking; the text
// gives older-home-specific picks.
export const olderHomesGuide: ArticleData = {
  slug: "best-home-warranty-for-older-homes",
  title: "Best Home Warranty for Older Homes (2026): Expert Picks",
  description:
    "The best home warranties for older homes: age rules, pre-existing and code coverage, boilers, R-22 AC, old wiring and pipes, costs and 7 companies compared.",
  category: "Best For",
  readTime: "30 min read",
  publishedAt: "2026-11-16",
  updatedAt: "2026-11-16",
  heroColor: "#FFF3EA",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "No major company excludes items for age alone - older-home claims are decided by pre-existing condition terms, code and permit coverage, sub-limits on equipment like boilers, and whether replacements are paid at depreciated value.",
    "American Home Shield is our top pick for most older homes (any age, SEER and refrigerant-standard upgrades on HVAC replacement, rust and corrosion covered); First American is best for older HVAC and boilers where sold.",
    "The median US owner-occupied home is 42 years old and about 47% were built before 1980 (NAHB, 2024 ACS) - so HVAC limits matter more than any other number in the contract.",
    "No warranty pays to rewire knob-and-tube or aluminum wiring, replace an outdated panel, repipe or replace a sewer line - budget for those separately.",
  ],
  topProviders: { afterSection: 0, limit: 3, title: "Our top 3 home warranty companies overall" },
  sections: [...part1, ...part2, ...part3],
};
