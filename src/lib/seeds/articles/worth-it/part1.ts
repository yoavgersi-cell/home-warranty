import type { ArticleSection } from "@/lib/config";

// Part 1: byline, direct answer, and the industry's own economics (Frontdoor
// FY2025 10-K / earnings, Fed SHED 2025, Consumer Reports, FTC, TOH survey).
export const part1: ArticleSection[] = [
  {
    heading: "Is a home warranty worth it? The direct answer",
    body: `<p><em>Written by the Top Home Warranty Editorial Team | Fact-checked October 2026</em></p>
<div class="qa"><strong>Quick verdict</strong>A home warranty is <strong>worth it for some homeowners and a poor deal for others</strong>, and you can tell which group you're in. On average, customers pay in more than they get back - the largest company's own financials show roughly 45 cents of each revenue dollar going to the cost of delivering service. What you're really buying is protection against a bad year: a dead AC (about $6,000 to replace) or furnace (about $4,800) for a $650-a-year plan plus a $100-$125 fee. It pays off when several major systems are past mid-life, you couldn't comfortably cover a $5,000 surprise, and you choose a plan with caps high enough for your equipment. It rarely pays off in newer homes, for high-end appliances, or if you already have a solid repair fund.</div>
<p>Most "is it worth it" articles end with "it depends." That's true, but it isn't useful. This guide tells you <em>what</em> it depends on, puts numbers on each factor, and gives you a way to work out your own answer in about ten minutes.</p>
<p>We built it from four kinds of evidence:</p>
<ul>
<li><strong>The industry's own numbers</strong> - Frontdoor, Inc., the publicly traded parent of American Home Shield and 2-10 Home Buyers Warranty, discloses revenue, claims costs and renewal rates in its SEC filings.</li>
<li><strong>Real repair and replacement costs</strong> from 2025-2026 cost guides, and how long systems actually last.</li>
<li><strong>Our own analysis of 351 recent customer reviews</strong> of five major companies, captured October 26, 2026.</li>
<li><strong>The contracts themselves</strong> - caps, fees and how each company pays when it won't repair.</li>
</ul>`,
  },
  {
    heading: "What the industry's own financials say about value",
    body: `<p>Home warranty companies rarely talk about the economics of their product. One does, because it has to. Frontdoor files annual and quarterly reports with the SEC, and they're the clearest public window into how much of your money comes back as repairs.</p>
<table>
<thead><tr><th>Frontdoor metric (fiscal 2025)</th><th>Figure</th><th>What it tells you</th></tr></thead>
<tbody>
<tr><td>Revenue</td><td>$2.09 billion</td><td>Scale: the largest US home warranty company</td></tr>
<tr><td>Gross margin</td><td>55%</td><td>Roughly 45 cents of each revenue dollar went to the cost of delivering services</td></tr>
<tr><td>Home warranties in force</td><td>2.11 million (Dec 31, 2025)</td><td>Flat versus 2.12 million in 2024</td></tr>
<tr><td>Service requests per year</td><td>About 3.8 million, via about 17,000 contractor firms</td><td>Roughly 1.8 requests per warranty per year, on average</td></tr>
<tr><td>Customer retention</td><td>79.2%</td><td>About four in five customers stay each year</td></tr>
<tr><td>Renewal rate, existing customers</td><td>81%</td><td>Customers who've kept a plan a year tend to keep it</td></tr>
<tr><td>First-year renewal, real estate customers</td><td>29%</td><td>Most people who get a plan at closing drop it after year one</td></tr>
<tr><td>First-year renewal, direct-to-consumer (2024)</td><td>72%</td><td>People who chose to buy one mostly keep it</td></tr>
</tbody>
</table>
<p>Two readings of this table matter for your decision.</p>
<p><strong>First, the average customer pays more than they receive.</strong> A 55% gross margin means the cost of delivering service - mostly payments to contractors and for parts and equipment - was about 45% of revenue. (Cost of services also covers some non-warranty business lines, so treat it as an approximation.) That isn't a scandal. It's how every insurance-like product works: the company has to cover overhead, marketing and profit. It means a home warranty is not an investment that "pays for itself" on average. Its value is in moving money from good years to bad ones.</p>
<p><strong>Second, renewal behavior is a revealed-preference test.</strong> Eight in ten established customers renew, and 72% of people who bought directly renewed after their first year in 2024. Customers who got a plan bundled into a home purchase - often paid by the seller - renew at just 29%. People who've lived with a warranty and chosen to keep paying for it are telling you something. So are the seven in ten home buyers who walked away once the plan stopped being free.</p>`,
  },
  {
    heading: "The real question: could you cover a $5,000 repair tomorrow?",
    body: `<p>Because the average customer gets back less than they pay, the case for a home warranty rests almost entirely on <strong>cash flow and risk</strong>, not on expected savings.</p>
<p>That's why your finances matter more than your house. According to the Federal Reserve's 2026 report on household well-being (covering 2025), <strong>63% of adults said they would cover a $400 emergency expense with cash or its equivalent</strong> - meaning more than a third would not, and 12% couldn't pay it by any means. Bankrate's 2026 emergency savings report found fewer than half of Americans had three months of expenses saved. And Angi's 2025 State of Home Spending report put the average household's emergency home repair spending at $1,143 for the year.</p>
<p>Set those numbers next to the cost of a failed air conditioner (about $6,000 to replace) and the logic of a home warranty becomes clear. For a household that would put a $6,000 AC on a credit card at 20%-plus interest, a plan that turns that into a $100 service fee plus premiums is real protection. For a household with $30,000 in savings, the same plan is a convenience with a negative expected return.</p>
<p>Consumer Reports has long recommended the second approach for people who can manage it: put the money you'd spend on a warranty into a savings account dedicated to home repairs. On extended service contracts generally, a Consumer Reports editor has noted that the median cost of a contract is about the same as the median cost of a single repair. The Federal Trade Commission's advice is more neutral - check the total cost including per-visit fees, the reimbursement limits and exclusions, and the company's reputation - but it lands in the same place: know exactly what you're buying.</p>
<p>And customers who do buy are mostly satisfied. In This Old House's January 2026 survey of about 2,000 warranty customers, about 83% said they were satisfied or very satisfied. (The publisher earns affiliate revenue from home warranty reviews, and respondents were current customers, so read that as an upper bound.)</p>`,
  },
];
