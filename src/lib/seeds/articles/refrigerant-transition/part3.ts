import type { ArticleSection } from "@/lib/config";

// Part 3: the warranty core - the clauses that decide AC payouts, a
// company-by-company comparison, the per-pound refrigerant gap, worked examples.
export const part3: ArticleSection[] = [
  {
    heading: "How home warranties pay AC claims: the 6 clauses that decide your payout",
    body: `<p>When an air conditioner fails, the outcome of a home warranty claim depends on six parts of the contract. None of the contracts we reviewed name R-454B or R-32 specifically; instead, companies handle the transition through these general clauses. Find each of them in your sample contract.</p>
<h3>1. The AC (covered item) limit</h3>
<p>The maximum the company pays for the air conditioning system per term - commonly a few thousand dollars on consumer plans. American Home Shield's consumer coverage page, for example, lists coverage "up to $5,000 per air conditioning system (per 1-year term)," with lower limits for some system types. Everything else - refrigerant, upgrades, matching components - often comes out of this one number.</p>
<h3>2. The refrigerant limit</h3>
<p>Many contracts limit refrigerant separately, usually in <strong>dollars per pound</strong>. A $10-per-pound limit is common on standard tiers. Some premium tiers cover all refrigerant costs. Some plans exclude refrigerant unless you buy an add-on.</p>
<h3>3. The upgrade or compatibility clause</h3>
<p>This decides who pays when a replacement requires changes to make new equipment work with your system or meet current standards - for example, replacing the indoor coil so it matches a new outdoor unit. Some contracts explicitly cover upgrades for compatibility with "SEER, HSPF, or refrigerant standards" (within the AC limit). Others exclude upgrades caused by incompatibility.</p>
<h3>4. Refrigerant recovery (recapture, reclaim and disposal)</h3>
<p>Federal rules require refrigerant to be recovered rather than vented when systems are serviced or removed. Some contracts cover the cost of recapturing and disposing of refrigerant; others exclude it.</p>
<h3>5. Permits, code upgrades and modifications</h3>
<p>Replacements can require permits, electrical or line set changes, or other modifications. Many plans exclude these or cover them only on premium tiers, often with low dollar limits.</p>
<h3>6. Cash in lieu of repair or replacement</h3>
<p>Most contracts let the company pay you cash instead of arranging the work. Crucially, the cash amount is usually based on the <strong>company's</strong> cost or estimate - frequently described in the contract itself as potentially "less than retail."</p>
<h3>A seventh clause to watch: government regulation</h3>
<p>Some contracts include specific language for situations where regulations prevent repair or replacement. Home Warranty of America's 2022 direct-to-consumer contract, for example, says HWA will pay no more than $1,000 in the aggregate "in the event government regulations prevent HWA from repairing or replacing a covered air conditioning system." If your contract has a clause like this, it can cap your payout well below the general AC limit.</p>`,
  },
  {
    heading: "Company-by-company: how seven home warranty companies handle AC refrigerant and upgrades",
    body: `<p>The table below summarizes what we found in each company's published sample contracts, coverage pages and FAQs, checked in October 2026. Terms vary by state, plan and contract version - and several companies' published documents conflict with one another, which we note. Always confirm against your own contract.</p>
<table>
<thead><tr><th>Company</th><th>Refrigerant limit</th><th>Upgrades for SEER / refrigerant standards</th><th>Refrigerant recovery</th><th>Cash in lieu basis</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>$10/lb on ShieldSilver and ShieldGold; all refrigerant costs on ShieldPlatinum (one AHS guide lists a $1,000 term limit)</td><td>Covered to maintain compatibility/compliance with SEER, HSPF or refrigerant standards, within the AC limit</td><td>Contract says AHS will use reasonable efforts to recapture, reclaim and/or dispose of refrigerant</td><td>Reasonable estimate of retail cost in your area (2024 sample agreement)</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>Refrigerant recharging listed as covered (customer contract)</td><td>No specific language found</td><td>Recapture, reclaim and disposal covered when required for diagnosis, repair or replacement</td><td>Choice's actual cost, "which at times may be less than retail"</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>Refrigerant excluded unless optional Freon coverage is purchased (low cap)</td><td>No specific language found</td><td>Not addressed in sources found</td><td>At Select's discretion, capped at depreciated value</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>100% of refrigerant costs on Premium and real estate plans; up to $20/lb on Starter and Essential</td><td>Brochures advertise "14 SEER" coverage</td><td>Recapture, reclaim and disposal listed as not covered</td><td>First American's negotiated supplier rates, "which may be less than retail"</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>$10/lb (2022 contract)</td><td>Not covered unless optional upgrade purchased; $1,000 aggregate if regulations prevent repair/replacement</td><td>Not addressed in sources found</td><td>HWA reserves the right to offer cash back</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Covered subject to a refrigerant limit in the contract</td><td>No specific language found</td><td>Recapture, reclaim and disposal excluded; line sets excluded</td><td>Not found in sources</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>$10/lb, included in the AC limit</td><td>Upgrades for compatibility/compliance with SEER, HSPF or refrigerant standards covered (older agent materials listed SEER matching as non-covered)</td><td>Older agent materials list recapture and disposal as non-covered</td><td>Not found in sources</td></tr>
</tbody>
</table>
<h3>American Home Shield</h3>
<p><strong>AC limit:</strong> AHS's consumer air conditioning page lists coverage "up to $5,000 per air conditioning system (per 1-year term)," and its 2024 sample agreement sets a lower $1,500 limit for certain system types (such as geothermal and water-source heat pumps). AHS's real estate pages list higher limits. AHS also pays up to $1,000 to access components through concrete.</p>
<p><strong>Refrigerant:</strong> AHS's coverage page states: "For ShieldSilver and ShieldGold, there is a $10 per pound AC refrigerant limit. For ShieldPlatinum, we will cover all costs of AC refrigerant." AHS has also published plan names ShieldEssential, ShieldPlus and ShieldComplete with equivalent language ($10 per pound on the first two; all refrigerant costs on ShieldComplete). One AHS comparison guide lists refrigerant on the top tier as a $1,000 limit per term - so confirm the figure in your own agreement.</p>
<p><strong>Upgrades:</strong> AHS's coverage page says: "If repair or replacement is needed, we'll cover upgrades to maintain compatibility and/or compliance with SEER, HSPF, or refrigerant standards." The 2024 agreement covers code-required upgraded components up to the covered item limit, subject to AHS's right to make a cash payment instead.</p>
<p><strong>Permits and modifications:</strong> On ShieldPlatinum only, AHS covers permits up to $250 per term and modifications such as gas or plumbing line extensions up to $250 per term; "This benefit does not apply to our ShieldSilver or ShieldGold plans."</p>
<p><strong>Cash in lieu:</strong> The 2024 Nevada agreement bases cash payments on "our reasonable estimate of retail cost in your area to repair or replace the Covered Item, subject to any applicable limit." Earlier contracts used different wording, including AHS's actual cost. <a href="/reviews/american-home-shield">Read our AHS review</a>.</p>
<h3>Choice Home Warranty</h3>
<p><strong>AC limit:</strong> Third-party reviews report a $3,000 cap (described variously as per item or combined for heating and cooling); confirm in your contract.</p>
<p><strong>Refrigerant and recovery:</strong> A Choice contract we reviewed lists covered AC components including the condenser and compressor, evaporator coil and thermal expansion valves, air handler, thermostats and primary drain pans, plus "Refrigerant recharging; costs related to refrigerant recapture, reclaim and disposal when required for diagnosis, repair or replacement."</p>
<p><strong>Upgrades:</strong> We found no specific SEER or refrigerant-standard upgrade language in Choice's published materials.</p>
<p><strong>Cash in lieu:</strong> Choice "reserves the right to offer cash back in lieu of repair or replacement in the amount of CHW's actual cost (which at times may be less than retail)."</p>
<p><strong>Recent scrutiny:</strong> Choice agreed to an $11.8 million consent judgment with the Arizona Attorney General in 2026 over claim-handling and disclosure allegations, without admitting wrongdoing. In July 2026, a plaintiffs' law firm announced it was investigating complaints about Choice HVAC claim denials; that is an investigation by a private firm, not a finding. <a href="/reviews/choice-home-warranty">Read our Choice review</a>.</p>
<h3>Select Home Warranty</h3>
<p><strong>AC coverage:</strong> Select's terms cover "All factory-installed parts and components of permanently installed air conditioning systems up to a 5-ton capacity."</p>
<p><strong>Refrigerant:</strong> The terms exclude "Heat transfer devices, refrigerant and/or leaks of water or refrigerant" unless optional Freon coverage is purchased, which carries a low cap (the published terms state the amount inconsistently, as both "two hundred dollars" and "$150").</p>
<p><strong>Cash settlement:</strong> At Select's discretion and capped at depreciated value; limits are annual maximums. Given its low item caps, Select is the plan where a transition-related replacement is most likely to leave a large balance. <a href="/reviews/select-home-warranty">Read our Select review</a>.</p>
<h3>First American Home Warranty</h3>
<p><strong>Refrigerant:</strong> First American's FAQ states that "all of our plans include refrigerant coverage. Our Premium plan and all real estate plans cover 100% of refrigerant costs. Our Starter and Essential plans cover up to $20/lb." That's the most generous refrigerant coverage among the companies we track. Its state brochures have also advertised coverage for "14 SEER and R-22 phaseout."</p>
<p><strong>Recovery:</strong> Brochures list refrigerant "recapture, reclaim and disposal" as not covered.</p>
<p><strong>Cash in lieu:</strong> "Payment will be made based on First American's negotiated rates with its suppliers, which may be less than retail." <a href="/reviews/first-american">Read our First American review</a>.</p>
<h3>Home Warranty of America</h3>
<p><strong>Refrigerant:</strong> HWA's 2022 contract says: "We will pay up to $10 per pound for the cost of refrigerant for authorized repairs. You are responsible for payment of any costs in excess of $10 per pound." (An older HWA brochure advertised "No Cap on Refrigerant," which conflicts with the contract - the contract controls.)</p>
<p><strong>Regulation clause:</strong> "HWA will pay no more than $1,000 in the aggregate during the coverage period for the above coverages only in the event government regulations prevent HWA from repairing or replacing a covered air conditioning system."</p>
<p><strong>Upgrades and limits:</strong> HWA's brochure defines a SEER standard and states HWA isn't responsible for upgrades caused by equipment incompatibility unless an optional upgrade is purchased. Its brochure lists $5,000 per covered item and a $15,000 aggregate. <a href="/reviews/home-warranty-of-america">Read our HWA review</a>.</p>
<h3>The Home Service Club</h3>
<p>Its sample contract covers refrigerant "subject to refrigerant (freon) limits," excludes "recapture/reclaim/disposal of refrigerant (freon)" and "interconnecting refrigerant (freon) gas lines/line sets," and limits heating and air conditioning access, diagnosis and repair to "$2,000 per each twelve month period." That combination - excluded line sets and a $2,000 annual HVAC limit - leaves little room for a full-system conversion. <a href="/reviews/home-service-club">Read our Home Service Club review</a>.</p>
<h3>2-10 Home Buyers Warranty</h3>
<p>2-10's 2025 sample contract sets a $5,000 AC limit (with a $1,500 limit for certain system types) and states: "Included in the Covered Item Limit is a $10 per pound refrigerant limit." Its air conditioner page says: "Upgrades needed for compatibility or compliance with SEER, HSPF, or refrigerant standards are covered during repair or replacement." Older 2-10 agent materials listed recapture, haul-away, disposal and SEER matching as non-covered costs, so check which version applies to you. 2-10 and American Home Shield share a parent company, Frontdoor, which may explain their similar language. <a href="/reviews/2-10-home-buyers-warranty">Read our 2-10 review</a>.</p>`,
  },
  {
    heading: "The $10-per-pound problem: why refrigerant limits leave a gap",
    body: `<p>Per-pound refrigerant limits are one of the least understood parts of a home warranty, and the refrigerant transition has made them more important.</p>
<h3>How much refrigerant does a system hold?</h3>
<p>A typical residential split system holds several pounds of refrigerant, and larger systems or long line sets hold more. A 2-10 agent flyer, for example, used a 9-pound full-system charge as an illustration. A small leak repair might need a pound or two; a full recharge after a major repair needs the system's whole charge.</p>
<h3>The math</h3>
<p>Suppose a repair requires recharging 8 pounds of refrigerant, and your contractor's installed price is $60 per pound (installed prices vary widely by region and contractor; this is an illustration, not a quote).</p>
<table>
<thead><tr><th>Refrigerant coverage</th><th>Company pays</th><th>You pay</th></tr></thead>
<tbody>
<tr><td>$10 per pound limit</td><td>8 × $10 = $80</td><td>$480 - $80 = <strong>$400</strong></td></tr>
<tr><td>$20 per pound limit</td><td>8 × $20 = $160</td><td>$480 - $160 = <strong>$320</strong></td></tr>
<tr><td>All refrigerant costs covered</td><td>$480</td><td><strong>$0</strong> (plus service fee)</td></tr>
</tbody>
</table>
<p>On a repair that's otherwise fully covered, a per-pound limit can still leave a bill of several hundred dollars. In practice, the warranty company pays the contractor at its network rates, so how the gap is passed on to you depends on the contract and contractor. Ask before work begins.</p>
<h3>Why per-pound limits matter more now</h3>
<ul>
<li>Refrigerant prices have risen since many of these limits were written, and the 2025 shortage briefly pushed R-454B much higher.</li>
<li>R-410A supply is capped and is expected to tighten at the 2029 phasedown step.</li>
<li>A full conversion to a new system involves charging a new system with refrigerant, which may be priced into the equipment and installation rather than billed per pound - another reason to ask how your contract treats refrigerant on replacements.</li>
</ul>
<h3>Which plans avoid the gap</h3>
<p>Among the companies we track, First American's Premium and real estate plans cover 100% of refrigerant costs, and AHS states that ShieldPlatinum covers all AC refrigerant costs (confirm in your agreement, since one AHS guide lists a $1,000 term limit). If refrigerant leaks are a known issue on your system, those tiers deserve a close look.</p>`,
  },
  {
    heading: "Three worked examples: AC claims under the new rules",
    body: `<p>These illustrative examples show how common contract terms play out. They're hypothetical; the dollar amounts are for illustration only and your outcome depends on your contract, your system and local prices.</p>
<h3>Example 1: a leak on a 7-year-old R-410A system</h3>
<p><strong>Situation:</strong> The system stops cooling. The technician finds an accessible leak at a fitting, repairs it and recharges 4 pounds of R-410A.</p>
<p><strong>Under a plan with a $10/lb limit:</strong> The repair is covered; refrigerant is covered up to $40. If the contractor's refrigerant charge is higher, the homeowner may owe the difference plus the service fee.</p>
<p><strong>Under a plan covering all refrigerant:</strong> The homeowner pays only the service fee.</p>
<p><strong>Transition impact:</strong> Minimal. R-410A remains available for repairs, and nothing about the 2025 rules prevents this repair.</p>
<h3>Example 2: a failed compressor on a 14-year-old R-410A system</h3>
<p><strong>Situation:</strong> The compressor fails. Because of the system's age, the contractor recommends replacing the condensing unit. A matching pre-2025 R-410A condenser isn't available locally, so the realistic option is a new A2L system: outdoor unit, matched indoor coil, possibly new line sets, and safety components.</p>
<p><strong>Under a plan that covers SEER/refrigerant-standard upgrades within a $5,000 AC limit (such as AHS or 2-10 per their published terms):</strong> The company may approve a full replacement or matching components, up to the AC limit, subject to its right to pay cash instead. Costs above the limit, and items the plan excludes (such as permits on non-premium tiers), fall to the homeowner.</p>
<p><strong>Under a plan without upgrade coverage, or with a regulation clause (such as HWA's $1,000 aggregate when regulations prevent repair or replacement):</strong> The company may cover only the failed component's value, or a limited amount, leaving the homeowner to fund the rest of the conversion.</p>
<p><strong>Under a plan with low item caps (e.g., about $3,000 for HVAC per term at Select, or $2,000 per year at The Home Service Club):</strong> The payout may cover a fraction of a full replacement.</p>
<p><strong>Transition impact:</strong> Large. This is the scenario where contract language on matching, upgrades and caps decides whether the homeowner pays hundreds or thousands.</p>
<h3>Example 3: a cash-in-lieu offer</h3>
<p><strong>Situation:</strong> The company approves replacement but offers cash instead, based on its own cost estimate. The homeowner's local quotes for a new A2L system are substantially higher.</p>
<p><strong>What the contracts say:</strong> Most cash-in-lieu clauses base the amount on the company's actual cost, negotiated rates or estimate - several explicitly note this may be less than retail. AHS's 2024 agreement uses a "reasonable estimate of retail cost in your area."</p>
<p><strong>What to do:</strong> Ask for the itemized calculation, get two or three written local quotes, and submit them with a written request for reconsideration. Check whether accepting cash ends coverage for the system. We cover the full process in the claims section below.</p>`,
  },
];
