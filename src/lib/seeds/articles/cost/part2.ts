import type { ArticleSection } from "@/lib/config";

// Part 2: prices by company and plan (2025-2026 quotes reported by This Old
// House, NerdWallet, ConsumerAffairs, US News, SafeWise, Top10, CNN, Insurify
// and company pages). Quotes vary by ZIP code; sources and dates noted.
export const part2: ArticleSection[] = [
  {
    heading: "Home warranty prices by company (2026)",
    body: `<p>Here's what the seven companies we track charge, based on 2025-2026 quotes published by independent reviewers. Prices vary by ZIP code and change often, so treat these as typical ranges and get your own quote.</p>
<table>
<thead><tr><th>Company</th><th>Plans</th><th>Typical monthly price</th><th>Service fee</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>ShieldSilver, ShieldGold, ShieldPlatinum</td><td>~$30-$40 / $50-$60 / $80-$90</td><td>$100 or $125 (higher fee = ~$10/mo less)</td><td>Prices vary widely by ZIP; ShieldPlatinum includes one HVAC tune-up</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice Home Warranty</a></td><td>Basic, Total</td><td>~$47 / $55-$58</td><td>~$100 per claim</td><td>About $560 / $660 a year; little or no annual-pay discount</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select Home Warranty</a></td><td>Bronze, Gold, Platinum</td><td>~$44-$58 after promotions</td><td>~$65-$100+ (varies by term)</td><td>Annual prepay offers up to $150 off plus free months</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>Starter, Essential, Premium</td><td>~$37-$47 / $50-$62 / $68-$82</td><td>$100 or $125 (higher fee = ~$5/mo less)</td><td>Plans from $31/mo in Texas and $37/mo in California, per its own pages</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Premier, Premier Plus</td><td>~$46 / $60</td><td>~$100</td><td>Annual-pay discount available</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Standard, Comprehensive</td><td>~$49-$51 / $63-$67</td><td>~$65-$125</td><td>Single-payment options cover 13 months</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>Kitchen, home and premium tiers</td><td>From ~$35-$40</td><td>$65, $85 or $100</td><td>Annual-pay discount; plans were being updated in 2026</td></tr>
</tbody>
</table>
<p><em>Sources: This Old House, NerdWallet, ConsumerAffairs, US News, SafeWise, Top10, CNN Underscored, Insurify and company pages (2025-2026 quotes). Choice, Home Warranty of America and The Home Service Club share a parent company, Rely Home; American Home Shield and 2-10 share one, Frontdoor.</em></p>
<p>For context, other well-known companies quote in the same range: NerdWallet's 2026 quotes for Liberty Home Guard averaged about $53 a month; Cinch Home Services quoted $25-$90 a month depending on plan and location; and Old Republic's tiers run roughly $540-$1,080 a year.</p>`,
  },
  {
    heading: "What each company's pricing means for you",
    body: `<h3>American Home Shield</h3>
<p>The industry's largest company has the widest price spread, from about $30 a month for its systems-only ShieldSilver plan to about $90 for ShieldPlatinum, which adds higher limits, permits and code coverage, all refrigerant and an annual HVAC tune-up. AHS says premiums vary widely by ZIP code. Its fee choice is unusually meaningful: the $125 fee cuts about $10 a month, which only stops paying off above roughly 4.8 claims a year. Frontdoor has described a "dynamic pricing model" and expected realized price increases of about 3%-4% in 2026.</p>
<h3>Choice Home Warranty</h3>
<p>Choice keeps pricing simple: two plans at roughly $47 and $55-$58 a month, with a single service fee of about $100 in 2026 quotes (some older sources list $75-$85, and some customers report promotional fees at signup that rise at renewal). Paying annually doesn't appear to save much. The $3,000 per-item cap is the key thing to weigh against the price.</p>
<h3>Select Home Warranty</h3>
<p>Select's advertised prices look low because they're usually shown after promotions - up to $150 off and free months for paying a year upfront, plus promotional add-ons like roof coverage. Before promotions, its top plan runs closer to $63 a month. Service fees vary with contract length. Compare its lower per-item limits carefully; in our review study, Select had the highest share of denial complaints.</p>
<h3>First American</h3>
<p>First American prices by state - its own pages say plans start at $31 a month in Texas and $37 in California - and for single-family homes under 5,000 square feet; larger homes, condos and other property types need a custom quote. It's especially common in real estate transactions.</p>
<h3>Home Warranty of America</h3>
<p>HWA's two plans run about $46 and $60 a month with a $100 trade call fee, and its limits (up to $5,000 on most repairs on the plans we reviewed) are higher than many similarly priced plans.</p>
<h3>The Home Service Club</h3>
<p>Prices of about $49-$67 a month, with 13-month single-payment options. It covers items regardless of age, but its per-item limits are lower than most competitors'.</p>
<h3>2-10 Home Buyers Warranty</h3>
<p>Plans start around $35-$40 a month, with a choice of $65, $85 or $100 service fees and a discount for paying annually. Its sample contract bases cash-in-lieu payments on an estimate of local retail cost, which can matter more than a few dollars of premium.</p>`,
  },
];
