import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";

// Trending news analysis (Nov 2026): the state of US homeowners insurance -
// NAIC's first national homeowners analysis (Aug 2026), MediaAlpha's State of
// Home Insurance (Nov 10, 2026), the Nov 3 commissioner elections, reinsurance
// softening, hail losses, roof/deductible/imagery changes, NFIP extension, and
// a homeowner action plan. Bridges to the site's warranty-vs-insurance and
// coverage guides; top-3 cards sit after "Where home warranties fit".
export const insuranceTrendsGuide: ArticleData = {
  slug: "home-insurance-trends-2026",
  title: "Home Insurance in 2026: Prices, Non-Renewals & What's Next",
  description:
    "US home insurance in 2026: premiums, non-renewals, insurer profits, roof and deductible changes, the new commissioners and a 10-step plan for homeowners.",
  category: "Guides",
  readTime: "30 min read",
  publishedAt: "2026-11-13",
  updatedAt: "2026-11-13",
  heroColor: "#FFF3EA",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "Premiums are still rising but more slowly: average renewal increases fell to 10.6% in the first half of 2026 from 19.4% in 2025 (Matic), and Insurify projects about +4% for 2026 after +12% in 2025.",
    "Non-renewals have spread nationwide: the NAIC's first national analysis found insurer-initiated non-renewals up 96% to 216% across regions from 2018 to 2024.",
    "Insurers earned a homeowners underwriting profit of about $16.5 billion in 2025, the first since 2019 (AM Best), and raised home insurance ad spending 84% in 2026 (MediaAlpha) - a good time to shop.",
    "Policies cover less: percentage deductibles, roofs paid at depreciated value and cosmetic exclusions are spreading, and wear and tear was never covered - plan for those costs separately.",
  ],
  topProviders: { afterSection: 16, title: "Top-rated home warranty companies" },
  sections: [...part1, ...part2, ...part3],
};
