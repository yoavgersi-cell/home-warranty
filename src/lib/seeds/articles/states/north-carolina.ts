import type { ArticleData } from "@/lib/config";
import { providerTable, otherStates } from "./shared";

// North Carolina state guide. Researched Oct 2026 from N.C. Gen. Stat.
// 58-1-20 and ch. 66 art. 43 (66-370-374), NCDOI and NC DOJ consumer pages,
// NC bills H957 (2024) and H203 (2025), NC OSBM (Helene damage), NWS Raleigh,
// UNC School of Government / NC DHHS (septic), EIA RECS 2020, Census
// QuickFacts, NC REALTORS (Form 2-T), WRAL, and our review study.
export const northCarolinaGuide: ArticleData = {
  slug: "best-home-warranty-north-carolina",
  title: "Best Home Warranty in North Carolina (2026): Companies & Laws",
  description:
    "The best home warranty companies in North Carolina for 2026, NC home warranty law, cancellation rights, and coverage for heat pumps, wells and septic.",
  category: "State Guides",
  readTime: "15 min read",
  publishedAt: "2026-10-27",
  updatedAt: "2026-10-27",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "North Carolina regulates home warranties lightly: its Department of Insurance says it doesn't regulate service agreement sellers, so complaints go to the NC Department of Justice's Consumer Protection Division (1-877-566-7226).",
    "Under N.C. law, a real property warranty avoids insurance regulation only if it excludes fire, flood and wind damage and posts a $100,000 bond - so storm damage like Hurricane Helene's is never a home warranty claim.",
    "About 38% of North Carolina homes heat with a heat pump - one of the highest shares in the country - and about half of households use septic systems, making heat pump coverage and well/septic add-ons important.",
    "Home appliance service agreements in NC can be canceled at any time for a pro rata refund, with the administrative fee capped at 10% of the refund.",
  ],
  sections: [
    {
      heading: "Best home warranty in North Carolina: the short answer",
      body: `<div class="qa"><strong>Quick answer</strong>All seven companies we track sell home warranties in North Carolina. Because NC homes rely heavily on <strong>heat pumps</strong> (about 38% use one as their main heating system) and roughly half use <strong>septic systems</strong>, prioritize heat pump coverage and check whether well pump and septic add-ons are available. <strong>American Home Shield</strong> and <strong>First American</strong> publish strong HVAC terms; <strong>Choice</strong> offers simpler, lower-cost plans with optional add-ons. Since state oversight is light, read the contract carefully and keep the NC Department of Justice's complaint line handy.</div>
<p>North Carolina has one of the lighter regulatory frameworks for home warranties among the states we cover - bills to create a full home warranty act have been introduced but not enacted. That puts more weight on the contract you sign. This guide explains NC's rules, which companies sell there, what NC homes need, and our picks.</p>`,
    },
    {
      heading: "Which home warranty companies sell in North Carolina?",
      body: `<p>All seven companies we review offer coverage in North Carolina. Home Warranty of America announced in 2011 that North Carolina was its 50th state.</p>
${providerTable("North Carolina", {
  "choice-home-warranty": "Available; well pump and septic add-ons offered on many plans",
  "american-home-shield": "Available",
  "select-home-warranty": "Available",
  "first-american": "Available",
  "home-warranty-of-america": "Available",
  "home-service-club": "Available",
  "2-10-home-buyers-warranty": "Available",
})}`,
    },
    {
      heading: "How North Carolina treats home warranties",
      body: `<p>North Carolina splits home warranties across two laws, and its Department of Insurance has stated that it <strong>does not regulate companies that sell service agreements</strong>. Here's how the pieces fit:</p>
<h3>Real property warranties (G.S. 58-1-20)</h3>
<p>A warranty covering fixtures in a home is treated as insurance unless it falls under an exception. The key exception covers warranties for repair or replacement due to defective parts, mechanical failure or ordinary wear and tear - <strong>provided the warranty excludes damage from perils such as fire, flood and wind</strong>. Companies issuing those warranties must post a surety bond of at least <strong>$100,000</strong> with the North Carolina Secretary of State.</p>
<p>That's why no North Carolina home warranty will cover storm damage: the exclusion is effectively required by law.</p>
<h3>Home appliance service agreements (G.S. 66-370 to 66-374)</h3>
<p>Companies issuing home appliance service agreements that aren't licensed insurers must follow Chapter 66, Article 43, which includes:</p>
<ul>
<li><strong>Written notice before purchase</strong> that buying the agreement isn't required to buy or finance the appliance.</li>
<li><strong>The right to cancel at any time</strong>, with a pro rata refund minus claims paid and an administrative fee of no more than <strong>10% of the refund</strong>.</li>
<li><strong>Limits on company cancellation</strong> - generally only for nonpayment or a violation the contract specifies.</li>
<li><strong>Financial backing</strong>: the company must carry insurance covering 100% of its North Carolina claims exposure (unless it meets a high net-worth exemption), and if the company fails, the insurer pays claims and refunds directly to consumers.</li>
</ul>
<p>Whether a particular whole-home warranty falls under the appliance service agreement rules or the real property warranty rules can depend on what it covers - check your contract's North Carolina terms, and consider asking an attorney about a significant dispute.</p>
<h3>Proposed reforms</h3>
<p>Legislators have proposed a fuller framework. House Bill 957 (2024) and House Bill 203 (2025, the "Home Warranty Act") would have, among other things, required repairs to HVAC systems or a home's only bathroom to be completed or scheduled within five business days or else paid at an out-of-network vendor. Neither had been enacted as of our research.</p>
<h3>How to file a complaint in North Carolina</h3>
<p>Contact the company first, in writing. Then file with the <strong>NC Department of Justice, Consumer Protection Division</strong>: 1-877-5-NO-SCAM (1-877-566-7226) in North Carolina, (919) 716-6000 from out of state, or online at ncdoj.gov. The Attorney General can act on unfair and deceptive practices, though it doesn't sue solely to recover an individual's money. WRAL reported the AG's office received 177 home warranty complaints in 2019, with delays and denials the most common issues. The NC DOJ's home warranty page also warns that many contracts require private arbitration and that definitions in contracts may differ from what buyers expect.</p>`,
    },
    {
      heading: "What North Carolina homes need from a home warranty",
      body: `<h3>Heat pumps</h3>
<p>North Carolina is heat pump country. EIA's 2020 survey found about <strong>38% of NC homes use a heat pump as their main heating equipment</strong>, with about 62% heating with electricity overall. Roughly 84% of NC homes have central air conditioning. A heat pump handles heating and cooling, so one failure can take out both - check how each plan classifies and limits heat pumps, and read our <a href="/articles/best-home-warranty-for-heat-pumps">heat pump guide</a>.</p>
<h3>Septic systems and private wells</h3>
<p>About half of North Carolina households rely on on-site septic systems, according to the UNC School of Government and NC Department of Health and Human Services, and a large share of residents use private wells. Most home warranty base plans don't cover septic systems or well pumps; they're typically optional add-ons. If your home has either, make sure the plan you choose offers them - and read the add-on's limits.</p>
<h3>Storms and freezes</h3>
<p>Hurricane Helene in September 2024 caused an estimated <strong>$59.6 billion</strong> in damage and needs in North Carolina, according to the state's Office of State Budget and Management - about three times Hurricane Florence. As explained above, home warranties exclude storm damage; that's a homeowners, flood or other insurance matter. Cold snaps matter too: in December 2022, Raleigh hit 10°F and Greensboro 5°F on Christmas Eve, and Duke Energy ran the first rolling blackouts in state history. Heat pumps lose efficiency in extreme cold, and freeze-related plumbing failures may be limited under a home warranty.</p>
<h3>Crawlspaces and older rural homes</h3>
<p>Many North Carolina homes are built over crawlspaces, where plumbing and ductwork are exposed to moisture and cold. Some contracts treat plumbing outside the main structure differently - our <a href="/articles/home-warranty-claim-denied">claim denial study</a> found reviewers in other states denied for crawl-space plumbing - so read the plumbing coverage carefully.</p>
<h3>Housing stock</h3>
<p>The median owner-occupied home value in North Carolina is $288,900, with a 66.6% homeownership rate (ACS 2020-2024). Inflation-adjusted home values rose every year from 2014 to 2023, according to the NC Department of Commerce.</p>`,
    },
    {
      heading: "Our picks for North Carolina homeowners",
      body: `<table>
<thead><tr><th>Your situation</th><th>Consider</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Heat pump is the priority</td><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>Up to $5,000 HVAC; covers refrigerant- and efficiency-standard upgrades within the limit; ShieldPlatinum adds all refrigerant, permits and modifications</td></tr>
<tr><td>Home on a well and septic</td><td><a href="/reviews/choice-home-warranty">Choice Home Warranty</a></td><td>Well pump and septic offered as add-ons; $3,000 per item; our #1 overall nationally</td></tr>
<tr><td>Buying a home</td><td><a href="/reviews/first-american">First American</a></td><td>Real estate plans cover unknown pre-existing conditions; 100% refrigerant on Premium and real estate plans</td></tr>
<tr><td>Higher per-repair limits</td><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to $5,000 on most repairs on the plans we reviewed</td></tr>
<tr><td>Cash-out tied to retail prices</td><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>Its 2025 sample contract bases cash in lieu on an estimate of local retail cost</td></tr>
</tbody>
</table>`,
    },
    {
      heading: "Home warranties in a North Carolina home sale",
      body: `<p>North Carolina's standard Offer to Purchase and Contract (Form 2-T) includes a home warranty provision with three options: no seller-paid warranty; the buyer selects a warranty and the seller pays up to a stated amount; or the seller obtains a named warranty and pays up to a stated amount. Who pays and how much are negotiated. Compare the pre-existing condition terms of any real estate plan with direct-to-consumer options, and keep your inspection report.</p>`,
    },
    {
      heading: "Who regulates home warranties in North Carolina?",
      body: `<p>North Carolina regulates home warranties lightly. The Department of Insurance says it doesn't regulate service agreement sellers; real property warranties must exclude fire, flood and wind and post a $100,000 bond with the Secretary of State, and appliance service agreements follow Chapter 66, Article 43. Complaints go to the NC Department of Justice.</p>`,
    },
    {
      heading: "Can I cancel a home warranty in North Carolina?",
      body: `<p>For home appliance service agreements, NC law lets you cancel at any time for a pro rata refund minus claims paid and an administrative fee of no more than 10% of the refund. Check your contract's North Carolina terms.</p>`,
    },
    {
      heading: "Does a home warranty cover hurricane damage in North Carolina?",
      body: `<p>No. To avoid being regulated as insurance, North Carolina real property warranties must exclude damage from perils such as fire, flood and wind. Storm damage is a homeowners, flood or other insurance matter.</p>`,
    },
    {
      heading: "Do home warranties cover wells and septic systems in North Carolina?",
      body: `<p>Usually only as optional add-ons. About half of NC households use septic systems, so if your home has a well or septic, choose a plan that offers those add-ons and check their limits.</p>`,
    },
    {
      heading: "Sources",
      body: `<p>North Carolina General Statutes 58-1-20 and chapter 66, article 43 (66-370 to 66-374); Session Law 2007-95; NC Department of Insurance (warranty and service agreements page; home warranty review checklist); NC Department of Justice (home warranties consumer page; consumer complaint process); NC General Assembly (H957, 2023-2024; H203, 2025); NC Office of State Budget and Management (Hurricane Helene damage and needs assessment, December 2024); National Weather Service Raleigh (December 2022 climate summary); NC Newsline (January 2023); UNC School of Government and NC DHHS (on-site wastewater); U.S. Energy Information Administration 2020 RECS state tables; U.S. Census Bureau QuickFacts (ACS 2020-2024); NC Department of Commerce; NC REALTORS (Form 2-T guidance); WRAL; Home Warranty of America (2011 announcement); company sample contracts; our Trustpilot review study (October 26, 2026). Checked October 2026; your contract controls.</p>
${otherStates("north-carolina")}`,
    },
  ],
};
