import type { ArticleSection } from "@/lib/config";

// Part 1: quick answer, what the letters look like (annotated anatomy), why
// they know your lender, and whether they're illegal. Sources: BBB scam alert
// (July 2024) and Scam Tracker reports (2025-2026); Tennessee AG (June 29,
// 2022); Minnesota Commerce (Feb 6, 2023); Maryland AG consumer alerts (Nov
// 2022, Feb 2023); Wisconsin DATCP/OCI/DFI joint alert (July 10, 2023); Oregon
// DOJ (Aug 17, 2022); Hawaii News Now (Sept 17, 2026); FTC consumer advice;
// Connecticut AG (May 5, 2023); Fannie Mae lawsuit coverage (National Mortgage
// News, MPA, Oct 2025); KGW Verify; NerdWallet. Researched November 2026.
export const part1: ArticleSection[] = [
  {
    heading: "Is the home warranty letter I got in the mail a scam?",
    body: `<div class="qa"><strong>Quick answer</strong>Probably, or at least it's deceptive. Letters titled "Final Notice," "Home Warranty Division" or "Warranty Expiration" that mention your mortgage lender, your loan amount or "county deed records" are marketing mailers, not notices. Your mortgage lender doesn't send them, no lender or government agency requires a home warranty, and you can't lose coverage you never bought. Most come from service-contract sellers using public property records to look official; some are outright fraud. Don't call the number on the letter, don't pay a "renewal fee," and check any company independently. If you want a home warranty, buy it directly from a company you've researched.</div>
<p>If you've owned a home for more than a few months, you've probably received one: an official-looking envelope, a red "FINAL NOTICE" stamp, your lender's name, the amount of your mortgage, and a warning that your "home warranty coverage" is about to expire. Call within ten days, it says, or you could be "liable for all costs" of future repairs.</p>
<p>State attorneys general, the Federal Trade Commission, the Better Business Bureau and Fannie Mae have all warned about these letters. This guide shows what they look like, explains how they get your information and whether they're legal, gives you a 12-point checklist for telling a real notice from a fake one, and walks through what to do if you've already called or paid. At the end, we explain how to buy a home warranty safely, from a real company, if you want one.</p>`,
  },
  {
    heading: "What home warranty scam letters look like",
    body: `<p>The letters vary, but regulators and consumers describe the same features again and again. Here's the anatomy of a typical mailer, with what each element is designed to do.</p>
<table>
<thead><tr><th>What the letter shows</th><th>What it's designed to make you think</th><th>The reality</th></tr></thead>
<tbody>
<tr><td>"FINAL NOTICE," "SECOND ATTEMPT," "IMMEDIATE RESPONSE REQUIRED"</td><td>You've missed earlier notices about something you owe</td><td>There were no earlier notices; it's a first contact</td></tr>
<tr><td>Your mortgage lender's name (sometimes Fannie Mae or a state agency)</td><td>The letter comes from, or is endorsed by, your lender</td><td>Fine print usually says the sender is "not affiliated" with your lender</td></tr>
<tr><td>Your loan amount, recording date or "county deed records"</td><td>The sender has an official relationship with your property</td><td>These details are public records anyone can look up</td></tr>
<tr><td>"Your warranty may be expiring or may have already expired"</td><td>You have coverage that's lapsing</td><td>Many recipients never had a warranty at all</td></tr>
<tr><td>A deadline ("respond within 10 days")</td><td>Act now, before thinking or checking</td><td>False urgency is a classic pressure tactic</td></tr>
<tr><td>A generic department name ("Home Warranty Division," "Home Warranty Dept.," "Home Warranty Direct")</td><td>An official program or office</td><td>No company name, or a name you can't find</td></tr>
<tr><td>A check-like "voucher" or "renewal/registration fee" slip</td><td>Money is owed or due to you</td><td>Not a real check; sometimes a fee request (one Maryland example: $199)</td></tr>
<tr><td>A phone number as the only contact; no return address or a PO box</td><td>Calling is the only way to respond</td><td>No way to verify who sent it</td></tr>
<tr><td>A warning you'll be "liable for all costs" of repairs</td><td>You face a financial penalty for not responding</td><td>You're responsible for repairs either way; a warranty is optional</td></tr>
</tbody>
</table>
<p><em>Sources: BBB scam alert (July 2024) and Scam Tracker reports (2025-2026); Tennessee Attorney General (June 2022); Minnesota Department of Commerce (February 2023); Maryland Attorney General consumer alerts (November 2022, February 2023); Wisconsin DATCP, OCI and DFI joint alert (July 2023); Oregon Department of Justice (August 2022).</em></p>
<p>Some versions go further. Consumers have reported fake "home protection identification cards," letters signed by the same "program director" across many states (a sign of one templated operation), and mailers that imitate real brands - BBB Scam Tracker includes reports of an American Home Shield impersonator. In September 2026, Hawaii officials warned about letters that falsely appeared to come from a state agency, combining "final notice" language with county records dates and warranty expiration deadlines.</p>
<p>Wisconsin's regulators put it simply in their 2023 alert: when a mailer uses threatening or unnecessarily urgent language, it's almost always a scam.</p>`,
  },
  {
    heading: "How do they know my lender and loan amount?",
    body: `<p>This is the detail that convinces most people a letter is real - and it's the easiest to explain. When you buy a home with a mortgage, the deed and the mortgage (or deed of trust) are recorded with your county. Those records typically show your name, address, the lender's name, the loan amount and the recording date. They're public, and data companies compile and sell them as marketing lists.</p>
<p>So a letter that knows your lender and loan amount proves only that the sender bought a mailing list. It doesn't prove any relationship with your lender. As one TV consumer team put it after checking with lenders: your mortgage company will not send you mail about a home warranty.</p>
<p>That's also why these letters often arrive in the first months after you buy or refinance: new recordings feed new mailing lists. Expect a wave of mail that looks official - not just warranty offers, but also "deed copy" services and mortgage protection insurance pitches.</p>`,
  },
  {
    heading: "Are home warranty scam letters illegal?",
    body: `<p>It depends on what's behind them. Regulators describe two kinds of operations:</p>
<ul>
<li><strong>Deceptive marketing for real products.</strong> Many letters are lead generation for companies that do sell home service contracts. The FTC calls the official-looking mailer "a scare tactic" to get you to call; when you do, you reach someone selling an extended warranty or service contract. The product may be real, but the way it's sold misleads.</li>
<li><strong>Outright fraud.</strong> Some senders collect a "renewal fee" for coverage that doesn't exist, or sell contracts from unlicensed companies that never pay claims.</li>
</ul>
<p>Even the first kind can break consumer protection laws, and regulators have acted:</p>
<table>
<thead><tr><th>Action</th><th>Date</th><th>What happened</th></tr></thead>
<tbody>
<tr><td>Connecticut Attorney General v. Integrity Admin Group</td><td>May 2023</td><td>Settlement over mailers implying homeowners already had a warranty about to lapse; $10,000 payment and a ban on false deadlines, "final notice" language and check-like documents</td></tr>
<tr><td>Fannie Mae lawsuit against four warranty marketers (N.D. Ohio)</td><td>Filed October 2025</td><td>Alleges service mark infringement and false endorsement in mailers sent since about July 2023 that created a false impression of affiliation with Fannie Mae; Fannie Mae says it doesn't require borrowers to buy home warranties. Outcome not yet reported.</td></tr>
<tr><td>Florida Office of Insurance Regulation</td><td>Ongoing</td><td>Lists unauthorized entities selling home warranties without a license, with final orders against some</td></tr>
<tr><td>Wisconsin DATCP settlement with a direct-mail auto warranty marketer</td><td>December 2022</td><td>Over false urgency in mailers - the same tactics used in home warranty letters</td></tr>
<tr><td>FCC fine against an auto warranty robocall operation</td><td>Finalized August 2023</td><td>About $300 million, after more than 5 billion illegal calls; shows how aggressively regulators pursue warranty telemarketing</td></tr>
</tbody>
</table>
<p>Using the mail to carry out a scheme to defraud is also a federal crime under the mail fraud statute (18 U.S.C. section 1341), which is why the U.S. Postal Inspection Service takes reports of fraudulent mailers.</p>
<p>The practical point: whether a particular letter is technically legal matters less than what it tells you about the company. A business that opens the relationship by pretending to be your lender isn't one you want handling a $5,000 air conditioner claim.</p>`,
  },
];
