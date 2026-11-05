import type { ArticleSection } from "@/lib/config";

// Part 4: coverage details that decide claims, consumer rights (Magnuson-Moss
// tie-in ban, FTC actions) and state right-to-repair laws covering appliances.
export const part4: ArticleSection[] = [
  {
    heading: "What appliance protection covers - and the fine print that decides claims",
    body: `<p>Whatever you buy, these are the terms that determine whether a claim gets paid:</p>
<table>
<thead><tr><th>Term</th><th>Why it matters</th><th>What to look for</th></tr></thead>
<tbody>
<tr><td>Wear and tear</td><td>Most appliances fail gradually</td><td>Home warranties and most extended warranties cover it; equipment breakdown endorsements don't</td></tr>
<tr><td>Pre-existing problems</td><td>Problems that exist before coverage starts are commonly excluded</td><td>Store plans exclude pre-existing issues; home warranties often exclude them unless "unknown or undetectable"</td></tr>
<tr><td>Waiting period</td><td>Coverage may not start right away</td><td>Home warranties typically 30 days on new plans</td></tr>
<tr><td>Per-appliance limit</td><td>Caps what's paid toward one appliance</td><td>Compare it with the appliance's replacement cost</td></tr>
<tr><td>Cash in lieu</td><td>How a replacement is paid if not repaired</td><td>Company cost vs. retail; can you choose a replacement instead?</td></tr>
<tr><td>Food spoilage</td><td>A failed refrigerator can ruin hundreds of dollars of food</td><td>Lowe's and Whirlpool-family plans list $250; LG Premium Care up to $300; Nationwide's endorsement $3,000</td></tr>
<tr><td>Power surges</td><td>Electronic controls are vulnerable</td><td>Some plans cover surges (e.g., LG Premium Care); many home warranties exclude them</td></tr>
<tr><td>Components and accessories</td><td>Ice makers, control boards, racks, knobs, glass and cosmetic parts</td><td>Check whether ice makers and dispensers are covered - they're the most common refrigerator failure</td></tr>
<tr><td>Who repairs it</td><td>Affects speed, parts quality and brand coverage</td><td>Authorized servicers vs. a warranty network; ask about wait times</td></tr>
<tr><td>Transferability and cancellation</td><td>If you sell the home or the appliance</td><td>Many plans transfer; check refund terms</td></tr>
</tbody>
</table>
<p>Downtime is a real cost too. An Allstate survey reported that homeowners went an average of almost 11 days without a working appliance after a breakdown - so the speed of a plan's repair network matters as much as its limits.</p>`,
  },
  {
    heading: "Your rights: warranties, independent repair and parts",
    body: `<h3>Using independent repair won't automatically void your warranty</h3>
<p>Under the federal Magnuson-Moss Warranty Act, a manufacturer generally can't make your warranty conditional on using its own branded parts or service unless it provides them free or the FTC grants a waiver. Using an independent technician or third-party parts can't, by itself, void the warranty - although damage caused by those parts or that work can be excluded. The FTC has enforced this: in 2022 it finalized orders against Harley-Davidson, Weber and the maker of Westinghouse outdoor power equipment over warranty restrictions, and in July 2024 it sent warning letters to several companies, including air purifier and treadmill sellers, about warranty terms that undermined repair rights.</p>
<h3>Right-to-repair laws now cover appliances in several states</h3>
<table>
<thead><tr><th>State</th><th>Law</th><th>Covers home appliances?</th><th>Key detail</th></tr></thead>
<tbody>
<tr><td>California</td><td>SB 244 (effective July 1, 2024)</td><td>Yes</td><td>Makers must offer parts, tools and documentation for 3 years (products with a wholesale price of $50-$99.99) or 7 years ($100 or more) after a model was last made</td></tr>
<tr><td>Minnesota</td><td>Digital Fair Repair Act</td><td>Yes, per reported scope</td><td>Applies to products sold after July 1, 2021</td></tr>
<tr><td>Oregon</td><td>SB 1596 (2024)</td><td>Yes (HVAC excluded)</td><td>First law to ban "parts pairing"</td></tr>
<tr><td>Colorado</td><td>HB24-1121 (effective January 1, 2026)</td><td>Reported to include household appliances</td><td>Digital electronic equipment</td></tr>
<tr><td>Connecticut</td><td>SB 3 (2025)</td><td>Yes</td><td>Covers most home electronics and appliances</td></tr>
<tr><td>Washington</td><td>HB 1483 (effective January 1, 2026)</td><td>Yes</td><td>Consumer electronics and appliances</td></tr>
<tr><td>New York</td><td>Digital Fair Repair Act</td><td>No</td><td>Home appliances are excluded</td></tr>
<tr><td>Texas</td><td>HB 2963 (effective September 1, 2026)</td><td>No</td><td>Covers electronics, not appliances</td></tr>
</tbody>
</table>
<p>Why this matters for protection decisions: better access to parts and repair information can make out-of-warranty repairs cheaper and faster - which slightly weakens the case for paying for protection on a single appliance, especially in states with strong laws.</p>`,
  },
];
