import type { ArticleSection } from "@/lib/config";

// Part 4: the break-even math - repair/replacement costs (Angi, HomeAdvisor,
// HomeGuide, Fixr, This Old House, 2025-2026), lifespans (NAHB 2007 study as
// reproduced; InterNACHI; DOE/ENERGY STAR), scenarios and the age audit.
export const part4: ArticleSection[] = [
  {
    heading: "What repairs and replacements actually cost in 2026",
    body: `<p>The value of a home warranty is the gap between what you'd pay out of pocket and what you pay under the plan. Here's the out-of-pocket side, from 2025-2026 cost guides:</p>
<table>
<thead><tr><th>Repair or replacement</th><th>Typical cost (no warranty)</th><th>Typically covered by home warranties?</th></tr></thead>
<tbody>
<tr><td>Central AC replacement</td><td>~$6,000 average (typical $3,900-$8,100)</td><td>Yes, up to the HVAC cap (often $3,000-$5,000)</td></tr>
<tr><td>Heat pump replacement</td><td>~$4,200-$7,900</td><td>Usually, up to the HVAC cap</td></tr>
<tr><td>Furnace replacement</td><td>~$4,800 average (typical $2,800-$7,500)</td><td>Yes, up to the cap</td></tr>
<tr><td>Water heater replacement (tank)</td><td>~$600-$2,500 installed</td><td>Yes; some plans limit tank size or exclude tankless</td></tr>
<tr><td>Central AC repair</td><td>~$350-$375 average (compressor $1,000-$3,000)</td><td>Yes</td></tr>
<tr><td>Furnace repair</td><td>~$318 average</td><td>Yes</td></tr>
<tr><td>Refrigerator repair</td><td>~$250-$650 depending on source</td><td>Often only on combo plans or with an add-on</td></tr>
<tr><td>Washer repair</td><td>~$200-$220 average</td><td>Combo plans or add-on</td></tr>
<tr><td>Dishwasher repair</td><td>~$200 average</td><td>Usually</td></tr>
<tr><td>Dryer repair</td><td>~$180 average</td><td>Combo plans or add-on</td></tr>
<tr><td>Oven or range repair</td><td>~$200-$300 average</td><td>Usually</td></tr>
<tr><td>Garbage disposal replacement</td><td>~$200-$550 installed</td><td>Usually</td></tr>
<tr><td>Plumbing leak (accessible pipe)</td><td>~$250-$850</td><td>Usually; access limits apply to slabs and walls</td></tr>
<tr><td>Main sewer line clog</td><td>~$150-$500 to snake</td><td>Often, from an accessible cleanout</td></tr>
<tr><td>Electrical: breaker replacement</td><td>~$100-$260</td><td>Usually</td></tr>
<tr><td>Contractor service call / diagnostic fee</td><td>~$75-$200 (HVAC), $50-$200 (plumbing)</td><td>Replaced by the warranty's own service fee ($60-$150)</td></tr>
</tbody>
</table>
<p>Look at the shape of that table. Almost every <em>repair</em> costs less than a year of premiums. The items that make a home warranty pay off are the <strong>replacements of big systems</strong> - and those are exactly where caps, cash-outs, permits and modifications come into play.</p>`,
  },
  {
    heading: "How long your systems and appliances should last",
    body: `<p>Whether a big failure is likely in the next year or two depends on age. These are commonly cited life expectancies (actual life varies with use, climate and maintenance):</p>
<table>
<thead><tr><th>System or appliance</th><th>Typical life expectancy</th><th>Source</th></tr></thead>
<tbody>
<tr><td>Central air conditioner</td><td>10-15 years</td><td>NAHB / Bank of America study (2007)</td></tr>
<tr><td>Heat pump</td><td>~16 years</td><td>NAHB study; InterNACHI</td></tr>
<tr><td>Gas furnace</td><td>~18 years (electric ~15)</td><td>NAHB study</td></tr>
<tr><td>Tank water heater</td><td>~10-15 years</td><td>NAHB study; U.S. Department of Energy</td></tr>
<tr><td>Tankless water heater</td><td>Up to ~20 years</td><td>U.S. Department of Energy; ENERGY STAR</td></tr>
<tr><td>Refrigerator</td><td>~9-13 years</td><td>InterNACHI; NAHB study</td></tr>
<tr><td>Dishwasher</td><td>~9 years</td><td>InterNACHI; NAHB study</td></tr>
<tr><td>Clothes dryer</td><td>~13 years</td><td>InterNACHI; NAHB study</td></tr>
<tr><td>Gas range</td><td>~15-17 years</td><td>InterNACHI</td></tr>
</tbody>
</table>
<p>The practical takeaway: a home with an original 2010s AC, furnace and water heater is entering the window where several big replacements are likely within a few years of each other. A home where those were replaced recently is not.</p>`,
  },
  {
    heading: "When does a home warranty pay for itself? Five real-world scenarios",
    body: `<p>Here's a typical plan run through five realistic years. We assume <strong>$650 a year</strong> in premiums (about $54 a month, close to the $56 average monthly quote in This Old House's 2026 survey) and a <strong>$100 service fee</strong> per claim, and we use average costs from the table above.</p>
<table>
<thead><tr><th>Scenario (one year)</th><th>Out of pocket, no warranty</th><th>Cost with warranty</th><th>Result</th></tr></thead>
<tbody>
<tr><td>1. Nothing breaks</td><td>$0</td><td>$650</td><td><strong>-$650</strong></td></tr>
<tr><td>2. Two small repairs (dishwasher $200, dryer $180)</td><td>$380</td><td>$650 + $200 fees = $850</td><td><strong>-$470</strong></td></tr>
<tr><td>3. Water heater replaced (~$1,500)</td><td>$1,500</td><td>$650 + $100 = $750</td><td><strong>+$750</strong></td></tr>
<tr><td>4a. AC replaced (~$6,000), plan with $3,000 HVAC cap</td><td>$6,000</td><td>$650 + $100 + $3,000 over cap = $3,750</td><td><strong>+$2,250</strong></td></tr>
<tr><td>4b. AC replaced (~$6,000), plan with $5,000 HVAC cap</td><td>$6,000</td><td>$650 + $100 + $1,000 over cap = $1,750</td><td><strong>+$4,250</strong></td></tr>
<tr><td>5. Refrigerator dies; company offers cash at its cost ($406) toward a $1,800 model</td><td>$1,800</td><td>$650 + $100 + ($1,800 - $406) = $2,144</td><td><strong>-$344</strong></td></tr>
</tbody>
</table>
<p>Scenario 5 uses a cash-out amount a First American customer reported in our review study; outcomes like it are common enough to plan for. And scenarios 4a and 4b assume no uncovered permits, code updates or "modifications" - which on an AC replacement can add hundreds or thousands of dollars on plans that exclude them.</p>
<p>The pattern is consistent: <strong>small repairs lose money, replacements of big systems win - and how much you win depends on the cap and the fine print.</strong> In a single year, you come out ahead only if the plan pays for more than your premium plus fees, roughly $750 or more of covered work in this example.</p>
<p>Over several years, the math is about probability. Three quiet years at $650 cost you $1,950 - which one covered AC replacement under a $5,000 cap more than repays. If you're likely to replace a major system during the time you'd hold the plan, the numbers can work. If you aren't, they usually won't.</p>`,
  },
  {
    heading: "The 10-minute age audit: will a warranty likely pay off for your home?",
    body: `<p>This is the quickest way we've found to turn the averages into a decision about <em>your</em> house. It's a rule of thumb, not a guarantee - but it captures the factors that actually drive value.</p>
<h3>Step 1: List your big-ticket items and their ages</h3>
<p>Check the manufacture date on the data plate of your AC or heat pump, furnace and water heater (the serial number often encodes the year), and estimate the age of your refrigerator, washer, dryer, dishwasher and range.</p>
<h3>Step 2: Mark each one past 75% of its expected life</h3>
<p>Using the table above: an AC 10+ years old, a furnace 13+, a tank water heater 8+, a refrigerator 8+, a dishwasher 7+, and so on.</p>
<h3>Step 3: Score it</h3>
<table>
<thead><tr><th>Big systems (AC/heat pump, furnace, water heater) past 75% of life</th><th>Could you pay $5,000 today without debt?</th><th>Our read</th></tr></thead>
<tbody>
<tr><td>2 or 3</td><td>No</td><td><strong>Strong case for a warranty</strong> - choose a plan with high HVAC limits and permit/code coverage</td></tr>
<tr><td>2 or 3</td><td>Yes</td><td><strong>Optional</strong> - a warranty smooths costs, but self-insuring is reasonable</td></tr>
<tr><td>1</td><td>No</td><td><strong>Reasonable case</strong> - especially if that one system is your AC or heat pump</td></tr>
<tr><td>1</td><td>Yes</td><td><strong>Probably skip</strong> - start a repair fund instead</td></tr>
<tr><td>0</td><td>Either</td><td><strong>Skip</strong> - rely on manufacturer warranties and savings</td></tr>
</tbody>
</table>
<p>Then adjust: lean <em>toward</em> a warranty if you have several aging appliances too, if you live somewhere the AC is a necessity (Texas, Arizona, Florida - see our <a href="/articles/home-warranty-by-state">state guides</a>), or if you value having one number to call. Lean <em>away</em> if your appliances are high-end or built-in, if you have strong relationships with local contractors, or if you can't produce maintenance records for older systems.</p>`,
  },
];
