import type { ArticleSection } from "@/lib/config";

// Part 2: systems coverage in depth - HVAC, plumbing, water heaters, electrical.
// Facts: AHS plan pages + July 2024 sample agreement; First American coverage-
// limit and HVAC-limit pages; 2-10 help center and 2DNA25 sample agreement
// (effective Jan 1, 2025); NerdWallet / This Old House 2026 reviews; costs from
// Angi (2025), HomeGuide and the cost ranges already published on this site.
export const part2: ArticleSection[] = [
  {
    heading: "Does a home warranty cover HVAC?",
    body: `<p>Yes - heating and cooling are the heart of almost every home warranty, and they're where the biggest claims happen. A systems or combination plan typically covers the furnace, heat pump, central air conditioner, air handler, condenser, evaporator coil, thermostat and, at most companies, the ductwork. What separates good HVAC coverage from weak coverage is not whether HVAC is on the list, but four details underneath it: the dollar limit, refrigerant, code upgrades and maintenance.</p>
<h3>HVAC limits by company</h3>
<table>
<thead><tr><th>Company</th><th>HVAC limit (as published or reported)</th><th>Refrigerant</th><th>Code, permits, modifications</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/first-american">First American</a></td><td>No dollar limit for conventional HVAC; $1,500 for geothermal and specialty systems</td><td>Premium: 100% of recharge cost. Starter and Essential: up to $20/lb</td><td>Included through its "Advantage" coverage on Essential and Premium (reported combined caps of $500 and $1,500)</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>$5,000 per HVAC system per term</td><td>ShieldSilver and ShieldGold: $10/lb, counted inside the item limit. ShieldPlatinum: unlimited</td><td>ShieldPlatinum only, up to $250 per term</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>$5,000 per covered HVAC system (2-10 help center)</td><td>$10/lb, inside the item limit (2025 sample agreement); unlimited refrigerant sold as an option</td><td>Check contract</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to $5,000 per item; NerdWallet reports a $1,500 sub-limit on some heating systems</td><td>Up to $10/lb (2022 contract)</td><td>Check contract</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>$3,000 per covered item per 12 months</td><td>Excluded in a contract excerpt we reviewed</td><td>Government-mandated upgrades and permit fees excluded</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>About $3,000 per term for HVAC</td><td>Check contract</td><td>Check contract</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Item caps mostly $300-$2,000; $6,000 or $9,000 per year in total</td><td>Check contract</td><td>Check contract</td></tr>
</tbody>
</table>
<p><em>Sources: First American HVAC and coverage-limit pages; AHS plan pages and sample agreement; 2-10 help center and 2DNA25 sample agreement; NerdWallet and This Old House 2026 reviews. Terms vary by state.</em></p>
<h3>Why the limit matters so much for HVAC</h3>
<p>HVAC repairs are mostly affordable. Angi puts the average HVAC repair at about $350, with most jobs between roughly $130 and $2,000. Replacements are a different story: a new central air or heat pump system commonly costs $5,000 to $11,000 or more, according to HomeGuide's cost data, and larger or high-efficiency systems run higher. A $3,000 or $5,000 limit will cover nearly any repair, but on a full replacement it may cover only half the bill. First American's uncapped conventional HVAC coverage is the strongest term we've found for this reason - though it's sold in only about 35-37 states plus D.C.</p>
<h3>Refrigerant: the hidden HVAC sub-limit</h3>
<p>When an air conditioner or heat pump leaks or loses refrigerant, recharging it is part of the repair. Many contracts cap what they pay per pound. A $10-per-pound cap was workable when R-22 and R-410A were cheap; it covers much less now that refrigerant prices have risen during the industry's switch to new refrigerants. We explain that shift in our <a href="/articles/r-410a-phase-out-home-warranty">R-410A phase-out guide</a>. If you have an older AC, refrigerant coverage is worth checking line by line.</p>
<h3>What HVAC coverage usually excludes</h3>
<ul>
<li><strong>Failures from missed maintenance</strong> - dirty filters, clogged condensate lines, coils never cleaned. Keep service receipts.</li>
<li><strong>Code-required upgrades and modifications</strong> when replacing an old system: new pads, electrical changes, line sets, or modifications to fit a new unit - unless your tier includes code and permit coverage.</li>
<li><strong>Mismatched systems</strong> - many contracts replace only the failed component, and pay to match the system only if the tier allows.</li>
<li><strong>Window units, portable units and commercial-grade equipment.</strong></li>
<li><strong>Ductwork in inaccessible places</strong> such as inside concrete or behind finished walls, and duct cleaning.</li>
<li><strong>Humidifiers, air purifiers, UV lights and zone controllers</strong> at many companies.</li>
</ul>
<p>HVAC is also where most disputes come from. Our guide to <a href="/articles/home-warranty-claim-denied">why home warranty companies deny HVAC claims</a> walks through the common denial reasons and how to appeal them, and our <a href="/articles/best-home-warranty-for-heat-pumps">heat pump coverage guide</a> compares limits for heat pump, ductless and geothermal systems.</p>`,
  },
  {
    heading: "Does a home warranty cover plumbing?",
    body: `<p>Yes. Plumbing is standard on systems and combination plans, and it's one of the most frequently used parts of a home warranty. In a 2023 ConsumerAffairs survey of homeowners, indoor plumbing and fixtures were among the three most commonly reported breakdowns, alongside HVAC and washers and dryers. The coverage typically includes:</p>
<ul>
<li>Leaks and breaks in water, drain, gas, waste and vent lines inside the home</li>
<li>Valves, including shut-off and pressure-regulating valves</li>
<li>Toilet mechanisms (fill valves, flappers and wax rings - not the tank or bowl at many companies)</li>
<li>Faucets and shower heads at some companies and tiers (all AHS plans; Home Warranty of America only on Premier Plus)</li>
<li>Stoppages in drains and sewer lines, cleared through an existing access point</li>
<li>Built-in whirlpool bath motors and pumps, sump pumps and sewage ejector pumps on some plans</li>
</ul>
<h3>Stoppages: the 100-foot rule</h3>
<p>Clogged drains are covered more often than people expect, but with conditions. American Home Shield's sample contract, for example, covers stoppages that can be cleared through an existing access point or clean-out, up to 100 feet, with no excavation. It excludes stoppages caused by tree roots, broken or collapsed lines, and lines outside the home's foundation. Choice's contract language similarly excludes root intrusion and stoppages from foreign objects. In practice, a snaked kitchen drain is a covered claim; a collapsed clay sewer line under the front yard almost never is.</p>
<h3>Slab leaks and pipes in concrete</h3>
<p>Many homes in the South and West sit on concrete slabs with water lines running underneath. When those pipes leak, the expensive part is getting to them. Home warranties treat slab leaks very differently: First American covers plumbing encased in concrete on its Essential and Premium homeowner plans (with a reported $500 or $1,000 concrete-access allowance), while other companies cap or exclude it - Choice, for example, limits access costs to $500. Even when the pipe repair is covered, the flooring you tear up to reach it usually isn't.</p>
<h3>What plumbing coverage usually excludes</h3>
<ul>
<li>Sewer and water lines outside the foundation, and damage from tree roots</li>
<li>Fixtures' cosmetic parts: tubs, sinks, shower enclosures, bases and tile</li>
<li>Water damage the leak causes - floors, drywall, ceilings, belongings (that's a homeowners insurance question)</li>
<li>Rust, corrosion and mineral build-up at some companies (Home Warranty of America reportedly covers rust- and corrosion-related failures up to $2,000)</li>
<li>Water softeners, filtration systems and water quality problems</li>
<li>Septic systems and well pumps unless you buy the add-on</li>
<li>Outdoor sprinkler systems and hose bibs at many companies</li>
</ul>
<blockquote><strong>Florida note:</strong> Florida's home warranty law (Chapter 634, Part II) says a contract may not exclude rust or corrosion unless it contributed to the failure, and requires conspicuous disclosure if a plan won't replace working HVAC components for compatibility or efficiency reasons. Our <a href="/articles/best-home-warranty-florida">Florida guide</a> covers the details.</blockquote>`,
  },
  {
    heading: "Does a home warranty cover water heaters?",
    body: `<p>Yes. The water heater is included on nearly every systems and combination plan - American Home Shield covers it even on the systems-only ShieldSilver, and Choice includes it on its Basic plan. A failed water heater is one of the most urgent claims a household files: Angi data (as reported by SoFi) put the average water heater <em>repair</em> at about $606, and a replacement commonly costs roughly $900-$1,800 for a tank unit and $1,400-$3,900 or more for a tankless unit.</p>
<table>
<thead><tr><th>Company</th><th>Tankless covered?</th><th>Water heater limit (as published or reported)</th></tr></thead>
<tbody>
<tr><td>First American</td><td>Yes - contracts say coverage "includes tankless water heaters"</td><td>$1,000 on Essential; no dollar limit on Premium (per NerdWallet)</td></tr>
<tr><td>American Home Shield</td><td>Yes - extended to tankless units and circulating pumps</td><td>Within plan limits; $1,500 if the heater also supplies a hydronic heating system</td></tr>
<tr><td>2-10</td><td>Yes - including power-vent and direct-vent units</td><td>Check contract; $1,500 for units supplying hydronic heat</td></tr>
<tr><td>Home Warranty of America</td><td>Yes, reportedly with a sub-limit</td><td>NerdWallet reports a $1,000 sub-limit for tankless units</td></tr>
<tr><td>Choice</td><td>Contract versions differ</td><td>$3,000 per item; sediment and reservoir tanks excluded</td></tr>
<tr><td>Select</td><td>Not confirmed</td><td>About $500 per item; Gold and Platinum Care only</td></tr>
<tr><td>The Home Service Club</td><td>Not confirmed</td><td>Item caps mostly $300-$2,000</td></tr>
</tbody>
</table>
<h3>What water heater coverage usually excludes</h3>
<ul>
<li><strong>Sediment build-up</strong> - the classic denial reason for tank heaters. Flushing the tank yearly helps prevent it.</li>
<li><strong>Insufficient capacity</strong> - a heater that's simply too small for your household isn't "broken."</li>
<li><strong>Venting, flues and code upgrades</strong> needed to install a new unit, such as new expansion tanks, seismic straps or venting changes, unless your plan covers code work.</li>
<li><strong>Solar water heaters</strong>, holding tanks and fuel storage tanks.</li>
<li><strong>Water damage</strong> from the leak itself.</li>
</ul>
<p>For a company-by-company comparison, see our <a href="/articles/best-home-warranty-for-water-heaters">best home warranty for water heaters</a> guide.</p>`,
  },
  {
    heading: "Does a home warranty cover electrical?",
    body: `<p>Yes. Systems and combination plans cover the home's interior electrical system: the main panel and sub-panels, breakers and fuses, hard-wired lines and wiring, outlets and switches. Many plans also include doorbells, ceiling fans, built-in exhaust fans and hard-wired smoke detectors - American Home Shield lists doorbells, ceiling fans and exhaust fans under electrical on all of its plans, while Select includes ceiling fans only on Platinum Care.</p>
<h3>What electrical coverage usually excludes</h3>
<ul>
<li><strong>Power surges and lightning</strong> - excluded at American Home Shield except through its electronics add-on, and in most First American contract forms</li>
<li><strong>Inadequate capacity</strong> - a panel too small for your load is a design limitation, not a failure</li>
<li><strong>Panel upgrades</strong> for an EV charger, heat pump or remodel - these are upgrades, not repairs</li>
<li><strong>Lighting fixtures, meter boxes and exterior lighting</strong></li>
<li><strong>Low-voltage systems</strong> - audio, video, computer, intercom, alarm and security wiring</li>
<li><strong>Generators and solar systems</strong></li>
<li><strong>Code corrections</strong> to bring old wiring up to current standards, unless your tier covers code and permits</li>
</ul>
<p>Most electrical repairs are small - a breaker, outlet or switch usually costs a few hundred dollars or less - so electrical coverage matters most in older homes, where a panel replacement can run roughly $800-$2,500 or more. That's also where limits matter: Select caps many items, including electrical, at about $500.</p>
<p class="cta-row"><a href="/articles/best-home-warranty-for-electrical-systems">→ Compare electrical coverage company by company</a></p>`,
  },
];
