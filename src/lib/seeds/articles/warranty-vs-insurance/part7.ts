import type { ArticleSection } from "@/lib/config";

// Part 7: filling the gaps - endorsements vs home warranties (Nationwide,
// Liberty Mutual, HSB, III, NerdWallet/Policygenius cost ranges), utility
// service-line plans (HomeServe/Brookfield and AG actions), coverage stacks,
// and claim strategy (deductibles, CLUE, closed-without-payment data).
export const part7: ArticleSection[] = [
  {
    heading: "Equipment breakdown coverage vs. a home warranty",
    body: `<p>Equipment breakdown coverage - sometimes sold as "home systems protection" - is an add-on to your homeowners policy that pays for sudden mechanical, electrical or pressure-system breakdown of home equipment. It's largely provided through specialist equipment breakdown reinsurers such as HSB (part of Munich Re) and Travelers' BoilerRe. Here's how it compares:</p>
<table>
<thead><tr><th></th><th>Equipment breakdown endorsement</th><th>Home warranty</th></tr></thead>
<tbody>
<tr><td>Typical cost</td><td>About $25-$50 a year (Nationwide lists about $39-$45)</td><td>About $300-$700 a year</td></tr>
<tr><td>Limit</td><td>Often $50,000 per claim (Nationwide, Liberty Mutual)</td><td>Per-item caps, often $500-$5,000</td></tr>
<tr><td>Deductible or fee</td><td>Often $500 per claim</td><td>$60-$150 per claim or visit</td></tr>
<tr><td>Covers wear and tear?</td><td><strong>No</strong> - breakdown must be sudden and accidental, not gradual wear</td><td><strong>Yes</strong> - that's the core of the product</td></tr>
<tr><td>Typical equipment</td><td>HVAC, heat pumps, water heaters, electrical panels, appliances, well pumps, pool equipment</td><td>Similar, depending on plan and add-ons</td></tr>
<tr><td>Who picks the contractor</td><td>Usually you</td><td>The company</td></tr>
<tr><td>Claim goes on your insurance record?</td><td>Generally yes - it's an insurance claim</td><td>No</td></tr>
<tr><td>Best fit</td><td>Newer equipment, where failures are more likely to be sudden electrical or mechanical breakdowns</td><td>Older equipment, where failures come from age and wear</td></tr>
</tbody>
</table>
<p>The critical difference is the wear-and-tear line. Nationwide says its coverage applies to breakdowns "not due to wear and tear." Liberty Mutual's page says its home systems coverage "is not a warranty." If a 15-year-old AC compressor simply wears out, an equipment breakdown endorsement is unlikely to pay; a home warranty is designed to. If a two-year-old heat pump's control board fails from an electrical fault, equipment breakdown coverage may pay at a fraction of the cost of a warranty - and let you choose your contractor.</p>
<p>Availability varies: not every insurer offers it, and some add it only at policy start or renewal. Ask your agent.</p>`,
  },
  {
    heading: "Other add-ons that fill the gaps",
    body: `<table>
<thead><tr><th>Endorsement</th><th>What it adds</th><th>Typical cost</th><th>Who needs it most</th></tr></thead>
<tbody>
<tr><td>Water backup / sump overflow (ISO HO 04 95)</td><td>Damage from sewer or drain backup and sump overflow, up to a limit (commonly $5,000-$25,000); not the pump itself</td><td>About $40-$250 a year depending on limit</td><td>Homes with basements, floor drains or sump pumps</td></tr>
<tr><td>Service line coverage</td><td>Repair of buried water, sewer and utility lines on your property, including excavation (HSB: up to $10,000; Liberty Mutual: $12,000)</td><td>About $20-$50 a year</td><td>Older homes, homes with large trees, clay or cast-iron lines</td></tr>
<tr><td>Increased ordinance or law (ISO HO 04 77)</td><td>Raises code-upgrade coverage after a covered loss from 10% to 25%-100% of the dwelling limit</td><td>Varies</td><td>Older homes likely to need code upgrades when rebuilt</td></tr>
<tr><td>Limited mold coverage</td><td>A sub-limit (often $5,000-$10,000) for mold from covered water losses</td><td>Varies</td><td>Humid climates</td></tr>
<tr><td>Equipment breakdown</td><td>Sudden breakdown of systems and appliances</td><td>About $25-$50 a year</td><td>Newer homes; homes with expensive equipment</td></tr>
</tbody>
</table>
<p><strong>A note on utility "service line warranties."</strong> Many homeowners get mailers offering water or sewer line protection plans, often branded with their utility's or city's logo. The largest provider, HomeServe (which also operates Service Line Warranties of America and was acquired by Brookfield in January 2023), sells single-line plans for roughly $2.49-$5.99 a month with limits of about $5,000-$12,000. Several state attorneys general have taken action over HomeServe's marketing over the years - Kansas reached an $850,000 consent judgment in January 2023 over plans marketed with a utility, requiring clear disclosure that HomeServe is independent (HomeServe did not admit wrongdoing). Compare any such plan with your insurer's service line endorsement, which often costs less for similar coverage.</p>`,
  },
  {
    heading: "The right coverage stack for your home",
    body: `<p>Most homeowners don't need every product. Here's how we'd combine them by situation:</p>
<table>
<thead><tr><th>Your situation</th><th>Homeowners insurance</th><th>Add-ons to ask about</th><th>Home warranty?</th></tr></thead>
<tbody>
<tr><td>New or recently renovated home, healthy savings</td><td>Yes</td><td>Equipment breakdown; service line; water backup if you have a basement</td><td>Usually skip - manufacturer warranties plus breakdown coverage do most of the work</td></tr>
<tr><td>Home 10-20 years old, several original systems</td><td>Yes</td><td>Service line; water backup; increased ordinance or law</td><td>Strong candidate - age-related failures are what warranties cover</td></tr>
<tr><td>Older home (30+ years)</td><td>Yes</td><td>Increased ordinance or law; service line; water backup; mold</td><td>Consider one with high caps and permit/code coverage; expect pre-existing and maintenance disputes</td></tr>
<tr><td>Tight budget, high deductible</td><td>Yes - never drop it</td><td>Service line and water backup are cheap and high-value</td><td>Can make sense if a $5,000 system failure would go on a credit card</td></tr>
<tr><td>Just bought a home (seller-paid warranty)</td><td>Yes</td><td>Review limits at your first renewal</td><td>Use the first year; reassess before renewing</td></tr>
<tr><td>Rental property</td><td>A landlord (dwelling fire) policy</td><td>Equipment breakdown if available</td><td>Often useful for remote owners who want one number to call</td></tr>
</tbody>
</table>
<p>One rule applies to everyone: <strong>a home warranty is never a substitute for homeowners insurance.</strong> If you're struggling to afford insurance, shop it (ICE Mortgage Monitor found homeowners who switched carriers in 2026 saved an average of 6.6%), raise your deductible to a level you can actually pay, and ask about discounts for roof upgrades, monitored leak detection and security systems - before you'd ever consider dropping coverage.</p>`,
  },
  {
    heading: "How to protect your insurance record while you use your coverage",
    body: `<p>In a market where insurers are selective about whom they renew, how you use your insurance matters.</p>
<h3>Know what a claim costs you</h3>
<p>Every homeowners claim - and in some cases even a reported loss - can appear on your <strong>CLUE report</strong>, the claims history database insurers check when pricing and renewing policies. Reports cover seven years of claims on both you and the property. You can request a free copy under federal law, as the Texas Department of Insurance and other regulators explain. Studies of premium impact vary, but filing a claim can raise your premium at renewal, and multiple claims can make an insurer less willing to renew.</p>
<h3>Don't claim what your deductible would swallow</h3>
<p>If damage is barely over your deductible, the payout may not be worth the claim on your record. With the share of policies carrying deductibles of $2,500 or more growing, many small losses are now effectively self-insured. That's one place a home warranty can play a supporting role: equipment failures that would never be insurance claims anyway get handled without touching your insurance history.</p>
<h3>Understand "closed without payment" statistics</h3>
<p>You may have seen headlines that insurers "deny" 40% or more of homeowners claims. Weiss Ratings' analysis of NAIC data found 41.9% of homeowners claims nationally were closed without payment in 2024, and 15 large insurers closed half or more without payment in 2025. The Insurance Information Institute points out that "closed without payment" isn't the same as a denial: it includes claims below the deductible, losses that weren't covered, and duplicates - and rising deductibles push the number up. Florida's regulator found, for example, that below-deductible claims were a large share of claims closed without payment after Hurricanes Helene and Milton. The practical lesson is the same either way: know your deductible and your exclusions before you file.</p>
<h3>Document everything</h3>
<p>For both products, the same habits protect you: date-stamped photos of damage, maintenance records for HVAC and water heaters, written diagnoses from contractors, and a log of every call. For insurance, mitigate damage promptly - the neglect exclusion can apply if you don't take reasonable steps to protect your property after a loss. For a home warranty, file promptly and get the technician's findings in writing; our <a href="/articles/home-warranty-claim-denied">denied claim guide</a> covers how to appeal.</p>`,
  },
];
