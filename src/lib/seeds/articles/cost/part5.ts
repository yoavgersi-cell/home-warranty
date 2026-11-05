import type { ArticleSection } from "@/lib/config";

// Part 5: real estate pricing (This Old House, TREC contract and disclosure,
// Old Republic TX brochure, First American listing form, AHS), the industry's
// economics (Frontdoor FY2025 10-K / earnings; derived figures labeled), and
// price vs inflation (BLS).
export const part5: ArticleSection[] = [
  {
    heading: "How much does a home warranty cost when you buy or sell a home?",
    body: `<p>Real estate home warranties are typically one-year plans bought at closing, often paid by the seller as a concession. This Old House puts typical seller-purchased plans at about <strong>$400-$700</strong>. A few concrete data points:</p>
<ul>
<li><strong>Texas:</strong> the standard TREC resale contract lets the buyer purchase a residential service contract and has the seller reimburse it at closing "in an amount not exceeding" a figure the parties fill in. There's no default amount - it's negotiated. Old Republic's Texas real estate brochure (late 2022) listed its Standard plan at $465 with an $85 trade call fee.</li>
<li><strong>Listing coverage for sellers:</strong> many companies cover the seller's home while it's on the market, sometimes free if the buyer's plan is ordered at closing. A First American sample real estate form shows seller coverage for up to 180 days, with a $60 charge if the sale never closes and some coverage capped at $1,500.</li>
<li><strong>Timing:</strong> American Home Shield offers real estate pricing for up to 60 days after closing, with coverage starting on closing day.</li>
</ul>
<p><strong>Buyer tip:</strong> real estate plans often cover unknown or undetectable pre-existing conditions that direct-to-consumer plans exclude, and they typically skip the 30-day waiting period - genuinely valuable features in your first year. But only about 29% of Frontdoor's real estate customers renew after year one, versus about 81% of established customers, so decide at renewal based on what you learned about the house.</p>`,
  },
  {
    heading: "What customers really pay: the view from the industry's financials",
    body: `<p>Quotes show what companies charge new customers. One company's SEC filings show what customers pay over time. Frontdoor - the parent of American Home Shield and 2-10 - reported for fiscal 2025:</p>
<table>
<thead><tr><th>Frontdoor metric (FY2025)</th><th>Figure</th></tr></thead>
<tbody>
<tr><td>Revenue</td><td>$2.09 billion, up 14% (about 3 points from price; most of the rest from acquiring 2-10)</td></tr>
<tr><td>Renewal revenue</td><td>$1.59 billion, up from $1.44 billion</td></tr>
<tr><td>Home warranties in force</td><td>2.11 million (about 1.58 million renewals, 0.32 million first-year direct, 0.21 million first-year real estate)</td></tr>
<tr><td>Gross margin</td><td>55%</td></tr>
<tr><td>Expected price increase</td><td>About 3%-4% for 2026 (raised in August 2026)</td></tr>
</tbody>
</table>
<p>Dividing renewal revenue by renewing warranties gives a rough figure of <strong>about $1,000 per renewing warranty per year</strong> (roughly $84 a month) - our own calculation, and an imperfect one, since it divides a full year's revenue by a year-end count and is influenced by the 2-10 acquisition. Even so, it's well above the $56-$73 average new-customer quotes, and close to the roughly $1,200 that survey respondents most commonly report paying. The likely reasons: renewing customers tend to hold higher-tier plans and add-ons, promotional first-year discounts expire, and prices rise each year.</p>
<p>Frontdoor has also told investors it has become "more nimble" at using trade service fees to protect margins, and its 2025 annual report credits higher trade service fees, among other factors, with keeping claims costs roughly flat. In plain terms: <strong>expect both premiums and service fees to drift up over time.</strong></p>`,
  },
  {
    heading: "Are home warranty prices rising faster than inflation?",
    body: `<p>Not dramatically, at least at the largest company. Frontdoor's realized price increase was about 3% in 2025, with 3%-4% expected in 2026. For comparison, the Bureau of Labor Statistics reported that overall consumer prices rose 3.7% in the 12 months through September 2026, and the index for household furnishings and operations rose 4.0% during 2025.</p>
<p>But two things push your personal cost up faster than the headline price:</p>
<ul>
<li><strong>Service fees.</strong> NerdWallet's 2026 average fee was about $108, while the most common fee reported by customers in This Old House's survey was $75 - suggesting newer contracts carry higher fees than older ones.</li>
<li><strong>Promotional first years.</strong> If you bought at an introductory price, your first renewal can jump. Always check the renewal quote, and shop it - just as you would insurance.</li>
</ul>
<p>Meanwhile, the repairs a warranty covers have gotten more expensive, particularly air conditioning, where refrigerant changes and equipment price increases have raised replacement costs (see our <a href="/articles/r-410a-phase-out-home-warranty">R-410A guide</a>). Rising repair costs are part of the case for a warranty - and also why companies watch caps and cash-out amounts closely.</p>`,
  },
];
