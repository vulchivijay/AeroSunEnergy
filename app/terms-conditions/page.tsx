'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

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
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-100/20 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-violet-100">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                {content.badge}
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tighter text-white sm:text-6xl lg:text-7xl">
                {content.titleStart} <span className="text-amber-200">{content.titleJoiner}</span> {content.titleEnd}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-violet-100 sm:text-base sm:leading-8">
                {content.description}
              </p>
            </div>
            <div className="flex items-center gap-4 border-l border-violet-100/20 pl-4 text-sm text-violet-100">
              <span className="text-2xl font-light text-amber-200">§</span>
              <span>
                {content.effectiveDateLabel}
                <strong className="mt-1 block font-semibold text-white">{content.effectiveDate}</strong>
              </span>
            </div>
          </div>
          <div className="mt-10 grid max-w-3xl grid-cols-3 gap-3 border-t border-white/10 pt-5 text-[12px] font-bold uppercase tracking-[0.16em] text-violet-100/80 sm:text-sm">
            {content.headerTopics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12 lg:px-10">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={content.navLabel} className="overflow-hidden rounded-[22px] border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#137c63]">{content.contentsLabel}</p>
              <p className="mt-1 text-sm font-bold text-slate-900">{content.contents}</p>
            </div>
            <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
              {content.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#terms-${index + 1}`}
                    className="flex gap-3 rounded-xl px-3 py-2.5 text-sm leading-5 text-slate-600 transition hover:bg-[#eaf2e9] hover:text-[#075e4b]"
                  >
                    <span className="font-mono font-bold text-emerald-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="rounded-[22px] border border-[#dce9df] bg-[#eaf2e9] p-5">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#137c63]">{content.reminderTitle}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              {content.reminder}
            </p>
          </div>
        </aside>

        <article className="min-w-0">
          <div className="mb-8 rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-[#137c63]">{content.readLabel}</p>
            <p className="mt-3 max-w-4xl text-sm leading-8 text-slate-700">
              {content.intro}
            </p>
          </div>

          <div className="space-y-5">
            {content.sections.map((section, index) => (
              <section
                key={section.heading}
                id={`terms-${index + 1}`}
                className="scroll-mt-28 rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3730a3] text-sm font-black text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-950 sm:text-xl">{section.heading}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{section.content}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 px-3 py-3 text-sm leading-7 text-slate-700">
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-[12px] font-black text-white">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <section className="rounded-[22px] bg-[linear-gradient(135deg,#1e1b4b_0%,#3730a3_55%,#4338ca_100%)] p-6 text-white">
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-amber-200">{content.keyPointsTitle}</p>
              <h2 className="mt-2 text-xl font-black">{content.responsibleTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-violet-100">
                {content.keyPoints.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section className="rounded-[22px] border border-amber-200 bg-[#fff8ed] p-6">
              <p className="text-[12px] font-black uppercase tracking-[0.22em] text-amber-800">{content.importantTitle}</p>
              <h2 className="mt-2 text-xl font-black text-slate-900">{content.projectInfoTitle}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {content.projectInfo.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>

          <p className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
            {content.questions}{' '}
            <Link href="/contact" className="font-bold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950">
              {content.contactLink}
            </Link>{' '}
            {content.questionsEnd}
          </p>
        </article>
      </div>
    </main>
  )
}