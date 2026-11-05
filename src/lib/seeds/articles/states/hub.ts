import type { ArticleData } from "@/lib/config";

// Hub: home warranties by state - regulator table, how rules differ, links
// to each state guide. Facts from state statutes/regulators (Oct 2026); see
// the individual state guides for full sourcing.
export const stateHubGuide: ArticleData = {
  slug: "home-warranty-by-state",
  title: "Home Warranty Laws by State (2026): Regulators & Your Rights",
  description:
    "How home warranties are regulated in each state: who licenses them, refund rules, pre-existing condition protections and where to complain.",
  category: "State Guides",
  readTime: "12 min read",
  publishedAt: "2026-10-27",
  updatedAt: "2026-10-27",
  heroColor: "#FFEBDD",
  author: "Top Home Warranty Editorial Team",
  keyTakeaways: [
    "There is no federal home warranty regulator; each state decides whether and how to regulate home warranties, so your rights depend on where the home is.",
    "Some states license home warranty companies through the insurance department (California, Florida), others through a licensing or consumer agency (Texas, Virginia), and some regulate them lightly - North Carolina's insurance department says it doesn't regulate service agreement sellers.",
    "State rules can be stronger than the contract: Arizona bars excluding pre-existing conditions the company knew or should have known about, Texas caps cancellation fees at $50 after 30 days, and Florida gives a full refund within 10 days.",
    "Most companies we track sell in nearly every state, but not all: Choice doesn't sell in Washington, and First American serves about 36 states.",
  ],
  sections: [
    {
      heading: "Do home warranty laws differ by state?",
      body: `<div class="qa"><strong>Quick answer</strong>Yes - significantly. Home warranties are regulated state by state, not federally. Depending on where you live, a home warranty company may need an insurance license, a service contract registration or a surety bond; your refund rights on cancellation can range from a full refund within 10 days to a pro rata refund minus a capped fee; some states restrict pre-existing condition exclusions; and the agency that handles complaints varies. Check your state's rules alongside your contract.</div>
<p>The Federal Trade Commission treats home warranties as service contracts and offers consumer advice, but it doesn't license companies or resolve individual claims. That job falls to the states, and they've taken very different approaches. Below is a summary for the states we cover in depth, how the rules differ, and links to our detailed state guides.</p>`,
    },
    {
      heading: "State guides",
      body: `<table>
<thead><tr><th>State</th><th>Regulator</th><th>Notable consumer rule</th><th>Complaints</th></tr></thead>
<tbody>
<tr><td><a href="/articles/best-home-warranty-texas">Texas</a></td><td>Texas Department of Licensing and Regulation (TDLR)</td><td>Full refund within 30 days; $50 maximum cancellation fee after; contract must state whether pre-existing conditions are covered; RSC ombudsman</td><td>TDLR: 1-800-803-9202</td></tr>
<tr><td><a href="/articles/best-home-warranty-california">California</a></td><td>California Department of Insurance (home protection companies)</td><td>Licensing, reserve and net-worth requirements; contract forms filed before use; company can't cancel during the initial term except for limited reasons</td><td>CDI: 1-800-927-4357</td></tr>
<tr><td><a href="/articles/best-home-warranty-florida">Florida</a></td><td>Office of Insurance Regulation (licensing); Department of Financial Services (complaints)</td><td>Full refund within 10 days (up to 5% fee); exclusions in bold; private right of action after notice</td><td>DFS: 1-877-693-5236</td></tr>
<tr><td><a href="/articles/best-home-warranty-arizona">Arizona</a></td><td>Department of Insurance and Financial Institutions (DIFI)</td><td>Can't exclude pre-existing conditions the company knew or should have known about; fee capped at lesser of $75 or 10%</td><td>DIFI; Attorney General</td></tr>
<tr><td><a href="/articles/best-home-warranty-georgia">Georgia</a></td><td>Office of Insurance and Safety Fire Commissioner</td><td>$100,000 surety bond; contracts disclose the surety, and some let you claim against it if a repair isn't completed in 60 days</td><td>OCI: 1-800-656-2298</td></tr>
<tr><td><a href="/articles/best-home-warranty-north-carolina">North Carolina</a></td><td>Limited regulation; NC Department of Justice handles complaints</td><td>Real property warranties must exclude fire, flood and wind and post a $100,000 bond; appliance service agreements cancelable any time with a fee capped at 10% of the refund</td><td>NC DOJ: 1-877-566-7226</td></tr>
</tbody>
</table>`,
    },
    {
      heading: "How states regulate home warranties: four models",
      body: `<p>States generally fall into one of four approaches:</p>
<ol>
<li><strong>Insurance-department licensing.</strong> California licenses "home protection companies" under its Insurance Code, with net-worth and reserve requirements and filed contract forms. Florida's Office of Insurance Regulation licenses "home warranty associations" under chapter 634 of its statutes, with reserve requirements and detailed contract rules. Oklahoma's Insurance Department licenses home service contract providers.</li>
<li><strong>Licensing or consumer agency registration.</strong> Texas moved home warranties from its real estate commission to the Department of Licensing and Regulation in 2021. Virginia's Department of Agriculture and Consumer Services registers home service contract providers and requires a bond.</li>
<li><strong>Service contract permits with financial security.</strong> Arizona (DIFI permits), Nevada (Division of Insurance registration under NRS 690C), Washington (insurance commissioner registration), Oregon (Division of Financial Regulation) and Utah (limited regulation through the insurance department) regulate home warranties as service contracts.</li>
<li><strong>Bond-only or light regulation.</strong> Georgia requires a surety bond of at least $100,000 for home warranty companies relying on its exemption from insurance regulation. North Carolina's Department of Insurance says it doesn't regulate service agreement sellers; warranties on real property must exclude fire, flood and wind perils and post a $100,000 bond with the Secretary of State. Some states have little specific regulation at all.</li>
</ol>`,
    },
    {
      heading: "The state rules that matter most to homeowners",
      body: `<h3>Cancellation and refunds</h3>
<table>
<thead><tr><th>State</th><th>Refund rule</th></tr></thead>
<tbody>
<tr><td>Texas</td><td>Full refund within 30 days (less claims), no fee; then pro rata minus a fee of up to $50; 10%/month penalty on late refunds</td></tr>
<tr><td>Florida</td><td>Full refund within 10 days (less claims), up to 5% admin fee; after that, 90% of the unearned pro rata premium less claims</td></tr>
<tr><td>Arizona</td><td>Pro rata minus benefits paid and an admin fee of no more than the lesser of $75 or 10%</td></tr>
<tr><td>North Carolina (appliance service agreements)</td><td>Cancel any time; pro rata minus claims and an admin fee of no more than 10% of the refund</td></tr>
<tr><td>California</td><td>Set by the contract; the general Civil Code service-contract refund rule excludes home protection plans</td></tr>
</tbody>
</table>
<h3>Pre-existing conditions</h3>
<p>Arizona has the strongest rule we found: a contract may not exclude pre-existing conditions the company or seller knew or reasonably should have known about. Texas requires every contract to state whether pre-existing conditions are covered. Elsewhere, it's mostly up to the contract - many real estate plans cover unknown or undetectable pre-existing conditions.</p>
<h3>Unpaid claims backstops</h3>
<p>Several states give you somewhere to turn if a company doesn't pay. In Georgia, contracts disclose a surety bond, and Select's and American Home Shield's Georgia terms describe claiming directly against the surety if a valid claim isn't paid or a repair isn't completed within 60 days. Utah lets contract holders claim against the provider's reimbursement insurer if a claim isn't paid within 60 days of proof of loss. Florida gives consumers a private right of action - the greater of actual damages or $500, plus attorney's fees - after written notice and a 30-day cure period.</p>
<h3>Complaint handling</h3>
<p>Texas runs a dedicated residential service company ombudsman. California's Department of Insurance takes requests for assistance on denied claims. Nevada's Division of Insurance tracks complaints where a company's decision was overturned. In states with lighter regulation, the attorney general's consumer protection division is usually the right place to file.</p>`,
    },
    {
      heading: "Which companies sell in which states?",
      body: `<p>Most of the companies we track sell in nearly every state, but there are gaps. Based on company materials and published reviews (confirm for your address before buying):</p>
<ul>
<li><strong>Choice Home Warranty</strong> - not available in Washington. In California, its contracts are issued by Home Service Club of California, Inc.</li>
<li><strong>American Home Shield</strong> - not available in Alaska; some coverage (such as roof leak) isn't sold in Hawaii.</li>
<li><strong>Select Home Warranty</strong> - not available in Nevada or Washington, plus at least one other state depending on the source.</li>
<li><strong>First American</strong> - about 36 states; not available in much of New England and some other states, including Alaska, Hawaii, Louisiana, Minnesota, New York and Wisconsin.</li>
<li><strong>Home Warranty of America</strong> - reported available in all 50 states.</li>
<li><strong>The Home Service Club</strong> - widely available; sources differ on exact coverage.</li>
<li><strong>2-10 Home Buyers Warranty</strong> - not available in several states, reported to include Alaska, Hawaii, New Hampshire, Oklahoma and Wyoming.</li>
</ul>
<p>Choice, Home Warranty of America and The Home Service Club are sister brands owned by Rely Home; American Home Shield and 2-10 are both owned by Frontdoor, Inc.</p>`,
    },
    {
      heading: "Who regulates home warranties in my state?",
      body: `<p>Start with your state insurance department - it either regulates home warranties or can point you to the agency that does. In Texas it's TDLR; in Virginia, the Department of Agriculture and Consumer Services; in North Carolina, the Department of Justice handles complaints. Our state guides list the agency and contact details for each state we cover.</p>`,
    },
    {
      heading: "Are home warranties regulated like insurance?",
      body: `<p>In some states, partly. California and Florida license home warranty companies through their insurance regulators with financial requirements, but home warranties aren't insurance policies - they cover repair or replacement of failed systems, not damage to your home. Other states treat them as service contracts with lighter rules.</p>`,
    },
    {
      heading: "Sources",
      body: `<p>Texas Occupations Code chapter 1304 and TDLR materials; California Insurance Code sections 12740-12764 and California Department of Insurance; Florida Statutes chapter 634, Part II, the Office of Insurance Regulation and Department of Financial Services; Arizona Revised Statutes 20-1095 and following and DIFI; Georgia Code 33-7-6 and the Office of Insurance and Safety Fire Commissioner; North Carolina General Statutes 58-1-20 and chapter 66, article 43, and NC Department of Insurance and Department of Justice; Nevada Division of Insurance; Oklahoma Insurance Department; Virginia Department of Agriculture and Consumer Services; Washington Office of the Insurance Commissioner; Oregon Division of Financial Regulation; Utah Code 31A-6a-104; Federal Trade Commission. Company availability from company materials and published reviews. Checked October 2026. This is general information, not legal advice.</p>`,
    },
  ],
};
