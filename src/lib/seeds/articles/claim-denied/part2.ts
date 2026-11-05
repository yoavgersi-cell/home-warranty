import type { ArticleSection } from "@/lib/config";

// Part 2: our original review study - 351 recent Trustpilot reviews of five
// home warranty companies, captured October 26, 2026. All counts come from
// src/lib/seeds/trustpilot/*.ts (the same data behind the review pages).
export const part2: ArticleSection[] = [
  {
    heading: "What 351 recent customer reviews reveal about denied and lowballed claims",
    body: `<div class="qa"><strong>Key finding</strong>In 351 recent Trustpilot reviews of Choice, American Home Shield, Select, First American and Home Warranty of America, the most common complaints were <strong>slow or unresolved repairs (52 reviews)</strong>, <strong>denied claims (47)</strong>, <strong>hard-to-reach customer service (42)</strong>, <strong>service fees paid with little or nothing repaired (24)</strong> and <strong>cash-out offers far below the cost of a replacement (20)</strong>. Reviews the companies prompted customers to write averaged <strong>4.4 stars</strong>; reviews without that label averaged <strong>1.4</strong>.</div>
<p>Most articles about home warranty denials are written from the contract out: here is the exclusion, here is what it means. We wanted to start from the other end - what actually happens to real customers right now - so on October 26, 2026 we captured the most recent reviews from the Trustpilot profiles of the five companies we track that have one, and read every review.</p>
<p>The result is a snapshot, not a census. It covers <strong>351 reviews</strong> posted between mid-September and late October 2026:</p>
<table>
<thead><tr><th>Company</th><th>Reviews analyzed</th><th>Window</th><th>Average in batch</th><th>1-2 star reviews</th><th>Overall Trustpilot profile (Oct 26, 2026)</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/choice-home-warranty">Choice Home Warranty</a></td><td>99</td><td>Oct 22-26</td><td>3.85</td><td>23</td><td>3.9 (63,234 reviews)</td></tr>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>60</td><td>Oct 20-26</td><td>3.62</td><td>20</td><td>3.5 (16,329 reviews)</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select Home Warranty</a></td><td>72</td><td>Sep 17-Oct 25</td><td>3.11</td><td>32</td><td>3.2 (6,413 reviews)</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>60</td><td>Oct 14-26</td><td>4.00</td><td>13</td><td>4.0 (19,350 reviews)</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>60</td><td>Sep 28-Oct 26</td><td>4.03</td><td>13</td><td>4.0 (3,403 reviews)</td></tr>
<tr><td><strong>Total</strong></td><td><strong>351</strong></td><td></td><td><strong>3.72</strong></td><td><strong>101</strong></td><td></td></tr>
</tbody>
</table>
<p>The Home Service Club and 2-10 Home Buyers Warranty don't have Trustpilot profiles, so they aren't in the study. The batch averages land close to each company's overall Trustpilot score, which suggests the snapshot is reasonably representative of what each profile shows.</p>
<p>For each review we tagged the themes it mentions - a single review can mention several (a long wait <em>and</em> a denial, for example). The tagging is our editorial judgment, and we publish the full theme breakdown for each company on its review page.</p>`,
  },
  {
    heading: "The five complaints that dominate: waits, denials, service, fees and cash-outs",
    body: `<p>Across all five companies, the same handful of problems account for nearly every negative review. Here is how often each came up in each company's batch (counts are reviews, not percentages; batch sizes differ):</p>
<table>
<thead><tr><th>Complaint theme</th><th>Choice (99)</th><th>AHS (60)</th><th>Select (72)</th><th>First American (60)</th><th>HWA (60)</th><th>Total (351)</th></tr></thead>
<tbody>
<tr><td>Long wait or repair left unresolved</td><td>13</td><td>13</td><td>12</td><td>8</td><td>6</td><td><strong>52</strong></td></tr>
<tr><td>Claim denied (exclusion, pre-existing, "not covered")</td><td>12</td><td>6</td><td>19</td><td>3</td><td>7</td><td><strong>47</strong></td></tr>
<tr><td>Customer service hard to reach or unhelpful</td><td>7</td><td>10</td><td>12</td><td>7</td><td>6</td><td><strong>42</strong></td></tr>
<tr><td>Service fee paid, little or nothing repaired</td><td>4</td><td>6</td><td>9</td><td>2</td><td>3</td><td><strong>24</strong></td></tr>
<tr><td>Cash-out or replacement offer too low</td><td>4</td><td>3</td><td>7</td><td>4</td><td>2</td><td><strong>20</strong></td></tr>
</tbody>
</table>
<p>Three patterns stand out.</p>
<p><strong>1. Denials are a bigger share of the complaints at some companies than others.</strong> At Select, denials were the single most common theme - 19 of 72 reviews, more than a quarter of the batch - and reviewers described exclusions for faucets ("they don't cover faucets because they're a fixture"), a hot-water line classified as an "outside" pipe because the plumber had to cut into a ceiling to reach it, maintenance-record requirements before an AC repair, and a dryer repair refused because of an "improper previous repair" by Select's own assigned technician. At First American, by contrast, only 3 of 60 reviews described a denial; its complaints clustered around waits, repeat visits and settlement amounts.</p>
<p><strong>2. Waiting is the most universal complaint.</strong> Every company had reviewers describing days or weeks without a working appliance: 2.5 weeks for a washer technician at Choice, a service request with "no dispatch" after 10 days at AHS, "almost a month" for a dryer diagnosis at Select, eight days without air conditioning in Southeast Texas at First American, and six days without water after a well pump failed at HWA. Delays matter for denials too: several reviewers who got tired of waiting hired their own contractor - and then were refused reimbursement because the work wasn't authorized in advance.</p>
<p><strong>3. Money complaints are about the gap, not the fee.</strong> Very few reviewers complained about the service fee itself. What made them angry was paying the fee and then receiving a denial, a partial approval that left labor or "modifications" uncovered, or a cash offer that covered a fraction of a replacement.</p>`,
  },
  {
    heading: "The cash-out offers reviewers reported, in dollars",
    body: `<p>When a home warranty company decides an appliance isn't worth repairing, it usually offers either a replacement it sources itself or cash "in lieu" of replacement. Twenty reviews in our study complained that the cash amount was too low. Where reviewers gave figures, here they are (as reported by the reviewer; we couldn't verify individual claims):</p>
<table>
<thead><tr><th>Company</th><th>Item</th><th>Offer reported</th><th>Reviewer's replacement estimate</th></tr></thead>
<tbody>
<tr><td>Choice</td><td>Dishwasher</td><td>$272</td><td>"doesn't even come close" to a new one</td></tr>
<tr><td>Choice</td><td>Washer (motor failed)</td><td>$629 Lowe's gift card, up to 30 days to arrive</td><td>~$1,100 for a comparable washer</td></tr>
<tr><td>AHS</td><td>84-inch built-in refrigerator</td><td>~$2,900, based on a ~72-inch model</td><td>$9,000-$10,000 for a comparable built-in</td></tr>
<tr><td>Select</td><td>Dishwasher (pump)</td><td>$175 (after an $85 fee)</td><td>"a basic model" costs more</td></tr>
<tr><td>Select</td><td>Washer, 5 years old</td><td>$150, raised to $250 after complaints (unpaid four months later)</td><td>Repair estimate ~$450</td></tr>
<tr><td>Select</td><td>Dryer</td><td>$150 after showing a receipt</td><td>Not stated</td></tr>
<tr><td>Select</td><td>High-end cooktop, under 3 years old</td><td>$225</td><td>$400 repair already paid</td></tr>
<tr><td>Select</td><td>Garbage disposal</td><td>$75</td><td>$99 for the cheapest unit, $300-$450 installed</td></tr>
<tr><td>First American</td><td>Water heater</td><td>$546.26</td><td>$1,700 paid to replace it</td></tr>
<tr><td>First American</td><td>Refrigerator</td><td>$406</td><td>$1,799.10 plus tax at Lowe's</td></tr>
<tr><td>First American</td><td>Temporary window AC</td><td>Up to $150 reimbursement</td><td>"does not even cover" many suitable units</td></tr>
<tr><td>HWA</td><td>Top-load washer</td><td>$406 (stated as HWA's maximum for a top-load washer)</td><td>~$1,130 for a comparable washer</td></tr>
</tbody>
</table>
<p>Two things explain most of these gaps, and we cover both in detail below. First, most contracts say cash-in-lieu payments are based on <em>the company's</em> cost - what it would pay through its own suppliers or contractors - not the retail price you'd pay. Second, the replacement standard in most contracts is "similar features, capacity and efficiency," not the same brand, model or finish, and companies and customers often disagree about what counts as "similar." The AHS refrigerator dispute above is a textbook example: the reviewer quoted AHS's own contract language about "similar capacity, dimensions, capability, color, and finish," and AHS's public reply repeated that standard while noting that "replacement items may differ in brand or model."</p>
<p>A third factor is the type of item. The biggest gaps in our table involve built-in, high-end or specialty equipment (an 84-inch panel-ready refrigerator, a high-end cooktop) and situations where the customer had already paid for a repair or replacement out of pocket. Standard appliances bought at big-box prices tend to produce smaller disputes.</p>`,
  },
  {
    heading: "Why the star ratings don't tell the whole story",
    body: `<p>Trustpilot labels reviews that a company prompted a customer to write - "Invited" on some profiles, "Verified" on others. Companies typically send these invitations right after a completed service visit, when the customer has just had something fixed. That timing alone pulls the average up.</p>
<p>In our batches, the difference was dramatic:</p>
<table>
<thead><tr><th>Company</th><th>Label used</th><th>Labeled reviews</th><th>Average (labeled)</th><th>Average (unlabeled)</th></tr></thead>
<tbody>
<tr><td>Choice</td><td>Invited</td><td>87 of 99</td><td>4.2</td><td>1.3</td></tr>
<tr><td>American Home Shield</td><td>Verified</td><td>38 of 60</td><td>4.7</td><td>1.7</td></tr>
<tr><td>First American</td><td>Verified</td><td>49 of 60</td><td>4.7</td><td>1.0</td></tr>
<tr><td>Home Warranty of America</td><td>Invited</td><td>56 of 60</td><td>4.2</td><td>1.0</td></tr>
<tr><td>Select</td><td>None shown</td><td>-</td><td>-</td><td>-</td></tr>
</tbody>
</table>
<p>Across the four companies that use labels, the 230 labeled reviews averaged <strong>4.4 stars</strong> and the 49 unlabeled ones averaged <strong>1.4</strong>. At First American and HWA, every single unlabeled review in the batch was one star.</p>
<p>Select's profile showed no labels, but its batch had its own quirks: 26 of its 40 four- and five-star reviews described buying a policy or talking to a salesperson rather than a repair claim, 24 reviews were posted on a single day (September 25, 2026), all rated four or five stars, and two one-star reviewers said Select had offered them free months of coverage in exchange for a favorable review.</p>
<p>None of this means the positive reviews are fake. They're real customers whose claims went well - and plenty of claims do go well. It means a headline score blends two very different groups: people the company asked at a good moment, and people who went looking for a place to complain after a bad one. If you're trying to understand <em>denial risk</em>, the second group is more informative, and that's where this article focuses.</p>`,
  },
  {
    heading: "What happy customers said - and what it tells you about avoiding a denial",
    body: `<p>The positive reviews are useful too, because they show what a smooth claim looks like. The most common praise across all five companies was for the <strong>technician</strong> - on time, explained the problem, cleaned up - followed by <strong>speed</strong>: a contractor assigned the same day, a repair finished within two to seven days. A water-heater claim at AHS went from online submission to a call from a local plumber "within a couple of hours." An HVAC replacement at AHS cost one reviewer only the $125 service fee. At First American, one reviewer had a contractor out on Monday after reporting on Saturday.</p>
<p>Read side by side with the complaints, the positive reviews share a few features. They tend to involve:</p>
<ul>
<li><strong>A clear-cut mechanical failure</strong> of a listed item (a heating element, a garbage disposal, a water heater leaking from the tank) rather than a borderline case.</li>
<li><strong>A repair</strong> rather than a replacement - repairs rarely trigger the cash-out and "similar features" disputes.</li>
<li><strong>A contractor from the company's network</strong> who diagnosed, got authorization and finished the job.</li>
</ul>
<p>The complaints cluster at the opposite end: older equipment, systems that touch the edge of coverage (drains, fixtures, wiring, refrigerant, code issues), replacements, and claims where the network contractor was slow or unavailable. Knowing where your claim falls on that spectrum - and preparing accordingly - is most of what this guide is about.</p>`,
  },
];
