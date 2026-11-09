import type { ArticleSection } from "@/lib/config";

// Part 3: appliances and "other" items (garage door openers, fans, central
// vacuum, etc.). Facts: AHS appliance pages and sample agreement; Choice
// contract excerpts and NerdWallet 2026 review; First American coverage-limit
// page; 2-10 help center; money.com / This Old House on Select; repair costs
// and life expectancies as published in our appliance insurance guide (Angi /
// HomeAdvisor 2025, HomeGuide, NAHB 2007, InterNACHI).
export const part3: ArticleSection[] = [
  {
    heading: "Does a home warranty cover appliances?",
    body: `<p>Yes - appliances are the second pillar of home warranty coverage, and they account for about 40% of claims in This Old House's 2026 customer survey. Appliance and combination plans typically cover:</p>
<ul>
<li>Refrigerator (often including a built-in ice maker - but not always)</li>
<li>Oven, range and cooktop</li>
<li>Dishwasher</li>
<li>Built-in microwave</li>
<li>Garbage disposal</li>
<li>Clothes washer and dryer</li>
<li>On some plans: trash compactor, built-in food center, instant hot water dispenser, wine cooler</li>
</ul>
<p>Two things trip people up. First, entry-level combination plans often leave out the most expensive appliances: Choice's Basic plan covers the oven, dishwasher, built-in microwave and disposal but adds the refrigerator, washer and dryer only on the Total plan; First American's tiers differ on laundry machines. Second, the per-appliance limit varies more than any other number in the industry.</p>
<h3>Appliance limits by company</h3>
<table>
<thead><tr><th>Company</th><th>Per-appliance limit (as published or reported)</th><th>Plans that include appliances</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/first-american">First American</a></td><td>$3,500 on Starter and Essential; $7,000 on Premium</td><td>All tiers include kitchen appliances; laundry on Essential and up</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>$2,000 (ShieldGold); $4,000 (ShieldPlatinum)</td><td>ShieldGold and ShieldPlatinum (ShieldSilver is systems only)</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to $5,000 per item; $15,000 per term in total</td><td>Premier and Premier Plus</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>$3,000 per covered item per 12 months</td><td>Basic (kitchen appliances, no refrigerator); Total (adds refrigerator, washer, dryer)</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>$2,000 per covered appliance; $50,000 per term in total (2-10 help center)</td><td>Appliance and combination plans</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Item caps mostly $300-$2,000; $6,000 or $9,000 per year</td><td>Standard and Comprehensive</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>About $500 per item</td><td>Bronze Care (appliances) and Platinum Care</td></tr>
</tbody>
</table>
<p><em>Sources: First American coverage-limit page; AHS plan pages; ConsumerAffairs and U.S. News on HWA; NerdWallet 2026 on Choice; 2-10 help center; This Old House on HSC; NerdWallet and This Old House 2026 on Select.</em></p>
<h3>What appliance repairs actually cost</h3>
<table>
<thead><tr><th>Appliance</th><th>Typical repair</th><th>Typical replacement</th><th>Typical life</th></tr></thead>
<tbody>
<tr><td>Refrigerator</td><td>~$200-$300 (more for sealed-system work)</td><td>~$600-$2,300</td><td>~13 years</td></tr>
<tr><td>Dishwasher</td><td>~$160-$300</td><td>~$400-$1,200</td><td>~9 years</td></tr>
<tr><td>Washer</td><td>~$50-$450</td><td>Pair ~$1,000-$2,300</td><td>Often 10+ years</td></tr>
<tr><td>Dryer</td><td>~$100-$400</td><td>(see pair)</td><td>~13 years</td></tr>
<tr><td>Oven or range</td><td>~$100-$500</td><td>~$600-$1,300</td><td>~13-17 years</td></tr>
<tr><td>Microwave</td><td>Often not worth repairing</td><td>~$100-$600</td><td>~9 years</td></tr>
</tbody>
</table>
<p><em>Repair costs: Angi / HomeAdvisor (2025). Replacement prices: HomeGuide. Life expectancy: NAHB (2007) and InterNACHI.</em></p>
<p>Compare those numbers to the limits above. A $500 cap covers most single repairs but not a replacement refrigerator. A $2,000 cap covers almost any standard appliance. Limits of $3,500-$7,000 matter mainly for high-end and built-in appliances, where a single refrigerator can cost more than $5,000.</p>`,
  },
  {
    heading: "Appliance by appliance: what's covered and what isn't",
    body: `<h3>Refrigerator</h3>
<p><strong>Usually covered:</strong> compressor, condenser, evaporator, fans, thermostats, defrost system, door gaskets at some companies, and the control board. AHS covers the built-in ice maker on ShieldGold and ShieldPlatinum, and NerdWallet notes it covers multiple refrigerators.</p>
<p><strong>Often excluded:</strong> ice makers, ice crushers and water dispensers (Choice contract excerpts exclude them), shelves, bins, handles, lights, and the food that spoiled. Freestanding second refrigerators and standalone freezers usually need an add-on. Ice makers matter: they're the most commonly reported refrigerator problem in Consumer Reports' surveys, affecting about 19% of refrigerators.</p>
<h3>Oven, range and cooktop</h3>
<p><strong>Usually covered:</strong> bake and broil elements, igniters, burners, surface units, control boards and switches, and the self-cleaning mechanism at many companies.</p>
<p><strong>Often excluded:</strong> glass cooktop surfaces (treated as cosmetic at some companies), clocks and timers that don't affect cooking, racks, knobs, rotisseries, interior lining and lights. High-end ranges may hit the limit quickly.</p>
<h3>Dishwasher</h3>
<p><strong>Usually covered:</strong> pump, motor, control board, door latch, heating element, timer and soap dispenser at most companies.</p>
<p><strong>Often excluded:</strong> racks, baskets, rollers and the damage a leak does to your floor. Dishwashers have the shortest life expectancy of the major kitchen appliances, about nine years, which makes them a frequent claim. See our <a href="/articles/best-home-warranty-for-dishwashers">dishwasher coverage guide</a>.</p>
<h3>Built-in microwave</h3>
<p><strong>Usually covered:</strong> built-in and over-the-range units - magnetron, door switches and control panel.</p>
<p><strong>Often excluded:</strong> countertop microwaves, trim kits, shelves and lights.</p>
<h3>Garbage disposal</h3>
<p><strong>Usually covered:</strong> the unit itself, and many companies replace rather than repair it.</p>
<p><strong>Often excluded:</strong> jams caused by foreign objects. Watch the cash-out amount: in our review study, one customer was offered $75 toward a disposal that cost $300-$450 to replace with a plumber's installation.</p>
<h3>Washer and dryer</h3>
<p><strong>Usually covered:</strong> motors, pumps, belts, bearings, timers, control boards, door locks, heating elements and thermal fuses.</p>
<p><strong>Often excluded:</strong> lint screens, knobs and dials, plastic mini-tubs, and dryer vent cleaning. Clean the dryer vent every year: lint build-up is both a fire risk and a common reason dryer claims are denied for neglect. Laundry machines are often only on the higher tier, so check before you buy.</p>
<p class="cta-row"><a href="/articles/best-appliance-insurance">→ Compare every kind of appliance protection, including store and credit card plans</a></p>`,
  },
  {
    heading: "Other items: garage doors, fans, vacuums and more",
    body: `<p>Beyond the core systems and appliances, plans differ most on a group of smaller items. These are the ones customers most often assume are covered:</p>
<table>
<thead><tr><th>Item</th><th>How it's usually handled</th></tr></thead>
<tbody>
<tr><td>Garage door opener</td><td>Covered on many plans - but only the motor unit. AHS's sample contract excludes doors, hinges, springs, tracks, rollers and guides; Select includes openers on Platinum Care only. First American Premium reportedly covers more of the garage door system.</td></tr>
<tr><td>Ceiling fans</td><td>Covered on all AHS plans and on Select Platinum Care; light kits and remote controls commonly excluded.</td></tr>
<tr><td>Doorbells</td><td>Standard hard-wired doorbells are covered on some plans (AHS includes them); video and smart doorbells generally aren't.</td></tr>
<tr><td>Smoke detectors</td><td>Hard-wired detectors appear on some comprehensive tiers (The Home Service Club Comprehensive); battery units aren't covered.</td></tr>
<tr><td>Central vacuum</td><td>Included on some higher tiers (First American Premium, HSC Standard) or as an add-on (Choice, Select).</td></tr>
<tr><td>Whirlpool bath</td><td>Motor and pump assembly on some plans; the tub itself isn't.</td></tr>
<tr><td>Attic and whole-house exhaust fans</td><td>Included on some higher tiers, such as The Home Service Club Comprehensive.</td></tr>
<tr><td>Sump pump</td><td>Varies. Some plans include sump pumps inside the foundation; Choice and Select sell them as add-ons (Choice reportedly about $3.33/month with a $3,000 cap).</td></tr>
<tr><td>Thermostats</td><td>Standard thermostats are covered as part of heating and cooling; smart thermostats may be limited to the cost of a standard unit.</td></tr>
</tbody>
</table>
<p>If a plan's marketing page lists a total number of covered items, treat it as a rough guide only. Companies count differently - one may count "plumbing" as one item and another may count toilets, faucets and stoppages separately - and we found companies' own pages giving different counts for the same plan. The sample contract's list of covered components is the only count that matters.</p>`,
  },
];
