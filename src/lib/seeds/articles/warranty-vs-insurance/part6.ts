import type { ArticleSection } from "@/lib/config";

// Part 6: six worked scenarios. Costs from 2025-2026 cost guides (Angi,
// HomeAdvisor, HomeGuide, Fixr) and III claim data; coverage logic from the
// HO 00 03 structure and typical home warranty contracts.
export const part6: ArticleSection[] = [
  {
    heading: "Six real-world scenarios: who pays, step by step",
    body: `<p>The map shows the rules; these scenarios show the money. Each assumes a $1,500 insurance deductible and a home warranty with a $125 service fee and a $3,000 per-item cap, unless noted. Costs are typical 2025-2026 figures.</p>
<h3>Scenario 1: The water heater tank splits overnight</h3>
<p>You wake up to an inch of water in the finished basement. The tank seam failed.</p>
<table>
<thead><tr><th>Cost</th><th>Amount</th><th>Who pays</th></tr></thead>
<tbody>
<tr><td>New water heater, installed</td><td>~$1,600</td><td>Home warranty (you pay the $125 fee). Insurance: no.</td></tr>
<tr><td>Water extraction and drying</td><td>~$2,500</td><td>Insurance (accidental discharge)</td></tr>
<tr><td>Replace drywall, baseboards and carpet</td><td>~$5,500</td><td>Insurance</td></tr>
<tr><td>Damaged stored belongings</td><td>~$1,000</td><td>Insurance (personal property)</td></tr>
</tbody>
</table>
<p><strong>With both:</strong> you pay $125 + $1,500 deductible = <strong>$1,625</strong>. <strong>Insurance only:</strong> $1,500 deductible + $1,600 heater = <strong>$3,100</strong>. <strong>Warranty only:</strong> $125 + $9,000 of damage = <strong>$9,125</strong>. The warranty-only homeowner is in serious trouble - which is why a home warranty is never a substitute for insurance.</p>
<h3>Scenario 2: The air conditioner dies in July</h3>
<p>Your 14-year-old AC's compressor fails. The contractor recommends replacement: about $6,000.</p>
<ul>
<li><strong>Insurance:</strong> nothing. Wear and tear and mechanical breakdown are excluded.</li>
<li><strong>Home warranty:</strong> pays up to its $3,000 HVAC cap; you pay the $125 fee plus the $3,000 balance - <strong>about $3,125</strong>, before any uncovered permits or modifications. A plan with a $5,000 HVAC cap would leave about $1,125.</li>
<li><strong>Equipment breakdown endorsement:</strong> likely denies, because the compressor failed from age rather than a sudden breakdown.</li>
<li><strong>Neither:</strong> <strong>$6,000</strong>.</li>
</ul>
<h3>Scenario 3: Lightning hits, and the AC and furnace control board are fried</h3>
<p>A storm sends a lightning surge through the house. The AC condenser and the furnace's control board are destroyed: about $7,000 in total.</p>
<ul>
<li><strong>Insurance:</strong> covers it - lightning is a covered peril. You pay the $1,500 deductible.</li>
<li><strong>Home warranty:</strong> typically denies - lightning and surges aren't wear and tear.</li>
<li><strong>Takeaway:</strong> this is pure insurance territory. File the claim.</li>
</ul>
<h3>Scenario 4: The basement drain backs up during a storm</h3>
<p>Heavy rain overwhelms the municipal sewer and wastewater comes up through the floor drain. Cleanup and repairs: about $8,000.</p>
<ul>
<li><strong>Standard insurance:</strong> excluded - water that backs up through sewers or drains.</li>
<li><strong>Water backup endorsement:</strong> covers it up to the endorsement limit (commonly $5,000-$25,000), minus the deductible.</li>
<li><strong>Home warranty:</strong> may cover clearing a stoppage in your own drain line, but not the cleanup, and not a backup caused by the city sewer.</li>
<li><strong>Takeaway:</strong> if you have a basement, the water backup endorsement may be the most valuable add-on you can buy.</li>
</ul>
<h3>Scenario 5: The kitchen sink drip you ignored</h3>
<p>A slow drip under the sink went unnoticed for months. Now the cabinet base and subfloor are rotted and there's mold: about $4,000.</p>
<ul>
<li><strong>Insurance:</strong> likely denied - deterioration, wet rot, mold and (in many insurers' forms) repeated seepage. Insurers may also cite neglect.</li>
<li><strong>Home warranty:</strong> may cover fixing the leaking trap or supply line (about $250), not the rot or mold.</li>
<li><strong>Takeaway:</strong> you pay nearly all of it. A $30 water leak sensor would likely have prevented it.</li>
</ul>
<h3>Scenario 6: The sewer line in the yard collapses</h3>
<p>Tree roots crush the clay sewer lateral between the house and the street. Excavation and replacement: about $7,000.</p>
<ul>
<li><strong>Standard insurance:</strong> excluded.</li>
<li><strong>Service line endorsement:</strong> pays up to its limit, often about $10,000, including excavation.</li>
<li><strong>Home warranty:</strong> covered only if you bought an exterior sewer line add-on, and subject to its limit.</li>
<li><strong>Takeaway:</strong> for about $20-$40 a year, a service line endorsement covers a failure that neither standard product touches.</li>
</ul>`,
  },
  {
    heading: "Where the line fell for real customers: cases from our review study",
    body: `<p>In October 2026 we analyzed 351 recent Trustpilot reviews of five major home warranty companies. Several described exactly the coverage boundary this guide maps - often learned the hard way. (Details are as reported by the reviewers.)</p>
<ul>
<li><strong>The AC that leaked into the wall.</strong> A First American customer in South Texas described an AC claim where, after an incomplete repair, water leaked through an interior wall and out through the brickwork. The warranty's job was the AC; the wall and brick damage was never going to be a warranty claim. That's a potential homeowners insurance question - if the policy treats it as sudden accidental discharge rather than gradual leakage.</li>
<li><strong>The refrigerator leak that stained the floor.</strong> Another First American customer said a refrigerator that repeatedly leaked permanently stained the kitchen tile. Again: the appliance is warranty territory, the floor is not.</li>
<li><strong>"Outside" drains.</strong> A Choice customer's roof drain claim was denied, and another's basement drain claim was denied because the drain was considered "outside" the covered plumbing. A Select customer described a crawl-space leak denied because it "wasn't in the house." Drains and lines at the edge of the home are exactly where home warranty coverage gets thin - and where a service line or water backup endorsement may be the better tool.</li>
<li><strong>The emergency plumber nobody reimbursed.</strong> An American Home Shield customer with an overflowing toilet waited four days without an assigned plumber, hired one, and was refused reimbursement because the work wasn't pre-authorized. If water had damaged the floor, that damage could have been an insurance claim regardless of the warranty dispute.</li>
<li><strong>The sold-but-not-serviced water softener.</strong> A Choice customer said a water softener package they'd been sold wasn't repaired when it needed service. Add-ons are only as good as their terms; read them like you'd read an endorsement.</li>
</ul>
<p>The lesson across these stories: when something leaks, think in two tracks at once. Call the home warranty company about the equipment, and - if there's damage to the home - document it and consider whether it's an insurance claim. Mitigate damage immediately either way; insurers can deny damage that got worse because you didn't act.</p>`,
  },
];

