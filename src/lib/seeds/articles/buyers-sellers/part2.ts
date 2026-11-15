import type { ArticleSection } from "@/lib/config";

// Part 2: seller (listing) coverage compared, the buyer's playbook, the
// inspection-warranty interplay, and real estate plans by company. Sources:
// AHS real estate page, FAQ and 2024 brochure, AHS Texas price sheets
// (undated); First American Florida contract (FL-UD-UE), 2025 brochure and
// HVAC-limits page; 2-10 broker page; Choice realty brochure; HWA agent
// brochure (2022) and site; Old Republic / CRES brochures (2019-2024); Cinch
// real estate FAQ; ASHI/InterNACHI standards of practice (as adopted/cited).
export const part2: ArticleSection[] = [
  {
    heading: "Seller (listing) coverage, compared",
    body: `<p>Listing coverage - also called seller coverage - protects the seller's home systems while the home is on the market. It's usually tied to a buyer's plan being ordered at closing, and it's narrower than the buyer's coverage. Here's how the companies' published terms compare:</p>
<table>
<thead><tr><th>Company</th><th>Length</th><th>Cost to seller</th><th>Limit</th><th>Heating and AC</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>6 months, renewable at AHS's discretion (AHS materials give a 12- or 18-month maximum)</td><td>Paid at closing; Texas sheets list a $75 seller option</td><td>$1,500 on current materials (older brochures: $2,000)</td><td>Included (same items as ShieldEssential)</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>Initial listing period, up to 180 days</td><td>$60 if the home doesn't close or the listing ends (Florida contract)</td><td>HVAC $1,500 during seller coverage, with a $1,000 ductwork sub-limit</td><td>Optional, at extra charge</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>Up to 180 days, until closing or cancellation</td><td>Complimentary where allowed by law; service fee applies</td><td>Not confirmed</td><td>Not confirmed for current plans</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>Initial listing period, up to 180 days</td><td>Only with a buyer plan; reported free during listing where allowed</td><td>Not confirmed</td><td>Optional; must be added within 24 hours of ordering</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Up to 6 months, extendable</td><td>Free basic listing coverage</td><td>Up to $1,500</td><td>Optional, about $50</td></tr>
<tr><td>Old Republic Home Protection</td><td>Up to 180 days, only with buyer coverage</td><td>$75, due at closing or when the listing ends</td><td>Varies by state</td><td>Optional in some states (excluded in Arizona's seller version unless added)</td></tr>
<tr><td>Cinch Home Services</td><td>Listing period</td><td>Free where permitted, if the buyer's plan is bought at closing</td><td>Not confirmed</td><td>Not confirmed</td></tr>
</tbody>
</table>
<p><em>Sources: company real estate pages, contracts and brochures (2019-2026). Seller terms are state-specific and change; Old Republic and Cinch aren't among the seven companies we rank but are major real estate-channel providers. Confirm terms for your state before listing.</em></p>
<h3>What sellers should know before ordering it</h3>
<ul>
<li><strong>Check whether heating and AC are included.</strong> At several companies they're an add-on, and HVAC is usually the system sellers most need protected during a winter or summer listing.</li>
<li><strong>Know what happens if the sale falls through.</strong> First American's Florida contract charges $60; Old Republic charges its $75 at closing or listing termination. Ask your company before ordering.</li>
<li><strong>Watch the limit.</strong> A $1,500 cap covers most repairs but not a system replacement.</li>
<li><strong>Pre-existing problems aren't covered</strong> - listing coverage won't pay to fix a furnace that was failing before you ordered it.</li>
<li><strong>Service fees still apply</strong> to each claim, even when the coverage itself is free.</li>
</ul>`,
  },
  {
    heading: "The buyer's playbook: accept, upgrade or choose your own",
    body: `<p>If you're buying, a seller-paid warranty is close to free protection during the year you know least about the house. But you have more control than many buyers realize.</p>
<h3>You choose the company</h3>
<p>Buyers can generally choose the home warranty company and coverage, even when the seller pays. Texas makes this explicit: its broker disclosure form (TREC RSC-4) states that buying a residential service contract is optional, that the buyer may choose the provider and coverage, and that neither the broker nor the seller may condition the sale on the buyer's purchase. Agents often have a preferred company - sometimes with a business relationship, as we explain below - so ask why they recommend it.</p>
<h3>Five questions to ask before closing</h3>
<ol>
<li><strong>Which company and which tier?</strong> A basic real estate plan may leave out air conditioning, laundry or the refrigerator.</li>
<li><strong>What are the limits on HVAC, water heater and appliances?</strong> These are the items most likely to fail in an older home.</li>
<li><strong>How are pre-existing conditions handled?</strong> Look for language covering problems that couldn't be detected by visual inspection or a simple mechanical test.</li>
<li><strong>What's the service fee?</strong> It's usually $75-$125 per claim, and you'll pay it, not the seller.</li>
<li><strong>What happens at renewal?</strong> Real estate plans typically renew at the company's then-current price - often noticeably more than the seller paid - so compare before renewing.</li>
</ol>
<h3>Upgrade with your own money if it's worth it</h3>
<p>If the seller agrees to pay up to a set amount, you can often pay the difference for a higher tier or add-ons such as a pool, well pump or second refrigerator. In an older home, upgrading from a basic plan to one that includes AC and higher limits is usually money well spent.</p>
<h3>Or ask for a credit instead</h3>
<p>If you'd rather choose your own direct-to-consumer plan later, or self-insure, you can ask for the equivalent amount as a closing-cost credit, subject to your lender's limits on seller contributions. Just remember that a plan bought directly after closing usually starts with a 30-day waiting period, while a real estate plan starts at closing.</p>`,
  },
  {
    heading: "The home inspection and the home warranty: how they work together",
    body: `<p>The inspection and the warranty answer different questions. The inspection asks, "What's wrong with this house right now that I can see?" The warranty asks, "Who pays when something wears out after I move in?" Understanding the overlap prevents the most common real estate warranty disappointment.</p>
<table>
<thead><tr><th></th><th>Home inspection</th><th>Home warranty</th></tr></thead>
<tbody>
<tr><td>Cost</td><td>About $300-$450</td><td>About $400-$850 for a year (real estate plan)</td></tr>
<tr><td>What it does</td><td>A visual, non-invasive review of readily accessible components</td><td>Pays to repair or replace covered items that fail from normal wear</td></tr>
<tr><td>What it can't do</td><td>Find concealed defects or predict when a working system will fail</td><td>Cover problems that existed before coverage, or known defects</td></tr>
<tr><td>When it matters</td><td>Before you commit, to negotiate repairs or credits</td><td>After closing, for the next 12 months</td></tr>
</tbody>
</table>
<p><em>Inspection scope per ASHI and InterNACHI standards of practice; cost per HomeAdvisor data (2026) and other cost guides.</em></p>
<h3>The double-edged inspection report</h3>
<p>Here's the part most guides miss: <strong>an inspection report can work against a future warranty claim.</strong> If the inspector notes that the AC is "near the end of its service life" or that the water heater shows corrosion, the warranty company may treat a later failure of that item as a known, pre-existing condition. At the same time, a report showing an item was working at closing is your best evidence when a company claims a failure was pre-existing.</p>
<p>The practical strategy follows from that:</p>
<ol>
<li><strong>Negotiate known problems separately.</strong> Anything the inspection flags should be repaired by the seller or covered by a credit before closing - don't count on the warranty for it.</li>
<li><strong>Keep the full report.</strong> It documents that unflagged items were working.</li>
<li><strong>Ask for the seller's service records,</strong> especially HVAC maintenance. Missing maintenance is a common denial reason, and the buyer inherits the history.</li>
<li><strong>Note inspection timing.</strong> Some providers want an inspection dated within about 60 days before coverage starts to apply their more generous pre-existing terms.</li>
</ol>`,
  },
  {
    heading: "Real estate plans by company",
    body: `<p>Real estate plan names, contents and prices vary by state more than consumer plans do. Here's what the companies publish:</p>
<table>
<thead><tr><th>Company</th><th>Real estate plans</th><th>Example price</th><th>Buyer coverage start</th><th>Notes</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/american-home-shield">American Home Shield</a></td><td>ShieldEssential (systems), ShieldPlus (systems + appliances), ShieldComplete (adds roof leak repair)</td><td>Texas price sheets: about $475 / $640 / $835 for a single-family home (undated; older sheets lower)</td><td>Closing day, no waiting period</td><td>Real estate pricing available up to 60 days after closing; covers "unknown, pre-existing" breakdowns per its 2024 Texas brochure</td></tr>
<tr><td><a href="/reviews/first-american">First American</a></td><td>State-specific names (e.g., Basic and Premier; a 2025 Tennessee brochure lists Basic, Eagle Premier and The Max)</td><td>Varies by state</td><td>Closing date; no waiting period if bought within 60 days of closing</td><td>100% refrigerant on real estate plans (confirmed in its Texas Basic real estate contract); some versions cover defects that couldn't reasonably have been detected</td></tr>
<tr><td><a href="/reviews/2-10-home-buyers-warranty">2-10</a></td><td>Systems and appliances real estate tiers</td><td>Varies by market</td><td>At closing; agents can enroll the buyer up to 30 days after closing</td><td>Service fees reported at $65, $85 or $100; published HVAC limits differ between sources</td></tr>
<tr><td><a href="/reviews/choice-home-warranty">Choice</a></td><td>Basic and Total through its realtor program</td><td>Not published</td><td>Sources conflict - confirm with Choice</td><td>Contracts transferable to the buyer</td></tr>
<tr><td><a href="/reviews/home-warranty-of-america">Home Warranty of America</a></td><td>Two bundled real estate packages plus add-ons</td><td>Not published</td><td>Confirm whether the consumer waiting period is waived</td><td>Promises protection against unknown pre-existing conditions; recommends an inspection</td></tr>
<tr><td><a href="/reviews/home-service-club">The Home Service Club</a></td><td>"RE-Pro" packages in 1-, 2- or 3-year terms</td><td>Not published</td><td>Not confirmed</td><td>Customizable add-ons</td></tr>
<tr><td><a href="/reviews/select-home-warranty">Select</a></td><td>Realtor portal for enrolling clients in its standard plans</td><td>Consumer pricing</td><td>Not confirmed</td><td>No separate real estate plan found</td></tr>
</tbody>
</table>
<p><em>Sources: company real estate pages, brochures and state contracts (2019-2026). Prices are examples from specific state sheets, not quotes. Old Republic Home Protection and Fidelity National Home Warranty - large real estate-channel providers sold heavily through title and escrow, especially in the West - aren't in our rankings; NerdWallet's 2026 data put Old Republic's annual prices at roughly $540-$1,080.</em></p>
<h3>The real estate channel is a big business</h3>
<p>Frontdoor, the parent of American Home Shield and 2-10, reported first-year real estate revenue of $141 million in 2025, up from $125 million, and said its real estate member count grew in the second half of 2025 for the first time in five years; by the third quarter of 2026 it had about 220,000 real estate members, up 5%. First American's home warranty segment reported about $415 million in direct premiums and escrow fees in 2025, and Fidelity National Financial reported about $151 million in home warranty revenue. Those numbers explain why companies invest heavily in agent relationships - which brings us to the rules on paying agents.</p>`,
  },
];
