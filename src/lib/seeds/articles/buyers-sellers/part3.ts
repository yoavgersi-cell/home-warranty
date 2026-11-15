import type { ArticleSection } from "@/lib/config";

// Part 3: agent compensation rules (RESPA s.8, HUD 2010 interpretive rule,
// litigation history), purchase contract treatment, negotiation playbook, new
// construction, renewal, mistakes and scenarios. Sources: 12 U.S.C. 2607; 12
// CFR 1024.14; HUD interpretive rule 75 FR 36271 (June 25, 2010) and 75 FR
// 74620 (Dec 1, 2010); CFPB RESPA Section 8 FAQs (Oct 2020); Inman on Abney
// v. American Home Shield (Mar 2012) and HUD v. FNF (July 2011); congress.gov
// H.R. 2446 (112th); TREC 1-4 Family Residential Contract and RSC-4 form;
// TDLR; Arizona AAR Residential Resale Purchase Contract (Feb 2026); CDI;
// 12 CFR 1026.38 (Closing Disclosure "optional" labeling); NAR settlement FAQs.
export const part3: ArticleSection[] = [
  {
    heading: "Your agent, the warranty company and the law",
    body: `<p>Home warranty companies compete hard for real estate agents' recommendations, and federal law limits how they can pay for them. Knowing the rules helps you weigh a recommendation.</p>
<h3>The federal rule: no payment for referrals</h3>
<p>Section 8 of the Real Estate Settlement Procedures Act (RESPA) prohibits kickbacks and fees for referring settlement-service business in transactions involving a federally related mortgage loan, while allowing payment for goods or services actually performed. In a June 2010 interpretive rule, the Department of Housing and Urban Development (HUD) concluded that a home warranty is a settlement service and that:</p>
<ul>
<li>A home warranty company may <strong>not</strong> pay a real estate broker or agent for marketing its warranty to particular buyers or sellers - HUD treated that as a payment for referrals.</li>
<li>It makes no difference whether the payment is per sale or a flat fee.</li>
<li>A company may pay an agent only for additional services that are actual, necessary and distinct from referrals, at a price reasonably related to the value of those services.</li>
</ul>
<p>The Consumer Financial Protection Bureau, which took over RESPA from HUD, issued general Section 8 FAQs in October 2020 saying marketing services agreements that pay for referrals violate the law, while payments for genuine services may be permitted depending on the facts.</p>
<h3>The cases that shaped the industry</h3>
<ul>
<li><strong>Abney v. American Home Shield:</strong> AHS agreed to pay up to $26 million to settle a class action alleging it paid brokers kickbacks for marketing its warranties; the settlement received final approval in January 2012. AHS denied wrongdoing.</li>
<li><strong>HUD and Fidelity National Financial:</strong> FNF paid $4.5 million in July 2011 to settle HUD allegations involving referral payments related to home warranties and title services, also without admitting wrongdoing.</li>
<li><strong>Congress:</strong> the House passed the "RESPA Home Warranty Clarification Act" (H.R. 2446) in 2012, which would have exempted these payments if disclosed, but the Senate never acted on it.</li>
</ul>
<h3>Texas requires disclosure</h3>
<p>Texas goes further than federal law in one practical way: listing brokers use TREC form RSC-4 to disclose whether they receive compensation from a residential service company, and if so which one. The form states the payment is for services the broker provides to the company, isn't contingent on a purchase, and that the buyer may choose any provider.</p>
<p><strong>What it means for you:</strong> an agent's recommendation may reflect experience with a company's claims service - or a business relationship. Neither is necessarily bad, but you're entitled to ask, and you're free to choose a different company.</p>`,
  },
  {
    heading: "How home warranties appear in purchase contracts",
    body: `<p>Whether and how a warranty is included is decided in the purchase contract. State forms handle it differently:</p>
<table>
<thead><tr><th>State</th><th>Standard form</th><th>How the home warranty is handled</th></tr></thead>
<tbody>
<tr><td>Texas</td><td>TREC One to Four Family Residential Contract (Resale), paragraph 7H</td><td>The buyer may purchase a residential service contract from a licensed provider; if so, the seller reimburses the buyer at closing up to an amount the parties fill in. Providers are regulated by TDLR.</td></tr>
<tr><td>Arizona</td><td>AAR Residential Resale Real Estate Purchase Contract</td><td>A plan is ordered from a named company with listed optional coverages, at a cost not to exceed a stated amount, paid by the buyer, the seller or split; the buyer may decline and initials either way.</td></tr>
<tr><td>California</td><td>C.A.R. Residential Purchase Agreement</td><td>Who pays is negotiable; sellers commonly pay. Home warranty companies are licensed by the California Department of Insurance as home protection companies.</td></tr>
<tr><td>Georgia and other states</td><td>Varies</td><td>Where the standard form has no warranty paragraph, it's typically added as a special stipulation.</td></tr>
</tbody>
</table>
<p><em>Sources: TREC contract and RSC-4 form; Arizona Association of Realtors contract (February 2026 revision); California Department of Insurance; practice guidance for other states. Forms are revised periodically - your agent will use the current version.</em></p>
<h3>It's always optional for the lender</h3>
<p>No mortgage lender requires a home warranty. Federal closing disclosure rules treat warranty products as optional, and premiums for separate warranty products are labeled "(optional)" on the Closing Disclosure. If anyone tells you a warranty is required to close, ask them to show you where.</p>
<h3>Write the cap high enough</h3>
<p>Because forms like Texas's and Arizona's use a "not to exceed" amount, the number you write in matters. A cap that only covers a basic plan forces the buyer to pay for any upgrade. If you're the buyer and the home has older HVAC or appliances, ask for a cap high enough to cover a mid- or top-tier real estate plan in your state - roughly $600-$850 based on the price sheets we've seen.</p>`,
  },
  {
    heading: "The negotiation playbook",
    body: `<p>A home warranty is one of several concessions buyers and sellers trade. Here's how it compares with the alternatives:</p>
<table>
<thead><tr><th>Concession</th><th>Typical cost to seller</th><th>What the buyer gets</th><th>Best when</th></tr></thead>
<tbody>
<tr><td>Home warranty</td><td>~$400-$850</td><td>A year of repair coverage starting at closing, minus service fees</td><td>Systems and appliances are aging but working</td></tr>
<tr><td>Repair before closing</td><td>Cost of the repair</td><td>A specific known problem fixed</td><td>The inspection found a defined defect</td></tr>
<tr><td>Repair credit</td><td>Agreed amount</td><td>Cash at closing to fix it themselves</td><td>Buyer wants control of the contractor</td></tr>
<tr><td>Closing-cost credit</td><td>Agreed amount (subject to loan limits)</td><td>Lower cash needed to close</td><td>Buyer is cash-constrained</td></tr>
<tr><td>Rate buydown</td><td>Often thousands</td><td>Lower mortgage payment</td><td>High rates are the buyer's main obstacle</td></tr>
<tr><td>Price reduction</td><td>Reduction amount</td><td>Lower price and loan</td><td>The home is overpriced for the market</td></tr>
</tbody>
</table>
<h3>If you're the seller</h3>
<ul>
<li>Offer the warranty early in the listing, alongside listing coverage, so it's part of the home's appeal rather than a concession made under pressure.</li>
<li>Use it to answer worries about older systems that work fine but are near the end of their typical life - a 13-year-old AC or a 10-year-old water heater.</li>
<li>Don't use it to paper over known defects. Disclose them, then repair, credit or price accordingly.</li>
</ul>
<h3>If you're the buyer</h3>
<ul>
<li>Ask for a seller-paid warranty in your offer, especially for an older home - it's a small ask relative to the median concession.</li>
<li>Set a cap that covers the tier you actually want.</li>
<li>Negotiate inspection findings separately; a warranty doesn't replace a repair request.</li>
<li>Choose the company yourself if you prefer a different one from the agent's recommendation.</li>
</ul>`,
  },
  {
    heading: "New construction: when a home warranty is mostly redundant",
    body: `<p>Buyers of newly built homes usually receive a builder warranty, commonly structured as "1-2-10": one year for workmanship and materials, two years for distribution systems such as plumbing, electrical and HVAC, and ten years for major structural defects. New appliances also typically carry manufacturer warranties for at least the first year.</p>
<p>A builder warranty covers construction and installation defects, not ordinary wear and tear, so it isn't the same product as a home warranty. But in the first one or two years, the combination of builder and manufacturer coverage overlaps heavily with what a home warranty would provide. For most new-construction buyers, a home warranty becomes useful around year two or three, as builder systems coverage and appliance warranties expire. If a builder offers a home warranty as an incentive, take it - just don't pay much extra for one in year one.</p>`,
  },
  {
    heading: "After closing: the first year and the renewal decision",
    body: `<p>The warranty's value is front-loaded into the months when you're learning the house. A few habits make it work:</p>
<ul>
<li><strong>Register the plan and save the contract</strong> as soon as you close; note the service fee and the claims phone number.</li>
<li><strong>Change HVAC filters and schedule maintenance</strong> in the first months. Missing maintenance is one of the most common denial reasons, and you don't want the previous owner's habits to become your problem.</li>
<li><strong>File promptly</strong> when something fails, and don't hire your own contractor first. Our <a href="/articles/how-to-file-a-home-warranty-claim">claim guide</a> walks through it.</li>
</ul>
<h3>Should you renew?</h3>
<p>When the first year ends, the plan typically renews at the company's then-current consumer price, which may be higher than the real estate price the seller paid. Treat renewal as a fresh decision: compare the renewal offer with direct-to-consumer plans from other companies, and weigh it against your home's age and your savings. Our <a href="/articles/is-a-home-warranty-worth-it">is a home warranty worth it</a> guide runs the break-even math, and our <a href="/articles/how-much-does-a-home-warranty-cost">cost guide</a> compares prices.</p>`,
  },
  {
    heading: "Seven costly mistakes buyers and sellers make",
    body: `<ol>
<li><strong>Treating the warranty as a substitute for repairs.</strong> Known defects should be repaired or credited; the warranty excludes them.</li>
<li><strong>Accepting the default plan without checking the tier.</strong> A basic plan may leave out air conditioning or major appliances.</li>
<li><strong>Writing a contract cap too low</strong> to cover the plan the buyer actually needs.</li>
<li><strong>Assuming listing coverage includes HVAC.</strong> At several companies it's an add-on.</li>
<li><strong>Losing the inspection report</strong> - your best evidence that an item was working at closing.</li>
<li><strong>Buying a plan directly after closing</strong> and accepting a 30-day gap, when a real estate plan would have started at closing.</li>
<li><strong>Auto-renewing without comparing,</strong> even though year-two pricing can differ substantially.</li>
</ol>`,
  },
  {
    heading: "Four real-world scenarios",
    body: `<h3>1. A seller with a 14-year-old AC</h3>
<p>A seller lists a house in a hot market in late spring. The AC works but is 14 years old. They order a buyer's real estate plan with listing coverage that includes HVAC. If the AC fails while the home is listed, a covered repair costs a service fee (subject to the seller-coverage limit), and the buyer gets a year of coverage from closing - a stronger answer to the inspector's "nearing end of life" note than a price cut.</p>
<h3>2. A buyer of a 1978 house</h3>
<p>A buyer is purchasing a 48-year-old home with an older water heater and original ductwork. They negotiate a seller-paid warranty with a cap high enough for a tier that includes AC and higher limits, ask for the seller's HVAC service records, and keep the inspection report. If the water heater fails in month four from normal wear - a problem the inspection didn't flag - that's exactly the kind of failure the plan is designed to cover.</p>
<h3>3. A buyer of a new build</h3>
<p>A buyer purchases a new home with a 1-2-10 builder warranty and new appliances. They skip a home warranty in year one, take the builder's free one-year plan if offered, and revisit coverage as the builder's two-year systems coverage ends.</p>
<h3>4. A sale that falls through</h3>
<p>A seller orders listing coverage, but the buyer's financing fails and the listing is withdrawn. Depending on the company, the seller may owe a small fee - $60 under First American's Florida contract, $75 under Old Republic's terms - or nothing. Asking that question before ordering avoids surprises.</p>`,
  },
];
