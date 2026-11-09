import type { ArticleSection } from "@/lib/config";

// Part 5: coverage company by company. Facts: provider data already published
// on our review pages (prices, plans) plus the November 2026 research on plan
// contents and limits (AHS plan pages and sample agreement; Choice contract
// excerpts / NerdWallet 2026; First American coverage-limit pages; money.com
// and This Old House on Select; This Old House and NerdWallet on HWA; HSC per
// This Old House and company marketing; 2-10 help center). Prices approximate.
export const part5: ArticleSection[] = [
  {
    heading: "What each home warranty company covers, plan by plan",
    body: `<p>Plan names are marketing; what matters is which items and limits sit behind each name. Here's how the seven companies we track structure their consumer plans.</p>
<table>
<thead><tr><th>Company</th><th>Plan</th><th>What it covers</th><th>Approx. price</th></tr></thead>
<tbody>
<tr><td rowspan="2"><a href="/reviews/choice-home-warranty">Choice</a></td><td>Basic</td><td>Heating, plumbing, electrical, water heater, ductwork, oven/range/cooktop, dishwasher, built-in microwave, garbage disposal</td><td>~$46-$49/mo</td></tr>
<tr><td>Total</td><td>Basic + air conditioning, refrigerator, washer, dryer</td><td>~$55-$58/mo</td></tr>
<tr><td rowspan="3"><a href="/reviews/american-home-shield">American Home Shield</a></td><td>ShieldSilver</td><td>Systems only: heating, AC, ductwork, plumbing, water heater, electrical (incl. ceiling fans, doorbells, exhaust fans), garage door opener</td><td>~$30-$40/mo</td></tr>
<tr><td>ShieldGold</td><td>ShieldSilver + refrigerator (incl. ice maker), range/oven/cooktop, dishwasher, built-in microwave, disposal, washer, dryer</td><td>~$50-$60/mo</td></tr>
<tr><td>ShieldPlatinum</td><td>ShieldGold + roof leak repair (up to $1,000), annual HVAC tune-up, permits and code (up to $250), unlimited refrigerant, $4,000 appliance limit</td><td>~$80-$90/mo</td></tr>
<tr><td rowspan="3"><a href="/reviews/select-home-warranty">Select</a></td><td>Bronze Care</td><td>Appliances: washer, dryer, refrigerator, range, cooktop, built-in microwave, dishwasher, disposal</td><td rowspan="3">~$36-$64/mo before promotions</td></tr>
<tr><td>Gold Care</td><td>Systems: heating, AC, electrical, plumbing, water heater</td></tr>
<tr><td>Platinum Care</td><td>Bronze + Gold + ceiling fans, plumbing stoppages, garage door opener</td></tr>
<tr><td rowspan="3"><a href="/reviews/first-american">First American</a></td><td>Starter</td><td>Core systems and kitchen appliances (scope varies by state; some versions leave out AC and laundry)</td><td rowspan="3">~$37-$142/mo by plan and state</td></tr>
<tr><td>Essential</td><td>Adds washer, dryer, water heater, AC or mini-split, garage door opener, exhaust fans, trash compactor; concrete-encased plumbing</td></tr>
<tr><td>Premium</td><td>Adds luxury appliances, central vacuum, faucets, instant hot water dispenser, more garage door components; 100% refrigerant; $7,000 appliance limit</td></tr>
<tr><td rowspan="2"><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Premier</td><td>Major systems and appliances, excluding air conditioning</td><td>~$48/mo (sample quote)</td></tr>
<tr><td>Premier Plus</td><td>Premier + air conditioning, plumbing fixtures, faucets and shower heads, plus about 30 extra components</td><td>~$61/mo (sample quote)</td></tr>
<tr><td rowspan="2"><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Standard</td><td>18 items, including AC, heating, refrigerator, ice maker, dishwasher, cooktop, central vacuum</td><td>~$54/mo</td></tr>
<tr><td>Comprehensive</td><td>33 items: Standard + ductwork, exhaust fans, plumbing stoppages, smoke detectors, circulating pumps</td><td>~$67/mo</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>Kitchen, systems and combination plans</td><td>Names vary by channel and changed in 2026; HVAC up to $5,000, appliances up to $2,000, $50,000 per term</td><td>Check for your address</td></tr>
</tbody>
</table>
<p><em>Prices are approximate and come from 2025-2026 quotes reported by third parties and company listings; your price depends on your address, home size and service fee. Plan contents vary by state and contract version.</em></p>`,
  },
  {
    heading: "How the top companies compare on coverage",
    body: `<h3>Choice Home Warranty: simple plans, one limit</h3>
<p>Choice has the simplest structure in the market: two plans and a single $3,000 limit per covered item (or category) per 12 months. That consistency is its real strength - you don't need to decode a dozen sub-limits. The trade-offs are that air conditioning, the refrigerator and laundry are only on the Total plan; contract excerpts exclude refrigerator ice makers and dispensers; and refrigerant, permits and government-mandated upgrades are excluded. Add-ons are broad: pool and spa, well pump, sump pump, septic, limited roof leak, central vacuum, second refrigerator and standalone freezer. Choice is sold in every state except Washington. <a href="/reviews/choice-home-warranty">Read our Choice review.</a></p>
<h3>American Home Shield: the deepest top tier</h3>
<p>AHS's tiers build cleanly on each other, and its systems coverage is broad even on the entry plan: ShieldSilver includes ceiling fans, doorbells, exhaust fans, the garage door opener and the water heater, including tankless units. ShieldGold adds appliances at $2,000 each, with the refrigerator's ice maker included. ShieldPlatinum is the most complete consumer plan we track at a national company: $4,000 per appliance, unlimited refrigerant, an annual HVAC tune-up, roof leak repair up to $1,000 and permits and code coverage up to $250. The catches are the $10-per-pound refrigerant limit on Silver and Gold, and the price of Platinum. AHS isn't sold in Alaska or Hawaii. <a href="/reviews/american-home-shield">Read our AHS review.</a></p>
<h3>Select Home Warranty: low price, low limits</h3>
<p>Select's three plans map neatly to appliances (Bronze Care), systems (Gold Care) and both (Platinum Care), and its add-ons are among the cheapest we've seen - about $3 a month for a well pump and $6-$8 for a pool, as reported. Promotions often include limited roof coverage. The trade-off is limits: about $500 per item for many appliances, plumbing and electrical, and about $3,000 per term for HVAC, according to NerdWallet and This Old House. NerdWallet also called Select's sample contract unclear on limits. Select suits homeowners who mainly want help with smaller repairs at a low price. <a href="/reviews/select-home-warranty">Read our Select review.</a></p>
<h3>First American: the strongest HVAC and appliance limits</h3>
<p>Where it's sold, First American has the most generous limits we've found: no dollar limit on conventional HVAC, no limit on ductwork on homeowner plans, $3,500 per appliance on lower tiers and $7,000 on Premium, plus 100% refrigerant coverage on Premium. Its Essential and Premium tiers include "Advantage" coverage for code violations, permits, crane fees and concrete access, with reported combined caps of $500 and $1,500. The drawbacks are availability - about 35-37 states plus D.C. - and plan names and contents that vary by state. <a href="/reviews/first-american">Read our First American review.</a></p>
<h3>Home Warranty of America: high item limit, check the sub-limits</h3>
<p>HWA advertises up to $5,000 per covered item with a $15,000 total per term, and it's sold in all 50 states. Premier leaves out air conditioning; Premier Plus adds it, along with faucets, shower heads and about 30 extra components. NerdWallet reports sub-limits on some items, including $1,000 for tankless water heaters and $1,500 for some heating systems, and a $2,000 limit for rust- and corrosion-related plumbing and electrical failures. <a href="/reviews/home-warranty-of-america">Read our HWA review.</a></p>
<h3>The Home Service Club: no age limits, tight caps</h3>
<p>HSC covers items regardless of age, make or model - helpful for older homes - and its Comprehensive plan lists 33 items. But per-item caps are mostly $300-$2,000, and the whole plan has an annual ceiling of about $6,000 (Standard) or $9,000 (Comprehensive). A single HVAC replacement can use up a large share of that. <a href="/reviews/home-service-club">Read our Home Service Club review.</a></p>
<h3>2-10 Home Buyers Warranty: clear published limits</h3>
<p>2-10's help center states $5,000 per covered HVAC system, $2,000 per covered appliance and $50,000 in total per agreement term (older 2-10 materials listed a $25,000 total). Its 2025 sample agreement counts refrigerant at $10 per pound inside the HVAC limit, and unlimited refrigerant is sold as an option. Plan names have changed, so compare by contents rather than names. 2-10 is owned by Frontdoor, the parent of American Home Shield. <a href="/reviews/2-10-home-buyers-warranty">Read our 2-10 review.</a></p>`,
  },
  {
    heading: "Coverage limits: the number that decides your payout",
    body: `<p>Every covered item comes with a limit, and most claim disputes that aren't about pre-existing conditions are about limits. In This Old House's 2026 survey, a cost over the coverage limit was the reason for about 20% of denials, and the publication found caps on about 69% of the plans it reviewed. Limits come in three forms:</p>
<ul>
<li><strong>Per-item limits</strong> - the most paid for one item, such as $2,000 per appliance.</li>
<li><strong>Sub-limits</strong> - smaller caps inside an item: refrigerant per pound, tankless water heaters, geothermal systems, sewage ejector pumps, concrete access, code and permits.</li>
<li><strong>Aggregate limits</strong> - the most paid across all claims in a term, from about $6,000 (HSC Standard) to $50,000 (AHS and 2-10).</li>
</ul>
<h3>Three worked examples</h3>
<p><strong>1. A refrigerator compressor fails; the repair is $1,400.</strong> Under a $500 cap, you pay the service fee plus $900. Under a $2,000 or $3,000 cap, you pay only the service fee.</p>
<p><strong>2. A 15-year-old AC needs replacing; the job costs $8,000.</strong> Under a $3,000 limit, you pay the fee plus $5,000. Under a $5,000 limit, the fee plus $3,000. Under First American's uncapped conventional HVAC coverage, you'd pay the fee plus any excluded items such as code upgrades beyond its Advantage allowance.</p>
<p><strong>3. An air conditioner repair needs 6 pounds of refrigerant at an installed price of $60 a pound ($360).</strong> Under a $10-per-pound sub-limit, the plan pays $60 and you pay $300. Under unlimited refrigerant coverage, the plan pays it all. (Installed refrigerant prices vary widely by region and contractor; this is an illustration, not a quote.)</p>
<p>The lesson: when comparing plans, compare the limits on the items most likely to cost you money - HVAC, the refrigerator and the water heater - before you compare monthly prices. Our <a href="/articles/most-comprehensive-home-warranty">most comprehensive home warranty</a> guide ranks plans on exactly this.</p>`,
  },
];
