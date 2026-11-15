import type { ArticleSection } from "@/lib/config";

// Part 1: quick answer, the numbers that frame the decision, how real estate
// plans differ, and the seller's math. Sources: NAR existing-home sales (Jan
// and Oct 2026 releases); Redfin seller-concession reports (Feb, May, Sept
// 2026); NAHB analysis of 2024 ACS housing age (Mar 2026); Frontdoor FY2025
// and Q3 2026 results; HomeAdvisor inspection costs (June 2026, as cited);
// company real estate pages and brochures (AHS, First American, 2-10, Choice,
// HWA, Old Republic, Cinch). Researched November 2026.
export const part1: ArticleSection[] = [
  {
    heading: "Home warranties in a home sale: the short answer",
    body: `<div class="qa"><strong>Quick answer</strong>A home warranty bought during a home sale is a one-year service contract, usually ordered by the agent and paid at closing - often by the seller - that covers the buyer's home systems and appliances from the day of closing, typically with no 30-day waiting period. One-year real estate plans commonly cost about $400-$850 depending on the company, state and tier. Many also give the seller free or low-cost "listing coverage" while the home is on the market. A home warranty is never required by a lender. The best plan for a sale is a real estate plan from a company with a strong real estate program, chosen by the buyer, with the seller paying up to an agreed amount.</div>
<p>Most articles about home warranties in real estate stop at "sellers offer them to make listings attractive." That's true, but it skips the parts that actually decide whether a warranty helps you: how real estate plans differ from plans you buy yourself, what seller coverage really protects, how the home inspection can work for or against a future claim, who chooses the company (and who may be paid by it), and how to negotiate the cost.</p>
<p>This guide covers all of it, for both sides of the deal. It draws on company real estate contracts and brochures, state purchase contract forms, federal rules on settlement-service payments, and current market data from NAR, Redfin and the Census Bureau. Where companies' own materials conflict or a detail varies by state, we say so - real estate plans are more state-specific than any other kind of home warranty.</p>`,
  },
  {
    heading: "The numbers that frame the decision",
    body: `<p>Before getting into plans, it helps to see the market a buyer or seller is operating in right now:</p>
<table>
<thead><tr><th>Measure</th><th>Latest figure</th><th>Why it matters</th></tr></thead>
<tbody>
<tr><td>US existing-home sales, 2025</td><td>4.06 million - tied for the lowest since 1995</td><td>A slow market gives buyers more negotiating room, including on concessions like a home warranty (NAR, Jan 2026)</td></tr>
<tr><td>Existing-home sales pace, September 2026</td><td>3.99 million (annualized), median 33 days on market</td><td>Still a slow market (NAR, Oct 2026)</td></tr>
<tr><td>Median existing-home price</td><td>$414,400 (2025); $417,500 (Sept 2026)</td><td>A $500-$800 warranty is roughly 0.1%-0.2% of the price</td></tr>
<tr><td>Share of sales with a seller concession</td><td>44.7% (August 2026) - highest August since at least 2020</td><td>Concessions are normal, not a sign of weakness (Redfin)</td></tr>
<tr><td>Median seller concession</td><td>$9,800 (February 2026), up from $6,200 a year earlier</td><td>A warranty is a small concession by comparison (Redfin)</td></tr>
<tr><td>Median age of an owner-occupied US home</td><td>42 years; about 47% built before 1980</td><td>Most buyers are buying older systems (NAHB analysis of 2024 ACS)</td></tr>
<tr><td>Typical home inspection cost</td><td>About $300-$450 (HomeAdvisor average ~$344)</td><td>The inspection and warranty work together (see below)</td></tr>
<tr><td>One-year real estate home warranty</td><td>Roughly $400-$850, by company, state and tier</td><td>See plan and price details below</td></tr>
</tbody>
</table>
<p><em>Sources: National Association of Realtors existing-home sales releases (January and October 2026); Redfin seller concession reports (2026); NAHB Eye on Housing, March 2026; HomeAdvisor data as cited (June 2026); company real estate price sheets and brochures.</em></p>
<p>Two of those numbers do most of the work. First, concessions are now part of nearly half of all sales, and the median concession is roughly ten to twenty times the cost of a home warranty. Second, the typical American house is more than 40 years old - and an inspection, however careful, can't tell a buyer when a 14-year-old furnace will quit.</p>
<p>One number we couldn't find: a reliable, current share of home sales that include a home warranty. Older industry data cited by 2-10 found about 17% of sellers offered a home warranty as an incentive in NAR's 2020 data, making it the most common incentive at the time. We'd treat any precise "X% of homes sell with a warranty" claim with caution.</p>`,
  },
  {
    heading: "How a real estate home warranty differs from one you buy yourself",
    body: `<p>Real estate plans and direct-to-consumer plans are sold by the same companies and cover the same kinds of items, but the terms around them differ in ways that matter:</p>
<table>
<thead><tr><th>Term</th><th>Real estate plan (bought for a sale)</th><th>Direct-to-consumer plan</th></tr></thead>
<tbody>
<tr><td>Who orders it</td><td>Usually the agent or title/escrow, on the buyer's or seller's behalf</td><td>The homeowner</td></tr>
<tr><td>Who pays</td><td>Negotiable - often the seller, at closing</td><td>The homeowner, monthly or yearly</td></tr>
<tr><td>Coverage start</td><td>At closing</td><td>After a waiting period, usually 30 days</td></tr>
<tr><td>Waiting period</td><td>Usually waived. First American: none if bought within 60 days of closing; AHS: buyer coverage starts on closing day</td><td>Typically 30 days</td></tr>
<tr><td>Pre-existing conditions</td><td>Some real estate plans cover "unknown" or "undetectable" pre-existing problems (AHS, HWA, Old Republic and some First American versions say so)</td><td>Usually excluded more broadly</td></tr>
<tr><td>Seller coverage</td><td>Often available during the listing period</td><td>Not applicable</td></tr>
<tr><td>Price</td><td>One-time annual price, roughly $400-$850</td><td>Monthly pricing; annual totals vary</td></tr>
<tr><td>Plan names</td><td>Often different from consumer plans (AHS: ShieldEssential, ShieldPlus, ShieldComplete)</td><td>AHS: ShieldSilver, ShieldGold, ShieldPlatinum</td></tr>
<tr><td>After year one</td><td>Renews at the company's then-current price, typically as an annual or monthly consumer plan</td><td>Renews annually</td></tr>
</tbody>
</table>
<p><em>Sources: AHS real estate pages and FAQ; First American real estate pages and contracts; HWA and Old Republic brochures. Terms vary by state and contract version.</em></p>
<p>The two differences buyers should care about most are the start date and pre-existing conditions. A plan bought directly would leave a new owner uncovered for the first month - exactly when an unfamiliar house is most likely to surprise them. And coverage for problems that existed but couldn't be detected is genuinely more generous than most consumer contracts. Neither is universal, though: read the specific contract for the state where the home is located.</p>`,
  },
  {
    heading: "Should the seller pay for a home warranty? The seller's math",
    body: `<p>For a seller, a home warranty is a negotiating tool and a risk-management tool. It's worth looking at both honestly.</p>
<h3>As a concession, it's cheap</h3>
<p>Redfin's data show sellers contributed something - closing costs, repair credits, rate buydowns - in about 45% of sales in 2026, with a median concession of $9,800 in February. Against that, a one-year real estate plan costs a few hundred dollars. If a buyer asks for help, a warranty is one of the least expensive ways to say yes, and it addresses a specific fear (that something expensive will break in year one) rather than just cutting the price.</p>
<h3>As risk management, it's limited but real</h3>
<p>A warranty can reduce post-closing disputes: if the water heater fails a month after closing, the buyer has a contract to call instead of the seller. It doesn't change a seller's disclosure obligations - failing to disclose a known defect is a legal problem a warranty won't fix - and it won't stop a determined buyer from pursuing a claim. But it gives both sides a defined path for ordinary breakdowns.</p>
<h3>Listing coverage protects the sale itself</h3>
<p>Many companies cover the seller's systems while the home is listed, often for free or a small fee when the buyer's plan is ordered at closing. If the furnace dies during a January showing period, a covered repair at a service fee is far better than an emergency replacement that could derail an offer. The next section compares those terms company by company.</p>
<h3>What the evidence doesn't show</h3>
<p>Home warranty companies often claim homes with warranties sell faster or for more. We haven't found independent, recent research that proves it, and we'd discount company-sponsored figures. The honest case for a seller-paid warranty is that it's a low-cost, targeted concession in a market where concessions are normal - not that it reliably raises the sale price.</p>`,
  },
];
