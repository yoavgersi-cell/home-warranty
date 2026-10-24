import type { ArticleSection } from "@/lib/config";

// Part 2: money - why costs rose, efficiency rules, tax credit, repair vs replace.
export const part2: ArticleSection[] = [
  {
    heading: "Why AC repair and replacement costs went up",
    body: `<p>Homeowners have seen air conditioning costs climb since the transition began. The causes are well documented in trade press and manufacturers' own statements.</p>
<h3>1. New equipment costs more</h3>
<p>On its first-quarter 2025 earnings call, Carrier's CEO said systems using R-454B run about <strong>10% more</strong> than comparable R-410A systems, and that he expected a total increase of <strong>15-20%</strong> over two years. Lennox said its A2L systems cost "over 10% more." The extra cost reflects redesigned equipment, refrigerant detection systems and other safety components.</p>
<h3>2. Ongoing manufacturer price increases</h3>
<p>Price increases have continued. HVAC trade publication ACHR News tracks announced increases each month. Examples from 2026 include Lennox increases of up to 7% on residential equipment effective February 16, 2026, and Daikin increases of up to 7% on several product lines effective March 2 and again August 3, 2026. Tariffs and raw-material costs have also been cited as factors across the industry.</p>
<h3>3. The 2025 R-454B shortage</h3>
<p>In spring and summer 2025, contractors faced a shortage of R-454B. As reported by ACHR News and Contracting Business, the problem wasn't making the refrigerant so much as getting it into the right cylinders: A2L refrigerants require cylinders with specific pressure-relief valves and left-hand threads, and supplies of those cylinders, along with filling capacity, couldn't keep pace with a sudden jump in demand. Lead times of up to 10 weeks were reported.</p>
<ul>
<li><strong>Honeywell announced a 42% surcharge</strong> on its R-454B (sold as Solstice 454B) in April 2025, citing demand, raw materials and tariffs.</li>
<li>In late April 2025, R-454B was reported at <strong>$650-$700 per 20-pound cylinder</strong> in Chicago, versus about $350 for R-32.</li>
<li>Manufacturers took steps to ease it - Johnson Controls redirected factory refrigerant to aftermarket use - and Chemours, which holds the R-454B patent, expected relief by June 2025.</li>
</ul>
<p>By July 2025, A2L equipment made up 86% of distributor sales, according to HARDI data reported by ACHR News - a sign of how quickly the market shifted.</p>
<h3>4. R-410A: plenty now, tighter later</h3>
<p>For owners of existing systems, the R-410A outlook is mixed. In August 2026, ACHR News reported that US R-410A inventories were "healthy," with ample virgin refrigerant available. But supply is capped under the AIM Act, and the industry expects prices to rise as supply tightens - particularly at the 2029 phasedown step. The Air Conditioning Contractors of America (ACCA) has also warned that delays for other equipment types in the 2026 rule could increase demand for the limited supply of HFCs.</p>
<h3>What it costs homeowners</h3>
<p>There's no authoritative national survey of residential AC prices, and contractor estimates vary widely by region, system size and complexity. Published contractor ranges for a full central AC replacement commonly run from about <strong>$3,000 to $8,500</strong>, with some markets well above that. Installed refrigerant prices quoted by contractors vary even more - from tens of dollars to more than $100 per pound - because they bundle labor, leak testing and markup. Treat any single number you see online, including ours, as a rough guide and get local quotes.</p>
<blockquote><strong>The warranty angle:</strong> Many home warranty contracts set refrigerant limits in dollars per pound - commonly $10 per pound on standard tiers. That figure was written for a different price environment. When installed refrigerant costs several times that, the difference is yours to pay.</blockquote>`,
  },
  {
    heading: "The other rule that affects replacements: DOE efficiency standards (SEER2)",
    body: `<p>Refrigerant rules aren't the only regulation shaping AC replacements. Since <strong>January 1, 2023</strong>, the Department of Energy's efficiency standards have used new test procedures - <strong>SEER2</strong> for cooling efficiency and <strong>HSPF2</strong> for heat pump heating efficiency - with higher regional minimums.</p>
<table>
<thead><tr><th>Equipment</th><th>North</th><th>Southeast</th><th>Southwest</th></tr></thead>
<tbody>
<tr><td>Split central AC (under 45,000 Btu/h)</td><td>13.4 SEER2</td><td>14.3 SEER2</td><td>14.3 SEER2, plus EER2 minimums (11.7, or 9.8 if SEER2 is above 15.2)</td></tr>
<tr><td>Split heat pump</td><td colspan="3">14.3 SEER2 and 7.5 HSPF2 nationally</td></tr>
<tr><td>Packaged heat pump</td><td colspan="3">13.4 SEER2 and 6.7 HSPF2 nationally</td></tr>
</tbody>
</table>
<p>Source: DOE 2023 central air conditioner standards FAQ and ICC summary.</p>
<h3>Why it matters</h3>
<ul>
<li><strong>Any replacement must meet the regional minimum</strong> - including leftover pre-2025 R-410A equipment installed under the 2026 rule.</li>
<li><strong>In the Southeast and Southwest, the AC standard is enforced by installation date,</strong> so non-compliant split ACs couldn't be installed there after January 1, 2023.</li>
<li><strong>Efficiency and refrigerant together drive full-system replacements.</strong> An older system's indoor coil may not be properly matched to a new, higher-efficiency outdoor unit, and manufacturers rate efficiency for specific matched combinations.</li>
</ul>
<h3>How home warranties address efficiency</h3>
<p>Several home warranty contracts reference these standards directly. American Home Shield and 2-10 Home Buyers Warranty state that they cover upgrades needed for compatibility or compliance with "SEER, HSPF, or refrigerant standards" during a covered repair or replacement - within the plan's AC limit. First American has marketed "14 SEER" coverage in its brochures. Home Warranty of America's materials state that it isn't responsible for upgrades caused by equipment incompatibility unless an optional upgrade coverage is purchased. We break down each company's terms in detail below.</p>`,
  },
  {
    heading: "Is there still a federal tax credit for heat pumps and central AC?",
    body: `<p><strong>Not for systems installed in 2026.</strong> The federal Energy Efficient Home Improvement Credit (Section 25C) helped offset the cost of qualifying heat pumps and central air conditioners. The law commonly known as the One Big Beautiful Bill Act (Public Law 119-21, signed July 4, 2025) ended it: according to the IRS, the credit is "not allowed for any property placed in service after December 31, 2025." Under the earlier Inflation Reduction Act, it would have run through 2032.</p>
<ul>
<li><strong>Installed in 2025?</strong> You may still be able to claim the credit on your 2025 tax return using IRS Form 5695, provided the equipment qualified. The IRS requires a qualified manufacturer identification number for eligible items. Check the IRS instructions or ask a tax professional.</li>
<li><strong>Installed in 2026 or later?</strong> No federal 25C credit applies. Some states, utilities and local programs still offer rebates for efficient equipment; check your utility and state energy office.</li>
</ul>
<p>Why this matters for warranty holders: when a home warranty offers cash instead of a replacement, or covers only part of a replacement, the loss of the federal credit means more of the remaining cost falls on you than it would have in 2023-2025.</p>`,
  },
  {
    heading: "Repair or replace? A decision framework for the transition era",
    body: `<p>Whether you're paying yourself or negotiating with a home warranty company, the repair-or-replace decision now has more variables. Here's a practical framework.</p>
<h3>Step 1: Identify what failed</h3>
<table>
<thead><tr><th>Failure</th><th>Typical path</th><th>Transition impact</th></tr></thead>
<tbody>
<tr><td>Capacitor, contactor, fan motor, control board, thermostat</td><td>Repair</td><td>Little or none</td></tr>
<tr><td>Refrigerant leak (accessible)</td><td>Repair leak, recharge</td><td>Refrigerant cost and per-pound warranty limits matter</td></tr>
<tr><td>Evaporator coil</td><td>Replace coil</td><td>An R-410A replacement coil may be available; a new A2L outdoor unit would require a matched coil</td></tr>
<tr><td>Compressor</td><td>Replace compressor or condensing unit</td><td>Older systems often become full replacements; refrigerant compatibility decides the scope</td></tr>
<tr><td>Condensing unit beyond repair</td><td>Replace condenser or full system</td><td>Pre-2025 R-410A condenser if available and matched; otherwise a full A2L system</td></tr>
</tbody>
</table>
<h3>Step 2: Weigh age and condition</h3>
<p>Central AC systems commonly last about 15-20 years with good maintenance, depending on climate and use. A repair on a young system almost always makes sense. On a system near or past that range - especially one with repeated failures or leaks - replacement may be the better long-term value, even if a warranty would pay for a repair.</p>
<h3>Step 3: Consider refrigerant outlook</h3>
<p>If your system uses <strong>R-22</strong>, refrigerant is limited to reclaimed supplies and costly; major repairs rarely make sense. If it uses <strong>R-410A</strong>, repairs remain practical for now, but supply will tighten over time, particularly after 2029.</p>
<h3>Step 4: Compare total costs, including warranty limits</h3>
<p>Get the full cost of each option: parts, labor, refrigerant, matching components, line sets, permits, code work and haul-away. Then subtract what your warranty will actually pay under its caps and per-pound limits. The cheapest option for the warranty company isn't always the best option for you.</p>
<h3>Step 5: Ask about efficiency and operating cost</h3>
<p>A new system that meets current SEER2 minimums may cost less to run, which matters in hot climates with long cooling seasons. EPA guidance on repairing versus replacing suggests weighing efficiency and parts availability alongside upfront cost.</p>
<h3>A rule of thumb</h3>
<p>Many contractors use a simple heuristic: if a repair costs more than about half the price of a new system and the system is in the last third of its expected life, replacement deserves serious consideration. It's a rough guide, not a rule - but it's a useful way to frame conversations with your contractor and warranty company.</p>`,
  },
];
