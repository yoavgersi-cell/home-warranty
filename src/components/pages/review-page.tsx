import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Users, Clock, Shield, Star, ArrowBigUp, ArrowBigDown, MessageCircle } from "lucide-react";
import { getConfig } from "@/lib/config-store";
import { latestUpdate, VERTICALS, NOINDEX_WL_REVIEW_SLUGS } from "@/lib/config";
import {
  type SiteContext,
  canonicalUrl,
  hubLink,
} from "@/lib/site-context";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProviderCta } from "@/components/provider-cta";
import { TrustpilotCarousel } from "@/components/trustpilot-carousel";
import { MedicalReviewBar } from "@/components/medical-review-bar";
import { pageReviewSchema } from "@/data/reviewers";
import { LastUpdated } from "@/components/last-updated";
import { PromoPopup } from "@/components/promo-popup";
import { resolvePromoPopup } from "@/lib/promo-popups";
import { TrustDisclosure } from "@/components/medical-sources";
import { SourcesMethodology } from "@/components/sources-methodology";
import { ProductCarousel } from "@/components/product-carousel";
import { notFound } from "next/navigation";
import { REDDIT_COMMUNITY_FEEDBACK as REVIEW_COMMUNITY_FEEDBACK, RedditMark } from "@/components/reddit-community";
import { YoutubeReviewSection } from "@/components/youtube-review";
import { ReadableProse } from "@/components/prose";
import { ProviderAudit } from "@/components/provider-audit";

// Per-provider SEO overrides, "is X legit?" trust blocks and extra FAQs for
// the home warranty reviews. Everything here is written from facts researched
// for src/lib/seeds/home-warranty.ts - keep it in step when a company's
// plans, caps or terms change.

const REVIEW_SEO_OVERRIDES: Record<string, { title: string; description: string }> = {
  "choice-home-warranty": {
    title: "Choice Home Warranty Review (2026): Plans, Cost, Caps & Is It Legit?",
    description:
      "Choice Home Warranty reviewed: Basic vs Total plans, monthly cost, service fee, the $3,000 per-item cap, state availability, regulatory history and whether it's worth it.",
  },
  "american-home-shield": {
    title: "American Home Shield Review (2026): ShieldSilver, Gold & Platinum Compared",
    description:
      "American Home Shield reviewed: ShieldSilver, ShieldGold and ShieldPlatinum coverage, cost, service fee options, coverage caps and whether AHS is worth it.",
  },
  "select-home-warranty": {
    title: "Select Home Warranty Review (2026): Cost, Coverage Limits & Is It Legit?",
    description:
      "Select Home Warranty reviewed: Bronze, Gold and Platinum Care plans, low prices and promotions, the coverage caps to watch, and whether it's a good value.",
  },
  "first-american": {
    title: "First American Home Warranty Review (2026): Plans, Cost & Coverage",
    description:
      "First American Home Warranty reviewed: plan tiers, monthly cost, service fee options, high HVAC coverage, state availability and who it's best for.",
  },
  "home-warranty-of-america": {
    title: "Home Warranty of America (HWA) Review (2026): Plans, Cost & Caps",
    description:
      "Home Warranty of America reviewed: Premier and Premier Plus plans, cost, the $5,000 repair limit, 13-month contracts, nationwide availability and complaints.",
  },
  "home-service-club": {
    title: "The Home Service Club Review (2026): Cost, Coverage Caps & Complaints",
    description:
      "The Home Service Club reviewed: Standard vs Comprehensive plans, price, no age limits, per-item and annual caps, and what customers report about claims.",
  },
  "2-10-home-buyers-warranty": {
    title: "2-10 Home Buyers Warranty Review (2026): Plans, Cost & Coverage",
    description:
      "2-10 Home Buyers Warranty reviewed: home warranty plans, structural warranty background, cost, coverage caps, Frontdoor ownership and who it suits.",
  },
};

// Direct answers for the "Is X legit?" FAQ, built only from researched facts.
const REVIEW_LEGIT: Record<string, { verdict: string; signals: string[] }> = {
  "choice-home-warranty": {
    verdict:
      "Yes - Choice Home Warranty is a real company that has sold home warranties since 2008 and serves most of the US. It also has a significant regulatory history: in early 2026 it agreed to an $11.8 million consent judgment with the Arizona Attorney General over claim-handling and disclosure allegations (without admitting wrongdoing), and it settled with New Jersey in 2015. Read the sample contract closely, especially the caps and exclusions.",
    signals: ["In business since 2008", "Two simple plans plus add-ons", "Available in every state except Washington (per third-party sources)"],
  },
  "american-home-shield": {
    verdict:
      "Yes - American Home Shield is the oldest and largest name in the industry. Founded in 1971, it is owned by Frontdoor, Inc., a publicly traded company, and offers three published plan tiers with sample contracts available before you buy. Like every home warranty company it gets complaints about denials, so check the caps and exclusions for your plan.",
    signals: ["Founded 1971 - 50+ years in business", "Owned by publicly traded Frontdoor, Inc.", "Published sample contracts by state"],
  },
  "select-home-warranty": {
    verdict:
      "Yes - Select Home Warranty is a real company that has sold plans since about 2012. Its prices and promotions are among the lowest we track, but its coverage caps are also among the lowest, and its BBB record shows a high complaint volume. It can suit buyers who want a low premium and understand the limits.",
    signals: ["Selling plans since about 2012", "Frequent promotions (e.g. free months on annual plans)", "Roof leak coverage included in promotions"],
  },
  "first-american": {
    verdict:
      "Yes - First American Home Warranty is part of First American Financial, a long-established, publicly traded title and settlement company, and is widely sold through real estate agents. It is available in fewer states than some competitors, so check your address first.",
    signals: ["Backed by First American Financial", "Strong real estate channel", "Large Trustpilot review volume"],
  },
  "home-warranty-of-america": {
    verdict:
      "Yes - Home Warranty of America has operated since 1996 and has been owned by Choice Home Warranty since 2022, while still running as its own brand. It sells nationwide, but customer reviews on some sites are poor, so read the contract's caps and its short workmanship guarantee before you buy.",
    signals: ["In business since 1996", "Available in all 50 states", "13-month contracts"],
  },
  "home-service-club": {
    verdict:
      "Yes - The Home Service Club is a real company that has sold home warranties since around 2008-2009. Its standout feature is no age limit on covered items, but its per-item caps are low and recent customer reviews are mostly negative, so it is a cautious pick.",
    signals: ["Selling plans since about 2008", "No age limit on covered systems and appliances", "Two straightforward plans"],
  },
  "2-10-home-buyers-warranty": {
    verdict:
      "Yes - 2-10 Home Buyers Warranty has operated since about 1980 and is best known for new-home structural warranties sold through builders. Frontdoor, Inc. (American Home Shield's parent) acquired it in December 2024. Its consumer home warranty plans are a smaller part of the business.",
    signals: ["In business since about 1980", "Owned by Frontdoor, Inc. since 2024", "Major new-home structural warranty provider"],
  },
};

const REVIEW_EXTRA_FAQS: Record<string, { question: string; answer: string }[]> = {
  "choice-home-warranty": [
    {
      question: "What is Choice Home Warranty's service fee?",
      answer:
        "Choice's service call fee is typically around $100 per claim, with lower options reported in some markets. At many home warranty companies, including Choice, the fee is generally owed when a technician visits even if the claim is later denied. Confirm the fee in your contract.",
    },
    {
      question: "What is the difference between Choice's Basic and Total plans?",
      answer:
        "The Basic Plan covers core systems (heating, plumbing, electrical, water heater, ductwork) plus kitchen appliances. The Total Plan adds air conditioning, the refrigerator, and the clothes washer and dryer. Add-ons such as pool/spa, well pump, septic and roof leak cost extra.",
    },
    {
      question: "Is Choice Home Warranty available in my state?",
      answer:
        "Third-party sources report that Choice sells plans in every state except Washington; California plans may be sold through a different entity. Enter your address on Choice's site to confirm.",
    },
  ],
  "american-home-shield": [
    {
      question: "What's the difference between ShieldSilver, ShieldGold and ShieldPlatinum?",
      answer:
        "ShieldSilver covers home systems only (heating, cooling, plumbing, electrical, water heater and more). ShieldGold adds major kitchen and laundry appliances. ShieldPlatinum adds extras such as roof leak repair, an HVAC tune-up, and permits and code-violation coverage, with higher appliance limits.",
    },
    {
      question: "Can I choose my own contractor with American Home Shield?",
      answer:
        "Normally no - AHS assigns a technician from its network. Using your own contractor is an exception that requires approval from AHS before the work is done.",
    },
    {
      question: "Is American Home Shield available everywhere?",
      answer: "AHS is not available in Alaska or Hawaii, according to third-party sources. Enter your address on AHS's site to confirm availability.",
    },
  ],
  "select-home-warranty": [
    {
      question: "What are Select Home Warranty's coverage limits?",
      answer:
        "Third-party reviews report caps of about $500 per item for many appliances and for electrical and plumbing repairs, about $3,000 per term for HVAC, and around $400 for add-ons such as roof leak. These limits are lower than most competitors', so check the limits section of the contract.",
    },
    {
      question: "Are Select Home Warranty's free months real?",
      answer:
        "Select frequently advertises free months and free roof coverage, but the free months typically require paying for the year upfront. Compare the total annual price, not just the promotion.",
    },
  ],
  "first-american": [
    {
      question: "How much does First American Home Warranty cost?",
      answer:
        "Reported prices range from roughly $40 to $140 a month depending on plan and state, with service fee options of about $75, $100 or $125. A higher service fee lowers the premium. Get a quote for your address to confirm.",
    },
    {
      question: "Which states does First American serve?",
      answer:
        "First American sells plans in roughly 35-37 states plus Washington, D.C.; states reported as not served include Alaska, Connecticut, Delaware, Hawaii and Louisiana. Check the state selector on First American's site.",
    },
  ],
  "home-warranty-of-america": [
    {
      question: "Who owns Home Warranty of America?",
      answer: "Choice Home Warranty acquired Home Warranty of America in 2022. HWA continues to operate under its own brand and plans.",
    },
    {
      question: "Can I cancel an HWA plan?",
      answer:
        "Reported terms allow a full refund within 30 days, and after that a prorated refund minus a small fee (the lesser of $30 or 10%). Terms vary by state, so check your contract.",
    },
  ],
  "home-service-club": [
    {
      question: "Does The Home Service Club have coverage limits?",
      answer:
        "Yes. Reported per-item caps are mostly $300-$2,000, with an overall annual cap of about $6,000 on the Standard plan and $9,000 on the Comprehensive plan. Its distinctive feature is no age limit on covered items, not unlimited coverage.",
    },
  ],
  "2-10-home-buyers-warranty": [
    {
      question: "Is 2-10 the same company as American Home Shield?",
      answer:
        "They share a parent. Frontdoor, Inc., which owns American Home Shield, acquired 2-10 Home Buyers Warranty in December 2024. The two brands still sell separate plans.",
    },
    {
      question: "What is a 2-10 structural warranty?",
      answer:
        "2-10 is best known for new-home structural warranties that builders provide to buyers, covering major structural defects for up to 10 years. That is different from a home warranty, which covers repairs to systems and appliances.",
    },
  ],
};


export async function reviewMetadata(slug: string, ctx: SiteContext): Promise<Metadata> {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return { title: "Review Not Found" };

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return { title: "Review Not Found" };

  const override = REVIEW_SEO_OVERRIDES[slug];
  // Providers reviewed in more than one vertical (Ro, Maximus, PeterMD, Hims)
  // would otherwise emit identical <title>s on two URLs - a duplicate-title
  // signal. Their titles carry the vertical name to differentiate.
  const SHARED_REVIEW_PROVIDER_IDS = ["ro", "maximus", "petermd", "hims"];
  const verticalQualifier = SHARED_REVIEW_PROVIDER_IDS.includes(provider.id)
    ? ` ${VERTICALS.find((v) => v.id === ctx.vertical)?.name ?? ""}`.trimEnd() + " "
    : " ";
  const pageTitle =
    override?.title ?? `${provider.name}${verticalQualifier}Review 2026: Plans, Cost & Is It Worth It?`;
  const pageDescription = override?.description ?? review.shortSummary;

  // Operator policy (Aug 2026): provider reviews are indexable by default - the
  // goal is impressions across every vertical first. Exception (Sep 2026): thin
  // filler/unmonetized-brand reviews on weight-loss are noindex,follow so crawl
  // budget on the young hub concentrates on the money pages (see
  // NOINDEX_WL_REVIEW_SLUGS); "follow" keeps link equity flowing.
  const url = canonicalUrl(ctx, `/reviews/${slug}`);
  const isThinNoindex = ctx.vertical === "weight-loss" && NOINDEX_WL_REVIEW_SLUGS.has(slug);

  return {
    // Long review titles render without the " | Home Warranty Picks" suffix (SERP
    // cut-off ~60 characters); short ones keep it.
    title: pageTitle.length > 48 ? { absolute: pageTitle } : pageTitle,
    description: pageDescription,
    robots: ctx.noindex
      ? { index: false, follow: false }
      : isThinNoindex
        ? { index: false, follow: true }
        : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      type: "article",
    },
  };
}

export async function ReviewPageView({ slug, ctx }: { slug: string; ctx: SiteContext }) {
  const config = await getConfig(ctx.vertical);
  const review = (config.reviews ?? []).find((r) => r.slug === slug);
  if (!review) return notFound();

  const provider = config.providers.find((p) => p.id === review.providerId);
  if (!provider) return notFound();

  const legit = REVIEW_LEGIT[slug];

  // Site's own editorial rating for this provider (same scoring shown on the
  // homepage), keyed off its ranking position. Surfaced visibly on the page.
  // NOTE: intentionally NOT emitted as review/aggregateRating structured data -
  // re-publishing Trustpilot's aggregate and self-assigned editorial scores as
  // Product rating markup to earn SERP stars is a review-snippet policy risk
  // (and earned ~0 clicks per Search Appearance). The ratings remain visible as
  // page content; only the star-generating schema is removed.
  const rankIndex = config.ranking.providerOrder.indexOf(provider.id);
  const editorial =
    rankIndex >= 0
      ? config.ranking.positions[rankIndex] ??
        config.ranking.positions[config.ranking.positions.length - 1]
      : null;
  const editorialStars = editorial ? editorial.score / 2 : 0;
  const editorialFullStars = Math.floor(editorialStars);
  const editorialHasHalf = editorialStars % 1 >= 0.5;

  // Promo popup for this provider, if it has a registered creative.
  const promoPopup = resolvePromoPopup([provider]);

  // Note: we intentionally do NOT emit an AggregateOffer/price in the schema.
  // A structured price can surface in the SERP rich result and goes stale the
  // moment a provider changes pricing, so on-page pricing tables stay the single
  // source of truth and the search snippet carries no price.

  // Review/AggregateRating Product schema deliberately removed - see the note
  // on the editorial rating above. The visible on-page Trustpilot score and
  // editorial rating stay; we just don't request star rich snippets.

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": canonicalUrl(ctx, `/reviews/${slug}`),
    url: canonicalUrl(ctx, `/reviews/${slug}`),
    name: `${provider.name} Review`,
    dateModified: latestUpdate(review.updatedAt),
    isPartOf: { "@type": "WebSite", name: "Home Warranty Picks", url: ctx.origin },
    ...pageReviewSchema(`/reviews/${slug}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: canonicalUrl(ctx, "/") },
      { "@type": "ListItem", position: 2, name: "Reviews", item: canonicalUrl(ctx, "/reviews") },
      { "@type": "ListItem", position: 3, name: `${provider.name} Review`, item: canonicalUrl(ctx, `/reviews/${slug}`) },
    ],
  };

  // FAQ - real, query-shaped questions answered entirely from this review's
  // own researched content (pricing, plans, best-for, verdict). Powers
  // both the visible FAQ section and the FAQPage schema (rich results / PAA).
  const reviewFaqs = [
    { question: `Is ${provider.name} legit?`, answer: legit?.verdict ?? review.reviewIntro },
    { question: `How much does ${provider.name} cost?`, answer: review.pricingSummary },
    review.treatmentOptions?.length
      ? { question: `What plans does ${provider.name} offer?`, answer: `${provider.name} offers ${review.treatmentOptions.join(", ")}.` }
      : null,
    review.bestFor?.length
      ? { question: `Who is ${provider.name} best for?`, answer: `${provider.name} is best for ${review.bestFor.join("; ")}.` }
      : null,
    { question: `Is ${provider.name} worth it?`, answer: review.finalVerdict },
    // Extra FAQs are keyed by provider slug.
    ...(REVIEW_EXTRA_FAQS[slug] ?? []),
  ].filter((f): f is { question: string; answer: string } => !!f && !!f.answer);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: reviewFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const relatedBattles = (config.battles ?? []).filter(
    (b) => b.provider1Id === provider.id || b.provider2Id === provider.id
  );

  // This provider's own question cluster (is-X-legit / X-cost / X-alternatives)
  // - the highest-intent internal links a review can carry. Rendered only for
  // cluster articles that actually exist in the config.
  const clusterSlugs = [
    { slug: `is-${provider.id}-legit`, label: `Is ${provider.name} legit?` },
    { slug: `${provider.id}-cost`, label: `How much does ${provider.name} cost?` },
    { slug: `${provider.id}-plans`, label: `${provider.name} plans explained` },
    { slug: `${provider.id}-alternatives`, label: `Best ${provider.name} alternatives` },
  ].filter((c) => (config.articles ?? []).some((a) => a.slug === c.slug));

  // Related articles: actually related, not just the first three in the array.
  // Prefer articles that mention this provider (excluding its own cluster,
  // which has a dedicated box below), then fill with the newest guides.
  const clusterSet = new Set(clusterSlugs.map((c) => c.slug));
  const mentions = (a: { slug: string; title: string }) =>
    a.slug.includes(provider.id) || a.title.toLowerCase().includes(provider.name.toLowerCase());
  const nonCluster = (config.articles ?? []).filter((a) => !clusterSet.has(a.slug));
  const relatedArticles = [
    ...nonCluster.filter(mentions),
    ...nonCluster
      .filter((a) => !mentions(a))
      .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "")),
  ].slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1000px] px-4 pb-8 pt-8 sm:px-6 sm:pt-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: hubLink(ctx, "/") },
              { label: "Reviews", href: hubLink(ctx, "/reviews") },
              { label: `${provider.name} Review` },
            ]}
          />

          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-5">
              <div className="flex h-[50px] w-[130px] shrink-0 items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={provider.logo} alt={`${provider.name} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <div>
                <h1 className="text-[24px] font-bold text-[#191919] sm:text-[28px]">
                  {provider.name} Reviews
                </h1>
                <p className="mt-0.5 text-[14px] text-gray-700">
                  {provider.tagline}
                </p>
                <LastUpdated date={latestUpdate(review.updatedAt)} className="mt-1" />
                {editorial && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < editorialFullStars
                              ? "fill-[#FDB515] text-[#FDB515]"
                              : i === editorialFullStars && editorialHasHalf
                                ? "fill-[#FDB515]/50 text-[#FDB515]"
                                : "fill-gray-300 text-gray-500"
                          )}
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <span className="text-[14px] font-bold text-[#191919]">
                      {editorial.score}/10
                    </span>
                    <span className="text-[13px] text-gray-500">
                      {editorial.label} - our rating
                    </span>
                  </div>
                )}
                {/* Desktop: byline inside the title column. Mobile renders it
                    full-width below the header row instead (see sm:hidden). */}
                <div className="hidden sm:block">
                  <MedicalReviewBar path={`/reviews/${slug}`} className="mt-3 max-w-[760px]" compact />
                </div>
              </div>
            </div>
            <div className="sm:hidden">
              <MedicalReviewBar path={`/reviews/${slug}`} schema={false} />
            </div>
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 text-[14px] font-bold text-white transition-colors hover:bg-[#1E40AF] sm:shrink-0"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
          <TrustDisclosure disclaimerHref={hubLink(ctx, "/disclaimer")} />
        </div>
      </div>

      <div className="mx-auto max-w-[1000px] px-4 py-8 sm:px-6">
        {/* Quick summary strip */}
        <div className="mb-8 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 sm:gap-6">
          {review.trustBadges && review.trustBadges.length > 0 ? (
            review.trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-[13px] text-gray-600">
                <Check className="h-4 w-4 text-emerald-500" strokeWidth={2} />
                {badge}
              </div>
            ))
          ) : (
            <>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Shield className="h-4 w-4 text-[#1D4ED8]" strokeWidth={1.5} />
                Published Contracts
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Clock className="h-4 w-4 text-[#1D4ED8]" strokeWidth={1.5} />
                24/7 Claims
              </div>
              <div className="flex items-center gap-2 text-[13px] text-gray-600">
                <Users className="h-4 w-4 text-[#1D4ED8]" strokeWidth={1.5} />
                Ongoing Support
              </div>
            </>
          )}
        </div>

        {/* The Bottom Line - the verdict up top, so the answer to "is it worth
            it" doesn't hide at the bottom of the page. */}
        {review.finalVerdict && (
          <div className="mb-8 rounded-2xl border border-[#2563EB]/20 bg-white p-5 shadow-sm sm:p-6">
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.07em] text-[#1D4ED8]">The bottom line</p>
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.8] text-gray-800" />
          </div>
        )}

        {/* This provider's products, shopping-style (weight-loss catalog only) */}
        {ctx.vertical === "weight-loss" && (
          <div className="mb-8">
            <ProductCarousel
              providers={config.providers}
              title={`${provider.name} products & prices`}
              subtitle="Published prices with their conditions - the whole card links to the provider."
              onlyProviderIds={[provider.id]}
              pageType="review"
              pageUrl={canonicalUrl(ctx, `/reviews/${slug}`)}
            />
          </div>
        )}

        {/* Intro */}
        <div className="mb-8">
          <ReadableProse text={review.reviewIntro} paragraphClassName="text-[16px] leading-[1.8] text-gray-600" />
        </div>

        {/* Is [brand] legit? - trust block for the "is X legit" query cluster */}
        {legit && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center gap-2 border-b border-gray-100 bg-emerald-50/50 px-6 py-4">
              <Shield className="h-5 w-5 text-emerald-600" strokeWidth={2} />
              <h2 className="text-[18px] font-bold text-[#191919]">
                Is {provider.name} legit?
              </h2>
            </div>
            <div className="p-6">
              <p className="mb-4 text-[15px] leading-[1.75] text-gray-600">
                {legit.verdict}
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {legit.signals.map((signal) => (
                  <li key={signal} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {signal}
                  </li>
                ))}
                {provider.trustpilotRating && provider.trustpilotReviewCount && (
                  <li className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    Rated {provider.trustpilotRating}/5 across {provider.trustpilotReviewCount} Trustpilot reviews
                  </li>
                )}
              </ul>
              <p className="mt-4 text-[12px] leading-relaxed text-gray-500">
                &ldquo;Legitimate&rdquo; here means a real, operating home warranty company - not a
                guarantee that any claim will be approved. Coverage depends on your contract. Always
                confirm current terms and availability with the company.
              </p>
            </div>
          </div>
        )}

        {/* Key Features + Pricing side by side on desktop */}
        <div className="mb-6 grid gap-6 sm:grid-cols-2">
          <Section title="Key Features">
            <ul className="space-y-2.5">
              {review.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                  {feature}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Plans & Coverage">
            <ul className="space-y-2.5">
              {review.treatmentOptions.map((option) => (
                <li key={option} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                  {option}
                </li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Pricing */}
        <Section title="Pricing">
          {review.pricingPlans && review.pricingPlans.length > 0 && (
            <div className="mb-5 grid gap-4 sm:grid-cols-2">
              {review.pricingPlans.map((plan) => (
                <div key={plan.name} className="rounded-xl border border-gray-200 bg-gray-50/60 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-[15px] font-bold text-[#191919]">{plan.name}</h4>
                    {plan.cadence && (
                      <span className="rounded-full bg-[#2563EB]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
                        {plan.cadence}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[13px] text-gray-500">{plan.medication}</p>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-[28px] font-extrabold leading-none text-[#191919]">{plan.price}</span>
                    {plan.unit && <span className="text-[14px] font-semibold text-gray-500">{plan.unit}</span>}
                    {plan.regularPrice && (
                      <span className="text-[15px] font-medium text-gray-500 line-through">{plan.regularPrice}</span>
                    )}
                  </div>
                  {plan.regularPrice && (
                    <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                      Sale price
                    </span>
                  )}
                  {plan.highlights && plan.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {plan.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          <ReadableProse text={review.pricingSummary} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
        </Section>

        {/* The Home Warranty Picks audit - verified-facts card. Registry-gated:
            providers whose data isn't fully verified render nothing. */}
        <ProviderAudit providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* How it works */}
        {review.howItWorks && review.howItWorks.length > 0 && (
          <Section title={`How ${provider.name} Works`}>
            <ol className="space-y-4">
              {review.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[13px] font-bold text-white">
                    {i + 1}
                  </div>
                  <div>
                    {step.timing && (
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-[#1D4ED8]">
                        {step.timing}
                      </span>
                    )}
                    <p className="text-[15px] font-bold text-[#191919]">{step.title}</p>
                    {step.detail && (
                      <p className="mt-0.5 text-[14px] leading-[1.65] text-gray-600">{step.detail}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {/* Pros & Cons */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-2">
            <div className="p-6 sm:border-r sm:border-gray-100">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-emerald-700">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                  <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.5} />
                </div>
                Pros
              </h3>
              <ul className="space-y-2.5">
                {review.pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" strokeWidth={2} />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-gray-100 p-6 sm:border-t-0">
              <h3 className="mb-4 flex items-center gap-2 text-[15px] font-bold text-red-600">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                  <X className="h-3.5 w-3.5 text-red-500" strokeWidth={2.5} />
                </div>
                Cons
              </h3>
              <ul className="space-y-2.5">
                {review.cons.map((con) => (
                  <li key={con} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" strokeWidth={2} />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mid-page CTA */}
        <div className="mb-6 rounded-xl border border-[#2563EB]/10 bg-[#2563EB]/[0.03] p-5 text-center sm:p-6">
          <p className="mb-3 text-[16px] font-bold text-[#191919]">
            Interested in {provider.name}?
          </p>
          <p className="mb-4 text-[13px] text-gray-500">
            Visit their site to see plans and pricing for your address.
          </p>
          <ProviderCta
            href={provider.affiliateUrl}
            providerName={provider.name}
            providerSlug={provider.id}
            pageType="review"
            sourceFlow="provider_review"
            className="inline-flex h-[44px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-8 text-[14px] font-bold text-white transition-colors hover:bg-[#1E40AF]"
          >
            Visit {provider.name}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </ProviderCta>
        </div>

        {/* Best For */}
        <Section title="Who It's Best For">
          <ul className="space-y-2.5">
            {review.bestFor.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-800">
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#1D4ED8]" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Trustpilot Reviews */}
        {(provider.trustpilotReviews?.length ?? 0) > 0 && (
          <div className="mb-6">
            <TrustpilotCarousel
              providerName={provider.name}
              providerLogo={provider.logo}
              reviews={provider.trustpilotReviews!}
              rating={provider.trustpilotRating}
              reviewCount={provider.trustpilotReviewCount}
            />
          </div>
        )}

        {/* Community feedback - real Reddit threads, rendered Reddit-style.
            Each registry entry names the vertical its threads were captured
            for (legacy entries without one are weight-loss research), so the
            block renders only on the matching vertical. */}
        {REVIEW_COMMUNITY_FEEDBACK[slug] &&
          (REVIEW_COMMUNITY_FEEDBACK[slug].vertical ?? "weight-loss") === ctx.vertical && (
          <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <div className="mb-2 flex items-center gap-2.5">
              <RedditMark className="h-7 w-7 shrink-0" />
              <h2 className="text-[20px] font-bold text-[#191919]">
                What Reddit says about {provider.name}
              </h2>
            </div>
            <p className="mb-5 text-[14.5px] leading-relaxed text-gray-700">
              {REVIEW_COMMUNITY_FEEDBACK[slug].intro}
            </p>

            <div className="space-y-4">
              {REVIEW_COMMUNITY_FEEDBACK[slug].threads.map((t, i) => (
                <div key={i} className="rounded-xl border border-gray-200 bg-[#FCFCFC] p-4 sm:p-5">
                  {/* Post header - the Reddit identity line */}
                  <div className="mb-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px]">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4500] text-[10px] font-bold text-white">
                      r/
                    </span>
                    {t.subreddit ? (
                      <>
                        <span className="font-bold text-[#191919]">{t.subreddit}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">u/{t.author}</span>
                      </>
                    ) : (
                      <span className="font-bold text-[#191919]">u/{t.author}</span>
                    )}
                    {t.age && (
                      <>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">{t.age}</span>
                      </>
                    )}
                  </div>

                  {t.title && (
                    <p className="mb-2 text-[15.5px] font-bold leading-snug text-[#191919]">{t.title}</p>
                  )}

                  <div className="space-y-2">
                    {t.body.map((para, j) => (
                      <p key={j} className="text-[13.5px] leading-[1.7] text-gray-600">
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Vote / comment pills - only real counts, never estimates */}
                  {(t.upvotes !== undefined || t.commentCount !== undefined) && (
                    <div className="mt-3 flex items-center gap-2">
                      {t.upvotes !== undefined && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-bold text-gray-600">
                          <ArrowBigUp className="h-4 w-4 text-[#FF4500]" strokeWidth={2} />
                          {t.upvotes}
                          <ArrowBigDown className="h-4 w-4 text-gray-500" strokeWidth={2} />
                        </span>
                      )}
                      {t.commentCount !== undefined && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1 text-[12px] font-semibold text-gray-600">
                          <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
                          {t.commentCount} comments
                        </span>
                      )}
                    </div>
                  )}

                  {/* Replies - threaded with the Reddit comment line */}
                  {t.replies && t.replies.length > 0 && (
                    <div className="mt-3 space-y-3 border-l-2 border-gray-200 pl-4">
                      {t.replies.map((r, j) => (
                        <div key={j}>
                          <div className="mb-1 flex items-center gap-1.5 text-[12px]">
                            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-gray-300 text-[9px] font-bold uppercase text-white">
                              {r.author.charAt(0)}
                            </span>
                            <span className="font-bold text-gray-800">u/{r.author}</span>
                          </div>
                          <p className="text-[13px] leading-[1.65] text-gray-600">{r.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-5 border-t border-gray-100 pt-4 text-[14px] leading-relaxed text-gray-700">
              <span className="font-semibold text-[#191919]">The takeaway: </span>
              {REVIEW_COMMUNITY_FEEDBACK[slug].takeaway}
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-gray-500">
              Excerpts from public Reddit posts, lightly trimmed; vote and comment counts shown as
              captured at the time of review. Reddit is a trademark of Reddit, Inc. and is not
              affiliated with this site.
            </p>
          </div>
        )}

        {/* Independent YouTube review - registry-gated, one real video per
            provider, embedded click-to-load so the iframe never weighs on
            initial load. */}
        <YoutubeReviewSection providerId={provider.id} providerName={provider.name} vertical={ctx.vertical} />

        {/* Final Verdict */}
        <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
            <h3 className="text-[18px] font-bold text-[#191919]">Final Verdict</h3>
          </div>
          <div className="p-6">
            <ReadableProse text={review.finalVerdict} paragraphClassName="text-[15px] leading-[1.75] text-gray-600" />
            <ProviderCta
              href={provider.affiliateUrl}
              providerName={provider.name}
              providerSlug={provider.id}
              pageType="review"
              sourceFlow="provider_review"
              className="mt-5 flex h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#2563EB] text-[15px] font-bold text-white transition-colors hover:bg-[#1E40AF] sm:w-auto sm:px-8"
            >
              Visit {provider.name}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </ProviderCta>
          </div>
        </div>

        {/* FAQ */}
        {reviewFaqs.length > 0 && (
          <div className="mb-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 bg-gray-50/70 px-6 py-4">
              <h2 className="text-[18px] font-bold text-[#191919]">
                {provider.name} Review: FAQs
              </h2>
            </div>
            <div className="divide-y divide-gray-100">
              {reviewFaqs.map((f, i) => (
                <div key={i} className="p-6">
                  <h3 className="mb-2 text-[15px] font-bold text-[#191919]">{f.question}</h3>
                  <p className="text-[14px] leading-[1.7] text-gray-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Related content */}
        {(relatedBattles.length > 0 || relatedArticles.length > 0) && (
          <div className="mb-6">
            <h3 className="mb-4 text-[18px] font-bold text-[#191919]">Related</h3>
            <div className="space-y-2">
              {relatedBattles.map((battle) => {
                const otherProvider = config.providers.find(
                  (p) => p.id === (battle.provider1Id === provider.id ? battle.provider2Id : battle.provider1Id)
                );
                return (
                  <Link
                    key={battle.slug}
                    href={hubLink(ctx, `/${battle.slug}`)}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#2563EB]/30 hover:bg-[#2563EB]/[0.02]"
                  >
                    <span className="text-[#1D4ED8]">{provider.name} vs {otherProvider?.name}</span>
                    <span className="ml-auto text-[12px] text-gray-500">Compare</span>
                  </Link>
                );
              })}
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={hubLink(ctx, `/articles/${article.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-medium text-[#191919] transition-colors hover:border-[#2563EB]/30 hover:bg-[#2563EB]/[0.02]"
                >
                  <span className="truncate">{article.title}</span>
                  <span className="ml-auto shrink-0 text-[12px] text-gray-500">{article.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Provider question cluster - the review's highest-intent internal links */}
        {clusterSlugs.length > 0 && (
          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7">
            <h2 className="mb-1 text-[17px] font-bold text-[#191919]">
              More on {provider.name}
            </h2>
            <p className="mb-4 text-[13.5px] text-gray-500">
              The questions people ask before signing up - answered in depth.
            </p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {clusterSlugs.map((c) => (
                <Link
                  key={c.slug}
                  href={hubLink(ctx, `/articles/${c.slug}`)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-[14px] font-semibold text-[#1D4ED8] transition-colors hover:border-[#2563EB]/30 hover:bg-[#2563EB]/[0.02]"
                >
                  <span className="truncate">{c.label}</span>
                  <ArrowRight className="ml-auto h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                </Link>
              ))}
            </div>
          </div>
        )}

        <SourcesMethodology
          ctx={ctx}
          providers={[{ id: provider.id, name: provider.name }]}
          headingLabel={provider.name}
          kind="review"
        />
      </div>

      {/* Mobile-only promo popup - shown on the provider's own review page when
          it has a registered creative (same once-per-session behavior as on
          comparisons). */}
      {promoPopup && (
        <PromoPopup
          spec={promoPopup}
          href={provider.affiliateUrl}
          position={rankIndex >= 0 ? rankIndex + 1 : undefined}
        />
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-[17px] font-bold text-[#191919]">{title}</h3>
      {children}
    </div>
  );
}
