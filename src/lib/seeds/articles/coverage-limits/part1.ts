import type { ArticleSection } from "@/lib/config";

// Part 1: quick answer, why limits decide payouts, the four kinds of limits,
// and the claim data. Sources: This Old House 2026 home warranty survey
// (January 2026, 2,000 customers); TOH February 2024 survey; InvestigateTV
// (July 28, 2025); company plan pages and sample agreements as listed in the
// sources section. Researched November 2026.
export const part1: ArticleSection[] = [
  {
    heading: "What are home warranty coverage limits?",
    body: `<div class="qa"><strong>Quick answer</strong>A coverage limit is the most a home warranty company will pay for a covered repair or replacement. Most plans have three layers: a per-item limit (commonly $2,000-$5,000 for HVAC and $500-$7,000 per appliance), smaller sub-limits inside items (refrigerant, code upgrades, access, haul-away), and sometimes an annual total cap ($6,000 to $50,000, or none). Among the seven companies we track, First American has the highest limits (no dollar cap on conventional HVAC, $3,500-$7,000 per appliance) where it's sold; American Home Shield and 2-10 cap HVAC at $5,000; Choice pays up to $3,000 per covered item; and Select's caps of about $500 per appliance are the lowest. Anything above the limit is yours to pay.</div>
<p>Most home warranty comparisons lead with the monthly price. That's the wrong number to start with. Two plans that both "cover your air conditioner" can leave you with very different bills when the AC actually fails, because one pays up to $5,000 for the job and the other pays $2,000 - and the replacement costs $8,000. The limit, not the price or the list of covered items, decides what a claim is worth.</p>
<p>This guide explains every kind of limit you'll find in a home warranty contract, compares the published limits of the seven companies we track item by item, sets those limits against what repairs and replacements actually cost in 2026, and shows how to find - and use - the limits in a contract before you buy. Where companies' own documents conflict, or where reviewers report different numbers, we say so and tell you which source we trust more. New to home warranties? Start with <a href="/articles/what-is-a-home-warranty">what a home warranty is</a>, then come back.</p>`,
  },
  {
    heading: "Why limits matter more than the monthly price",
    body: `<p>A home warranty is a bet on two numbers: what you pay the company in a year, and what the company pays out when something breaks. The second number is controlled almost entirely by limits. Three pieces of evidence show how often they come into play.</p>
<table>
<thead><tr><th>Finding</th><th>Figure</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Share of most-recent claims approved</td><td>About 90% (about 4% denied, 6% pending)</td><td>This Old House survey, January 2026</td></tr>
<tr><td>Denials because the repair cost more than the coverage limit</td><td>About 20% of denials</td><td>This Old House survey, January 2026</td></tr>
<tr><td>Denials for pre-existing conditions / items not covered</td><td>About 29% each</td><td>This Old House survey, January 2026</td></tr>
<tr><td>Typical central AC replacement</td><td>About $6,000 on average; most pay $3,900-$8,100</td><td>Angi, 2026 data</td></tr>
<tr><td>Typical HVAC cap at national companies</td><td>$2,000-$5,000 per system (First American: no dollar limit)</td><td>Company plan pages and sample agreements</td></tr>
</tbody>
</table>
<p><em>Note: other This Old House pages citing its 2025 survey put the "cost over the limit" share at 13% of denials. Either way, it's one of the three most common reasons a claim isn't fully paid.</em></p>
<p>That "denied" figure understates the problem, because a claim that hits a limit usually isn't denied at all. It's <em>approved</em> - and the company pays its maximum while you pay the rest. Those partial payouts don't show up in denial statistics, but they're the most common way homeowners end up disappointed. InvestigateTV's 2025 investigation into home warranty complaints found cases like an AC repair quoted at about $4,400 for which the company offered $560.55, and a check whose endorsement line said cashing it acknowledged the service request was fulfilled.</p>
<p>The practical lesson is simple: for the items that cost the most to replace - your HVAC system, water heater and refrigerator - the limit is worth more attention than a $5 or $10 difference in the monthly price.</p>`,
  },
  {
    heading: "The four kinds of home warranty limits",
    body: `<p>Contracts use different words - "covered item limit," "maximum benefit," "limit of liability," "aggregate" - but every limit falls into one of four types:</p>
<table>
<thead><tr><th>Type</th><th>What it caps</th><th>Typical range (7 companies we track)</th><th>Where to find it in the contract</th></tr></thead>
<tbody>
<tr><td><strong>Per-item limit</strong></td><td>The most paid for one covered item (one furnace, one refrigerator) per term</td><td>About $500 to $7,000; no dollar limit on some HVAC at First American</td><td>"Limits of liability" or the coverage table</td></tr>
<tr><td><strong>Category limit</strong></td><td>One cap shared by a group, such as "heating and cooling combined" or "all plumbing"</td><td>About $500 to $5,000</td><td>Coverage table or a line under each system</td></tr>
<tr><td><strong>Sub-limit</strong></td><td>A smaller cap inside a covered item: refrigerant, code and permits, access, crane, haul-away, tankless heaters, boilers</td><td>$10 per pound of refrigerant to about $1,500 for code work</td><td>Footnotes, "conditions" and "limitations" sections</td></tr>
<tr><td><strong>Aggregate (annual) limit</strong></td><td>Everything the company pays in the term, across all claims</td><td>About $6,000 (HSC Standard) to $50,000 (AHS, 2-10); none at First American</td><td>"Maximum aggregate" or "total benefit" clause</td></tr>
</tbody>
</table>
<h3>Per-item vs. category limits: a $3,000 example</h3>
<p>The difference between "per item" and "per category" sounds technical, but it can double or halve a payout. Under a $3,000 <em>per item</em> limit, a failed furnace and a failed AC in the same year can each be paid up to $3,000. Under a $3,000 <em>combined heating and cooling</em> limit, both repairs share one $3,000. Some reviewers describe Choice's $3,000 as applying to heating and cooling together; others describe it as per item. Read the limits clause in the agreement for your state before relying on either reading.</p>
<h3>Per term, per occurrence or per item - the time element</h3>
<p>Most limits reset each contract term (usually 12 months). A few sub-limits apply per occurrence, and some are lifetime limits on the contract. A limit "per term" means a second failure of the same item in the same year draws from whatever is left. It also matters for multi-unit homes: 2-10's sample agreement gives each unit its own covered-item limit, so a house with two AC systems gets two caps, but not every contract says that.</p>
<h3>Does the limit include labor?</h3>
<p>In most contracts, yes: the limit caps what the company pays in total - parts, labor and, usually, refrigerant - not just the part. That matters because labor is often half the bill or more on HVAC and plumbing jobs. A few contracts phrase limits around "parts and components," and 2-10's help center describes its limits that way. If a contract doesn't say clearly whether labor counts against the limit, ask the company in writing before you buy - this is one of the most common gaps we found in published materials.</p>`,
  },
];
