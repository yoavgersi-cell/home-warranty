import type { ArticleSection } from "@/lib/config";

// Part 6: context and planning - history, behind-the-scenes claim pricing,
// regional differences, key dates, guidance by system age, paying the gap.
// Rendered between part 4 and part 5.
export const part6: ArticleSection[] = [
  {
    heading: "Key dates for homeowners at a glance",
    body: `<table>
<thead><tr><th>Date</th><th>What it means for you</th></tr></thead>
<tbody>
<tr><td>Jan 1, 2010</td><td>US rules stop the manufacture of new air conditioners pre-charged with R-22; R-410A becomes the standard.</td></tr>
<tr><td>Jan 1, 2020</td><td>Production and import of virgin R-22 banned; existing R-22 systems rely on reclaimed refrigerant.</td></tr>
<tr><td>Dec 27, 2020</td><td>AIM Act enacted, directing an 85% phasedown of HFCs by 2036.</td></tr>
<tr><td>Jan 1, 2023</td><td>DOE SEER2/HSPF2 efficiency standards take effect, with higher regional minimums.</td></tr>
<tr><td>Jan 1, 2024</td><td>HFC supply cut to 60% of baseline; UL 60335-2-40 becomes the main safety standard for A2L equipment.</td></tr>
<tr><td>Jan 1, 2025</td><td>No new residential R-410A split systems manufactured or imported; new systems use R-454B or R-32.</td></tr>
<tr><td>Spring-summer 2025</td><td>R-454B cylinder shortage and price spikes.</td></tr>
<tr><td>Dec 31, 2025</td><td>Federal 25C tax credit ends for property placed in service after this date.</td></tr>
<tr><td>Jul 27, 2026</td><td>EPA rule removing the R-410A installation deadline for pre-2025 components takes effect.</td></tr>
<tr><td>2029</td><td>HFC supply drops to 30% of baseline; R-410A prices expected to rise as supply tightens.</td></tr>
<tr><td>2036</td><td>HFC supply reaches its floor of 15% of baseline.</td></tr>
</tbody>
</table>
<p>Sources: EPA, Federal Register, DOE, IRS, Congressional Research Service and HVAC trade press, as listed in the sources section.</p>`,
  },
  {
    heading: "A brief history: from R-22 to R-410A to today's A2L refrigerants",
    body: `<p>Today's transition is the second major refrigerant change most American homeowners have lived through, and understanding the first one explains a lot about the second.</p>
<h3>The R-22 era and the ozone layer</h3>
<p>For decades, most home air conditioners used R-22, a hydrochlorofluorocarbon (HCFC). HCFCs damage the stratospheric ozone layer, and under the Montreal Protocol - the international treaty on ozone-depleting substances - the US phased them out. New air conditioners pre-charged with R-22 stopped being manufactured in the US starting January 1, 2010, and production and import of virgin R-22 ended on January 1, 2020. Homeowners with R-22 systems found that refrigerant became increasingly scarce and expensive, and repairs involving refrigerant often stopped making economic sense.</p>
<h3>R-410A: solving one problem, creating another</h3>
<p>R-410A, an HFC blend, replaced R-22 in new systems. It doesn't harm the ozone layer, which is why it was the preferred replacement. But HFCs are powerful greenhouse gases. In 2016, the Kigali Amendment to the Montreal Protocol set a global framework for phasing down HFCs, and in December 2020 the US enacted the AIM Act, which directs the EPA to phase down HFC production and import.</p>
<h3>The A2L generation</h3>
<p>The refrigerants replacing R-410A - R-454B and R-32 - have much lower global warming potentials but are mildly flammable, which is why the industry developed new safety standards (UL 60335-2-40) and why building codes are being updated. Unlike the R-22 transition, today's change pairs a supply phasedown with new-equipment restrictions, and the rules have shifted several times along the way - most recently with the EPA's 2026 removal of the installation deadline for pre-2025 R-410A components.</p>
<h3>What the history suggests</h3>
<p>The R-22 experience suggests a likely pattern for R-410A owners: repairs stay practical for years, but as supply tightens - especially after the 2029 phasedown step - refrigerant-heavy repairs on older systems may become harder to justify. Planning ahead, and understanding how your home warranty handles refrigerant and replacements, puts you in a better position when that day comes.</p>`,
  },
  {
    heading: "Behind the scenes: how home warranty companies price an AC claim",
    body: `<p>Understanding how a home warranty company evaluates an AC claim helps explain the outcomes homeowners see.</p>
<h3>Network contractors and negotiated rates</h3>
<p>Most home warranty companies work with networks of independent HVAC contractors at negotiated rates. When you file a claim, a network contractor diagnoses the problem and submits the findings and an estimate. The warranty company - not the contractor - decides what's covered under your contract.</p>
<h3>Repair before replace</h3>
<p>Because repairs usually cost less, companies typically authorize repairs where practical. Replacement tends to be approved only when repair isn't possible or economical, and contracts generally promise replacement equipment of similar features, capacity and efficiency - adjusted, where the contract says so, for current efficiency and refrigerant standards.</p>
<h3>Sourcing equipment</h3>
<p>Large companies buy equipment at scale. On its first-quarter 2025 earnings call, Frontdoor's leadership said, as summarized in published recaps, that it had secured older equipment while adapting to the new standards. For homeowners, that means a company may be able to replace a failed R-410A condenser with a matching unit from inventory where one is available - often the least disruptive outcome.</p>
<h3>Why cash offers can be lower than your quotes</h3>
<p>Cash-in-lieu offers are typically based on the company's own cost, negotiated supplier rates or an estimate. Several contracts note this may be less than retail. The gap between that number and the retail quotes you receive is often the biggest source of disagreement in AC replacement claims - which is why documenting local retail quotes matters if you dispute an offer.</p>
<h3>Upgrade programs</h3>
<p>Some companies offer members discounted replacement systems when a covered system can't be economically repaired, or as an optional upgrade. Frontdoor, for example, reported strong growth in its HVAC upgrade program in 2025 and 2026. These offers can be useful, but compare them with independent quotes before committing.</p>`,
  },
  {
    heading: "What the transition means in hot, cold and mixed climates",
    body: `<h3>Hot climates (Southeast and Southwest)</h3>
<p>Air conditioners in hot regions run longer and fail more often. Replacements must meet the higher regional minimum of 14.3 SEER2 for split central air conditioners, and in the Southwest, EER2 minimums too. Because the AC standard in these regions is enforced by installation date, efficiency compliance is checked at installation. For homeowners here, AC limits, refrigerant coverage and upgrade language in a home warranty contract are especially valuable, and urgent-dispatch policies matter during heat waves.</p>
<h3>Cold climates (North)</h3>
<p>Central air conditioners in the North must meet a 13.4 SEER2 minimum. Many northern homes run air conditioners only a few months a year, so failures are less frequent, but heat pumps - increasingly common for heating - run year-round and fall under the same refrigerant rules. Heat pumps must meet national minimums of 14.3 SEER2 and 7.5 HSPF2 (split systems). A heat pump failure in winter is both a heating and a cooling problem, so check how your contract covers heat pumps and whether any lower limits apply to your system type.</p>
<h3>Mixed climates</h3>
<p>In regions with long cooling and heating seasons, heat pumps and dual-fuel systems are common. The same considerations apply: matched-system requirements for A2L conversions, efficiency minimums for replacements, and contract terms for refrigerant, upgrades and heat pumps.</p>
<h3>States with their own rules</h3>
<p>Some states regulate HFCs independently of the federal program. Industry distributors report that New York, for example, maintains its own state-level restrictions. If you live in a state with its own HFC rules, a licensed local contractor can tell you what applies - and those rules may affect what replacement options a warranty company can offer.</p>`,
  },
  {
    heading: "What to expect by system age",
    body: `<p>Your system's age is the best single predictor of how the refrigerant transition will affect you and your warranty claims.</p>
<table>
<thead><tr><th>System age and type</th><th>What to expect</th><th>Warranty considerations</th></tr></thead>
<tbody>
<tr><td>Installed 2025 or later (R-454B or R-32)</td><td>Already on a new refrigerant; manufacturer warranty likely active</td><td>Manufacturer warranty usually handles defects first; check your home warranty covers A2L systems and their safety components</td></tr>
<tr><td>R-410A, under about 10 years old</td><td>Repairs straightforward; parts and refrigerant available</td><td>Per-pound refrigerant limits are the main gap; most claims are repairs</td></tr>
<tr><td>R-410A, about 10-15 years old</td><td>Compressor or condenser failures may lead to replacement recommendations</td><td>Upgrade/matching clauses, AC limits and cash-in-lieu terms start to matter a lot</td></tr>
<tr><td>R-410A, 15+ years old</td><td>Major failures often point to replacement; a conversion to A2L is likely unless matching R-410A equipment is available</td><td>Expect discussions about replacement or cash; document maintenance; get independent quotes</td></tr>
<tr><td>R-22 (almost always pre-2010)</td><td>Refrigerant scarce and costly; major repairs rarely economical</td><td>Refrigerant limits and conversion costs can leave large balances; replacement is the usual outcome</td></tr>
</tbody>
</table>
<p>Ages are approximate. System life depends heavily on climate, installation quality and maintenance.</p>`,
  },
  {
    heading: "Paying for a replacement your warranty won't fully cover",
    body: `<p>Even with a good home warranty, a full AC replacement in the transition era can leave a balance. Options to manage it:</p>
<ul>
<li><strong>Get multiple written quotes.</strong> Prices vary widely between contractors. Quotes also strengthen your position if you're negotiating a cash-in-lieu amount.</li>
<li><strong>Ask the warranty company about replacement programs.</strong> Some offer discounted systems to members; compare against independent quotes.</li>
<li><strong>Check manufacturer and distributor promotions</strong>, especially outside peak season.</li>
<li><strong>Check utility and state programs.</strong> The federal 25C credit ended for 2026 installations, but some utilities, states and local governments offer rebates or financing for efficient equipment. Your utility and state energy office are the best places to check.</li>
<li><strong>Consider financing carefully.</strong> Many contractors offer financing; compare the interest rate and total cost with other options.</li>
<li><strong>Time it if you can.</strong> If your system is still working but aging, planning a replacement in the spring or fall, rather than during a summer breakdown, can give you more choice and leverage.</li>
<li><strong>Build a repair fund.</strong> Setting aside money monthly for an eventual replacement is the most reliable way to avoid being forced into a rushed decision - with or without a home warranty.</li>
</ul>`,
  },
];
