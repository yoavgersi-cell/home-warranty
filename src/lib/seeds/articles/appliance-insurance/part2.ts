import type { ArticleSection } from "@/lib/config";

// Part 2: the six types compared, then each in depth. Prices/terms from
// company pages and reviewers' 2025-2026 quotes (see part 5). Where sources
// conflicted (e.g. Sears caps, HomeServe availability) we say so.
export const part2: ArticleSection[] = [
  {
    heading: "Every type of appliance protection, compared",
    body: `<p>This is the comparison most guides skip. Each option solves a different problem - and the single most important column is whether it covers <strong>normal wear and tear</strong>, because that's how most appliances fail.</p>
<table>
<thead><tr><th>Type</th><th>Typical cost</th><th>Covers wear and tear?</th><th>Cost per claim</th><th>Typical limits</th><th>Who picks the repairer</th><th>Best for</th></tr></thead>
<tbody>
<tr><td><strong>Home warranty (appliance or combo plan)</strong></td><td>~$35-$60/month</td><td>Yes</td><td>$65-$125 service fee</td><td>Per appliance, often $500-$4,000</td><td>The company</td><td>Several appliances, especially older ones</td></tr>
<tr><td><strong>Retailer extended warranty</strong></td><td>One payment, often ~10%-20% of the price</td><td>Usually yes, after the manufacturer warranty</td><td>Often $0</td><td>Up to the purchase price</td><td>The plan administrator</td><td>One new, expensive appliance</td></tr>
<tr><td><strong>Manufacturer extended warranty</strong></td><td>One payment or monthly</td><td>Usually yes</td><td>Often $0</td><td>Repair or replacement of that unit</td><td>Manufacturer-authorized servicers</td><td>One appliance from a brand you trust</td></tr>
<tr><td><strong>Credit card extended warranty</strong></td><td>Free with eligible cards</td><td>Mirrors the manufacturer warranty</td><td>$0</td><td>Often up to $10,000 per claim</td><td>You (then reimbursed)</td><td>Any new appliance paid for with the card</td></tr>
<tr><td><strong>Homeowners equipment breakdown endorsement</strong></td><td>~$25-$50/year</td><td><strong>No</strong> - sudden breakdown only</td><td>~$500 deductible</td><td>Often $50,000+ per claim</td><td>Usually you</td><td>Newer appliances and systems, as a low-cost backstop</td></tr>
<tr><td><strong>Utility repair plan</strong></td><td>Varies by utility partner</td><td>Varies</td><td>Varies</td><td>Often ~$1,000 per item per year</td><td>The plan's network</td><td>Check terms carefully</td></tr>
<tr><td><strong>Repair fund (self-insure)</strong></td><td>Whatever you set aside</td><td>-</td><td>Full repair cost</td><td>Your savings</td><td>You</td><td>Households with savings and newer appliances</td></tr>
</tbody>
</table>
<p>Below, we go through each option in detail.</p>`,
  },
  {
    heading: "Option 1: Home warranty appliance plans",
    body: `<p>A home warranty is a service contract that covers multiple systems and appliances for a monthly or annual fee. When something breaks, you file a claim, the company sends a contractor from its network, and you pay a service fee. If the item can't be repaired, the company replaces it or pays cash - usually at its own cost.</p>
<p>For appliances, the key distinction is between <strong>appliance-only plans</strong> and <strong>combination plans</strong> that also cover heating, cooling, plumbing and electrical. Here's how the plans compare:</p>
<table>
<thead><tr><th>Company and plan</th><th>Type</th><th>Typical price</th><th>Service fee</th><th>Appliance limit</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a> Simply Kitchen</td><td>Kitchen appliances only</td><td>~$35-$41/month</td><td>$65, $85 or $100</td><td>$500-$2,000 depending on appliance</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a> Bronze Care</td><td>Appliances only</td><td>Low, often with promotions</td><td>~$60-$100</td><td>About $500 per item</td></tr>
<tr><td>Liberty Home Guard Appliance Guard</td><td>Appliances only</td><td>~$49.99/month ($549.99/year on the company's site)</td><td>$65-$125 (assigned)</td><td>$2,000 per appliance</td></tr>
<tr><td>Cinch Home Services appliance plan</td><td>Appliances only (12 kitchen and laundry appliances)</td><td>~$28-$55/month depending on location</td><td>$75-$150 depending on region</td><td>$2,000 per appliance; $10,000 per year</td></tr>
<tr><td>Sears Home Warranty Appliance Plan</td><td>Appliances only</td><td>~$49.99-$59.99/month</td><td>$75</td><td>Reported differently by sources - check the contract</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a> ShieldGold / ShieldPlatinum</td><td>Combo (no appliance-only plan)</td><td>~$50-$60 / ~$80-$90/month</td><td>$100 or $125</td><td>$2,000 / $4,000 per appliance</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a> Basic / Total</td><td>Combo (refrigerator, washer and dryer on Total)</td><td>~$47 / $55-$58/month</td><td>~$100</td><td>$3,000 per covered item</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>Tiered plans (sources differ on whether its Basic plan is appliance-only)</td><td>Varies by state</td><td>$100 or $125 on current plans</td><td>$3,500 on lower tiers; up to $7,000 on Premium</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Combo</td><td>~$46-$60/month</td><td>~$100</td><td>Up to $5,000 on most repairs</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Combo</td><td>~$49-$67/month</td><td>~$65-$125</td><td>Lower item limits (e.g., $750 for refrigerators)</td></tr>
</tbody>
</table>
<p><em>Prices are typical 2025-2026 quotes and vary by ZIP code; limits come from published plans and sample contracts. 2-10 said its plans would change in early 2026, so confirm current terms.</em></p>
<h3>What home warranties do well</h3>
<ul>
<li><strong>They cover wear and tear</strong> - the main way appliances fail.</li>
<li><strong>They cover several appliances for one price</strong>, including old ones, usually without an age limit.</li>
<li><strong>You don't need to find a repairer.</strong></li>
</ul>
<h3>Where they fall short</h3>
<ul>
<li><strong>Per-appliance limits.</strong> A $500 limit won't buy most refrigerators; even $2,000 may not replace a high-end one.</li>
<li><strong>Cash instead of a replacement.</strong> Most contracts let the company pay cash at its own cost. In our review study, customers reported offers such as $406 toward a refrigerator that costs $1,799 and $272 toward a dishwasher.</li>
<li><strong>The service fee</strong> is owed on every claim, usually even if it's denied - so small repairs can cost almost as much as hiring a repairer directly.</li>
<li><strong>Waiting periods</strong> - usually 30 days on new plans - and pre-existing condition exclusions.</li>
</ul>
<p>Our <a href="/articles/home-warranty-claim-denied">guide to denied and lowballed claims</a> explains each of these limits and how to push back.</p>`,
  },
  {
    heading: "Option 2: Manufacturer warranties - check what you already have",
    body: `<p>Before buying any protection, read the warranty that came with the appliance. The baseline is usually <strong>one year of parts and labor</strong>, but many manufacturers add longer coverage on the most expensive components:</p>
<table>
<thead><tr><th>Example</th><th>Extended component coverage</th></tr></thead>
<tbody>
<tr><td>LG refrigerators</td><td>5 years parts and labor on the sealed system; years 6-10 on linear/inverter compressor parts only (per a 2022 warranty schedule)</td></tr>
<tr><td>LG washers</td><td>Direct-drive motor parts for 10 years (labor not included)</td></tr>
<tr><td>Samsung refrigerators</td><td>Long-term coverage on the digital inverter compressor (check your model's terms)</td></tr>
<tr><td>Whirlpool / KitchenAid refrigerators</td><td>Sealed system (compressor, evaporator, condenser, tubing) and liner in years 2-5 on many models; some add sealed-system parts in years 6-10</td></tr>
</tbody>
</table>
<p>Two catches: long-term coverage is often <strong>parts only</strong>, so you pay labor, and sealed-system coverage doesn't include the components that fail most often - such as ice makers, control boards and fans. Register new appliances with the manufacturer and keep the receipt.</p>`,
  },
  {
    heading: "Option 3: Retailer and manufacturer extended warranties",
    body: `<p>Extended warranties - store "protection plans" and manufacturer service plans - cover one appliance after the manufacturer's warranty ends. They're paid once at purchase (or monthly, for some manufacturer plans), and they usually have no deductible.</p>
<h3>Who's actually behind the store plans</h3>
<p>The name on the plan is rarely the company that pays the claim. As of 2026:</p>
<table>
<thead><tr><th>Seller</th><th>Plan provider</th><th>Notable terms</th></tr></thead>
<tbody>
<tr><td>Home Depot</td><td>Allstate (since February 2021)</td><td>5-year plans include the 1-year manufacturer warranty plus 4 more years; examples: $150 for appliances priced $550-$699.99, $295 for $2,000-$2,999.99</td></tr>
<tr><td>Lowe's</td><td>Assurant</td><td>Covers parts and labor after the manufacturer warranty, including normal wear and tear; food spoilage up to $250 per claim</td></tr>
<tr><td>Best Buy (Geek Squad Protection)</td><td>Assurant (terms effective August 12, 2025)</td><td>Example 5-year refrigerator plans listed around $310-$350</td></tr>
<tr><td>Costco</td><td>Costco Concierge plus Allstate</td><td>Costco adds a second year to the manufacturer warranty on major appliances; Allstate plans can extend total coverage to 5 years if bought within 90 days</td></tr>
<tr><td>Walmart, Menards, AJ Madison and others</td><td>Allstate Protection Plans (formerly SquareTrade)</td><td>Priced by the appliance's cost; pre-existing issues excluded</td></tr>
</tbody>
</table>
<h3>Manufacturer plans</h3>
<ul>
<li><strong>Whirlpool, Maytag, KitchenAid and Amana</strong> plans are run by Domestic & General USA, with terms of 1-5 years and $250 of food-spoilage coverage on refrigerator plans. ConsumerAffairs reported Whirlpool prices for a $2,000 refrigerator of about $68 for 1 year, $173 for 3 years and $255 for 5 years.</li>
<li><strong>LG Premium Care</strong> is administered by Asurion, runs up to 3 years, and covers power surges and up to $300 of food loss.</li>
<li><strong>Samsung Care+</strong> for appliances and <strong>GE Appliances</strong> plans are provided through Assurant.</li>
</ul>
<h3>The industry is consolidating</h3>
<p>Asurion completed its acquisition of Domestic & General on October 8, 2026 - bringing the Whirlpool-family plans under the same parent as LG's. At the same time, Asurion's own whole-home Appliance+ plan is closed to new enrollments. For shoppers, that means fewer independent options and more reason to read who the obligor is before you buy.</p>
<h3>What extended warranties cost relative to the appliance</h3>
<p>WarrantyWeek's 2026 analysis of service contract pricing found plans averaged about <strong>14% of the product's price</strong>, ranging from about 10.5% for ranges to about 19% for microwaves. Relative to small, cheap appliances, that's expensive protection; for a large, repair-prone refrigerator it can be reasonable.</p>`,
  },
  {
    heading: "Option 4: Your credit card's extended warranty",
    body: `<p>Many people already have appliance protection they don't know about. Several credit cards extend the manufacturer's warranty on items bought with the card, at no cost:</p>
<table>
<thead><tr><th>Issuer</th><th>Typical benefit (check your card's guide)</th><th>Typical limits</th></tr></thead>
<tbody>
<tr><td>Chase (e.g., Sapphire and Freedom cards)</td><td>Adds 1 year to US manufacturer warranties of 3 years or less</td><td>$10,000 per claim; $50,000 per account</td></tr>
<tr><td>American Express (eligible cards)</td><td>Adds up to 1 year to warranties of 5 years or less</td><td>$10,000 per item; $50,000 per account per year</td></tr>
<tr><td>Citi (e.g., Double Cash, Custom Cash, since November 2024)</td><td>Doubles manufacturer warranties of 24 months or less</td><td>Typically $10,000</td></tr>
<tr><td>Visa Signature and Mastercard</td><td>Depends on the issuing bank, not the network</td><td>Varies</td></tr>
</tbody>
</table>
<p>For a typical appliance with a 1-year warranty, paying with an eligible card gives you a second year free. These benefits usually extend only the base warranty (not 10-year parts-only components), apply to US manufacturer warranties, and are secondary to any service contract you buy. Issuers have cut and restored these benefits over the years - Citi removed many protections in 2019 and added a new extended warranty benefit in 2024 - so check your current guide to benefits before relying on it.</p>`,
  },
  {
    heading: "Option 5: The equipment breakdown endorsement on your homeowners policy",
    body: `<p>This is the only true insurance option. Some insurers let you add <strong>equipment breakdown</strong> (sometimes called home systems protection) to your homeowners or condo policy. It covers <strong>sudden mechanical or electrical breakdown</strong> of appliances and home systems.</p>
<ul>
<li><strong>Nationwide</strong> lists it at about $39-$45 a year, with a $50,000 maximum claim, a $500 deductible and $3,000 for food spoilage, added at new business or renewal.</li>
<li><strong>Liberty Mutual's</strong> home systems and appliance breakdown coverage offers up to $50,000 with a $500 deductible per occurrence.</li>
<li>Many other insurers offer versions reinsured by HSB (part of Munich Re), typically around $25-$50 a year.</li>
</ul>
<p>The catch is decisive: <strong>these endorsements exclude gradual wear and tear</strong>, rust, corrosion and maintenance-related failures. If a 12-year-old dishwasher's pump simply wears out, expect a denial; if a two-year-old refrigerator's control board fails suddenly, it may be covered. Claims also go on your insurance record (your CLUE report) and the $500 deductible exceeds many appliance repairs. It's a cheap backstop for newer equipment - not a substitute for a warranty on older appliances. Our <a href="/articles/home-warranty-vs-homeowners-insurance">home warranty vs. homeowners insurance guide</a> compares the two in detail.</p>`,
  },
  {
    heading: "Option 6: Utility and third-party repair plans",
    body: `<p>Utilities and their partners - most prominently HomeServe - sell appliance repair plans by mail and online. Terms vary by utility partner. One example: a utility-branded "Home Appliance Repair Plus" plan offered through OPPD pays up to <strong>$1,000 per covered item per year</strong>. HomeServe's standalone appliance offerings have changed over time, and reviewers disagree on what's currently available, so get the exact terms for your address before buying.</p>
<p>HomeServe, owned by Brookfield since January 2023, has faced several state attorney general actions over marketing that looked like it came from customers' utilities - most recently an $850,000 consent judgment in Kansas in January 2023, with no admission of wrongdoing. Treat mailers that resemble utility bills with skepticism, and compare limits carefully: $1,000 per item won't replace most refrigerators.</p>`,
  },
];
