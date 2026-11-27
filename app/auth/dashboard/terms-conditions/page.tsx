'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'
import { DashboardCollapsibleSection } from '@/app/components/ui/DashboardCollapsibleSection'

export default function TermsPage() {
  const { t } = useLocale()
  const content = t.legalPages.termsConditions

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#1e1b4b_0%,#3730a3_55%,#4338ca_100%)] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_10%,rgba(196,181,253,0.2),transparent_38%),linear-gradient(115deg,transparent_45%,rgba(251,191,36,0.07)_45%,transparent_72%)]" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-100/20 bg-white/10 px-4 py-2 uppercase text-violet-100 text-xs font-semibold tracking-wide leading-5">
                <span className="shrink-0 h-2 w-2 rounded-full bg-current" />
                {content.badge}
              </div>
              <h1 className="mt-6 text-white text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
                {content.titleStart} <span className="text-amber-200">{content.titleJoiner}</span> {content.titleEnd}
              </h1>
              <p className="mt-5 max-w-2xl text-violet-100 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {content.description}
              </p>
            </div>
            <div className="flex items-center gap-4 border-l border-violet-100/20 pl-4 text-sm text-violet-100">
              <span className="text-2xl font-light text-amber-200 tracking-normal">§</span>
              <span>
                {content.effectiveDateLabel}
                <strong className="mt-1 block font-semibold text-white tracking-normal">{content.effectiveDate}</strong>
              </span>
            </div>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 border-t border-slate-700 pt-5 text-xs uppercase text-violet-100/80 text-xs font-semibold tracking-wide leading-5">
            {content.headerTopics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </header>

      <div className="mx-auto grid grid-cols-1 max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:gap-12 lg:px-10 lg:py-16">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={content.navLabel} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 px-5 py-4">
              <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{content.contentsLabel}</p>
              <p className="mt-1 text-slate-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{content.contents}</p>
            </div>
            <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
              {content.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#terms-${index + 1}`}
                    className="flex gap-3 rounded-xl px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-[#eaf2e9] hover:text-[#075e4b]"
                  >
                    <span className="font-mono font-bold text-emerald-700/70 tracking-normal tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="rounded-xl border border-slate-200 bg-[#eaf2e9] p-5">
            <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{content.reminderTitle}</p>
            <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.reminder}
            </p>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{content.readLabel}</p>
            <p className="mt-3 max-w-4xl text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.intro}
            </p>
          </div>

          <div className="space-y-5">
            {content.sections.map((section, index) => (
              <DashboardCollapsibleSection
                key={section.heading}
                id={`terms-${index + 1}`}
                ariaLabel={section.heading}
                title={section.heading}
                titleClassName="text-slate-950"
                className={`scroll-mt-28 rounded-xl border border-slate-200 p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3730a3] text-sm font-bold text-white tracking-normal">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{section.content}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-2.5">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 px-3 py-3 text-sm leading-7 text-slate-700">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white tracking-normal">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DashboardCollapsibleSection>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5">
            <section className={`rounded-xl p-6 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-white to-[#f1f2f6]' : 'bg-gradient-to-br from-[#f1f2f6] to-white'}`}>
              <p className="uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">{content.keyPointsTitle}</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.responsibleTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {content.keyPoints.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section className={`rounded-xl border border-amber-200 p-6 ${content.sections.length % 2 === 0 ? 'bg-gradient-to-br from-[#f1f2f6] to-white' : 'bg-gradient-to-br from-white to-[#f1f2f6]'}`}>
              <p className="uppercase text-amber-800 text-xs font-semibold tracking-wide leading-5">{content.importantTitle}</p>
              <h2 className="mt-2 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{content.projectInfoTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {content.projectInfo.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>

          <p className="mt-7 rounded-xl border border-slate-200 bg-white p-5 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {content.questions}{' '}
            <Link href="/contact" className="font-bold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950 tracking-normal">
              {content.contactLink}
            </Link>{' '}
            {content.questionsEnd}
          </p>
        </article>
      </div>
    </main>
  )
}