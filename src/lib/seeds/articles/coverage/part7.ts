import type { ArticleSection } from "@/lib/config";

// Part 7: worked claim scenarios, how to check a contract, choosing coverage by
// home profile, and the state rules that affect coverage. Facts reuse limits
// established in parts 2-5 and our state guides (California Insurance Code
// §12740 et seq.; Texas Occupations Code ch. 1304 via TDLR; Florida Statutes
// ch. 634 Part II). Dollar amounts in scenarios are illustrations built from
// the cost ranges cited earlier, not quotes.
export const part7: ArticleSection[] = [
  {
    heading: "Eight real-world claims: covered or not?",
    body: `<p>Coverage rules make more sense with examples. Each scenario below uses typical costs cited earlier in this guide and a $100 service fee; your contract and local prices will differ.</p>
<h3>1. The AC stops cooling in July</h3>
<p>A technician finds a failed capacitor and low refrigerant on a 9-year-old system. The capacitor is a routine covered repair. The refrigerant depends on your sub-limit: with unlimited refrigerant (AHS ShieldPlatinum, First American Premium) you pay only the $100 fee; with a $10-per-pound limit, you pay the difference on every pound. If the technician notes a clogged filter and dirty coil, expect questions about maintenance - this is where service receipts pay for themselves.</p>
<h3>2. The water heater leaks onto the garage floor</h3>
<p>A 10-year-old tank water heater has rusted through. Under most plans the replacement is covered up to the limit, but some contracts treat rust and sediment as excluded deterioration, and code items - an expansion tank, seismic straps or new venting - may be on you unless your tier covers code work. The garage drywall and stored boxes ruined by the water are not a warranty matter.</p>
<h3>3. The refrigerator ice maker quits</h3>
<p>This is the claim most likely to surprise you. AHS's ShieldGold and ShieldPlatinum cover a built-in ice maker; Choice contract excerpts exclude ice makers and dispensers. Same appliance, same failure, opposite answers. If your refrigerator has a door dispenser, check this item specifically before you buy.</p>
<h3>4. A slab leak shows up on the water bill</h3>
<p>The pipe under the concrete slab is leaking. On a plan that covers plumbing encased in concrete (such as First American Essential and Premium), the leak repair is covered, with a concrete-access allowance. On many other plans, slab leaks are capped or excluded, and the flooring removed to reach the pipe is never covered. A homeowners policy may cover resulting water damage, depending on the policy.</p>
<h3>5. The electrical panel fails in a 1970s house</h3>
<p>A breaker panel stops working and the electrician says it has to be replaced - and local code now requires additional upgrades. The panel replacement is a covered failure up to the electrical limit (about $500 at Select, more at most others). The code upgrades are excluded unless your tier includes code coverage, and if you also want a bigger panel for an EV charger, that's an upgrade you pay for.</p>
<h3>6. The garage door won't open</h3>
<p>If the opener's motor has failed, it's covered on many plans. If a torsion spring snapped or a panel is bent, it usually isn't: AHS's sample contract covers the opener's motor unit only, not the door, springs or tracks.</p>
<h3>7. The kitchen drain backs up</h3>
<p>A plumber clears a stoppage through the cleanout - a covered claim on most plans that include stoppages. If the camera shows tree roots in the sewer line outside the house, the repair to that line is excluded at most companies.</p>
<h3>8. The roof leaks during a rainstorm</h3>
<p>With roof leak coverage (AHS ShieldPlatinum or an add-on elsewhere), a leak over a living area caused by wear may be repaired up to the cap - $400 to $1,600 depending on the company. If wind or hail caused the damage, it's an insurance claim. If the roof simply needs replacing, neither will pay.</p>
<p>Notice what decides each outcome: not the item, but the cause, the specific component and the limit. That's why a careful read of the contract before you buy is worth more than any marketing page.</p>`,
  },
  {
    heading: "How to check what your home warranty covers",
    body: `<p>Every company publishes sample contracts, and you can read the one for your state before paying anything. Here's a 15-minute process we use for every review:</p>
<ol>
<li><strong>Download the sample contract for your state.</strong> Contracts differ by state, and plan names can differ too. Look for "sample contract," "plan agreement" or "terms and conditions" on the company's website, and check the version date.</li>
<li><strong>Find the covered-items section for your plan.</strong> Note which items are listed under your tier, not just the category headings.</li>
<li><strong>Read the "not covered" list under each item you care about.</strong> This is where ice makers, sediment, refrigerant, stoppages and garage door parts are spelled out.</li>
<li><strong>Find the limits table.</strong> Write down the per-item limit for HVAC, refrigerator, water heater and plumbing, plus any aggregate limit.</li>
<li><strong>Search the document for these words:</strong> "pre-existing," "maintenance," "code," "permit," "access," "refrigerant," "cash" and "limit." Those searches surface most of the terms that cause denials.</li>
<li><strong>Check the waiting period and start date.</strong></li>
<li><strong>Read how replacements and cash payouts work</strong> - including whether cash is based on the company's cost or retail price.</li>
<li><strong>Check the service fee rules,</strong> including whether you pay the fee if the claim is denied, and whether one fee covers several visits for the same problem.</li>
<li><strong>Read the cancellation and renewal terms</strong> - refund formulas, cancellation fees and whether prices can rise at renewal.</li>
<li><strong>Ask the company in writing</strong> about anything unclear, and save the answer.</li>
</ol>
<blockquote><strong>Tip:</strong> Make a short list of your home's major equipment - the AC's age, the water heater type (tank or tankless), whether the refrigerator has an ice maker, and whether you have a slab foundation, well or septic system. Then check those items specifically. It turns a 30-page contract into a 10-line answer.</blockquote>
<p>When you're ready to file, our <a href="/articles/how-to-file-a-home-warranty-claim">step-by-step claim guide</a> explains how to describe the problem, what to document and how to escalate.</p>`,
  },
  {
    heading: "How to choose the right coverage for your home",
    body: `<p>The best coverage depends less on the company than on your house. Use this table to match your situation to the plan type and the terms to prioritize:</p>
<table>
<thead><tr><th>Your home</th><th>What to buy</th><th>Terms to prioritize</th></tr></thead>
<tbody>
<tr><td>Older home (systems 10+ years old)</td><td>Combination plan</td><td>High HVAC limit, refrigerant coverage, code and permit coverage</td></tr>
<tr><td>Newer home (under 2-3 years)</td><td>Usually skip, or appliances only after manufacturer warranties expire</td><td>Builder warranty and manufacturer warranties first</td></tr>
<tr><td>Appliances aging, systems newer</td><td>Appliance plan</td><td>Per-appliance limit of $2,000+; ice maker coverage</td></tr>
<tr><td>Systems aging, appliances newer</td><td>Systems plan</td><td>HVAC and water heater limits; stoppage coverage</td></tr>
<tr><td>Slab foundation</td><td>Plan that covers plumbing in concrete</td><td>Slab leak terms and concrete-access allowance</td></tr>
<tr><td>Well or septic system</td><td>Base plan + well or septic add-on</td><td>Add-on limit and what's excluded (piping, drilling, pumping)</td></tr>
<tr><td>Pool or spa</td><td>Base plan + pool add-on</td><td>Equipment limit; saltwater coverage if applicable</td></tr>
<tr><td>Tankless water heater</td><td>Plan that names tankless units</td><td>Tankless sub-limit</td></tr>
<tr><td>High-end or built-in appliances</td><td>Top tier or manufacturer plans</td><td>Appliance limit of $4,000-$7,000; cash-out terms</td></tr>
<tr><td>Rental property</td><td>Combination plan that allows rentals</td><td>Confirm rental eligibility; one number for tenants to call</td></tr>
</tbody>
</table>
<p>If the main goal is budget certainty on a house full of aging equipment, a combination plan with strong HVAC and appliance limits usually makes the most sense. If your equipment is new and you have savings, putting the premium into a repair fund may be the better deal - our <a href="/articles/is-a-home-warranty-worth-it">is a home warranty worth it</a> guide runs the numbers, and our <a href="/articles/how-much-does-a-home-warranty-cost">cost guide</a> compares prices and service fees.</p>`,
  },
  {
    heading: "State rules that change what a home warranty covers",
    body: `<p>Home warranties are regulated by states, not the federal government, and a few state laws directly shape coverage:</p>
<ul>
<li><strong>California</strong> regulates home warranties as "home protection contracts" under the Insurance Code (section 12740 and following). Companies need a license from the Department of Insurance, and contracts must clearly state each covered appliance, system and component. See our <a href="/articles/best-home-warranty-california">California guide</a>.</li>
<li><strong>Texas</strong> regulates residential service companies through the Texas Department of Licensing and Regulation under Occupations Code chapter 1304, which gives buyers a 30-day full-refund window and caps cancellation fees after that at $50. See our <a href="/articles/best-home-warranty-texas">Texas guide</a>.</li>
<li><strong>Florida</strong> regulates home warranty associations under Chapter 634, Part II. As noted above, a Florida contract may not exclude rust or corrosion unless it contributed to the failure, and must disclose conspicuously if it won't replace working HVAC components for compatibility or efficiency. See our <a href="/articles/best-home-warranty-florida">Florida guide</a>.</li>
</ul>
<p>Availability also varies: Choice isn't sold in Washington, American Home Shield isn't sold in Alaska or Hawaii, Select is reportedly unavailable in Nevada, Washington and Wisconsin, and First American is sold in about 35-37 states plus D.C. Our <a href="/articles/home-warranty-by-state">home warranty laws by state</a> hub covers the rest.</p>`,
  },
];
