import type { ArticleSection } from "@/lib/config";

// Part 6: the conditions behind "covered", real estate (1-year) warranties,
// builder warranties, and a who-pays routing guide. Facts: AHS waiting-period
// FAQ; First American start-date terms (Insurify / money.com 2026); seller
// coverage terms from First American/2-10/AHS pages; builder warranty 1-2-10
// structure (Bankrate, NewHomeSource); our review study (Oct 2026).
export const part6: ArticleSection[] = [
  {
    heading: "The fine print behind \"covered\": 10 conditions to check",
    body: `<p>Two plans can list the same items and still pay very differently. These are the contract terms that decide what you actually receive.</p>
<h3>1. Waiting period</h3>
<p>Most new home warranties don't cover anything for the first 30 days. American Home Shield's FAQ describes a 30-day wait from sign-up, with coverage starting at closing for real estate purchases. Some First American contracts let you set a start date up to 60 days out. A problem that starts during the waiting period is generally treated as pre-existing for good.</p>
<h3>2. Pre-existing conditions</h3>
<p>Problems that existed before coverage began are excluded almost everywhere. Some contracts soften this by covering pre-existing problems that couldn't have been detected by a visual inspection or simple mechanical test. This was the top denial reason in This Old House's 2026 survey (29%). A home inspection report or a technician's check-up near the start date is your best evidence.</p>
<h3>3. Maintenance requirements</h3>
<p>Contracts expect "proper maintenance," and companies can ask for proof. For HVAC, that means filter changes and ideally annual service; for water heaters, periodic flushing; for dryers, vent cleaning. Keep receipts and dated photos.</p>
<h3>4. Code upgrades, permits and modifications</h3>
<p>Replacing an old system often requires upgrades to meet current code - new electrical work, venting, pads, line sets, or carpentry to fit a new unit. Many base plans exclude these costs. Coverage where it exists is capped: AHS ShieldPlatinum includes $250 per term; First American's Advantage coverage on Essential and Premium reportedly combines code, permits, crane fees and concrete access under caps of $500 and $1,500.</p>
<h3>5. Access and restoration</h3>
<p>If a technician has to open a wall, ceiling or concrete floor to reach a covered pipe or duct, the access may be covered but restoring the finish usually isn't. Concrete access is a common sub-limit.</p>
<h3>6. Repair, replace or cash</h3>
<p>The company decides whether to repair or replace, and it can often offer cash instead of a replacement - usually based on its own negotiated cost, not the retail price you'd pay. In This Old House's survey, 15% of claims ended in a cash payout. In our own review study, low cash-out offers were one of the most common complaints.</p>
<h3>7. "Like quality" replacements</h3>
<p>Replacements are typically of similar features, efficiency and capacity - not the same brand, color or finish. Upgrades you choose are at your expense.</p>
<h3>8. Haul-away</h3>
<p>Removing the old unit may or may not be included. NerdWallet reports AHS includes haul-away of replaced systems and appliances; other companies cap or exclude it.</p>
<h3>9. Age and condition</h3>
<p>Most companies cover items regardless of age if they're working when coverage starts, and The Home Service Club makes a point of it. But older items are more likely to hit maintenance and pre-existing exclusions, and some contracts pay based on depreciated value - third-party reviews say Select replaces some items at depreciated value.</p>
<h3>10. Your own contractor</h3>
<p>Most plans require using the company's network. Some allow your own licensed contractor with prior approval, often with reimbursement at the company's rate. Paying someone first and asking for reimbursement later is a reliable way to get a claim denied.</p>`,
  },
  {
    heading: "What does a 1-year home warranty cover when you buy a house?",
    body: `<p>A "1-year home warranty" is usually a real estate home warranty: a plan bought at closing, often paid for by the seller as a concession, that covers the buyer's first year in the house. The coverage is the same type of systems and appliance coverage described above - but real estate plans have their own features:</p>
<ul>
<li><strong>Coverage starts at closing,</strong> with no 30-day waiting period at most companies.</li>
<li><strong>Plans and limits can differ from consumer plans.</strong> First American, for example, caps ductwork at $1,000 on real estate plans versus no limit on homeowner plans, and includes 100% refrigerant on its real estate plans.</li>
<li><strong>Pre-existing conditions are still excluded,</strong> though some real estate contracts cover problems that couldn't have been detected at inspection.</li>
<li><strong>The buyer can usually renew</strong> at consumer prices after the first year.</li>
</ul>
<h3>Seller coverage during the listing period</h3>
<p>Many real estate plans include free or low-cost <strong>seller coverage</strong> while the home is listed - for example, until closing, until the listing is canceled, or up to about 180 days, depending on the company. Seller coverage usually includes major systems (and sometimes appliances) with modest limits, reported at around $1,500-$2,000. It protects the sale if the furnace or water heater fails before closing. Our <a href="/articles/home-warranty-for-home-buyers-and-sellers">home warranty for buyers and sellers guide</a> covers who pays, how to negotiate it and which companies suit each side.</p>`,
  },
  {
    heading: "Builder warranty vs home warranty: what covers a new home?",
    body: `<p>If you buy a newly built home, you'll usually get a <strong>builder warranty</strong>. It's a different product from a home warranty, and the two cover different problems:</p>
<table>
<thead><tr><th></th><th>Builder warranty</th><th>Home warranty</th></tr></thead>
<tbody>
<tr><td>What it covers</td><td>Construction defects - workmanship, materials, systems installed wrong, structural defects</td><td>Breakdowns from normal wear and tear</td></tr>
<tr><td>Typical length</td><td>The common "1-2-10" structure: 1 year for workmanship and materials, 2 years for plumbing, electrical and HVAC systems, 10 years for major structural defects</td><td>1 year, renewable</td></tr>
<tr><td>Structure and foundation</td><td>Major structural defects covered (year 1-10, depending on terms)</td><td>Never covered</td></tr>
<tr><td>Appliances</td><td>Usually passed to manufacturer warranties</td><td>Covered on appliance and combination plans</td></tr>
<tr><td>Cost</td><td>Included in the home price</td><td>Premium plus service fee</td></tr>
</tbody>
</table>
<p><em>Sources: Bankrate and NewHomeSource on builder warranties. Terms vary by builder and state.</em></p>
<p>In the first year or two, a new home already has builder and manufacturer coverage, so a home warranty adds little. It becomes more useful once the builder's systems coverage and the appliances' manufacturer warranties expire - often around year two.</p>`,
  },
  {
    heading: "Who pays for what: warranty, insurance, builder or you?",
    body: `<p>When something breaks, the cause decides who pays - not the item. This routing guide covers the situations we see most:</p>
<table>
<thead><tr><th>What happened</th><th>Home warranty</th><th>Homeowners insurance</th><th>Other</th></tr></thead>
<tbody>
<tr><td>AC compressor wears out</td><td>Yes, up to the limit</td><td>No</td><td>Manufacturer parts warranty may still apply</td></tr>
<tr><td>Lightning strike fries the AC</td><td>No</td><td>Usually yes, minus the deductible</td><td></td></tr>
<tr><td>Water heater fails from age</td><td>Yes</td><td>No</td><td></td></tr>
<tr><td>Water heater bursts and floods the basement</td><td>The water heater</td><td>Often the sudden water damage</td><td>Flood insurance doesn't apply to internal leaks</td></tr>
<tr><td>Refrigerator stops cooling</td><td>Yes</td><td>No</td><td>Manufacturer warranty in year one; credit card extension</td></tr>
<tr><td>Food spoils after a refrigerator failure</td><td>Rarely</td><td>Sometimes, with a small limit</td><td>Some store and manufacturer plans include food spoilage</td></tr>
<tr><td>Pipe leaks behind a wall</td><td>The pipe repair</td><td>Sudden water damage, depending on the policy</td><td>Slow, long-term leaks are often excluded by both</td></tr>
<tr><td>Hail damages the roof</td><td>No</td><td>Yes, minus the deductible</td><td></td></tr>
<tr><td>Roof leaks from age</td><td>Only with roof leak coverage, up to a small cap</td><td>Usually no</td><td>Roofer's workmanship warranty, if recent</td></tr>
<tr><td>Foundation cracks in a 3-year-old home</td><td>No</td><td>Usually no (settling is excluded)</td><td>Builder structural warranty</td></tr>
<tr><td>Sewer line collapses in the yard</td><td>Rarely</td><td>Only with a service line endorsement</td><td>Utility or service line plans</td></tr>
<tr><td>Dishwasher broken during the first year</td><td>Possibly, but the maker pays first</td><td>No</td><td>Manufacturer warranty</td></tr>
</tbody>
</table>
<p>The short version: a home warranty pays to fix or replace things that wear out. Insurance pays for sudden damage. A builder warranty pays for construction defects in newer homes. Anything outside those three is your own budget - which is why many households pair a home warranty with an emergency repair fund.</p>`,
  },
];
