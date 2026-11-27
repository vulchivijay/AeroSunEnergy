import Link from 'next/link'
import type { Translations } from '@/lib/LocaleContext'

export function ResearchPageSections({ t }: { t: Translations }) {
  const research = t.about.companyProfile

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-[#152b29]">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.16),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.12),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">
            <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
            {research.innovationEyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-[#152b29] text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
            {t.navbar.dashboardPages.researchDevelopment}
          </h1>
          <h2 className="mt-4 max-w-3xl text-[#137c63] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
            {research.technologyDevelopmentTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {research.technologyDevelopmentDescription}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-teal-800 text-xs font-semibold tracking-wide leading-5">
            <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
            {research.innovationEyebrow}
          </p>
          <h2 className="mt-4 text-[#152b29] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {research.innovationTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {research.innovationDescription}
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {research.innovationFocus.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-xl border-l-4 border-amber-500 bg-white px-5 py-4 text-slate-600 shadow-sm text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {research.innovationNote}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 uppercase text-teal-800 text-xs font-semibold tracking-wide leading-5">
            <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />
            {research.technologyDevelopmentEyebrow}
          </p>
          <h2 className="mt-4 text-[#152b29] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {research.technologyDevelopmentTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {research.technologyDevelopmentDescription}
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {research.developmentSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="font-mono text-sm font-bold text-teal-700 tracking-normal tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {step}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-amber-950 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {research.waitNote}
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61] tracking-normal"
            >
              {t.contact.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
