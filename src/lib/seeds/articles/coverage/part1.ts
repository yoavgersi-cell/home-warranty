import type { ArticleSection } from "@/lib/config";

// Part 1: quick answer, how coverage works, and the A-to-Z coverage checklist.
// Facts: company plan pages and sample contracts (AHS, Choice, First American,
// 2-10 help center), NerdWallet / This Old House / U.S. News 2026 reviews, This
// Old House's January 2026 customer survey, Frontdoor SEC filings (FY2025 10-K,
// Q3 2026 8-K). Researched November 2026.
export const part1: ArticleSection[] = [
  {
    heading: "What does a home warranty cover? The short answer",
    body: `<div class="qa"><strong>Quick answer</strong>A home warranty covers the repair or replacement of major home <strong>systems</strong> - heating, air conditioning, ductwork, plumbing, electrical and the water heater - and household <strong>appliances</strong> - refrigerator, oven or range, cooktop, dishwasher, built-in microwave, garbage disposal, washer and dryer - when they break down from normal wear and tear. It does <strong>not</strong> cover structural parts of the house (roof, foundation, walls, windows), damage from fire, storms or water (that's homeowners insurance), problems that existed before the contract started, or failures caused by poor maintenance. Pools, spas, well pumps, septic systems and roof leaks are usually optional add-ons.</div>
<p>That's the textbook answer. The more useful one is that "covered" always comes with three conditions: the item has to be on your plan's list, the failure has to come from a cause the contract accepts (normal wear and tear, not neglect or a pre-existing problem), and the repair has to fit under the plan's dollar limit for that item. Most disappointment with home warranties happens in the gap between "my AC is covered" and "this particular AC repair is covered, up to this amount."</p>
<p>We built this guide to close that gap. It goes item by item through more than 50 parts of a typical home, shows how the seven companies we track - <a href="/reviews/choice-home-warranty">Choice</a>, <a href="/reviews/american-home-shield">American Home Shield</a>, <a href="/reviews/select-home-warranty">Select</a>, <a href="/reviews/first-american">First American</a>, <a href="/reviews/home-warranty-of-america">Home Warranty of America</a>, <a href="/reviews/home-service-club">The Home Service Club</a> and <a href="/reviews/2-10-home-buyers-warranty">2-10</a> - handle each one, and explains the fine print that decides whether a claim is paid. Every figure comes from company plan pages, sample contracts or named third-party sources, and we flag places where sources disagree.</p>
<table>
<thead><tr><th>Category</th><th>Usually covered?</th><th>Where you'll find it</th></tr></thead>
<tbody>
<tr><td>Heating, air conditioning, ductwork</td><td>Yes</td><td>Systems and combination plans (some entry plans leave out AC)</td></tr>
<tr><td>Plumbing and water heater</td><td>Yes</td><td>Systems and combination plans</td></tr>
<tr><td>Electrical system</td><td>Yes</td><td>Systems and combination plans</td></tr>
<tr><td>Kitchen appliances</td><td>Yes</td><td>Appliance and combination plans</td></tr>
<tr><td>Washer and dryer</td><td>Usually</td><td>Appliance and combination plans; often only the higher tier</td></tr>
<tr><td>Garage door opener, ceiling fans</td><td>Often</td><td>Varies by company and tier</td></tr>
<tr><td>Pool, spa, well pump, septic, roof leak</td><td>Add-on</td><td>Bought separately for a few dollars a month each</td></tr>
<tr><td>Roof replacement, foundation, windows, mold, water damage</td><td>No</td><td>Homeowners insurance, a builder warranty or your own budget</td></tr>
</tbody>
</table>`,
  },
  {
    heading: "How home warranty coverage works",
    body: `<p>A home warranty is a one-year service contract (some companies sell 13-month or multi-year terms). You pay a premium - usually monthly or annually - and when a covered item breaks, you file a claim. The company sends a contractor from its network, you pay a fixed <strong>service call fee</strong> (commonly $75-$125), and the company pays for the covered repair or replacement up to the plan's limit.</p>
<p>The industry is bigger than most people realize. Frontdoor, the parent of American Home Shield and 2-10, reported about 2.14 million home warranties in force at the end of September 2026, and its 2025 annual report describes roughly 3.8 million service requests a year handled through a network of about 17,000 contractor firms. IBISWorld estimates the US home warranty industry at about $4.6 billion in 2025 revenue.</p>
<h3>Three building blocks: systems, appliances and add-ons</h3>
<p>Nearly every company in the market builds its plans from the same three pieces:</p>
<ul>
<li><strong>Systems plans</strong> cover the infrastructure of the house: heating, cooling, ductwork, plumbing, electrical and the water heater. American Home Shield's ShieldSilver and Select's Gold Care are systems-only plans.</li>
<li><strong>Appliance plans</strong> cover the machines: refrigerator, range, cooktop, oven, dishwasher, built-in microwave, garbage disposal, washer and dryer. Select's Bronze Care and 2-10's Simply Kitchen are examples.</li>
<li><strong>Combination plans</strong> cover both. Most homeowners buy one of these - AHS ShieldGold and ShieldPlatinum, Choice Total, Select Platinum Care, Home Warranty of America Premier Plus and The Home Service Club's plans are all combination plans.</li>
</ul>
<p>On top of any plan you can usually buy <strong>add-ons</strong> (also called optional coverage) for items that not every home has: pools and spas, well pumps, septic systems, sump pumps, a second refrigerator, a standalone freezer, a guest unit, or limited roof-leak repair.</p>
<h3>What "covered" means in practice</h3>
<p>A covered claim requires all of the following:</p>
<ol>
<li><strong>The item is on your plan.</strong> Not just the category - the specific component. A plan can cover your refrigerator and still exclude its ice maker.</li>
<li><strong>The cause is accepted.</strong> Home warranties pay for mechanical failure from normal wear and tear. They don't pay for damage from storms, fire, pests, misuse, missing maintenance or improper installation.</li>
<li><strong>The problem started after coverage began.</strong> Most contracts have a 30-day waiting period on new plans and exclude pre-existing conditions.</li>
<li><strong>The repair fits under the limit.</strong> Every item has a dollar cap, and some components have smaller sub-limits. Costs above the cap are yours.</li>
<li><strong>Nothing else in the contract excludes it.</strong> Code upgrades, permits, access through walls or concrete, and removal of the old unit can each be excluded or capped separately.</li>
</ol>
<h3>How claims actually turn out</h3>
<p>This Old House's January 2026 survey of 2,000 home warranty customers gives a rare look at real outcomes. Respondents said about 49% of their most recent claims involved systems, about 40% appliances and about 9% add-ons. Claims ended in a repair about 44% of the time, a replacement 39% of the time and a cash payout 15% of the time. Among denied claims, the top reasons were a pre-existing condition (29%), an item that wasn't covered (29%), a cost over the coverage limit (20%) and lack of maintenance (13%).</p>
<p>Look at that last list again: roughly 58% of denials came down to coverage questions - what's on the plan and when the problem started - that you can check before you buy. That's what the rest of this guide is for.</p>`,
  },
  {
    heading: "The home warranty coverage checklist: 50+ items, A to Z",
    body: `<p>This is the table we wish existed when we started reviewing home warranties. It rates each part of a typical home by how the companies we track usually treat it. "Standard" means it's included on most combination plans; "Tier" means only some plans or higher tiers include it; "Add-on" means you usually pay extra; "Rarely" or "No" means you should plan to pay for it another way.</p>
<table>
<thead><tr><th>Item</th><th>Coverage</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Air conditioning (central)</td><td>Standard / Tier</td><td>Left out of some entry plans (Choice Basic, HWA Premier)</td></tr>
<tr><td>Air handler, condenser, coil</td><td>Standard</td><td>Part of the AC or heat pump system</td></tr>
<tr><td>Attic and whole-house fans</td><td>Tier</td><td>E.g., The Home Service Club Comprehensive</td></tr>
<tr><td>Boiler (hot water or steam heat)</td><td>Tier / sub-limit</td><td>AHS caps hot-water and steam systems at $2,000; First American caps specialty systems at $1,500</td></tr>
<tr><td>Built-in microwave</td><td>Standard</td><td>Countertop microwaves usually excluded</td></tr>
<tr><td>Ceiling fans</td><td>Tier</td><td>Covered on all AHS plans; on Select only with Platinum Care</td></tr>
<tr><td>Central vacuum</td><td>Tier / Add-on</td><td>First American Premium, HSC Standard; add-on at Choice and Select</td></tr>
<tr><td>Clothes dryer</td><td>Standard / Tier</td><td>Often only on the higher tier (Choice Total, AHS ShieldGold+)</td></tr>
<tr><td>Clothes washer</td><td>Standard / Tier</td><td>Same as dryer</td></tr>
<tr><td>Cooktop</td><td>Standard</td><td>Glass tops commonly excluded as cosmetic</td></tr>
<tr><td>Dishwasher</td><td>Standard</td><td>Racks, baskets and rollers often excluded</td></tr>
<tr><td>Doorbell</td><td>Tier</td><td>AHS includes doorbells under electrical; video doorbells generally excluded</td></tr>
<tr><td>Ductwork</td><td>Standard / Tier</td><td>From the unit to the register; First American: no dollar limit on homeowner plans</td></tr>
<tr><td>Electrical panel and breakers</td><td>Standard</td><td>Capacity upgrades excluded</td></tr>
<tr><td>Electrical wiring, outlets, switches</td><td>Standard</td><td>Low-voltage, alarm and audio wiring excluded</td></tr>
<tr><td>Exhaust fans (bath, kitchen)</td><td>Tier</td><td>AHS includes built-in exhaust fans under electrical</td></tr>
<tr><td>Faucets and shower heads</td><td>Tier</td><td>AHS covers on all plans; HWA only on Premier Plus</td></tr>
<tr><td>Freezer (standalone)</td><td>Add-on</td><td>Choice, Select and others sell it separately</td></tr>
<tr><td>Furnace (gas, electric, oil)</td><td>Standard</td><td>Heat exchangers can be sub-limited</td></tr>
<tr><td>Garage door opener</td><td>Tier</td><td>Motor unit only at AHS; doors, tracks and rollers excluded</td></tr>
<tr><td>Garage door (panels, tracks, springs)</td><td>Rarely</td><td>First American Premium reportedly covers more of the system</td></tr>
<tr><td>Garbage disposal</td><td>Standard</td><td>Jams from foreign objects can be excluded</td></tr>
<tr><td>Generator</td><td>No / Add-on</td><td>Excluded on most plans</td></tr>
<tr><td>Geothermal heat pump</td><td>Sub-limit</td><td>AHS $2,000; First American $1,500 for geothermal and specialty systems</td></tr>
<tr><td>Guest unit (in-law suite)</td><td>Add-on</td><td>AHS and others sell it</td></tr>
<tr><td>Heat pump (air-source)</td><td>Standard</td><td>Treated as heating and cooling</td></tr>
<tr><td>Hot water dispenser (instant)</td><td>Tier</td><td>First American Premium</td></tr>
<tr><td>Ice maker (in refrigerator)</td><td>Varies</td><td>AHS covers built-in ice makers on ShieldGold+; Choice contract excerpts exclude them</td></tr>
<tr><td>Ice maker (standalone)</td><td>Add-on / Tier</td><td>Some Choice agreements cap standalone ice makers at $500</td></tr>
<tr><td>Mini-split (ductless)</td><td>Varies</td><td>First American lists AC "or mini-split"; check other contracts</td></tr>
<tr><td>Oven and range</td><td>Standard</td><td>Clocks, lights and racks often excluded</td></tr>
<tr><td>Plumbing pipes (inside the home)</td><td>Standard</td><td>Leaks and breaks in supply, drain and vent lines</td></tr>
<tr><td>Plumbing in concrete (slab leaks)</td><td>Tier / sub-limit</td><td>First American Essential and Premium cover lines encased in concrete</td></tr>
<tr><td>Plumbing stoppages</td><td>Standard / Tier</td><td>Cleared through an existing access point, usually up to 100 feet</td></tr>
<tr><td>Pool and spa equipment</td><td>Add-on</td><td>Pumps, motors, filters, heaters - not the shell or liner</td></tr>
<tr><td>Refrigerator</td><td>Standard / Tier</td><td>Not on every entry plan (Choice Basic leaves it out)</td></tr>
<tr><td>Refrigerant</td><td>Sub-limit</td><td>AHS $10/lb on Silver and Gold, unlimited on Platinum; First American $20/lb on lower tiers, 100% on Premium</td></tr>
<tr><td>Roof leaks (limited)</td><td>Add-on / Tier</td><td>AHS ShieldPlatinum includes up to $1,000; add-on elsewhere</td></tr>
<tr><td>Roof replacement</td><td>No</td><td>Homeowners insurance (if storm-related) or out of pocket</td></tr>
<tr><td>Septic system</td><td>Add-on</td><td>Septic pumping capped low (Choice reportedly $250)</td></tr>
<tr><td>Sewer line (outside the house)</td><td>Rarely</td><td>Broken or collapsed lines and root intrusion are standard exclusions</td></tr>
<tr><td>Sewage ejector pump</td><td>Tier / sub-limit</td><td>AHS caps at $500</td></tr>
<tr><td>Smart home devices</td><td>No</td><td>Standard thermostats are usually covered; smart hubs and cameras aren't</td></tr>
<tr><td>Smoke detectors (hard-wired)</td><td>Tier</td><td>The Home Service Club Comprehensive and others</td></tr>
<tr><td>Solar panels and solar water heating</td><td>No</td><td>Excluded on the plans we reviewed</td></tr>
<tr><td>Sprinklers and irrigation</td><td>Add-on / No</td><td>Where offered, caps are small</td></tr>
<tr><td>Sump pump</td><td>Varies / Add-on</td><td>Choice sells it as an add-on with a reported $3,000 cap</td></tr>
<tr><td>Thermostat</td><td>Standard</td><td>Part of the heating and cooling system</td></tr>
<tr><td>Toilets</td><td>Standard</td><td>Tanks, bowls and seats often excluded; mechanisms covered</td></tr>
<tr><td>Trash compactor</td><td>Tier</td><td>First American Essential and up</td></tr>
<tr><td>Water heater (tank)</td><td>Standard</td><td>Sediment and capacity problems commonly excluded</td></tr>
<tr><td>Water heater (tankless)</td><td>Varies</td><td>Covered at AHS, First American and 2-10; HWA reportedly caps at $1,000</td></tr>
<tr><td>Water softener</td><td>Add-on / Rarely</td><td>HSC sells it as an add-on</td></tr>
<tr><td>Well pump</td><td>Add-on</td><td>Pump only - not the well, casing or piping</td></tr>
<tr><td>Whirlpool bath motor</td><td>Tier</td><td>Motor and pump assembly on some plans</td></tr>
<tr><td>Windows, doors, walls, floors</td><td>No</td><td>Structural and cosmetic; never covered</td></tr>
<tr><td>Foundation and structure</td><td>No</td><td>Builder warranty (new homes) or homeowners insurance (sudden events)</td></tr>
<tr><td>Mold and water damage</td><td>No</td><td>Homeowners insurance, depending on the cause and policy</td></tr>
</tbody>
</table>
<p><em>Sources: AHS plan pages and July 2024 sample agreement; Choice contract excerpts and NerdWallet's 2026 review; First American's coverage-limit pages and 2026 reviews; 2-10's help center; NerdWallet, This Old House, U.S. News and money.com 2026 reviews. Contracts vary by state and plan year - confirm in the sample contract for your address.</em></p>
<p>Two patterns jump out. First, the core systems and kitchen appliances really are standard: if a plan includes a category, these items are in it. Second, almost everything at the edges - ice makers, tankless water heaters, slab leaks, refrigerant, garage doors - depends on the company and the tier. If any of those matter in your house, they're the items to check line by line.</p>`,
  },
];
