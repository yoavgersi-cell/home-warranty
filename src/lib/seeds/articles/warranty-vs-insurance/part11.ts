import type { ArticleSection } from "@/lib/config";

// Part 11: myths vs facts, a 10-year cost comparison of coverage stacks
// (illustrative; inputs from Bankrate/Insurify premiums, endorsement cost
// ranges, typical warranty pricing and 2025-2026 repair costs), and glossary.
export const part11: ArticleSection[] = [
  {
    heading: "10 myths about home warranties and homeowners insurance",
    body: `<p><strong>Myth 1: "My homeowners insurance covers anything that breaks in my house."</strong><br>Fact: the standard policy form excludes wear and tear and mechanical breakdown. It covers damage from sudden events, not equipment that fails on its own.</p>
<p><strong>Myth 2: "A home warranty can replace homeowners insurance."</strong><br>Fact: a home warranty doesn't cover fire, storms, theft, water damage to your home or liability, and your lender almost certainly requires insurance. Warranty-only households are exposed to the largest losses a home can suffer.</p>
<p><strong>Myth 3: "If a pipe bursts, insurance pays to fix the pipe."</strong><br>Fact: the standard policy pays for the water damage and the cost to tear out and replace part of the building to reach the leak - but not for repairing the system the water escaped from. The pipe repair itself is often a home warranty item.</p>
<p><strong>Myth 4: "Flood insurance covers sewer backup."</strong><br>Fact: the Insurance Information Institute notes sewer backup is excluded from both standard homeowners and flood policies. You need a separate water backup endorsement.</p>
<p><strong>Myth 5: "Every homeowners policy excludes leaks that last more than 14 days."</strong><br>Fact: many insurers' own forms include a "continuous or repeated seepage" exclusion, but the ISO standard form dropped that specific exclusion in 1991, according to industry form analysts. Long-term leak damage is usually excluded anyway, under deterioration, rot, mold or neglect. Check your own policy.</p>
<p><strong>Myth 6: "Equipment breakdown coverage is the same as a home warranty."</strong><br>Fact: equipment breakdown endorsements typically cover sudden mechanical or electrical breakdown and usually exclude gradual wear and tear - the main reason older systems fail. They're cheaper and often have higher limits, but they're insurance claims and they won't replace a home warranty for aging equipment.</p>
<p><strong>Myth 7: "A home warranty pays for the water damage when my dishwasher leaks."</strong><br>Fact: home warranties exclude secondary damage. The warranty may fix the dishwasher; your insurance handles the floor, if the leak was sudden.</p>
<p><strong>Myth 8: "Filing small insurance claims is free money - that's what I pay premiums for."</strong><br>Fact: claims appear on your CLUE report for seven years and can raise your premium or affect renewal. Claims barely over your deductible often aren't worth filing.</p>
<p><strong>Myth 9: "Insurers deny 40% of claims."</strong><br>Fact: analyses of NAIC data show a large share of homeowners claims are closed without payment, but that category includes claims below the deductible, uncovered losses and duplicates, as the Insurance Information Institute points out. It's a reason to know your deductible and exclusions, not proof that every claim is denied.</p>
<p><strong>Myth 10: "I don't need to think about this - my lender handles insurance."</strong><br>Fact: your lender requires coverage that protects its collateral, not necessarily the coverage you need. Deductibles, endorsements, roof settlement terms and liability limits are your decisions.</p>`,
  },
  {
    heading: "What different coverage setups might cost over 10 years",
    body: `<p>To make the trade-offs concrete, here's an illustrative 10-year comparison for a 15-year-old, 2,000-square-foot home in a moderate-cost state, with original HVAC and a 9-year-old water heater. We assume homeowners insurance of about $2,500 a year in every setup (in line with national averages from Bankrate and Insurify) and the following failures over the decade, using 2025-2026 average costs:</p>
<ul>
<li>AC replacement (~$6,000) and furnace replacement (~$4,800)</li>
<li>Water heater replacement (~$1,600), which bursts and causes ~$9,000 of water damage</li>
<li>Four appliance repairs (~$250 each) and one refrigerator replacement (~$1,800)</li>
<li>One sewer backup (~$8,000 cleanup) and one buried sewer line failure (~$7,000)</li>
</ul>
<table>
<thead><tr><th>Setup (10 years)</th><th>Coverage cost</th><th>Out of pocket on failures</th><th>Approximate total (excluding base insurance)</th></tr></thead>
<tbody>
<tr><td>A. Insurance only ($1,500 deductible)</td><td>$0 extra</td><td>AC $6,000 + furnace $4,800 + heater $1,600 + water damage deductible $1,500 + appliances $1,000 + fridge $1,800 + sewer backup $8,000 + sewer line $7,000</td><td><strong>~$31,700</strong></td></tr>
<tr><td>B. Insurance + water backup + service line endorsements</td><td>~$1,000 (about $100 a year)</td><td>As A, but sewer backup and sewer line mostly covered (two more deductibles, ~$3,000)</td><td><strong>~$20,700</strong></td></tr>
<tr><td>C. B + home warranty ($650/yr, $125 fee, $3,000 HVAC cap)</td><td>~$7,500</td><td>Fees ~$1,000; HVAC balances over cap ~$4,800; fridge cash-out shortfall ~$1,400; deductibles ~$4,500</td><td><strong>~$19,200</strong></td></tr>
<tr><td>D. B + equipment breakdown endorsement (~$45/yr)</td><td>~$1,450</td><td>As B, but sudden breakdowns (the water heater, possibly the refrigerator) covered after ~$500 deductibles; age-related HVAC failures and repairs under the deductible not covered</td><td><strong>~$18,800-$20,100</strong> depending on how failures are classified</td></tr>
</tbody>
</table>
<p>This is an illustration, not a prediction - your home will have its own luck - but it shows three things clearly:</p>
<ul>
<li><strong>The cheapest gap-fillers matter most.</strong> Adding water backup and service line coverage saved about $11,000 in this scenario for about $1,000 over 10 years, because they covered two big failures that neither standard product touches.</li>
<li><strong>A home warranty's value depends on the timing of big failures and the cap.</strong> In this scenario, with two HVAC replacements, it came out modestly ahead. In a decade without major system failures, the warranty alone would cost about $6,500 more than going without.</li>
<li><strong>Equipment breakdown coverage is a strong value for sudden failures</strong>, but its exclusion for wear and tear limits its help with aging HVAC systems.</li>
</ul>
<p>Run your own version with your home's ages and your actual deductible. Our <a href="/articles/is-a-home-warranty-worth-it">worth-it guide</a> includes a 10-minute age audit that helps.</p>`,
  },
  {
    heading: "Glossary: insurance and home warranty terms",
    body: `<ul>
<li><strong>Actual cash value (ACV):</strong> replacement cost minus depreciation. Increasingly used for older roofs.</li>
<li><strong>Accidental discharge:</strong> the sudden escape of water or steam from a plumbing, heating, AC or sprinkler system or appliance - a covered peril for the resulting damage, not the system.</li>
<li><strong>Cash in lieu:</strong> a home warranty company's payment instead of a repair or replacement, usually calculated at the company's cost.</li>
<li><strong>CLUE report:</strong> the Comprehensive Loss Underwriting Exchange database of insurance claims on you and your property, typically covering seven years.</li>
<li><strong>Consequential (secondary) damage:</strong> damage caused by a failure - for example, a ceiling ruined by a leak. Covered by insurance if the cause is covered; excluded by home warranties.</li>
<li><strong>Cosmetic damage exclusion:</strong> an insurance endorsement that excludes damage affecting appearance but not function, such as hail dents on a metal roof.</li>
<li><strong>Coverage A, B, C:</strong> the dwelling, other structures, and personal property sections of a homeowners policy.</li>
<li><strong>Declarations page:</strong> the summary page of your policy listing limits, deductibles and endorsements.</li>
<li><strong>Deductible:</strong> the amount you pay on an insurance claim before coverage applies. Can be a flat amount or a percentage of dwelling coverage for wind, hail or hurricanes.</li>
<li><strong>Endorsement:</strong> an add-on that changes your insurance policy's coverage, such as water backup or equipment breakdown.</li>
<li><strong>Equipment breakdown coverage:</strong> an endorsement covering sudden mechanical or electrical breakdown of home systems and appliances.</li>
<li><strong>FAIR Plan:</strong> a state insurer of last resort for homes that can't get coverage in the regular market.</li>
<li><strong>HO-3:</strong> the most common homeowners policy type - open-perils coverage on the dwelling, named-perils coverage on personal property.</li>
<li><strong>Named perils / open perils:</strong> named-perils coverage lists the specific causes covered; open-perils coverage covers everything not specifically excluded.</li>
<li><strong>Nonrenewal:</strong> an insurer's decision not to renew your policy at the end of its term.</li>
<li><strong>Ordinance or law coverage:</strong> insurance for the extra cost of meeting current building codes when repairing covered damage.</li>
<li><strong>Replacement cost:</strong> the cost to repair or replace with like kind and quality, without deducting depreciation.</li>
<li><strong>Service fee (trade call fee):</strong> the amount you pay a home warranty company or its contractor for each claim or visit.</li>
<li><strong>Service line coverage:</strong> an endorsement covering buried utility lines on your property.</li>
<li><strong>Water backup coverage:</strong> an endorsement covering damage from water that backs up through sewers or drains or overflows from a sump.</li>
</ul>`,
  },
];
