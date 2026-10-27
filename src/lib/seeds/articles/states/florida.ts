import type { ArticleData } from "@/lib/config";
import { providerTable, otherStates } from "./shared";

// Florida state guide. Researched Oct 2026 from Fla. Stat. ch. 634 Part II
// (634.301-634.348), OIR and DFS materials, Insurance Journal (First Premier
// 2026; earlier OIR orders), EIA RECS 2020 and EIA press release 510, Census
// QuickFacts, BLS OEWS, FR/BAR contract materials and our review study.
export const floridaGuide: ArticleData = {
  slug: "best-home-warranty-florida",
  title: "Best Home Warranty in Florida (2026): Companies & Laws",
  description:
    "The best home warranty companies in Florida for 2026, Florida's home warranty law and refund rules, and what year-round AC use and hurricanes mean for coverage.",
  category: "State Guides",
  readTime: "16 min read",
  publishedAt: "2026-10-27",
  updatedAt: "2026-10-27",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "Florida licenses home warranty companies as 'home warranty associations' through the Office of Insurance Regulation under chapter 634 of the Florida Statutes; complaints go to the Department of Financial Services (1-877-693-5236).",
    "Florida law gives a full refund (minus claims and up to a 5% fee) if you cancel within 10 days, requires exclusions in bold type, and lets consumers sue for the greater of actual damages or $500 plus attorney's fees after giving notice.",
    "Air conditioning dominates: about 90% of Florida homes have central AC, and AC accounts for 28% of household energy use versus 9% nationally - so HVAC limits and response times matter most.",
    "Home warranties don't cover hurricane or storm damage - Florida law defines them as covering wear and tear and defects, not consequential damage - so pair one with the right property and wind coverage.",
  ],
  sections: [
    {
      heading: "Best home warranty in Florida: the short answer",
      body: `<div class="qa"><strong>Quick answer</strong>All seven companies we track sell home warranties in Florida, where companies must be licensed home warranty associations under chapter 634 of the Florida Statutes. Because Florida homes run their air conditioning almost year-round, compare <strong>HVAC limits, refrigerant terms and emergency AC response</strong> first. <strong>American Home Shield</strong> and <strong>First American</strong> publish the strongest AC terms, and <strong>Choice</strong> offers simpler, lower-cost plans. Remember that no home warranty covers hurricane, flood or wind damage - that's what property and flood insurance are for.</div>
<p>Florida has one of the more detailed home warranty laws in the country, with consumer rights written directly into the statute. This guide covers who sells in Florida, your rights, what Florida's climate means for coverage, home warranties in Florida home sales, and our picks.</p>`,
    },
    {
      heading: "Which home warranty companies sell in Florida?",
      body: `<p>All seven companies we review offer coverage in Florida. In Florida, the company legally responsible for your contract must be licensed by the Office of Insurance Regulation (OIR) as a home warranty association, and it may be an affiliate of the brand you buy from - Choice-family contracts in Florida, for example, name Home Warranty Administrator of Florida, Inc. as obligor. You can check a company's license through OIR's company search.</p>
${providerTable("Florida", {
  "choice-home-warranty": "Available; Florida contracts issued by Home Warranty Administrator of Florida, Inc.",
  "american-home-shield": "Available",
  "select-home-warranty": "Available",
  "first-american": "Available; Florida-specific plan page",
  "home-warranty-of-america": "Available",
  "home-service-club": "Available",
  "2-10-home-buyers-warranty": "Available",
})}`,
    },
    {
      heading: "How Florida regulates home warranties",
      body: `<p>Florida regulates home warranties under <strong>chapter 634, Part II of the Florida Statutes</strong> (sections 634.301-634.348). Home warranty associations are governed by that part and exempt from the rest of the Insurance Code.</p>
<h3>Licensing and financial requirements</h3>
<ul>
<li><strong>License required.</strong> Selling home warranties as an obligor without an OIR license is a first-degree misdemeanor (section 634.303).</li>
<li><strong>Reserves.</strong> Associations must hold an unearned-premium reserve of at least 25% of gross written premiums on Florida contracts in force, in unencumbered assets, unless they carry contractual liability insurance that covers 100% of claim exposure and pays claimants directly if the association fails (section 634.3077). A 2025 law allowed associations to use contractual liability policies from more than one insurer.</li>
<li><strong>Rates aren't approved.</strong> Since 2011, contracts must state that the rate is not regulated by OIR. Forms don't need OIR approval, but OIR can order a company to stop using a noncompliant contract.</li>
</ul>
<h3>What a Florida contract must include (section 634.312)</h3>
<ul>
<li><strong>Exclusions in boldface</strong>, with a front-page statement that certain items and events aren't covered and a pointer to the exclusions.</li>
<li><strong>Delivery</strong> of the contract within 45 days after coverage starts.</li>
<li><strong>Transferability</strong> - notice of your right to assign the contract to a later buyer of the home; the assignment fee is capped at $40.</li>
<li>A notice that listing-period coverage may not be provided free of charge.</li>
</ul>
<h3>Cancellation and refunds</h3>
<table>
<thead><tr><th>When you cancel</th><th>Florida rule (section 634.312)</th></tr></thead>
<tbody>
<tr><td>Within 10 days of purchase</td><td>Full refund of the gross premium, minus claims paid; the company may keep an administrative fee of up to 5%</td></tr>
<tr><td>After 10 days</td><td>Refund based on 90% of the unearned pro rata premium, minus claims paid</td></tr>
<tr><td>If the company cancels (other than for fraud or misrepresentation)</td><td>100% of the unearned pro rata premium, minus claims paid</td></tr>
</tbody>
</table>
<h3>Unfair claim practices and your right to sue</h3>
<p>Florida law (section 634.336) prohibits misrepresentation and false advertising, and - when done often enough to be a general business practice - failing to properly investigate claims or denying claims without a reasonable investigation. Section 634.3284 gives consumers a private right of action for <strong>the greater of actual damages or $500</strong>, plus costs and attorney's fees, after giving written notice to the Department of Financial Services and the company; there's no lawsuit if the problem is cured within 30 days, and class actions aren't allowed. OIR can also impose administrative fines and order restitution (section 634.3112).</p>
<h3>How to file a complaint in Florida</h3>
<p>Contact the company first and allow it time to respond. Then file with the <strong>Department of Financial Services, Division of Consumer Services</strong>: online at myfloridacfo.com or by calling 1-877-693-5236 (out of state: 850-413-3089). Keep copies of everything - if you later use the private right of action, written notice is required.</p>`,
    },
    {
      heading: "Florida enforcement actions",
      body: `<ul>
<li><strong>First Premier Home Warranty (2026).</strong> In October 2026, OIR announced a complaint against First Premier Home Warranty Corp. for acting as an obligor without a Florida license, saying it sold 207 Florida contracts from 2023 to 2026 and collected about $108,500, according to Insurance Journal. The same company faced orders in California (2021) and Oklahoma (2024).</li>
<li><strong>Earlier unlicensed sellers.</strong> OIR ordered National Home Protection and Nationwide Home Warranty (no relation to Nationwide Mutual) to stop selling in 2009 and to honor contracts in force - Claims Journal reported at the time that National Home Protection had a reputation for denying claims - and acted against American Fidelity Services in 2012.</li>
</ul>
<p>As in other states, the lesson is to verify a license before you buy, especially from a company you've never heard of that contacted you first.</p>`,
    },
    {
      heading: "What Florida homes need from a home warranty",
      body: `<h3>Air conditioning, all year</h3>
<p>Florida is the most AC-dependent state in the country. According to EIA's 2020 Residential Energy Consumption Survey, <strong>96% of Florida households have air conditioning and 90% use central AC</strong>, and air conditioning accounts for <strong>28% of household site energy use, versus 9% nationally</strong>. Florida AC systems run far more hours per year than systems in most states, which shortens their lives. HVAC limits, refrigerant and upgrade coverage, and emergency response times are the most important parts of a Florida plan; see our <a href="/articles/r-410a-phase-out-home-warranty">AC refrigerant guide</a>.</p>
<h3>Mostly electric homes</h3>
<p>About 66% of Florida homes heat with electricity and 77% are all-electric, the highest share of any state, per EIA. Heat pumps are common, and a heat pump failure affects both heating and cooling. Electric water heaters are also typical.</p>
<h3>Hurricanes and storms aren't covered</h3>
<p>Florida's statute defines a home warranty as covering repair or replacement of systems and appliances that fail from wear and tear, inherent defects or failed inspections - and bars these contracts from covering consequential damages, which would make them insurance (section 634.301). In practice, wind, flood and storm-surge damage to your home and its systems is a property, windstorm or flood insurance matter. A home warranty may cover a mechanical failure that happens later, but not damage caused by the storm itself.</p>
<h3>Humidity and hard water</h3>
<p>High humidity means AC condensate lines can clog and drain pans can overflow - a common maintenance problem that can also lead to maintenance-related claim disputes - so keep up with AC maintenance and keep records. Many Florida utilities also supply hard water - check your utility's annual water quality report - which shortens water heater life.</p>
<h3>Newer housing, with exceptions</h3>
<p>Florida's housing stock is relatively young (Census-based estimates put the median year built around 1989), with a median owner-occupied home value of $359,000 and a 67.6% homeownership rate (ACS 2020-2024). But many Florida homes from the 2000s building boom now have original AC systems past typical service life.</p>`,
    },
    {
      heading: "Our picks for Florida homeowners",
      body: `<table>
<thead><tr><th>Your situation</th><th>Consider</th><th>Why</th></tr></thead>
<tbody>
<tr><td>AC protection is the priority</td><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>Up to $5,000 HVAC; covers refrigerant- and efficiency-standard upgrades within the limit; ShieldPlatinum adds all refrigerant, permits and modifications</td></tr>
<tr><td>Buying a home in Florida</td><td><a href="/reviews/first-american">First American</a></td><td>Real estate plans cover unknown pre-existing conditions; 100% refrigerant on Premium and real estate plans</td></tr>
<tr><td>Simple, lower-cost coverage</td><td><a href="/reviews/choice-home-warranty">Choice Home Warranty</a></td><td>Two plans, $3,000 per item; our #1 overall nationally</td></tr>
<tr><td>Higher per-repair limits</td><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to $5,000 on most repairs on the plans we reviewed</td></tr>
<tr><td>Cash-out tied to retail prices</td><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>Its 2025 sample contract bases cash in lieu on an estimate of local retail cost</td></tr>
</tbody>
</table>
<p>Ask any company how it handles AC emergencies in your county, whether it reimburses temporary cooling during long waits, and whether you can use your own licensed contractor if its network can't respond. Our <a href="/articles/home-warranty-claim-denied">claim denial guide</a> covers what to do if a company drags its feet.</p>`,
    },
    {
      heading: "Home warranties in a Florida home sale",
      body: `<p>Florida's widely used FR/BAR purchase contracts address a home warranty in the closing-costs section, where the parties decide whether one will be provided, by whom it's paid and a maximum cost. Who pays is negotiable. Two Florida-specific points: contracts must tell you about your right to transfer coverage to a later buyer (with a $40 cap on the assignment fee), and real estate plans often cover unknown pre-existing conditions that a direct-to-consumer plan would exclude.</p>`,
    },
    {
      heading: "What repairs cost in Florida",
      body: `<p>Florida labor runs below the national average: in May 2023, BLS put the mean annual wage for HVAC mechanics at <strong>$52,220</strong> in Florida (versus $59,620 nationally) and for plumbers at <strong>$51,830</strong>. Equipment costs are the bigger concern - HVAC prices rose through 2025 and 2026, and because Florida AC systems work harder, many homeowners face replacements sooner. Compare HVAC limits carefully.</p>`,
    },
    {
      heading: "Who regulates home warranties in Florida?",
      body: `<p>The Florida Office of Insurance Regulation licenses home warranty associations under chapter 634, Part II of the Florida Statutes. The Department of Financial Services handles consumer complaints.</p>`,
    },
    {
      heading: "Can I cancel a home warranty in Florida?",
      body: `<p>Yes. Within 10 days you get a full refund minus claims paid and up to a 5% administrative fee. After that, the refund is based on 90% of the unearned pro rata premium, minus claims paid.</p>`,
    },
    {
      heading: "Does a home warranty cover hurricane damage in Florida?",
      body: `<p>No. Florida law defines home warranties as covering failures from wear and tear or defects and bars them from covering consequential damage. Hurricane, wind and flood damage are covered, if at all, by property, windstorm and flood insurance.</p>`,
    },
    {
      heading: "Can I sue a home warranty company in Florida?",
      body: `<p>Florida law gives consumers a private right of action for the greater of actual damages or $500, plus attorney's fees, after written notice to the Department of Financial Services and the company and a 30-day opportunity to cure. Check your contract's arbitration terms and consult an attorney.</p>`,
    },
    {
      heading: "Sources",
      body: `<p>Florida Statutes chapter 634, Part II (including sections 634.301, 634.3025, 634.303, 634.3077, 634.3112, 634.312, 634.3284 and 634.336); Florida Senate bill analyses (2019, 2024, 2025); Florida Department of Financial Services home warranty overview and Division of Consumer Services; Florida Office of Insurance Regulation; Insurance Journal and Claims Journal (2009, 2010, 2012, October 2026); U.S. Energy Information Administration 2020 RECS state tables and press release on Florida household energy use; U.S. Census Bureau QuickFacts (ACS 2020-2024); Bureau of Labor Statistics OEWS May 2023; FR/BAR contract materials; Choice Home Warranty terms; American Home Shield, First American and 2-10 materials; our Trustpilot review study (October 26, 2026). Checked October 2026; your contract controls.</p>
${otherStates("florida")}`,
    },
  ],
};
