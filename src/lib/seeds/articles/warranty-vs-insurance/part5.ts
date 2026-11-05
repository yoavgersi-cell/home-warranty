import type { ArticleSection } from "@/lib/config";

// Part 5: the coverage map (34 failures) and the patterns it reveals. Built
// from the HO 00 03 structure/exclusions and endorsements (HO 04 95, HO 04 77,
// equipment breakdown, service line) plus typical home warranty contracts.
// Cells describe the typical standard-form / typical-plan outcome.
const Y = "✅";
const N = "❌";
const M = "⚠️";

export const part5: ArticleSection[] = [
  {
    heading: "The coverage map: who pays for 34 common household failures",
    body: `<p>This is the heart of the guide. For each failure, we show the typical outcome under a standard HO-3 homeowners policy, under common policy add-ons (endorsements), and under a typical home warranty. ${Y} = typically covered, ${M} = depends on the cause, the plan or the policy wording, ${N} = typically not covered. Your policy and contract control - but this map shows where to look.</p>
<table>
<thead><tr><th>Failure</th><th>Homeowners insurance (HO-3)</th><th>Insurance add-on</th><th>Home warranty</th></tr></thead>
<tbody>
<tr><td colspan="4"><strong>Heating and cooling</strong></td></tr>
<tr><td>AC compressor fails from age</td><td>${N} Wear and tear / mechanical breakdown</td><td>${M} Equipment breakdown, if sudden and not wear</td><td>${Y} Up to HVAC cap</td></tr>
<tr><td>AC condenser struck by lightning</td><td>${Y} Lightning, minus deductible</td><td>-</td><td>${N} Not a wear-and-tear failure</td></tr>
<tr><td>AC crushed by falling tree in a storm</td><td>${Y} Windstorm / falling object</td><td>-</td><td>${N}</td></tr>
<tr><td>AC unit stolen for scrap</td><td>${Y} Theft</td><td>-</td><td>${N}</td></tr>
<tr><td>Furnace blower motor dies</td><td>${N}</td><td>${M} Equipment breakdown</td><td>${Y}</td></tr>
<tr><td>Heat pump fails after power surge (not lightning)</td><td>${M} Varies by policy</td><td>${M} Equipment breakdown often covers electrical breakdown</td><td>${M} Many plans exclude surge damage</td></tr>
<tr><td>AC condensate line clogs and overflows, staining ceiling</td><td>${Y} Ceiling damage (accidental discharge); ${N} the AC itself</td><td>-</td><td>${M} Clearing the line, often; ${N} the ceiling</td></tr>
<tr><td>AC replacement needs new code-required equipment or permits</td><td>${N} (only within the 10% ordinance-or-law coverage after a covered loss)</td><td>${M} Increased ordinance-or-law limits, after a covered loss</td><td>${M} Only on plans with permit/code coverage</td></tr>
<tr><td colspan="4"><strong>Water heaters and plumbing</strong></td></tr>
<tr><td>Water heater tank splits suddenly, flooding the room</td><td>${Y} Water damage and tear-out; ${N} the heater</td><td>${M} Equipment breakdown for the heater, if not corrosion</td><td>${Y} The heater</td></tr>
<tr><td>Water heater slowly leaks for weeks, rotting the subfloor</td><td>${N} Deterioration, rot, neglect (some policies explicitly exclude repeated seepage)</td><td>-</td><td>${M} The heater, if not excluded; ${N} the subfloor</td></tr>
<tr><td>Water heater stops heating (element or thermostat)</td><td>${N}</td><td>${M} Equipment breakdown</td><td>${Y}</td></tr>
<tr><td>Pipe bursts inside a wall</td><td>${Y} Water damage plus opening the wall; ${N} the pipe repair itself</td><td>-</td><td>${Y} The pipe repair (access limits apply); ${N} the water damage</td></tr>
<tr><td>Pipes freeze and burst while you're away (heat on)</td><td>${Y} Freezing, if heat was maintained</td><td>-</td><td>${M} Pipe repair on some plans; freeze damage often limited</td></tr>
<tr><td>Pipes freeze in a vacant home with heat off and water on</td><td>${N} Freezing exclusion applies</td><td>-</td><td>${N} Typically excluded</td></tr>
<tr><td>Slow drip under the kitchen sink causes mold</td><td>${N} Mold, wet rot, deterioration</td><td>${M} Limited mold coverage endorsements (often $5,000-$10,000), usually only for covered water losses</td><td>${M} Fixing the leak, often; ${N} the mold</td></tr>
<tr><td>Slab leak under the foundation</td><td>${M} Resulting water damage and access may be covered if sudden; ${N} the pipe</td><td>-</td><td>${M} Pipe repair; access usually capped (Choice, for example, caps access at $500)</td></tr>
<tr><td>Toilet supply line bursts, flooding the bathroom</td><td>${Y} Water damage</td><td>-</td><td>${M} The supply line, on most plans</td></tr>
<tr><td>Main drain clogs inside the home</td><td>${N}</td><td>-</td><td>${Y} Stoppages clearable from an accessible cleanout, on most plans</td></tr>
<tr><td>Sewage backs up through floor drains</td><td>${N} Water backup exclusion</td><td>${Y} Water backup / sump overflow endorsement</td><td>${M} Clearing the stoppage; ${N} the cleanup</td></tr>
<tr><td>Sump pump fails, basement floods</td><td>${N} Excluded</td><td>${Y} Water backup endorsement (not the pump itself)</td><td>${M} The pump, on plans that cover it</td></tr>
<tr><td>Buried water or sewer line breaks in the yard</td><td>${N} Wear, earth movement, tree roots</td><td>${Y} Service line endorsement (often ~$10,000)</td><td>${M} Only with an exterior line add-on</td></tr>
<tr><td>Tree roots crush the sewer lateral</td><td>${N}</td><td>${Y} Service line endorsement</td><td>${M} Usually excluded or add-on only</td></tr>
<tr><td colspan="4"><strong>Appliances</strong></td></tr>
<tr><td>Refrigerator compressor dies</td><td>${N}</td><td>${M} Equipment breakdown</td><td>${Y} On appliance/combo plans, up to cap</td></tr>
<tr><td>Food spoils when the fridge fails</td><td>${N}</td><td>${M} Some equipment breakdown endorsements include spoilage</td><td>${N} Typically excluded</td></tr>
<tr><td>Dishwasher leaks, warping the kitchen floor</td><td>${Y} If sudden (accidental discharge); ${N} the dishwasher</td><td>-</td><td>${Y} The dishwasher; ${N} the floor</td></tr>
<tr><td>Washer hose bursts, flooding the laundry room</td><td>${Y} Water damage</td><td>-</td><td>${M} The washer, if it failed; hoses often excluded</td></tr>
<tr><td>Dryer fire from lint buildup</td><td>${Y} Fire damage to the home</td><td>-</td><td>${N} Lint and neglect are common exclusions</td></tr>
<tr><td>Oven control board fails</td><td>${N}</td><td>${M} Equipment breakdown</td><td>${Y}</td></tr>
<tr><td colspan="4"><strong>Electrical and structure</strong></td></tr>
<tr><td>Electrical panel breaker fails</td><td>${N}</td><td>${M} Equipment breakdown often lists electrical panels</td><td>${Y} On systems plans</td></tr>
<tr><td>Lightning damages wiring and appliances</td><td>${Y} Lightning</td><td>-</td><td>${N}</td></tr>
<tr><td>Garage door opener motor fails</td><td>${N}</td><td>${M} Equipment breakdown, sometimes</td><td>${Y} On most plans (springs and doors often excluded)</td></tr>
<tr><td>Roof leaks from age</td><td>${N} Wear and tear</td><td>-</td><td>${M} Some plans sell limited roof leak coverage</td></tr>
<tr><td>Hail damages the roof</td><td>${Y} Hail, minus deductible (watch for cosmetic exclusions and depreciated roof payments)</td><td>-</td><td>${N}</td></tr>
<tr><td>Foundation cracks from settling</td><td>${N} Settling exclusion</td><td>-</td><td>${N}</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "Five patterns the coverage map reveals",
    body: `<p><strong>1. The line runs straight through the middle of most water losses.</strong> In nearly every plumbing or appliance leak, insurance covers the damage and the warranty covers the equipment. If you have only one product, expect to pay for the other half yourself. Water damage and freezing account for roughly a quarter of homeowners insurance losses, and the Insurance Information Institute says about 1 in 60 insured homes has a water damage or freezing claim each year, averaging about $13,954 per claim (2018-2022 data).</p>
<p><strong>2. Slow problems fall through both nets.</strong> Long-term leaks, mold, rot, settling and gradual deterioration are excluded by insurance and usually only partly covered (if at all) by a warranty. The only real protection is prevention: leak sensors, annual plumbing checks, and acting on small drips immediately.</p>
<p><strong>3. Below-ground lines are a forgotten gap.</strong> The water and sewer lines between your house and the street are usually your responsibility, typically excluded from a standard homeowners policy, and excluded from many home warranty base plans. A service line endorsement - often around $20-$40 a year for about $10,000 of coverage - is one of the cheapest gap-fillers available.</p>
<p><strong>4. Sewer backup is excluded from both standard products.</strong> The Insurance Information Institute notes sewer backup is excluded from standard homeowners <em>and</em> flood policies. A water backup endorsement is the fix; it typically costs about $40-$250 a year depending on the limit.</p>
<p><strong>5. Equipment breakdown endorsements overlap with home warranties - and that's worth knowing.</strong> Several insurers offer an add-on that pays for sudden mechanical or electrical breakdown of HVAC systems, water heaters, appliances and electrical panels. It's not a home warranty - most exclude gradual wear and tear - but for a newer home it can cover many of the same failures for far less. We compare the two below.</p>`,
  },
];
