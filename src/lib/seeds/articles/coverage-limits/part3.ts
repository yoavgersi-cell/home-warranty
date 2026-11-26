import type { ArticleSection } from "@/lib/config";

// Part 3: limits vs real 2026 costs, the refrigerant math, how replacements
// and cash-outs are valued, and the sub-limits that bite. Costs: Angi 2026
// (AC, furnace, water heater repair, sewer line, R-410A, R-454B recharge),
// Angi 2025 data (R-22), Fixr 2026 (AC repair, heat pump repair/replace,
// tankless repair), This Old House 2026 (appliance repair; heat pump avg),
// NerdWallet 2026 (tank water heater replacement), Angi 2026 (dishwasher
// installation), HomeWyse Jan 2026 (garage door opener), Inch Calculator 2026
// (panel). Researched November 2026.
export const part3: ArticleSection[] = [
  {
    heading: "Are home warranty limits high enough? Limits vs. real 2026 costs",
    body: `<p>A limit only means something next to a price. The table below sets typical 2026 repair and replacement costs (installed, parts and labor) against the per-item limits of the plans we track. Repairs are where most claims land, and almost every limit covers them. Replacements are where the gaps open up.</p>
<table>
<thead><tr><th>Item</th><th>Typical repair</th><th>Typical replacement</th><th>Covered in full under...</th></tr></thead>
<tbody>
<tr><td>Central AC</td><td>$250-$700 (avg ~$375)</td><td>Avg ~$6,000; most $3,900-$8,100</td><td>Repairs: every plan. Replacement: First American; sometimes AHS/2-10 ($5,000)</td></tr>
<tr><td>Gas furnace</td><td>About $130-$500</td><td>Avg ~$4,800; gas units $3,800-$10,000</td><td>Lower-cost replacements under $5,000 limits; First American has no dollar limit</td></tr>
<tr><td>Heat pump</td><td>$150-$650 (avg ~$400)</td><td>Avg ~$8,350 (Fixr); ~$10,600 (This Old House)</td><td>Rarely in full except at First American</td></tr>
<tr><td>Tank water heater</td><td>Avg ~$616</td><td>About $900-$2,500</td><td>Most plans; watch $1,000 water heater limits (2-10, FA Essential)</td></tr>
<tr><td>Tankless water heater</td><td>$100-$650</td><td>About $1,200-$5,500</td><td>Often not in full: $1,000 tankless caps at HWA</td></tr>
<tr><td>Refrigerator</td><td>About $200-$500 (avg ~$400)</td><td>$600-$2,300 typical; up to $7,000 high-end</td><td>Typical models under $2,000-$3,000 limits; high-end only at FA Premium/AHS Platinum</td></tr>
<tr><td>Washer or dryer</td><td>About $100-$650 (avg ~$300)</td><td>Roughly $450-$2,300 for the unit</td><td>Most plans except about $500 caps</td></tr>
<tr><td>Dishwasher</td><td>About $100-$300</td><td>Installed avg ~$1,200</td><td>Most plans except about $500 caps</td></tr>
<tr><td>Garage door opener</td><td>$75-$300</td><td>About $450-$765</td><td>Nearly all plans that cover it</td></tr>
<tr><td>Sewer line</td><td>About $1,400-$5,300 (avg ~$3,300)</td><td>About $3,000-$10,000</td><td>Usually an add-on with low caps; full replacement rarely covered</td></tr>
<tr><td>Electrical panel</td><td>-</td><td>About $2,200-$6,200 (avg ~$3,600)</td><td>Panel replacement is usually excluded or capped</td></tr>
</tbody>
</table>
<p><em>Sources: Angi 2026 cost guides (AC, furnace, water heater repair, sewer line, dishwasher installation); Fixr 2026 (AC, heat pump, tankless repair); This Old House 2026 (appliance repair, heat pump); NerdWallet 2026 (water heater replacement); HomeWyse, January 2026 (garage door opener); Inch Calculator 2026 (panel). Local prices vary widely.</em></p>
<p>The pattern is clear: <strong>home warranty limits comfortably cover repairs, mostly cover appliance replacements, and often fall short on HVAC replacements.</strong> That's not a reason to skip a warranty - repairs are far more common than replacements, and even a partial payment on a $7,000 AC replacement is worth a lot - but it's the reason the HVAC limit should be the first number you check, especially if your system is more than 10 years old.</p>`,
  },
  {
    heading: "Three worked examples: how a limit changes your bill",
    body: `<p>Here's what three common claims would cost you under different limits. Each assumes a covered failure, a $100 service fee and no exclusions.</p>
<h3>1. A 13-year-old AC needs replacing: $7,500 installed</h3>
<table>
<thead><tr><th>Limit</th><th>Plan pays</th><th>You pay (incl. $100 fee)</th></tr></thead>
<tbody>
<tr><td>$2,000</td><td>$2,000</td><td>$5,600</td></tr>
<tr><td>$3,000 (Choice)</td><td>$3,000</td><td>$4,600</td></tr>
<tr><td>$5,000 (AHS, 2-10)</td><td>$5,000</td><td>$2,600</td></tr>
<tr><td>No dollar limit (First American)</td><td>$7,500, less excluded items</td><td>$100 plus any code, permit or crane costs beyond the Advantage allowance</td></tr>
</tbody>
</table>
<h3>2. A refrigerator's sealed system fails: $1,400 repair</h3>
<p>Under a $500 cap, you pay $100 plus $900. Under a $2,000, $3,000, $3,500 or higher cap, you pay only the $100 fee. This is where low-limit plans hurt most: a sealed-system repair is a routine claim, not a catastrophe, and it still blows through a $500 cap.</p>
<h3>3. A tankless water heater needs replacing: $3,200 installed</h3>
<p>Under a $1,000 tankless sub-limit, you pay $100 plus $2,200. Under a plan that treats the tankless unit like any other covered item with a $3,000 limit, you pay $100 plus $200. If you own a tankless heater, look for the word "tankless" in the limits section - it's one of the most common hidden sub-limits.</p>`,
  },
  {
    heading: "How do refrigerant limits work?",
    body: `<p>Refrigerant is the sub-limit homeowners most often miss, and it's getting more important. Many plans pay $10 per pound of refrigerant, counted inside the HVAC limit. Installed refrigerant costs far more than that:</p>
<table>
<thead><tr><th>Refrigerant</th><th>Typical installed price per pound</th><th>Where you'll find it</th></tr></thead>
<tbody>
<tr><td>R-410A</td><td>$40-$75 (avg about $60)</td><td>Most AC systems installed about 2010-2024</td></tr>
<tr><td>R-454B</td><td>Around $80; about $30-$110 by city</td><td>Many new systems since 2025</td></tr>
<tr><td>R-22</td><td>Avg about $125; $50-$250</td><td>Systems installed before about 2010</td></tr>
</tbody>
</table>
<p><em>Sources: Angi R-410A price guide (2026 data), Angi AC recharge guide (2026), Angi R-22 guide (2025 data).</em></p>
<p><strong>The math:</strong> a repair that needs 5 pounds of R-410A at $60 a pound costs $300 in refrigerant. Under a $10-per-pound limit, the plan pays $50 and you pay $250 on top of the service fee. On an R-22 system the gap is larger: 5 pounds at $125 is $625, of which the plan pays $50. Plans with unlimited refrigerant (AHS ShieldPlatinum, First American Premium, or as an add-on at AHS and 2-10) close that gap. If your AC is more than a few years old, refrigerant coverage is worth pricing - our <a href="/articles/r-410a-phase-out-home-warranty">R-410A phase-out guide</a> explains why prices are rising.</p>`,
  },
  {
    heading: "How are replacements and cash payouts valued?",
    body: `<p>Most contracts let the company choose between repairing, replacing, or paying you cash instead ("cash in lieu"). When it pays cash, the formula in the contract decides how much - and it's never retail price. Here is what each company's materials say:</p>
<table>
<thead><tr><th>Company</th><th>Cash-in-lieu basis</th><th>What it means for you</th></tr></thead>
<tbody>
<tr><td>First American</td><td>Negotiated supplier rates, by mutual agreement</td><td>Below retail, but based on a new equivalent item</td></tr>
<tr><td>American Home Shield</td><td>What AHS would expect to pay</td><td>Can be "substantially less than retail," per its sample agreement</td></tr>
<tr><td>Choice</td><td>Choice's actual cost (some states: wholesale; California excludes shipping, tax, installation)</td><td>Below retail; you may pay delivery and installation</td></tr>
<tr><td>Home Warranty of America</td><td>HWA's actual cost</td><td>Below retail</td></tr>
<tr><td>The Home Service Club</td><td>Wholesale cost, excluding shipping, tax and installation</td><td>Below retail; item can't be claimed again for 12 months after a payout</td></tr>
<tr><td>Select</td><td>Depreciated value, at Select's discretion</td><td>Can be a small fraction of the cost of a new item</td></tr>
<tr><td>2-10</td><td>Not found in published materials</td><td>Ask before you buy</td></tr>
</tbody>
</table>
<p>Three practical points follow. First, a cash offer is usually negotiable only in the sense that you can ask the company to show its math - request the model it priced and the source. Second, before cashing a check, read the endorsement: some checks say cashing it closes the claim. Third, the depreciated-value basis is the one to avoid if you're buying a warranty mainly for big replacements; on an older appliance, depreciation can wipe out most of the payout.</p>
<p>California is a partial exception: the Department of Insurance's filing checklist for home protection contracts says benefits are limited to repair or replacement services, not cash payments to the contract holder (California Insurance Code section 12740). If you live in California, ask how a company's California agreement handles items it can't replace.</p>`,
  },
  {
    heading: "The sub-limits that catch homeowners out",
    body: `<p>Beyond refrigerant, these are the sub-limits and exclusions that most often turn a "covered" claim into a partial one. Each can add hundreds or thousands of dollars to a replacement.</p>
<table>
<thead><tr><th>Sub-limit or exclusion</th><th>Why it matters</th><th>How companies handle it</th></tr></thead>
<tbody>
<tr><td>Code violations and permits</td><td>Replacing old HVAC or a water heater often requires code upgrades: venting, pads, electrical, expansion tanks</td><td>AHS Platinum $250; First American Advantage $500-$1,000; Choice and Select exclude on homeowner plans</td></tr>
<tr><td>Modifications to fit a new unit</td><td>A new furnace or AC rarely fits an old space exactly: ductwork transitions, carpentry, line sets</td><td>Usually bundled with code coverage; often excluded</td></tr>
<tr><td>Access ("return to rough finish")</td><td>Opening walls, floors or concrete to reach a pipe or line</td><td>2-10: $1,000; First American includes concrete access in Advantage; many plans exclude restoring finishes</td></tr>
<tr><td>Crane and equipment</td><td>Rooftop units often need a crane</td><td>First American Advantage; excluded at many companies</td></tr>
<tr><td>Haul-away of old equipment</td><td>Disposal can cost $50-$200+</td><td>AHS pays to remove defective equipment on an approved replacement; Choice excludes on homeowner plans</td></tr>
<tr><td>Tankless, boiler, steam and geothermal</td><td>Expensive equipment with its own lower caps</td><td>2-10: $1,500 hydronic/steam; HWA: $1,000 tankless, $1,500 some heating</td></tr>
<tr><td>Rust and corrosion</td><td>Common cause of plumbing and water heater failure</td><td>HWA: $2,000 cap; Florida contracts can't exclude it unless it contributed to the failure (Fla. Stat. 634)</td></tr>
</tbody>
</table>
<p>Our <a href="/articles/home-warranty-claim-denied">claim denial guide</a> covers the other side of the coin - exclusions that stop a claim entirely - and our <a href="/articles/best-home-warranty-for-older-homes">older homes guide</a> explains why code coverage matters most in houses built before 1990.</p>`,
  },
];
