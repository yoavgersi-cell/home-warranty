import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Top Home Warranty editorial team - corrections, feedback, provider and partnership inquiries for thetophomewarranty.com.",
  alternates: { canonical: "https://www.thetophomewarranty.com/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-3xl font-bold text-[#191919]">Contact Us</h1>
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>
          We&apos;re an independent editorial team that researches and compares home
          warranty companies. We&apos;d love to hear from you - whether you have
          feedback, spotted something that needs correcting, or want to reach us about a partnership.
        </p>

        <div className="my-6 flex items-center gap-3 rounded-xl border border-[#EAEAEA] bg-white p-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F08A3C]/8">
            <Mail className="h-5 w-5 text-[#C2570C]" strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#191919]">Email us</p>
            <a href="mailto:hello@thetophomewarranty.com" className="text-[15px] font-semibold text-[#C2570C] hover:underline">
              hello@thetophomewarranty.com
            </a>
          </div>
        </div>

        <h2 className="pt-2 text-xl font-semibold text-[#191919]">What we can help with</h2>
        <ul className="ml-5 list-disc space-y-1">
          <li><strong>Corrections &amp; feedback</strong> - see something inaccurate or out of date? Let us know and we&apos;ll review it.</li>
          <li><strong>Editorial questions</strong> - how we research, score, and rank providers (see our{" "}
            <Link href="/how-we-rank" className="font-semibold text-[#C2570C] hover:underline">methodology</Link>).</li>
          <li><strong>Provider &amp; partnership inquiries</strong> - if you represent a provider and want to reach us.</li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold text-[#191919]">What we can&apos;t help with</h2>
        <p>
          We are <strong>not a home warranty company</strong> and cannot file, approve or escalate
          claims, change your contract, process cancellations or answer questions about a specific
          service request. For anything about your plan, please contact your home warranty company
          directly. This site is intended for adults aged 18 and older.
        </p>

        <p className="pt-2 text-sm text-gray-500">
          We aim to respond to messages within a few business days.
        </p>
      </div>
    </div>
  );
}
