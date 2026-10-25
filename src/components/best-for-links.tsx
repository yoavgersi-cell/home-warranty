import Link from "next/link";
import { Droplets, Wind, Zap, Utensils, ShieldCheck, BadgeDollarSign } from "lucide-react";

// "Best home warranty for..." hub on the homepage - internal links to the
// item- and need-specific guides that match long-tail search queries.
const ITEMS = [
  { href: "/articles/best-home-warranty-for-water-heaters", label: "Water heaters", desc: "Tank vs tankless coverage, caps and code costs", icon: Droplets },
  { href: "/articles/best-home-warranty-for-heat-pumps", label: "Heat pumps", desc: "HVAC limits, refrigerant and system-type caps", icon: Wind },
  { href: "/articles/best-home-warranty-for-electrical-systems", label: "Electrical systems", desc: "Panels, wiring, outlets and common exclusions", icon: Zap },
  { href: "/articles/best-home-warranty-for-dishwashers", label: "Dishwashers & appliances", desc: "Per-appliance caps and what's excluded", icon: Utensils },
  { href: "/articles/most-comprehensive-home-warranty", label: "Most comprehensive", desc: "Top-tier plans with the broadest coverage", icon: ShieldCheck },
  { href: "/articles/best-home-warranty-no-deductible", label: "No / low deductible", desc: "The lowest service call fees and how to choose", icon: BadgeDollarSign },
];

export function BestForLinks() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 pb-6 pt-4" aria-labelledby="best-for-heading">
      <h2 id="best-for-heading" className="mb-1.5 text-[22px] font-bold text-[#191919]">
        Best Home Warranty For...
      </h2>
      <p className="mb-4 text-[14px] text-gray-500">Find the right plan for the system or appliance you&apos;re most worried about.</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map(({ href, label, desc, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-[#F08A3C]/50 hover:bg-[#FFF8F2]"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF1E6]">
              <Icon className="h-[18px] w-[18px] text-[#C2570C]" strokeWidth={2} />
            </span>
            <span>
              <span className="block text-[15px] font-bold text-[#191919]">Best home warranty for {label.toLowerCase()}</span>
              <span className="block text-[13px] text-gray-500">{desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
