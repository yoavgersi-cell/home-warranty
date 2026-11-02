import type { ArticleSection } from "@/lib/config";

// Part 4b: cost by homeowner situation (illustrative totals built from the
// 2026 quote ranges in parts 2-3) and the hidden-costs checklist (contract
// terms from our claim-denial research; Old Republic per-trade fee).
export const part4b: ArticleSection[] = [
  {
    heading: "What a home warranty costs for six common homeowners",
    body: `<p>Averages hide a lot. Here's what typical coverage might cost in a year for six different households, built from the 2026 price ranges above. Your quotes will differ, but the structure of the cost - and where it adds up - is the useful part.</p>
<table>
<thead><tr><th>Homeowner</th><th>Likely plan</th><th>Premium</th><th>Add-ons</th><th>Expected fees</th><th>Typical year</th></tr></thead>
<tbody>
<tr><td>Condo owner, newer building, appliances 3 years old</td><td>Systems-only or basic plan (condo pricing where offered)</td><td>~$25-$40/mo ($300-$480)</td><td>None</td><td>~1 claim × $100</td><td><strong>~$400-$580</strong></td></tr>
<tr><td>First-time buyer, 20-year-old house, seller-paid first year</td><td>Real estate combo plan</td><td>$0 to you (seller pays ~$400-$700)</td><td>None</td><td>~2 claims × $100</td><td><strong>~$200 in year one</strong>; then ~$700-$1,000 if renewed</td></tr>
<tr><td>Family in a 15-year-old suburban home</td><td>Combo plan, $125 fee</td><td>~$55/mo ($660)</td><td>None</td><td>~2 claims × $125</td><td><strong>~$910</strong></td></tr>
<tr><td>Rural home with pool, well and septic</td><td>Combo plan</td><td>~$60/mo ($720)</td><td>Pool ~$15-$21, well ~$8-$10, septic ~$5-$10 per month (~$340-$490)</td><td>~3 claims × $100</td><td><strong>~$1,360-$1,510</strong></td></tr>
<tr><td>Large home (over 5,000 sq ft), two HVAC systems</td><td>Top-tier plan, custom quote</td><td>~$90+/mo ($1,080+) plus a size surcharge</td><td>Varies</td><td>~3 claims × $100</td><td><strong>~$1,400+</strong></td></tr>
<tr><td>Landlord with a single-family rental</td><td>Combo plan (rental eligibility varies)</td><td>~$55-$65/mo ($660-$780)</td><td>None</td><td>~3 claims × $100 (tenants use appliances hard)</td><td><strong>~$960-$1,080</strong>, often deductible as a rental expense</td></tr>
</tbody>
</table>
<p>Three takeaways stand out. Add-ons can double the cost of a basic plan for homes with a pool, well or septic system. A seller-paid first year is close to free coverage for a buyer - the real decision comes at renewal. And for condo owners with newer equipment, the math often favors a basic plan or no plan at all. (For rental properties, ask your tax adviser about deductibility.)</p>`,
  },
  {
    heading: "Hidden home warranty costs to budget for",
    body: `<p>Beyond the premium and the service fee, these are the costs that most often surprise homeowners. Most come from limits written into the contract, and our analysis of 351 recent customer reviews found many of them in real claims.</p>
<table>
<thead><tr><th>Hidden cost</th><th>What it is</th><th>How to limit it</th></tr></thead>
<tbody>
<tr><td>Amounts over the cap</td><td>Covered repairs or replacements above the per-item limit (often $3,000-$5,000 for HVAC, $500-$4,000 for appliances)</td><td>Choose limits that fit your equipment's replacement cost</td></tr>
<tr><td>Cash-out shortfall</td><td>When the company pays cash at its own cost instead of replacing; reviewers reported offers like $406 toward a $1,799 refrigerator</td><td>Check how cash in lieu is calculated before buying; negotiate with comparable-model prices</td></tr>
<tr><td>Permits, code upgrades and "modifications"</td><td>Work required to install a replacement legally or make it fit; reviewers reported $375-$750 in uncovered modifications</td><td>Look for plans with permit/code coverage; get itemized quotes</td></tr>
<tr><td>Refrigerant</td><td>Many plans cap refrigerant (often around $10 per pound) or cover it only on top tiers</td><td>Compare refrigerant terms if AC is your priority</td></tr>
<tr><td>Fees on denied claims</td><td>The service fee is generally owed even when a claim is denied</td><td>Read the coverage for the item before filing</td></tr>
<tr><td>Multiple fees per claim</td><td>Some companies charge per trade or per visit - Old Republic, for example, charges per trade - so a claim involving two trades or repeat visits can cost more than one fee</td><td>Ask how fees apply to multi-trade and repeat visits</td></tr>
<tr><td>Haul-away and disposal</td><td>Removing the old unit may not be included</td><td>Ask before replacement</td></tr>
<tr><td>Renewal increases</td><td>Promotional first-year prices often rise at renewal</td><td>Check the renewal price and shop it</td></tr>
<tr><td>Cancellation fees</td><td>Admin fees after the first 30 days (often $50-$75; capped by law in some states)</td><td>Cancel within the free-look window if it's not right</td></tr>
</tbody>
</table>
<p>None of these makes a home warranty a bad buy on its own. But they're the difference between the price you were quoted and the price you pay - so build them into your comparison. Our <a href="/articles/home-warranty-claim-denied">denied claims guide</a> explains how to push back when they're applied unfairly.</p>`,
  },
];
