import type { ArticleSection } from "@/lib/config";

// Part 1: quick answer, why older homes differ (housing-age data), life
// expectancy vs replacement cost, and the four contract terms that decide
// older-home claims. Sources: NAHB analysis of 2024 ACS (Mar 2026); HUD 2023
// American Housing Survey release; EIA RECS 2020; InterNACHI life expectancy
// chart; NAHB/Bank of America life expectancy study (2007); Angi 2026 cost
// guides; company FAQs, plan pages and sample agreements (AHS 2023-2026,
// Choice FAQ/user agreement, Select T&C, First American FAQ/blog, HWA
// 2021-22 forms, 2-10 blog/sample contract). Researched November 2026.
export const part1: ArticleSection[] = [
  {
    heading: "What is the best home warranty for an older home?",
    body: `<div class="qa"><strong>Quick answer</strong>For most older homes, American Home Shield is the strongest choice: it covers systems and appliances regardless of age, doesn't require maintenance records to buy, pays for the parts and upgrades needed to meet current SEER and refrigerant standards when it replaces an air conditioner, and its top tiers add code and permit coverage. Where it's sold, First American is the best pick for older HVAC and boilers, thanks to no dollar limit on conventional HVAC and "Advantage" coverage for code violations, permits and some pre-existing problems. Be cautious with plans that exclude even unknown pre-existing conditions, exclude code work or pay replacements at depreciated value - those are the terms that hurt older homes most.</div>
<p>Almost every home warranty company says it covers older homes, and technically that's true: we found none of the seven companies we track that excludes an item just because it's old. But that's not where older homes get into trouble. Claims on older homes are decided by four other things - how the contract treats problems that may have started before coverage, who pays for code upgrades when an old system is replaced, how replacements are paid, and the specific sub-limits on old-style equipment such as boilers and steam heat.</p>
<p>This guide is built around those four things. It combines current housing data from the Census Bureau and NAHB, life expectancy and cost data, federal rules on the old-home problems that matter (R-22 refrigerant, aluminum wiring, lead service lines, asbestos and lead paint), and the contract terms of the seven companies we track. Where companies' own documents conflict or vary by state - and for older-home terms they often do - we say so.</p>`,
  },
  {
    heading: "Why older homes are different: the numbers",
    body: `<p>"Older home" describes most of America's housing. The typical owner-occupied home is now 42 years old, according to the National Association of Home Builders' analysis of 2024 Census data - up from 31 years in 2005.</p>
<table>
<thead><tr><th>Measure</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Median age of owner-occupied homes</td><td>42 years (2024)</td><td>NAHB analysis of ACS (Mar 2026)</td></tr>
<tr><td>Owner-occupied homes built before 1980</td><td>About 47%</td><td>NAHB / ACS 2024</td></tr>
<tr><td>Owner-occupied homes built before 1970</td><td>About 34%</td><td>NAHB / ACS 2024</td></tr>
<tr><td>Homes built in the last 14 years</td><td>About 13% (down from 18% in 2014)</td><td>NAHB / ACS 2024</td></tr>
<tr><td>Oldest states by median home age</td><td>New York (64), Massachusetts and Rhode Island (59)</td><td>NAHB / ACS 2024</td></tr>
<tr><td>Youngest states</td><td>Nevada (25), Texas (28)</td><td>NAHB / ACS 2024</td></tr>
<tr><td>Households whose main heating equipment is 15+ years old</td><td>About 31%</td><td>EIA Residential Energy Consumption Survey (2020)</td></tr>
<tr><td>Homes with a heating breakdown last winter</td><td>2.7% (vs. 8.3% in 1973)</td><td>HUD, 2023 American Housing Survey</td></tr>
</tbody>
</table>
<p>Two things follow. First, if you own a typical American home, many of its original systems have already been replaced at least once - and the current ones may be well into their own lifespans. Second, older homes carry layers of history: equipment installed to codes that no longer apply, materials that are now regulated, and repairs by previous owners. A home warranty can cover a lot of that, but only if the contract is written for it.</p>`,
  },
  {
    heading: "How long home systems last - and what replacing them costs",
    body: `<p>Life expectancy figures are averages, not deadlines - maintenance, climate and water quality can move them by years. But they're the best way to see which systems in an older home are most likely to fail during a warranty term.</p>
<table>
<thead><tr><th>System</th><th>Typical life expectancy</th><th>Typical replacement cost (2026)</th></tr></thead>
<tbody>
<tr><td>Gas furnace</td><td>15-25 years (InterNACHI); 15-20 (NAHB)</td><td>About $4,800 on average; gas units $3,800-$10,000</td></tr>
<tr><td>Oil furnace</td><td>About 20 years</td><td>About $6,750-$10,000</td></tr>
<tr><td>Boiler (hot water or steam)</td><td>About 21 years for gas boilers (NAHB); up to ~40 (InterNACHI)</td><td>About $5,750 on average ($4,000-$7,500)</td></tr>
<tr><td>Central air conditioner</td><td>7-15 years (InterNACHI); 10-15 (NAHB)</td><td>About $3,900-$7,900 (Angi); This Old House averages ~$8,460</td></tr>
<tr><td>Heat pump</td><td>10-15 years (InterNACHI); ~16 (NAHB)</td><td>About $4,200-$7,600, often more</td></tr>
<tr><td>Tank water heater</td><td>6-12 years</td><td>About $1,350 on average ($880-$1,830)</td></tr>
<tr><td>Tankless water heater</td><td>10-20+ years</td><td>About $2,640 on average ($1,400-$3,900)</td></tr>
<tr><td>Electrical panel</td><td>Decades (InterNACHI ~60 years)</td><td>Panel upgrade commonly quoted at $2,500-$5,000</td></tr>
<tr><td>Copper supply pipes</td><td>About 50 years</td><td>Whole-house repipe about $7,500 on average ($1,500-$15,000)</td></tr>
<tr><td>Cast iron drains</td><td>50-100 years</td><td>Accessible runs about $12.50-$30 per foot; under-slab work far more</td></tr>
<tr><td>Sewer line</td><td>Varies by material</td><td>About $3,320 on average ($1,390-$5,320)</td></tr>
</tbody>
</table>
<p><em>Life expectancy: InterNACHI life expectancy chart and NAHB/Bank of America Study of Life Expectancy of Home Components (2007), both general guidelines. Costs: Angi 2026 cost guides unless noted; This Old House (Sept 2026) for AC; ConsumerAffairs (2026) for boilers; panel upgrade figure from contractor cost guides (lower confidence). Local prices vary widely.</em></p>
<p>Compare the replacement costs with typical home warranty limits - $3,000 per item at Choice, $5,000 for HVAC at American Home Shield and 2-10, about $3,000 per term for HVAC at Select - and the central fact of older-home coverage becomes clear: <strong>a warranty reliably pays for repairs, and pays part or all of a replacement depending on the limit.</strong> For an older home, the HVAC limit is the single most important number in the contract.</p>`,
  },
  {
    heading: "The four contract terms that decide older-home claims",
    body: `<h3>1. Age language</h3>
<p>All seven companies we track say they cover items regardless of age, as long as they're working (and, at some companies, properly maintained) when coverage starts. American Home Shield goes furthest in its marketing - "older items, no matter their age" is one of its listed assurances - and says no inspection or maintenance records are needed to buy. Age matters indirectly, through the next three terms.</p>
<h3>2. Pre-existing conditions: known vs. unknown</h3>
<p>This is the biggest difference for older homes. Every contract excludes problems you knew about. The question is what happens to problems nobody could have known about - a heat exchanger cracking inside a 20-year-old furnace, for example.</p>
<ul>
<li><strong>More lenient:</strong> American Home Shield's sample agreements cover some causes others exclude, including insufficient maintenance and pre-existing mismatched HVAC systems, while excluding breakdowns that existed before the start date (a 2025 California sample also excludes conditions the member knew of or could reasonably have detected). First American's Advantage coverage, included on its Essential and Premium plans, covers certain pre-existing conditions.</li>
<li><strong>Stricter:</strong> Choice's FAQ and user agreement exclude known <em>or unknown</em> pre-existing conditions (an older Choice document covered unknown, undetectable ones - another sign terms change). Select's terms also exclude both, and treat any defect an inspector flagged before a sale as pre-existing.</li>
</ul>
<h3>3. Code upgrades, permits and modifications</h3>
<p>Replacing a 25-year-old furnace or AC often requires work to meet today's code: new venting, a new pad, electrical changes, a new line set, or carpentry to fit a differently sized unit. On an older home these "extras" can add hundreds or thousands of dollars to a covered replacement.</p>
<table>
<thead><tr><th>Company</th><th>Code, permits and modifications</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/first-american">First American</a></td><td>"Advantage" coverage on Essential and Premium covers code violations, permits, crane fees, refrigerant recapture, improper installation and mismatched systems - combined limits of $500 (Essential) and $1,000 (Premium) per First American's own materials; some reviews report $1,500 on Premium</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>ShieldPlatinum: $250 per term for code violations, permits and modifications (other AHS pages list different amounts by plan - confirm in your agreement); all plans cover parts needed to meet SEER and refrigerant standards on HVAC replacement</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>Up to $1,000 on its top real estate tier per its broker page; lower or none on other plans; contracts cover SEER and refrigerant-standard upgrades</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>Excluded - code, permits, haul-away and modifications for mismatched systems aren't covered</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>Excluded; if an item can't be repaired without violating code, Select's terms limit the payout to cash at depreciated value</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Code violations and modifications reported as excluded</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Not confirmed - check the contract</td></tr>
</tbody>
</table>
<h3>4. How replacements are paid</h3>
<p>When a company replaces an item or pays cash instead, the formula matters more in an older home because the item is old. <a href="/articles/select-home-warranty-cost">Select</a>'s terms allow replacement or cash at the item's <strong>depreciated value</strong> - which NerdWallet called unlikely to be enough, and which customer reviews describe in practice as offers of a few hundred dollars toward items costing well over $1,000. Choice pays cash at its own cost, which can be below retail. We found no depreciation clause in American Home Shield's or First American's terms. For an older home, a depreciation-based payout can turn a "covered" replacement into a small check.</p>`,
  },
];
