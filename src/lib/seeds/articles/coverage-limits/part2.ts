import type { ArticleSection } from "@/lib/config";

// Part 2: the master comparison table and company-by-company limits, with
// conflicts called out. Sources: AHS plan pages (ShieldSilver/Gold/Platinum),
// AHS appliance and AC coverage pages and 2023 California sample contract;
// Choice user agreement, state-resident pages and realtor brochure;
// NerdWallet Choice review (2026); Select terms and conditions; This Old
// House, CNBC, Rocket Mortgage on Select; First American FAQ and contract
// language quoted in a 2026 BBB response, NerdWallet FAHW review (2026); HWA
// 2021 contract and NerdWallet/Forbes 2026 reviews; HSC per This Old House,
// Top10, ConsumerAffairs and BBB complaint records; 2-10 help center, 2025
// sample agreement and FAQ. Researched November 2026.
export const part2: ArticleSection[] = [
  {
    heading: "Home warranty coverage limits compared: all 7 companies",
    body: `<p>Here are the published limits for the consumer plans of the seven companies we track. Figures come from company plan pages and sample agreements where we could find them, and from 2025-2026 independent reviews where we couldn't. Limits vary by state, plan version and sales channel, so treat this table as a shortlist and confirm in the agreement for your address.</p>
<table>
<thead><tr><th>Company</th><th>HVAC</th><th>Appliances</th><th>Refrigerant</th><th>Code / permits</th><th>Annual total</th><th>Replacement paid at</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>$3,000</td><td>$3,000 per item</td><td>Not covered under homeowner agreement</td><td>Excluded (realtor plans: $250)</td><td>Not published</td><td>Choice's actual cost (may be below retail)</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>$5,000 per system</td><td>Gold $2,000; Platinum $4,000</td><td>$10/lb (Silver, Gold); unlimited (Platinum)</td><td>Platinum only: $250</td><td>$50,000</td><td>AHS's expected cost ("substantially less than retail")</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>No dollar limit on conventional HVAC</td><td>$3,500 (Starter, Essential); $7,000 (Premium)</td><td>Varies by state and version; 100% on Premium</td><td>Essential $500; Premium $1,000 (some reviews: $1,500)</td><td>None</td><td>Negotiated supplier rates (may be below retail)</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>$5,000 per system ($1,500 hydronic/steam)</td><td>$2,000</td><td>$10/lb inside the HVAC limit</td><td>Not standard</td><td>$50,000 (older pages: $25,000)</td><td>Not published</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to $5,000 per item (some heating $1,500)</td><td>Up to $5,000 per item</td><td>Not confirmed (older brochure: $500)</td><td>Optional add-on</td><td>$15,000</td><td>HWA's actual cost (may be below retail)</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>About $2,000-$2,500</td><td>About $300-$2,000 by item</td><td>Not confirmed</td><td>Reported excluded</td><td>$6,000 (Standard); $9,000 (Comprehensive)</td><td>Wholesale cost, excluding shipping, tax and installation</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>About $3,000 per term (some reviewers: $2,000)</td><td>About $500 per item</td><td>Not confirmed</td><td>Excluded; cash at depreciated value if code blocks repair</td><td>Not published</td><td>Depreciated value</td></tr>
</tbody>
</table>
<p><em>Sources: company plan pages, FAQs, help centers and sample agreements (AHS, First American, 2-10, Choice, Select); HWA 2021 contract; NerdWallet, Forbes, This Old House, CNBC, Top10 and ConsumerAffairs reviews (2025-2026). "Not published" means we couldn't find the figure in the company's materials, not that there is no limit.</em></p>
<p>Three patterns stand out. First, HVAC limits cluster at $3,000-$5,000 - well below the $6,000 average AC replacement - except at First American. Second, appliance limits range more than tenfold, from about $500 to $7,000. Third, <strong>how a replacement is valued</strong> varies as much as the limit itself: company cost, negotiated rates, wholesale cost or depreciated value. We cover that in detail below.</p>`,
  },
  {
    heading: "What are Choice Home Warranty's coverage limits?",
    body: `<p><a href="/reviews/choice-home-warranty">Choice Home Warranty</a> uses the simplest structure in the market: one $3,000 limit per covered item, applied across both of its consumer plans (Basic and Total). That covers furnaces, the water heater, plumbing and electrical failures and every covered appliance. NerdWallet's 2026 review applies the same $3,000 to combined heating and air conditioning and to ductwork. Optional items carry lower caps: about $500 for well pumps, septic systems, sprinklers and limited roof leaks, and about $250 for septic pumping. Covered items in a guest house or in-law unit are capped at $1,500.</p>
<table>
<thead><tr><th>Choice item</th><th>Limit</th></tr></thead>
<tbody>
<tr><td>Each covered system or appliance</td><td>$3,000</td></tr>
<tr><td>Heating and AC (per NerdWallet's reading)</td><td>$3,000 combined</td></tr>
<tr><td>Well pump, septic, sprinkler, limited roof leak add-ons</td><td>About $500</td></tr>
<tr><td>Septic pumping</td><td>About $250</td></tr>
<tr><td>Items in a guest house or in-law suite</td><td>$1,500</td></tr>
<tr><td>Code violations, permits, haul-away</td><td>Excluded on homeowner plans ($250 code/permit allowance on realtor tiers)</td></tr>
</tbody>
</table>
<p><strong>Where Choice is strong:</strong> a $3,000 appliance limit is above AHS ShieldGold's $2,000 and 2-10's $2,000, and well above Select's $500. That makes Choice a good fit when appliances are your main worry. Its single number also makes the contract easier to understand than plans with a dozen sub-limits.</p>
<p><strong>Where to be careful:</strong> $3,000 is below the cost of most full AC or furnace replacements, so on an older HVAC system expect to share the cost of a replacement. Code upgrades, permits and haul-away aren't covered on homeowner plans. When Choice pays cash instead of replacing, its user agreement says it pays its actual cost, "which at times may be less than retail"; some state versions say "available wholesale cost," and the California version excludes shipping, tax and installation. One reviewer (CNBC) gives $5,000 per item, but the same page elsewhere says $3,000, and every other source we found says $3,000.</p>
<p><strong>The regulatory context:</strong> in January 2026 Choice agreed to an $11.8 million consent judgment with the Arizona Attorney General, announced on February 10, 2026. The state's original complaint alleged that Choice applied payment caps - including a $1,500 cap and a $500 plumbing cap - and didn't replace items customers believed were covered. Those are allegations, not findings; Choice did not admit wrongdoing. The settlement requires clearer disclosures before sale. For buyers, the takeaway is the same as with any company: read the limits clause in the current agreement for your state before you buy.</p>`,
  },
  {
    heading: "What are American Home Shield's coverage limits?",
    body: `<p><a href="/reviews/american-home-shield">American Home Shield</a> publishes its limits on each plan page, and they're among the clearest in the industry:</p>
<table>
<thead><tr><th>AHS limit</th><th>ShieldSilver</th><th>ShieldGold</th><th>ShieldPlatinum</th></tr></thead>
<tbody>
<tr><td>HVAC (per system, per term)</td><td>$5,000</td><td>$5,000</td><td>$5,000</td></tr>
<tr><td>Each covered appliance</td><td>Not covered</td><td>$2,000</td><td>$4,000</td></tr>
<tr><td>Refrigerant</td><td>$10/lb, inside HVAC limit</td><td>$10/lb, inside HVAC limit</td><td>Unlimited</td></tr>
<tr><td>Code violations, permits, modifications</td><td>None</td><td>None</td><td>$250 per term</td></tr>
<tr><td>Roof leak repair</td><td>-</td><td>-</td><td>Up to $1,000</td></tr>
<tr><td>Aggregate per term</td><td>$50,000</td><td>$50,000</td><td>$50,000</td></tr>
</tbody>
</table>
<p>Two details are worth knowing. First, AHS's $5,000 HVAC limit applies <em>per system</em>, so a home with two AC units has two limits. Second, every AHS plan pays for the parts and upgrades needed to meet current efficiency (SEER) and refrigerant standards when it replaces a covered HVAC unit - a real benefit as the industry moves from R-410A to newer refrigerants (see our <a href="/articles/r-410a-phase-out-home-warranty">refrigerant transition guide</a>). When AHS pays cash instead of replacing, its 2023 California sample agreement says it pays what AHS would expect to pay, which can be "substantially less than retail."</p>
<p>AHS's real estate plans (ShieldEssential, ShieldPlus, ShieldComplete) use different limits - one AHS page lists up to $15,000 for HVAC on real estate plans - so don't compare a real estate brochure with a consumer plan page. Compare all three consumer tiers in our <a href="/articles/american-home-shield-plans">AHS plans guide</a>.</p>`,
  },
  {
    heading: "What are First American Home Warranty's coverage limits?",
    body: `<p><a href="/reviews/first-american">First American</a> has the highest limits we've found at any national company. Its FAQ says there's no total cap per term, and reviewers consistently report no dollar limit on conventional heating, air conditioning, plumbing and electrical systems.</p>
<table>
<thead><tr><th>First American limit</th><th>Starter</th><th>Essential</th><th>Premium</th></tr></thead>
<tbody>
<tr><td>Conventional HVAC</td><td>No dollar limit (scope varies by state)</td><td>No dollar limit</td><td>No dollar limit</td></tr>
<tr><td>Each covered appliance</td><td>$3,500</td><td>$3,500</td><td>$7,000</td></tr>
<tr><td>Water heater</td><td>Varies</td><td>$1,000 (per NerdWallet)</td><td>No dollar limit (per NerdWallet)</td></tr>
<tr><td>Refrigerant</td><td>Varies by state and version</td><td>Varies</td><td>100% covered</td></tr>
<tr><td>"Advantage" coverage (code, permits, crane, improper installation, mismatched systems)</td><td>Not included</td><td>$500 combined</td><td>$1,000 combined (some reviews: $1,500)</td></tr>
<tr><td>Aggregate</td><td>None</td><td>None</td><td>None</td></tr>
</tbody>
</table>
<p>The catches are availability - First American is sold in about 35-37 states plus D.C. - and variation: plan contents and some sub-limits (refrigerant in particular) differ by state and contract version. One sample contract we reviewed listed refrigerant at $20 a pound with a cap on the customer's share; others say no dollar limit. When it pays cash in lieu of replacement, First American uses its negotiated supplier rates, "which may be less than retail."</p>`,
  },
  {
    heading: "What are Select Home Warranty's coverage limits?",
    body: `<p><a href="/reviews/select-home-warranty">Select Home Warranty</a> has the lowest limits of the seven, which is the main reason its prices are low. Reviewers report about $500 per item for appliances, plumbing and electrical, and about $3,000 per term for heating and cooling - though Rocket Mortgage and Top10 report $2,000 for HVAC, and NerdWallet calls Select's sample contract unclear on limits. Add-ons are capped at about $400.</p>
<p>The larger issue is valuation. Select's terms and conditions allow it to replace an item or pay cash at the item's <strong>depreciated value</strong>, at its discretion. If a repair can't be done without violating code, its liability is limited to a cash settlement no greater than the depreciated cost. For a 12-year-old refrigerator, depreciated value can be a small fraction of the cost of a new one. Select can still make sense for small repairs at a low price - see our <a href="/articles/select-home-warranty-cost">Select cost breakdown</a> - but it isn't built for big replacements.</p>`,
  },
  {
    heading: "What are 2-10, HWA and Home Service Club's limits?",
    body: `<h3>2-10 Home Buyers Warranty</h3>
<p><a href="/reviews/2-10-home-buyers-warranty">2-10</a>'s help center lists $5,000 per covered HVAC system, $2,000 per appliance and $50,000 per agreement term. Its 2025 sample agreement adds that hydronic, glycol and steam systems (and the water heater that feeds them) are capped at $1,500, that refrigerant is paid at $10 a pound inside the HVAC limit, and that access and "return to rough finish" work is capped at $1,000. 2-10's own FAQ still says $25,000 per year, and This Old House reports $25,000 too - most likely an older plan version or a different sales channel, so check the agreement you're offered. Each unit in a multi-unit home gets its own limit. 2-10 is owned by Frontdoor, the parent of American Home Shield.</p>
<h3>Home Warranty of America</h3>
<p><a href="/reviews/home-warranty-of-america">HWA</a> advertises up to $5,000 per covered item and a $15,000 total per term. NerdWallet reports sub-limits that matter: $1,000 for tankless and oil water heaters, $1,500 for some heating systems, and $2,000 for rust- and corrosion-related plumbing and electrical failures. Its 2022 California agreement lists many $400-$1,500 sub-limits. When HWA pays cash instead of replacing, it pays its actual cost, which can be below retail. HWA is sold in all 50 states.</p>
<h3>The Home Service Club</h3>
<p><a href="/reviews/home-service-club">HSC</a> covers items regardless of age, make or model, but its caps are the tightest after Select's: per-item limits of roughly $300 to $2,000, heating and AC at about $2,000-$2,500 (sources differ), and an annual ceiling of about $6,000 on Standard and $9,000 on Comprehensive, according to This Old House. When HSC pays cash, BBB complaint records quoting its contract show it pays wholesale cost, excluding shipping, tax and installation, and that a paid-out item can't be claimed again for 12 months. A single HVAC replacement can use up much of HSC's annual total.</p>`,
  },
];
