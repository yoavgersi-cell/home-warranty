import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Database, ShieldCheck, Scale, Trophy, RefreshCw, Check, X } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { ExpertTeam } from "@/components/expert-team";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LastUpdated } from "@/components/last-updated";
import { CONTENT_LAST_UPDATED } from "@/lib/config";

export const revalidate = 60;

const CANONICAL = "https://www.tophomewarranty.com/how-we-rank";

export const metadata: Metadata = {
  title: { absolute: "How We Rank Home Warranty Companies | Top Home Warranty" },
  description:
    "How we rank home warranty companies: the 6 factors we score, where our data comes from, how we verify prices and caps, and how we pick comparison winners.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How We Rank & Review Home Warranty Companies - Our Methodology",
    description:
      "The factors we score, where our data comes from, how we verify accuracy, and how we pick winners in our home warranty comparisons.",
    url: CANONICAL,
    type: "article",
    images: [{ url: "https://www.tophomewarranty.com/opengraph-image", width: 1200, height: 630 }],
  },
};

const FACTORS = [
  { category: "Coverage & Contract Terms", weight: "25%", desc: "Which systems and appliances each plan covers, per-item and per-contract caps, how clearly exclusions are written, and how pre-existing, code-upgrade and maintenance-related failures are handled." },
  { category: "Pricing & Value", weight: "20%", desc: "Monthly and annual premiums, service call fee options, add-on costs, and how transparent pricing is before checkout - measured against what the plan actually covers." },
  { category: "Claims Experience", weight: "20%", desc: "How claims are filed (online, app, phone, 24/7), time to dispatch, contractor quality, workmanship guarantees, and how replacements and cash-outs are handled." },
  { category: "Customer Reputation", weight: "15%", desc: "Trustpilot and BBB ratings and volume, recurring complaint patterns, regulatory history, and years in business." },
  { category: "Plan Flexibility", weight: "10%", desc: "Range of plans and add-ons (pool/spa, well pump, septic, roof leak, second refrigerator), choice of contractor, and monthly vs annual billing." },
  { category: "Availability & Support", weight: "10%", desc: "States served, cancellation and refund terms, customer support responsiveness, and online account tools." },
];

const METHOD_FAQS = [
  {
    question: "How often are prices updated?",
    answer:
      "Whenever a company changes its published rates or plans. Home warranty prices depend on your ZIP code, home size and service fee, so every figure on this site is an approximate starting point taken from the company's own site or quote flow at our last check - never a personal quote.",
  },
  {
    question: "Does affiliate status affect scores or rankings?",
    answer:
      "Partnerships can affect how companies are displayed, but never the facts we report - caps, exclusions, fees and ratings are stated the same way for partners and non-partners, including mixed or poor customer records.",
  },
  {
    question: "Why do some companies show no customer rating on your pages?",
    answer:
      "Because we could not confirm one, and we never invent or estimate a score. Where no reliable aggregate exists, our pages say so and rely on the company's published contract terms instead.",
  },
  {
    question: "How do you compare pricing between companies?",
    answer:
      "On the same basis wherever possible: a comparable plan tier, the same service fee level, and promotions shown with their conditions (for example free months that require an annual plan). We always point you to the sample contract, because a cheaper plan with low caps can cost more after one big repair.",
  },
];

const SOURCES = [
  { icon: Database, title: "The companies' own materials", desc: "Plans, pricing, service fees, caps and exclusions come from each company's website, quote flow and published sample contracts - so what you read here matches what you'll see when you buy." },
  { icon: ClipboardCheck, title: "Customer reviews and complaints", desc: "We read Trustpilot and Better Business Bureau records to gauge real-world claims experience - dispatch speed, denials, contractor quality and support - not just marketing claims." },
  { icon: Scale, title: "In-house research", desc: "Our editors walk each company's quote flow, compare plans side by side at the same service fee, and track how offers and contracts change over time." },
  { icon: ShieldCheck, title: "Regulators and public records", desc: "Home warranties are regulated state by state. Where relevant we check state regulator information and public enforcement actions - and report only what we can verify." },
];

export default async function HowWeRankPage() {
  const config = await getConfig();
  const experts = config.experts ?? [];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How We Rank & Review Home Warranty Companies - Our Methodology",
    description:
      "Our full methodology for ranking and reviewing home warranty companies: the factors we score, where our data comes from, how we verify accuracy, and how we pick winners.",
    url: CANONICAL,
    ...pageReviewSchema("/how-we-rank"),
    publisher: { "@type": "Organization", name: "tophomewarranty.com", url: "https://www.tophomewarranty.com" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tophomewarranty.com" },
      { "@type": "ListItem", position: 2, name: "How We Rank", item: CANONICAL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: METHOD_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How We Rank" }]} />
          <h1 className="text-[28px] font-extrabold text-[#191919] sm:text-[36px]">
            How We Rank &amp; Review Providers
          </h1>
          <p className="mt-3 max-w-[640px] text-[16px] leading-relaxed text-gray-500">
            Every review and head-to-head comparison on this site is built on the same
            repeatable, contract-first process. Here&rsquo;s exactly how we evaluate each
            home warranty company, where our information comes from, and how we keep it accurate.
          </p>
          <LastUpdated date={CONTENT_LAST_UPDATED} className="mt-4" />
          <MedicalReviewBar path="/how-we-rank" className="mt-4 max-w-[760px]" />
        </div>
      </div>

      <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6">
        {/* Factors */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">The 6 factors we score</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            We rate every provider on a weighted evaluation across six core categories. The
            weighting reflects what matters most when something in your home actually breaks.
          </p>
          <div className="space-y-4">
            {FACTORS.map(({ category, weight, desc }) => (
              <div key={category} className="flex gap-4 rounded-lg border border-gray-200 bg-white p-4">
                <span className="shrink-0 rounded bg-[#F08A3C] px-2.5 py-1 text-[12px] font-bold text-white">{weight}</span>
                <div>
                  <p className="text-[14px] font-bold text-[#191919]">{category}</p>
                  <p className="mt-0.5 text-[13px] text-gray-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Price verification protocol */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How we verify prices</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            Every price on this site comes from each company&rsquo;s own published rates or quote flow,
            and we record four things for each one: the plan tier, the service call fee it was quoted
            with, any promotion and its condition (for example free months on an annual plan), and the
            ZIP code or region used. A number is never published without its condition.
          </p>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            When a provider changes its published pricing, we re-verify against its site and every
            affected page - reviews, head-to-heads and cost guides - is revised, with the
            &ldquo;last updated&rdquo; date refreshed so you always know how current a figure is.
          </p>
        </section>

        {/* What moves a score - the published rubric */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">What earns points - and what costs them</h2>
          <p className="mb-4 text-[16px] leading-[1.75] text-gray-600">
            Within the six weighted factors, these are the specific signals that consistently move a
            provider up or down in our evaluations:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.06em] text-emerald-700">
                <Check className="h-4 w-4" strokeWidth={2.5} /> Earns points
              </p>
              <ul className="space-y-2 text-[14px] leading-relaxed text-gray-800">
                <li>Clear pricing and a published sample contract before checkout</li>
                <li>A large, public customer record (review volume + score)</li>
                <li>High or clearly stated coverage caps on big-ticket systems (HVAC, plumbing)</li>
                <li>Workmanship guarantees on repairs, in writing</li>
                <li>24/7 online claims and fast technician dispatch</li>
                <li>Clean exit terms: clear cancellation and prorated refunds</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-5">
              <p className="mb-3 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.06em] text-amber-700">
                <X className="h-4 w-4" strokeWidth={2.5} /> Costs points
              </p>
              <ul className="space-y-2 text-[14px] leading-relaxed text-gray-800">
                <li>Promotions with conditions buried in the fine print - we publish the condition next to every promo</li>
                <li>No published review aggregate - noted plainly in the review</li>
                <li>Low per-item caps that leave you paying most of a replacement</li>
                <li>Broad exclusions for code upgrades, permits or &ldquo;improper maintenance&rdquo;</li>
                <li>Thin public detail on plan terms, cancellation or contractor standards</li>
                <li>A weak or mixed published review record - we cite the real number even for partners</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integrity rules - the house rules the content actually runs on */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Our review-integrity rules</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="divide-y divide-gray-100 text-[14.5px] leading-[1.75] text-gray-600">
              <p className="p-5"><strong className="text-[#191919]">No invented ratings, ever.</strong> If a provider has no published customer-rating aggregate, our pages say exactly that - we never estimate or fabricate a score. Partner status doesn&rsquo;t change this: we openly discuss a partner&rsquo;s mixed reviews when that&rsquo;s the record.</p>
              <p className="p-5"><strong className="text-[#191919]">Every promo carries its regular rate.</strong> Promotional prices are always published alongside the regular rate and the condition (&ldquo;annual plan only&rdquo;, &ldquo;first year&rdquo;, &ldquo;with a $125 service fee&rdquo;), so a discounted headline never hides what you&rsquo;ll actually pay.</p>
              <p className="p-5"><strong className="text-[#191919]">Customer quotes are verified, not scraped.</strong> We quote customer reviews only when we have the real text, name and date as published - never paraphrases presented as quotes, and complaints included alongside praise.</p>
              <p className="p-5"><strong className="text-[#191919]">Coverage claims cite the contract.</strong> Caps, exclusions, waiting periods and cancellation terms come from each company&rsquo;s published sample contract or terms - never from ad copy.</p>
              <p className="p-5"><strong className="text-[#191919]">We don&rsquo;t republish what we can&rsquo;t verify.</strong> Claims circulating about providers - regulatory actions, corporate relationships - appear on our pages only after independent verification, no matter who they help or hurt.</p>
            </div>
          </div>
        </section>

        {/* Data sources */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Where our data comes from</h2>
          <p className="mb-6 text-[16px] leading-[1.75] text-gray-600">
            Our evaluations only carry weight if the underlying information is real. We draw
            on four sources for every company:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {SOURCES.map(({ icon: Icon, title, desc }) => (
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

        {/* Accuracy commitment */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How we keep it accurate</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="space-y-4 text-[15px] leading-[1.75] text-gray-600">
              <p>
                <strong className="text-[#191919]">We don&rsquo;t make things up.</strong> Prices,
                plans, caps and exclusions are taken from each company&rsquo;s own official sources.
                We don&rsquo;t invent figures, name coverage a company doesn&rsquo;t offer, or
                attach claims that aren&rsquo;t supported.
              </p>
              <p>
                <strong className="text-[#191919]">We update when providers change.</strong> Pricing
                and offerings in this space move quickly. When a provider changes its plans, we revise
                the affected reviews and comparisons and refresh their &ldquo;last updated&rdquo; date.
              </p>
              <p>
                <strong className="text-[#191919]">We separate fact from experience.</strong> Objective
                details (price, caps, coverage) are reported as fact; customer sentiment is
                clearly attributed to reviews; and our own take is presented as editorial analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Scoring */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">How scoring works</h2>
          <p className="text-[16px] leading-[1.75] text-gray-600">
            Each provider earns an overall score on a 10-point scale, translated into a plain-English
            label - from <strong className="text-[#191919]">Exceptional</strong> at the top through{" "}
            <strong className="text-[#191919]">Excellent</strong> and{" "}
            <strong className="text-[#191919]">Very Good</strong>. A score reflects the weighted result
            across the six factors above. Transparent pricing, generous and clearly stated coverage, and
            consistently positive recent customer feedback move a score up; low caps, broad exclusions,
            or recurring claim complaints move it down.
          </p>
        </section>

        {/* Head-to-head winners */}
        <section className="mb-12">
          <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <Trophy className="mt-0.5 h-6 w-6 shrink-0 text-amber-500" strokeWidth={2} />
            <div>
              <h2 className="mb-2 text-[22px] font-bold text-[#191919]">How we pick a winner</h2>
              <p className="text-[15px] leading-[1.75] text-gray-600">
                In a head-to-head comparison we score the two providers category by category -
                coverage, pricing, claims experience, flexibility, and customer reputation. The
                provider that wins the majority of categories takes the matchup, and the advantage
                meter reflects how decisive that edge is. We always name the runner-up&rsquo;s genuine
                strengths, because the &ldquo;better&rdquo; provider still depends on what you value most.
              </p>
            </div>
          </div>
        </section>

        {/* Freshness */}
        <section className="mb-12">
          <div className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6">
            <RefreshCw className="mt-0.5 h-6 w-6 shrink-0 text-[#C2570C]" strokeWidth={2} />
            <div>
              <h2 className="mb-2 text-[22px] font-bold text-[#191919]">Keeping reviews current</h2>
              <p className="text-[15px] leading-[1.75] text-gray-600">
                We continuously monitor company pricing, plans, contract changes, and recent
                customer reviews, and revise our rankings, reviews, and comparisons as things change.
                Each review and comparison shows when it was last updated.
              </p>
            </div>
          </div>
        </section>

        {/* Independence */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Editorial independence</h2>
          <div className="space-y-4 text-[16px] leading-[1.75] text-gray-600">
            <p>
              <strong className="text-[#191919]">Independent rankings.</strong> Our rankings and
              reviews are determined by the evaluation criteria on this page - not by commercial
              relationships.
            </p>
            <p>
              <strong className="text-[#191919]">Transparent about affiliates.</strong> Some providers
              compensate us through affiliate partnerships when you click through and sign up. This may
              affect how providers are displayed, but it does not influence our scores or the content of
              our reviews. See our{" "}
              <Link href="/disclaimer" className="font-semibold text-[#C2570C] hover:underline">full disclaimer</Link>.
            </p>
          </div>
        </section>

        {/* Who's behind the reviews */}
        <ExpertTeam experts={experts} />

        {/* Disclaimer */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Disclaimer</h2>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <p className="text-[15px] leading-[1.75] text-gray-600">
              tophomewarranty.com is not a home warranty company and does not sell or administer service
              contracts. The information on this site is for general information and comparison purposes only
              and is not legal, insurance or financial advice. Coverage, prices, caps and exclusions vary by
              company, plan, state and ZIP code. Your signed contract determines what is covered - read the
              full sample contract before you buy.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="mb-4 text-[22px] font-bold text-[#191919]">Methodology FAQs</h2>
          <div className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-200 bg-white">
            {METHOD_FAQS.map((f, i) => (
              <div key={i} className="p-6">
                <h3 className="mb-2 text-[15.5px] font-bold text-[#191919]">{f.question}</h3>
                <p className="text-[14px] leading-[1.75] text-gray-600">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="mb-4 text-[16px] font-bold text-[#191919]">See the rankings in action</p>
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
              Read Our Reviews
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
