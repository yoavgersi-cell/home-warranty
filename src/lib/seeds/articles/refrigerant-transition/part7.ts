import type { ArticleSection } from "@/lib/config";

// Part 7: contract-reading walkthrough and a side-by-side illustration of the
// same failure under different published terms. Rendered after part 3.
export const part7: ArticleSection[] = [
  {
    heading: "How to read the HVAC and refrigerant sections of your contract",
    body: `<p>Sample contracts can run dozens of pages, but the parts that decide an AC claim are usually in four places. Here's how to find and interpret them in 15 minutes.</p>
<h3>1. The air conditioning (or "cooling") covered-items section</h3>
<p>This lists covered components - typically the condenser and compressor, evaporator coil, expansion valves, air handler or blower, thermostat and drain pans - and the excluded ones, which often include line sets, condensate pumps, window units, and certain system types. Note any capacity limit (Select, for example, covers systems up to 5 tons).</p>
<h3>2. The limits of liability table</h3>
<p>Usually near the end. Find the AC limit, any lower limits for your system type, the refrigerant limit, access limits, permit and modification limits, and any aggregate limit across the contract.</p>
<h3>3. The general exclusions and conditions</h3>
<p>Look for pre-existing conditions, maintenance, improper installation, mismatched systems, code and permit language, upgrade language, and any clause about government regulations preventing repair or replacement.</p>
<h3>4. The replacement and cash-in-lieu terms</h3>
<p>Find the promise about replacement equipment ("similar features, capacity and efficiency," adjusted for current standards where stated), and the method for calculating cash payments.</p>
<h3>Phrases that matter for transition-era AC claims</h3>
<table>
<thead><tr><th>Contract phrase</th><th>What it usually means for you</th></tr></thead>
<tbody>
<tr><td>"$10 per pound refrigerant limit"</td><td>The company pays up to $10 for each pound of refrigerant; you pay any amount above that</td></tr>
<tr><td>"We will cover all costs of refrigerant"</td><td>No per-pound limit - but check whether a term limit appears elsewhere</td></tr>
<tr><td>"Upgrades to maintain compatibility and/or compliance with SEER, HSPF, or refrigerant standards"</td><td>Matching components or upgrades required by current standards are covered, typically within the AC limit</td></tr>
<tr><td>"Not responsible for upgrades caused by incompatibility"</td><td>You may pay for matching components such as a new indoor coil</td></tr>
<tr><td>"In the event government regulations prevent us from repairing or replacing"</td><td>A special, often much lower, limit may apply</td></tr>
<tr><td>"Recapture, reclaim and/or dispose of refrigerant"</td><td>Refrigerant recovery costs are covered (if listed as covered) or excluded (if listed as an exclusion)</td></tr>
<tr><td>"Interconnecting refrigerant lines/line sets" (excluded)</td><td>You pay to replace line sets if a new system requires them</td></tr>
<tr><td>"Cash in lieu ... our actual cost, which may be less than retail"</td><td>Cash offers reflect the company's cost, not your retail quote</td></tr>
<tr><td>"Reasonable estimate of retail cost in your area"</td><td>Cash offers should approximate local retail pricing - useful leverage if an offer seems low</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "Side by side: the same AC failure under different plans",
    body: `<p>To make the differences concrete, here's how the published terms we found would apply to one hypothetical claim. <strong>This is an illustration, not a prediction of any claim outcome</strong> - companies apply their own judgment, and terms vary by state and contract version.</p>
<p><strong>The scenario:</strong> A 13-year-old R-410A split system's compressor fails. No matching R-410A condenser is available, so the contractor recommends a new A2L system: outdoor unit, matched indoor coil, new line set and a permit. Assume the total retail cost is around $9,000 and the new system's refrigerant charge is included in the equipment and installation.</p>
<table>
<thead><tr><th>Plan (published terms)</th><th>Key terms that apply</th><th>Likely gap for the homeowner</th></tr></thead>
<tbody>
<tr><td>AHS ShieldGold</td><td>$5,000 AC limit; upgrades for SEER/refrigerant standards covered within the limit; no permits/modifications benefit on this tier; cash option based on estimated local retail</td><td>Anything above the $5,000 limit, plus permit and modification costs</td></tr>
<tr><td>AHS ShieldPlatinum</td><td>$5,000 AC limit; upgrades covered within the limit; permits up to $250 and modifications up to $250 per term</td><td>Anything above the limit, less the small permit and modification benefits</td></tr>
<tr><td>2-10 (2025 sample contract)</td><td>$5,000 AC limit; upgrades for SEER/refrigerant standards covered; refrigerant limit inside the AC limit</td><td>Anything above the $5,000 limit and any excluded items in your contract version</td></tr>
<tr><td>First American Premium</td><td>Refrigerant covered 100%; brochures advertise "14 SEER" coverage; recovery listed as excluded; cash based on negotiated rates</td><td>Depends on the AC limit and upgrade terms in your state's contract; check both</td></tr>
<tr><td>Home Warranty of America</td><td>$5,000 per item; upgrades for incompatibility excluded without optional coverage; $1,000 aggregate if regulations prevent repair or replacement</td><td>Potentially large if the company treats matching components as excluded upgrades or applies the regulation clause</td></tr>
<tr><td>Choice</td><td>Reported $3,000 cap; refrigerant recharging and recovery covered; no specific upgrade language found; cash at company cost</td><td>Anything above the cap, plus costs for components treated as upgrades</td></tr>
<tr><td>Select</td><td>Low caps (about $3,000 per term for HVAC reported); refrigerant excluded without add-on; cash capped at depreciated value</td><td>Large - most of a full replacement</td></tr>
<tr><td>The Home Service Club</td><td>$2,000 per 12 months for heating and AC; line sets and recovery excluded</td><td>Large - most of a full replacement</td></tr>
</tbody>
</table>
<h3>What the comparison shows</h3>
<ul>
<li><strong>The AC limit is the ceiling.</strong> Even the plans with the best upgrade language cap total payouts at their AC limit, so a full A2L conversion can exceed it.</li>
<li><strong>Upgrade language decides whether matching components count.</strong> Plans that explicitly cover SEER and refrigerant-standard upgrades are better positioned for conversions.</li>
<li><strong>Low-cap plans are built for repairs, not replacements.</strong> If your system is old, the cheapest plan may cover little of the most likely big expense.</li>
</ul>
<p class="cta-row"><a href="/american-home-shield-vs-choice-home-warranty">→ American Home Shield vs Choice</a></p>
<p class="cta-row"><a href="/american-home-shield-vs-select-home-warranty">→ American Home Shield vs Select</a></p>`,
  },
];
