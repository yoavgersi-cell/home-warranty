import { BookOpen } from "lucide-react";

// Authoritative outgoing citations, per vertical. Every entry is a real,
// verifiable source (regulator press releases, SEC filings, the companies' own
// plan and contract pages) - never invent or approximate a citation. Newest
// regulatory sources are listed first. Rendered as a "Sources" section on
// articles, reviews and comparisons so pages visibly ground their claims.
export interface MedicalSource {
  label: string;
  publisher: string;
  href: string;
}

export const SOURCES_BY_VERTICAL: Record<string, MedicalSource[]> = {
  "home-warranty": [
    {
      label: "Attorney General Mayes Announces $11.8 Million Settlement with Choice Home Warranty",
      publisher: "Arizona Attorney General - February 2026",
      href: "https://www.azag.gov/press-release/attorney-general-mayes-announces-118-million-settlement-choice-home-warranty",
    },
    {
      label: "Frontdoor, Inc. Completes Acquisition of 2-10 Home Buyers Warranty",
      publisher: "Frontdoor, Inc. via Business Wire - December 2024",
      href: "https://www.businesswire.com/news/home/20241219129865/en/Frontdoor-Inc.-Completes-Acquisition-of-2-10-Home-Buyers-Warranty-and-Pricing-of-Previously-Announced-$1.47-Billion-Credit-Facility",
    },
    {
      label: "Frontdoor, Inc. Quarterly Report (Form 10-Q), Q2 2026",
      publisher: "U.S. Securities and Exchange Commission (EDGAR)",
      href: "https://www.sec.gov/Archives/edgar/data/0001727263/000172726326000014/ftdr-20260630.htm",
    },
    {
      label: "American Home Shield plans",
      publisher: "American Home Shield",
      href: "https://www.ahs.com/plans/",
    },
    {
      label: "Choice Home Warranty user agreement",
      publisher: "Choice Home Warranty",
      href: "https://www.choicehomewarranty.com/user-agreement/",
    },
    {
      label: "Select Home Warranty terms and conditions",
      publisher: "Select Home Warranty",
      href: "https://www.selecthomewarranty.com/terms-and-conditions",
    },
    {
      label: "The Home Service Club pricing and plans",
      publisher: "The Home Service Club",
      href: "https://hscwarranty.com/pricing-and-plans/",
    },
  ],
};

// Compact citation list for the bottom of YMYL content pages. Renders nothing
// for verticals without a curated source list yet.
export function MedicalSources({ vertical }: { vertical: string }) {
  const sources = SOURCES_BY_VERTICAL[vertical];
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
      <div className="mb-3 flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-[#1D4ED8]" strokeWidth={2} />
        <h2 className="text-[15px] font-bold uppercase tracking-[0.05em] text-[#191919]">
          Sources &amp; references
        </h2>
      </div>
      <p className="mb-4 text-[13px] leading-relaxed text-gray-500">
        Regulatory and ownership facts on this page come from public records. Pricing, plan and
        contract details come from each provider&apos;s published information. This content is for
        information only and is not legal, insurance or financial advice - always read the full
        contract before buying a plan.
      </p>
      <ol className="space-y-2">
        {sources.map((s, i) => (
          <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed">
            <span className="shrink-0 font-semibold text-gray-500">{i + 1}.</span>
            <span className="text-gray-600">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#1D4ED8] underline underline-offset-2 hover:text-[#1E3A8A]"
              >
                {s.label}
              </a>{" "}
              <span className="text-gray-500">- {s.publisher}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

// One-line affiliate disclosure under the byline, above the first affiliate
// link (FTC: clear, conspicuous, before the links). Deliberately compact - the
// "not medical advice" disclaimer lives once at the bottom of these pages
// (SourcesMethodology footer, or the MedicalSources intro below) instead of
// being repeated here.
export function TrustDisclosure({ disclaimerHref }: { disclaimerHref: string }) {
  return (
    <p className="mt-2.5 max-w-[720px] text-[11.5px] leading-[1.55] text-gray-500 sm:mt-3 sm:text-[12px]">
      We may earn a commission from links on this page - it never affects our rankings (
      <a href={disclaimerHref} className="font-medium text-[#1D4ED8] hover:underline">
        how we stay objective
      </a>
      ).
    </p>
  );
}
