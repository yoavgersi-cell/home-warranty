import type { ArticleData } from "@/lib/config";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { part3 } from "./part3";

// "Home warranty scam letters" (Nov 2026). Planned AI-question series topic
// with a large long-tail cluster ("final notice home warranty letter scam",
// "home warranty division letter", "fannie mae home warranty letter", "are
// home warranty letters a scam", "letter with check") and no page on the
// site. Edge vs competitor pages: annotated letter anatomy, why senders know
// your loan, legal vs fraud with enforcement table (CT AG 2023, Fannie Mae
// 2025 suit, FL OIR, FCC), 12-point checklist, real-vs-fake table, license
// lookups, payment-recovery steps (FCBA timelines), reporting and opt-outs.
export const scamLettersGuide: ArticleData = {
  slug: "home-warranty-scam-letters",
  title: "Home Warranty Scam Letters: How to Tell If It's Real (2026)",
  description:
    "Got a 'final notice' home warranty letter citing your lender? How to spot scam mailers, why they know your loan, what to do if you paid, and how to report them.",
  category: "Guides",
  readTime: "20 min read",
  publishedAt: "2026-11-26",
  updatedAt: "2026-11-26",
  heroColor: "#FFF4E5",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "'Final notice' home warranty letters that cite your lender, loan amount or county deed records are marketing mailers; your mortgage lender doesn't send them and no lender requires a home warranty.",
    "The personal details come from public property records; fine print usually says the sender isn't affiliated with your lender.",
    "Regulators in at least eight states, the FTC and BBB have warned about these letters; Connecticut settled with one marketer in 2023 and Fannie Mae sued four in 2025.",
    "If you paid by card, dispute in writing within 60 days of the statement; if you want a warranty, buy directly from a company you've researched.",
  ],
  topProviders: { afterSection: 0, limit: 1 },
  sections: [...part1, ...part2, ...part3],
};
