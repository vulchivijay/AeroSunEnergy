'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

export default function KnowEligibilityPage() {
  const { t } = useLocale()
  const page = t.knowEligibilityPage
  const labels = page.labels

  return (
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-emerald-100/10">
          <div className="absolute inset-10 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-20 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-32 rounded-full border border-emerald-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
              {labels.badge}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
              {labels.heroTitle}
              <span className="mt-1 block text-emerald-300">{labels.heroTitleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-sm sm:leading-8">
              {labels.heroDescription}
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">₹</span>
            <span className="text-xs leading-5 text-slate-300">
              {labels.subsidySnapshot}
              <strong className="block text-md font-bold text-white">{labels.subsidyAmount}</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-emerald-100/60 sm:px-8 lg:px-10">
            {labels.quickLinks.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <section id="eligibility-requirements" className="scroll-mt-28 mb-8 rounded-3xl border border-emerald-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">i</span>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">{labels.glanceTitle}</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-sm">
                  {labels.glanceDescription}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {labels.glanceItems.map((item, index) => (
                <div key={item.label} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-xs font-bold text-emerald-700">0{index + 1}</span>
                  <span className="text-xs leading-5 text-slate-600">
                    <strong className="block text-md text-slate-900">{item.label}</strong>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <h2 className="mt-7 text-lg font-extrabold tracking-tight text-slate-950">{labels.checkEligibility}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {page.eligibilityChecks.map((item, index) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-700">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-md font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-md leading-6 text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-4">
            <section id="subsidy-overview" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">01</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{labels.subsidyTitle}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600 sm:text-sm">{labels.subsidyDescription}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {page.subsidyBreakdown.map((item) => (
                      <div key={item.title} className="rounded-xl bg-[#f4f8fc] p-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.16em] text-emerald-800">{item.title}</p>
                        <p className="mt-2 text-xl font-black text-slate-950">{item.value}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="scheme-categories" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">02</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{labels.schemeCategoriesTitle}</h2>
                  <div className="mt-4 grid gap-3">
                    {page.schemeOverviewCards.map((card) => (
                      <div key={card.title} className="rounded-xl bg-[#f4f8fc] p-4">
                        <h3 className="text-md font-bold text-slate-900">{card.title}</h3>
                        <p className="mt-2 text-md leading-6 text-slate-600">{card.detail}</p>
                      </div>
                    ))}
                  </div>
                  <h3 className="mt-6 text-md font-bold text-slate-900">{labels.pmKusumTitle}</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {page.pmKusumComponents.map((item, index) => (
                      <div key={item.title} className="rounded-xl border border-sky-100 bg-sky-50/70 p-4">
                        <span className="font-mono text-xs font-bold text-sky-800">0{index + 1}</span>
                        <h4 className="mt-2 text-md font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-2 text-xs leading-6 text-slate-600">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="application-process" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">03</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{labels.processTitle}</h2>
                  <ol className="mt-4 space-y-3">
                    {page.processSteps.map((step, index) => (
                      <li key={step} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-mono text-[12px] font-bold text-emerald-800">{index + 1}</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="verification-and-exclusions" className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800">04</span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{labels.verifyTitle}</h2>
                  <ul className="mt-4 space-y-3">
                    {[...page.importantNotes, ...page.schemeEligibilityNotes].map((note) => (
                      <li key={note} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                  <h3 className="mt-6 text-md font-bold text-slate-900">{labels.rejectionReasonsTitle}</h3>
                  <ul className="mt-3 space-y-2.5">
                    {page.commonRejectionReasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>
          </div>

          <p className="mt-7 rounded-2xl border border-emerald-200/80 bg-white p-5 text-md leading-7 text-slate-600">
            {labels.contactPrompt}{' '}
            <Link href="/contact" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">{labels.contactLink}</Link>
            {' '}{labels.or}{' '}<Link href="/solarenergy" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">{labels.solutionsLink}</Link>.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={labels.sectionsLabel} className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">{labels.findTopic}</p>
              <p className="mt-1 text-md font-bold text-slate-900">{labels.guideTitle}</p>
            </div>
            <ol className="space-y-1 p-3">
              {[
                ['eligibility-requirements', labels.checkEligibility],
                ['subsidy-overview', labels.subsidyTitle],
                ['scheme-categories', labels.schemeCategoriesTitle],
                ['application-process', labels.processTitle],
                ['verification-and-exclusions', labels.verifyTitle],
              ].map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900">
                    <span className="font-mono font-bold text-emerald-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-300">{labels.important}</p>
            <p className="mt-3 text-md leading-6 text-slate-200">{labels.importantDescription}</p>
            <a href="https://pmsuryaghar.gov.in/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-md font-bold text-emerald-300 underline decoration-emerald-300/50 underline-offset-4 hover:text-white">{labels.portalLink}</a>
          </section>
        </aside>
      </div>
    </main>
  )
}
