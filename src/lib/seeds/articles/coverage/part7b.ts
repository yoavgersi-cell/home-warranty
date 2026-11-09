import type { ArticleSection } from "@/lib/config";

// Part 7b: lifespan vs replacement cost vs limit (the "exposure" math no
// competitor page shows), and coverage myths. Lifespans: NAHB (2007) and
// InterNACHI as published in our appliance and water heater guides; costs:
// Angi / HomeAdvisor 2025, HomeGuide, and ranges already cited in parts 2-3.
export const part7b: ArticleSection[] = [
  {
    heading: "When a home warranty's limits leave you exposed",
    body: `<p>The value of a home warranty depends on three numbers for each item in your house: how long it usually lasts, what it costs to replace, and what your plan will pay. Put them side by side and you can see where coverage protects you and where a gap remains.</p>
<table>
<thead><tr><th>Item</th><th>Typical life</th><th>Typical replacement</th><th>What a $500 cap covers</th><th>What a $2,000-$3,000 cap covers</th><th>What a $5,000+ (or no) limit covers</th></tr></thead>
<tbody>
<tr><td>Central AC or heat pump</td><td>~10-16 years (heat pump ~16)</td><td>~$5,000-$11,000+</td><td>A small repair</td><td>Most repairs; part of a replacement</td><td>Most or all of a replacement</td></tr>
<tr><td>Furnace</td><td>~15-20 years</td><td>Several thousand dollars</td><td>A small repair</td><td>Most repairs; part of a replacement</td><td>Most or all of a replacement</td></tr>
<tr><td>Tank water heater</td><td>~8-12 years</td><td>~$900-$1,800</td><td>Part of a replacement</td><td>A full replacement</td><td>A full replacement</td></tr>
<tr><td>Tankless water heater</td><td>Often 20 years with maintenance</td><td>~$1,400-$3,900+</td><td>Part of a repair</td><td>Most replacements</td><td>A full replacement</td></tr>
<tr><td>Refrigerator</td><td>~13 years</td><td>~$600-$2,300 (more for built-ins)</td><td>Most repairs</td><td>A standard replacement</td><td>High-end and built-in models</td></tr>
<tr><td>Dishwasher</td><td>~9 years</td><td>~$400-$1,200</td><td>Repairs and some replacements</td><td>A full replacement</td><td>A full replacement</td></tr>
<tr><td>Washer and dryer</td><td>~10-13 years</td><td>Pair ~$1,000-$2,300</td><td>Most repairs</td><td>A replacement of either</td><td>A replacement of either</td></tr>
<tr><td>Electrical panel</td><td>Decades</td><td>~$800-$2,500+</td><td>Part of a replacement</td><td>Most replacements (not code upgrades)</td><td>Most replacements (not code upgrades)</td></tr>
</tbody>
</table>
<p><em>Life expectancy: NAHB (2007) and InterNACHI, as reported; heat pump and furnace figures are approximate. Costs: Angi / HomeAdvisor (2025), HomeGuide and the ranges cited earlier in this guide. Local prices vary.</em></p>
<h3>Reading the table</h3>
<p>Three conclusions come out of this comparison:</p>
<ol>
<li><strong>Low caps work for repairs, not replacements.</strong> A plan with $500 item caps will handle the typical refrigerator, dishwasher or washer repair - the $160-$450 jobs that make up much of the volume - but leaves you paying most of any replacement. That can still be worthwhile if your goal is to smooth out frequent small bills.</li>
<li><strong>HVAC is where limits matter most.</strong> It's the most expensive system in most homes and the one most likely to need replacing during a warranty's life once it's past 10-12 years. The gap between a $3,000 limit and an uncapped one can be several thousand dollars on a single claim.</li>
<li><strong>Age changes the math.</strong> An item near the end of its typical life is the one most likely to fail - and also the one most likely to be questioned on maintenance or pre-existing grounds. If several major items are in that window, a plan with high limits and clear maintenance requirements is worth more; keep the service records that prove reasonable care.</li>
</ol>
<p>A simple self-test: list every item in your house that's past about two-thirds of its typical life. If that list includes the HVAC system, focus on HVAC limits, refrigerant and code coverage. If it's mostly kitchen and laundry appliances, focus on per-appliance limits and ice maker terms. If the list is empty, the case for a home warranty is weaker - see our <a href="/articles/is-a-home-warranty-worth-it">worth-it guide</a> for the full break-even math.</p>`,
  },
  {
    heading: "Seven common myths about home warranty coverage",
    body: `<h3>Myth 1: "A home warranty covers everything in the house."</h3>
<p>It covers listed systems and appliances that fail from wear and tear. The structure, sudden damage, cosmetic issues and anything not on your plan's list are excluded.</p>
<h3>Myth 2: "If an item is covered, any repair to it is covered."</h3>
<p>Covered items have excluded parts (ice makers, glass cooktops, garage door springs), excluded causes (sediment, missed maintenance, surges) and dollar limits. The question is always which part, which cause and how much.</p>
<h3>Myth 3: "A home warranty is a type of insurance."</h3>
<p>It's a service contract. Homeowners insurance pays for sudden damage from perils like fire and storms; a home warranty pays for things that wear out. Most homes benefit from understanding both - and mortgage lenders require insurance, not a warranty.</p>
<h3>Myth 4: "The company will replace my old system with a new one of my choosing."</h3>
<p>The company decides whether to repair or replace, replaces with similar capacity and efficiency - not the same brand or a premium upgrade - and may offer cash at its own cost instead.</p>
<h3>Myth 5: "Older appliances can't be covered."</h3>
<p>Most companies cover items regardless of age if they're working at the start of coverage. Age matters indirectly, through maintenance and pre-existing exclusions.</p>
<h3>Myth 6: "The cheapest plan with the longest item list is the best value."</h3>
<p>Item counts are marketing, and companies count differently. A plan with fewer items but higher limits on HVAC and appliances often pays far more when something expensive fails.</p>
<h3>Myth 7: "I can hire my own contractor and send the bill."</h3>
<p>Most plans require using the company's network or getting approval first. Paying someone yourself and asking for reimbursement later is a common reason for denied claims.</p>`,
  },
];
