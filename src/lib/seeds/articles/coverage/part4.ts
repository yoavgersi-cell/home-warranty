import type { ArticleSection } from "@/lib/config";

// Part 4: add-ons, exclusions, and the structural items people ask about most
// (roof, foundation, mold, sewer, septic, pools). Facts: AHS add-ons page and
// plan pages; NerdWallet 2026 add-on prices for Choice and Select; This Old
// House 2026 add-on ranges; 2-10 well pump page and sample agreements; US News
// and NerdWallet on HWA add-on caps; ConsumerAffairs 2026 on roofs/sewers.
export const part4: ArticleSection[] = [
  {
    heading: "Home warranty add-ons: optional coverage and what it costs",
    body: `<p>Add-ons fill the gaps for equipment that not every home has. They're usually sold only with a base plan, priced per item, and come with their own (often lower) limits. Here's what's typically available:</p>
<table>
<thead><tr><th>Add-on</th><th>What it covers</th><th>Reported prices and limits</th></tr></thead>
<tbody>
<tr><td>Pool and spa equipment</td><td>Pumps, motors, filters, heaters, timers - not the shell, liner or cover</td><td>Select ~$6-$8.33/mo; 2-10 up to $3,000 per term; HWA $1,000 freshwater / $1,500 saltwater</td></tr>
<tr><td>Well pump</td><td>The pump only - not the well, casing, piping or pressure switches</td><td>Select ~$3-$3.33/mo; AHS reportedly $1,500 cap; 2-10 limits reported at $500-$1,500</td></tr>
<tr><td>Septic system</td><td>Tank, pump and lines; pumping often separately capped</td><td>Roughly $4-$15/mo industry-wide; Choice septic pumping reportedly $250; HWA requires a septic certification within 90 days</td></tr>
<tr><td>Limited roof leak</td><td>Repair of leaks over occupied living areas - not replacement or storm damage</td><td>AHS ShieldPlatinum includes up to $1,000; Choice ~$5.83/mo, $500 cap; 2-10 $1,000; HWA $1,600; Select's promotional roof coverage reportedly ~$400</td></tr>
<tr><td>Sump pump</td><td>Permanently installed pump</td><td>Choice ~$3.33/mo, $3,000 cap (NerdWallet 2026)</td></tr>
<tr><td>Second refrigerator / standalone freezer</td><td>Additional units beyond the kitchen refrigerator</td><td>Choice second refrigerator ~$3.33/mo</td></tr>
<tr><td>Guest unit</td><td>Systems and appliances in a separate unit under 750 sq ft (definitions vary)</td><td>Offered by AHS and others; prices vary widely by source</td></tr>
<tr><td>Electronics</td><td>TVs, computers and other devices; surge protection</td><td>AHS electronics add-on: $2,000 per claim, $5,000 total</td></tr>
<tr><td>Water softener</td><td>Softener unit</td><td>Offered by some companies, such as The Home Service Club</td></tr>
<tr><td>HVAC tune-up</td><td>An annual maintenance visit</td><td>Included on AHS ShieldPlatinum; optional at First American</td></tr>
<tr><td>Unlimited refrigerant</td><td>Removes the per-pound refrigerant cap</td><td>Optional at 2-10; included on AHS ShieldPlatinum and First American Premium</td></tr>
</tbody>
</table>
<p><em>Sources: NerdWallet 2026 (Choice, Select add-on prices), This Old House 2026, AHS add-ons and plan pages, 2-10 coverage pages and sample agreements, U.S. News and NerdWallet (HWA). Add-on prices change often and vary by state.</em></p>
<h3>Which add-ons are worth it?</h3>
<p>Pool and spa equipment is the add-on most likely to pay off: pumps, heaters and filters fail regularly and cost hundreds to over a thousand dollars to replace. Well pump coverage is cheap and worth having if your house depends on one. Limited roof leak coverage is the most oversold - caps of $400-$1,600 cover a patch, not a roof, and storm damage is excluded. Our <a href="/articles/home-warranty-guide">complete home warranty guide</a> scores each add-on in detail.</p>`,
  },
  {
    heading: "What doesn't a home warranty cover?",
    body: `<p>Exclusions are where most frustration with home warranties starts. They fall into two groups: <strong>items</strong> that are never covered, and <strong>causes</strong> that aren't covered even when the item is.</p>
<h3>Items that aren't covered</h3>
<ul>
<li><strong>Structural parts of the house:</strong> foundation, walls, floors, ceilings, windows, doors, roof replacement, decks, patios, driveways</li>
<li><strong>Cosmetic parts:</strong> dents, scratches, finishes, knobs, shelves, glass, lighting fixtures</li>
<li><strong>Outdoor items</strong> unless added: sprinklers, outdoor plumbing, outdoor kitchens, detached structures</li>
<li><strong>Specialty equipment:</strong> solar systems, generators, commercial-grade appliances, elevators, smart home systems, security systems</li>
<li><strong>Items still under a manufacturer's or builder's warranty</strong> - the original warranty pays first</li>
</ul>
<h3>Causes that aren't covered</h3>
<table>
<thead><tr><th>Cause</th><th>Why it's excluded</th><th>Who might pay instead</th></tr></thead>
<tbody>
<tr><td>Pre-existing condition</td><td>The problem started before coverage did</td><td>The seller (if it was concealed) or you</td></tr>
<tr><td>Lack of maintenance</td><td>Contracts require reasonable care</td><td>You</td></tr>
<tr><td>Improper installation or prior repair</td><td>Not a wear-and-tear failure</td><td>The installer or contractor, if under their warranty</td></tr>
<tr><td>Fire, storms, lightning, floods</td><td>Sudden events are insurance perils</td><td>Homeowners or flood insurance</td></tr>
<tr><td>Power surges</td><td>An external event, not mechanical failure</td><td>Homeowners insurance or an electronics add-on</td></tr>
<tr><td>Freezing</td><td>Often treated as a peril</td><td>Homeowners insurance, depending on the policy</td></tr>
<tr><td>Pests and rodents</td><td>Damage from animals or insects</td><td>You or, sometimes, homeowners insurance</td></tr>
<tr><td>Rust, corrosion, sediment</td><td>Treated as gradual deterioration at some companies</td><td>You (Florida limits this exclusion)</td></tr>
<tr><td>Code violations and permits</td><td>Upgrades, not repairs</td><td>You, unless your tier covers code work</td></tr>
<tr><td>Secondary or consequential damage</td><td>Warranties cover the failed item, not what it damages</td><td>Homeowners insurance (water damage, mold) or you</td></tr>
</tbody>
</table>
<p>The secondary-damage rule is the one that surprises people most. If your water heater bursts and floods the basement, a home warranty can pay to replace the water heater - but not the carpet, drywall, furniture or mold remediation. Homeowners insurance may cover the sudden water damage, subject to its own deductible and exclusions. We explain how the two fit together in our <a href="/articles/home-warranty-vs-homeowners-insurance">home warranty vs homeowners insurance guide</a>.</p>`,
  },
  {
    heading: "Does a home warranty cover the roof, foundation, mold or sewer lines?",
    body: `<p>These are the questions we hear most, so here's a direct answer for each:</p>
<table>
<thead><tr><th>Question</th><th>Short answer</th><th>Details</th></tr></thead>
<tbody>
<tr><td>Does a home warranty cover roof leaks?</td><td>Only limited leaks, usually as an add-on</td><td>Leak repair over occupied areas up to a cap ($400-$1,600 at the companies we track). Replacement and storm damage are excluded.</td></tr>
<tr><td>Does a home warranty cover a roof replacement?</td><td>No</td><td>Storm and hail damage goes to homeowners insurance; age-related replacement is out of pocket.</td></tr>
<tr><td>Does a home warranty cover the foundation?</td><td>No</td><td>Cracks, settling and structural repairs are excluded. A new home's builder warranty may cover major structural defects for up to 10 years.</td></tr>
<tr><td>Does a home warranty cover mold?</td><td>No</td><td>A warranty may fix the leak that caused it, but not mold remediation or the water damage.</td></tr>
<tr><td>Does a home warranty cover water damage?</td><td>No</td><td>It covers the failed pipe or appliance, not the resulting damage.</td></tr>
<tr><td>Does a home warranty cover sewer lines?</td><td>Rarely outside the house</td><td>Stoppages inside the foundation through a clean-out are often covered; broken, collapsed or root-damaged exterior lines usually aren't.</td></tr>
<tr><td>Does a home warranty cover septic systems?</td><td>As an add-on</td><td>Roughly $4-$15 a month where offered; pumping often capped low.</td></tr>
<tr><td>Does a home warranty cover pools?</td><td>Equipment, as an add-on</td><td>Pumps, filters and heaters; not the pool structure or liner.</td></tr>
<tr><td>Does a home warranty cover windows?</td><td>No</td><td>Windows are structural.</td></tr>
<tr><td>Does a home warranty cover solar panels?</td><td>No</td><td>Excluded on the plans we reviewed.</td></tr>
<tr><td>Does a home warranty cover generators?</td><td>Usually no</td><td>Excluded on most base plans.</td></tr>
<tr><td>Does a home warranty cover sprinkler systems?</td><td>Rarely</td><td>Add-on at a few companies, with small caps.</td></tr>
<tr><td>Does a home warranty cover pest damage?</td><td>No</td><td>Damage from pests and rodents is a standard exclusion.</td></tr>
</tbody>
</table>`,
  },
];
