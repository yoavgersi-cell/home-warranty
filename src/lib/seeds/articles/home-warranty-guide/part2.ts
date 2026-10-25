import type { ArticleSection } from "@/lib/config";

// Part 2: money - cost, service fees, break-even math, alternatives, who should buy.
export const part2: ArticleSection[] = [
  {
    heading: "How much does a home warranty cost in 2026?",
    body: `<div class="qa"><strong>Short answer</strong>Most home warranty plans cost roughly <strong>$300-$700 a year</strong> (about $25-$60 a month). Comprehensive or premium tiers and add-ons push that higher - top tiers can approach $1,000 a year or more. On top of the premium, you pay a <strong>service call fee of about $60-$150</strong> per claim.</div>
<h3>Reported prices for the seven companies we track</h3>
<table>
<thead><tr><th>Company</th><th>Reported monthly price</th><th>Service call fee</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>~$46-$49 (Basic), ~$55-$58 (Total)</td><td>~$100 (lower in some markets)</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>~$30-$40 (ShieldSilver), ~$50-$60 (ShieldGold), ~$80-$90 (ShieldPlatinum)</td><td>$100 or $125 - you choose</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>~$36-$64 before promotions</td><td>~$60-$75 typical</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>~$40-$140 depending on plan and state</td><td>$75, $100 or $125</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>~$48 (Premier), ~$61 (Premier Plus) in a sample quote</td><td>~$100</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>~$54 (Standard), ~$67 (Comprehensive)</td><td>~$65-$125</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>From ~$27-$35</td><td>~$65-$125</td></tr>
</tbody>
</table>
<p>These are approximate figures from company sites, quote flows and third-party reviews in 2025-2026. Your price will differ.</p>
<h3>What drives your price</h3>
<ul>
<li><strong>Plan tier.</strong> Systems-only and appliances-only plans are cheapest; combination and premium tiers cost more.</li>
<li><strong>Location.</strong> Prices vary by state and ZIP code, reflecting local labor and parts costs and state rules.</li>
<li><strong>Home size and type.</strong> Larger homes, homes over a certain square footage, and multi-unit properties often cost more. Condos and townhomes can cost less.</li>
<li><strong>Service fee level.</strong> Choosing a higher service fee lowers your premium.</li>
<li><strong>Add-ons.</strong> Each optional item - pool, spa, well pump, septic, second refrigerator - adds to the monthly cost. Reported add-on prices run from a few dollars to around $18 a month each.</li>
<li><strong>Billing and promotions.</strong> Paying annually sometimes unlocks discounts or free months. Promotions are common but usually come with conditions.</li>
</ul>
<h3>Reading promotions correctly</h3>
<p>Promotions like "2 months free," "$150 off" or "free roof coverage" are real, but read the condition. Free months typically require paying for the full year upfront. A dollar-off discount may apply only to the first year. The only fair comparison is the <strong>total first-year cost</strong> and the <strong>expected renewal price</strong> for the coverage you actually need.</p>
<p class="cta-row"><a href="/articles/how-much-does-a-home-warranty-cost">→ Home warranty cost breakdown</a></p>`,
  },
  {
    heading: "How do home warranty service call fees work?",
    body: `<p>The <strong>service call fee</strong> - also called a trade call fee or deductible - is a flat amount you pay each time the company dispatches a technician for a claim. It is the warranty equivalent of an insurance deductible, with one important difference: it applies per visit, not per year.</p>
<h3>Five rules of thumb</h3>
<ol>
<li><strong>It's usually per claim, not per item.</strong> One visit for one problem means one fee. If the technician finds two unrelated problems, some companies may treat them as two claims.</li>
<li><strong>It's often owed even if the claim is denied.</strong> At many companies, the fee pays for the diagnostic visit, so you pay it regardless of the outcome.</li>
<li><strong>Return visits for the same problem are often free</strong> within the workmanship guarantee window (commonly 30 days).</li>
<li><strong>You can sometimes choose your fee.</strong> American Home Shield offers $100 or $125; First American offers $75, $100 or $125. A higher fee lowers your premium.</li>
<li><strong>Multi-year plans may lower it.</strong> Some companies reduce the fee for longer commitments.</li>
</ol>
<h3>Choosing a fee: the math</h3>
<p>Suppose a company offers two options: a $75 fee with a $55 monthly premium, or a $125 fee with a $47 monthly premium. The higher-fee plan saves $8 a month, or $96 a year. Each claim costs you $50 more. So:</p>
<ul>
<li>With <strong>one claim</strong> a year, the high-fee plan saves $46.</li>
<li>With <strong>two claims</strong> a year, it is roughly a wash.</li>
<li>With <strong>three or more claims</strong>, the low-fee plan wins.</li>
</ul>
<p>If your home has several aging systems and you expect multiple claims, a lower fee makes sense. If you're buying mostly for catastrophe protection, a higher fee usually does.</p>
<h3>Don't forget the fee when estimating value</h3>
<p>A small repair that costs $180 out of pocket saves you only $55-$105 once you subtract a $75-$125 fee. Home warranties deliver their value on mid-size and large repairs, not on minor fixes.</p>`,
  },
  {
    heading: "Is a home warranty worth it? The break-even math",
    body: `<p>Whether a warranty is worth it comes down to a simple comparison: <strong>what you pay in premiums and service fees</strong> versus <strong>what the company would pay for repairs you'd otherwise fund yourself</strong> - adjusted for caps and exclusions.</p>
<h3>Rough repair and replacement costs</h3>
<p>The table below gives broad national ranges to frame the math. They are rough estimates, not quotes - actual costs depend on your region, equipment and contractor.</p>
<table>
<thead><tr><th>Item</th><th>Typical repair (rough range)</th><th>Typical replacement (rough range)</th></tr></thead>
<tbody>
<tr><td>Central air conditioner</td><td>$200-$1,500</td><td>$4,000-$8,000+</td></tr>
<tr><td>Furnace</td><td>$150-$1,200</td><td>$3,000-$7,000+</td></tr>
<tr><td>Water heater (tank)</td><td>$150-$700</td><td>$1,000-$3,500</td></tr>
<tr><td>Refrigerator</td><td>$150-$700</td><td>$1,000-$3,000+</td></tr>
<tr><td>Dishwasher</td><td>$150-$500</td><td>$500-$1,500</td></tr>
<tr><td>Washer or dryer</td><td>$150-$500</td><td>$600-$1,500</td></tr>
<tr><td>Plumbing stoppage or leak</td><td>$150-$1,000</td><td>Varies widely</td></tr>
</tbody>
</table>
<h3>Three scenarios</h3>
<h4>Scenario A: a newer home, one small repair</h4>
<p>You pay $50 a month ($600 a year). The dishwasher needs a $300 repair; you pay a $100 fee. Total cost: $700. Without a warranty: $300. <strong>Result: the warranty cost you $400.</strong></p>
<h4>Scenario B: an older home, one big failure</h4>
<p>You pay $55 a month ($660). The furnace's heat exchanger fails and the company approves a replacement within a $3,000-$5,000 cap; you pay a $100 fee and $400 in code-related upgrades the plan doesn't cover. Total: $1,160. Without a warranty, a replacement could run several thousand dollars. <strong>Result: the warranty likely saved you a few thousand dollars.</strong></p>
<h4>Scenario C: an older home, low caps</h4>
<p>You pay $40 a month ($480) for a plan with $500 per-item caps. The refrigerator's compressor fails ($1,400) and the water heater needs replacement ($1,600). The company pays $500 for each; you pay two $75 fees plus $2,000 over the caps. Total: $2,630. Without a warranty: $3,000. <strong>Result: you saved $370 - far less than a higher-cap plan would have.</strong></p>
<h3>What the scenarios show</h3>
<ul>
<li>A home warranty is a bet on <strong>how many mid-to-large failures you'll have this year</strong>. With several aging systems, the odds tilt in your favor.</li>
<li><strong>Caps decide how much of a big repair you're protected from.</strong> A low-cap plan protects you mostly from small and mid-size repairs.</li>
<li><strong>Exclusions decide whether you're paid at all.</strong> A plan with code and permit coverage can be worth far more in an older home.</li>
</ul>
<h3>A simple self-test</h3>
<p>A warranty is more likely to be worth it if you answer "yes" to at least three of these:</p>
<ol>
<li>Is your furnace, AC or water heater past about half its expected life?</li>
<li>Would a surprise $3,000 repair be a real financial strain?</li>
<li>Do you have several older appliances?</li>
<li>Would you rather call one number than find and vet contractors yourself?</li>
<li>Are you buying a home whose systems you don't know well yet?</li>
</ol>
<p class="cta-row"><a href="/articles/is-a-home-warranty-worth-it">→ Is a home warranty worth it? Our shorter decision guide</a></p>`,
  },
  {
    heading: "Home warranty vs homeowners insurance vs other options",
    body: `<p>A home warranty is one of several ways to pay for home repairs. Here is how the main options compare.</p>
<table>
<thead><tr><th>Option</th><th>What it pays for</th><th>How you pay</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Home warranty</td><td>Repair or replacement of covered systems and appliances that fail from wear and tear, up to caps</td><td>Premium plus service fee per claim</td><td>Homes with several aging items; owners who want predictable costs</td></tr>
<tr><td>Homeowners insurance</td><td>Sudden, accidental damage (fire, storms, theft, some water damage) and liability</td><td>Premium plus deductible per claim</td><td>Required by lenders; protects against catastrophic loss</td></tr>
<tr><td>Manufacturer's warranty</td><td>Defects in a specific new product for a set period</td><td>Included with purchase</td><td>New appliances and systems in their first years</td></tr>
<tr><td>Extended appliance warranty</td><td>Repairs to a single appliance after the manufacturer warranty ends</td><td>One-time or monthly fee per item</td><td>One expensive appliance you want covered</td></tr>
<tr><td>Builder warranty</td><td>Workmanship, systems and structural defects in a new home for set periods</td><td>Included with new construction</td><td>New-construction buyers</td></tr>
<tr><td>Self-funded repair savings</td><td>Anything you choose, with no caps or exclusions</td><td>Monthly deposits into savings</td><td>Owners with discipline and a cushion; newer homes</td></tr>
</tbody>
</table>
<h3>Home warranty vs homeowners insurance in one sentence</h3>
<p>If a storm destroys your AC unit, call your insurer; if your AC unit simply wears out, that's a home warranty question. Insurance is almost always required by mortgage lenders. A home warranty is always optional, and it never replaces insurance.</p>
<h3>The "self-insure" alternative</h3>
<p>Instead of paying a $600 annual premium, you could put $50 a month into a dedicated repair account. After a few years without big failures, you'd have a meaningful cushion with no caps, exclusions or claim disputes. The catch: an early major failure can hit before the fund is large enough, and you'll be finding contractors yourself. Many homeowners combine approaches - a warranty while systems are old or unknown, then a savings fund after replacing them.</p>
<h3>Builder and structural warranties</h3>
<p>If you buy new construction, you may already have a builder warranty covering workmanship and systems for an initial period and major structural defects for longer - <a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a> is one of the best-known providers of builder structural warranties. Check what that warranty covers before paying for a separate home warranty.</p>
<p class="cta-row"><a href="/articles/home-warranty-vs-homeowners-insurance">→ Home warranty vs homeowners insurance: full comparison</a></p>`,
  },
  {
    heading: "Who should buy a home warranty - and who should skip it",
    body: `<h3>Strong candidates</h3>
<ul>
<li><strong>Buyers of older homes.</strong> If the furnace, AC and water heater are 10+ years old and you don't know their maintenance history, a warranty can soften a rough first year - especially if the seller pays for it.</li>
<li><strong>First-time buyers with thin savings.</strong> After a down payment and closing costs, many buyers have little cushion. A warranty converts unpredictable repairs into a fixed monthly cost.</li>
<li><strong>Sellers.</strong> Offering a warranty can make a listing more attractive and reduce post-sale disputes. Some plans also cover the home while it's listed.</li>
<li><strong>Landlords.</strong> One number to call for tenant repairs can save time, though contractor availability and response times matter more in rentals. Check whether the company covers rental properties and multi-unit buildings.</li>
<li><strong>Busy or less handy owners</strong> who value not having to find and vet contractors.</li>
</ul>
<h3>Weak candidates</h3>
<ul>
<li><strong>New or recently renovated homes</strong> whose systems are still under manufacturer or builder warranties.</li>
<li><strong>Owners with a solid repair fund</strong> who are comfortable choosing their own contractors.</li>
<li><strong>Homes with unusual or high-end equipment</strong> - commercial-grade appliances, geothermal systems - that plans exclude or cap low.</li>
<li><strong>Owners who want a specific contractor or brand</strong>, since most plans assign technicians and choose replacement models.</li>
</ul>
<h3>Special cases</h3>
<h4>Condo owners</h4>
<p>Your HOA may cover building systems; your unit's appliances and in-unit HVAC may not be covered by anyone. An appliance-only plan can fit well.</p>
<h4>Seniors and fixed incomes</h4>
<p>Predictable monthly costs can be valuable on a fixed income, but read cancellation terms and avoid long prepaid commitments you might not use.</p>
<h4>Homes with known problems</h4>
<p>A warranty won't cover problems that already exist. If an inspection flagged an issue, negotiate a repair or credit with the seller instead.</p>`,
  },
];
