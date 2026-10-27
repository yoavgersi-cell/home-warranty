import type { ArticleData } from "@/lib/config";
import { providerTable, otherStates } from "./shared";

// Arizona state guide. Researched Oct 2026 from DIFI (A.R.S. 20-1095 et seq.,
// consumer guide, enforcement orders), Arizona AG releases (Choice 2019/2026,
// Landmark 2021), NWS Phoenix, NOAA/NCICS, EIA RECS 2020, Census QuickFacts,
// BLS OEWS, AAR purchase contract, company terms and our review study.
export const arizonaGuide: ArticleData = {
  slug: "best-home-warranty-arizona",
  title: "Best Home Warranty in Arizona (2026): Companies, Laws & Costs",
  description:
    "The best home warranty companies in Arizona for 2026, its pre-existing condition rule, refund rights, AG settlements and AC coverage in desert heat.",
  category: "State Guides",
  readTime: "17 min read",
  publishedAt: "2026-10-27",
  updatedAt: "2026-10-27",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "All seven companies we track sell in Arizona, where home warranties are regulated as service contracts by the Department of Insurance and Financial Institutions (DIFI) and companies need a DIFI permit.",
    "Arizona law bars a home warranty from excluding pre-existing conditions the company or seller knew or reasonably should have known about, and caps the cancellation fee at the lesser of $75 or 10% of the price.",
    "Arizona's Attorney General announced an $11.8 million consent judgment with Choice Home Warranty in February 2026 and a $1.75 million settlement with Landmark Home Warranty in 2021 over emergency AC promises.",
    "Phoenix hit a record 70 days at 110°F or hotter in 2024, about 86% of Arizona homes have central air, and the water is very hard - so prioritize AC limits, emergency service terms and water heater coverage.",
  ],
  sections: [
    {
      heading: "Best home warranty in Arizona: the short answer",
      body: `<div class="qa"><strong>Quick answer</strong>All seven home warranty companies we track sell in Arizona. Because air conditioning is a health-and-safety system in the Arizona desert, the most important things to compare are the <strong>HVAC limit</strong>, <strong>refrigerant and upgrade coverage</strong>, and how the company handles <strong>emergency AC service</strong>. <strong>American Home Shield</strong> and <strong>First American</strong> publish the strongest AC terms; <strong>Choice Home Warranty</strong> offers simpler, lower-cost plans but agreed to an $11.8 million consent judgment with Arizona's Attorney General in 2026 (without admitting wrongdoing). Arizona law gives you unusually strong protection on pre-existing conditions and caps cancellation fees at the lesser of $75 or 10% of the price.</div>
<p>Arizona is the state where home warranty AC service has been tested most directly by regulators. Two major Attorney General cases - against Landmark Home Warranty in 2021 and Choice Home Warranty in 2026 - centered on what companies promised versus what they delivered, including emergency air conditioning service in extreme heat. This guide explains your rights, which companies sell in Arizona, what Arizona's climate and housing mean for coverage, and how to choose.</p>`,
    },
    {
      heading: "Which home warranty companies sell in Arizona?",
      body: `<p>All seven companies we review offer coverage in Arizona. Each must hold a service company permit from DIFI, which you can check with DIFI's license search. As in other states, the legal obligor can be an affiliated company - DIFI's 2023 enforcement records, for example, name Home Warranty Administrator of Arizona, doing business as Choice Home Warranty.</p>
${providerTable("Arizona", {
  "choice-home-warranty": "Available; Arizona-specific pre-existing clause in its user agreement",
  "american-home-shield": "Available",
  "select-home-warranty": "Available",
  "first-american": "Available; separate Northern and Southern Arizona contracts",
  "home-warranty-of-america": "Available",
  "home-service-club": "Available",
  "2-10-home-buyers-warranty": "Available",
})}`,
    },
    {
      heading: "How Arizona regulates home warranties",
      body: `<p>Arizona regulates home warranties as <strong>service contracts</strong> under Arizona Revised Statutes section 20-1095 and following, administered by the <strong>Department of Insurance and Financial Institutions (DIFI)</strong>. A company must hold a DIFI service company permit before offering contracts, file its contract forms with DIFI before using them, and maintain financial security under section 20-1095.04. Since August 3, 2018, cash deposits no longer satisfy that security requirement for new contracts. DIFI notes that a permit means a company appears financially sound; it isn't a guarantee of financial condition.</p>
<h3>Arizona's pre-existing condition rule</h3>
<p>This is the most important Arizona-specific protection. Under A.R.S. 20-1095.06, a contract must clearly state whether pre-existing conditions are covered - and it <strong>may not exclude pre-existing conditions that the service company or its seller knew or reasonably should have known about</strong>. In practice, that means a company that sold you a plan knowing (or having reason to know) about a defect can't later deny the claim as pre-existing. Choice's user agreement includes an Arizona-specific clause tracking this standard. If you're denied on pre-existing grounds in Arizona, ask what the company knew at the time of sale - for example, whether it ran an inspection or received your home inspection report.</p>
<h3>Cancellation and refunds</h3>
<table>
<thead><tr><th>Rule</th><th>Arizona law (A.R.S. 20-1095.06)</th></tr></thead>
<tbody>
<tr><td>Refund when you cancel</td><td>At least a pro rata refund, minus benefits paid and an administrative fee</td></tr>
<tr><td>Maximum administrative fee</td><td>The lesser of <strong>$75</strong> or <strong>10% of the purchase price</strong></td></tr>
<tr><td>Contract must state</td><td>Cancellation terms and any acts or omissions by you that would void coverage</td></tr>
</tbody>
</table>
<h3>How to file a complaint in Arizona</h3>
<ul>
<li><strong>Start with the company</strong>, in writing, and keep records.</li>
<li><strong>DIFI</strong> takes complaints about permitted service companies; its insurance division can be reached at (602) 364-3100, and its consumer guide on home warranty service contracts explains what to check.</li>
<li><strong>The Arizona Attorney General's Consumer Protection</strong> section takes complaints about deceptive practices - the route that produced the Choice and Landmark cases below.</li>
</ul>`,
    },
    {
      heading: "Arizona enforcement actions against home warranty companies",
      body: `<p>Arizona has the most significant home warranty enforcement record of any state we cover:</p>
<ul>
<li><strong>Choice Home Warranty (2019-2026).</strong> In October 2019 the Attorney General sued Choice under the Consumer Fraud Act, alleging it marketed coverage for items such as air conditioners and refrigerators that its contracts excluded or capped (including a $1,500 cap and a $500 plumbing cap) and promised service it didn't deliver. A consent judgment entered January 23, 2026 and announced February 10, 2026 totals <strong>$11.8 million</strong>, requires sales-practice changes and meaningful upfront disclosures of what is and isn't covered, and set up restitution for Arizonans who bought by phone between January 1, 2013 and January 1, 2023. The AG cited more than 1,500 complaints against Choice over that period. Choice denied the allegations and admitted no wrongdoing.</li>
<li><strong>Landmark Home Warranty (2021).</strong> A <strong>$1.75 million</strong> settlement - up to $1 million in restitution and $750,000 in civil penalties - over a promise to make reasonable efforts to schedule AC service within 24 hours in "extreme temperatures," which the state said was defined so narrowly that almost no one qualified. Landmark was barred from advertising expedited service in Arizona for five years, and checks went to more than 26,000 Arizonans.</li>
<li><strong>DIFI orders.</strong> DIFI has issued a 2023 consent order with a $17,500 civil penalty against Home Warranty Administrator of Arizona (doing business as Choice Home Warranty); a $10,000 consent order in a matter involving an unrepaired HVAC system; and cease-and-desist orders against unpermitted sellers including Amazon Home Warranty (no relation to Amazon.com; $2,500 penalty), Harmony Home Warranty, Pride Home Warranty and LifeTime Home Warranty.</li>
</ul>
<p>The lesson for Arizona buyers: get every promise about emergency AC service in writing, check the exact definitions (what counts as an emergency, and how fast "expedited" really is), and verify a company's DIFI permit before you pay.</p>`,
    },
    {
      heading: "What Arizona homes need from a home warranty",
      body: `<h3>Air conditioning is a necessity, and it's being pushed harder</h3>
<p>According to the National Weather Service, Phoenix recorded a record <strong>70 days at 110°F or hotter in 2024</strong> - against a normal of about 21 - along with 143 days at 100°F or hotter, and 2024 was the city's hottest year on record (average 78.6°F). The previous record, 54 days at 110°F, was set in 2023, and 2025 was Phoenix's second-warmest year. NOAA's Arizona State Climate Summary notes summer highs of 105-115°F are routine in the southern deserts.</p>
<p>EIA's 2020 Residential Energy Consumption Survey found about <strong>94% of Arizona homes have air conditioning, roughly 86% of them central systems</strong>. An AC failure in July isn't an inconvenience; it's an emergency. That makes these contract terms critical:</p>
<ul>
<li><strong>HVAC limit</strong> - a replacement can exceed $3,000-$5,000 caps.</li>
<li><strong>Refrigerant and upgrades</strong> - the shift from R-410A to R-454B and R-32 can turn a failed condenser into a full-system replacement (see our <a href="/articles/r-410a-phase-out-home-warranty">refrigerant guide</a>).</li>
<li><strong>Emergency service and self-dispatch rules</strong> - how fast the company commits to respond, and whether you can hire your own contractor if it can't.</li>
<li><strong>Temporary cooling</strong> - some companies reimburse a portable or window unit during long waits; a First American reviewer in our study was offered up to $150 toward one.</li>
</ul>
<h3>Heating is half electric</h3>
<p>EIA's 2020 survey found about <strong>51% of Arizona homes heat with electricity</strong> and 36% with natural gas. Many electric homes use heat pumps, which also provide cooling - so a heat pump claim is effectively an AC claim. Read our <a href="/articles/best-home-warranty-for-heat-pumps">heat pump guide</a>.</p>
<h3>Very hard water</h3>
<p>Phoenix's water quality reporting puts hardness at roughly 172-302 mg/L, mostly in the U.S. Geological Survey's "very hard" range (above 180 mg/L). Scale shortens water heater life and can lead to maintenance-related denials. Flush your water heater on schedule, keep records, and read our <a href="/articles/best-home-warranty-for-water-heaters">water heater guide</a>. Consider whether a plan covers water softeners if you have one (many don't).</p>
<h3>Housing stock</h3>
<p>Arizona homes are relatively young - Census-based estimates put the median year built at about 1994 - and the median owner-occupied home value is $394,500 (ACS 2020-2024). Newer systems help, but the many homes built in the 2000s boom now have original AC equipment past typical service life.</p>`,
    },
    {
      heading: "Our picks for Arizona homeowners",
      body: `<table>
<thead><tr><th>Your situation</th><th>Consider</th><th>Why</th></tr></thead>
<tbody>
<tr><td>AC protection is the priority</td><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>Up to $5,000 HVAC; covers refrigerant- and efficiency-standard upgrades within the limit; ShieldPlatinum adds all refrigerant, permits and modifications</td></tr>
<tr><td>Buying a home in Arizona</td><td><a href="/reviews/first-american">First American</a></td><td>Arizona-specific (Northern and Southern) contracts; 100% refrigerant on Premium and real estate plans; real estate plans cover unknown pre-existing conditions</td></tr>
<tr><td>Simple, lower-cost coverage</td><td><a href="/reviews/choice-home-warranty">Choice Home Warranty</a></td><td>Two plans, $3,000 per item; weigh its 2026 consent judgment and new disclosure obligations in Arizona</td></tr>
<tr><td>Higher per-repair limits across the home</td><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to $5,000 on most repairs on the plans we reviewed</td></tr>
<tr><td>Cash-out tied to retail prices</td><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>Its 2025 sample contract bases cash in lieu on an estimate of local retail cost</td></tr>
</tbody>
</table>
<p>Whatever you choose, ask before you buy: <em>What is your emergency response time for a non-working AC when it's over 100°F? What happens if no contractor is available? Will you reimburse temporary cooling?</em> Get the answers in writing.</p>`,
    },
    {
      heading: "Home warranties in an Arizona home sale",
      body: `<p>The Arizona Association of REALTORS® Residential Resale Real Estate Purchase Contract includes a <strong>home warranty section (6k)</strong> where the parties choose who orders the plan, set a maximum cost, and decide whether the buyer, seller or both pay. The contract encourages buyers and sellers to investigate the various plans. Earlier versions noted that most plans exclude pre-existing conditions - which in Arizona must still respect the state's "knew or reasonably should have known" rule.</p>
<p>If you're buying, compare the real estate plan offered at closing with direct-to-consumer options, keep your inspection report, and note any items the inspector flagged - those are the most likely to be treated as pre-existing.</p>`,
    },
    {
      heading: "What repairs cost in Arizona",
      body: `<p>Arizona has a high concentration of HVAC technicians - BLS data show the occupation is about a third more concentrated there than nationally - and May 2023 mean wages of <strong>$55,340</strong> statewide ($56,400 in Phoenix) versus $59,620 nationally. Residential electricity has run below the national average in 2026, per EIA data. The bigger cost driver is equipment: HVAC price increases through 2025 and 2026 and refrigerant-related upgrades mean a full replacement can exceed many plans' HVAC limits.</p>`,
    },
    {
      heading: "Who regulates home warranties in Arizona?",
      body: `<p>The Arizona Department of Insurance and Financial Institutions (DIFI) regulates home warranties as service contracts under A.R.S. 20-1095 and following. Companies need a DIFI permit and must file their contract forms.</p>`,
    },
    {
      heading: "Can an Arizona home warranty deny a claim as pre-existing?",
      body: `<p>Only within limits. Arizona law says a service contract may not exclude pre-existing conditions that the company or its seller knew or reasonably should have known about, and the contract must clearly state whether pre-existing conditions are covered.</p>`,
    },
    {
      heading: "How much does it cost to cancel a home warranty in Arizona?",
      body: `<p>Arizona requires at least a pro rata refund minus benefits paid, and caps the administrative fee at the lesser of $75 or 10% of the purchase price.</p>`,
    },
    {
      heading: "What was the Choice Home Warranty settlement in Arizona?",
      body: `<p>In February 2026, the Arizona Attorney General announced an $11.8 million consent judgment resolving a 2019 consumer fraud lawsuit against Choice Home Warranty, with restitution for Arizonans who bought by phone between 2013 and 2023 and required changes to sales disclosures. Choice denied the allegations and did not admit wrongdoing.</p>`,
    },
    {
      heading: "Is AC an emergency under Arizona home warranties?",
      body: `<p>It depends on the contract's definitions. Arizona's 2021 Landmark settlement turned on how narrowly the company defined "extreme temperatures" for expedited AC service. Read the emergency-service terms and get any response-time promise in writing.</p>`,
    },
    {
      heading: "Sources",
      body: `<p>Arizona Revised Statutes 20-1095 and following (including 20-1095.04 and 20-1095.06); Arizona Department of Insurance and Financial Institutions (service company permits, 2018 final rulemaking, home warranty consumer guide, service contract filing checklist, enforcement orders and weekly orders reports); Arizona Attorney General press releases (Choice Home Warranty, 2019 and February 2026; restitution process; Landmark Home Warranty, March 2021); KJZZ, Courthouse News and KTAR coverage; National Weather Service Phoenix (2024 and 2025 year in review); NOAA/NCICS Arizona State Climate Summary; U.S. Energy Information Administration 2020 RECS state tables; U.S. Census Bureau QuickFacts (ACS 2020-2024); U.S. Geological Survey water hardness classifications; City of Phoenix water quality reporting; Bureau of Labor Statistics OEWS May 2023; Arizona Association of REALTORS® purchase contract (August 2024); Choice Home Warranty user agreement; First American Arizona contracts; our Trustpilot review study (October 26, 2026). Checked October 2026; your contract controls.</p>
${otherStates("arizona")}`,
    },
  ],
};
