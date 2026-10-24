import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";
import { part4 } from "./part4";
import { part5 } from "./part5";
import { part6 } from "./part6";
import { part7 } from "./part7";

// Deep dive: the AC refrigerant transition (R-410A to R-454B/R-32) and home
// warranties. Researched October 2026 from the Federal Register, EPA, DOE,
// IRS, HVAC trade press, manufacturers and the companies' own sample
// contracts. Notable: EPA's final rule of May 26, 2026 (effective July 27,
// 2026) removed the Jan 1, 2026 installation deadline for pre-2025 R-410A
// components - many sources online are outdated on this.
export const refrigerantTransitionGuide: ArticleData = {
  slug: "r-410a-phase-out-home-warranty",
  title: "R-410A Phase-Out and Home Warranties: What's Covered in 2026",
  description:
    "The AC refrigerant switch to R-454B and R-32, the 2026 EPA rule change, rising repair costs, and how 7 home warranty companies cover refrigerant and upgrades.",
  category: "Guides",
  readTime: "55 min read",
  publishedAt: "2026-10-24",
  updatedAt: "2026-10-24",
  heroColor: "#FDE1CB",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "Since January 1, 2025, new US residential AC systems can't use refrigerants with a GWP of 700 or more, ruling out R-410A; new systems use R-454B or R-32, which aren't interchangeable with R-410A.",
    "Existing R-410A systems can be repaired and recharged indefinitely, and an EPA rule effective July 27, 2026 removed the deadline for installing systems built from pre-2025 R-410A components.",
    "Many home warranties cap refrigerant at about $10 per pound, cover upgrades only within the AC limit (often around $5,000), and pay cash at their own cost - so a full conversion can leave a large balance.",
    "First American (100% refrigerant on Premium and real estate plans) and American Home Shield (SEER and refrigerant-standard upgrades covered; all refrigerant on ShieldPlatinum) have the strongest published AC refrigerant terms.",
  ],
  sections: [...part1, ...part2, ...part3, ...part7, ...part4, ...part6, ...part5],
};
