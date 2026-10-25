import { REVIEWERS, reviewerDisplayName, reviewerPath, reviewerPersonSchema } from "@/data/reviewers";
import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Users, Award, BookOpen, Search, BarChart3 } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";

export const revalidate = 60;

export const metadata: Metadata = {
  title: { absolute: "About Top Home Warranty - Mission, Team & Methodology" },
  description:
    "How thetophomewarranty.com independently ranks and reviews home warranty companies: our editorial methodology, review process and commitment to unbiased comparisons.",
  alternates: {
    canonical: "https://www.thetophomewarranty.com/about",
  },
};

export default async function AboutPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "thetophomewarranty.com",
    url: "https://www.thetophomewarranty.com",
    employee: [
      ...REVIEWERS.map(reviewerPersonSchema),
      ...experts.map((e) => ({
        "@type": "Person",
        name: e.credentials ? `${e.name}, ${e.credentials}` : e.name,
        jobTitle: e.role,
        description: e.bio,
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            About Top Home Warranty
          </h1>
          <p className="mt-3 max-w-[600px] text-[16px] leading-relaxed text-gray-500">
            We help homeowners, buyers and sellers make informed decisions about home
            warranties by independently comparing companies on coverage, pricing,
            claims service and contract terms.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Mission */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our Mission</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            Home warranties promise to take the sting out of a broken furnace, water heater or
            refrigerator - but every company words its contracts differently. Coverage caps, service
            call fees, exclusions and claim processes vary widely, and the fine print is where most
            disappointment starts.
          </p>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            Top Home Warranty exists to simplify this decision. We independently research,
            compare, and review every major provider so you can find the right fit for your
            home, budget, and risk tolerance - without spending hours doing the research yourself.
          </p>
        </section>

        {/* What we do - icons grid */}
        <section className="mb-12">
          <h2 className="mb-6 text-[22px] font-bold text-[#191919]">What We Do</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Search, title: "Research Providers", desc: "We evaluate every major home warranty company on pricing, coverage, contract terms, and claims experience." },
              { icon: BarChart3, title: "Compare Side by Side", desc: "Our comparison tools let you see exactly how providers differ on the factors that matter most to you." },
              { icon: BookOpen, title: "Educate Homeowners", desc: "Our articles and guides help you understand what home warranties cover, what they cost, why claims get denied, and how to file one." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F08A3C]/5">
                  <Icon className="h-5 w-5 text-[#C2570C]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1 text-[15px] font-bold text-[#191919]">{title}</h3>
                <p className="text-[13px] leading-relaxed text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert review */}
        {REVIEWERS.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Expert review</h2>
          <div className="space-y-3">
            {REVIEWERS.map((r) => (
              <div key={r.slug} className="flex flex-col gap-4 rounded-xl border border-[#E5E5E5] bg-white p-5 sm:flex-row sm:items-start">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.image.webp} alt={`${r.name}, ${r.jobTitle}`} width={88} height={88} className="h-[88px] w-[88px] shrink-0 rounded-xl object-cover" />
                <div className="min-w-0">
                  <p className="text-[16px] font-bold text-[#191919]">{reviewerDisplayName(r)}</p>
                  <p className="text-[13px] text-gray-500">{r.jobTitle} · {r.headline}</p>
                  <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{r.shortBio}</p>
                  <p className="mt-3 flex flex-wrap gap-x-4 text-[13.5px] font-semibold">
                    <Link href={reviewerPath(r)} className="text-[#C2570C] hover:underline">Full profile</Link>
                    <Link href="/editorial-policy" className="text-[#C2570C] hover:underline">How we review</Link>
                    {r.linkedin && (
                      <a href={r.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#C2570C] hover:underline">LinkedIn</a>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* Editorial team */}
        <ExpertTeam experts={experts} />

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How We Rank Providers</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            Our rankings are based on a weighted evaluation across six core categories.
            We update our assessments regularly as companies change their pricing, plans,
            and contract terms.
          </p>
          <div className="space-y-4">
            {[
              { category: "Coverage & Contract Terms", weight: "25%", desc: "Which systems and appliances each plan covers, per-item and per-contract caps, clarity of exclusions, and how pre-existing and maintenance-related failures are handled." },
              { category: "Pricing & Value", weight: "20%", desc: "Monthly and annual premiums, service call fee options, add-on costs, and how transparent pricing is before checkout." },
              { category: "Claims Experience", weight: "20%", desc: "How claims are filed, 24/7 availability, time to dispatch a technician, contractor quality, and how denials and cash-outs are handled." },
              { category: "Customer Reputation", weight: "15%", desc: "Trustpilot and BBB ratings, complaint patterns, regulatory history, and years in business." },
              { category: "Plan Flexibility", weight: "10%", desc: "Choice of plans and add-ons, ability to pick your own contractor, workmanship guarantees, and monthly vs annual billing." },
              { category: "Availability & Support", weight: "10%", desc: "States served, cancellation policy, customer support responsiveness, and online or app-based account tools." },
            ].map(({ category, weight, desc }) => (
              <div key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <span className="shrink-0 rounded bg-[#F08A3C] px-2.5 py-1 text-[12px] font-bold text-white">{weight}</span>
                <div>
                  <p className="text-[14px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[13px] text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[15px] leading-[1.75] text-gray-600">
            Want the full picture? Read our detailed{" "}
            <Link href="/how-we-rank" className="font-semibold text-[#C2570C] hover:underline">
              ranking &amp; review methodology
            </Link>{" "}
            - the factors we score, where our data comes from, and how we pick winners.
          </p>
        </section>

        {/* Editorial standards */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Editorial Standards</h2>
          <div className="space-y-4 text-[16px] leading-[1.75] text-gray-600">
            <p>
              <strong className="text-[#191919]">Independence.</strong> Our editorial team operates
              independently. Provider rankings and reviews are determined by our evaluation criteria,
              not by commercial relationships.
            </p>
            <p>
              <strong className="text-[#191919]">Transparency.</strong> We clearly disclose that some
              providers compensate us through affiliate partnerships. This may affect how providers are
              displayed but does not influence our ratings or review content.
            </p>
            <p>
              <strong className="text-[#191919]">Contract-based.</strong> Our reviews are grounded in each
              company&apos;s published plans, sample contracts and pricing, plus state regulator
              information and customer feedback - not marketing claims.
            </p>
            <p>
              <strong className="text-[#191919]">Regular updates.</strong> We continuously review and
              update our rankings, reviews, and articles as companies change their offerings, contracts
              are revised, and the market evolves.
            </p>
          </div>
        </section>

        {/* Trust signals */}
        <section className="mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Users className="h-8 w-8 shrink-0 text-[#C2570C]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">6</p>
                <p className="text-[12px] text-gray-500">Weighted ranking categories</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Award className="h-8 w-8 shrink-0 text-[#C2570C]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">{config.providers.length}</p>
                <p className="text-[12px] text-gray-500">Providers independently reviewed</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <Shield className="h-8 w-8 shrink-0 text-[#C2570C]" strokeWidth={1.5} />
              <div>
                <p className="text-[18px] font-extrabold text-[#191919]">6+</p>
                <p className="text-[12px] text-gray-500">In-depth guides published</p>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[15px] leading-[1.75] text-gray-600">
              Top Home Warranty is not a home warranty company and does not sell, underwrite or
              administer service contracts. The information on this site is for general information and
              comparison purposes only and is not legal, insurance or financial advice. Home warranty
              coverage, prices, limits and exclusions vary by company, plan, state and ZIP code, and
              change over time. Your signed contract - not our summary - determines what is covered.
              Always read the full sample contract before you buy.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[16px] font-bold text-[#191919]">Ready to compare providers?</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex h-[44px] items-center justify-center rounded-lg bg-[#F08A3C] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#DE7429]"
            >
              Compare Providers
            </Link>
            <Link
              href="/reviews"
              className="inline-flex h-[44px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-[14px] font-semibold text-[#191919] transition-colors hover:bg-gray-50"
            >
              Read Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
