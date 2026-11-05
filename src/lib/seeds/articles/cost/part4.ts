import type { ArticleSection } from "@/lib/config";

// Part 4: the service fee trade-off, total cost of ownership, and the costs
// of leaving (state cancellation rules from our state guides: Tex. Occ. Code
// 1304.1581, A.R.S. 20-1095.06, Fla. Stat. 634.312, N.C.G.S. 66-372).
export const part4: ArticleSection[] = [
  {
    heading: "The service fee: the cost most buyers underestimate",
    body: `<p>Every home warranty claim comes with a <strong>service fee</strong> (also called a trade call fee or deductible) - typically <strong>$60 to $150</strong>, and most commonly $100 to $125 at the larger companies today. It's the second half of your real cost, and it behaves differently from the premium in three important ways.</p>
<h3>1. A lower fee usually means a higher premium</h3>
<p>Several companies let you choose your fee, and the trade-off differs by company. Two real examples from 2026 quotes:</p>
<ul>
<li><strong>American Home Shield:</strong> choosing the $125 fee instead of $100 lowers the price by about <strong>$10 a month</strong> on every plan tier, according to quotes reported by ConsumerAffairs and This Old House (for example, $39.99 vs. $29.99 for ShieldSilver on one Texas ZIP code).</li>
<li><strong>First American:</strong> the same $100-vs-$125 choice changes the price by about <strong>$5 a month</strong>, according to ConsumerAffairs quotes (about $47 vs. $42 for its Starter plan).</li>
</ul>
<p>The math is simple: the lower fee saves $25 per claim, so it pays off only if you file more claims than the extra annual premium divided by $25.</p>
<table>
<thead><tr><th>Claims per year</th><th>AHS-style: $125 fee vs. $100 fee (+$120/yr)</th><th>First American-style: $125 fee vs. $100 fee (+$60/yr)</th></tr></thead>
<tbody>
<tr><td>0</td><td>$125 fee saves $120</td><td>$125 fee saves $60</td></tr>
<tr><td>1</td><td>$125 fee saves $95</td><td>$125 fee saves $35</td></tr>
<tr><td>2</td><td>$125 fee saves $70</td><td>$125 fee saves $10</td></tr>
<tr><td>3</td><td>$125 fee saves $45</td><td>$100 fee saves $15</td></tr>
<tr><td>4</td><td>$125 fee saves $20</td><td>$100 fee saves $40</td></tr>
<tr><td>Break-even</td><td><strong>4.8 claims a year</strong></td><td><strong>2.4 claims a year</strong></td></tr>
</tbody>
</table>
<p>Frontdoor, American Home Shield's parent, reports roughly 3.8 million service requests across about 2.1 million warranties a year - an average of roughly 1.8 per warranty. For a typical household, that means <strong>the higher fee and lower premium usually come out ahead at AHS</strong>, while at First American the choice is close and leans toward the lower fee only for homes that file three or more claims a year.</p>
<h3>2. The fee is usually owed even when a claim is denied</h3>
<p>Most contracts charge the fee when a technician is dispatched, regardless of outcome. Select's terms say the fee is owed whether a claim is granted, excluded, limited or denied; Home Warranty of America's say the trade call fee applies to calls where coverage is denied; American Home Shield describes its fee as non-refundable. In our analysis of 351 recent customer reviews, 24 complained about paying a fee and getting little or nothing repaired. Budget for the fee as a cost of <em>using</em> the plan, not just of successful claims.</p>
<h3>3. Per claim versus per visit</h3>
<p>Some contracts charge once per claim no matter how many visits it takes; others effectively charge per dispatch. A recurring problem can add up fast - one First American customer in our review study said they paid $100 per visit on more than eight occasions for a refrigerator that was never fixed. Before you buy, ask: is a return visit for the same problem a new fee? Many contracts include a workmanship guarantee (often 30 days) during which repeat repairs are covered without another fee.</p>`,
  },
  {
    heading: "How to calculate the true annual cost of a home warranty",
    body: `<p>The monthly price is the number in the ad. The number that matters is your <strong>total annual cost</strong>:</p>
<div class="qa"><strong>Formula</strong>Annual premium + optional add-ons + (expected claims × service fee) + expected out-of-pocket costs over caps or for exclusions = true annual cost</div>
<p>Here's how that works for three typical homeowners:</p>
<table>
<thead><tr><th></th><th>Newer home, systems plan</th><th>Typical home, combo plan</th><th>Older home with pool, premium plan</th></tr></thead>
<tbody>
<tr><td>Annual premium</td><td>$420 ($35/mo)</td><td>$660 ($55/mo)</td><td>$960 ($80/mo)</td></tr>
<tr><td>Add-ons</td><td>$0</td><td>$0</td><td>$200 (pool/spa)</td></tr>
<tr><td>Expected claims × fee</td><td>1 × $100 = $100</td><td>2 × $125 = $250</td><td>3 × $100 = $300</td></tr>
<tr><td><strong>Typical annual cost</strong></td><td><strong>$520</strong></td><td><strong>$910</strong></td><td><strong>$1,460</strong></td></tr>
</tbody>
</table>
<p>These are illustrations, but they line up with what real customers report: in This Old House's January 2026 survey of about 2,000 home warranty customers, the average quoted premium was about $56 a month (about $672 a year), while the most common amount customers actually paid in a year - including fees and extras - was around $1,200. The gap between the advertised price and the real one is mostly fees and add-ons.</p>
<p>Then compare the result with what you'd likely pay without a plan. For a typical home, the big swing is whether a major system - an air conditioner (about $6,000 to replace), a furnace (about $4,800) or a water heater (about $600-$2,500) - fails while you're covered. Our <a href="/articles/is-a-home-warranty-worth-it">worth-it guide</a> walks through that math with five scenarios and a 10-minute age audit of your home.</p>`,
  },
  {
    heading: "What it costs to cancel a home warranty",
    body: `<p>Most home warranties renew automatically. If you cancel, your refund depends on the contract - and in several states, on the law. Here are the rules in the states we've researched in depth:</p>
<table>
<thead><tr><th>State</th><th>Cancellation and refund rule</th></tr></thead>
<tbody>
<tr><td>Texas</td><td>Full refund (minus claims paid) within 30 days with no fee; after that, a pro rata refund minus a cancellation fee of no more than <strong>$50</strong>; late refunds carry a 10%-per-month penalty</td></tr>
<tr><td>Florida</td><td>Right to cancel within <strong>10 days</strong> of purchase for a refund (minus claims paid and a small administrative fee); after that, a refund based on 90% of the unearned pro rata premium minus claims paid</td></tr>
<tr><td>Arizona</td><td>Pro rata refund minus benefits paid and an administrative fee of no more than the <strong>lesser of $75 or 10%</strong> of the price</td></tr>
<tr><td>North Carolina (appliance service agreements)</td><td>Cancel any time; pro rata refund minus claims and an admin fee of no more than <strong>10% of the refund</strong></td></tr>
<tr><td>California</td><td>Set by the contract (the state's general service-contract refund rule excludes home protection plans); Choice's California terms, for example, cap its admin fee at the lesser of 10% of the agreement fee or $25</td></tr>
</tbody>
</table>
<p>Elsewhere, contracts commonly offer a full refund within the first 30 days if no claims were made, then a pro rata refund minus an administrative fee. Select's terms, for example, list a $75 cancellation fee after 30 days; Home Warranty of America's list the lesser of $30 or 10% of the contract fee. Two practical tips: claims paid are usually deducted from any refund, and several companies only accept cancellation by phone - reviewers in our study described long holds - so get a written confirmation number. Our <a href="/articles/home-warranty-by-state">state-by-state guide</a> has the details for each state we cover.</p>`,
  },
];
