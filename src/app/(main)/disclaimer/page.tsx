import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer & Affiliate Disclosure",
  description:
    "FTC disclosure, affiliate relationship details, coverage disclaimer, and revenue model transparency for thetophomewarranty.com.",
  alternates: {
    canonical: "https://www.thetophomewarranty.com/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-[#191919]">Disclaimer</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-[#191919]">
          FTC Disclosure
        </h2>
        <p>
          In accordance with the Federal Trade Commission guidelines, Top Home Warranty
          discloses that this website contains affiliate links. When you click
          on a link and make a purchase or sign up for a service, we may receive
          a commission at no additional cost to you.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Affiliate Relationships
        </h2>
        <p>
          Top Home Warranty participates in affiliate programs with various home warranty
          companies. This means we may earn
          referral fees when visitors click through our links and complete
          qualifying actions. These relationships help support the operation of
          this website.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Editorial Independence
        </h2>
        <p>
          Our affiliate relationships do not influence our rankings or reviews.
          Providers are evaluated based on objective criteria including coverage,
          contract terms, pricing transparency, claims experience, and customer feedback. We are committed to
          providing honest, independent assessments regardless of compensation.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Coverage Disclaimer
        </h2>
        <p>
          The content on Top Home Warranty is for general information purposes only and is not
          legal, insurance or financial advice. Home warranties are service contracts, not
          insurance policies, and what is covered depends on the exact contract you sign -
          including per-item caps, exclusions, waiting periods and service call fees. Prices and
          availability vary by state and ZIP code. Always read the full sample contract and confirm
          current terms with the company before you buy.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">
          Revenue Model
        </h2>
        <p>
          Top Home Warranty generates revenue primarily through affiliate commissions.
          When you use our links to visit a provider&apos;s website and take a
          qualifying action (such as scheduling a consultation or making a
          purchase), we may receive compensation. This model allows us to
          provide free, accessible comparisons to our visitors.
        </p>
      </div>
    </div>
  );
}
