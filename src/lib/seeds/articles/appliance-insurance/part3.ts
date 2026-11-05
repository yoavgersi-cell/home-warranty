import type { ArticleSection } from "@/lib/config";

// Part 3: what appliances cost to repair and replace, how long they last, how
// often they fail, and the break-even math. Costs from Angi/HomeAdvisor and
// HomeGuide; lifespans from NAHB (2007) and InterNACHI; failure rates from
// Consumer Reports survey data as reported; service contract pricing from
// WarrantyWeek (2026); CPI context from BLS via Appliance News / OpenBrand.
export const part3: ArticleSection[] = [
  {
    heading: "How much do appliance repairs and replacements cost?",
    body: `<p>Whether any protection is worth buying comes down to three numbers: what a repair costs, what a replacement costs, and how likely you are to need either. Here are typical figures:</p>
<table>
<thead><tr><th>Appliance</th><th>Typical repair cost</th><th>Typical replacement price</th><th>Typical life expectancy</th></tr></thead>
<tbody>
<tr><td>Refrigerator</td><td>~$200-$300 (more for sealed-system work)</td><td>~$600-$2,300</td><td>~13 years</td></tr>
<tr><td>Dishwasher</td><td>~$160-$300</td><td>~$400-$1,200</td><td>~9 years</td></tr>
<tr><td>Washer</td><td>~$50-$450</td><td>Washer and dryer pair ~$1,000-$2,300</td><td>Sources vary (often 10+ years)</td></tr>
<tr><td>Dryer</td><td>~$100-$400</td><td>(see pair above)</td><td>~13 years</td></tr>
<tr><td>Oven or range</td><td>~$100-$500</td><td>~$600-$1,300</td><td>~13-17 years (gas ranges ~15)</td></tr>
<tr><td>Microwave</td><td>Often not worth repairing</td><td>~$100-$600</td><td>~9 years</td></tr>
</tbody>
</table>
<p><em>Repair costs: Angi / HomeAdvisor (2025). Replacement prices: HomeGuide. Life expectancy: National Association of Home Builders study (2007) and InterNACHI's life expectancy chart. Repair technicians typically charge about $40-$120 an hour plus a trip fee.</em></p>
<p>Prices have moved in an unusual direction recently. Despite tariffs on appliances' steel content since June 2025 - applied to an appliance's full value from April 2026 - the consumer price index for major appliances was down about 4.1% year over year as of July 2026, according to trade reporting on Bureau of Labor Statistics data. Replacement is not getting more expensive across the board; repair parts and labor are a different story, with some manufacturers reporting longer-than-usual parts lead times.</p>`,
  },
  {
    heading: "How often do appliances break down?",
    body: `<p>Consumer Reports' survey research, as reported in its extended-warranty coverage, found that within about five years of purchase roughly <strong>40% of refrigerators, 30% of dishwashers and 25% of ranges</strong> needed a repair. (These figures come from older surveys; reliability varies widely by brand and type.)</p>
<p>A few patterns from Consumer Reports' reliability research are worth knowing:</p>
<ul>
<li><strong>Ice makers and dispensers</strong> are the most commonly reported refrigerator problem - about 19% of refrigerators in its surveys had ice-making trouble.</li>
<li><strong>French-door refrigerators</strong> tend to score high on owner satisfaction but poorly on predicted reliability compared with simpler designs.</li>
<li><strong>Brand matters.</strong> Consumer Reports' 2025 brand ratings placed brands such as Bosch and Miele among the most reliable for dishwashers, while some popular brands scored lower in specific categories.</li>
</ul>
<p>The practical takeaway: protection is most valuable on <strong>complex, expensive appliances with a history of problems</strong> - a large refrigerator with an ice maker - and least valuable on simple, cheap ones such as a basic microwave.</p>`,
  },
  {
    heading: "Is appliance protection worth it? The break-even math",
    body: `<p>Here's the honest version. On average, protection costs more than it pays out - that's how the businesses stay profitable. Consumer Reports found in its surveys that people who skipped an extended warranty on a major appliance spent a median of only about $26 more on repairs than the plan would have cost, and that repairs under a plan were unreasonably delayed more often than repairs people paid for themselves (17% versus 9% in its 2018 data). The Federal Trade Commission's consumer guidance makes a similar point: a plan isn't good value if it doesn't add meaningful coverage beyond the warranty you already have, and you may be better off putting the money aside.</p>
<p>But "on average" isn't your situation. Protection makes sense when a large, unexpected bill would hurt - or when you'd file several claims. Some worked examples:</p>
<table>
<thead><tr><th>Situation</th><th>Option</th><th>Cost</th><th>What it protects against</th><th>Our read</th></tr></thead>
<tbody>
<tr><td>New $600 dishwasher</td><td>5-year store plan</td><td>~$150 (Home Depot price band $550-$699.99)</td><td>Repairs in years 2-5; a typical repair is ~$160-$300</td><td>Usually skip - use the manufacturer warranty plus a credit card extension, and save the $150</td></tr>
<tr><td>New $2,500 refrigerator with ice maker</td><td>5-year store plan</td><td>~$295 (price band $2,000-$2,999.99)</td><td>Repairs in years 2-5 on a repair-prone design; sealed-system and board repairs can run several hundred dollars or more</td><td>Reasonable if a $500+ repair would strain your budget</td></tr>
<tr><td>Five appliances, 8-12 years old</td><td>Home warranty appliance or combo plan</td><td>~$500-$700/year plus ~$100 per claim</td><td>Wear-and-tear failures across all five, subject to per-appliance limits</td><td>Often worth it - several aging appliances is the home warranty's best use case</td></tr>
<tr><td>Newer appliances, healthy savings</td><td>Equipment breakdown endorsement</td><td>~$25-$50/year</td><td>Sudden breakdowns above the $500 deductible (not wear)</td><td>A cheap backstop; check whether your insurer offers it</td></tr>
<tr><td>High-end or built-in kitchen</td><td>Manufacturer plan or premium-brand service plan</td><td>Varies</td><td>Repairs by authorized technicians with brand parts</td><td>Home warranty limits and cash-outs often fall short here</td></tr>
</tbody>
</table>
<p>A simple test: <strong>if you'd pay for a $300-$500 repair from savings without stress, self-insuring is usually the better deal on a single appliance.</strong> If several appliances are aging at once, or a surprise bill would go on a credit card, protection - usually a home warranty - starts to earn its cost. Our <a href="/articles/is-a-home-warranty-worth-it">home warranty worth-it guide</a> runs the full math, including the age audit.</p>`,
  },
];
