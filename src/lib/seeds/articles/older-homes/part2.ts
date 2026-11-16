import type { ArticleSection } from "@/lib/config";

// Part 2: our picks for older homes, then old-house systems one by one -
// heating (boilers, steam, oil), cooling (R-22, R-410A, SEER upgrades),
// electrical (knob-and-tube, aluminum wiring, FPE/Zinsco, fuses) and plumbing
// (polybutylene, galvanized, lead service lines, cast iron, sewer). Sources:
// company sample agreements and pages (AHS 2023-2026, First American contract
// PDFs and HVAC-limits blog, 2-10 refrigerant/SEER page and sample contract,
// HWA 2021-22 forms, Select T&C, Choice FAQ); EPA HCFC-22 homeowner guidance
// (2020) and May 26, 2026 Technology Transitions final rule; CPSC Pub. 516
// and 1983 FPE release; EPA 7th DWINSA update (Nov 2025) and LCRI (Oct 2024);
// NFPA electrical fires report; Angi 2026 cost guides.
export const part2: ArticleSection[] = [
  {
    heading: "Our picks: the best home warranties for older homes",
    body: `<p>Our overall rankings (shown above) weigh price, coverage, service and reputation for a typical home. For an older home specifically, the terms in the previous section change the order:</p>
<table>
<thead><tr><th>Company</th><th>Older-home strengths</th><th>Older-home cautions</th><th>Our take</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>Any age, no maintenance records needed to buy; SEER and refrigerant-standard upgrades covered on HVAC replacement; covers rust and corrosion; code/permits on top tier; $5,000 HVAC limit</td><td>Hot-water and steam heat under a lower sub-limit ($1,500 or $2,000 depending on contract version); $10/lb refrigerant except on the top tier; not sold in Alaska or Hawaii</td><td><strong>Best overall for older homes</strong></td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>No dollar limit on conventional HVAC; Advantage coverage for code, permits, mismatched systems and some pre-existing problems; covers boilers, radiators and polybutylene piping; 100% refrigerant on Premium</td><td>Steam/hot-water systems capped at $1,500 in several contract versions; fuel tanks excluded; sold in about 35-37 states</td><td><strong>Best for older HVAC and boilers, where available</strong></td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>Age "doesn't matter" if maintained; SEER and refrigerant-standard upgrades; markets unlimited refrigerant including R-22</td><td>Published HVAC limits differ by source ($5,000 vs. $10,000); code coverage varies by tier</td><td>Strong value alternative</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>No age restrictions; covers rust- and corrosion-related plumbing and electrical failures up to $2,000; up to $5,000 per item</td><td>Lower sub-limits on several items ($1,000 for oil or tankless water heaters and concrete access); window AC excluded</td><td>Good for rust-prone plumbing; check sub-limits</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>Any age if working and maintained; simple $3,000-per-item limit</td><td>Excludes known and unknown pre-existing conditions; no code, permit or modification coverage; cash at Choice's cost</td><td>Fine for a well-maintained older home with recent HVAC</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Covers items regardless of age</td><td>Item caps mostly $300-$2,000 and an annual cap of $6,000-$9,000; code work excluded</td><td>Too limited for a major replacement</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>Low price; any age</td><td>Replacement or cash at depreciated value; rust, corrosion and sediment excluded; known and unknown pre-existing excluded; about $3,000 HVAC per term</td><td>Weakest fit for older systems</td></tr>
</tbody>
</table>
<p><em>Sources: company FAQs, plan pages and sample agreements (2021-2026), NerdWallet, This Old House, U.S. News and CNN Underscored reviews (2025-2026). Terms vary by state and contract version; confirm in the sample contract for your address.</em></p>`,
  },
  {
    heading: "Heating in older homes: boilers, steam, radiators and oil",
    body: `<p>Older homes - especially in the Northeast and Midwest - are far more likely to have boilers, steam or hot-water radiators, or oil heat. Home warranties cover these, but usually under smaller limits than forced-air furnaces:</p>
<table>
<thead><tr><th>Company</th><th>Boilers and hydronic/steam heat</th><th>Oil heat</th></tr></thead>
<tbody>
<tr><td>American Home Shield</td><td>Hot-water and steam circulating heat covered, with a sub-limit that also covers a water heater supplying the system: $1,500 in some sample agreements (including a 2026 Texas sample), $2,000 on AHS's current heating page</td><td>Covered as heating; one AHS page lists fuel storage tanks as covered - verify in your agreement</td></tr>
<tr><td>First American</td><td>Boilers, hydronic systems, radiators and baseboard convectors covered; steam, hot water, glycol and combination units capped at $1,500 in several contract versions</td><td>Oil furnaces covered; fuel storage tanks excluded</td></tr>
<tr><td>Home Warranty of America</td><td>Within its heating limit (check sub-limits)</td><td>Oil-fired water heaters capped at $1,000</td></tr>
<tr><td>Others</td><td>Check the contract - contract wording on steam and hydronic systems is often hard to find</td><td>Fuel tanks generally excluded</td></tr>
</tbody>
</table>
<p>Why this matters: a boiler replacement averages about $5,750 and can run well beyond that. A $1,500 or $2,000 sub-limit covers most boiler repairs - circulator pumps, controls, valves - but only part of a replacement. If your home heats with a boiler, the hydronic sub-limit is a more important number than the headline HVAC limit.</p>`,
  },
  {
    heading: "Cooling in older homes: R-22, R-410A and mismatched systems",
    body: `<p>Air conditioning is where older homes face a regulatory twist. Systems installed before about 2010 typically use R-22 refrigerant. Under EPA rules, production and import of R-22 ended on January 1, 2020; existing systems can keep running, but servicing relies on recovered, reclaimed or stockpiled refrigerant, and EPA has said prices should be expected to rise. Newer systems use R-410A, and since January 1, 2025, new residential AC and heat pump equipment must use lower-impact refrigerants such as R-454B or R-32. (An EPA final rule in May 2026 removed a separate 2026 installation deadline for R-410A equipment made before 2025; our <a href="/articles/r-410a-phase-out-home-warranty">R-410A guide</a> covers the details.)</p>
<p>For a home warranty, that creates three issues on an older AC:</p>
<ol>
<li><strong>Refrigerant cost.</strong> Recharging an R-22 system is expensive, and many contracts cap refrigerant at about $10 per pound. American Home Shield's top tier and First American's Premium plan cover all refrigerant costs; 2-10 markets unlimited refrigerant, including R-22, though its materials footnote some costs.</li>
<li><strong>Replacement compatibility.</strong> You often can't replace just the outdoor unit of an R-22 system with a modern one - the indoor coil and line set may need to change too. American Home Shield's and 2-10's sample agreements cover the parts and work needed to meet current SEER, HSPF and refrigerant standards (including related duct, plenum and electrical work to the disconnect). First American covers mismatched systems and refrigerant recapture through its Advantage coverage.</li>
<li><strong>Window and wall units.</strong> Many older homes rely on them, and they're excluded at American Home Shield, Home Warranty of America and The Home Service Club (First American lists window units only on its top tier).</li>
</ol>
<p>If your central AC is more than 12-15 years old and uses R-22, plan for replacement within a few years - and choose a plan that pays for compatibility upgrades, not just the failed part.</p>`,
  },
  {
    heading: "Electrical in older homes: what warranties will and won't fix",
    body: `<p>Home warranties cover failures in your existing electrical system - a dead breaker, a failed outlet, a broken switch, a faulty panel component. What they don't do is <strong>upgrade or replace an outdated system</strong>. That matters most in homes with these older types of wiring and equipment:</p>
<table>
<thead><tr><th>Older electrical system</th><th>Era and risk</th><th>Home warranty angle</th></tr></thead>
<tbody>
<tr><td>Knob-and-tube wiring</td><td>Common in homes built before about 1950; ungrounded, and its insulation degrades with age. Many insurers decline coverage, require inspection or replacement, or charge more.</td><td>Warranties don't pay to rewire. Some companies exclude it outright (HomeServe, for example, excludes knob-and-tube and aluminum wiring). Whole-house rewiring runs about $12,000-$36,600 (Angi 2026), plus plaster repair.</td></tr>
<tr><td>Aluminum branch wiring</td><td>Homes built or rewired 1965-1973. A survey for the Consumer Product Safety Commission found pre-1972 aluminum-wired homes were 55 times more likely to have at least one outlet reach "fire hazard conditions." CPSC's 1978 estimate put affected homes at 1.5-2 million.</td><td>Not an upgrade a warranty pays for. CPSC recognizes COPALUM crimp connectors as a permanent repair and says pigtailing doesn't fully solve the problem.</td></tr>
<tr><td>Federal Pacific (Stab-Lok) panels</td><td>CPSC closed a two-year investigation in 1983 without a recall; electricians and inspectors widely recommend replacement, and some insurers require it.</td><td>A warranty may repair a failed component but won't pay to replace a working panel because of its brand. Panel upgrades are commonly quoted at $2,500-$5,000.</td></tr>
<tr><td>Zinsco panels</td><td>Widely flagged by inspectors for similar concerns (we found no CPSC action).</td><td>Same as above.</td></tr>
<tr><td>Fuse boxes and 60-100 amp service</td><td>Common in older homes; often too small for modern loads.</td><td>Capacity upgrades are excluded - they're upgrades, not repairs.</td></tr>
</tbody>
</table>
<p>The stakes are real: the National Fire Protection Association reports an average of about 32,620 home fires a year involving electrical distribution and lighting equipment (2015-2019), causing about 430 deaths and $1.5 billion in direct property damage. If an inspection flags any of the systems above, address it directly - a warranty isn't the tool for it. See our <a href="/articles/best-home-warranty-for-electrical-systems">electrical coverage guide</a> for what warranties do cover.</p>`,
  },
  {
    heading: "Plumbing in older homes: pipes, drains and sewer lines",
    body: `<table>
<thead><tr><th>Older plumbing</th><th>What to know</th><th>Home warranty angle</th></tr></thead>
<tbody>
<tr><td>Polybutylene supply pipe</td><td>Installed from 1978 to about mid-1995; prone to failure. The Cox v. Shell class settlement (about $950 million) ended claims around 2009. Estimates of affected homes vary widely.</td><td>First American's basic plan explicitly includes polybutylene piping; some other contracts exclude it. Check before buying.</td></tr>
<tr><td>Galvanized steel supply pipe</td><td>Common before about 1960; corrodes from the inside. Under EPA's 2024 Lead and Copper Rule Improvements, galvanized service lines that are or were downstream of lead lines must be replaced by water systems.</td><td>Leaks are usually covered; rust- and corrosion-related failures are excluded at some companies (Select) and covered up to $2,000 at HWA. AHS advertises rust and corrosion coverage.</td></tr>
<tr><td>Lead service lines</td><td>EPA's November 2025 update estimates about 4 million lead and galvanized-requiring-replacement lines nationwide; utilities must replace lines under their control within 10 years of the rule's 2027 compliance date.</td><td>Service lines outside the home aren't covered by home warranties; contact your water utility about replacement programs.</td></tr>
<tr><td>Cast iron drains</td><td>Typically last 50-100 years; fail from corrosion, cracking and roots.</td><td>Leaks inside the home may be covered; replacement of deteriorated drain lines generally isn't, and under-slab work is often capped or excluded.</td></tr>
<tr><td>Clay or older sewer lines</td><td>Root intrusion and collapse are common.</td><td>Stoppages are often cleared from an existing cleanout (up to about 100-125 feet, depending on the company); roots, collapsed lines and exterior line replacement (about $3,320 on average) are standard exclusions.</td></tr>
</tbody>
</table>
<p><em>Sources: EPA 7th Drinking Water Infrastructure Needs Survey update (Nov 2025) and LCRI fact sheets (Oct 2024); company contracts; Angi 2026 cost guides; reporting on the Cox v. Shell settlement.</em></p>
<p>For plumbing in an older home, two contract terms matter most: <strong>rust and corrosion</strong> (covered, capped or excluded) and <strong>access</strong> (whether opening walls, floors or concrete is covered). Florida law, notably, bars contracts from excluding rust or corrosion unless it contributed to the failure.</p>`,
  },
];
