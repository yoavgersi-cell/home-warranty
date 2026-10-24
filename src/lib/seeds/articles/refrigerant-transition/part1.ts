import type { ArticleSection } from "@/lib/config";

// Part 1: what changed - AIM Act, EPA rule timeline (incl. the 2026 removal of
// the R-410A installation deadline), refrigerants, A2L safety, servicing rules.
// Sources are cited inline and listed in the final section (part 4).
export const part1: ArticleSection[] = [
  {
    heading: "The short version: what changed and why it matters for your home warranty",
    body: `<div class="qa"><strong>Quick answer</strong>Since <strong>January 1, 2025</strong>, new home air conditioners and heat pumps made or imported in the US can't use refrigerants with a global warming potential (GWP) of 700 or more - which rules out <strong>R-410A</strong>, the refrigerant in most systems installed over the past 15 years. New systems use <strong>R-454B</strong> or <strong>R-32</strong> instead. Existing R-410A systems can still be repaired and recharged indefinitely, and in a rule that took effect <strong>July 27, 2026</strong>, the EPA removed the deadline for installing new systems built from R-410A components made before 2025. For home warranty holders, the transition matters because the new refrigerants can't be mixed with the old ones, so a failed outdoor unit can turn into a full-system replacement - and most home warranty contracts cap refrigerant at around <strong>$10 per pound</strong>, cover upgrades only within the AC limit, and pay cash at their own cost rather than retail.</div>
<p>The change to air conditioning refrigerants is the biggest shift in residential HVAC in more than a decade, and it lands directly on the most expensive claims home warranty companies handle. If you have a home warranty - or are deciding whether to buy one - because you're worried about your air conditioner or heat pump, this guide explains exactly what changed, what it costs, and how each major home warranty company's contract treats it.</p>
<p>Here's what you'll learn:</p>
<ul>
<li><strong>The regulations, accurately and up to date</strong> - including the May 2026 EPA rule that many articles and contractors still haven't caught up with.</li>
<li><strong>Whether your current system can still be repaired</strong> (in almost all cases, yes) and when replacement becomes unavoidable.</li>
<li><strong>Why costs went up</strong> - the 2025 R-454B shortage, manufacturer price increases and what's next for R-410A supply.</li>
<li><strong>The five contract clauses that decide how much your home warranty pays</strong> for an AC claim in the transition era.</li>
<li><strong>A company-by-company comparison</strong> of refrigerant limits, upgrade coverage, refrigerant recovery and cash-in-lieu terms at American Home Shield, Choice, Select, First American, Home Warranty of America, The Home Service Club and 2-10.</li>
<li><strong>Worked examples, a repair-or-replace framework, and step-by-step claim and appeal advice.</strong></li>
</ul>
<p>Everything here is drawn from primary sources wherever possible - the Federal Register, EPA and DOE guidance, the IRS, manufacturers' statements, and the companies' own sample contracts and coverage pages - and checked in October 2026. Where sources conflict or we couldn't confirm something, we say so. Contract terms vary by state and plan year, so always confirm details in your own contract.</p>`,
  },
  {
    heading: "What is happening to air conditioner refrigerant?",
    body: `<p>Air conditioners and heat pumps move heat using a refrigerant that circulates in a sealed loop between the indoor coil and the outdoor unit. For most systems installed in the US since about 2010, that refrigerant is <strong>R-410A</strong>, a hydrofluorocarbon (HFC). HFCs don't damage the ozone layer - that was the problem with the older refrigerant, R-22 - but they are potent greenhouse gases. R-410A has a global warming potential (GWP) of about 2,088, meaning a pound released traps roughly 2,088 times as much heat as a pound of carbon dioxide over 100 years.</p>
<h3>The law behind the change: the AIM Act</h3>
<p>In December 2020, Congress passed the <strong>American Innovation and Manufacturing (AIM) Act</strong>, which directs the EPA to phase down the production and import of HFCs by 85% by 2036, measured against a 2011-2013 baseline. The phasedown happens in steps:</p>
<table>
<thead><tr><th>Period</th><th>Reduction from baseline</th><th>Allowed HFC supply</th></tr></thead>
<tbody>
<tr><td>2020-2023</td><td>10%</td><td>90% of baseline</td></tr>
<tr><td>2024-2028</td><td>40%</td><td>60% of baseline</td></tr>
<tr><td>2029-2033</td><td>70%</td><td>30% of baseline</td></tr>
<tr><td>2034-2035</td><td>80%</td><td>20% of baseline</td></tr>
<tr><td>2036 onward</td><td>85%</td><td>15% of baseline</td></tr>
</tbody>
</table>
<p>Source: Congressional Research Service and EPA allocation fact sheets. The US is currently in the 40% step; the next major cut, to 30% of baseline, arrives in <strong>2029</strong>.</p>
<p>The AIM Act gives the EPA two main tools. The first is the <strong>allowance system</strong>, which caps how much HFC can be produced and imported each year - that's what limits the supply of R-410A over time. The second is the <strong>Technology Transitions program</strong>, which restricts which refrigerants can be used in specific types of <em>new</em> equipment. The second tool is what changed the air conditioners you can buy.</p>
<h3>What the phasedown does - and doesn't - do</h3>
<ul>
<li>It <strong>limits new supply</strong> of HFC refrigerants such as R-410A, which tends to push prices up as the steps tighten.</li>
<li>It <strong>restricts the refrigerants allowed in new equipment</strong> through the Technology Transitions rule.</li>
<li>It does <strong>not</strong> require anyone to replace a working system, and it does <strong>not</strong> ban repairing or recharging existing R-410A equipment.</li>
</ul>
<h3>Haven't we been here before? The R-22 precedent</h3>
<p>Yes. R-22 (sometimes called by the brand name Freon) was phased out under earlier rules because it damages the ozone layer. On <strong>January 1, 2020</strong>, all production and import of virgin R-22 was banned in the US. Existing R-22 systems can still be serviced with recovered, recycled or reclaimed R-22 "for as long as necessary," according to the EPA - but as supplies shrank, recharges became very expensive and many owners chose replacement. The R-410A transition differs in an important way: the phasedown is gradual, and R-410A remains in production under the allowance caps. But the long-term direction is the same, and the R-22 experience is a useful guide to what owners of aging R-410A systems may eventually face.</p>`,
  },
  {
    heading: "The EPA rule timeline: from the 2025 cutoff to the 2026 reversal",
    body: `<p>The rules for new air conditioners have changed several times since 2023, and many websites, sales pitches and even contractors still describe an outdated version. Here is the full timeline, from the Federal Register and EPA.</p>
<table>
<thead><tr><th>Date</th><th>What happened</th></tr></thead>
<tbody>
<tr><td>Oct 24, 2023</td><td>EPA finalizes the <strong>Technology Transitions rule</strong>: new residential and light-commercial AC and heat pump systems may not use refrigerants with a GWP of 700 or more.</td></tr>
<tr><td>Dec 26, 2023</td><td>An <strong>interim final rule</strong> allows one extra year - until January 1, 2026 - solely to <em>install</em> new systems built from components manufactured or imported before January 1, 2025.</td></tr>
<tr><td><strong>Jan 1, 2025</strong></td><td>Manufacture and import of new residential split systems using R-410A ends. New systems use lower-GWP refrigerants such as R-454B and R-32.</td></tr>
<tr><td>Oct 3, 2025</td><td>EPA proposes removing the January 1, 2026 installation deadline.</td></tr>
<tr><td>Dec 2025</td><td>EPA announces it will deprioritize federal enforcement of the January 1, 2026 installation deadline while it finalizes the change (states could still enforce their own rules).</td></tr>
<tr><td><strong>May 26, 2026</strong></td><td>EPA publishes a <strong>final rule</strong> (91 FR 31284) removing the installation deadline for residential and light-commercial systems built from specified components made or imported before January 1, 2025.</td></tr>
<tr><td><strong>Jul 27, 2026</strong></td><td>The final rule takes effect.</td></tr>
<tr><td>Jul 2026</td><td>Eighteen states, the District of Columbia and New York City petition the D.C. Circuit to review the rule; industry groups file separate petitions on other parts of it.</td></tr>
</tbody>
</table>
<h3>What the 2026 rule means in plain English</h3>
<ul>
<li><strong>The 2025 manufacturing cutoff still stands.</strong> No new R-410A residential split systems have been manufactured or imported since January 1, 2025, and the 700 GWP limit for new systems is unchanged.</li>
<li><strong>Leftover R-410A equipment can be installed.</strong> Systems built entirely from R-410A components made or imported before 2025 - condensing units, compressors, evaporator coils - can now be installed with no deadline, as long as that inventory lasts.</li>
<li><strong>Repairs were never restricted.</strong> The rule has always allowed servicing existing systems.</li>
<li><strong>It isn't the last word.</strong> The rule is being challenged in court, and individual states may have their own rules. New York, for example, is reported by industry distributors to keep its own state-level restrictions. If you're in a state with its own HFC rules, check with a licensed local contractor.</li>
</ul>
<blockquote><strong>Why this matters for warranty claims:</strong> The 2026 change means a home warranty company - or your contractor - may still be able to source a pre-2025 R-410A condenser or matched system to replace a failed one, avoiding a full conversion to a new refrigerant. Whether that's possible depends on inventory, which shrinks over time, and on matching the rest of your system.</blockquote>`,
  },
  {
    heading: "R-410A vs R-454B vs R-32: what's the difference?",
    body: `<p>The two refrigerants replacing R-410A in new US residential systems are <strong>R-454B</strong> and <strong>R-32</strong>. Both meet the EPA's GWP limit of 700, and both are classified as <strong>A2L</strong> under ASHRAE Standard 34 - lower toxicity and lower ("mild") flammability.</p>
<table>
<thead><tr><th></th><th>R-410A</th><th>R-454B</th><th>R-32</th></tr></thead>
<tbody>
<tr><td>Global warming potential (approx.)</td><td>2,088</td><td>466</td><td>675</td></tr>
<tr><td>Safety class</td><td>A1 (non-flammable)</td><td>A2L (mildly flammable)</td><td>A2L (mildly flammable)</td></tr>
<tr><td>Status in new residential systems</td><td>Not allowed in new systems made or imported since Jan 1, 2025</td><td>Allowed</td><td>Allowed</td></tr>
<tr><td>Composition</td><td>Blend of R-32 and R-125</td><td>Blend: about 69% R-32 and 31% R-1234yf</td><td>Single compound</td></tr>
<tr><td>Brands using it (examples)</td><td>Most systems installed ~2010-2024</td><td>Carrier ("Puron Advance"), Trane, Lennox, Rheem, Johnson Controls</td><td>Daikin, Goodman</td></tr>
<tr><td>Can existing systems still be serviced?</td><td>Yes, indefinitely</td><td>Yes</td><td>Yes</td></tr>
</tbody>
</table>
<h3>They are not interchangeable</h3>
<p>This is the single most important technical fact for homeowners and warranty holders:</p>
<ul>
<li><strong>You can't put R-454B or R-32 into an R-410A system.</strong> They're not drop-in replacements. One manufacturer's installation instructions state plainly that "R-410A systems SHOULD NOT be retrofitted with R-454B," noting that an R-410A coil "has not been evaluated for use with R-454B and may lack a refrigerant detection system."</li>
<li><strong>You can't mix indoor and outdoor units across refrigerant classes.</strong> Trane explains that safety standards prohibit dual-rating equipment for different refrigerant safety classes, so an A2L outdoor unit needs a matched A2L indoor coil or air handler.</li>
<li><strong>Line sets</strong> (the copper refrigerant lines between the units) can sometimes be reused after cleaning, purging and inspection, depending on the manufacturer's instructions - but not always.</li>
</ul>
<p>In practice, that means when the outdoor unit of an R-410A system fails and can't be repaired, the replacement path is either a matching R-410A condenser from pre-2025 inventory, or a <strong>new matched A2L system</strong> - outdoor unit, indoor coil or air handler, and often new line sets and safety components. That second path costs much more, and it's where home warranty contracts are tested.</p>`,
  },
  {
    heading: "A2L safety: leak detection, new standards and building codes",
    body: `<p>Because R-454B and R-32 are mildly flammable, new systems using them come with new safety requirements.</p>
<h3>UL 60335-2-40</h3>
<p>Since January 1, 2024, <strong>UL 60335-2-40</strong> has been the main North American safety standard for heat pumps and air conditioners, replacing UL 1995. Equipment using A2L refrigerants must be certified to it. Among its key provisions: many ducted systems with larger refrigerant charges must include a <strong>refrigerant detection system</strong> - a leak sensor that, if it detects refrigerant, triggers mitigation such as running the indoor fan to dilute the leak. The exact threshold depends on the refrigerant charge and room size.</p>
<h3>Building codes</h3>
<p>The <strong>2024 International Mechanical Code</strong>, International Building Code and International Fire Code permit A2L refrigerants and reference UL 60335-2-40. But codes are adopted state by state and city by city, and as HVAC trade press noted in 2025, the 2024 codes "have not yet been widely adopted." Texas, for example, adopted the 2024 International Mechanical and Residential Codes effective September 1, 2026. Your contractor and local building department determine what applies to your home.</p>
<h3>What this means for you</h3>
<ul>
<li>A new A2L system may include extra components - sensors, mitigation controls and sometimes specific installation requirements - that add cost.</li>
<li>Permits and inspections may be required for replacements, and code requirements may trigger additional work.</li>
<li>Those code-related costs are precisely the kind of expense many home warranty contracts limit or exclude unless your plan includes permits and code coverage.</li>
</ul>`,
  },
  {
    heading: "Can my R-410A air conditioner still be repaired?",
    body: `<p><strong>Yes.</strong> The EPA is explicit: "The 2023 Technology Transitions Rule does not limit the use of any existing product or system." You can keep using, repairing and recharging an R-410A system for as long as it lasts. There is no deadline for servicing.</p>
<h3>What repairs are allowed</h3>
<p>According to the EPA's frequently asked questions, "A homeowner can replace a faulty component (e.g., condensing unit, indoor coil…) with a similar R-410A component." Service parts manufactured after 2025 must be labeled "for servicing existing equipment only." Refrigerant leaks can be repaired and the system recharged with R-410A, including reclaimed refrigerant.</p>
<h3>When the rules kick in</h3>
<p>Replacing the <strong>entire system</strong> - outdoor and indoor units together - with new equipment triggers the GWP limit for new systems. Under the 2026 rule, a complete system built from R-410A components made or imported before 2025 can still be installed; otherwise, a full replacement means an A2L system.</p>
<h3>The practical constraints</h3>
<ul>
<li><strong>Parts availability:</strong> R-410A components remain available, but production of new R-410A condensing units has ended, so availability of specific replacement condensers depends on remaining inventory.</li>
<li><strong>Refrigerant supply and price:</strong> R-410A inventories were described as healthy in mid-2026, but supply is capped and the next phasedown step in 2029 is expected to tighten it.</li>
<li><strong>Efficiency rules:</strong> any replacement equipment must still meet the Department of Energy's regional efficiency minimums (covered below).</li>
</ul>
<p>For home warranty holders, this is good news: most AC claims are repairs - capacitors, contactors, fan motors, leaks, coils - and those remain straightforward under the rules. The transition mainly bites when a compressor or condensing unit fails on an older system and replacement is on the table.</p>`,
  },
];
