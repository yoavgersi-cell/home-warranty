import Link from "next/link";

const planRows: [string, string, string][] = [
  ["Systems plan", "Heating, air conditioning, ductwork, plumbing, electrical, water heater - the built-in systems that are the most expensive to repair", "Homeowners whose appliances are new or still under manufacturer warranty, but whose furnace, AC or water heater is getting older"],
  ["Appliances plan", "Refrigerator, oven/range, dishwasher, built-in microwave, clothes washer and dryer, garbage disposal", "Owners of newer homes with recent systems but older or heavily used kitchen and laundry appliances"],
  ["Combo (systems + appliances)", "Everything in both plans above, usually at a discount versus buying them separately", "Most buyers - especially in older homes, rentals or homes with several aging items at once"],
  ["Top-tier / premium plan", "Combo coverage plus higher caps and extras such as roof leak repair, code and permit upgrades, HVAC tune-ups or refrigerant", "Owners who want fewer surprise denials and are willing to pay more for higher limits"],
  ["Optional add-ons", "Pool and spa, well pump, septic, sump pump, second refrigerator, standalone freezer, guest units", "Homes that actually have these items - add-ons are only worth it for equipment you own"],
];

const compareRows: [string, string, string, string][] = [
  ["What it covers", "Repair or replacement of covered systems and appliances that fail from normal wear and tear", "Sudden, accidental damage to the structure and belongings - fire, storms, theft - plus liability", "They cover different risks, so many homeowners carry both"],
  ["How you pay", "Annual or monthly premium plus a service call fee (often $60-$150) each time a technician comes out", "Annual premium plus a deductible (often $500-$2,500+) per claim", "A warranty suits frequent small-to-mid repairs; insurance is for rare, expensive events"],
  ["Who does the work", "Usually a technician from the company's contractor network; some plans let you choose your own", "You generally choose your own contractor, paid through the claim", "Network-only plans can mean waits during peak season"],
  ["Required?", "Optional - often bought by sellers or buyers during a home sale", "Almost always required by mortgage lenders", "A warranty never replaces homeowners insurance"],
];

function PlanTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[600px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Plan type</th>
            <th className="px-4 py-3 font-bold text-[#191919]">What it usually covers</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Who it suits</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([k, a, b], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{k}</td>
              <td className="px-4 py-3 align-top text-gray-600">{a}</td>
              <td className="px-4 py-3 align-top text-gray-600">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CompareTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[640px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Factor</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Home warranty</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Homeowners insurance</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Why it matters</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([f, s, t, w], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{f}</td>
              <td className="px-4 py-3 align-top text-gray-600">{s}</td>
              <td className="px-4 py-3 align-top text-gray-600">{t}</td>
              <td className="px-4 py-3 align-top text-gray-600">{w}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EditorialContent({ midSlot }: { midSlot?: React.ReactNode }) {
  const link = "font-semibold text-[#C2570C] hover:underline";
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-6 pb-12 text-[16px] leading-[1.7] text-gray-800">
      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        The Best Home Warranty Companies, Compared
      </h2>
      <p className="mb-4">
        To find the best home warranty, we compare leading companies on the factors that actually
        decide whether a plan pays off when something breaks: what is covered, how much each item is
        capped at, the service call fee, the exclusions in the fine print, and how claims are handled.
        Not sure where to start? Read our{" "}
        <Link href="/articles/best-home-warranty-companies-compared" className={link}>
          guide to the best home warranty companies
        </Link>{" "}
        for the full breakdown.
      </p>
      <p className="mb-8">
        This page is a practical overview of what a home warranty is, how plans differ, what they
        cost, why claims get denied, and how to pick a company you can trust. Prefer to jump straight
        to the comparison? See our{" "}
        <Link href="/reviews" className={link}>
          in-depth company reviews
        </Link>{" "}
        or a head-to-head like{" "}
        <Link href="/american-home-shield-vs-choice-home-warranty" className={link}>
          American Home Shield vs Choice
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        What Is a Home Warranty?
      </h2>
      <p className="mb-4">
        A home warranty is a <strong>service contract</strong> that pays to repair or replace covered
        home systems and appliances when they break down from normal wear and tear. You pay a premium
        (monthly or yearly), and when something fails you file a claim, pay a set service call fee,
        and the company sends a technician.
      </p>
      <p className="mb-8">
        It is not insurance. Homeowners insurance covers sudden damage such as fire, storms or theft;
        a home warranty covers the slow, inevitable breakdown of things like your furnace, water
        heater or dishwasher. Home warranties are regulated state by state, and in many states the
        contract terms are the only protection you have - which is why the fine print matters so much.
        Learn more in{" "}
        <Link href="/articles/what-is-a-home-warranty" className={link}>
          what is a home warranty?
        </Link>
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        What Home Warranties Typically Cover
      </h2>
      <p className="mb-4">
        Every company words its contracts differently, but covered items usually fall into a few
        groups.
      </p>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Home systems</h3>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Heating and air conditioning, including ductwork</li>
        <li>Plumbing lines, stoppages and water heaters</li>
        <li>Electrical wiring and panels</li>
      </ul>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Appliances</h3>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Refrigerator, oven/range, cooktop and built-in microwave</li>
        <li>Dishwasher and garbage disposal</li>
        <li>Clothes washer and dryer</li>
      </ul>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Often excluded or extra</h3>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>Pre-existing problems and damage from lack of maintenance</li>
        <li>Code upgrades, permits and haul-away (unless the plan includes them)</li>
        <li>Pools, spas, well pumps, septic systems and roof leaks (usually add-ons)</li>
      </ul>

      <p className="mb-8 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[15px]">
        <strong>Worth knowing:</strong> The single biggest difference between companies is often the
        <strong> per-item coverage cap</strong>. A plan that caps an appliance at $500 can leave you
        paying most of a replacement, while another caps the same item at $2,000-$4,000. Always find
        the limits table in the sample contract before you buy. Learn more in{" "}
        <Link href="/articles/why-home-warranty-claims-get-denied" className={link}>
          why home warranty claims get denied
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Types of Home Warranty Plans, Compared
      </h2>
      <p className="mb-4">
        Most companies sell three or four tiers built from the same building blocks. Here is how the
        main plan types compare - plan names differ from company to company, but the structure is
        remarkably consistent.
      </p>
      <PlanTable rows={planRows} />
      <p className="mb-8 text-[13.5px] text-gray-500">
        This table is general information. Exactly what each plan covers is set by the company&apos;s
        contract for your state. See{" "}
        <Link href="/articles/how-much-does-a-home-warranty-cost" className={link}>
          how much a home warranty costs
        </Link>{" "}
        for typical prices by tier.
      </p>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Home Warranty vs Homeowners Insurance</h3>
      <p className="mb-4">
        They are often confused, but they protect against different things. Here is how they differ
        in practice.
      </p>
      <CompareTable rows={compareRows} />
      <p className="mb-8 text-[13.5px] text-gray-500">
        For a full breakdown see{" "}
        <Link href="/articles/home-warranty-vs-homeowners-insurance" className={link}>
          home warranty vs homeowners insurance
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        How Home Warranty Claims Work
      </h2>
      <p className="mb-4">
        The process follows the same backbone at almost every company:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>File a claim</strong> - online, in an app or by phone, ideally as soon as the item stops working.</li>
        <li><strong>Technician dispatch</strong> - the company assigns a contractor from its network (or, on some plans, approves one you choose).</li>
        <li><strong>Diagnosis and service fee</strong> - you pay the service call fee when the technician visits; at many companies it is owed even if the claim is denied.</li>
        <li><strong>Repair, replace or cash-out</strong> - covered items are repaired up to the cap, replaced when repair isn&apos;t practical, or the company may offer cash instead.</li>
      </ul>
      <p className="mb-4"><strong>What a trustworthy company looks like:</strong> a published sample contract, clear caps and exclusions, 24/7 claims, a workmanship guarantee on repairs, and a long public track record.</p>
      <p className="mb-8"><strong>Red flags to avoid:</strong> no sample contract before checkout, vague &ldquo;covers everything&rdquo; marketing, very low caps hidden in the fine print, pressure to buy multi-year plans upfront, and promotions whose conditions you can&apos;t find. See our{" "}
        <Link href="/articles/how-to-file-a-home-warranty-claim" className={link}>
          guide to filing a claim
        </Link>{" "}
        and our{" "}
        <Link href="/reviews" className={link}>
          company reviews
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        How to Choose a Home Warranty Company
      </h2>
      <p className="mb-3">
        Beyond price, five checks separate the best companies from the rest:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Coverage caps</strong> - per-item and per-contract limits, especially for HVAC and plumbing</li>
        <li><strong>Service call fee</strong> - what you pay per visit, and whether a higher fee lowers your premium</li>
        <li><strong>Exclusions</strong> - how the contract treats pre-existing issues, maintenance, code upgrades and permits</li>
        <li><strong>Claims experience</strong> - 24/7 filing, dispatch speed, contractor choice and workmanship guarantees</li>
        <li><strong>Reputation</strong> - Trustpilot and BBB records, complaint patterns and any regulatory actions</li>
      </ul>
      <p className="mb-8">
        Want to see how specific companies stack up? Read our reviews of{" "}
        <Link href="/reviews/choice-home-warranty" className={link}>Choice Home Warranty</Link>,{" "}
        <Link href="/reviews/american-home-shield" className={link}>American Home Shield</Link>,{" "}
        <Link href="/reviews/select-home-warranty" className={link}>Select Home Warranty</Link> and{" "}
        <Link href="/reviews/first-american" className={link}>First American</Link>, or compare them head to head in{" "}
        <Link href="/american-home-shield-vs-select-home-warranty" className={link}>American Home Shield vs Select</Link>{" "}
        and{" "}
        <Link href="/choice-home-warranty-vs-select-home-warranty" className={link}>Choice vs Select</Link>.
      </p>

      {/* Mid-content slot */}
      {midSlot && <div className="mb-8">{midSlot}</div>}

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        What Does a Home Warranty Cost?
      </h2>
      <p className="mb-4">
        Typical home warranty plans run roughly <strong>$300-$700 a year</strong>, with top tiers and
        add-ons costing more. Rather than chase the lowest advertised price, it helps to understand
        what actually drives the total:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Plan tier</strong> - systems-only and appliances-only plans cost less than combo or premium plans.</li>
        <li><strong>Service call fee</strong> - choosing a higher fee (for example $125 instead of $75) usually lowers your premium.</li>
        <li><strong>Location and home size</strong> - prices vary by state and ZIP code, and some companies charge more for larger homes.</li>
        <li><strong>Add-ons</strong> - pool, spa, well pump, septic and similar items each add to the monthly total.</li>
      </ul>
      <p className="mb-8">
        To compare fairly, look at the <strong>yearly premium plus the service fees you expect to
        pay</strong> - and the caps you&apos;d hit on a major repair - not just the headline monthly
        price. Our{" "}
        <Link href="/" className={link}>
          comparison of top companies
        </Link>{" "}
        is built to make that easier. Each company confirms availability for your address during checkout.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Is a Home Warranty Worth It?
      </h2>
      <p className="mb-4">
        It&apos;s the most-asked question - and the honest answer is &ldquo;it depends on your
        home.&rdquo; A warranty tends to pay off when you have <strong>several aging systems or
        appliances</strong>, limited savings for surprise repairs, or you are buying or selling a home
        and want predictable costs in the first year.
      </p>
      <p className="mb-8">
        It is less likely to pay off on a new or recently renovated home, if you are comfortable
        paying repairs from an emergency fund, or if the plan&apos;s caps are too low to cover the
        repairs you&apos;re actually worried about. Consumer surveys have found that a large share of
        warranty holders have had a claim denied or only partly paid, so the contract terms matter as
        much as the price. We break this down in{" "}
        <Link href="/articles/is-a-home-warranty-worth-it" className={link}>
          is a home warranty worth it?
        </Link>
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Getting the Most From Your Plan
      </h2>
      <p className="mb-4">
        A home warranty works best when you treat it as part of maintaining your home, not a
        substitute for it.
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Read the sample contract before you buy</strong> - especially the limits table and the exclusions section.</li>
        <li><strong>Keep maintenance records</strong> - furnace and AC service receipts, water heater flushes - since &ldquo;lack of maintenance&rdquo; is a common reason for denial.</li>
        <li><strong>Never pay for a repair before the claim is approved</strong> unless the company authorizes it, or you may not be reimbursed.</li>
        <li><strong>Note the 30-day waiting period</strong> - most plans don&apos;t cover failures in the first month after purchase (real-estate plans and renewals are often exempt).</li>
      </ul>
      <p className="mb-8">
        In short: choose a company with clear terms and solid caps, keep your paperwork, and file
        claims promptly.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Frequently Asked Questions
      </h2>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">What is the best home warranty company?</h3>
      <p className="mb-4">
        There is no single best company for every home. The right choice depends on what you need
        covered, how much you want to pay per visit and how high the caps need to be. Our rankings
        weigh coverage, price, claims experience and reputation - see the comparison at the top of
        this page.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Do home warranties cover pre-existing conditions?</h3>
      <p className="mb-4">
        Generally no. Most contracts exclude problems that existed before coverage began, and many
        exclude failures caused by missing maintenance. See{" "}
        <Link href="/articles/why-home-warranty-claims-get-denied" className={link}>
          why home warranty claims get denied
        </Link>{" "}
        for the most common reasons.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Can I choose my own contractor?</h3>
      <p className="mb-4">
        It depends on the company. Most dispatch a technician from their own network, and some allow
        you to use your own contractor - usually with approval first and reimbursement up to the
        plan&apos;s limits.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Should a seller buy a home warranty?</h3>
      <p className="mb-4">
        Many sellers do, because it can reassure buyers and some plans cover the home while it is
        listed. Read{" "}
        <Link href="/articles/home-warranty-for-home-buyers-and-sellers" className={link}>
          home warranties for buyers and sellers
        </Link>{" "}
        for the details.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Is a home warranty a scam?</h3>
      <p className="mb-8">
        No - but it is a contract with limits, and disappointment usually comes from not knowing them.
        Reputable companies publish their terms; the key is choosing a trustworthy one and reading
        the contract, which is exactly what our{" "}
        <Link href="/reviews" className={link}>
          independent reviews
        </Link>{" "}
        and{" "}
        <Link href="/articles" className={link}>
          home warranty guides
        </Link>{" "}
        are for.
      </p>

      <hr className="mb-8 border-gray-200" />

      <p className="text-[13.5px] leading-[1.6] text-gray-500">
        <strong>General information, not professional advice.</strong> This content is for
        educational purposes only and is not legal, insurance or financial advice. Home warranty
        coverage, prices, caps and exclusions vary by company, plan, state and ZIP code, and change
        over time. Your signed contract - not our summary - determines what is covered. Always read
        the full sample contract and confirm current terms with the company before you buy.
      </p>
    </div>
  );
}
