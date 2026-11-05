import type { ArticleSection } from "@/lib/config";

// Part 2: the 2024-2026 homeowners insurance market - premiums, nonrenewals,
// deductibles, roof/cosmetic changes, uninsured homes. Figures attributed to
// their sources (Bankrate, Insurify, S&P GMI, AM Best, ICE, NAIC, Treasury FIO,
// Senate Budget Committee, CDI, Citizens, J.D. Power, CFA, Fed SHED).
export const part2: ArticleSection[] = [
  {
    heading: "The 2026 homeowners insurance squeeze, in numbers",
    body: `<p>To understand why so many homeowners are now asking what their insurance actually covers, start with what it costs. Different trackers measure premiums differently, so we name the source for every figure.</p>
<table>
<thead><tr><th>Measure</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Average annual premium ($300,000 dwelling)</td><td>$2,424 (2026)</td><td>Bankrate</td></tr>
<tr><td>Average annual premium (Insurify method)</td><td>$2,948 in 2025, up 12%; $3,057 projected for 2026</td><td>Insurify</td></tr>
<tr><td>Premium growth since 2021</td><td>About 46%, versus 16% for overall inflation</td><td>Insurify</td></tr>
<tr><td>Approved rate increases</td><td>About 13.6% (2024), 6.3% (2025), 1.8% through July 2026</td><td>S&P Global Market Intelligence</td></tr>
<tr><td>Inflation-adjusted premium growth, 2018-2024</td><td>18.3% (Northeast) to 43.3% (West)</td><td>NAIC national market analysis (August 2026)</td></tr>
<tr><td>Insurance share of the average mortgage payment</td><td>9.6% - about $209 a month - a record</td><td>ICE Mortgage Monitor (Q2 2026)</td></tr>
<tr><td>Customers who had a premium increase</td><td>47%, the most in over a decade</td><td>J.D. Power 2025 Home Insurance Study</td></tr>
<tr><td>Most expensive states (Bankrate, 2026)</td><td>Nebraska $6,587; Louisiana $6,274; Florida $5,838; Oklahoma $4,695</td><td>Bankrate</td></tr>
</tbody>
</table>
<p>The headline story for 2026 is <strong>deceleration after a shock</strong>. Approved rate increases peaked in 2023-2024, when 33 states saw double-digit average increases, and have slowed sharply since. AM Best reported that homeowners insurers posted their first underwriting profit since 2019 in 2025. Florida, after its 2022-2023 legal reforms, has seen average rates flat to falling, and the number of policies in its state-backed insurer of last resort, Citizens, fell from about 1.42 million at its October 2023 peak to roughly 274,000 by June 2026.</p>
<p>But slower rate growth doesn't mean the pressure is off. S&P Global Market Intelligence notes the slowdown partly reflects insurers shifting cost to policyholders in other ways - higher deductibles, pricing by property age and condition, and tighter selection of which homes they'll insure. That's the part that matters most for this guide, because it changes what your insurance will pay when something in your home fails.</p>`,
  },
  {
    heading: "How insurers are quietly shifting costs to homeowners",
    body: `<p>Even where premiums have stabilized, the coverage you get for the money has changed. Four shifts stand out.</p>
<h3>1. Bigger deductibles</h3>
<p>Matic, which analyzes policies it places, reported average deductibles up about 22% in 2025. Rate Insurance's data on more than 265,000 policies show the share with deductibles under $2,500 falling from about 74% in 2018 to about 60% in 2025. Percentage deductibles for wind and hail - calculated as a share of your dwelling coverage rather than a flat dollar amount - are now common in hail- and hurricane-exposed states: Insurify found Texas policies average a 2.24% wind/hail deductible, about $7,761. Hurricane deductibles apply in 19 states plus Washington, D.C., typically 1% to 5% of insured value, according to the Insurance Information Institute.</p>
<p>A higher deductible lowers your premium, and that trade-off can make sense. But it means more of the small and mid-sized losses in your home are now entirely yours.</p>
<h3>2. Roofs paid at depreciated value</h3>
<p>More policies now pay for older roofs on an actual cash value (depreciated) basis or on a roof payment schedule that shrinks with age. ZestyAI, a vendor that analyzes insurers' rate filings, found that among the top 10 carriers, roof payment schedules went from about 10% of policies in 2015 to about 60% in 2025. Individual insurers trigger these schedules at roof ages from about 11 to 16 years.</p>
<h3>3. Cosmetic damage exclusions</h3>
<p>The same ZestyAI review found about half of the carriers it studied in catastrophe-exposed states use cosmetic damage exclusions, which can deny payment for hail dents that don't cause leaks. The Texas Department of Insurance warns homeowners that roofing discounts can come with these exclusions and that insurers can add exclusions at renewal.</p>
<h3>4. Fewer insurers willing to write - or renew - policies</h3>
<p>A December 2024 Senate Budget Committee staff report found nearly 2 million homeowners policies nonrenewed by insurers since 2018, with the national nonrenewal rate rising from 0.8% in 2018 to 1.06% in 2023 and the highest rates in Florida, Louisiana, North Carolina and California. A January 2025 Treasury Federal Insurance Office report found people in the highest climate-risk ZIP codes paid 82% more for coverage than those in the lowest-risk ZIP codes, and faced nonrenewal rates about 80% higher. (Industry groups disputed both reports' conclusions.)</p>
<p>California shows the extreme case. State Farm General stopped accepting new homeowners applications in May 2023 and later nonrenewed about 72,000 property policies. After the January 2025 Los Angeles wildfires - where insurers had paid more than $22 billion by early 2026, according to the California Department of Insurance - the state's FAIR Plan, the insurer of last resort, grew to more than 668,000 policies by December 2025, up 146% since September 2022, and required a $1 billion assessment on member insurers. California's Sustainable Insurance Strategy now lets insurers use catastrophe models in exchange for commitments to write more policies in wildfire-distressed areas, and FAIR Plan growth slowed in 2026.</p>`,
  },
  {
    heading: "Why this makes the warranty-versus-insurance question more urgent",
    body: `<p>Put those trends together and you get a homeowner who is paying more, carrying a higher deductible, and more worried about filing claims. That changes the calculus in three ways.</p>
<p><strong>First, small and mid-sized losses have moved out of insurance's reach.</strong> With a $2,500 deductible, a $2,000 water heater replacement was never going to be an insurance claim - but with deductibles rising, more failures fall below the line. And many of the most common home system problems were never covered by insurance at all, because standard policies exclude wear and tear and mechanical breakdown (more on that below).</p>
<p><strong>Second, claim frequency matters more.</strong> Many homeowners now avoid filing small claims for fear of a premium increase or nonrenewal. In ValuePenguin's 2025 survey, half of homeowners said they feared being dropped by their insurer, and 34% had cut coverage - mainly by raising deductibles - to save money. Filing a home warranty claim for a broken furnace doesn't touch your insurance claim history; filing an insurance claim can.</p>
<p><strong>Third, some homeowners are going without insurance entirely.</strong> The Consumer Federation of America estimated in 2024 that about 7.4% of homeowners - around 6.1 million homes - were uninsured, and the Federal Reserve's survey of households in 2025 found about 6% of homeowners uninsured, often because of cost. For that group, a home warranty is sometimes the only coverage they carry - which is dangerous, because a home warranty does not protect against fire, storms, theft or liability.</p>
<p>The rest of this guide maps exactly where each product's coverage starts and stops, so you can stop paying twice for some risks and stop going uncovered for others.</p>`,
  },
];
