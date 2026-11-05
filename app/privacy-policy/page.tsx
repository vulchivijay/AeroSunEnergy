'use client'

import Link from 'next/link'
import { useLocale } from '@/lib/LocaleContext'

export default function PrivacyPolicyPage() {
  const { t } = useLocale()
  const content = t.legalPages.privacyPolicy

  return (
    <main className="min-h-screen bg-[#f2f6fb] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#101c32] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(14,165,233,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(99,102,241,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-sky-100/10">
          <div className="absolute inset-10 rounded-full border border-sky-100/10" />
          <div className="absolute inset-20 rounded-full border border-sky-100/10" />
          <div className="absolute inset-32 rounded-full border border-sky-100/10" />
        </div>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-sky-100">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(125,211,252,0.8)]" />
              {content.badge}
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-[0.065em] text-white sm:text-6xl lg:text-7xl">
              {content.title}
              <span className="mt-1 block text-sky-300">{content.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-md leading-7 text-slate-300 sm:text-base sm:leading-8">
              {content.description}
            </p>
          </div>
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-300/10 text-xl text-sky-200">◎</span>
            <span className="text-md leading-5 text-slate-300">
              {content.updatedLabel}
              <strong className="block text-md font-bold text-white">{content.effectiveDate}</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-sky-100/60 sm:px-8 lg:px-10">
            {content.headerTopics.map((topic) => <span key={topic}>{topic}</span>)}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10">
        <article className="min-w-0">
          <div className="mb-8 rounded-3xl border border-sky-200/80 bg-white p-6 shadow-[0_20px_55px_-42px_rgba(15,23,42,0.5)] sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-lg text-sky-800">i</span>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-sky-800">{content.summaryTitle}</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-base">
                  {content.summary}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {content.summaryItems.map((item, index) => (
                <div key={item.label} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-md font-bold text-sky-700">0{index + 1}</span>
                  <span className="text-md leading-5 text-slate-600">
                    <strong className="block text-md text-slate-900">{item.label}</strong>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {content.sections.map((section, index) => (
              <section
                key={section.heading}
                id={`privacy-${index + 1}`}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_15px_45px_-40px_rgba(15,23,42,0.5)]"
              >
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-sky-200 bg-sky-50 font-mono text-md font-bold text-sky-800">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{section.heading}</h2>
                    <p className="mt-3 text-md leading-7 text-slate-600 sm:text-base">{section.content}</p>
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="h-px bg-linear-to-r from-sky-100 via-indigo-100 to-transparent" />
              </section>
            ))}
          </div>

          <p className="mt-7 rounded-2xl border border-sky-200/80 bg-white p-5 text-md leading-7 text-slate-600">
            {content.clarification}{' '}
            <Link href="/contact" className="font-bold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-indigo-800">
              {content.contactLink}
            </Link>{' '}
            {content.clarificationEnd}
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={content.navLabel} className="overflow-hidden rounded-2xl border border-sky-200/80 bg-white shadow-sm">
            <div className="border-b border-slate-100 px-5 py-4">
              <p className="text-[12px] font-black uppercase tracking-[0.2em] text-sky-800">{content.findTopic}</p>
              <p className="mt-1 text-md font-bold text-slate-900">{content.contents}</p>
            </div>
            <ol className="max-h-[55vh] space-y-1 overflow-y-auto p-3 lg:max-h-[calc(100vh-15rem)]">
              {content.sections.map((section, index) => (
                <li key={section.heading}>
                  <a
                    href={`#privacy-${index + 1}`}
                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-md leading-5 text-slate-600 transition hover:bg-sky-50 hover:text-sky-900"
                  >
                    <span className="font-mono font-bold text-sky-700/70">{String(index + 1).padStart(2, '0')}</span>
                    <span>{section.heading.replace(/^\d+\.\s*/, '')}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="rounded-2xl bg-[#101c32] p-5 text-white">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-sky-300">{content.protectedInfoTitle}</p>
            <ul className="mt-4 space-y-3 text-md leading-6 text-slate-200">
              {content.protectedInfo.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">{content.principlesTitle}</p>
            <ul className="mt-4 space-y-3 text-md leading-6 text-slate-700">
              {content.principles.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </aside>
      </div>
    </main>
  )
}
