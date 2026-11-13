import type { ArticleSection } from "@/lib/config";

// Part 2: coverage shifts, aerial imagery, mitigation, state hot spots, the
// Nov 3 2026 commissioner elections, flood insurance (NFIP) and policy
// changes. Sources: ZestyAI (roof schedules); Florida s. 627.7011(5); Virginia
// HB 677/SB 402 (2026); TDI release (Sept 29, 2026); Triple-I and Insurify on
// deductibles; state aerial-imagery bulletins (PA Notice 2024-06, MD 25-10,
// MI 2025-12-INS, TN 25-03, AL, NC, RI, ME, NH, WV) and Georgia HB 1344;
// Alabama DOI / UA CRIR Hurricane Sally study (May 2025); state grant program
// pages; CDI; Florida OIR (Oct 29, 2026); Citizens; Louisiana DOI; election
// results (SF Standard, WALB, DDHQ, AP via News9); CRS on NFIP; GAO.
export const part2: ArticleSection[] = [
  {
    heading: "Trend 6: Your policy probably covers less than it used to",
    body: `<p>The headline premium is the number everyone watches. The bigger change for many households is what that premium buys. Four shifts stand out:</p>
<h3>Bigger and percentage-based deductibles</h3>
<p>Insurers have been steering customers toward higher deductibles to keep premiums down. Hurricane deductibles - usually 1% to 5% of the home's insured value, and up to 10% in some high-risk areas - are allowed in about 19 states plus Washington, D.C., according to the Insurance Information Institute and Policygenius (counts differ slightly by source). Separate wind and hail deductibles are now common in hail country: Insurify's data show average wind/hail deductibles of about 2.2% of dwelling coverage in Texas, 2% in Louisiana and 2% in Oklahoma. On a $350,000 home, a 2% deductible means the first $7,000 of a storm claim is yours.</p>
<h3>Roofs paid at depreciated value</h3>
<p>More policies now pay for older roofs on an actual cash value (ACV) basis or a roof payment schedule that shrinks as the roof ages. ZestyAI, a vendor that analyzes insurer filings, found roof schedules in about 60% of policies among the top 10 carriers in 2025, up from about 10% in 2015. Roofs 15 to 20 years old commonly trigger an inspection, ACV-only coverage or non-renewal.</p>
<h3>Cosmetic damage exclusions</h3>
<p>Some policies, particularly those with metal-roof discounts, exclude "cosmetic" hail damage - dents that don't cause leaks. The Texas Department of Insurance warns that a roofing discount can come with a cosmetic damage exclusion, and that exclusions can be added at renewal. Courts have started weighing in: in July 2026 a federal appeals court applying Minnesota law narrowed one insurer's cosmetic exclusion, and federal courts in Texas have split.</p>
<h3>Wear and tear was never covered - and that gap matters more now</h3>
<p>Standard homeowners policies cover sudden, accidental damage and exclude wear and tear, deterioration and poor maintenance. With higher deductibles, depreciated roof payments and tighter claims scrutiny, the share of home repair costs that falls on the owner has grown. That's the gap home warranties are designed for - a home warranty pays to repair or replace systems and appliances that fail from normal use, which insurance never covers. Our <a href="/articles/home-warranty-vs-homeowners-insurance">home warranty vs homeowners insurance guide</a> explains how the two fit together.</p>`,
  },
  {
    heading: "Trend 7: Aerial images and AI are deciding renewals",
    body: `<p>Insurers increasingly use aerial and satellite imagery, drones and AI models to assess roofs, trees, debris and pools without visiting the property. Homeowners have complained about non-renewals based on blurry, outdated or misread images - and in 2025 and 2026, regulators responded. Most of the rules so far are bulletins (regulatory guidance) rather than laws, and they share common themes: advance notice, a copy of the image, recent and clear imagery, a physical inspection to confirm damage, and time to repair or dispute.</p>
<table>
<thead><tr><th>State</th><th>Action</th><th>Key requirement</th></tr></thead>
<tbody>
<tr><td>Pennsylvania</td><td>Notice 2024-06 (May 2024)</td><td>Imagery must show definite material damage; discoloration or streaking alone isn't enough; physical inspection and a chance to repair or challenge</td></tr>
<tr><td>Maryland</td><td>Bulletin 25-10 (June 2025)</td><td>Applies to cancellations, non-renewals and claim denials, including drone images</td></tr>
<tr><td>Michigan</td><td>Bulletin 2025-12-INS</td><td>Advance notice, copies of images, right to challenge</td></tr>
<tr><td>Alabama</td><td>Bulletins (2025)</td><td>Blurry or old images usually not sufficient on their own</td></tr>
<tr><td>Tennessee</td><td>Bulletin 25-03 (Oct 2025, updated Apr 2026)</td><td>Time to repair before non-renewal; unclear imagery alone may be an unfair practice</td></tr>
<tr><td>North Carolina, Rhode Island, Maine, New Hampshire, West Virginia</td><td>Bulletins (2025)</td><td>Similar notice, accuracy and dispute expectations</td></tr>
<tr><td>Georgia</td><td>HB 1344, Georgia Insurance Fairness Act (signed May 2026)</td><td>Right to see and dispute aerial images used to end a policy - the first statute we found</td></tr>
</tbody>
</table>
<p><em>Sources: state insurance department bulletins and notices; Georgia Senate press office. Bills in California, New York and Texas were pending or unconfirmed as of our research.</em></p>
<p><strong>What to do:</strong> if an insurer cites imagery, ask for the images and the date they were taken, get a roofer's or inspector's written assessment, and ask whether a repair would let you keep the policy. Your state insurance department can tell you which rules apply.</p>`,
  },
  {
    heading: "Trend 8: Fortified roofs and mitigation grants go mainstream",
    body: `<p>The most promising long-term fix for rising premiums is making homes harder to damage, and the evidence for it is getting stronger. IBHS's FORTIFIED standard - a set of construction requirements for roofs and, at higher levels, the whole home - was put to a real-world test by Hurricane Sally in 2020. A May 2025 study by the Alabama Department of Insurance and the University of Alabama's Center for Risk and Insurance Research, covering about 40,000 policies, found FORTIFIED Roof homes had 73% fewer claims and a 72% lower loss ratio than comparable homes.</p>
<table>
<thead><tr><th>State program</th><th>Grant</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Strengthen Alabama Homes</td><td>Up to $10,000</td><td>Paid to the contractor; Alabama law requires insurers to discount the wind portion of the premium for FORTIFIED homes</td></tr>
<tr><td>Louisiana Fortify Homes</td><td>Up to $10,000</td><td>Lottery-based; new funding added in 2026; a state income tax credit of up to $10,000 for self-funded fortified roofs (2025 law); the legislative auditor found recipients paid an average of more than $6,200 out of pocket</td></tr>
<tr><td>My Safe Florida Home</td><td>Up to $10,000</td><td>Matching requirement; more than $600 million budgeted for 2025-26</td></tr>
<tr><td>Strengthen Oklahoma Homes</td><td>Up to $10,000</td><td>Statewide since January 2026</td></tr>
<tr><td>SC Safe Home</td><td>About $4,000-$7,500</td><td>Coastal, owner-occupied homes</td></tr>
<tr><td>Mississippi</td><td>Up to $15,000</td><td>Wind mitigation program revived in 2026</td></tr>
<tr><td>Colorado</td><td>Roof grants</td><td>Strengthen Colorado Homes Enterprise created in 2026</td></tr>
</tbody>
</table>
<p><em>Sources: state insurance department program pages; Louisiana Illuminator; Insurance Journal. Funding and eligibility change often, so check your state's program directly.</em></p>
<p>Wildfire mitigation is following the same path. California's Safer from Wildfires regulation requires insurers to offer discounts for qualifying mitigation, with credits that vary widely by insurer, and Colorado's HB25-1182 requires insurers whose wildfire models ignore mitigation to discount it, disclose wildfire risk scores and allow appeals. In August 2026 the NAIC also released a draft model law for state mitigation grant programs.</p>
<p><strong>What to do:</strong> if you're replacing a roof anyway, ask your roofer about the FORTIFIED Roof standard and your state's grant program before you sign - and ask your insurer, in writing, what discount you'd receive.</p>`,
  },
  {
    heading: "Trend 9: State markets are moving in different directions",
    body: `<h3>Florida: from crisis to competition</h3>
<p>Florida's market has turned around faster than almost anyone expected after the 2022-2023 reforms, which curbed litigation and assignment-of-benefits abuse. The Office of Insurance Regulation reported 21 new insurers since the reforms, and said on October 29, 2026 that more than 824,000 policyholders would see rate decreases (of up to about 12%) effective in October, with about 450,000 more expected through January 2027. Citizens Property Insurance, the state-backed insurer of last resort, shrank from about 1.41 million policies at its September 2023 peak to roughly 255,000 by late September 2026 as policies moved to private carriers. Florida premiums remain among the nation's highest, but the direction has changed.</p>
<h3>California: rebuilding after the wildfires</h3>
<p>California is in the middle of a reset. The FAIR Plan, the state's insurer of last resort, reached about 697,000 policies in June 2026, but its growth has slowed sharply since 2025. Regulators approved an average FAIR Plan rate increase of about 29% effective in October 2026 and raised its dwelling limit to $3 million. Under the state's Sustainable Insurance Strategy, insurers can now use catastrophe models and reinsurance costs in rates in exchange for commitments to write more policies in wildfire-distressed areas; the California Department of Insurance reported 8 of 12 filings approved by March 2026. In March 2026, State Farm General settled its rate case, making a 17% interim increase final. New laws effective January 1, 2026 let the FAIR Plan access catastrophe bonds and created a public wildfire catastrophe model.</p>
<h3>Louisiana: stabilizing, slowly</h3>
<p>Average rate changes in Louisiana were close to zero in 2026 so far, with more filings for decreases than increases, though the insurance commissioner still describes the market as a crisis. The state has invested heavily in fortified roofs, and a 2025 law requires 60 days' notice of cancellations and non-renewals with the reason stated.</p>
<h3>Texas: hail country</h3>
<p>Texas has become insurers' top advertising market, according to MediaAlpha, even as hail losses mount. New rules include written reasons for declines and non-renewals, a required appraisal provision in residential policies, a ban on mandatory home-auto bundling, and a September 2026 clarification from the Texas Department of Insurance that insurers can't decline or non-renew solely because of the age of a house or roof (condition can still count, and roof payment schedules still apply to claims).</p>
<h3>The new pressure points: Colorado, the Plains and Minnesota</h3>
<p>Colorado premiums rose about 18% in 2025 and roughly doubled from 2020 to 2025 by LendingTree's analysis, driven largely by hail. Nebraska, Oklahoma and Kansas are among the most expensive states in Bankrate's data, and Minnesota premiums are up sharply since 2020. These are the markets to watch in 2027.</p>
<h3>Roof-age protections are spreading</h3>
<p>Florida law has, since 2022, barred insurers from refusing to issue or renew a policy solely because of roof age if the roof is under 15 years old (or older with an inspection showing at least five years of life left). Virginia passed a similar law in 2026 for owner-occupied homes with asphalt shingle roofs, effective January 1, 2027, and Texas regulators issued their clarification in September 2026.</p>`,
  },
  {
    heading: "Trend 10: Four states just elected new insurance commissioners",
    body: `<p>In most states the governor appoints the insurance commissioner. In a handful, voters choose - and on November 3, 2026, four states elected one. Insurance affordability was a campaign issue in all four.</p>
<table>
<thead><tr><th>State</th><th>Winner</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>California</td><td>Jane Kim (D)</td><td>Defeated state Sen. Ben Allen in a race between two Democrats; replaces term-limited Ricardo Lara; first woman to hold the office. Results certify by December 11.</td></tr>
<tr><td>Georgia</td><td>Keisha Waites (D)</td><td>Defeated incumbent John King (R) - the cycle's upset</td></tr>
<tr><td>Kansas</td><td>Dan Hawkins (R)</td><td>Kansas House speaker; open seat after Vicki Schmidt ran for governor; close margin in early counts</td></tr>
<tr><td>Oklahoma</td><td>Bob Sullivan (R)</td><td>Replaces term-limited Glen Mulready</td></tr>
</tbody>
</table>
<p><em>Sources: SF Standard and California Secretary of State; WALB and Atlanta News First; Decision Desk HQ; AP via News9. Results unofficial until certified. We found no insurance-related ballot measures on November 2026 ballots.</em></p>
<p>New commissioners can't change prices overnight - rates still go through filings and actuarial review - but they set priorities on rate approvals, non-renewal rules, aerial imagery, mitigation discounts and claims enforcement. If you live in one of these states, watch for early announcements in 2027.</p>`,
  },
  {
    heading: "Flood insurance: still a gap, and still on short-term extensions",
    body: `<p>Standard homeowners policies don't cover flooding, and most homeowners don't have flood coverage: FEMA data cited by industry outlets put the share of US homeowners with flood insurance at about 4%. Even in FEMA's high-risk flood zones, the Government Accountability Office found only about 43% of properties insured; outside them, about 2%.</p>
<p>The National Flood Insurance Program (NFIP), which writes most residential flood policies, has been running on short-term extensions. Its authority lapsed on September 30, 2025 during the 43-day government shutdown - no new policies or renewals could be issued until it was restored - and briefly again in early February 2026. The current extension, passed in September 2026, runs to <strong>December 11, 2026</strong>, with no long-term reauthorization in place. The NFIP has about 4.5 million policies, according to the Congressional Research Service.</p>
<p>Private flood insurance is growing: GAO found the private share of residential flood coverage rose from about 6% in 2018 to 11% in 2025. Under FEMA's Risk Rating 2.0 pricing, a 2026 peer-reviewed study found the number of new policies fell as premiums rose for many households.</p>
<p><strong>What to do:</strong> if your policy renews in December, renew before the deadline in case of another lapse. And if you're outside a high-risk zone, price a policy anyway - floods outside mapped zones are common, and the cost is often modest.</p>`,
  },
  {
    heading: "What Washington and the states are proposing",
    body: `<p>Insurance is regulated by states, but affordability has become a federal issue too. Proposals in play as of November 2026:</p>
<ul>
<li><strong>Federal catastrophe backstops.</strong> Rep. Adam Schiff's INSURE Act would create a federal reinsurance program of roughly $50 billion run by Treasury, and Rep. Jared Moskowitz has reintroduced a catastrophe backstop bill. Industry groups including the Reinsurance Association of America and APCIA oppose a federal backstop. None has passed.</li>
<li><strong>Stopping NFIP lapses.</strong> Bills to keep flood insurance running during government shutdowns have been introduced but not enacted.</li>
<li><strong>Federal oversight.</strong> The Senate Budget Committee's 2024 investigation and the Treasury report continue to shape the debate, though industry groups dispute their conclusions.</li>
<li><strong>NAIC data.</strong> In March 2026 the NAIC launched a ZIP code-level data call on premiums, claims and non-renewals as a follow-up to its national analysis - which should produce more precise local data next year.</li>
<li><strong>State laws</strong> on roof age (Florida, Virginia), aerial imagery (Georgia), non-renewal notice (Louisiana, Texas), wildfire mitigation discounts (California, Colorado) and FAIR Plan oversight (California's AB 1680, phasing in from 2027) are the most direct changes homeowners will see.</li>
</ul>`,
  },
];
