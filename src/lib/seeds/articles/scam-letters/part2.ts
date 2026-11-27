import type { ArticleSection } from "@/lib/config";

// Part 2: 12-point checklist, real vs fake comparison, how to verify a company
// (state license lookups), what to do if you called or paid (FCBA dispute
// rules), how to report and reduce mail. Sources: FTC consumer advice
// (prescreened offers; scam mailers), Cornell LII on the Fair Credit Billing
// Act, California DOI home protection company list (Dec 2, 2024) and consumer
// page, Florida OIR unauthorized entities, Texas TDLR license search, USPIS
// reporting page, FTC Consumer Sentinel data (2025, released 2026), FTC
// imposter scam release (June 2026), BBB 2025 Scam Tracker Risk Report (Aug
// 2026). Researched November 2026.
export const part2: ArticleSection[] = [
  {
    heading: "How to tell if a home warranty letter is real: 12-point checklist",
    body: `<p>Run any warranty mailer through these questions. One "yes" is a warning sign; three or more and you can treat the letter as deceptive.</p>
<ol>
<li><strong>Does it say your coverage is expiring - but you never bought a home warranty?</strong> You can't lose coverage you don't have.</li>
<li><strong>Does it use your lender's name, Fannie Mae, Freddie Mac or a government agency?</strong> None of them sells or requires home warranties.</li>
<li><strong>Does it say "final notice" on the first letter you've received?</strong></li>
<li><strong>Is there a short deadline</strong> - 5, 10 or 15 days - with a threat of being "liable" for repairs?</li>
<li><strong>Is the sender a "division" or "department" with no company name</strong>, or a name you can't find with a regulator?</li>
<li><strong>Is the only way to respond a phone number?</strong> No website, no street address, or a PO box only.</li>
<li><strong>Is there fine print saying it's "not affiliated with" your lender or "not a bill"?</strong> That disclaimer is the tell.</li>
<li><strong>Does it include a check-like voucher or a "renewal fee"?</strong></li>
<li><strong>Does it cite your loan amount or "county deed records"</strong> as proof of a relationship?</li>
<li><strong>Does it fail to name the plan, the price or what's covered?</strong> Real renewals reference a contract number and terms.</li>
<li><strong>When you search the company name plus "scam" or "BBB," do you find warnings?</strong></li>
<li><strong>Would the caller push you to pay on the first call</strong> before you've seen a written contract?</li>
</ol>
<p>A real renewal notice from a company you actually bought from looks very different: it names the company, your contract number and plan, shows the renewal price and service fee, and directs you to the company's own website or the number on your existing contract.</p>`,
  },
  {
    heading: "Real renewal notice vs. scam mailer: side by side",
    body: `<table>
<thead><tr><th>Feature</th><th>Real renewal from your warranty company</th><th>Deceptive mailer</th></tr></thead>
<tbody>
<tr><td>Sender</td><td>The company you bought from, by name and logo</td><td>A "division," "department" or unfamiliar name; often uses your lender's name</td></tr>
<tr><td>Contract details</td><td>Your contract number, plan name and current terms</td><td>None; or only your address and loan details</td></tr>
<tr><td>Price</td><td>Renewal price and service fee stated</td><td>No price; "call to activate"</td></tr>
<tr><td>Timing</td><td>Near your actual contract end date</td><td>Months after you buy or refinance, whether or not you have a warranty</td></tr>
<tr><td>Tone</td><td>Informational</td><td>Urgent, threatening, "final notice"</td></tr>
<tr><td>How to respond</td><td>Company website, account login or the number on your contract</td><td>Only the phone number on the letter</td></tr>
<tr><td>Disclaimers</td><td>Standard terms</td><td>"Not affiliated with your mortgage holder," "This is not a bill"</td></tr>
</tbody>
</table>
<p>If you're not sure whether you have a home warranty at all, check your closing documents. A warranty bought at closing appears on your settlement statement (Closing Disclosure), usually as a line item paid by the buyer or seller. Our guide to <a href="/articles/home-warranty-for-home-buyers-and-sellers">home warranties in a home sale</a> explains how those plans work and when they end.</p>`,
  },
  {
    heading: "How to check whether a home warranty company is legitimate",
    body: `<p>Whether the company came to you through a letter, an ad or a friend's recommendation, the same checks apply. They take about 15 minutes.</p>
<ol>
<li><strong>Find the full legal name.</strong> A legitimate seller will give you its legal company name, a physical address and a website. If a caller won't, stop there.</li>
<li><strong>Check your state's license list.</strong> Many states license or register home warranty companies. Examples:
<ul>
<li><strong>California:</strong> the Department of Insurance publishes a list of licensed home protection companies and runs a consumer hotline (1-800-927-4357).</li>
<li><strong>Florida:</strong> home warranty associations must be licensed by the Office of Insurance Regulation (Fla. Stat. 634.303), which also lists unauthorized entities.</li>
<li><strong>Texas:</strong> residential service companies are licensed by the Texas Department of Licensing and Regulation, which has an online license search.</li>
</ul>
Our <a href="/articles/home-warranty-by-state">state-by-state guide</a> lists the regulator for each state.</li>
<li><strong>Look up complaints.</strong> Search the company on the BBB, your state attorney general's site and the regulator's enforcement page. A pattern of claim complaints matters more than a star rating.</li>
<li><strong>Read the contract before paying.</strong> Ask for the sample contract for your state and check the limits, exclusions, service fee and cancellation terms. Our <a href="/articles/home-warranty-coverage-limits">coverage limits guide</a> shows what to look for.</li>
<li><strong>Compare with established companies.</strong> Price the same coverage with two or three well-known companies. If an unknown seller is far cheaper or far more expensive, ask why.</li>
</ol>`,
  },
  {
    heading: "What to do if you called the number or paid",
    body: `<p>Plenty of careful people call these numbers - the letters are designed to work. What to do next depends on how far it went.</p>
<table>
<thead><tr><th>Situation</th><th>What to do now</th></tr></thead>
<tbody>
<tr><td>You called but didn't pay</td><td>Don't call back. Expect follow-up calls; you can hang up. Don't confirm personal details, bank or card numbers. Add your number to the National Do Not Call Registry.</td></tr>
<tr><td>You gave card details or paid by card</td><td>Ask the company in writing to cancel and refund. If it won't, dispute the charge with your card issuer in writing. Under the federal Fair Credit Billing Act, your dispute must reach the issuer within 60 days of the first statement showing the charge; the issuer must acknowledge it within 30 days and resolve it within two billing cycles (no more than 90 days).</td></tr>
<tr><td>You paid by debit card, bank transfer or check</td><td>Contact your bank immediately and ask about stopping or reversing the payment. Protections are weaker and depend on timing, so act the same day.</td></tr>
<tr><td>You bought a contract and want out</td><td>Read the cancellation clause; many contracts and some state laws allow cancellation with a prorated refund, minus a fee. Send the cancellation in writing and keep proof.</td></tr>
<tr><td>You gave your Social Security number or bank login</td><td>Treat it as possible identity theft: change passwords, place a fraud alert or credit freeze with the three credit bureaus, and use IdentityTheft.gov for a recovery plan.</td></tr>
</tbody>
</table>
<p>Keep the letter, envelope, call log and any receipts. They're what regulators and card issuers will ask for.</p>`,
  },
  {
    heading: "How to report a home warranty scam letter",
    body: `<p>Reports help regulators connect letters to the companies behind them - several of the enforcement actions above began with consumer complaints.</p>
<ul>
<li><strong>Federal Trade Commission:</strong> ReportFraud.ftc.gov.</li>
<li><strong>U.S. Postal Inspection Service:</strong> for suspected mail fraud, at uspis.gov/report or 1-877-876-2455.</li>
<li><strong>Your state attorney general's</strong> consumer protection office, and your state's insurance or licensing regulator if the seller may be unlicensed.</li>
<li><strong>BBB Scam Tracker:</strong> helps warn other homeowners searching the same letter.</li>
<li><strong>Your mortgage servicer</strong>, if the letter uses its name - lenders and Fannie Mae have taken action against marketers who imply affiliation.</li>
</ul>`,
  },
  {
    heading: "How to get fewer of these letters",
    body: `<p>You can't stop all of them - mailers built from public property records don't depend on your credit file - but you can cut the volume:</p>
<ul>
<li><strong>Opt out of prescreened offers</strong> at OptOutPrescreen.com or 1-888-5-OPT-OUT (1-888-567-8688): five years online, or permanently with a signed form. This stops credit and insurance offers based on your credit report; it may not stop warranty mailers, but it reduces related mail.</li>
<li><strong>Register with DMAchoice</strong>, the marketing industry's mail preference service, to reduce mail from participating companies.</li>
<li><strong>Join the National Do Not Call Registry</strong> (donotcall.gov) to reduce telemarketing follow-ups.</li>
<li><strong>Shred letters that include your loan details</strong> rather than recycling them whole.</li>
</ul>`,
  },
  {
    heading: "Fraud by the numbers: why these letters keep coming",
    body: `<p>Mailers persist because deception works at scale. Federal and BBB data show the backdrop:</p>
<table>
<thead><tr><th>Measure</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Reported fraud losses in the US, 2025</td><td>About $15.9 billion, up from $12.5 billion in 2024</td><td>FTC Consumer Sentinel data, as reported in 2026</td></tr>
<tr><td>Losses to imposter scams, 2025</td><td>About $3.5 billion; nearly one in three fraud reports</td><td>FTC, June 2026</td></tr>
<tr><td>Median reported loss across BBB Scam Tracker reports, 2025</td><td>$93</td><td>BBB Scam Tracker Risk Report, August 2026</td></tr>
</tbody>
</table>
<p>Home warranty mailers usually fall into the "imposter" pattern - they borrow the credibility of a lender, a government agency or a known brand. Federal data don't break out home warranty letters separately, so there's no reliable count of how many homeowners respond. The regulator warnings in at least eight states since 2022, plus Fannie Mae's 2025 lawsuit, show the problem is national and ongoing.</p>`,
  },
];
