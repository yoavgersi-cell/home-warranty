import type { ArticleSection } from "@/lib/config";

// Part 1: quick answer, trends at a glance, and the price/non-renewal/profit
// picture. Sources: NAIC/CIPR national homeowners MCAS analysis (Aug 5, 2026,
// via CNBC and Actuary.info); Treasury FIO report (Jan 2025); Senate Budget
// Committee "Next to Fall" (Dec 2024); Insurify price projections (Mar 2026);
// Matic renewal data (Aug 2026); AM Best (Sept 2026); Bankrate; MediaAlpha
// State of Home Insurance (Nov 10, 2026). Researched November 2026.
export const part1: ArticleSection[] = [
  {
    heading: "The state of US home insurance in November 2026",
    body: `<div class="qa"><strong>Quick answer</strong>Home insurance is still getting more expensive in 2026, but more slowly. Insurify estimates the average premium reached about $2,948 a year at the end of 2025 after a 12% jump, and projects a smaller rise of about 4% in 2026. At the same time, the coverage you get for the money keeps shrinking - higher deductibles, roofs paid at depreciated value, more exclusions - and insurers are dropping more customers: the NAIC found company-initiated non-renewals rose 96% to 216% across regions from 2018 to 2024. The good news is that insurers made money in 2025 for the first time since 2019, reinsurance costs are falling and carriers are competing for customers again, which gives homeowners more room to shop.</div>
<p>If you own a home in the United States, you've probably felt the last few years in your escrow account. This guide pulls together what's actually happening in home insurance right now - the new national data released this year, the state-by-state picture, the November elections that put four new insurance commissioners in office, and the changes to policies that matter more than the headline price. Then it turns all of that into a practical plan.</p>
<p>We cover home warranties on this site, not insurance, and we don't sell insurance. That's exactly why we're watching this: as insurance policies narrow, the gap between what insurance covers and what homeowners pay for themselves is getting wider, and that gap is where repair costs, deductibles and home warranties all meet. Every figure below comes from a named source - regulators, rating agencies, government reports and established research firms - and we flag where sources disagree.</p>
<table>
<thead><tr><th>Measure</th><th>Latest figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Average annual premium (quotes, end of 2025)</td><td>~$2,948, up 12% in 2025</td><td>Insurify (Mar 2026)</td></tr>
<tr><td>Projected change in 2026</td><td>~+4%, to ~$3,057</td><td>Insurify</td></tr>
<tr><td>Average renewal increase, first half of 2026</td><td>+10.6% (vs. +19.4% in 2025 and +28% in 2024)</td><td>Matic (Aug 2026)</td></tr>
<tr><td>Average approved rate increase, first half of 2026</td><td>4.3%</td><td>AM Best (Sept 2026)</td></tr>
<tr><td>Inflation-adjusted premium growth, 2018-2024</td><td>+18% (Northeast) to +43% (West)</td><td>NAIC (Aug 2026)</td></tr>
<tr><td>Growth in insurer-initiated non-renewals, 2018-2024</td><td>+96% to +216% by region</td><td>NAIC</td></tr>
<tr><td>Homeowners underwriting result, 2025</td><td>~$16.5 billion profit - first since 2019</td><td>AM Best (Sept 2026)</td></tr>
<tr><td>Insurer ad spending on home insurance, Jan-Sept 2026</td><td>+84% year over year</td><td>MediaAlpha (Nov 2026)</td></tr>
<tr><td>Global insured catastrophe losses, first 9 months of 2026</td><td>~$92 billion - lowest since 2019</td><td>Gallagher Re</td></tr>
<tr><td>US severe convective storm losses through Q3 2026</td><td>At least ~$43 billion</td><td>Gallagher Re, Aon, Swiss Re (as reported)</td></tr>
</tbody>
</table>
<p><em>Average premium figures from different publishers aren't directly comparable: Bankrate's average ($2,424 for $300,000 of dwelling coverage) and NerdWallet's ($2,490 for $400,000) use different coverage amounts and quote data than Insurify's.</em></p>`,
  },
  {
    heading: "The 10 biggest home insurance trends of 2026",
    body: `<p>Here's the whole picture on one screen. Each trend gets its own section below.</p>
<ol>
<li><strong>Premiums are still rising - but the increases are shrinking.</strong> Renewal increases roughly halved from 2025 to 2026.</li>
<li><strong>Non-renewals have spread far beyond Florida and California.</strong> The first national regulator data shows insurer-initiated non-renewals rising in every region.</li>
<li><strong>Insurers are profitable again and spending to win customers.</strong> The first homeowners underwriting profit since 2019, and an 84% jump in advertising.</li>
<li><strong>Reinsurance is getting cheaper,</strong> which should slow price increases further in 2027.</li>
<li><strong>Hail and severe storms are the new hurricane.</strong> A quiet hurricane season, but a fourth straight year of $40 billion-plus severe storm losses.</li>
<li><strong>Policies are quietly covering less:</strong> bigger and percentage-based deductibles, roofs paid at depreciated value, cosmetic damage exclusions.</li>
<li><strong>Aerial images and AI are deciding who gets renewed</strong> - and states are starting to set rules.</li>
<li><strong>Fortified roofs and mitigation grants are going mainstream,</strong> with mandated discounts in several states.</li>
<li><strong>State markets are diverging:</strong> Florida is recovering, California is rebuilding its market, and the Plains and Mountain West are the new pressure points.</li>
<li><strong>New regulators are taking office:</strong> four states elected insurance commissioners on November 3, including an upset in Georgia.</li>
</ol>`,
  },
  {
    heading: "Trend 1: Premiums are still rising, but more slowly",
    body: `<p>After three years of double-digit increases, 2026 is the year home insurance prices started to cool. The evidence lines up across very different data sources:</p>
<ul>
<li><strong>Renewals:</strong> Matic, which analyzes the policies it places, reported an average renewal increase of 10.6% in the first half of 2026, down from 19.4% in 2025 and 28% in 2024.</li>
<li><strong>Approved rates:</strong> AM Best found the average approved homeowners rate increase slowed to 4.3% in the first half of 2026.</li>
<li><strong>Quoted prices:</strong> Insurify projects the average premium will rise about 4% in 2026, to roughly $3,057 by December, after a 12% jump in 2025. By its count, premiums are still up about 46% since 2021.</li>
</ul>
<p>Slower growth isn't the same as falling prices. A 4% to 10% increase on top of several years of steep ones still means most homeowners are paying far more than they did before the pandemic. And averages hide a wide spread: Insurify projects the biggest 2026 increases in California (+15.8%), Nebraska (+13.2%), New Mexico (+10.8%) and Georgia (+10%), while Florida and Louisiana are seeing flat or falling rates.</p>
<h3>The most expensive states</h3>
<table>
<thead><tr><th>State</th><th>Bankrate average (Apr 2026, $300K dwelling)</th><th>What's driving it</th></tr></thead>
<tbody>
<tr><td>Nebraska</td><td>~$6,587</td><td>Hail and severe convective storms</td></tr>
<tr><td>Louisiana</td><td>~$6,274</td><td>Hurricanes; market still recovering from 2020-2021 losses</td></tr>
<tr><td>Florida</td><td>~$5,838</td><td>Hurricanes; prices now flat to falling after 2022-2023 reforms</td></tr>
<tr><td>Oklahoma</td><td>~$4,695</td><td>Hail, tornadoes, roof claims</td></tr>
<tr><td>Kansas</td><td>~$4,444</td><td>Hail and wind</td></tr>
</tbody>
</table>
<p><em>Source: Bankrate's April 2026 state ranking as reported by ClickOrlando. Other publishers rank states differently - Insurify and Insurance.com both put Florida first at roughly $8,300-$8,500 - because they use different coverage amounts and quote samples. The cheapest states, such as Vermont and Delaware, average around $1,000 a year in Bankrate's data.</em></p>
<h3>The long view from regulators</h3>
<p>In August 2026 the National Association of Insurance Commissioners (NAIC) published its first national analysis of homeowners insurance, built from Market Conduct Annual Statement filings by about 715 insurers for 2018 through 2024. After adjusting for inflation, average premiums per policy rose about 18% in the Northeast, 25% in the Midwest, 27% in the Southeast and 43% in the West. That matches an earlier Treasury Federal Insurance Office report (January 2025, covering 2018-2022), which found premiums per policy rising 8.7% faster than inflation, and households in the riskiest fifth of ZIP codes paying an average of $2,321 - 82% more than those in the safest fifth.</p>`,
  },
  {
    heading: "Trend 2: Non-renewals have gone national",
    body: `<p>Price is only half the story. Getting - and keeping - a policy has become harder too. A non-renewal is when the insurer, not you, decides not to continue your policy at the end of its term. You usually get advance notice (the required period varies by state), but you then need to find coverage elsewhere, often at a higher price or through a state's insurer of last resort.</p>
<p>The NAIC's 2026 analysis found company-initiated non-renewals per 1,000 policies rose between 96% and 216% across its regions from 2018 to 2024, with the West showing the largest increase in most summaries of the data (some coverage attributes the 216% figure to the Southeast; we'd treat the exact regional split as unconfirmed until you check the report itself). By 2024, the West saw about 25 insurer-initiated non-renewals per 1,000 policies and the Southeast about 22.</p>
<p>The earlier federal data point the same way. A December 2024 Senate Budget Committee staff report, based on county-level data from 23 insurers, found the national non-renewal rate rising from about 0.8% in 2018 to 1.06% in 2023, with the highest rates in Florida and parts of California - Lake County, California topped the list at about 7.6% in 2023. The Treasury report found non-renewal rates about 80% higher in the highest-risk ZIP codes. Industry groups disputed both federal reports' conclusions.</p>
<h3>What states are doing about it</h3>
<ul>
<li><strong>California</strong> imposes one-year non-renewal moratoriums in ZIP codes near declared wildfires. In 2026 these covered, among others, about 150,000 residents around the Gifford Fire and more than 64,000 around the Gann Fire, and a law effective January 1, 2026 extended the protections to commercial property.</li>
<li><strong>Texas</strong> now requires insurers to give written reasons for declines and non-renewals and to report them to the Texas Department of Insurance quarterly by ZIP code, starting January 1, 2026.</li>
<li><strong>Minnesota</strong> lets insurers non-renew after three or more weather-related losses of over $10,000 each - a reminder that some states have set explicit rules for when claims history can cost you your policy.</li>
</ul>
<p>If you get a non-renewal notice, don't wait. Ask the insurer for the specific reason in writing, fix what you can (a roof, a tree, an outstanding repair), and start shopping immediately. Our action plan below walks through it.</p>`,
  },
  {
    heading: "Trend 3: Insurers are profitable again - and want new customers",
    body: `<p>The flip side of years of rate increases is that the business has recovered. AM Best reported that US homeowners insurers earned an underwriting profit of about $16.5 billion in 2025, the first since 2019, after a loss of about $1.3 billion in 2024. Sources calculate the 2025 combined ratio (claims and expenses as a share of premiums, where under 100 means profit) differently - AM Best's figure is 84.5, while Verisk and APCIA put it at 88.1, which they called the best in more than a decade - but all agree it was strongly profitable. AM Best attributed it to higher prices, better catastrophe management, a relatively benign year for catastrophes and about $4.1 billion in reserve releases.</p>
<p>2026 has continued in the same direction. The Insurance Information Institute reported a homeowners loss ratio of about 49% in the first half of 2026, the best first half in more than a decade, and S&P Global Market Intelligence reported a first-quarter homeowners loss ratio of about 44, compared with more than 100 in the first quarter of 2025, when the Los Angeles wildfires hit.</p>
<h3>"Back on offense"</h3>
<p>Profit changes behavior. MediaAlpha's first State of Home Insurance report, released November 10, 2026, found that insurers advertising on its platform in both years raised home insurance ad spending 84% from January to September 2026 compared with the same period of 2025, and now advertise in about twice as many states per month as they did in 2023. Texas has the largest share of that spending and Georgia has become second, while Florida's share has fallen to about 5% from roughly half in late 2023. Home insurance searches on its platform hit a record, and 62% of shoppers already had a policy - in other words, people are shopping around, not just buying for the first time. MediaAlpha's data reflect its own marketplace, not the whole industry, but the direction is clear.</p>
<p><strong>What it means for you:</strong> when insurers want growth, shoppers have leverage. If you haven't compared quotes since your last big increase, 2026 is a good year to do it.</p>`,
  },
  {
    heading: "Trend 4: Cheaper reinsurance should slow 2027 increases",
    body: `<p>Reinsurance - the insurance that insurance companies buy - is one of the biggest hidden costs in your premium, especially in hurricane and wildfire states. It's now getting cheaper. Property catastrophe reinsurance rates fell about 12% at the January 1, 2026 renewals and about 16% at mid-year, according to analysts at KBW, and Fitch reported reductions of up to 25% for US loss-free business at mid-year. For the January 1, 2027 renewals, KBW expects declines of at least 10%, J.P. Morgan expects 10% to 20%, and Fitch and Moody's also expect further softening, though reinsurer Hannover Re has signaled a slower pace of cuts.</p>
<p>Cheaper reinsurance doesn't flow into your bill overnight - insurers must file rates and regulators must approve them - but it's the main reason analysts expect smaller increases in 2027 than in recent years, and it's part of why Florida's market has turned around.</p>`,
  },
  {
    heading: "Trend 5: Hail and severe storms are the new hurricane",
    body: `<p>The 2026 Atlantic hurricane season was quiet, with about 10 named storms - the fewest since 2014 - as El Niño suppressed activity. But one storm made it count: Hurricane Isaias made landfall near Destin, Florida on October 9, 2026 as a Category 2 storm with 105 mph winds, the first US hurricane landfall since Milton in October 2024. Insured-loss estimates range from about $1 billion to $4.5 billion depending on the modeler (Verisk, Cotality, KCC and Moody's RMS), and Citizens Property Insurance briefly suspended new business in the storm's path. The season officially ends November 30.</p>
<p>The bigger story is inland. US severe convective storms - hail, tornadoes and damaging winds - caused at least about $43 billion in insured losses through the third quarter of 2026, the fourth straight year above $40 billion, with the largest single outbreak (April 22 to May 1) costing more than $6 billion. The Texas Department of Insurance says hail caused more than $3 billion in homeowners losses in Texas in 2025 alone, and in Colorado the Division of Insurance says hail accounts for roughly a quarter to more than half of premiums, depending on the county.</p>
<p>Globally, Gallagher Re estimated insured catastrophe losses at about $92 billion for the first nine months of 2026, the lowest since 2019 and about 29% below the 10-year average, with the US accounting for about 62%. A lighter year helps insurers' results - and, eventually, prices - but it doesn't change the long-term trend that has pushed premiums up in hail country.</p>
<p><strong>What it means for you:</strong> if you live in the Plains, Texas or the Mountain West, your roof is now the single biggest factor in your insurance - in your price, your deductible and whether you're renewed.</p>`,
  },
];
