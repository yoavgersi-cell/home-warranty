import type { ArticleData } from "@/lib/config";
import { providerTable, otherStates } from "./shared";

// Texas state guide. Researched Oct 2026 from TDLR (Occ. Code ch. 1304,
// 16 TAC ch. 77), Census ACS/QuickFacts, EIA, NOAA/NCICS, TDI (Winter Storm
// Uri data call), NAHB, BLS OEWS, TREC contract forms, Inman (AHS-Texas AG
// 2010), InvestigateTV and KPRC, plus company sample contracts and our
// Oct 26, 2026 Trustpilot review study.
export const texasGuide: ArticleData = {
  slug: "best-home-warranty-texas",
  title: "Best Home Warranty in Texas (2026): Companies, Laws & Costs",
  description:
    "The best home warranty companies in Texas for 2026, how TDLR regulates them, your refund rights, and what Texas heat, freezes and slab foundations mean for coverage.",
  category: "State Guides",
  readTime: "18 min read",
  publishedAt: "2026-10-27",
  updatedAt: "2026-10-27",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "All seven companies we track sell in Texas. Home warranties are regulated there as residential service contracts by the Texas Department of Licensing and Regulation (TDLR), which took over from the Texas Real Estate Commission on September 1, 2021.",
    "Texas law lets you cancel within 30 days for a full refund (less claims paid) with no fee; after that you get a pro rata refund minus a cancellation fee of no more than $50, and late refunds carry a 10%-per-month penalty.",
    "Air conditioning is the claim that matters most in Texas: the state averages about 20 days a year at 100°F or hotter, and about 61% of Texas homes heat with electricity - often a heat pump that also runs the AC.",
    "For AC-heavy Texas homes, prioritize HVAC limits, refrigerant terms and code/permit coverage; American Home Shield and First American publish the strongest AC terms, while Choice offers simpler, lower-cost coverage with a $3,000 per-item cap.",
  ],
  sections: [
    {
      heading: "Best home warranty in Texas: the short answer",
      body: `<div class="qa"><strong>Quick answer</strong>All seven home warranty companies we track sell plans in Texas. For most Texas homeowners, the right choice depends on air conditioning: if your AC or heat pump is the system you most want protected, <strong>American Home Shield</strong> (ShieldPlatinum covers refrigerant, permits and modifications) and <strong>First American</strong> (100% refrigerant coverage on Premium and real estate plans, and a long history at Texas closings) publish the strongest AC terms. <strong>Choice Home Warranty</strong>, our top-ranked company nationally, is a simpler, lower-cost option with a $3,000 per-item cap. Whatever you choose, Texas law gives you a 30-day full-refund window, a $50 cap on cancellation fees after that, and a state ombudsman for delayed or denied claims.</div>
<p>Texas is one of the biggest home warranty markets in the country, and it's one of the few states with a dedicated regulator and a specific consumer-protection program for home warranties. It's also a state where home systems work hard: long, hot summers, electric heating in most homes, slab foundations almost everywhere, hard water in many cities, and - as February 2021 showed - the occasional catastrophic freeze.</p>
<p>This guide covers which companies sell in Texas, how they're regulated, your rights under Texas law, what Texas climate and housing mean for coverage, how home warranties work in a Texas home sale, and our picks for different situations. It's based on Texas statutes and TDLR materials, federal housing and climate data, company sample contracts, and our own analysis of recent customer reviews.</p>`,
    },
    {
      heading: "Which home warranty companies sell in Texas?",
      body: `<p>All seven companies we review offer home warranties in Texas. In Texas, the company legally responsible for your contract (the "provider" or "obligor") must be registered with TDLR, and it isn't always the brand name on the website - Choice's Texas contracts, for example, are issued by an affiliated Texas entity, HWAT, Inc., doing business as Home Warranty Administrators.</p>
${providerTable("Texas", {
  "choice-home-warranty": "Available; Texas contracts issued by HWAT, Inc. (Home Warranty Administrators)",
  "american-home-shield": "Available; issued by American Home Shield of Texas, Inc.",
  "select-home-warranty": "Available",
  "first-american": "Available; Texas-specific sample contracts published",
  "home-warranty-of-america": "Available",
  "home-service-club": "Available",
  "2-10-home-buyers-warranty": "Available (2-10 also sells separate builder warranties in Texas)",
})}
<p>Before you buy, you can confirm a company's registration with TDLR's license search. Texas law also limits who can sell these contracts: a provider's or administrator's own employees, or Texas-licensed real estate agents, brokers, insurance agents and mobile home dealers. If a company pays someone other than its employees to sell its contracts, the contract has to say so in bold type.</p>`,
    },
    {
      heading: "How Texas regulates home warranties",
      body: `<p>Texas calls home warranties <strong>residential service contracts</strong>. For decades they were overseen by the Texas Real Estate Commission (TREC) under the Residential Service Company Act. In 2021, the Legislature's TDLR sunset bill (HB 1560) repealed that law, folded residential service contracts into the state's general service contract statute - <strong>Texas Occupations Code chapter 1304</strong> - and moved oversight to the <strong>Texas Department of Licensing and Regulation (TDLR)</strong>, effective September 1, 2021. TDLR's rules are in 16 Texas Administrative Code chapter 77; amendments implementing the 2021 law took effect June 15, 2024.</p>
<h3>Financial security</h3>
<p>To protect customers if a company fails, a Texas provider must register with TDLR and meet one of several financial-security options under section 1304.151: carry a reimbursement insurance policy, maintain a funded reserve account plus a security deposit (at least $25,000 for a residential service company) and audited financials, or have a net worth of at least $100 million. A 2021 addition (section 1304.157) also allows certain captive-insurer arrangements.</p>
<h3>What a Texas contract must tell you</h3>
<p>Section 1304.156 lists what every contract must include - among other things, the cancellation terms, the holder's obligations, and, for insurer-backed contracts, the insurer's name and address. Importantly for claims, a Texas contract must <strong>state whether pre-existing conditions are covered or excluded</strong>; TDLR lists failing to do so as a violation. Texas requires disclosure rather than banning the exclusion, so read that clause carefully.</p>
<h3>Your cancellation and refund rights</h3>
<table>
<thead><tr><th>When you cancel</th><th>What Texas law requires (Occ. Code §1304.1581)</th></tr></thead>
<tbody>
<tr><td>Within 30 days of purchase</td><td>Full refund, minus any claims paid; <strong>no cancellation fee</strong></td></tr>
<tr><td>After 30 days</td><td>Pro rata refund, minus claims paid; cancellation fee of <strong>no more than $50</strong></td></tr>
<tr><td>Refund timing</td><td>Due within 45 days of the provider receiving your notice; after that, the provider owes a penalty of <strong>10% of the unpaid amount per month</strong></td></tr>
</tbody>
</table>
<p>American Home Shield's March 2023 Texas sample contract reflects this: its administrative fee on cancellation is the lesser of one monthly plan price or the amount Texas law allows.</p>
<h3>The TDLR ombudsman</h3>
<p>Texas is one of the few states with a dedicated home-warranty ombudsman. According to TDLR's consumer guide, its <strong>residential service company ombudsman</strong> can step in when a claim is delayed or denied. Houston's KPRC has reported the ombudsman's number as 512-936-3049.</p>
<h3>How to file a complaint in Texas</h3>
<ul>
<li><strong>Start with the company</strong>, in writing, as TDLR recommends.</li>
<li><strong>File with TDLR</strong> online at tdlr.texas.gov/complaints, or call 1-800-803-9202 (in Texas) or 512-463-6599. Complaints must be filed within two years of the event.</li>
<li><strong>The Texas Attorney General's Consumer Protection Division</strong> also takes complaints about deceptive practices.</li>
</ul>
<p>For context on volume: TDLR reported 1,064 consumer complaints against all service contract providers in fiscal 2023 (that category includes vehicle and other service contracts, not only home warranties), and listed 533 licensees in its service contract program for fiscal 2025.</p>`,
    },
    {
      heading: "What Texas homes need from a home warranty",
      body: `<p>Texas homes are newer than the national average, but their systems run harder. These five facts should shape what you look for in a plan.</p>
<h3>1. Air conditioning runs most of the year</h3>
<p>According to NOAA's Texas State Climate Summary, the state averages about 20 days a year at 100°F or hotter over the long term, and temperatures have risen about 1.5°F since 1900. In 2011, Dallas-Fort Worth recorded 40 straight days above 100°F. Roughly 95% of Texas homes have air conditioning. That means the AC is usually the most expensive and most likely claim - and the place where plan differences matter most: the HVAC limit, how much refrigerant is covered, whether upgrades required by the refrigerant transition are covered, and whether permits and modifications are paid. Our <a href="/articles/r-410a-phase-out-home-warranty">R-410A phase-out guide</a> explains why AC replacements now cost more and how each company handles it.</p>
<h3>2. Most Texas homes heat with electricity</h3>
<p>The U.S. Energy Information Administration found that about <strong>61% of Texas homes heat with electricity</strong>, compared with 39% nationally, with natural gas at about 35%. Many of those homes use a heat pump - a single system that both heats and cools. A heat pump failure can take out your heating and cooling at once, so check how the plan classifies heat pumps (some plans have separate or lower limits) and read our <a href="/articles/best-home-warranty-for-heat-pumps">heat pump guide</a>.</p>
<h3>3. Freezes are rare - but expensive</h3>
<p>Winter Storm Uri in February 2021 produced <strong>510,772 insurance claims</strong> and about $11.2 billion in expected insured losses, according to the Texas Department of Insurance, with damage from frozen pipes among the leading causes. A home warranty may repair a failed plumbing component, but water damage to your home is a homeowners insurance matter, and many contracts limit or exclude damage from freezing. If you're in a part of Texas where freezes are a risk, read the plumbing exclusions and keep your homeowners policy in mind.</p>
<h3>4. Slab foundations and slab leaks</h3>
<p>About <strong>97.9% of new single-family homes</strong> started in the West South Central region (which includes Texas) in 2024 were built on concrete slabs, the highest share in the country, according to NAHB's analysis of Census data. When a water line under a slab leaks, reaching it can mean breaking concrete or rerouting pipes. Home warranty contracts typically cap or exclude this "access" cost - Choice, for example, limits access costs to $500 - so check the slab-leak and access terms if your home is on a slab.</p>
<h3>5. Hard water wears out water heaters</h3>
<p>Many Texas cities have moderately hard to hard water, which builds scale in water heaters and appliances. Check your city's annual water quality report for its hardness level. Scale-related failures can trigger maintenance-related denials, so flushing your water heater periodically - and keeping a record of it - helps protect a claim.</p>
<h3>The upside: newer homes</h3>
<p>Texas has one of the youngest housing stocks in the country: NAHB puts the median age of owner-occupied Texas homes at about 28 years (second youngest after Nevada), versus 42 nationally, and a 2024 Census-based analysis put the median year built at 1994. Newer systems mean fewer "wear and tear versus neglect" disputes - but many Texas homes now have AC systems at or past the 15-year mark, exactly when replacements start.</p>`,
    },
    {
      heading: "Our picks for Texas homeowners",
      body: `<p>Our <a href="/">national rankings</a> weigh coverage, cost, caps and customer experience. Here's how they translate to common Texas situations:</p>
<table>
<thead><tr><th>Your situation</th><th>Consider</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Simple, affordable coverage for systems and appliances</td><td><a href="/reviews/choice-home-warranty">Choice Home Warranty</a></td><td>Two straightforward plans, $3,000 per covered item, our #1 overall; check the $500 access limit if you're worried about slab leaks</td></tr>
<tr><td>Your AC or heat pump is the priority</td><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>Up to $5,000 HVAC; covers upgrades needed to meet refrigerant and efficiency standards within the limit; ShieldPlatinum adds all refrigerant plus permits and modifications</td></tr>
<tr><td>Buying a home through a Texas agent</td><td><a href="/reviews/first-american">First American</a></td><td>A long-standing real estate brand with Texas-specific contracts; 100% refrigerant coverage on Premium and real estate plans; reviewers report fewer outright denials</td></tr>
<tr><td>Want a higher per-repair limit across the home</td><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to $5,000 on most repairs on the plans we reviewed</td></tr>
<tr><td>Want the cash-out to reflect retail prices</td><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>Its 2025 sample contract bases cash in lieu on an estimate of local retail cost, not company cost</td></tr>
</tbody>
</table>
<p>One caution from our <a href="/articles/home-warranty-claim-denied">review study of 351 recent customer reviews</a>: AC waits are the complaint Texas homeowners feel most. A First American reviewer in Southeast Texas described eight days without air conditioning while waiting on a contractor; another First American reviewer in South Texas described an AC claim open for nearly two months with a contractor assigned from four hours away. Ask any company how it handles emergency AC service in your area - and whether it will authorize your own contractor if its network can't respond.</p>`,
    },
    {
      heading: "Home warranties when you buy or sell a home in Texas",
      body: `<p>Home warranties are a standard part of Texas home sales because they're built into the state's standard contract. The TREC One to Four Family Residential Contract (Resale) includes a <strong>"Residential Service Contracts"</strong> paragraph (paragraph 7H): the buyer may purchase a residential service contract from a TDLR-licensed provider, and if the buyer does, the seller reimburses the buyer at closing up to an amount the parties fill in. The reference to TDLR replaced the old "licensed by TREC" language after the 2021 transfer.</p>
<p>A few practical points:</p>
<ul>
<li><strong>Buying one is optional</strong>, and the reimbursement amount is negotiable.</li>
<li><strong>Real estate plans often have better pre-existing condition terms</strong> - many cover unknown or undetectable pre-existing conditions - and some waive the waiting period. Compare a real estate plan with a direct-to-consumer plan before closing.</li>
<li><strong>Keep your inspection report.</strong> It's your best evidence if a claim is later denied as pre-existing.</li>
<li><strong>Sellers can buy listing coverage</strong> during the marketing period with some companies; read what it covers and when it transfers.</li>
</ul>`,
    },
    {
      heading: "Enforcement and complaints in Texas",
      body: `<p>Texas has a long record of home warranty complaints and at least one major settlement:</p>
<ul>
<li><strong>American Home Shield (2010).</strong> According to Inman, the Texas Attorney General investigated AHS beginning in 2003 and the case settled in August 2010, with AHS paying $5 million and revising its Texas marketing and fulfillment practices without admitting wrongdoing.</li>
<li><strong>Complaint volume.</strong> KPRC reported in 2020 that TREC received more than 1,000 home warranty complaints between 2010 and 2019. An InvestigateTV analysis published in July 2025 found more than 1,500 complaints to the Texas Attorney General about home warranty companies. KPRC's 2022 review of TDLR complaint data listed 69 complaints involving Choice Home Warranty and HWAT, Inc.</li>
<li><strong>Disciplinary orders.</strong> TREC and TDLR have issued orders against smaller companies, including a 2020 agreed order and $5,000 penalty against Pride Home Warranty.</li>
</ul>
<p>Complaint counts reflect company size as well as conduct - larger companies naturally draw more - so use them alongside contract terms and recent reviews. Our company reviews include a breakdown of what recent customers praise and complain about.</p>`,
    },
    {
      heading: "What repairs cost in Texas",
      body: `<p>Texas labor costs run a little below the national average, which helps your out-of-pocket math when a claim is partly covered or denied. In May 2023 the Bureau of Labor Statistics put the mean annual wage for HVAC mechanics at <strong>$54,640 in Texas</strong> versus $59,620 nationally (Houston $58,250; Dallas-Fort Worth $57,890). Residential electricity in Texas has also run below the national average in 2026, according to EIA data - which matters for how much an inefficient, failing AC costs you while you wait for a repair.</p>
<p>Equipment is a different story: HVAC manufacturers have announced repeated price increases through 2025 and 2026, and refrigerant-related upgrades can add to replacement costs. When a plan's HVAC limit is $3,000 to $5,000, a full system replacement in a larger Texas home can exceed it - so compare limits, not just monthly prices.</p>`,
    },
    {
      heading: "Texas home warranty checklist",
      body: `<ul>
<li>Confirm the provider is registered with TDLR (the obligor may be an affiliated Texas company).</li>
<li>Read the <strong>pre-existing conditions</strong> clause - Texas requires it to say whether they're covered.</li>
<li>Check the <strong>HVAC limit</strong>, refrigerant coverage, and whether refrigerant-standard upgrades, permits and modifications are covered.</li>
<li>Check how <strong>heat pumps</strong> are covered if you have one.</li>
<li>Check <strong>slab leak and access</strong> limits if your home is on a slab.</li>
<li>Ask about <strong>emergency AC service</strong> and when you can use your own contractor.</li>
<li>Note the 30-day full-refund window and the $50 maximum cancellation fee after that.</li>
<li>Keep maintenance records - AC tune-ups, filters, water heater flushes.</li>
<li>If a claim is delayed or denied, use the company's escalation process, then TDLR and its ombudsman. Our <a href="/articles/home-warranty-claim-denied">claim denial guide</a> walks through each step.</li>
</ul>`,
    },
    {
      heading: "Who regulates home warranties in Texas?",
      body: `<p>The Texas Department of Licensing and Regulation (TDLR) regulates home warranties as residential service contracts under Occupations Code chapter 1304. It took over from the Texas Real Estate Commission on September 1, 2021.</p>`,
    },
    {
      heading: "Can I cancel a home warranty in Texas and get a refund?",
      body: `<p>Yes. Within the first 30 days you're entitled to a full refund minus claims paid, with no fee. After 30 days you get a pro rata refund minus claims paid and a cancellation fee of no more than $50. The refund is due within 45 days of the company receiving your notice, with a 10%-per-month penalty after that.</p>`,
    },
    {
      heading: "Do Texas home warranties cover pre-existing conditions?",
      body: `<p>It depends on the contract - Texas law requires every contract to state whether pre-existing conditions are covered or excluded, but doesn't require coverage. Real estate plans are more likely to cover unknown or undetectable pre-existing conditions.</p>`,
    },
    {
      heading: "Who pays for the home warranty in a Texas home sale?",
      body: `<p>Under paragraph 7H of the TREC resale contract, the buyer may buy a residential service contract and the seller reimburses the buyer at closing up to a negotiated amount. The amount - including zero - is up to the parties.</p>`,
    },
    {
      heading: "Does a home warranty cover frozen pipes in Texas?",
      body: `<p>A home warranty may cover repairing a failed plumbing component, but many contracts limit or exclude freeze damage, and none cover the resulting water damage to your home - that's a homeowners insurance question. Read the plumbing exclusions in your contract.</p>`,
    },
    {
      heading: "Sources",
      body: `<p>Texas Occupations Code chapter 1304 (sections 1304.151, 1304.156, 1304.157, 1304.1581) and 16 Texas Administrative Code chapter 77; TDLR materials (residential service company transfer page, consumer protection guide, SCP At a Glance FY25, FY23 complaint statistics, sanctions matrix); Texas Register (June 7, 2024); TREC One to Four Family Residential Contract and 2021 contract amendments; U.S. Census Bureau QuickFacts (ACS 2020-2024); NAHB Eye on Housing (age of housing stock by state, 2026; foundation type by region, 2025); U.S. Energy Information Administration (Texas home heating; Electric Power Monthly); NOAA/NCICS Texas State Climate Summary 2022; Texas Department of Insurance, February 2021 winter weather data call (March 2022); Bureau of Labor Statistics OEWS May 2023; Inman (March 21, 2012); InvestigateTV (July 28, 2025); KPRC Click2Houston (2020, 2022, 2023); American Home Shield Texas sample contract (March 2023); Choice Home Warranty user agreement; First American Texas sample contracts; 2-10 Home Buyers Warranty; our Trustpilot review study (October 26, 2026). Figures were checked in October 2026; contract terms vary by plan and year, and your contract controls.</p>
${otherStates("texas")}`,
    },
  ],
};
