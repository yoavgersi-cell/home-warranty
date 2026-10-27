import type { ArticleData } from "@/lib/config";
import { providerTable, otherStates } from "./shared";

// California state guide. Researched Oct 2026 from the California Insurance
// Code (12740-12764), CDI (home protection company list 12-01-2025, consumer
// page, press releases), Health & Safety Code 19211, California Energy
// Commission (2025 Title 24), CPUC PSPS reports, EIA RECS 2020, Census
// QuickFacts, NAHB, BLS OEWS, CAR RPA, company materials and our review study.
export const californiaGuide: ArticleData = {
  slug: "best-home-warranty-california",
  title: "Best Home Warranty in California (2026): Companies & Laws",
  description:
    "The best home warranty companies in California for 2026, how the Department of Insurance licenses them, and what older homes and code rules mean.",
  category: "State Guides",
  readTime: "17 min read",
  publishedAt: "2026-10-27",
  updatedAt: "2026-10-27",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "California licenses home warranty companies as 'home protection companies' through the Department of Insurance, with net-worth and reserve requirements, contract forms filed before use, and limits on when a company can cancel.",
    "California homes are among the oldest in the Sun Belt - NAHB puts the median owner-occupied home at about 45 years old - and about 64% heat with natural gas, so furnaces, water heaters and plumbing claims matter as much as AC.",
    "Code compliance is a big deal in California: water heaters must be seismically strapped and sellers must certify it, and replacements can trigger permit and code costs many plans exclude - look for permit and code coverage.",
    "Labor is expensive: California's mean HVAC technician wage ($70,050 in May 2023) is the highest of the states we cover, which makes coverage caps and cash-out terms especially important.",
  ],
  sections: [
    {
      heading: "Best home warranty in California: the short answer",
      body: `<div class="qa"><strong>Quick answer</strong>All seven companies we track offer home warranties in California, but the legal issuer matters: California requires a Department of Insurance license, and some brands sell through a licensed affiliate (Choice's California contracts, for example, are issued by Home Service Club of California, Inc.). Because California homes are older and code rules are strict, look for <strong>permit and code-upgrade coverage</strong>, strong <strong>plumbing and water heater</strong> terms, and caps high enough for California labor costs. <strong>American Home Shield</strong> (ShieldPlatinum adds permits, code and modifications) and <strong>First American</strong> (a long-time California real estate brand) are strong fits for older homes; <strong>Choice</strong> offers simpler, lower-cost plans with a $3,000 per-item cap.</div>
<p>California regulates home warranties more like insurance than most states do. That brings real protections - financial reserves, filed contract forms and limits on cancellation - but it doesn't change what's in your contract. This guide covers who's licensed, how California's rules work, what California housing and climate mean for coverage, home warranties in California home sales, and our picks.</p>`,
    },
    {
      heading: "Which home warranty companies sell in California?",
      body: `<p>Every company selling home warranties in California must be licensed by the California Department of Insurance (CDI), which publishes a list of licensed home protection companies. Here's how the companies we track appear:</p>
${providerTable("California", {
  "choice-home-warranty": "Available; California contracts issued by Home Service Club of California, Inc. (a Rely Home affiliate)",
  "american-home-shield": "Available; American Home Shield of California, Inc. is CDI-licensed",
  "select-home-warranty": "Available; Select Home Warranty of CA, Inc. appeared on CDI's 2024 list",
  "first-american": "Available; First American Home Warranty Corporation is CDI-licensed",
  "home-warranty-of-america": "Available; check which licensed company your contract names as issuer",
  "home-service-club": "Available; Home Service Club of California, Inc. is CDI-licensed",
  "2-10-home-buyers-warranty": "Available; 2-10 HBW Warranty of California, Inc. is CDI-licensed",
})}
<p>Before you buy, look up the issuing company on CDI's license search and make sure it's the company named in your contract. CDI's own consumer page urges buyers to check license status first, and its enforcement history (below) shows why.</p>`,
    },
    {
      heading: "How California regulates home warranties",
      body: `<p>California's Home Protection Law (Insurance Code sections 12740-12764) governs "home protection contracts" - contracts to repair or replace a home's systems and appliances for a set fee and term, sold by someone other than the builder, seller or manufacturer. Key rules:</p>
<ul>
<li><strong>License required.</strong> CDI has said any company marketing and selling home warranty contracts to California consumers must be licensed by the department.</li>
<li><strong>Financial strength.</strong> Companies must maintain a minimum net worth that rises with the number of contracts they issue (section 12750) and an unearned-premium reserve of at least 40% of premiums on contracts in force (section 12753). CDI examines licensed companies.</li>
<li><strong>Clear contracts, filed in advance.</strong> Contracts must state in clear and conspicuous terms what's covered, all exclusions and limits, the term and fee, service fees and any limits on service (section 12762), and the contract form must be filed with the commissioner before use.</li>
<li><strong>No consequential damage.</strong> By definition, a California home protection contract doesn't cover consequential damage (section 12740) - water damage from a failed pipe, for example, is a homeowners insurance question.</li>
<li><strong>Limits on company cancellation.</strong> During the initial term, the company can cancel only for nonpayment, fraud or material misrepresentation, or when a listing-period contract's sale doesn't happen (section 12764). There's no statutory right to renew.</li>
<li><strong>No free coverage or kickbacks.</strong> Contracts can't be given away, and the law restricts payments to real estate licensees (sections 12760-12761).</li>
</ul>
<p><strong>Cancellation refunds are set by your contract.</strong> California's general service-contract refund rule in the Civil Code specifically excludes home protection plans, so the refund formula and any fee come from the contract itself. Choice's California terms, for example, describe an administrative fee of up to 10% of the agreement fee or $25, whichever is less. Read the cancellation section before you sign.</p>
<h3>How to file a complaint in California</h3>
<p>Contact the company first, in writing. If that doesn't resolve it, contact the <strong>California Department of Insurance</strong> at 1-800-927-4357 or file a Request for Assistance online. CDI's consumer page specifically mentions unfair claim denials and unreasonably delayed repairs among the issues it hears about, and says it posts information about licensed home warranty companies, including complaint data.</p>`,
    },
    {
      heading: "California enforcement actions",
      body: `<p>CDI's enforcement has focused heavily on unlicensed and deceptive sellers:</p>
<ul>
<li><strong>Harmony Home Warranty (2021).</strong> In May 2021 CDI ordered Forever Home Service LLC, doing business as Harmony Home Warranty, to stop selling without a license after consumers reported refused claims, unanswered calls and emails, and being locked out of online accounts.</li>
<li><strong>Four unlicensed companies (2021).</strong> In September 2021 CDI issued cease-and-desist orders to Complete Care Home Warranty, Global Home Protection, Priority Home Warranty (Fundamental America LLC) and First Premier Home Warranty, after investigators posing as consumers obtained quotes for California homes.</li>
<li><strong>Misleading "final notice" mailers (2023).</strong> In April 2023 CDI required Response Indemnity Company of California to let affected customers cancel for a refund, and ordered its unlicensed marketer to stop, over mailers that falsely told buyers their home warranty was expiring.</li>
</ul>
<p>The takeaway: be skeptical of mailers and calls warning that your warranty is "expiring," and verify any company's CDI license before paying.</p>`,
    },
    {
      heading: "What California homes need from a home warranty",
      body: `<h3>Older homes</h3>
<p>California has the oldest housing stock in the Sun Belt. NAHB's analysis of 2024 Census data puts the median age of owner-occupied California homes at <strong>45 years</strong>, older than the national median of 42 - and California is the only Sun Belt state above it. Older homes mean more plumbing, electrical and water heater claims, and more disputes over wear and tear, maintenance and pre-existing conditions. Our <a href="/articles/home-warranty-claim-denied">claim denial guide</a> explains how to document claims on older systems.</p>
<h3>Gas heat and water heaters</h3>
<p>EIA's 2020 Residential Energy Consumption Survey found about <strong>64% of California homes heat with natural gas</strong> and 20% with electricity - the reverse of Texas or Florida. Gas furnaces and gas water heaters are core claims here, and replacements can involve venting, gas line and code work.</p>
<h3>Code and permit costs</h3>
<p>California's codes add costs that many home warranty plans exclude:</p>
<ul>
<li><strong>Water heater strapping.</strong> Health and Safety Code section 19211 requires new, replacement and existing residential water heaters to be braced, anchored or strapped against earthquake motion, and sellers must certify compliance to buyers in writing.</li>
<li><strong>Energy code.</strong> California's 2025 Title 24 energy standards, in effect for permits filed on or after January 1, 2026, expand heat pump baselines for space and water heating in new single-family homes. Replacement work in existing homes must also meet applicable code.</li>
<li><strong>Refrigerant transition.</strong> New AC equipment uses R-454B or R-32, which can turn a condenser failure into a larger replacement (see our <a href="/articles/r-410a-phase-out-home-warranty">R-410A guide</a>).</li>
</ul>
<p>Because replacements in California often require permits and code updates, <strong>permit and code coverage is worth more here than almost anywhere</strong>. American Home Shield's ShieldPlatinum includes permit and modification benefits; many base plans don't.</p>
<h3>Air conditioning is less universal</h3>
<p>About 72% of California homes have air conditioning and roughly 54% have central AC, according to EIA's 2020 survey - far below Florida or Arizona, and varying widely between the coast and inland valleys. If you live in the Central Valley or Inland Empire, AC coverage matters as much as anywhere; on the coast, you may prioritize plumbing and heating instead.</p>
<h3>Power shutoffs and surges</h3>
<p>Utilities' Public Safety Power Shutoffs can cut power to large areas during fire weather - CPUC records show individual 2019 PG&E events affecting roughly 730,000 and 940,000 customers. Many home warranties exclude damage from power surges and outages, so check the surge exclusion and consider whole-home surge protection.</p>`,
    },
    {
      heading: "Our picks for California homeowners",
      body: `<table>
<thead><tr><th>Your situation</th><th>Consider</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Older home where code and permit costs are likely</td><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>ShieldPlatinum adds permits, code and modifications benefits plus all refrigerant; up to $5,000 HVAC</td></tr>
<tr><td>Buying a home through a California agent</td><td><a href="/reviews/first-american">First American</a></td><td>A long-standing California real estate brand; real estate plans cover unknown pre-existing conditions; strong appliance limits</td></tr>
<tr><td>Simple, lower-cost coverage</td><td><a href="/reviews/choice-home-warranty">Choice Home Warranty</a></td><td>Two plans, $3,000 per item; California contracts issued by a CDI-licensed affiliate</td></tr>
<tr><td>Cash-outs tied to local retail prices</td><td><a href="/reviews/2-10-home-buyers-warranty">2-10 Home Buyers Warranty</a></td><td>Its 2025 sample contract bases cash in lieu on an estimate of local retail cost - useful in a high-cost state</td></tr>
<tr><td>Older equipment of unknown age</td><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>Covers items regardless of age; check its lower per-item limits</td></tr>
</tbody>
</table>`,
    },
    {
      heading: "Home warranties in a California home sale",
      body: `<p>Home warranties are a routine line item in California transactions. The California Association of REALTORS® Residential Purchase Agreement allocates costs - including a home warranty plan - in its "Terms and Allocation of Costs" section, where the parties choose who pays and can set a maximum cost. Who pays is negotiable.</p>
<p>Two California-specific points:</p>
<ul>
<li><strong>Listing-period coverage</strong> can be paid at close of escrow under California law, which lets sellers protect the home while it's on the market.</li>
<li><strong>The water heater strapping certification</strong> is a seller obligation - a home warranty won't pay to bring an unstrapped water heater up to code.</li>
</ul>`,
    },
    {
      heading: "What repairs cost in California",
      body: `<p>California labor is the most expensive of any state we cover. Bureau of Labor Statistics data for May 2023 put the mean annual wage for HVAC mechanics at <strong>$70,050</strong> in California (versus $59,620 nationally) and for plumbers at <strong>$75,300</strong>. With a median owner-occupied home value of $734,700 (ACS 2020-2024), Californians also tend to have higher-end appliances. Both factors make per-item caps and cash-in-lieu terms especially important: a cash-out calculated at a company's negotiated cost can fall well short of what a California repair or replacement costs.</p>`,
    },
    {
      heading: "Who regulates home warranties in California?",
      body: `<p>The California Department of Insurance licenses and regulates home warranty companies as home protection companies under Insurance Code sections 12740-12764.</p>`,
    },
    {
      heading: "Can a California home warranty company cancel my contract?",
      body: `<p>Only in limited situations during the initial term: nonpayment, fraud or material misrepresentation, or a listing-period contract where the sale doesn't happen. California law doesn't guarantee renewal.</p>`,
    },
    {
      heading: "Does a California home warranty cover water heater strapping or code upgrades?",
      body: `<p>Usually not on base plans. California requires water heaters to be seismically strapped and many replacements to meet current code, but many plans exclude permits and code upgrades unless you buy a tier or add-on that includes them.</p>`,
    },
    {
      heading: "How do I check if a home warranty company is licensed in California?",
      body: `<p>Use the California Department of Insurance's license lookup or its published list of home protection companies, and confirm that the licensed company is the one named as issuer in your contract.</p>`,
    },
    {
      heading: "Sources",
      body: `<p>California Insurance Code sections 12740-12764; California Department of Insurance (home protection contracts consumer page, licensed home protection company lists dated December 2024 and December 2025, press releases from May 2021, September 2021 and April 2023); California Civil Code section 1794.41; California Health and Safety Code section 19211; California Energy Commission (2025 Building Energy Efficiency Standards); California Public Utilities Commission PSPS reports (2019); U.S. Energy Information Administration 2020 RECS state tables; U.S. Census Bureau QuickFacts (ACS 2020-2024); NAHB Eye on Housing (March 2026); Bureau of Labor Statistics OEWS May 2023; California Association of REALTORS® Residential Purchase Agreement; Choice Home Warranty California terms; American Home Shield, First American and 2-10 sample contracts; our Trustpilot review study (October 26, 2026). Checked October 2026; your contract controls.</p>
${otherStates("california")}`,
    },
  ],
};
