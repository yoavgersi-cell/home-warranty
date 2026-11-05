import type { ArticleSection } from "@/lib/config";

// Part 3: the two products side by side, plus what the standard HO-3 says
// about home systems (ISO HO 00 03 as published by III / state DOIs; FC&S and
// Insurance Journal form analysis; regulator statements).
export const part3: ArticleSection[] = [
  {
    heading: "Home warranty vs. homeowners insurance: side-by-side comparison",
    body: `<table>
<thead><tr><th></th><th>Homeowners insurance</th><th>Home warranty</th></tr></thead>
<tbody>
<tr><td>What it protects against</td><td>Sudden, accidental damage (fire, wind, hail, theft, burst pipes) and liability</td><td>Breakdown of covered systems and appliances from normal wear and tear</td></tr>
<tr><td>Pays for the broken appliance itself?</td><td>Generally no - wear and tear and mechanical breakdown are excluded</td><td>Yes, up to the plan's caps</td></tr>
<tr><td>Pays for damage to your home?</td><td>Yes, if caused by a covered peril</td><td>No - secondary or consequential damage is excluded</td></tr>
<tr><td>Liability (someone gets hurt)</td><td>Yes</td><td>No</td></tr>
<tr><td>Typical annual cost</td><td>About $2,400-$3,000 on average nationally (varies widely by state)</td><td>About $300-$700, plus add-ons</td></tr>
<tr><td>Cost when you use it</td><td>A deductible per claim - often $1,000-$2,500, or a percentage for wind and hurricanes</td><td>A service fee per claim or visit - typically $60-$150</td></tr>
<tr><td>Required?</td><td>Usually required by mortgage lenders</td><td>Always optional - federal closing disclosures label it optional</td></tr>
<tr><td>Who does the work</td><td>You usually choose the contractor; the insurer pays the claim</td><td>The company usually assigns a contractor from its network</td></tr>
<tr><td>Effect of using it</td><td>Claims go on your CLUE report for seven years and can raise premiums</td><td>No effect on your insurance record</td></tr>
<tr><td>Regulated by</td><td>Your state insurance department</td><td>Varies by state - insurance department, a licensing agency, or lightly</td></tr>
</tbody>
</table>
<p>Regulators draw the same line. The Texas Department of Insurance puts it simply: insurance pays for damage from events your policy covers, "but not wear and tear," while warranties cover certain items "when they break down from normal wear and tear." California's Department of Insurance says a home protection contract "is not an insurance policy" and does not overlap or replace homeowners insurance. Florida's statute defines a home warranty as covering repairs "necessitated by wear and tear or an inherent defect."</p>`,
  },
  {
    heading: "What does homeowners insurance cover for home systems and appliances?",
    body: `<p>Most homeowners have an HO-3 policy, based on a standard form written by the Insurance Services Office (ISO) and used or adapted by most insurers. Its structure explains a lot:</p>
<ul>
<li><strong>Your dwelling (Coverage A) and other structures (Coverage B)</strong> are covered on an <strong>open-perils</strong> basis: everything is covered unless the policy specifically excludes it. Built-in systems - your HVAC, plumbing, electrical and water heater - are generally part of the dwelling.</li>
<li><strong>Your personal property (Coverage C)</strong> - including many freestanding appliances - is covered only for <strong>named perils</strong>, a list of 16 specific causes such as fire, windstorm, theft and accidental discharge of water.</li>
</ul>
<p>Open-perils coverage sounds broad, and for sudden events it is. But a short list of exclusions removes almost every way a system fails on its own.</p>
<h3>The exclusions that matter for home systems</h3>
<p>The standard form says it does not insure loss caused by:</p>
<ul>
<li><strong>"Wear and tear, marring, deterioration"</strong></li>
<li><strong>"Mechanical breakdown, latent defect, inherent vice, or any quality in property that causes it to damage or destroy itself"</strong></li>
<li>Rust or other corrosion, mold, fungus or wet rot, and dry rot</li>
<li>Settling, cracking, shrinking or expansion of foundations, walls, floors and similar structures</li>
<li>Birds, rodents and insects</li>
<li>Faulty or defective workmanship, materials, design or maintenance (though resulting damage from a covered cause can still be covered)</li>
<li><strong>Neglect</strong> - failing to use reasonable means to protect property at and after a loss</li>
<li><strong>Water</strong> - flood and surface water; water that backs up through sewers or drains or overflows from a sump pump; and groundwater seeping through foundations</li>
<li><strong>Power failure</strong> that happens off your premises</li>
<li><strong>Ordinance or law</strong> - the cost of meeting building codes - except for a limited additional coverage of up to 10% of your dwelling limit</li>
<li>Earth movement, including earthquakes</li>
</ul>
<p>Read the first two exclusions again. "Wear and tear" and "mechanical breakdown" are precisely how furnaces, air conditioners, water heaters and appliances fail. That's why a homeowners policy will almost never pay to fix or replace them.</p>
<h3>What the policy does cover</h3>
<p>Here's where insurance earns its keep around home systems:</p>
<ul>
<li><strong>Accidental discharge of water or steam</strong> from a plumbing, heating, air conditioning or fire sprinkler system or a household appliance. The policy pays for the resulting damage, and for <strong>tearing out and replacing part of the building</strong> to reach the leak - but it specifically does <em>not</em> pay for the system or appliance the water escaped from.</li>
<li><strong>Sudden tearing apart, cracking, burning or bulging</strong> of a hot water heating system, an air conditioning system or a water heater - for example, a tank that splits at a seam. Again, the damage it causes is covered; the worn-out equipment generally isn't.</li>
<li><strong>Freezing</strong> of plumbing, heating and AC systems - as long as, if the home is vacant or unoccupied, you maintained heat or shut off and drained the water.</li>
<li><strong>Fire, lightning, windstorm, hail, falling objects and vehicles</strong> - including damage to your HVAC equipment, which is part of the dwelling. If lightning fries your AC condenser or a tree crushes it, that's an insurance claim.</li>
</ul>
<h3>A common myth: the "slow leak" exclusion</h3>
<p>Many articles say homeowners policies exclude "constant or repeated seepage or leakage of water over a period of weeks, months or years." That language does appear in many insurers' own policy forms - including policies used in Florida and Texas, and some major carriers' forms - but according to industry form analysts at FC&S and Insurance Journal, the ISO standard form removed that specific exclusion in its 1991 edition. Under the standard form, insurers typically deny long-term leak damage under other exclusions instead: wear and tear, deterioration, rust, mold and wet rot, or neglect. Either way, the practical result is similar - <strong>slow leaks are rarely covered</strong> - but check your own policy's wording, because a sudden discovery of a recent leak can be treated differently from damage that built up over months.</p>
<h3>Electrical surges</h3>
<p>Lightning is covered under the fire and lightning peril. Surges from other causes are more complicated. Under the standard form, personal property coverage for "artificially generated electrical current" excludes damage to electronic components and circuitry in appliances and electronics. Built-in systems are covered under the dwelling's open-perils coverage, but whether a non-lightning surge to your HVAC is covered varies by policy. If surges are a concern in your area, ask your insurer - and look at the equipment breakdown endorsement described below.</p>`,
  },
];
