import type { ArticleSection } from "@/lib/config";

// Part 3: hazardous materials, setup playbook, worth-it math, capital plan,
// energy/tax note, FAQ (headings ending in "?" feed FAQPage schema), bottom
// line and sources. Sources: EPA RRP rule (pre-1978 homes), EPA NESHAP/OSHA
// asbestos framework (general), Forbes on First American asbestos/ductwork
// exclusion, AHS sample contracts (hazardous materials exclusion); One Big
// Beautiful Bill Act (P.L. 119-21) ending 25C after Dec 31, 2025; S&P Global
// (Oct 2026) on IRA home energy rebates; costs from Angi 2026 as in part 1.
export const part3: ArticleSection[] = [
  {
    heading: "Asbestos and lead paint: the hidden cost of repairs in older homes",
    body: `<p>Homes built before about 1980 may contain asbestos in pipe and boiler insulation, duct wrap, vermiculite insulation and flooring, and homes built before 1978 may have lead-based paint. Neither stops a home warranty from covering a repair, but both can add cost that warranties exclude:</p>
<ul>
<li><strong>Asbestos abatement is excluded.</strong> Home warranty contracts generally exclude hazardous or toxic materials, including asbestos (American Home Shield's sample contracts say so explicitly), and Forbes reports First American excludes ductwork where asbestos is present. If a covered furnace sits on asbestos-wrapped ductwork, the furnace can be covered while the abatement isn't.</li>
<li><strong>Lead-safe work practices apply.</strong> Under EPA's Renovation, Repair and Painting rule, paid contractors disturbing paint in pre-1978 homes must be certified and follow lead-safe practices, which can raise the cost of work that opens walls or trim.</li>
</ul>
<p>If you own a pre-1980 home, it's worth knowing where these materials are before a system fails - an inspection or an asbestos survey answers the question once.</p>`,
  },
  {
    heading: "How to set up a home warranty on an older home: 8 steps",
    body: `<ol>
<li><strong>Inventory your systems and their ages.</strong> Note the furnace or boiler, AC, water heater, panel and plumbing type. Data plates usually show manufacture dates.</li>
<li><strong>Fix known problems first.</strong> Anything already failing will be excluded as pre-existing. Repair it, then buy coverage.</li>
<li><strong>Get an HVAC tune-up before coverage starts</strong> - and keep the invoice. It documents that the system worked and was maintained, the two things older-home claims are most often denied over.</li>
<li><strong>Photograph equipment and keep your inspection report.</strong> Dated evidence of working condition protects you against pre-existing-condition denials.</li>
<li><strong>Choose the plan for your worst-case system,</strong> not the cheapest headline price: an HVAC limit that covers a replacement, hydronic sub-limits if you have a boiler, and code and permit coverage.</li>
<li><strong>Read the four terms</strong> - age language, pre-existing conditions, code and permits, and how replacements are paid - in the sample contract for your state.</li>
<li><strong>Add only the add-ons you need</strong> (well pump, septic, second refrigerator).</li>
<li><strong>Keep maintenance going:</strong> filters, annual HVAC service, water heater flushing, dryer vent cleaning. Missing maintenance is a leading denial reason, and in an older home the burden of proof falls on you.</li>
</ol>`,
  },
  {
    heading: "Is a home warranty worth it for an older home? A worked example",
    body: `<p>Take a 1978 house with an 18-year-old gas furnace, a 14-year-old R-22 central AC and an 11-year-old tank water heater - all working, all past or near their typical lifespans. Here's how one year could look:</p>
<table>
<thead><tr><th>Event</th><th>Typical cost</th><th>With a strong plan (e.g., $5,000 HVAC limit, SEER upgrades covered, $100 fee)</th><th>With a weak plan (low caps, depreciated payouts, no code coverage)</th><th>No plan</th></tr></thead>
<tbody>
<tr><td>Water heater replaced</td><td>~$1,350</td><td>$100 fee (plus any uncovered code items)</td><td>$100 fee plus the gap above a ~$500 cap: ~$850+</td><td>~$1,350</td></tr>
<tr><td>AC replaced (R-22 system, needs matching coil)</td><td>~$6,000-$8,500</td><td>$100 fee plus anything above $5,000: ~$1,100-$3,600</td><td>Cash at depreciated value or a ~$3,000 cap; you pay most of it: ~$3,000-$8,000</td><td>~$6,000-$8,500</td></tr>
<tr><td>Annual premium</td><td>-</td><td>~$600-$1,000</td><td>~$450-$600</td><td>$0</td></tr>
<tr><td><strong>Year total</strong></td><td></td><td><strong>~$1,800-$4,700</strong></td><td><strong>~$4,400-$9,550</strong></td><td><strong>~$7,350-$9,850</strong></td></tr>
</tbody>
</table>
<p><em>Illustration only, using Angi 2026 replacement cost ranges and plan terms described above. Actual outcomes depend on your contract, local prices and the cause of each failure.</em></p>
<p>The example shows two things. First, in an older home with several aging systems, a warranty with strong limits can genuinely pay for itself in a bad year. Second, the gap between a strong and a weak plan is bigger than the gap between a weak plan and no plan - which is why, for older homes, the contract terms matter more than the price. In a year when nothing fails, of course, the premium is the whole cost. Our <a href="/articles/is-a-home-warranty-worth-it">is a home warranty worth it</a> guide runs the full break-even math.</p>`,
  },
  {
    heading: "What to budget for outside the warranty",
    body: `<p>Some of the biggest costs in an older home are upgrades and capital replacements that no home warranty covers. Plan for them separately:</p>
<table>
<thead><tr><th>Project</th><th>Typical cost</th><th>Why a warranty won't cover it</th></tr></thead>
<tbody>
<tr><td>Whole-house rewiring (knob-and-tube or aluminum)</td><td>~$12,000-$36,600</td><td>Upgrade of an outdated system</td></tr>
<tr><td>Electrical panel or service upgrade</td><td>~$2,500-$5,000</td><td>Capacity upgrade</td></tr>
<tr><td>Whole-house repipe</td><td>~$1,500-$15,000 (avg ~$7,500)</td><td>Replacement of deteriorated pipe</td></tr>
<tr><td>Sewer line replacement</td><td>~$1,390-$5,320 (avg ~$3,320)</td><td>Exterior lines, roots and collapse excluded</td></tr>
<tr><td>Roof replacement</td><td>Varies widely</td><td>Structural; at most a limited roof-leak add-on</td></tr>
<tr><td>Asbestos or lead abatement</td><td>Varies</td><td>Hazardous materials excluded</td></tr>
</tbody>
</table>
<p><em>Costs: Angi 2026 cost guides; panel upgrade from contractor cost guides (lower confidence).</em></p>
<h3>A note on energy upgrades in 2026</h3>
<p>If you were counting on the federal tax credit to help replace old HVAC with a heat pump, note that it's gone: the 2025 federal budget law (P.L. 119-21) ended the Energy Efficient Home Improvement Credit (25C) for equipment placed in service after December 31, 2025. State rebate programs funded by the Inflation Reduction Act remain patchy - S&P Global reported in October 2026 that only a few states had approval for revised programs - so check your utility and state energy office for current incentives.</p>`,
  },
  {
    heading: "Do home warranties cover old homes?",
    body: `<p>Yes. All seven companies we track say they cover systems and appliances regardless of age, as long as they're working - and at some companies, properly maintained - when coverage starts. Older homes run into trouble through other terms: pre-existing condition exclusions, code and permit exclusions, sub-limits on older equipment such as boilers, and payouts based on depreciated value.</p>`,
  },
  {
    heading: "Is there an age limit on home warranty coverage?",
    body: `<p>Not at the major US companies we track. American Home Shield, Choice, Select, First American, Home Warranty of America, The Home Service Club and 2-10 all say age alone doesn't disqualify an item. Some pay less for older items in practice - Select's terms allow replacement or cash at depreciated value.</p>`,
  },
  {
    heading: "Will a home warranty replace an old furnace or boiler?",
    body: `<p>Yes, if the failure is covered and can't be repaired - up to the plan's limit. Forced-air furnaces fall under the main HVAC limit (about $3,000 at Choice and Select, $5,000 at American Home Shield, no dollar limit for conventional systems at First American). Boilers and steam or hot-water systems often have lower sub-limits, such as $1,500 or $2,000, and code-required upgrades may be excluded unless your plan covers them.</p>`,
  },
  {
    heading: "Does a home warranty cover an R-22 air conditioner?",
    body: `<p>Generally yes - the system is covered like any other AC. The catches are refrigerant cost (often capped at about $10 per pound, which covers little of R-22's price) and replacement compatibility. American Home Shield and 2-10 cover the parts needed to meet current SEER and refrigerant standards when replacing a system, and American Home Shield's top tier and First American Premium cover all refrigerant costs.</p>`,
  },
  {
    heading: "Does a home warranty cover knob-and-tube or aluminum wiring?",
    body: `<p>A warranty may repair a failed component in your existing electrical system, but it won't pay to rewire or upgrade outdated wiring, and some companies exclude knob-and-tube and aluminum wiring outright. If your home has either, have a licensed electrician evaluate it - it can also affect your homeowners insurance.</p>`,
  },
  {
    heading: "Does a home warranty cover polybutylene pipes?",
    body: `<p>It depends on the company. First American's basic plan explicitly includes polybutylene piping, while some other contracts exclude it. Even where it's covered, a warranty pays to repair leaks, not to repipe the house.</p>`,
  },
  {
    heading: "What is the best home warranty for a 100-year-old house?",
    body: `<p>Look for a plan that covers items regardless of age, covers boilers and steam or hot-water heat at a meaningful sub-limit, includes code and permit coverage, doesn't pay at depreciated value, and covers rust and corrosion. American Home Shield's top tier and First American's Premium plan (where sold) come closest. Budget separately for rewiring, repiping and sewer work, which no warranty covers.</p>`,
  },
  {
    heading: "The bottom line",
    body: `<p>Older homes are where home warranties can deliver the most value - and where the wrong contract disappoints the most. Every major company will cover a 40- or 80-year-old house. The difference is in the fine print: whether unknown pre-existing problems are covered, whether code upgrades and refrigerant are paid, how boilers and steam heat are limited, and whether a replacement is paid at full value or depreciated value.</p>
<p>For most older homes, <a href="/reviews/american-home-shield">American Home Shield</a> offers the best balance of age-friendly terms and national availability, and <a href="/reviews/first-american">First American</a> is the strongest choice for older HVAC and boilers where it's sold. Whichever you choose, fix known problems first, document working condition, keep up maintenance - and budget separately for the rewiring, repiping and sewer work no warranty will cover.</p>
<p><strong>Related guides:</strong> <a href="/articles/what-does-a-home-warranty-cover">what a home warranty covers</a>, <a href="/articles/home-warranty-claim-denied">why claims get denied</a>, <a href="/articles/most-comprehensive-home-warranty">the most comprehensive home warranty</a> and our <a href="/articles/how-much-does-a-home-warranty-cost">cost guide</a>.</p>`,
  },
  {
    heading: "Sources and methodology",
    body: `<p>We compared the published terms of the seven home warranty companies we track for the issues that matter most in older homes, using company FAQs, plan pages and sample agreements, cross-checked against 2025-2026 independent reviews. Contract versions differ by state and year; where companies' own documents conflict (for example, American Home Shield's hydronic sub-limit and code coverage amounts, or First American's Advantage limits), we say so and favor the company's own current materials.</p>
<p><strong>Company sources:</strong> American Home Shield FAQ, plan and heating pages and sample plan agreements (2023-2026, including Arizona, direct-to-consumer and Texas samples); Choice Home Warranty FAQ and user agreement; Select Home Warranty terms and conditions and blog; First American Home Warranty FAQ, HVAC coverage pages, coverage-limits blog and contract documents; Home Warranty of America FAQ and 2021-2022 contract forms; The Home Service Club plan materials; 2-10 Home Buyers Warranty blog, refrigerant and SEER page, broker page and sample contract.</p>
<p><strong>Independent reviews:</strong> NerdWallet, This Old House, U.S. News, Forbes, CNN Underscored and ConsumerAffairs (2025-2026).</p>
<p><strong>Data and regulation:</strong> National Association of Home Builders analyses of the 2024 American Community Survey (March 2026); HUD release on the 2023 American Housing Survey; U.S. Energy Information Administration Residential Energy Consumption Survey (2020); InterNACHI life expectancy chart; NAHB/Bank of America Study of Life Expectancy of Home Components (2007); EPA guidance on HCFC-22 (R-22) and the Technology Transitions final rule (May 26, 2026); Consumer Product Safety Commission Publication 516 (aluminum wiring) and 1983 Federal Pacific Electric release; EPA 7th Drinking Water Infrastructure Needs Survey update (November 2025) and Lead and Copper Rule Improvements (October 2024); EPA Renovation, Repair and Painting rule; National Fire Protection Association, Home Electrical Fires (2015-2019 data); Florida Statutes s. 634.346; P.L. 119-21 (2025); S&P Global Market Intelligence (October 2026).</p>
<p><strong>Costs:</strong> Angi 2026 cost guides (furnace, AC, heat pump, water heaters, rewiring, repiping, sewer and cast iron), This Old House (September 2026), ConsumerAffairs (2026, boilers) and contractor cost guides (panel upgrades).</p>
<p>This guide is general information, not electrical, plumbing, legal or insurance advice. We may earn a commission from some links on this site, which never changes the facts we report. See our <a href="/editorial-policy">editorial policy</a>.</p>`,
  },
];
