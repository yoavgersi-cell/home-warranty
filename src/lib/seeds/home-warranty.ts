import type { BattleData, BattleFeatureRow, SiteConfig } from "@/lib/config";

// ─────────────────────────────────────────────────────────────────────────────
// Home warranty vertical content - tophomewarranty.com
//
// Launch content for the single-vertical home warranty comparison site, built
// on the same template as hrtwomen.com. Seven providers, in operator order:
// Choice Home Warranty, American Home Shield, Select Home Warranty, First
// American Home Warranty, Home Warranty of America (HWA), The Home Service
// Club and 2-10 Home Buyers Warranty.
//
// Editorial rules (same as the HRT build): no invented figures, no invented
// customer quotes, prices always written as approximate with their condition,
// and every limit or exclusion stated the same way for partners and
// non-partners.
//
// Facts researched 2026-10-12. Provider sites, Trustpilot and BBB could not be
// fetched directly from the build environment, so every figure below comes
// from search-surfaced provider pages, regulator releases and third-party
// reviews (NerdWallet, CNBC, U.S. News, Insurify, This Old House, Top10,
// ConsumerAffairs). Key facts:
//  - Choice: founded 2008, New Jersey. Basic (systems + kitchen appliances)
//    and Total (adds AC, refrigerator, washer/dryer). ~$46-$49/mo Basic,
//    ~$55-$58/mo Total (2025 quotes). Service fee ~$100 (lower reported in
//    some markets). $3,000 per covered item per term. 30-day waiting period.
//    Not sold in Washington. 30-day workmanship guarantee (user agreement).
//    Arizona AG $11.8M consent judgment (Jan 23, 2026; announced Feb 10,
//    2026; no admission of wrongdoing). NJ AG settlement 2015 (~$780K).
//    Owns HWA since 2022.
//  - American Home Shield: founded 1971, Memphis; Frontdoor, Inc. (NASDAQ:
//    FTDR). ShieldSilver (systems), ShieldGold (+ appliances), ShieldPlatinum
//    (+ roof leak, HVAC tune-up, permits/code). Reported ~$30-$40 / $50-$60 /
//    $80-$90 per month. Service fee $100 or $125. Appliances $2,000 each
//    (Gold) / $4,000 each (Platinum); HVAC $5,000; roof leak $1,000. 30-day
//    waiting period (none on real-estate plans or renewals). Not in AK, HI.
//    Own contractor only with prior "outside authorization".
//  - Select: selling since ~2012. Bronze / Gold / Platinum Care. ~$36-$64/mo
//    before promos. Service fee ~$60-$75 typical. Caps ~$500 per item for
//    appliances, electrical, plumbing; HVAC ~$3,000 per term; add-ons ~$400.
//    Promos: "$150 off + 2 months free + free roof coverage" (annual plans).
//    Reported not available in NV, WA, WI. BBB B-, not accredited.
//  - First American: Santa Rosa, CA; First American Financial. 2026 sources
//    list Starter / Essential / Premium (older: Basic / Premier). ~$37-$142/mo.
//    Service fee $75 / $100 / $125. Appliance caps $3,500 (lower tiers) /
//    $7,000 (Premium); contracts note no dollar limit on AC refrigerant.
//    Roughly 35-37 states + DC; not in AK, CT, DE, HI, LA among others.
//    Trustpilot 4.0 / ~19,270 reviews.
//  - HWA: founded 1996; acquired by Choice Feb 2022. Premier (no AC) and
//    Premier Plus. Sample quote ~$48 / ~$61 per month with a $100 fee. Up to
//    $5,000 on most approved repairs. 13-month contracts. All 50 states.
//    30-day workmanship guarantee. Trustpilot 4.0 / ~3,365 reviews.
//  - The Home Service Club: since ~2008-2009. Standard (18 items) and
//    Comprehensive (33 items). ~$54 / ~$67 per month. Service fee ~$65-$125.
//    Per-item caps mostly $300-$2,000; annual aggregate $6,000 / $9,000. No
//    age limit on covered items. Recent Trustpilot snapshots low (1.2-1.9).
//  - 2-10 HBW: since ~1980; Frontdoor acquired it Dec 2024 ($585M). Best
//    known for builder structural warranties. From ~$27-$35/mo. Service fee
//    $65-$125. $2,000 per core system; $25,000 annual aggregate. Reported not
//    available in AK, HI, NH, OK, WI, WY.
//
// PLACEHOLDERS / OPERATOR TO VERIFY:
//  - affiliateUrl values point to each provider's homepage. Replace them with
//    your real tracking links.
//  - Trustpilot figures are third-party snapshots; refresh them from each
//    live profile. Ratings for Select, The Home Service Club and 2-10 are
//    left blank because sources conflicted. No Trustpilot review TEXT is
//    included: none could be verified verbatim. Add real reviews (exact text,
//    name, date) to `trustpilotReviews` to light up the review carousels.
//  - Plan names for First American and 2-10 and all state exclusions should
//    be confirmed on each provider's site.
// ─────────────────────────────────────────────────────────────────────────────

const UPDATED = "2026-10-12";

// One row of comparable facts per provider - feeds every head-to-head
// "Feature" table so values stay identical across comparisons.
type FactKey = "price" | "fee" | "plans" | "caps" | "wait" | "states" | "since";
const FACTS: Record<string, Record<FactKey, string>> = {
  "choice-home-warranty": {
    price: "~$46-$58/mo (reported)",
    fee: "~$100 per visit",
    plans: "Basic, Total",
    caps: "$3,000 per covered item",
    wait: "30 days",
    states: "Washington",
    since: "2008",
  },
  "american-home-shield": {
    price: "~$30-$90/mo by tier (reported)",
    fee: "$100 or $125 (you choose)",
    plans: "ShieldSilver, ShieldGold, ShieldPlatinum",
    caps: "$2,000-$4,000 per appliance; $5,000 HVAC",
    wait: "30 days",
    states: "Alaska, Hawaii",
    since: "1971",
  },
  "select-home-warranty": {
    price: "~$36-$64/mo before promos",
    fee: "~$60-$75 typical",
    plans: "Bronze, Gold, Platinum Care",
    caps: "~$500 per item; ~$3,000 HVAC per term",
    wait: "30 days",
    states: "Nevada, Washington, Wisconsin (reported)",
    since: "2012",
  },
  "first-american": {
    price: "~$40-$140/mo by plan & state",
    fee: "$75, $100 or $125",
    plans: "Starter, Essential, Premium",
    caps: "$3,500-$7,000 appliances; high HVAC limits",
    wait: "30 days",
    states: "AK, CT, DE, HI, LA and others",
    since: "1984",
  },
  "home-warranty-of-america": {
    price: "~$48-$61/mo (sample quote)",
    fee: "~$100 per visit",
    plans: "Premier, Premier Plus",
    caps: "Up to $5,000 on most repairs",
    wait: "30 days (reported)",
    states: "None - all 50 states",
    since: "1996",
  },
  "home-service-club": {
    price: "~$54-$67/mo",
    fee: "~$65-$125",
    plans: "Standard, Comprehensive",
    caps: "$300-$2,000 per item; $6,000-$9,000 per year",
    wait: "30 days (reported)",
    states: "None reported",
    since: "~2008",
  },
  "2-10-home-buyers-warranty": {
    price: "From ~$27-$35/mo",
    fee: "$65-$125",
    plans: "Systems & combo tiers (check site)",
    caps: "$2,000 per core system; $25,000 per year",
    wait: "30 days",
    states: "AK, HI, NH, OK, WI, WY (reported)",
    since: "~1980",
  },
};

const FEATURE_LABELS: [FactKey, string][] = [
  ["price", "Starting price"],
  ["fee", "Service call fee"],
  ["plans", "Plans"],
  ["caps", "Coverage caps"],
  ["wait", "Waiting period"],
  ["states", "Not available in"],
  ["since", "In business since"],
];

function features(
  p1: string,
  p2: string,
  highlights: Partial<Record<FactKey, BattleFeatureRow["highlight"]>> = {},
): BattleFeatureRow[] {
  return FEATURE_LABELS.map(([key, label]) => ({
    feature: label,
    provider1Value: FACTS[p1][key],
    provider2Value: FACTS[p2][key],
    highlight: highlights[key] ?? "none",
  }));
}

const battles: BattleData[] = [
  {
    slug: "american-home-shield-vs-choice-home-warranty",
    provider1Id: "choice-home-warranty",
    provider2Id: "american-home-shield",
    title: "American Home Shield vs Choice Home Warranty",
    matchupLabel: "American Home Shield vs Choice Home Warranty",
    subtitle: "Two simple, lower-cost plans vs the industry's oldest name and highest caps",
    description:
      "Compare American Home Shield and Choice Home Warranty - plans, monthly cost, service fees, coverage caps, availability and which fits your home.",
    intro:
      "American Home Shield and Choice Home Warranty are two of the most searched home warranty brands. Choice keeps things simple with two plans, a single service fee level in most markets and a $3,000 per-item cap. American Home Shield, founded in 1971 and owned by Frontdoor, offers three tiers, a choice of service fee and higher limits on its top plan. Here's how they compare.",
    verdict:
      "Choice is our pick for most buyers who want straightforward, budget-friendly coverage with a solid $3,000 per-item cap. American Home Shield is the better choice if you want the highest limits and extras such as roof leak and code-upgrade coverage, and you're willing to pay more for ShieldPlatinum. Note Choice's 2026 Arizona settlement and read either company's sample contract before buying.",
    verdictWinnerPoints: [
      "Two easy-to-compare plans",
      "$3,000 per covered item",
      "Typically lower monthly price than comparable AHS tiers",
    ],
    verdictLoserPoints: [
      "Higher appliance limits on ShieldPlatinum ($4,000 each)",
      "Permits, code upgrades and roof leak on top tier",
      "50+ years in business; publicly traded parent",
    ],
    winnerId: "choice-home-warranty",
    categories: [
      {
        name: "Pricing & value",
        winner: "provider1",
        explanation:
          "Choice's reported prices for its full Total plan sit in the mid-$50s per month, while AHS's comparable all-in tiers generally cost more, especially ShieldPlatinum.",
        supportingPoints: ["Total plan ~$55-$58/mo (reported)", "ShieldPlatinum ~$80-$90/mo (reported)"],
      },
      {
        name: "Coverage caps",
        winner: "provider2",
        explanation:
          "AHS's ShieldPlatinum allows up to $4,000 per appliance and $5,000 for HVAC; Choice caps covered items at $3,000.",
        supportingPoints: ["$4,000 per appliance on ShieldPlatinum", "$3,000 per item at Choice"],
      },
      {
        name: "Plan simplicity",
        winner: "provider1",
        explanation:
          "Choice's two plans are easy to understand: Basic for systems and kitchen appliances, Total to add AC, refrigerator and laundry.",
        supportingPoints: ["Two plans at Choice", "Three tiers plus add-ons at AHS"],
      },
      {
        name: "Track record & reputation",
        winner: "provider2",
        explanation:
          "AHS has operated since 1971 under a publicly traded parent. Choice has a larger Trustpilot review base but agreed to an $11.8 million consent judgment with the Arizona Attorney General in 2026.",
        supportingPoints: ["AHS founded 1971", "Choice AZ settlement (2026)"],
      },
      {
        name: "Availability",
        winner: "tie",
        explanation: "Both sell in nearly every state: Choice is not sold in Washington; AHS is not available in Alaska or Hawaii.",
        supportingPoints: ["Choice: not in WA", "AHS: not in AK or HI"],
      },
    ],
    features: features("choice-home-warranty", "american-home-shield", { price: "provider1", caps: "provider2", since: "provider2" }),
    updatedAt: UPDATED,
  },
  {
    slug: "choice-home-warranty-vs-select-home-warranty",
    provider1Id: "choice-home-warranty",
    provider2Id: "select-home-warranty",
    title: "Choice Home Warranty vs Select Home Warranty",
    matchupLabel: "Choice vs Select Home Warranty",
    subtitle: "Higher per-item caps vs the lowest promotional prices",
    description:
      "Compare Choice Home Warranty and Select Home Warranty - plans, cost, promotions, coverage caps and which is the better value.",
    intro:
      "Choice and Select are both budget-focused home warranty companies that sell direct to homeowners online. Select is known for aggressive promotions - free months and free roof coverage - while Choice offers a much higher per-item cap. Here's how they compare.",
    verdict:
      "Choice wins this matchup on coverage: its $3,000 per-item cap is far higher than the roughly $500 per-item limits reported for Select, which can leave you paying most of an appliance replacement. Select can still make sense if a low premium matters most and you understand the limits. Compare the annual cost, not just the promotion.",
    verdictWinnerPoints: ["$3,000 per covered item", "Simple two-plan lineup", "Not sold only in Washington"],
    verdictLoserPoints: ["Frequent free-months promotions", "Free roof leak coverage in promos", "Low starting price"],
    winnerId: "choice-home-warranty",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider1",
        explanation: "Choice caps covered items at $3,000; third-party reviews report Select's caps at about $500 per item for many appliances, plumbing and electrical repairs.",
        supportingPoints: ["$3,000 at Choice", "~$500 per item at Select"],
      },
      {
        name: "Pricing & promotions",
        winner: "provider2",
        explanation: "Select regularly advertises $150 off, free months and free roof coverage on annual plans, which can push its first-year cost below Choice's.",
        supportingPoints: ["Free months on annual plans", "Free roof coverage promo"],
      },
      {
        name: "Service call fee",
        winner: "provider2",
        explanation: "Select's typical service fee (~$60-$75) is lower than Choice's typical ~$100.",
        supportingPoints: ["~$60-$75 at Select", "~$100 at Choice"],
      },
      {
        name: "Availability",
        winner: "provider1",
        explanation: "Choice is reported as unavailable only in Washington; Select is reported as unavailable in Nevada, Washington and Wisconsin.",
        supportingPoints: ["Choice: 49 states", "Select: 47 states (reported)"],
      },
    ],
    features: features("choice-home-warranty", "select-home-warranty", { caps: "provider1", fee: "provider2", states: "provider1" }),
    updatedAt: UPDATED,
  },
  {
    slug: "american-home-shield-vs-select-home-warranty",
    provider1Id: "american-home-shield",
    provider2Id: "select-home-warranty",
    title: "American Home Shield vs Select Home Warranty",
    matchupLabel: "American Home Shield vs Select",
    subtitle: "Premium coverage and high caps vs a low-cost, promotion-driven plan",
    description:
      "Compare American Home Shield and Select Home Warranty - coverage, caps, price, promotions and which home warranty fits your budget.",
    intro:
      "American Home Shield and Select sit at opposite ends of the market. AHS charges more but offers some of the highest caps and broadest top-tier coverage in the industry. Select is one of the cheapest options, especially with its frequent promotions, but its limits are low. Here's how they compare.",
    verdict:
      "American Home Shield wins for anyone worried about a big repair: its appliance caps of $2,000-$4,000 and $5,000 HVAC limit dwarf Select's reported ~$500 per-item caps. Select is the budget pick for homeowners who mainly want help with smaller repairs and accept the limits.",
    verdictWinnerPoints: ["Up to $4,000 per appliance (ShieldPlatinum)", "$5,000 HVAC limit", "Founded 1971"],
    verdictLoserPoints: ["Much lower starting price", "Free months and roof coverage promos", "Lower service fee"],
    winnerId: "american-home-shield",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider1",
        explanation: "AHS's appliance and HVAC caps are several times higher than the limits reported for Select.",
        supportingPoints: ["$2,000-$4,000 per appliance at AHS", "~$500 per item at Select"],
      },
      {
        name: "Price",
        winner: "provider2",
        explanation: "Select's prices and promotions make it one of the cheapest plans available; AHS's top tier costs considerably more.",
        supportingPoints: ["~$36-$64/mo at Select before promos", "~$30-$90/mo at AHS by tier"],
      },
      {
        name: "Top-tier extras",
        winner: "provider1",
        explanation: "ShieldPlatinum adds permits and code-violation coverage, roof leak repair and an HVAC tune-up.",
        supportingPoints: ["Permits & code upgrades", "Roof leak up to $1,000"],
      },
      {
        name: "Reputation",
        winner: "provider1",
        explanation: "AHS is BBB-accredited and has a long track record; Select is not BBB-accredited and its BBB file shows a high complaint volume.",
        supportingPoints: ["AHS: BBB accredited", "Select: BBB B-, not accredited"],
      },
    ],
    features: features("american-home-shield", "select-home-warranty", { caps: "provider1", price: "provider2", since: "provider1" }),
    updatedAt: UPDATED,
  },
  {
    slug: "american-home-shield-vs-first-american",
    provider1Id: "american-home-shield",
    provider2Id: "first-american",
    title: "American Home Shield vs First American Home Warranty",
    matchupLabel: "American Home Shield vs First American",
    subtitle: "Nationwide reach vs a real-estate favorite with high limits",
    description:
      "Compare American Home Shield and First American Home Warranty - plans, cost, caps, state availability and which is better for buyers and homeowners.",
    intro:
      "American Home Shield and First American are two of the most established home warranty brands, and both are widely sold through real estate transactions. AHS serves 48 states; First American serves fewer states but is known for generous HVAC terms and high appliance limits on its Premium plan. Here's how they compare.",
    verdict:
      "American Home Shield wins for most homeowners because it is available almost everywhere and offers three clear tiers with optional extras. First American is an excellent choice if you live in a state it serves and want high limits, particularly on HVAC, and a large base of positive Trustpilot reviews.",
    verdictWinnerPoints: ["Available in 48 states", "Three clear tiers", "Permits & code coverage on ShieldPlatinum"],
    verdictLoserPoints: ["Up to $7,000 appliance limit on Premium", "No dollar limit on AC refrigerant (per contracts)", "4.0 on Trustpilot across 19,000+ reviews"],
    winnerId: "american-home-shield",
    categories: [
      {
        name: "Availability",
        winner: "provider1",
        explanation: "AHS is unavailable only in Alaska and Hawaii; First American serves roughly 35-37 states plus D.C.",
        supportingPoints: ["AHS: 48 states", "First American: ~35-37 states"],
      },
      {
        name: "Coverage caps",
        winner: "provider2",
        explanation: "First American's Premium plan reportedly raises appliance limits to $7,000 and its contracts note no dollar limit on AC refrigerant.",
        supportingPoints: ["$7,000 appliances (Premium)", "Generous HVAC terms"],
      },
      {
        name: "Customer reviews",
        winner: "provider2",
        explanation: "First American shows 4.0 on Trustpilot across roughly 19,000 reviews; AHS sits in the mid-3s.",
        supportingPoints: ["First American: 4.0", "AHS: ~3.5-3.7"],
      },
      {
        name: "Plan options",
        winner: "provider1",
        explanation: "AHS's three tiers plus add-ons (pool/spa, well pump, septic, guest unit, electronics) offer more ways to build a plan.",
        supportingPoints: ["Systems-only option", "Wide add-on menu"],
      },
    ],
    features: features("american-home-shield", "first-american", { states: "provider1", caps: "provider2" }),
    updatedAt: UPDATED,
  },
  {
    slug: "choice-home-warranty-vs-first-american",
    provider1Id: "choice-home-warranty",
    provider2Id: "first-american",
    title: "Choice Home Warranty vs First American Home Warranty",
    matchupLabel: "Choice vs First American",
    subtitle: "Simple direct-to-consumer plans vs a real-estate brand with higher limits",
    description:
      "Compare Choice Home Warranty and First American Home Warranty - cost, plans, caps, availability and which suits your home.",
    intro:
      "Choice sells mainly direct to homeowners with two simple plans; First American is backed by First American Financial and is a staple of real estate closings. Here's how they compare on price, coverage and availability.",
    verdict:
      "Choice wins for broad availability and simplicity - it sells in 49 states with two easy plans. First American is worth a look if you live in one of its states, especially if you want high appliance limits or generous HVAC coverage.",
    verdictWinnerPoints: ["Sold in 49 states", "Two simple plans", "$3,000 per item"],
    verdictLoserPoints: ["Higher limits on Premium", "4.0 Trustpilot score", "Strong real-estate channel"],
    winnerId: "choice-home-warranty",
    categories: [
      {
        name: "Availability",
        winner: "provider1",
        explanation: "Choice is reported unavailable only in Washington; First American serves roughly 35-37 states.",
        supportingPoints: ["Choice: 49 states", "First American: ~35-37 states"],
      },
      {
        name: "Coverage caps",
        winner: "provider2",
        explanation: "First American's Premium plan reportedly allows up to $7,000 for appliances, above Choice's $3,000 per item.",
        supportingPoints: ["$7,000 (Premium)", "$3,000 at Choice"],
      },
      {
        name: "Plan simplicity",
        winner: "provider1",
        explanation: "Choice's Basic and Total plans are easy to compare online.",
        supportingPoints: ["Two plans", "Clear add-on menu"],
      },
      {
        name: "Service fee options",
        winner: "provider2",
        explanation: "First American lets you choose a $75, $100 or $125 fee to balance premium against per-visit cost.",
        supportingPoints: ["Three fee levels", "Higher fee, lower premium"],
      },
    ],
    features: features("choice-home-warranty", "first-american", { states: "provider1", caps: "provider2", fee: "provider2" }),
    updatedAt: UPDATED,
  },
  {
    slug: "choice-home-warranty-vs-home-warranty-of-america",
    provider1Id: "choice-home-warranty",
    provider2Id: "home-warranty-of-america",
    title: "Choice Home Warranty vs Home Warranty of America",
    matchupLabel: "Choice vs Home Warranty of America",
    subtitle: "Sister brands with different plans, caps and contract lengths",
    description:
      "Compare Choice Home Warranty and Home Warranty of America (HWA) - same owner, different plans, caps, contract terms and availability.",
    intro:
      "Choice Home Warranty bought Home Warranty of America in 2022, but the two still sell separate plans. Choice offers Basic and Total plans with a $3,000 per-item cap; HWA offers Premier and Premier Plus with up to $5,000 on most approved repairs and 13-month contracts. Here's how they compare.",
    verdict:
      "Choice edges this matchup on its simpler plans and a much larger base of customer reviews at a similar price. HWA is a strong alternative if you want higher repair limits, a 13-month term or you live in Washington, where Choice doesn't sell plans.",
    verdictWinnerPoints: ["Larger customer review base", "Two simple plans", "Frequent first-month promotions"],
    verdictLoserPoints: ["Up to $5,000 on most repairs", "Available in all 50 states", "13-month contracts"],
    winnerId: "choice-home-warranty",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider2",
        explanation: "HWA reportedly pays up to $5,000 on most approved repairs; Choice caps covered items at $3,000.",
        supportingPoints: ["$5,000 at HWA", "$3,000 at Choice"],
      },
      {
        name: "Availability",
        winner: "provider2",
        explanation: "HWA sells in all 50 states; Choice is not sold in Washington.",
        supportingPoints: ["HWA: 50 states", "Choice: 49 states"],
      },
      {
        name: "Customer reviews",
        winner: "provider1",
        explanation: "Choice has a far larger Trustpilot review base (60,000+) at a similar average score.",
        supportingPoints: ["Choice: ~3.9 across 62,000+", "HWA: ~4.0 across 3,300+"],
      },
      {
        name: "Price",
        winner: "tie",
        explanation: "Reported prices are similar: HWA's sample quote was ~$48-$61/mo and Choice's plans ~$46-$58/mo.",
        supportingPoints: ["Similar monthly cost", "Both ~$100 service fee"],
      },
    ],
    features: features("choice-home-warranty", "home-warranty-of-america", { caps: "provider2", states: "provider2" }),
    updatedAt: UPDATED,
  },
  {
    slug: "select-home-warranty-vs-home-warranty-of-america",
    provider1Id: "select-home-warranty",
    provider2Id: "home-warranty-of-america",
    title: "Select Home Warranty vs Home Warranty of America",
    matchupLabel: "Select vs Home Warranty of America",
    subtitle: "Promotion-driven low prices vs much higher repair limits",
    description:
      "Compare Select Home Warranty and Home Warranty of America - price, promotions, coverage caps, availability and which is better value.",
    intro:
      "Select and HWA both sell affordable direct-to-consumer plans, but their coverage limits are very different. Here's how they compare.",
    verdict:
      "Home Warranty of America wins this matchup: its reported $5,000 limit on most repairs is roughly ten times Select's reported ~$500 per-item caps, and it sells in all 50 states. Select's promotions can make its first year cheaper, but a single large repair can erase that saving.",
    verdictWinnerPoints: ["Up to $5,000 on most repairs", "All 50 states", "13-month contracts"],
    verdictLoserPoints: ["Free months on annual plans", "Free roof leak coverage in promos", "Lower typical service fee"],
    winnerId: "home-warranty-of-america",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider2",
        explanation: "HWA's reported $5,000 limit on most approved repairs is far above Select's reported ~$500 per-item caps.",
        supportingPoints: ["$5,000 at HWA", "~$500 at Select"],
      },
      {
        name: "Promotions",
        winner: "provider1",
        explanation: "Select regularly offers free months, $150 off and free roof coverage on annual plans.",
        supportingPoints: ["Free months", "Free roof coverage"],
      },
      {
        name: "Availability",
        winner: "provider2",
        explanation: "HWA sells in all 50 states; Select is reported unavailable in Nevada, Washington and Wisconsin.",
        supportingPoints: ["HWA: 50 states", "Select: 47 states (reported)"],
      },
      {
        name: "Service call fee",
        winner: "provider1",
        explanation: "Select's typical fee (~$60-$75) is below HWA's ~$100.",
        supportingPoints: ["~$60-$75 at Select", "~$100 at HWA"],
      },
    ],
    features: features("select-home-warranty", "home-warranty-of-america", { caps: "provider2", states: "provider2", fee: "provider1" }),
    updatedAt: UPDATED,
  },
  {
    slug: "american-home-shield-vs-2-10-home-buyers-warranty",
    provider1Id: "american-home-shield",
    provider2Id: "2-10-home-buyers-warranty",
    title: "American Home Shield vs 2-10 Home Buyers Warranty",
    matchupLabel: "American Home Shield vs 2-10",
    subtitle: "Sister brands under Frontdoor - a home warranty leader vs a structural-warranty specialist",
    description:
      "Compare American Home Shield and 2-10 Home Buyers Warranty - both owned by Frontdoor - on plans, cost, caps and availability.",
    intro:
      "Since December 2024, American Home Shield and 2-10 Home Buyers Warranty have shared a parent company, Frontdoor, Inc. They remain separate brands: AHS is the largest consumer home warranty company, while 2-10 is best known for new-home structural warranties sold through builders. Here's how their home warranty plans compare.",
    verdict:
      "American Home Shield wins for homeowners shopping on their own: higher caps, more add-ons, 48-state availability and a much larger customer record. 2-10 is a reasonable option if a builder or agent offers it, and its starting price is low - but check its caps and state list first.",
    verdictWinnerPoints: ["Higher appliance and HVAC caps", "48-state availability", "Wide add-on menu"],
    verdictLoserPoints: ["Low starting price", "$25,000 annual aggregate", "Strong builder and real-estate presence"],
    winnerId: "american-home-shield",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider1",
        explanation: "AHS offers $2,000-$4,000 per appliance and $5,000 for HVAC; 2-10 reportedly caps core systems at $2,000 each.",
        supportingPoints: ["$5,000 HVAC at AHS", "$2,000 per core system at 2-10"],
      },
      {
        name: "Price",
        winner: "provider2",
        explanation: "2-10's plans reportedly start around $27-$35 a month, below most AHS tiers.",
        supportingPoints: ["From ~$27-$35/mo at 2-10"],
      },
      {
        name: "Availability",
        winner: "provider1",
        explanation: "AHS is unavailable only in Alaska and Hawaii; 2-10 is reported unavailable in six states.",
        supportingPoints: ["AHS: 48 states", "2-10: 44 states (reported)"],
      },
      {
        name: "Reputation",
        winner: "provider1",
        explanation: "AHS has a much larger public customer record; 2-10's Trustpilot sample is small and mostly negative.",
        supportingPoints: ["AHS: 15,000+ Trustpilot reviews", "2-10: small sample"],
      },
    ],
    features: features("american-home-shield", "2-10-home-buyers-warranty", { caps: "provider1", price: "provider2", states: "provider1" }),
    updatedAt: UPDATED,
  },
  {
    slug: "first-american-vs-2-10-home-buyers-warranty",
    provider1Id: "first-american",
    provider2Id: "2-10-home-buyers-warranty",
    title: "First American vs 2-10 Home Buyers Warranty",
    matchupLabel: "First American vs 2-10",
    subtitle: "Two real-estate favorites compared for buyers and sellers",
    description:
      "Compare First American Home Warranty and 2-10 Home Buyers Warranty for real estate transactions - plans, cost, caps and availability.",
    intro:
      "First American and 2-10 are both heavily used in real estate transactions - First American through its title and settlement parent, 2-10 through its builder and agent network. Here's how their home warranty plans compare.",
    verdict:
      "First American wins on coverage limits and customer reviews, with a 4.0 Trustpilot score across roughly 19,000 reviews. 2-10 is the cheaper starting point and covers some states First American doesn't, so check which is offered at your closing.",
    verdictWinnerPoints: ["Higher appliance limits", "4.0 on Trustpilot", "Generous HVAC terms"],
    verdictLoserPoints: ["Lower starting price", "Builder structural-warranty expertise", "Frontdoor-owned"],
    winnerId: "first-american",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider1",
        explanation: "First American reportedly offers $3,500-$7,000 appliance limits; 2-10 reportedly caps core systems at $2,000 each.",
        supportingPoints: ["Up to $7,000 at First American", "$2,000 per core system at 2-10"],
      },
      {
        name: "Customer reviews",
        winner: "provider1",
        explanation: "First American has a large, positive Trustpilot record; 2-10's sample is small and mostly negative.",
        supportingPoints: ["4.0 across ~19,000", "2-10: small sample"],
      },
      {
        name: "Price",
        winner: "provider2",
        explanation: "2-10's plans reportedly start lower than First American's.",
        supportingPoints: ["From ~$27-$35/mo at 2-10"],
      },
      {
        name: "Availability",
        winner: "tie",
        explanation: "Neither is available everywhere: First American serves ~35-37 states, 2-10 roughly 44. Check your state for both.",
        supportingPoints: ["Both have state gaps"],
      },
    ],
    features: features("first-american", "2-10-home-buyers-warranty", { caps: "provider1", price: "provider2" }),
    updatedAt: UPDATED,
  },
  {
    slug: "choice-home-warranty-vs-home-service-club",
    provider1Id: "choice-home-warranty",
    provider2Id: "home-service-club",
    title: "Choice Home Warranty vs The Home Service Club",
    matchupLabel: "Choice vs The Home Service Club",
    subtitle: "Higher per-item caps vs no age limits on covered items",
    description:
      "Compare Choice Home Warranty and The Home Service Club - plans, cost, caps, age limits and customer reviews.",
    intro:
      "Choice and The Home Service Club both sell direct to homeowners. The Home Service Club's standout feature is no age limit on covered systems and appliances; Choice's is a higher, simpler $3,000 per-item cap. Here's how they compare.",
    verdict:
      "Choice wins: its $3,000 per-item cap beats The Home Service Club's mostly $300-$2,000 item caps and $6,000-$9,000 annual limits, and its customer record is much stronger. The Home Service Club's no-age-limit policy is appealing for very old equipment, but read the caps carefully.",
    verdictWinnerPoints: ["$3,000 per covered item", "No annual aggregate cap reported", "Much larger, stronger review record"],
    verdictLoserPoints: ["No age limit on covered items", "Lower service fee options", "Two simple plans"],
    winnerId: "choice-home-warranty",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider1",
        explanation: "Choice's $3,000 per-item cap is higher than most of The Home Service Club's per-item caps, which also sit under an annual aggregate.",
        supportingPoints: ["$3,000 at Choice", "$300-$2,000 per item at HSC"],
      },
      {
        name: "Older equipment",
        winner: "provider2",
        explanation: "The Home Service Club advertises no age limit on covered systems and appliances.",
        supportingPoints: ["No age limit at HSC"],
      },
      {
        name: "Customer reviews",
        winner: "provider1",
        explanation: "Choice's Trustpilot score is far higher than The Home Service Club's recent low snapshots.",
        supportingPoints: ["Choice: ~3.9", "HSC: low recent scores"],
      },
      {
        name: "Price",
        winner: "tie",
        explanation: "Both land in a similar ~$45-$70/mo range depending on plan.",
        supportingPoints: ["Similar monthly cost"],
      },
    ],
    features: features("choice-home-warranty", "home-service-club", { caps: "provider1" }),
    updatedAt: UPDATED,
  },
  {
    slug: "american-home-shield-vs-home-service-club",
    provider1Id: "american-home-shield",
    provider2Id: "home-service-club",
    title: "American Home Shield vs The Home Service Club",
    matchupLabel: "American Home Shield vs The Home Service Club",
    subtitle: "Industry leader vs a smaller, no-age-limit plan",
    description:
      "Compare American Home Shield and The Home Service Club - plans, price, caps, age limits and reputation.",
    intro:
      "American Home Shield is the largest home warranty company in the US; The Home Service Club is a smaller provider that stands out for covering items regardless of age. Here's how they compare.",
    verdict:
      "American Home Shield wins clearly on caps, plan options and reputation. The Home Service Club is only worth considering if you have very old equipment and accept its low per-item and annual limits.",
    verdictWinnerPoints: ["$5,000 HVAC cap", "Up to $4,000 per appliance", "BBB accredited"],
    verdictLoserPoints: ["No age limit on items", "Simple two-plan lineup", "Comparable mid-range price"],
    winnerId: "american-home-shield",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider1",
        explanation: "AHS's caps are substantially higher than The Home Service Club's mostly $300-$2,000 item limits.",
        supportingPoints: ["$5,000 HVAC at AHS", "$6,000-$9,000 annual cap at HSC"],
      },
      {
        name: "Older equipment",
        winner: "provider2",
        explanation: "The Home Service Club covers items regardless of age.",
        supportingPoints: ["No age limit"],
      },
      {
        name: "Reputation",
        winner: "provider1",
        explanation: "AHS has a long track record and BBB accreditation; recent Home Service Club reviews are largely negative.",
        supportingPoints: ["AHS since 1971", "HSC low recent reviews"],
      },
      {
        name: "Plan options",
        winner: "provider1",
        explanation: "AHS offers three tiers and a long add-on list.",
        supportingPoints: ["Three tiers", "Many add-ons"],
      },
    ],
    features: features("american-home-shield", "home-service-club", { caps: "provider1", since: "provider1" }),
    updatedAt: UPDATED,
  },
  {
    slug: "home-warranty-of-america-vs-home-service-club",
    provider1Id: "home-warranty-of-america",
    provider2Id: "home-service-club",
    title: "Home Warranty of America vs The Home Service Club",
    matchupLabel: "HWA vs The Home Service Club",
    subtitle: "Higher repair limits vs no age limits",
    description:
      "Compare Home Warranty of America and The Home Service Club - plans, price, caps, availability and reviews.",
    intro:
      "HWA and The Home Service Club are mid-priced alternatives to the biggest brands. HWA offers higher repair limits and nationwide availability; The Home Service Club covers items regardless of age. Here's how they compare.",
    verdict:
      "Home Warranty of America wins on limits (up to $5,000 on most repairs), 50-state availability and a better Trustpilot record. The Home Service Club suits homes with very old equipment, within its lower caps.",
    verdictWinnerPoints: ["Up to $5,000 on most repairs", "All 50 states", "4.0 on Trustpilot"],
    verdictLoserPoints: ["No age limit on items", "Lower service fee options", "Comprehensive plan covers 33 items"],
    winnerId: "home-warranty-of-america",
    categories: [
      {
        name: "Coverage caps",
        winner: "provider1",
        explanation: "HWA's reported $5,000 repair limit beats The Home Service Club's mostly $300-$2,000 per-item caps.",
        supportingPoints: ["$5,000 at HWA", "$300-$2,000 at HSC"],
      },
      {
        name: "Older equipment",
        winner: "provider2",
        explanation: "The Home Service Club covers items regardless of age.",
        supportingPoints: ["No age limit"],
      },
      {
        name: "Customer reviews",
        winner: "provider1",
        explanation: "HWA shows ~4.0 on Trustpilot; The Home Service Club's recent snapshots are far lower.",
        supportingPoints: ["HWA: ~4.0", "HSC: low recent scores"],
      },
      {
        name: "Price",
        winner: "tie",
        explanation: "Both sit in a similar ~$48-$67/mo range.",
        supportingPoints: ["Similar monthly cost"],
      },
    ],
    features: features("home-warranty-of-america", "home-service-club", { caps: "provider1", states: "provider1" }),
    updatedAt: UPDATED,
  },
];

const AUTHOR = "Top Home Warranty Editorial Team";
const DISCLAIMER =
  "<p><em>This article is general information, not legal, insurance or financial advice. Coverage, prices and terms vary by company, plan and state - always read the full sample contract before you buy.</em></p>";

export const homeWarrantyConfig: SiteConfig = {
  siteName: "Top Home Warranty",
  disclosureText:
    "Some providers featured on this site may compensate us. This may affect the order and placement of listings but does not influence our editorial ratings or reviews.",

  hero: {
    backgroundImageUrl: "",
    imageAlt: "Home warranty coverage for home systems and appliances",
    updatedLabel: "Last Updated: October 2026",
    h1: "Best Home Warranty Companies of 2026",
    h2: "The top home warranty plans, ranked and reviewed",
    description:
      "Compare home warranty companies by coverage, price, service fees, coverage caps and real claims experience.",
  },

  sidebar: {
    socialProofNumber: "12,600+",
    socialProofText: "homeowners compared home warranty plans on our platform this month.",
    secureTitle: "Independent & Unbiased",
    secureText:
      "We compare published plans and contracts side by side - and we never sell your information to warranty companies.",
    featuredImageUrl: "/sidebar-featured.webp",
    featuredImageAlt: "Home warranty plans compared",
    featuredImageLink: "#",
    blockOrder: ["socialProof", "secureBadge", "editorialReviews", "rankingMethodology", "disclosure"],
  },

  cardSocialProof: {
    number: "12,600+",
    text: "homeowners compared plans this month",
  },

  ranking: {
    providerOrder: [
      "choice-home-warranty",
      "american-home-shield",
      "select-home-warranty",
      "first-american",
      "home-warranty-of-america",
      "home-service-club",
      "2-10-home-buyers-warranty",
    ],
    positions: [
      { score: 9.6, starRating: 5, label: "Exceptional", badge: "Our Top Pick" },
      { score: 9.4, starRating: 5, label: "Excellent" },
      { score: 9.1, starRating: 5, label: "Excellent" },
      { score: 8.9, starRating: 4, label: "Very Good" },
      { score: 8.7, starRating: 4, label: "Very Good" },
      { score: 8.3, starRating: 4, label: "Very Good" },
      { score: 8.1, starRating: 4, label: "Very Good" },
    ],
  },

  providers: [
    {
      id: "choice-home-warranty",
      name: "Choice Home Warranty",
      tagline:
        "Two simple plans covering home systems and appliances, with a $3,000 per-item cap and coverage in 49 states",
      logo: "/logos/choice-home-warranty.png",
      smallLogo: "/logos/choice-home-warranty.png",
      highlights: [
        "Basic & Total plans",
        "$3,000 per covered item",
        "Online claims, 24/7",
        "Available in 49 states",
      ],
      affiliateUrl: "https://www.choicehomewarranty.com/",
      ctaText: "Get a Quote",
      excludedStates: ["WA"],
      // Third-party snapshot (Oct 2026): ~3.9 across ~62,000 reviews on the
      // choicehomewarranty.com profile. Refresh from the live profile.
      trustpilotRating: "3.9",
      trustpilotReviewCount: "62,000+",
    },
    {
      id: "american-home-shield",
      name: "American Home Shield",
      tagline:
        "The industry's oldest home warranty company - three plan tiers, a choice of service fee and some of the highest coverage caps",
      logo: "/logos/american-home-shield.png",
      smallLogo: "/logos/american-home-shield.png",
      highlights: [
        "ShieldSilver, Gold & Platinum",
        "Up to $5,000 HVAC coverage",
        "Choose a $100 or $125 fee",
        "In business since 1971",
      ],
      affiliateUrl: "https://www.ahs.com/",
      ctaText: "Get a Quote",
      excludedStates: ["AK", "HI"],
      // Third-party snapshot (Oct 2026): the ahs.com profile showed 3.5-3.7
      // across ~15,450 reviews. Conservative figure used; refresh from live.
      trustpilotRating: "3.5",
      trustpilotReviewCount: "15,450",
    },
    {
      id: "select-home-warranty",
      name: "Select Home Warranty",
      tagline:
        "One of the lowest-cost plans available, with frequent free-month and free roof coverage promotions",
      logo: "/logos/select-home-warranty.png",
      smallLogo: "/logos/select-home-warranty.png",
      highlights: [
        "Bronze, Gold & Platinum Care",
        "Low starting price",
        "Free roof leak coverage promo",
        "Multi-year plan options",
      ],
      affiliateUrl: "https://www.selecthomewarranty.com/",
      ctaText: "Get a Quote",
      excludedStates: ["NV", "WA", "WI"],
    },
    {
      id: "first-american",
      name: "First American Home Warranty",
      tagline:
        "A real-estate favorite backed by First American Financial, with high appliance limits and generous HVAC terms",
      logo: "/logos/first-american.png",
      smallLogo: "/logos/first-american.png",
      highlights: [
        "Up to $7,000 appliance limit",
        "Choose a $75-$125 service fee",
        "Popular with buyers & sellers",
        "4.0 on Trustpilot",
      ],
      affiliateUrl: "https://homewarranty.firstam.com/",
      ctaText: "Get a Quote",
      // Third-party snapshot (Oct 2026): 4.0 across ~19,270 reviews.
      trustpilotRating: "4.0",
      trustpilotReviewCount: "19,270",
    },
    {
      id: "home-warranty-of-america",
      name: "Home Warranty of America",
      tagline:
        "Nationwide coverage with up to $5,000 on most approved repairs and 13-month contracts",
      logo: "/logos/home-warranty-of-america.png",
      smallLogo: "/logos/home-warranty-of-america.png",
      highlights: [
        "Premier & Premier Plus plans",
        "Up to $5,000 on most repairs",
        "Available in all 50 states",
        "13-month contracts",
      ],
      affiliateUrl: "https://www.hwahomewarranty.com/",
      ctaText: "Get a Quote",
      // Third-party snapshot (Oct 2026): 4.0 across ~3,365 reviews.
      trustpilotRating: "4.0",
      trustpilotReviewCount: "3,365",
    },
    {
      id: "home-service-club",
      name: "The Home Service Club",
      tagline:
        "Two straightforward plans with no age limit on covered systems and appliances",
      logo: "/logos/home-service-club.png",
      smallLogo: "/logos/home-service-club.png",
      highlights: [
        "Standard & Comprehensive plans",
        "No age limit on covered items",
        "Up to 33 covered items",
        "30-day money-back guarantee",
      ],
      affiliateUrl: "https://hscwarranty.com/",
      ctaText: "Get a Quote",
    },
    {
      id: "2-10-home-buyers-warranty",
      name: "2-10 Home Buyers Warranty",
      tagline:
        "A structural-warranty specialist owned by Frontdoor, with low-cost home warranty plans for buyers and homeowners",
      logo: "/logos/2-10-home-buyers-warranty.png",
      smallLogo: "/logos/2-10-home-buyers-warranty.png",
      highlights: [
        "Low starting price",
        "$25,000 annual coverage limit",
        "Builder & real-estate expertise",
        "Owned by Frontdoor, Inc.",
      ],
      affiliateUrl: "https://www.2-10.com/",
      ctaText: "Get a Quote",
      excludedStates: ["AK", "HI", "NH", "OK", "WI", "WY"],
    },
  ],

  reviews: [
    {
      slug: "choice-home-warranty",
      providerId: "choice-home-warranty",
      shortSummary:
        "A budget-friendly home warranty with two simple plans, a $3,000 per-item cap and coverage in every state except Washington - plus a regulatory history worth knowing about.",
      reviewIntro:
        "Choice Home Warranty has sold home warranties since 2008 and is one of the most heavily advertised brands in the industry. Its lineup is deliberately simple: a Basic Plan for core systems and kitchen appliances, and a Total Plan that adds air conditioning, the refrigerator and laundry machines. Optional add-ons cover items such as pools, spas, well pumps and septic systems. This review covers what Choice includes, what it costs, the limits in its contract and who it suits best.",
      keyFeatures: [
        "Two plans: Basic and Total",
        "$3,000 cap per covered item per term",
        "Online and phone claims",
        "Add-ons for pool/spa, well pump, sump pump, septic and roof leak",
        "30-day workmanship guarantee on repairs",
        "Sold in every state except Washington",
      ],
      pricingSummary:
        "Approximate only - prices depend on your address and promotions. Third-party quotes from 2025 put Choice's Basic Plan at roughly $46-$49 a month and the Total Plan at roughly $55-$58 a month. The service call fee is typically about $100 per claim (lower in some markets), and it is generally owed when a technician visits even if the claim is denied. Choice frequently advertises first-month-free and dollar-off promotions. Get a quote for your address before buying.",
      pricingPlans: [
        {
          name: "Basic Plan",
          medication: "Heating, plumbing, electrical, water heater, ductwork + kitchen appliances",
          price: "~$46-$49",
          unit: "/mo",
          cadence: "Reported",
          highlights: ["Systems + kitchen appliances", "$3,000 per covered item"],
        },
        {
          name: "Total Plan",
          medication: "Everything in Basic + AC, refrigerator, clothes washer and dryer",
          price: "~$55-$58",
          unit: "/mo",
          cadence: "Reported",
          highlights: ["Adds AC and laundry", "Most popular for full coverage"],
        },
      ],
      treatmentOptions: [
        "Basic Plan - heating, plumbing, electrical, water heater, ductwork and kitchen appliances",
        "Total Plan - adds air conditioning, refrigerator, clothes washer and dryer",
        "Optional add-ons - pool/spa, well pump, sump pump, septic, roof leak and more",
      ],
      pros: [
        "Simple, easy-to-compare plans",
        "$3,000 per-item cap is solid for the price",
        "Available in 49 states",
        "Large customer review base on Trustpilot",
      ],
      cons: [
        "$11.8 million consent judgment with the Arizona Attorney General in 2026 over claim-handling allegations (no admission of wrongdoing)",
        "Service fee generally owed even if a claim is denied",
        "Not sold in Washington",
        "Low BBB customer review average, typical of the industry",
      ],
      bestFor: [
        "Homeowners who want simple, affordable systems-and-appliance coverage",
        "Buyers who want a solid per-item cap without paying premium-tier prices",
        "Anyone comfortable reading the contract's exclusions before signing",
      ],
      finalVerdict:
        "Choice Home Warranty is our top pick for value: two clear plans, a $3,000 per-item cap and availability in 49 states at prices that typically undercut comparable tiers from the biggest competitors. The caveat is its regulatory history - most recently an $11.8 million consent judgment with the Arizona Attorney General in 2026 over allegations about claim handling and disclosures, which Choice did not admit. As with any home warranty, read the sample contract's limits and exclusions, keep maintenance records, and confirm current pricing for your address before you buy.",
      howItWorks: [
        { timing: "Step 1", title: "Choose a plan", detail: "Pick Basic or Total and any add-ons, and get a price for your address online." },
        { timing: "Step 2", title: "Wait out the 30-day period", detail: "Coverage for new plans begins 30 days after purchase." },
        { timing: "Step 3", title: "File a claim", detail: "When a covered item fails, file online or by phone; Choice assigns a technician and you pay the service fee at the visit." },
      ],
      trustBadges: ["Since 2008", "$3,000 per item", "49 states"],
      updatedAt: UPDATED,
    },
    {
      slug: "american-home-shield",
      providerId: "american-home-shield",
      shortSummary:
        "The largest and oldest home warranty company, with three tiers, a choice of service fee and some of the highest caps available - at a higher price on its top plan.",
      reviewIntro:
        "American Home Shield (AHS) has been selling home warranties since 1971 and is owned by Frontdoor, Inc., a publicly traded company that also owns 2-10 Home Buyers Warranty. AHS offers three main tiers - ShieldSilver for systems, ShieldGold to add appliances, and ShieldPlatinum for the broadest coverage - plus a menu of add-ons. This review covers what each tier includes, what it costs, the caps that matter and who AHS suits best.",
      keyFeatures: [
        "Three tiers: ShieldSilver, ShieldGold, ShieldPlatinum",
        "Appliance caps of $2,000 (Gold) to $4,000 (Platinum) per item",
        "$5,000 HVAC limit",
        "ShieldPlatinum adds roof leak repair, an HVAC tune-up and permits/code coverage",
        "Choose a $100 or $125 service fee",
        "Online, app and phone claims",
      ],
      pricingSummary:
        "Approximate only - AHS prices vary by address and promotion. Reported ranges are roughly $30-$40 a month for ShieldSilver, $50-$60 for ShieldGold and $80-$90 for ShieldPlatinum. You choose a $100 or $125 service fee per request (a higher fee lowers the premium). Add-ons such as pool/spa, well pump and septic are reported at roughly $5-$18 a month each. AHS runs rotating promotions, so check the current offer.",
      pricingPlans: [
        {
          name: "ShieldSilver",
          medication: "14 home systems - heating, cooling, plumbing, electrical, water heater and more",
          price: "~$30-$40",
          unit: "/mo",
          cadence: "Reported",
          highlights: ["Systems only"],
        },
        {
          name: "ShieldGold",
          medication: "ShieldSilver + 9 kitchen and laundry appliances",
          price: "~$50-$60",
          unit: "/mo",
          cadence: "Reported",
          highlights: ["Systems + appliances", "$2,000 per appliance"],
        },
        {
          name: "ShieldPlatinum",
          medication: "ShieldGold + roof leak, HVAC tune-up, permits & code violations",
          price: "~$80-$90",
          unit: "/mo",
          cadence: "Reported",
          highlights: ["$4,000 per appliance", "Roof leak up to $1,000"],
        },
      ],
      treatmentOptions: [
        "ShieldSilver - 14 home systems",
        "ShieldGold - systems plus kitchen and laundry appliances",
        "ShieldPlatinum - adds roof leak repair, HVAC tune-up, permits and code violations",
        "Add-ons - pool/spa, well pump, septic pump, guest unit, electronics and more",
      ],
      pros: [
        "Some of the highest coverage caps in the industry",
        "Top tier covers permits and code upgrades - a common source of denials elsewhere",
        "50+ years in business under a publicly traded parent",
        "Choice of service fee to balance premium and per-visit cost",
      ],
      cons: [
        "ShieldPlatinum is among the more expensive plans we track",
        "Using your own contractor requires prior approval",
        "Not available in Alaska or Hawaii",
        "Low BBB customer review average despite accreditation",
      ],
      bestFor: [
        "Homeowners who want the highest limits and broadest coverage",
        "Older homes where code upgrades and permits could come up",
        "Anyone who values a long track record over the lowest price",
      ],
      finalVerdict:
        "American Home Shield is the benchmark the rest of the industry is measured against: three clear tiers, high caps - up to $4,000 per appliance and $5,000 for HVAC - and top-tier extras such as permits, code upgrades and roof leak repair that reduce common reasons for denial. It ranks second because its best plan costs noticeably more than our top pick, and like every home warranty company it draws complaints about denials. Read the sample contract for your state and confirm current pricing before buying.",
      howItWorks: [
        { timing: "Step 1", title: "Pick a tier and service fee", detail: "Choose ShieldSilver, Gold or Platinum, add any extras, and select a $100 or $125 fee." },
        { timing: "Step 2", title: "Coverage begins", detail: "New direct plans have a 30-day waiting period; real-estate plans and renewals generally don't." },
        { timing: "Step 3", title: "Request service", detail: "File online, in the app or by phone; AHS assigns a pro from its network and you pay the service fee per request." },
      ],
      trustBadges: ["Since 1971", "Up to $5,000 HVAC", "48 states"],
      updatedAt: UPDATED,
    },
    {
      slug: "select-home-warranty",
      providerId: "select-home-warranty",
      shortSummary:
        "One of the cheapest home warranties available, with frequent free-month and roof coverage promotions - but low per-item caps.",
      reviewIntro:
        "Select Home Warranty has sold plans since about 2012 and competes hard on price. Its three plans - Bronze Care (appliances), Gold Care (systems) and Platinum Care (both, plus extras) - are frequently advertised with free months, dollar-off discounts and free roof leak coverage. This review covers what Select includes, what it really costs, the limits in its contract and who it suits.",
      keyFeatures: [
        "Three plans: Bronze, Gold and Platinum Care",
        "Frequent promotions: free months, $150 off, free roof coverage",
        "Low add-on prices (e.g. pool ~$8/mo, well pump ~$3/mo reported)",
        "Multi-year plan options",
        "Typical service fee around $60-$75",
        "Reported per-item caps around $500",
      ],
      pricingSummary:
        "Approximate only. Select's plans are reported at roughly $36-$64 a month before promotions, and around $480-$525 a year with them. Promotional free months typically require paying for the year upfront. The service fee is usually about $60-$75 but Select's own materials describe a range depending on the contract, and the terms list a $75 cancellation fee. Compare the annual total, not just the promotion.",
      treatmentOptions: [
        "Bronze Care - appliances",
        "Gold Care - home systems",
        "Platinum Care - systems and appliances plus ceiling fans, garage door opener and plumbing stoppages",
        "Add-ons - pool, spa, septic, well pump, sump pump, central vacuum, sprinklers, standalone freezer",
      ],
      pros: [
        "Among the lowest prices we track, especially with promotions",
        "Low-cost add-ons",
        "Roof leak coverage frequently included free",
        "Lower typical service fee than many competitors",
      ],
      cons: [
        "Low per-item caps (around $500 for many items, per third-party reviews)",
        "Promotional free months require annual prepayment",
        "BBB B- rating, not accredited, with a high complaint volume",
        "Reported unavailable in Nevada, Washington and Wisconsin",
      ],
      bestFor: [
        "Budget-conscious homeowners who mainly want help with smaller repairs",
        "Homes with newer major systems",
        "Buyers who will read the limits table before signing",
      ],
      finalVerdict:
        "Select Home Warranty is the budget pick: low prices, cheap add-ons and promotions that can make the first year very affordable. The trade-off is coverage - per-item caps reported around $500 can leave you paying most of a major appliance or system replacement, and its BBB record shows many complaints. It ranks third because value at Select depends heavily on what breaks. Read the contract's limits section and compare the annual total before buying.",
      howItWorks: [
        { timing: "Step 1", title: "Choose a plan and promotion", detail: "Pick Bronze, Gold or Platinum Care and check which promotion applies to annual or monthly billing." },
        { timing: "Step 2", title: "30-day waiting period", detail: "Coverage begins 30 days after payment is received." },
        { timing: "Step 3", title: "File a claim", detail: "File online or by phone and pay the service fee when the technician visits." },
      ],
      trustBadges: ["Low starting price", "Free roof coverage promo", "Multi-year options"],
      updatedAt: UPDATED,
    },
    {
      slug: "first-american",
      providerId: "first-american",
      shortSummary:
        "A long-established, real-estate-focused home warranty backed by First American Financial, with high appliance limits - but available in fewer states.",
      reviewIntro:
        "First American Home Warranty is part of First American Financial, the title and settlement company, and is one of the most common warranties offered at real estate closings. It also sells directly to homeowners. 2026 sources describe three tiers - Starter, Essential and Premium - with Premium raising appliance limits and its contracts noting generous HVAC terms. This review covers what First American offers, what it costs and who it suits.",
      keyFeatures: [
        "Tiered plans (Starter, Essential, Premium per 2026 sources)",
        "Appliance limits of $3,500 (lower tiers) to $7,000 (Premium), reported",
        "Contracts note no dollar limit on AC refrigerant",
        "Choose a $75, $100 or $125 service fee",
        "Real estate plans for buyers and sellers",
        "4.0 on Trustpilot across roughly 19,000 reviews",
      ],
      pricingSummary:
        "Approximate only. Reported prices range from about $37 to $142 a month depending on plan and state, with typical averages in the $50-$90 range. You choose a $75, $100 or $125 service fee - a higher fee lowers the premium. Real estate plans are priced separately. Get a quote for your address to confirm.",
      treatmentOptions: [
        "Starter - core coverage (check current plan names on the site)",
        "Essential - adds air conditioning, washer/dryer, water heater and garage door opener",
        "Premium - higher appliance limits",
        "Add-ons - pool/spa, well pump, septic and more",
      ],
      pros: [
        "High appliance limits on the top plan",
        "Generous HVAC terms",
        "Strong Trustpilot record",
        "Flexible service fee choice",
      ],
      cons: [
        "Available in only about 35-37 states plus D.C.",
        "Plan names and details vary by state and over time",
        "Low BBB customer review average",
        "Repair delays while waiting for parts are a common complaint",
      ],
      bestFor: [
        "Home buyers and sellers whose agent offers it",
        "Homeowners in served states who want high limits",
        "Anyone prioritizing HVAC coverage",
      ],
      finalVerdict:
        "First American Home Warranty is a solid, established choice with high limits on its top plan, strong HVAC terms and one of the better Trustpilot records in the industry. It ranks fourth mainly because it isn't available in many states and its plan details vary by location. If you live in a state it serves - especially if you're buying or selling a home - it deserves a quote.",
      howItWorks: [
        { timing: "Step 1", title: "Check your state and plan", detail: "Confirm First American serves your state and compare the tiers available there." },
        { timing: "Step 2", title: "Pick a service fee", detail: "Choose $75, $100 or $125 to balance premium against per-visit cost." },
        { timing: "Step 3", title: "Request service", detail: "File online or by phone; First American dispatches a contractor from its network." },
      ],
      trustBadges: ["First American Financial", "Up to $7,000 appliances", "4.0 Trustpilot"],
      updatedAt: UPDATED,
    },
    {
      slug: "home-warranty-of-america",
      providerId: "home-warranty-of-america",
      shortSummary:
        "A nationwide home warranty with two consumer plans, up to $5,000 on most approved repairs and 13-month contracts - owned by Choice since 2022.",
      reviewIntro:
        "Home Warranty of America (HWA) has operated since 1996 and was acquired by Choice Home Warranty in 2022, though it still sells its own plans. For homeowners it offers Premier (which excludes air conditioning) and Premier Plus (which covers all major systems and appliances including AC); real estate plans are sold through agents. This review covers HWA's plans, cost, limits and who it suits.",
      keyFeatures: [
        "Premier and Premier Plus consumer plans",
        "Up to $5,000 on most approved repairs (lower limits on some items)",
        "13-month contracts",
        "Available in all 50 states",
        "24/7 online and phone claims",
        "30-day workmanship guarantee",
      ],
      pricingSummary:
        "Approximate only. A ConsumerAffairs sample quote (Texas, $100 service fee) put Premier at about $550 a year (~$48/mo) and Premier Plus at about $700 a year (~$61/mo). Reported cancellation terms allow a full refund within 30 days and a prorated refund after that, minus the lesser of $30 or 10%. Get a quote for your address.",
      pricingPlans: [
        {
          name: "Premier",
          medication: "Major systems and appliances, excluding air conditioning",
          price: "~$48",
          unit: "/mo",
          cadence: "Sample quote",
          highlights: ["No AC coverage"],
        },
        {
          name: "Premier Plus",
          medication: "All major systems and appliances including AC",
          price: "~$61",
          unit: "/mo",
          cadence: "Sample quote",
          highlights: ["Includes AC", "Up to $5,000 most repairs"],
        },
      ],
      treatmentOptions: [
        "Premier - systems and appliances without air conditioning",
        "Premier Plus - all major systems and appliances including AC",
        "Real estate plans (Gold, Platinum, Diamond) through agents",
        "Add-ons - limited roof leak repair, pool/spa and more",
      ],
      pros: [
        "Available in every state",
        "Higher repair limit than many budget brands",
        "13-month contract gives an extra month",
        "Simple two-plan consumer lineup",
      ],
      cons: [
        "Short 30-day workmanship guarantee",
        "Poor ratings on some review sites (e.g. ConsumerAffairs)",
        "Lower limits on rust- and corrosion-related plumbing and electrical repairs",
        "Waiting-period details vary by source - confirm in your contract",
      ],
      bestFor: [
        "Homeowners in states other brands don't serve",
        "Buyers who want a higher repair limit at a mid-range price",
        "Anyone who wants a simple two-plan choice",
      ],
      finalVerdict:
        "Home Warranty of America offers a useful combination: nationwide availability, a reported $5,000 limit on most approved repairs and simple plans at a mid-range price. It ranks fifth because of its short workmanship guarantee and weak scores on some review sites. Read the limits section - especially for plumbing and electrical - and confirm pricing for your address.",
      howItWorks: [
        { timing: "Step 1", title: "Choose Premier or Premier Plus", detail: "Pick Premier Plus if you want air conditioning covered." },
        { timing: "Step 2", title: "Coverage starts", detail: "Check your contract for the waiting period that applies to your plan." },
        { timing: "Step 3", title: "File a claim 24/7", detail: "File online or by phone; HWA assigns a technician from its network." },
      ],
      trustBadges: ["Since 1996", "All 50 states", "Up to $5,000 per repair"],
      updatedAt: UPDATED,
    },
    {
      slug: "home-service-club",
      providerId: "home-service-club",
      shortSummary:
        "A smaller home warranty with no age limit on covered items and two simple plans - but low per-item caps and weak recent reviews.",
      reviewIntro:
        "The Home Service Club has sold home warranties since around 2008-2009. Its pitch is simplicity and inclusiveness: two plans - Standard (18 items) and Comprehensive (33 items) - and no age limit on covered systems and appliances. This review covers its plans, cost, limits and who it suits.",
      keyFeatures: [
        "Standard (18 items) and Comprehensive (33 items) plans",
        "No age limit on covered systems and appliances",
        "Per-item caps mostly $300-$2,000",
        "Annual aggregate cap of ~$6,000 (Standard) or ~$9,000 (Comprehensive)",
        "30-day money-back guarantee",
        "Online and phone claims",
      ],
      pricingSummary:
        "Approximate only. The Standard plan has been listed from about $54 a month ($650 a year) and Comprehensive from about $67 a month ($799 a year). Service fees range from about $65 to $125. Confirm current pricing on the company's site.",
      pricingPlans: [
        {
          name: "Standard",
          medication: "18 systems and appliances including HVAC, plumbing, refrigerator, washer/dryer",
          price: "~$54",
          unit: "/mo",
          cadence: "Listed",
          highlights: ["~$6,000 annual cap"],
        },
        {
          name: "Comprehensive",
          medication: "33 systems and appliances",
          price: "~$67",
          unit: "/mo",
          cadence: "Listed",
          highlights: ["~$9,000 annual cap"],
        },
      ],
      treatmentOptions: [
        "Standard - 18 systems and appliances",
        "Comprehensive - 33 systems and appliances",
        "Optional add-ons",
      ],
      pros: [
        "No age limit on covered items",
        "Simple two-plan structure",
        "30-day money-back guarantee",
        "Comprehensive plan covers a long item list",
      ],
      cons: [
        "Low per-item caps, plus an annual aggregate cap",
        "Recent Trustpilot snapshots are low",
        "Complaints about low cash-out offers and slow refunds",
        "Waiting period and state details not clearly published",
      ],
      bestFor: [
        "Homes with very old systems or appliances",
        "Homeowners who want a long covered-item list",
        "Buyers who understand and accept the caps",
      ],
      finalVerdict:
        "The Home Service Club stands out for covering items regardless of age, which can matter in older homes. But its per-item caps are low, an annual aggregate limit applies, and recent customer reviews are largely negative. It ranks sixth: consider it only after comparing caps against the bigger brands, and read the contract carefully.",
      howItWorks: [
        { timing: "Step 1", title: "Choose a plan", detail: "Pick Standard or Comprehensive and any add-ons." },
        { timing: "Step 2", title: "Coverage begins", detail: "Check your contract for the waiting period." },
        { timing: "Step 3", title: "File a claim", detail: "File online or by phone; the company assigns a vendor from its network." },
      ],
      trustBadges: ["No age limits", "Two simple plans", "30-day money-back"],
      updatedAt: UPDATED,
    },
    {
      slug: "2-10-home-buyers-warranty",
      providerId: "2-10-home-buyers-warranty",
      shortSummary:
        "A long-running structural-warranty specialist, now owned by Frontdoor, that also sells low-cost home warranty plans - with modest caps.",
      reviewIntro:
        "2-10 Home Buyers Warranty has operated since around 1980 and is best known for new-home structural warranties that builders provide to buyers. In December 2024, Frontdoor, Inc. - the parent of American Home Shield - completed its $585 million acquisition of 2-10. The company also sells home warranties covering systems and appliances through agents and directly. This review covers those plans, what they cost and who they suit.",
      keyFeatures: [
        "Home warranty plans for systems and appliances",
        "Reported $2,000 cap per core system (heating, AC, plumbing, electrical)",
        "Reported $25,000 annual aggregate limit",
        "Service fee options of about $65-$125",
        "Network of 6,000+ independent contractors",
        "Owned by Frontdoor, Inc. since 2024",
      ],
      pricingSummary:
        "Approximate only. Reported starting prices are around $27-$35 a month, with service fee options from about $65 to $125. Plan names and prices vary by source and state, so check 2-10's site for your address. Cancellation within 30 days is refunded minus claim costs; after that, refunds are prorated minus an admin fee and claim costs (terms vary by state).",
      treatmentOptions: [
        "Systems-focused plan (check current plan names on 2-10.com)",
        "Combination systems and appliances plans",
        "Real estate plans for buyers and sellers",
        "New-home structural warranties through builders",
      ],
      pros: [
        "Low starting price",
        "Decades of experience in builder and real estate warranties",
        "Backed by Frontdoor, Inc.",
        "Waiting period waived for renewals and real estate coverage",
      ],
      cons: [
        "Modest $2,000 caps on core systems",
        "Small, mostly negative Trustpilot sample",
        "Reported unavailable in six states",
        "Plan names and details are hard to pin down",
      ],
      bestFor: [
        "Buyers of new construction whose builder uses 2-10",
        "Home buyers offered a 2-10 plan at closing",
        "Budget shoppers who accept lower caps",
      ],
      finalVerdict:
        "2-10 Home Buyers Warranty is a respected name in builder structural warranties and now shares a parent with American Home Shield. Its consumer home warranty plans start cheap, but their $2,000 caps on core systems and thin customer record keep it seventh on our list. If it's offered through your builder or agent it's a reasonable option; if you're shopping on your own, compare caps first.",
      howItWorks: [
        { timing: "Step 1", title: "Get a plan", detail: "Buy directly, through your agent at closing, or receive structural coverage from your builder." },
        { timing: "Step 2", title: "Coverage begins", detail: "Direct plans have a 30-day waiting period; seller and buyer coverage start at enrollment and closing." },
        { timing: "Step 3", title: "Request service 24/7", detail: "2-10 dispatches a contractor from its independent network." },
      ],
      trustBadges: ["Since ~1980", "Frontdoor-owned", "Builder warranty specialist"],
      updatedAt: UPDATED,
    },
  ],

  battles,

  articles: [
    {
      slug: "what-is-a-home-warranty",
      title: "What Is a Home Warranty? How It Works, What It Covers and What It Costs",
      description:
        "A plain-English guide to home warranties - what they cover, how claims work, what they cost, and how they differ from homeowners insurance.",
      category: "Guides",
      readTime: "7 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFEBDD",
      author: AUTHOR,
      keyTakeaways: [
        "A home warranty is a service contract that repairs or replaces covered home systems and appliances that fail from normal wear and tear.",
        "You pay a premium (monthly or yearly) plus a service call fee - often $60-$150 - each time a technician comes out.",
        "It is not insurance: homeowners insurance covers sudden damage like fire or storms; a warranty covers breakdowns.",
        "Coverage caps, exclusions and waiting periods differ widely, so the contract matters as much as the price.",
      ],
      sections: [
        {
          heading: "The short definition",
          body: `<p>A <strong>home warranty</strong> is a one-year (sometimes multi-year) <strong>service contract</strong> that pays to repair or replace covered home systems and appliances when they break down from normal wear and tear. You pay a premium, and when something covered fails you file a claim, pay a set <strong>service call fee</strong>, and the company sends a technician.</p><p>Home warranties are sold directly to homeowners and are also commonly bought during real estate transactions - often by sellers to reassure buyers.</p>`,
        },
        {
          heading: "What a home warranty typically covers",
          body: `<p>Most companies build plans from two groups of items:</p><ul><li><strong>Systems</strong> - heating, air conditioning, ductwork, plumbing, electrical and water heaters.</li><li><strong>Appliances</strong> - refrigerator, oven/range, dishwasher, built-in microwave, garbage disposal, clothes washer and dryer.</li></ul><p>Many sell systems-only and appliances-only plans, a combination plan, and a premium tier with higher caps and extras such as roof leak repair or code-upgrade coverage. Pools, spas, well pumps and septic systems are usually optional add-ons.</p>`,
        },
        {
          heading: "How claims work",
          body: `<p>When a covered item stops working, you file a claim online, in an app or by phone. The company assigns a contractor from its network (some plans let you choose your own with approval), you pay the service fee at the visit, and the technician diagnoses the problem. If it's covered, the company repairs it up to the plan's cap, replaces it if repair isn't practical, or sometimes offers cash instead. See our step-by-step guide to <a href="/articles/how-to-file-a-home-warranty-claim">filing a home warranty claim</a>.</p>`,
        },
        {
          heading: "What it costs",
          body: `<p>Typical plans cost roughly <strong>$300-$700 a year</strong>, with premium tiers and add-ons costing more. On top of the premium you pay a service call fee - commonly $60-$150 - each time a technician visits. Prices vary by state, ZIP code, home size and the service fee you choose. Our <a href="/articles/how-much-does-a-home-warranty-cost">home warranty cost guide</a> breaks this down.</p>`,
        },
        {
          heading: "What it doesn't cover",
          body: `<p>The most common exclusions are <strong>pre-existing conditions</strong>, damage from <strong>lack of maintenance</strong> or improper installation, <strong>code upgrades and permits</strong> (unless the plan includes them), and anything over the plan's <strong>coverage cap</strong>. Most new plans also have a <strong>30-day waiting period</strong>. Read more in <a href="/articles/why-home-warranty-claims-get-denied">why home warranty claims get denied</a>.</p>`,
        },
        {
          heading: "Home warranty vs homeowners insurance",
          body: `<p>Homeowners insurance covers sudden, accidental damage - fire, storms, theft - and liability. A home warranty covers the slow, inevitable breakdown of systems and appliances. They cover different risks, and a warranty never replaces the insurance your lender requires. See <a href="/articles/home-warranty-vs-homeowners-insurance">home warranty vs homeowners insurance</a>.</p><p>Ready to compare? See our <a href="/">home warranty rankings</a> or reviews of <a href="/reviews/choice-home-warranty">Choice</a> and <a href="/reviews/american-home-shield">American Home Shield</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "home-warranty-vs-homeowners-insurance",
      title: "Home Warranty vs Homeowners Insurance: What's the Difference?",
      description:
        "Home warranties and homeowners insurance protect against different things. Here's what each covers, how you pay, and whether you need both.",
      category: "Guides",
      readTime: "6 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FDE1CB",
      author: AUTHOR,
      keyTakeaways: [
        "Homeowners insurance covers sudden, accidental damage and liability; a home warranty covers breakdowns from normal wear and tear.",
        "Insurance is usually required by mortgage lenders; a home warranty is always optional.",
        "Insurance claims carry a deductible; warranty claims carry a per-visit service fee.",
        "Many homeowners carry both because they cover different risks.",
      ],
      sections: [
        {
          heading: "The core difference",
          body: `<p><strong>Homeowners insurance</strong> protects your home and belongings against sudden, accidental events - fire, windstorms, hail, theft, some water damage - and covers liability if someone is hurt on your property. A <strong>home warranty</strong> is a service contract that repairs or replaces covered systems and appliances when they fail from normal wear and tear.</p><p>Put simply: if a storm destroys your AC unit, that's an insurance question. If your AC unit simply wears out, that's a warranty question.</p>`,
        },
        {
          heading: "How you pay",
          body: `<ul><li><strong>Insurance:</strong> an annual premium plus a deductible per claim - often $500 to $2,500 or more.</li><li><strong>Home warranty:</strong> an annual or monthly premium plus a service call fee per visit - often $60 to $150.</li></ul><p>That structure makes a warranty better suited to frequent small-to-mid repairs, and insurance better suited to rare, expensive events.</p>`,
        },
        {
          heading: "Who does the work",
          body: `<p>With insurance, you generally choose your own contractor and the insurer pays the claim. With most home warranties, the company assigns a technician from its own network; some plans let you use your own contractor with approval and reimburse you up to the plan's limits.</p>`,
        },
        {
          heading: "Do you need both?",
          body: `<p>If you have a mortgage, homeowners insurance is almost always required. A home warranty is optional and worth considering if you have several aging systems or appliances and want predictable repair costs. Read <a href="/articles/is-a-home-warranty-worth-it">is a home warranty worth it?</a> to decide, then compare plans on our <a href="/">rankings page</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "is-a-home-warranty-worth-it",
      title: "Is a Home Warranty Worth It? An Honest Cost-Benefit Look for 2026",
      description:
        "When a home warranty pays off, when it doesn't, and how to decide for your home - with the questions to ask before you buy.",
      category: "Buying",
      readTime: "7 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFF3EA",
      author: AUTHOR,
      keyTakeaways: [
        "A warranty tends to pay off for homes with several aging systems or appliances and owners without a large repair fund.",
        "It's less likely to pay off on a new or recently renovated home.",
        "Coverage caps and exclusions decide value as much as price - a low-cap plan can leave you paying most of a big repair.",
        "Consumer surveys have found a large share of warranty holders had a claim denied or only partly paid.",
      ],
      sections: [
        {
          heading: "The basic math",
          body: `<p>A typical plan costs roughly $300-$700 a year plus a service fee of $60-$150 per visit. A single furnace, AC or water heater replacement can cost several thousand dollars. So a warranty can come out well ahead in a year when a major item fails - and behind in a year when nothing does.</p>`,
        },
        {
          heading: "When a home warranty is more likely to be worth it",
          body: `<ul><li>Your home has <strong>several aging systems or appliances</strong> - especially HVAC and water heaters past mid-life.</li><li>You don't have a comfortable <strong>emergency fund</strong> for surprise repairs.</li><li>You're <strong>buying a home</strong> and want predictable costs in the first year (often the seller pays).</li><li>You're a <strong>landlord</strong> who wants a single number to call for tenant repairs.</li></ul>`,
        },
        {
          heading: "When it's less likely to be worth it",
          body: `<ul><li>Your home or major systems are <strong>new</strong> and still under manufacturer or builder warranties.</li><li>You can comfortably pay repairs from savings.</li><li>The plan's <strong>caps are too low</strong> to cover the repairs you're actually worried about.</li><li>You're handy and prefer to choose your own contractors.</li></ul>`,
        },
        {
          heading: "Questions to ask before buying",
          body: `<ol><li>What is the per-item cap for my HVAC, water heater and appliances?</li><li>Is there an overall annual or contract limit?</li><li>How are pre-existing conditions and maintenance defined?</li><li>Are code upgrades, permits and haul-away covered?</li><li>Can I choose my own contractor?</li><li>What's the workmanship guarantee on repairs?</li></ol><p>Our reviews answer these for each company - start with <a href="/reviews/choice-home-warranty">Choice</a>, <a href="/reviews/american-home-shield">American Home Shield</a> and <a href="/reviews/select-home-warranty">Select</a>, or read <a href="/articles/why-home-warranty-claims-get-denied">why claims get denied</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "how-much-does-a-home-warranty-cost",
      title: "How Much Does a Home Warranty Cost in 2026?",
      description:
        "Typical home warranty prices, service call fees and add-on costs in 2026 - plus what drives the price and how to compare plans fairly.",
      category: "Costs",
      readTime: "6 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFEBDD",
      author: AUTHOR,
      keyTakeaways: [
        "Most plans run roughly $300-$700 a year; premium tiers and add-ons cost more.",
        "Service call fees are commonly $60-$150 per visit, and at many companies are owed even if a claim is denied.",
        "A higher service fee usually means a lower premium.",
        "Compare the yearly premium plus expected service fees - and the caps - not just the monthly price.",
      ],
      sections: [
        {
          heading: "Typical price ranges",
          body: `<p>Based on published quotes and third-party reviews in 2025-2026, here are rough monthly price ranges for the companies we track (always confirm for your address):</p><ul><li><strong>Choice Home Warranty:</strong> ~$46-$49 (Basic) to ~$55-$58 (Total).</li><li><strong>American Home Shield:</strong> ~$30-$40 (ShieldSilver), ~$50-$60 (ShieldGold), ~$80-$90 (ShieldPlatinum).</li><li><strong>Select Home Warranty:</strong> ~$36-$64 before promotions.</li><li><strong>First American:</strong> ~$40-$140 depending on plan and state.</li><li><strong>Home Warranty of America:</strong> ~$48 (Premier) to ~$61 (Premier Plus) in a sample quote.</li><li><strong>The Home Service Club:</strong> ~$54 (Standard) to ~$67 (Comprehensive).</li><li><strong>2-10 Home Buyers Warranty:</strong> from ~$27-$35.</li></ul>`,
        },
        {
          heading: "Service call fees",
          body: `<p>Every visit carries a service call (or "trade call") fee, typically $60-$150. Some companies let you choose: American Home Shield offers $100 or $125; First American offers $75, $100 or $125. Choosing a higher fee lowers your premium, which can make sense if you expect few claims.</p>`,
        },
        {
          heading: "What drives the price",
          body: `<ul><li><strong>Plan tier</strong> - systems-only and appliances-only plans cost less than combos.</li><li><strong>Location</strong> - prices vary by state and ZIP code.</li><li><strong>Home size and type</strong> - larger homes and multi-unit properties often cost more.</li><li><strong>Add-ons</strong> - pool/spa, well pump, septic, second refrigerator and similar extras.</li><li><strong>Billing</strong> - paying annually sometimes unlocks discounts or free months.</li></ul>`,
        },
        {
          heading: "How to compare fairly",
          body: `<p>Add the yearly premium to the service fees you expect to pay, then check the caps on the items you're most worried about. A cheaper plan with a $500 per-item cap can cost you far more after one big repair than a pricier plan with a $3,000-$5,000 cap. Compare head-to-head in <a href="/choice-home-warranty-vs-select-home-warranty">Choice vs Select</a> or <a href="/american-home-shield-vs-choice-home-warranty">American Home Shield vs Choice</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "why-home-warranty-claims-get-denied",
      title: "Why Home Warranty Claims Get Denied (and How to Avoid It)",
      description:
        "The most common reasons home warranty claims are denied or only partly paid - pre-existing conditions, maintenance, caps, code upgrades - and how to protect yourself.",
      category: "Claims",
      readTime: "7 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FDE1CB",
      author: AUTHOR,
      keyTakeaways: [
        "Pre-existing conditions and lack of maintenance are the most common reasons for denial.",
        "Coverage caps often mean a claim is approved but only partly paid.",
        "Code upgrades, permits and haul-away are frequently excluded unless your plan covers them.",
        "Keep maintenance records and never pay for a repair before the company approves it.",
      ],
      sections: [
        {
          heading: "Pre-existing conditions",
          body: `<p>Almost every contract excludes problems that existed before coverage began. That's one reason most new plans have a <strong>30-day waiting period</strong>. If a technician concludes a failure started before your plan, the claim can be denied.</p>`,
        },
        {
          heading: "Lack of maintenance or improper installation",
          body: `<p>Contracts typically exclude failures caused by missing routine maintenance - for example, an AC unit that was never serviced or a water heater never flushed - and by improper installation. <strong>Keep receipts</strong> for HVAC service and other maintenance so you can show the item was cared for.</p>`,
        },
        {
          heading: "Coverage caps",
          body: `<p>A claim can be approved and still leave you with a large bill if the repair exceeds the plan's cap. Caps vary enormously: some plans cap many items around $500, while others allow $2,000-$5,000 or more. Check the limits table before you buy - it's the single biggest difference between companies.</p>`,
        },
        {
          heading: "Code upgrades, permits and haul-away",
          body: `<p>When an old system is replaced, local codes may require upgrades (for example, new refrigerant standards or electrical changes). Many plans don't cover these costs unless you buy a tier that includes them - American Home Shield's ShieldPlatinum, for example, includes permits and code-violation coverage.</p>`,
        },
        {
          heading: "How to protect yourself",
          body: `<ol><li>Read the sample contract's exclusions and limits before buying.</li><li>Keep maintenance records and photos of major systems.</li><li>File claims promptly when something stops working.</li><li>Never pay for repairs before approval unless the company authorizes it.</li><li>If denied, ask for the reason in writing and escalate if you disagree.</li></ol><p>See <a href="/articles/how-to-file-a-home-warranty-claim">how to file a claim</a> and compare caps across companies on our <a href="/">rankings page</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "home-warranty-for-home-buyers-and-sellers",
      title: "Home Warranties for Buyers and Sellers: How They Work in a Real Estate Deal",
      description:
        "Why sellers offer home warranties, how buyer and seller coverage works at closing, and what to check before accepting a plan.",
      category: "Buying",
      readTime: "6 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFF3EA",
      author: AUTHOR,
      keyTakeaways: [
        "Sellers often buy a home warranty to reassure buyers and smooth negotiations.",
        "Real estate plans commonly have no 30-day waiting period - coverage starts at closing.",
        "Some plans cover the seller while the home is listed.",
        "Buyers should still read the contract and can usually choose or upgrade the plan.",
      ],
      sections: [
        {
          heading: "Why sellers offer home warranties",
          body: `<p>A home warranty can make a listing more appealing by giving buyers some protection against early breakdowns. It can also reduce post-sale disputes about systems that fail soon after closing. Real estate agents frequently recommend it, and brands such as <a href="/reviews/first-american">First American</a>, <a href="/reviews/american-home-shield">American Home Shield</a> and <a href="/reviews/2-10-home-buyers-warranty">2-10</a> have dedicated real estate plans.</p>`,
        },
        {
          heading: "How coverage works at closing",
          body: `<p>Real estate plans are typically bought before or at closing, and buyer coverage begins at closing - usually without the 30-day waiting period that applies to plans bought directly. Some plans also offer seller coverage while the home is on the market, and terms of 12-13 months are common.</p>`,
        },
        {
          heading: "What buyers should check",
          body: `<ul><li>Which plan tier the seller bought, and whether you can upgrade it.</li><li>The caps on HVAC, water heater and appliances.</li><li>How the home inspection affects pre-existing condition exclusions.</li><li>Whether the plan auto-renews, and at what price.</li></ul>`,
        },
        {
          heading: "Comparing real estate plans",
          body: `<p>Compare <a href="/american-home-shield-vs-first-american">American Home Shield vs First American</a> and <a href="/first-american-vs-2-10-home-buyers-warranty">First American vs 2-10</a>, or see all companies on our <a href="/">rankings page</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "best-home-warranty-companies-compared",
      title: "Best Home Warranty Companies of 2026, Compared",
      description:
        "Our side-by-side comparison of Choice, American Home Shield, Select, First American, Home Warranty of America, The Home Service Club and 2-10.",
      category: "Provider Guides",
      readTime: "8 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFEBDD",
      author: AUTHOR,
      keyTakeaways: [
        "Choice is our top pick for value: two simple plans and a $3,000 per-item cap.",
        "American Home Shield offers the highest caps and broadest top-tier coverage.",
        "Select is the lowest-cost option but has low per-item caps.",
        "First American and HWA offer high limits; The Home Service Club and 2-10 suit narrower needs.",
      ],
      sections: [
        {
          heading: "How we compared",
          body: `<p>We compared each company's published plans, reported prices, service fees, coverage caps, waiting periods, state availability and customer record. Full details are in <a href="/how-we-rank">how we rank</a>. Prices are approximate and vary by address.</p>`,
        },
        {
          heading: "1. Choice Home Warranty - best overall value",
          body: `<p>Two plans (Basic and Total), a $3,000 per-item cap and availability in 49 states at prices typically in the mid-$40s to high-$50s per month. Note its 2026 Arizona Attorney General settlement. <a href="/reviews/choice-home-warranty">Read the Choice review</a>.</p>`,
        },
        {
          heading: "2. American Home Shield - best for high coverage limits",
          body: `<p>The oldest name in the industry, with three tiers, up to $4,000 per appliance and $5,000 for HVAC, and permits/code coverage on ShieldPlatinum. <a href="/reviews/american-home-shield">Read the AHS review</a>.</p>`,
        },
        {
          heading: "3. Select Home Warranty - best for a low price",
          body: `<p>Among the cheapest plans, with frequent free months and free roof coverage, but per-item caps reported around $500. <a href="/reviews/select-home-warranty">Read the Select review</a>.</p>`,
        },
        {
          heading: "4-7. First American, HWA, The Home Service Club and 2-10",
          body: `<ul><li><a href="/reviews/first-american">First American</a> - high appliance limits and generous HVAC terms, but fewer states.</li><li><a href="/reviews/home-warranty-of-america">Home Warranty of America</a> - all 50 states and up to $5,000 on most repairs.</li><li><a href="/reviews/home-service-club">The Home Service Club</a> - no age limit on items, but low caps.</li><li><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a> - low starting price and builder expertise, modest caps.</li></ul><p>See our full <a href="/">rankings</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "how-to-file-a-home-warranty-claim",
      title: "How to File a Home Warranty Claim: Step by Step",
      description:
        "How to file a home warranty claim, what happens after, what to do if it's denied, and tips to get a faster, fuller payout.",
      category: "Claims",
      readTime: "5 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFF3EA",
      author: AUTHOR,
      keyTakeaways: [
        "File as soon as a covered item stops working - online, in the app or by phone.",
        "You'll pay the service call fee when the technician visits.",
        "Don't hire your own contractor or pay for repairs without approval.",
        "If denied, get the reason in writing and escalate.",
      ],
      sections: [
        {
          heading: "Step 1: Check your contract",
          body: `<p>Confirm the item is covered by your plan, note the cap, and check that you're past any waiting period.</p>`,
        },
        {
          heading: "Step 2: File the claim",
          body: `<p>File online, in the company's app or by phone. Describe the problem clearly and include the make, model and age of the item if you know them. Most major companies accept claims around the clock.</p>`,
        },
        {
          heading: "Step 3: The technician visit",
          body: `<p>The company assigns a contractor, who contacts you to schedule. You pay the service call fee at the visit. The technician diagnoses the problem and reports to the warranty company, which decides coverage.</p>`,
        },
        {
          heading: "Step 4: Repair, replacement or cash-out",
          body: `<p>Covered items are repaired up to the cap, replaced if repair isn't practical, or the company may offer cash. If parts are on backorder, ask for a timeline in writing.</p>`,
        },
        {
          heading: "If your claim is denied",
          body: `<p>Ask for the reason and the contract clause in writing, provide maintenance records if relevant, and escalate to a supervisor. If you still disagree, you can file a complaint with your state's regulator or attorney general. Read <a href="/articles/why-home-warranty-claims-get-denied">why claims get denied</a> to avoid common pitfalls.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "american-home-shield-plans",
      title: "American Home Shield Plans Explained: ShieldSilver vs ShieldGold vs ShieldPlatinum",
      description:
        "What each American Home Shield plan covers, reported prices, coverage caps, add-ons and which tier fits your home.",
      category: "Provider Guides",
      readTime: "6 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FDE1CB",
      author: AUTHOR,
      keyTakeaways: [
        "ShieldSilver covers 14 home systems; ShieldGold adds 9 appliances; ShieldPlatinum adds roof leak, an HVAC tune-up and permits/code coverage.",
        "Reported prices are roughly $30-$40, $50-$60 and $80-$90 a month.",
        "Appliance caps are $2,000 each on Gold and $4,000 each on Platinum; HVAC is capped at $5,000.",
        "You choose a $100 or $125 service fee.",
      ],
      sections: [
        {
          heading: "ShieldSilver",
          body: `<p>Covers home systems only - heating, cooling, plumbing, electrical, water heater and more (14 systems). Reported at roughly $30-$40 a month. Best for homes with newer appliances.</p>`,
        },
        {
          heading: "ShieldGold",
          body: `<p>Everything in ShieldSilver plus 9 kitchen and laundry appliances, with a $2,000 cap per appliance. Reported at roughly $50-$60 a month. The most balanced tier for most homes.</p>`,
        },
        {
          heading: "ShieldPlatinum",
          body: `<p>Everything in ShieldGold plus roof leak repair (up to $1,000), an HVAC tune-up, and permits and code-violation coverage, with appliance caps of $4,000 each. Reported at roughly $80-$90 a month. Best for older homes where code upgrades could come up.</p>`,
        },
        {
          heading: "Add-ons and service fees",
          body: `<p>Optional add-ons include pool/spa, well pump, septic pump, guest unit and electronics, reported at roughly $5-$18 a month each. You choose a $100 or $125 service fee per request. See the full <a href="/reviews/american-home-shield">American Home Shield review</a> or compare <a href="/american-home-shield-vs-choice-home-warranty">AHS vs Choice</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "is-choice-home-warranty-legit",
      title: "Is Choice Home Warranty Legit? Settlements, Reviews and What to Know",
      description:
        "Choice Home Warranty is a real company - but it has a notable regulatory history. Here's what the Arizona and New Jersey settlements were about and how to protect yourself.",
      category: "Provider Guides",
      readTime: "6 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFEBDD",
      author: AUTHOR,
      keyTakeaways: [
        "Choice Home Warranty is a legitimate company that has sold home warranties since 2008.",
        "In 2026 it agreed to an $11.8 million consent judgment with the Arizona Attorney General over claim-handling and disclosure allegations, without admitting wrongdoing.",
        "It also settled with New Jersey in 2015.",
        "Its Trustpilot score is around 3.9 across 60,000+ reviews, while its BBB customer average is very low - a split common in the industry.",
      ],
      sections: [
        {
          heading: "Is Choice a real company?",
          body: `<p>Yes. Choice Home Warranty was founded in 2008 in New Jersey, sells plans in every state except Washington, and has owned Home Warranty of America since 2022.</p>`,
        },
        {
          heading: "The Arizona settlement (2026)",
          body: `<p>In February 2026 the Arizona Attorney General announced an <strong>$11.8 million consent judgment</strong> with Choice, dated January 23, 2026. The AG alleged Choice refused advertised air conditioning and appliance claims and did not adequately disclose exclusions, citing more than 1,500 complaints since 2013. Choice denied wrongdoing. The AG opened a restitution process for eligible Arizona customers.</p>`,
        },
        {
          heading: "Earlier history",
          body: `<p>In 2015 Choice reached a settlement of roughly $780,000 with the New Jersey Attorney General's office related to consumer complaints.</p>`,
        },
        {
          heading: "Should you buy from Choice?",
          body: `<p>Choice offers good value on paper - two simple plans and a $3,000 per-item cap. If you buy, read the contract's exclusions carefully, keep maintenance records and document every claim. Compare it with <a href="/american-home-shield-vs-choice-home-warranty">American Home Shield</a> and <a href="/choice-home-warranty-vs-select-home-warranty">Select</a>, or read the full <a href="/reviews/choice-home-warranty">Choice review</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
    {
      slug: "select-home-warranty-cost",
      title: "Select Home Warranty Cost: Plans, Promotions and the Fine Print",
      description:
        "What Select Home Warranty really costs - plan prices, service fees, promotions that require annual payment, add-ons and coverage caps.",
      category: "Costs",
      readTime: "5 min read",
      publishedAt: "2026-10-12",
      updatedAt: "2026-10-12",
      heroColor: "#FFF3EA",
      author: AUTHOR,
      keyTakeaways: [
        "Select's plans are reported at roughly $36-$64 a month before promotions.",
        "Promotions like free months and $150 off typically require paying annually.",
        "The service fee is usually about $60-$75, and the terms list a $75 cancellation fee.",
        "Per-item caps around $500 are the main trade-off for the low price.",
      ],
      sections: [
        {
          heading: "Plan prices",
          body: `<p>Select's Bronze Care (appliances), Gold Care (systems) and Platinum Care (both) are reported at roughly $36-$64 a month before promotions, and around $480-$525 a year with promotions applied.</p>`,
        },
        {
          heading: "Promotions",
          body: `<p>Select commonly advertises "$150 off + 2 months free + free roof coverage." The free months typically apply when you pay for the year upfront, so compare the annual total rather than the headline.</p>`,
        },
        {
          heading: "Service fee and add-ons",
          body: `<p>The service fee is typically about $60-$75. Reported add-on prices include pool (~$8.33/mo), spa (~$5.83), septic (~$5.83) and well pump (~$3.33). Select's terms list a $75 cancellation fee.</p>`,
        },
        {
          heading: "The fine print: caps",
          body: `<p>Third-party reviews report caps of about $500 per item for many appliances, plumbing and electrical repairs, and about $3,000 per term for HVAC. That's the key trade-off. Compare with <a href="/choice-home-warranty-vs-select-home-warranty">Choice vs Select</a> or read the full <a href="/reviews/select-home-warranty">Select review</a>.</p>${DISCLAIMER}`,
        },
      ],
    },
  ],

  faqs: [
    {
      question: "What is a home warranty?",
      answer:
        "A home warranty is a service contract that pays to repair or replace covered home systems (such as heating, air conditioning, plumbing and electrical) and appliances when they break down from normal wear and tear. You pay a premium plus a service call fee each time a technician visits.",
    },
    {
      question: "How much does a home warranty cost?",
      answer:
        "Most plans cost roughly $300-$700 a year, with premium tiers and add-ons costing more. You also pay a service call fee, commonly $60-$150, per visit. Prices vary by company, plan, state and ZIP code.",
    },
    {
      question: "Is a home warranty the same as homeowners insurance?",
      answer:
        "No. Homeowners insurance covers sudden, accidental damage such as fire, storms and theft, plus liability. A home warranty covers breakdowns of systems and appliances from normal wear and tear. Many homeowners carry both.",
    },
    {
      question: "What does a home warranty not cover?",
      answer:
        "Common exclusions include pre-existing conditions, damage from lack of maintenance or improper installation, code upgrades and permits (unless your plan includes them), and costs above the plan's coverage cap. Most new plans also have a 30-day waiting period.",
    },
    {
      question: "Is there a waiting period?",
      answer:
        "Most home warranties bought directly have a 30-day waiting period before coverage begins. Plans bought during a real estate closing and renewals often have no waiting period.",
    },
    {
      question: "Can I choose my own contractor?",
      answer:
        "It depends on the company. Most assign a technician from their network; some allow you to use your own contractor, usually with approval first and reimbursement up to the plan's limits.",
    },
    {
      question: "Which home warranty company is the best?",
      answer:
        "It depends on your home and priorities. In our rankings, Choice Home Warranty is our top pick for value, American Home Shield offers the highest caps and broadest top-tier coverage, and Select is the lowest-cost option. Compare coverage caps and exclusions, not just price.",
    },
    {
      question: "Do I pay the service fee if my claim is denied?",
      answer:
        "Often, yes. At many companies the service call fee is owed when the technician visits, regardless of whether the claim is ultimately approved. Check your contract.",
    },
  ],

  quiz: {
    welcomeTitle: "Find Your Best Home Warranty Match",
    welcomeSubtitle:
      "Answer a few quick questions and we'll compare trusted home warranty companies based on your home, budget and coverage needs.",
    welcomeTrustPoints: [
      "Takes less than 1 minute",
      "Personalized plan recommendations",
      "Completely free",
    ],
    welcomeCta: "Find My Match",
    midFlowMessage: "Great - we're narrowing down the best options for you.",
    pageTitle: "Find Your Home Warranty Match",
    pageSubtitle:
      "Answer a few quick questions to help us compare home warranty companies based on your home, budget and preferred coverage.",
    resultsTitle: "Your Best Match",
    resultsSubtitle: "Based on your answers, this company is the strongest fit for your home.",
    resultsOthersTitle: "Other Companies You May Want to Consider",
    trustStrip: ["Updated Monthly", "Editorially Reviewed", "Independent Comparison"],
    loadingMessages: [
      "Comparing trusted companies...",
      "Reviewing coverage options...",
      "Finding your best match...",
      "Preparing your recommendation...",
    ],
    questions: [],
    providerProfiles: [],
  },

  experts: [
    {
      id: "editorial",
      name: AUTHOR,
      role: "Editorial & Research",
      bio: "Our editorial team researches and compares home warranty companies, reads their published plans and sample contracts, and writes plain-English guides. We prioritize accuracy over hype - including being clear about coverage caps, exclusions and each company's complaint and regulatory record.",
      specialties: [
        "Home warranty plan comparison",
        "Contract and coverage analysis",
        "Consumer protection research",
        "Homeowner education",
      ],
    },
  ],

  landingPages: [],
  sidebars: [],
};
