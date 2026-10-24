import Link from "next/link";
import { getConfig } from "@/lib/config-store";

// Single-site home warranty footer. Category links are absolute site routes. Popular
// comparisons are resolved from live config, so an entry that isn't a real
// battle is silently dropped (the footer never renders a dead link).
const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Reviews",
    links: [
      { label: "Choice Home Warranty", href: "/reviews/choice-home-warranty" },
      { label: "American Home Shield", href: "/reviews/american-home-shield" },
      { label: "Select Home Warranty", href: "/reviews/select-home-warranty" },
      { label: "First American", href: "/reviews/first-american" },
      { label: "Home Warranty of America", href: "/reviews/home-warranty-of-america" },
      { label: "The Home Service Club", href: "/reviews/home-service-club" },
      { label: "2-10 Home Buyers Warranty", href: "/reviews/2-10-home-buyers-warranty" },
      { label: "All Reviews", href: "/reviews" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Complete Home Warranty Guide", href: "/articles/home-warranty-guide" },
      { label: "R-410A Phase-Out & Warranties", href: "/articles/r-410a-phase-out-home-warranty" },
      { label: "What Is a Home Warranty?", href: "/articles/what-is-a-home-warranty" },
      { label: "Is a Home Warranty Worth It?", href: "/articles/is-a-home-warranty-worth-it" },
      { label: "Home Warranty Cost", href: "/articles/how-much-does-a-home-warranty-cost" },
      { label: "Warranty vs Insurance", href: "/articles/home-warranty-vs-homeowners-insurance" },
      { label: "Why Claims Get Denied", href: "/articles/why-home-warranty-claims-get-denied" },
      { label: "How to File a Claim", href: "/articles/how-to-file-a-home-warranty-claim" },
      { label: "All Guides", href: "/articles" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "How We Rank", href: "/how-we-rank" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Contact", href: "/contact" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

async function featuredComparisons(): Promise<{ label: string; href: string }[]> {
  try {
    const cfg = await getConfig();
    const nameOf = (id: string) => cfg.providers.find((p) => p.id === id)?.name ?? id;
    return (cfg.battles ?? []).slice(0, 5).map((b) => ({
      label: b.matchupLabel || `${nameOf(b.provider1Id)} vs ${nameOf(b.provider2Id)}`,
      href: `/${b.slug}`,
    }));
  } catch {
    return [];
  }
}

export async function Footer() {
  const comparisons = await featuredComparisons();
  const columns = [
    ...COLUMNS,
    ...(comparisons.length > 0 ? [{ title: "Popular Comparisons", links: comparisons }] : []),
  ];

  return (
    <footer className="mt-auto border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {/* Brand blurb */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <p className="text-[13px] leading-relaxed text-gray-500">
              <span className="font-bold text-[#C2570C]">Top Home Warranty</span> is an independent comparison
              publisher for home warranty plans and companies.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="mb-2.5 text-[12px] font-bold uppercase tracking-wider text-[#191919]">{col.title}</h2>
              <nav className="space-y-1.5">
                {col.links.map((l) => (
                  <Link key={l.label} href={l.href} className="block text-[13px] text-gray-500 hover:text-[#C2570C]">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-5">
          <p className="mb-4 text-xs text-gray-500">
            <strong className="text-gray-500">Affiliate Disclosure:</strong> Top Home Warranty may earn a commission
            when you click on links and make a purchase. This does not affect our rankings or reviews. We are
            committed to providing honest, independent comparisons to help you make informed decisions.
          </p>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[12px] text-gray-500">
              &copy; {new Date().getFullYear()} Top Home Warranty. All rights reserved.
            </p>
            <p className="text-[11px] text-gray-500">
              tophomewarranty.com is not a home warranty company. Always read the full contract before buying.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
