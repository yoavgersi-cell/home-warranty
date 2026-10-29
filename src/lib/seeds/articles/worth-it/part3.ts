import type { ArticleSection } from "@/lib/config";

// Part 3: the comparison table (value factors across the 7 companies) and
// what our 351-review study says about whether customers felt they got value.
export const part3: ArticleSection[] = [
  {
    heading: "How the seven major home warranty companies compare on value",
    body: `<p>"Worth it" depends on which plan you'd actually buy. The same $600 a year buys very different protection depending on the caps, the fee, and how the company pays when it won't repair. Here are the factors that decide value, side by side:</p>
<table>
<thead><tr><th>Company</th><th>Typical monthly price</th><th>Service fee</th><th>Key limits</th><th>Cash-out basis</th><th>Trustpilot (Oct 2026)</th><th>Top complaint in recent reviews</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>~$46-$58</td><td>~$100</td><td>$3,000 per covered item</td><td>Choice's actual cost</td><td>3.9 (63,234)</td><td>Waiting for a technician or fix (13 of 99)</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>~$30-$90 by tier</td><td>$100 or $125</td><td>$5,000 HVAC; $2,000-$4,000 per appliance</td><td>AHS cost, "likely" below retail</td><td>3.5 (16,329)</td><td>Long waits, unresolved repairs (13 of 60)</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>~$36-$64</td><td>~$60-$75</td><td>~$500 per item; ~$3,000 HVAC</td><td>Cash settlement at Select's option</td><td>3.2 (6,413)</td><td>Claim denied over fine print (19 of 72)</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>~$40-$140 by plan/state</td><td>$100 or $125</td><td>$3,500-$7,000 appliances</td><td>Negotiated supplier rates, by agreement</td><td>4.0 (19,350)</td><td>Long waits, unresolved repairs (8 of 60)</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>~$48-$61</td><td>~$100</td><td>Up to $5,000 most repairs</td><td>HWA's actual cost</td><td>4.0 (3,403)</td><td>Claim denied (7 of 60)</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>~$54-$67</td><td>~$65-$125</td><td>$300-$2,000 per item</td><td>Not confirmed</td><td>No profile</td><td>-</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>from ~$27-$35</td><td>$65-$125</td><td>$5,000 AC; $2,000 per appliance</td><td>Estimate of local retail cost</td><td>No profile</td><td>-</td></tr>
</tbody>
</table>
<p><em>Prices, fees and limits are typical figures from published plans, sample contracts and quotes; they vary by plan, state and contract year. Choice, Home Warranty of America and The Home Service Club share a parent company (Rely Home); American Home Shield and 2-10 share one (Frontdoor).</em></p>
<p>Three things jump out once you lay it out like this.</p>
<p><strong>The monthly price is the least informative number in the table.</strong> A plan with a $500 appliance cap and a plan with a $4,000 appliance cap can cost within $10 a month of each other. The cap decides whether a refrigerator claim gets fixed or turns into a check that covers a fraction of a new one.</p>
<p><strong>The cash-out basis is the hidden value driver.</strong> Most companies pay cash at their own discounted cost. Only 2-10's published sample contract ties cash-outs to an estimate of local retail prices. If you have mid-range or high-end appliances, that single clause can be worth more than a lower premium.</p>
<p><strong>Review scores cluster closer than you'd expect.</strong> Every company with a Trustpilot profile sits between 3.2 and 4.0. The differences that matter show up in <em>what</em> people complain about - denials at one company, waits at another - not in the headline score.</p>`,
  },
  {
    heading: "Did customers feel they got their money's worth? What 351 reviews show",
    body: `<p>On October 26, 2026 we read every recent Trustpilot review of Choice, American Home Shield, Select, First American and Home Warranty of America - 351 reviews in all - and tagged what each one said. (The full method and company-by-company breakdowns are in our <a href="/articles/home-warranty-claim-denied">claim denial study</a>.)</p>
<p>The value question splits reviewers into two groups that barely overlap.</p>
<p><strong>People whose claim was a clean repair were happy.</strong> The most common praise, at every company, was for the technician and the speed: a water heater replaced within days, a dryer fixed four days after the call, an HVAC replacement that cost one AHS customer only the $125 service fee. For these customers the math was obvious - one claim covered a year or more of premiums.</p>
<p><strong>People whose claim hit a limit were furious.</strong> The five most common complaints across all 351 reviews were:</p>
<ul>
<li>Slow or unresolved repairs - 52 reviews</li>
<li>Denied claims - 47</li>
<li>Hard-to-reach customer service - 42</li>
<li>Service fees paid with little or nothing repaired - 24</li>
<li>Cash-out offers far below replacement cost - 20</li>
</ul>
<p>The money complaints are the ones that answer "is it worth it." Reviewers reported offers like <strong>$406 toward a refrigerator that costs $1,799</strong>, <strong>$546 toward a water heater they'd paid $1,700 to replace</strong>, and <strong>$175 toward a dishwasher after an $85 fee</strong>. One long-time Choice customer summed up the doubt: the $272 offered toward a new dishwasher "doesn't even come close," and "I average more in premiums per month, not really sure if it's worth it."</p>
<p>A warning about the star ratings themselves: most positive reviews carry Trustpilot's "Invited" or "Verified" label, meaning the company prompted them, usually right after a completed repair. In our batches, those 230 labeled reviews averaged <strong>4.4 stars</strong>; the 49 unlabeled ones averaged <strong>1.4</strong>. Both groups are real customers. They're just answering different questions - "how was your repair?" versus "how did this go when it got hard?"</p>`,
  },
];
