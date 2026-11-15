import type { ArticleSection } from "@/lib/config";

// Part 2b: transaction timeline and first-year cost math. Timeline built from
// the terms sourced in parts 1-2 (AHS/First American start rules, seller
// coverage windows, Texas/Arizona contract mechanics). Cost math uses the
// real estate price examples above (AHS Texas sheets) and consumer prices
// already published on our review pages (2025-2026 third-party quotes);
// repair costs from Angi/HomeAdvisor as cited in our cost and coverage guides.
// All scenarios are illustrations, not quotes.
export const part2b: ArticleSection[] = [
  {
    heading: "The home warranty timeline, from listing to day 30",
    body: `<p>Most mistakes with real estate warranties come from timing: ordering too late, missing a window, or not knowing which coverage is active when. Here's the sequence for a typical sale:</p>
<table>
<thead><tr><th>Stage</th><th>Seller</th><th>Buyer</th><th>Watch out for</th></tr></thead>
<tbody>
<tr><td>Before listing</td><td>Decide whether to offer a warranty; order listing coverage (with HVAC if offered as an add-on)</td><td>-</td><td>HVAC add-ons may have to be chosen when ordering (Choice: within 24 hours)</td></tr>
<tr><td>While listed</td><td>Listing coverage active (often up to 180 days or 6 months, extendable)</td><td>Ask whether a warranty is offered</td><td>Seller limits around $1,500; service fees apply</td></tr>
<tr><td>Offer and contract</td><td>Agree to pay up to a set amount, or decline</td><td>Request a seller-paid plan; set a cap that covers the tier you want; choose the company</td><td>A cap that's too low limits the buyer to a basic tier</td></tr>
<tr><td>Inspection period</td><td>Respond to repair requests</td><td>Negotiate flagged items separately; collect HVAC service records</td><td>Flagged items will be excluded as known conditions</td></tr>
<tr><td>Before closing</td><td>Confirm the order is in the closing paperwork</td><td>Confirm company, tier, limits and service fee in writing</td><td>Check the Closing Disclosure line - it should say "(optional)"</td></tr>
<tr><td>Closing day</td><td>Listing coverage ends; buyer plan paid from proceeds</td><td>Buyer coverage starts (no waiting period on most real estate plans)</td><td>Register the plan and save the contract</td></tr>
<tr><td>Days 1-60</td><td>If the sale fell through, settle any listing-coverage fee</td><td>Late enrollment windows: AHS real estate pricing up to 60 days; First American no waiting period within 60 days; 2-10 agent enrollment up to 30 days</td><td>After these windows, a new plan usually carries a 30-day wait</td></tr>
<tr><td>Month 11-12</td><td>-</td><td>Compare the renewal offer with other plans</td><td>Renewal is at the company's then-current price</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "First-year cost math: seller-paid plan vs buying your own vs no plan",
    body: `<p>To see what a real estate plan is worth to a buyer, compare three ways of handling the first year in a 30-year-old house where two things fail: the water heater (a typical tank replacement of about $900-$1,800) and the dishwasher (a typical repair of about $160-$300).</p>
<table>
<thead><tr><th>Approach</th><th>Upfront cost to buyer</th><th>Coverage gap</th><th>Cost of the two failures</th><th>Approximate first-year total</th></tr></thead>
<tbody>
<tr><td>Seller-paid real estate plan</td><td>$0 (seller pays ~$475-$835)</td><td>None - starts at closing</td><td>Two service fees (~$75-$125 each), plus anything over plan limits or excluded</td><td>~$150-$250</td></tr>
<tr><td>Buyer buys a consumer plan after closing</td><td>~$46-$90 a month (~$550-$1,080 a year)</td><td>30-day waiting period</td><td>Two service fees, if both failures happen after day 30</td><td>~$700-$1,330</td></tr>
<tr><td>No plan (self-insure)</td><td>$0</td><td>Not applicable</td><td>Full cost of both: ~$1,060-$2,100</td><td>~$1,060-$2,100</td></tr>
</tbody>
</table>
<p><em>Illustration only. Real estate prices from AHS Texas price sheets; consumer prices from 2025-2026 third-party quotes published in our reviews; repair and replacement costs from Angi / HomeAdvisor and HomeGuide as cited in our cost guide. Your costs will differ.</em></p>
<p>Three lessons come out of the comparison:</p>
<ol>
<li><strong>The seller-paid plan wins clearly for the buyer</strong> - which is why buyers should ask for it and why it works as a concession.</li>
<li><strong>Buying your own plan after closing can still beat self-insuring</strong> in a year with two failures, but the 30-day gap matters: a failure in the first month is on you.</li>
<li><strong>In a year with no failures, self-insuring is cheapest.</strong> That's the trade-off behind every home warranty. A seller-paid plan removes most of the downside for the buyer, which is why the decision is easy in a sale and harder at renewal.</li>
</ol>
<p>From the seller's side, the same plan costs a few hundred dollars against a median concession of $9,800 - and if it heads off even one post-closing dispute, it's paid for itself in time and stress alone.</p>`,
  },
];
