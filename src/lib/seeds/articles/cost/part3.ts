import type { ArticleSection } from "@/lib/config";

// Part 3: add-on prices and price drivers (NerdWallet, SafeWise, BestCompany,
// This Old House, ConsumerAffairs, CNN, company pages, Frontdoor filings).
export const part3: ArticleSection[] = [
  {
    heading: "How much do home warranty add-ons cost?",
    body: `<p>Base plans leave out many items homeowners care about. Optional coverage is priced per item, per month. Here are sample prices from 2025-2026 quotes (they vary by state and plan):</p>
<table>
<thead><tr><th>Add-on</th><th>American Home Shield</th><th>Choice</th><th>Select</th><th>Home Warranty of America</th><th>2-10</th></tr></thead>
<tbody>
<tr><td>Pool / spa</td><td>~$21-$24</td><td>~$15</td><td>~$6</td><td>~$15</td><td>~$18 (freshwater) / $30 (saltwater)</td></tr>
<tr><td>Well pump</td><td>~$8-$10</td><td>~$8</td><td>~$3</td><td>~$8</td><td>~$6</td></tr>
<tr><td>Septic</td><td>~$5 (pump)</td><td>~$10 (system) / $5 (pumping)</td><td>~$6</td><td>~$12.50 (system) / $6 (pumping)</td><td>~$4</td></tr>
<tr><td>Roof leak</td><td>~$10 (included in ShieldPlatinum)</td><td>~$6</td><td>Often promotional</td><td>Offered</td><td>~$8</td></tr>
<tr><td>Second refrigerator</td><td>-</td><td>~$3</td><td>-</td><td>Offered</td><td>~$8</td></tr>
<tr><td>Standalone freezer</td><td>-</td><td>~$3</td><td>~$3</td><td>Offered</td><td>-</td></tr>
<tr><td>Guest unit</td><td>~$13-$17</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
</tbody>
</table>
<p><em>Sources: NerdWallet (2025 quotes), SafeWise, BestCompany, This Old House and ConsumerAffairs. "-" means not found or not offered in the quotes we reviewed.</em></p>
<p>Two other costs to know about:</p>
<ul>
<li><strong>HVAC tune-ups</strong> - American Home Shield sells them at about $100 per unit, and includes one per term on ShieldPlatinum. Annual maintenance helps prevent maintenance-related claim denials.</li>
<li><strong>Exterior water and sewer lines</strong> - where offered as home warranty add-ons, This Old House puts them around $5-$15 a month; standalone utility-partner line plans run about $6-$11 a month per line. Your homeowners insurer's service line endorsement may be cheaper - see our <a href="/articles/home-warranty-vs-homeowners-insurance">warranty vs. insurance guide</a>.</li>
</ul>
<p>Add-ons are where costs creep. A $50 plan plus pool, well and septic coverage can easily become an $80-$90 plan - which is why the survey figure for what customers actually pay is so much higher than the average quote.</p>`,
  },
  {
    heading: "What affects the price of a home warranty?",
    body: `<h3>Your state and ZIP code</h3>
<p>Prices vary by location because repair costs, labor rates and regulation vary. This Old House's state research found averages of about $61 a month in California, $52-$80 in Texas and $39-$77 in Florida. First American's own pages show plans starting at $31 a month in Texas versus $37 in California. American Home Shield says its premiums vary widely by ZIP code. Our <a href="/articles/home-warranty-by-state">state guides</a> cover the companies and rules where you live.</p>
<h3>Home size</h3>
<p>Most standard plans assume a home of <strong>under 5,000 square feet</strong>. First American's pricing applies to single-family homes under that size, and Choice's realtor brochure says coverage is for homes under 5,000 square feet unless additional fees are paid. Below that threshold, size usually doesn't change the price much; above it, expect a custom quote and a surcharge.</p>
<h3>Home type</h3>
<p>Condos, townhomes and mobile homes are sometimes cheaper because there's less to cover. This Old House found First American charges less for condos while American Home Shield's condo quotes matched single-family quotes, with condo plans overall ranging about $20-$70 a month. Old Republic has quoted lower prices for townhomes and mobile homes than for single-family homes.</p>
<h3>Plan tier</h3>
<p>Systems-only plans (HVAC, plumbing, electrical, water heater) are cheapest; appliance-only plans are similar; combination plans cost the most. The step from a mid-tier to a top-tier plan often adds $20-$30 a month - which can be worth it if it buys higher HVAC limits, refrigerant coverage, or permit and code coverage.</p>
<h3>The service fee you choose</h3>
<p>As covered below, a higher fee lowers the premium by about $5-$10 a month at companies that offer a choice.</p>
<h3>New customer or renewal</h3>
<p>Many companies advertise promotional first-year pricing. Frontdoor's filings note that first-year direct-to-consumer revenue was held down by promotional pricing in late 2025 and 2026 - a reminder that renewal prices are often higher. Check the renewal price before it renews automatically.</p>
<h3>Buying through a home sale</h3>
<p>Real estate plans are priced separately and often paid by the seller. American Home Shield offers real estate pricing for up to 60 days after closing. We cover real estate costs in detail below.</p>
<h3>How you pay</h3>
<p>Some companies discount annual payment - Select offers up to $150 off plus free months, Liberty Home Guard offers free months that grow with multi-year terms, and 2-10 and Home Warranty of America offer annual discounts - while others, like Choice, charge about the same either way. Multi-year terms can lock in a price but are harder to exit.</p>`,
  },
];
