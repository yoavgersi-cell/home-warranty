import { ThumbsUp, ThumbsDown } from "lucide-react";
import type { CustomerVoice as CustomerVoiceData, CustomerVoiceTheme } from "@/lib/config";

// Sentence-form answers built from a captured review batch. Shared by the
// visible block and the review page's FAQ (so FAQPage text matches the page).
export function customerVoiceFaqs(name: string, v: CustomerVoiceData) {
  const top = (list: CustomerVoiceTheme[], n: number) =>
    [...list].sort((a, b) => b.count - a.count).slice(0, n);
  const list = (items: CustomerVoiceTheme[]) =>
    items.map((t) => `${t.theme.toLowerCase()} (${t.count} of ${v.sampleSize})`).join("; ");
  const faqs = [
    {
      question: `What do ${name} customers complain about?`,
      answer: `In ${v.sampleSize} recent ${v.source} reviews of ${name} (${v.window}), the most common complaints were ${list(top(v.complaints, 4))}.`,
    },
    {
      question: `What do ${name} customers like?`,
      answer: `In the same ${v.sampleSize} ${v.source} reviews, customers most often praised ${list(top(v.praise, 3))}.`,
    },
  ];
  if (v.labelName) {
    faqs.push({
      question: `Are ${name}'s ${v.source} reviews reliable?`,
      answer: `Read them with care. ${v.labeledCount} of the ${v.sampleSize} recent reviews we analyzed carried ${v.source}'s "${v.labelName}" label, which usually means the company prompted the customer to review. Those averaged ${v.labeledAverage} stars, while reviews without the label averaged ${v.unlabeledAverage}. Both groups are real customers; they just describe different experiences.`,
    });
  } else if (v.notes?.length) {
    faqs.push({
      question: `Are ${name}'s ${v.source} reviews reliable?`,
      answer: `Read them with care. In the ${v.sampleSize} recent reviews we analyzed: ${v.notes.join(" ")}`,
    });
  }
  return faqs;
}

function ThemeList({
  items,
  sample,
  tone,
}: {
  items: CustomerVoiceTheme[];
  sample: number;
  tone: "good" | "bad";
}) {
  const sorted = [...items].sort((a, b) => b.count - a.count);
  const bar = tone === "good" ? "bg-emerald-500" : "bg-[#DE7429]";
  return (
    <ul className="space-y-3.5">
      {sorted.map((t) => (
        <li key={t.theme}>
          <div className="mb-1 flex items-baseline justify-between gap-3">
            <span className="text-[14px] font-semibold text-[#191919]">{t.theme}</span>
            <span className="shrink-0 text-[12.5px] font-semibold text-gray-600">
              {t.count} of {sample}
            </span>
          </div>
          <div className="mb-1 h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div className={`h-full rounded-full ${bar}`} style={{ width: `${(t.count / sample) * 100}%` }} />
          </div>
          <p className="text-[12.5px] leading-[1.5] text-gray-600">{t.detail}</p>
        </li>
      ))}
    </ul>
  );
}

export function CustomerVoice({
  providerName,
  voice,
  compact = false,
}: {
  providerName: string;
  voice: CustomerVoiceData;
  compact?: boolean;
}) {
  const v = voice;
  const labeledPct = v.labeledCount !== undefined ? Math.round((v.labeledCount / v.sampleSize) * 100) : null;
  const praise = compact ? [...v.praise].sort((a, b) => b.count - a.count).slice(0, 3) : v.praise;
  const complaints = compact ? [...v.complaints].sort((a, b) => b.count - a.count).slice(0, 3) : v.complaints;
  const Heading = compact ? "h4" : "h2";

  return (
    <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 sm:p-7" aria-label={`What ${providerName} customers say`}>
      <Heading className={`${compact ? "text-[17px]" : "text-[20px]"} mb-1 font-bold text-[#191919]`}>
        What {providerName} customers praise and complain about
      </Heading>
      <p className="mb-5 text-[13px] text-gray-600">
        Our tally of {v.sampleSize} recent {v.source} reviews ({v.window}, captured {v.capturedOn}).
        One review can mention several themes.
      </p>

      {!compact && (
        <div className="mb-6 grid gap-4 sm:grid-cols-[1.1fr_1fr]">
          {/* Star mix in this batch */}
          <div className="rounded-xl bg-[#FFFAF5] p-4">
            <p className="mb-2.5 text-[13px] font-bold text-[#191919]">
              Star mix in this batch <span className="font-medium text-gray-500">(avg {v.sampleAverage.toFixed(1)})</span>
            </p>
            <div className="space-y-1.5">
              {([5, 4, 3, 2, 1] as const).map((s) => {
                const n = v.distribution[s];
                return (
                  <div key={s} className="flex items-center gap-2 text-[12.5px] text-gray-700">
                    <span className="w-9 shrink-0">{s} star</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#FDE1CB]/60">
                      <div className="h-full rounded-full bg-[#F08A3C]" style={{ width: `${(n / v.sampleSize) * 100}%` }} />
                    </div>
                    <span className="w-6 shrink-0 text-right tabular-nums">{n}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Invited vs organic split */}
          <div className="rounded-xl bg-[#FFFAF5] p-4 text-[13px] leading-[1.55] text-gray-700">
            <p className="mb-2 font-bold text-[#191919]">Read the stars in context</p>
            {labeledPct !== null && v.labeledAverage !== undefined && v.unlabeledAverage !== undefined && (
              <p>
                <strong>{labeledPct}%</strong> of these reviews carried {v.source}&rsquo;s &ldquo;{v.labelName}&rdquo; label
                (usually prompted by the company) and averaged <strong>{v.labeledAverage.toFixed(1)}&#9733;</strong>.
                Reviews without it averaged <strong>{v.unlabeledAverage.toFixed(1)}&#9733;</strong>.
              </p>
            )}
            {v.notes?.map((n) => (
              <p key={n} className="mt-2 first:mt-0">{n}</p>
            ))}
            {v.companyReplies !== undefined && (
              <p className="mt-2">
                {providerName} posted a public reply on <strong>{v.companyReplies} of {v.sampleSize}</strong> reviews.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="mb-3 flex items-center gap-2 text-[14px] font-bold text-emerald-800">
            <ThumbsUp className="h-4 w-4" strokeWidth={2.25} /> Most praised
          </p>
          <ThemeList items={praise} sample={v.sampleSize} tone="good" />
        </div>
        <div>
          <p className="mb-3 flex items-center gap-2 text-[14px] font-bold text-[#9A4309]">
            <ThumbsDown className="h-4 w-4" strokeWidth={2.25} /> Most common complaints
          </p>
          <ThemeList items={complaints} sample={v.sampleSize} tone="bad" />
        </div>
      </div>

      {compact && v.labelName && v.labeledAverage !== undefined && v.unlabeledAverage !== undefined && (
        <p className="mt-4 text-[12.5px] text-gray-500">
          {v.labeledCount} of {v.sampleSize} carried the &ldquo;{v.labelName}&rdquo; label (avg {v.labeledAverage.toFixed(1)}&#9733;);
          the rest averaged {v.unlabeledAverage.toFixed(1)}&#9733;.
        </p>
      )}
      {compact && !v.labelName && v.notes?.[0] && (
        <p className="mt-4 text-[12.5px] text-gray-500">{v.notes[0]}</p>
      )}
    </section>
  );
}
