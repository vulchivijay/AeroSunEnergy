import { Download, Sun, Wind, Zap } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p
        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 uppercase before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] ${inverse ? "border-amber-300/20 bg-white/[0.08] text-amber-200" : " border-slate-200 bg-white/75 text-teal-800 "} text-xs font-semibold tracking-wide leading-5`}
      >
        {number} / {eyebrow}
      </p>
      <h2
        className={`mt-4 ${inverse ? "text-white" : "text-[#152b29]"} text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 ${inverse ? "text-indigo-100/90" : " text-slate-600 "} text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function CompanyProfileHeroSections({ t }: { t: Translations }) {
  const cp = t.about.companyProfile;
  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-[#152b29]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(217,119,6,0.1),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(251,191,36,0.12),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
            <span
              className="shrink-0 h-2 w-2 rounded-full bg-current"
              aria-hidden="true"
            />
            {cp.badge}
          </p>
          <h1 className="mt-6 max-w-4xl text-[#137c63] text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
            {cp.title}
            <span className="mt-2 text-[#152b29]"> {cp.subtitle} </span>
          </h1>
          <p className="mt-5 uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">
            {cp.motto}
          </p>
          <p className="mt-6 max-w-3xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {cp.intro}
          </p>
          <a
            href="/company-profile.pdf"
            download="company-profile.pdf"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61] tracking-normal"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {cp.downloadLabel}
          </a>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white/85 p-5">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
                {cp.officeLabel}
              </p>
              <p className="mt-2 text-[#152b29] text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {cp.officeText}
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/85 p-5">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
                {cp.cinLabel}
              </p>
              <p className="mt-2 font-mono text-[#137c63] tabular-nums text-xs font-semibold tracking-wide leading-5">
                U35106AP2026PTC128748
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/85 p-5 sm:col-span-2 lg:col-span-1">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
                {cp.focusLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold text-[#152b29] tracking-normal">
                {cp.focusTags?.map((tag: string, idx: number) => (
                  <span key={tag} className="inline-flex items-center gap-1.5">
                    {idx === 0 && (
                    <Sun
                      className="h-4 w-4 text-[#137c63]"
                      aria-hidden="true"
                    />
                          )}
                    {idx === 1 && (
                    <Wind
                      className="h-4 w-4 text-[#137c63]"
                      aria-hidden="true"
                    />
                          )}
                    {idx === 2 && (
                    <Zap
                      className="h-4 w-4 text-[#137c63]"
                      aria-hidden="true"
                    />
                          )}
                    {tag}
                  </span>
                      ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="01"
            eyebrow={cp.section1Eyebrow}
            title={cp.section1Title}
            description={cp.section1Description}
          />
        </div>
      </section>
    </>
  )
}
