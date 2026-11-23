import Link from 'next/link'
import { getRequestTranslations } from '@/lib/serverLocale'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'

import { BadgeCheck, ClipboardCheck, KeyRound, Monitor, PanelsTopLeft, Smartphone, type LucideIcon } from 'lucide-react'

export default async function KnowEligibilityPage() {
  const t = await getRequestTranslations()
  const page = t.knowEligibilityPage
  const labels = page.labels

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800">
      <header className="relative isolate overflow-hidden border-b border-slate-700 bg-linear-to-br from-slate-950/75 via-sky-950/65 to-indigo-950/75 text-white shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_18%_90%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_88%_10%,rgba(14,165,233,0.2),transparent_34%)]" />
        <div className="absolute -right-20 top-[-12rem] -z-10 h-[35rem] w-[35rem] rounded-full border border-emerald-100/10">
          <div className="absolute inset-10 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-20 rounded-full border border-emerald-100/10" />
          <div className="absolute inset-32 rounded-full border border-emerald-100/10" />
        </div>
        <div className="mx-auto my-6 grid w-[calc(100%-2rem)] max-w-7xl items-center gap-10 rounded-xl border border-slate-200 bg-white/20 px-5 py-14 shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/15 sm:px-8 sm:py-20 lg:my-8 lg:grid-cols-[1fr_auto] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/5 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.24em] text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-sm" />
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
          <div className="flex w-fit items-center gap-4 rounded-xl border border-slate-700 bg-white/[0.06] px-5 py-4 backdrop-blur">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300/10 text-xl text-emerald-200">₹</span>
            <span className="text-xs leading-5 text-slate-300">
              {labels.subsidySnapshot}
              <strong className="block text-md font-bold text-white">{labels.subsidyAmount}</strong>
            </span>
          </div>
        </div>
        <div className="border-t border-slate-700">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-emerald-100/60 sm:px-8 lg:px-10">
            {labels.quickLinks.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </header>

      <TrustRibbon />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10 lg:py-16">
        <article className="min-w-0">
          <section id="eligibility-requirements" className="scroll-mt-28 mb-8 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">i</span>
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">{labels.glanceTitle}</p>
                <p className="mt-2 text-md leading-7 text-slate-600 sm:text-sm">
                  {labels.glanceDescription}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3">
              {labels.glanceItems.map((item, index) => (
                <div key={item.label} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3">
                  <span className="font-mono text-xs font-bold text-emerald-700"><DigitalNumber value={`0${index + 1}`} /></span>
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
                <div key={item.title} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4">
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-700"><DigitalNumber value={String(index + 1).padStart(2, '0')} /></span>
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
            <section id="subsidy-overview" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f1f2f6] to-white shadow-sm">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800"><DigitalNumber value="01" /></span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{labels.subsidyTitle}</h2>
                  <p className="mt-3 text-md leading-7 text-slate-600 sm:text-sm">{labels.subsidyDescription}</p>
                  <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-950">{t.subsidyNotice}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {page.subsidyBreakdown.map((item) => (
                      <div key={item.title} className="rounded-xl bg-[#f4f8fc] p-4">
                        <p className="text-[12px] font-black uppercase tracking-[0.16em] text-emerald-800">{item.title}</p>
                        <p className="mt-2 text-xl font-black text-slate-950"><DigitalNumber value={item.value} /></p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="scheme-categories" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] shadow-sm">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800"><DigitalNumber value="02" /></span>
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
                      <div key={item.title} className="rounded-xl border border-slate-200 bg-sky-50/70 p-4">
                        <span className="font-mono text-xs font-bold text-sky-800"><DigitalNumber value={`0${index + 1}`} /></span>
                        <h4 className="mt-2 text-md font-bold text-slate-900">{item.title}</h4>
                        <p className="mt-2 text-xs leading-6 text-slate-600">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="application-process" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f1f2f6] to-white shadow-sm">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800"><DigitalNumber value="03" /></span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-extrabold tracking-tight text-slate-950">{labels.processTitle}</h2>
                  <ol className="mt-4 space-y-3">
                    {page.processSteps.map((step, index) => (
                      <li key={step} className="flex items-start gap-3 text-md leading-6 text-slate-600">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-mono text-[12px] font-bold text-emerald-800"><DigitalNumber value={index + 1} /></span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <ConsumerRegistrationProcess />
                </div>
              </div>
              <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent" />
            </section>

            <section id="verification-and-exclusions" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] shadow-sm">
              <div className="flex items-start gap-4 p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800"><DigitalNumber value="04" /></span>
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

          <p className="mt-7 rounded-xl border border-slate-200 bg-white p-5 text-md leading-7 text-slate-600">
            {labels.contactPrompt}{' '}
            <Link href="/contact" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">{labels.contactLink}</Link>
            {' '}{labels.or}{' '}<Link href="/solar-energy" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800">{labels.solutionsLink}</Link>.
          </p>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <nav aria-label={labels.sectionsLabel} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
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
                    <span className="font-mono font-bold text-emerald-700/70"><DigitalNumber value={String(index + 1).padStart(2, '0')} /></span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <section className="rounded-xl bg-gradient-to-br from-[#f1f2f6] to-white p-5">
            <p className="text-[12px] font-black uppercase tracking-[0.2em] text-emerald-800">{labels.important}</p>
            <p className="mt-3 text-md leading-6 text-slate-700">{labels.importantDescription}</p>
            <a href="https://pmsuryaghar.gov.in/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-md font-bold text-emerald-800 underline decoration-emerald-300/50 underline-offset-4 hover:text-emerald-950">{labels.portalLink}</a>
          </section>
        </aside>
      </div>
    </main>
  )
}

const stepIcons: LucideIcon[] = [
  Monitor,
  KeyRound,
  ClipboardCheck,
  Smartphone,
  BadgeCheck,
  PanelsTopLeft,
]

async function ConsumerRegistrationProcess() {
  const t = await getRequestTranslations()
  const eligibility = t.knowEligibilityPage
  const process = eligibility.labels.consumerRegistration
  const benefits = process.benefits

  return (
    <section aria-labelledby="consumer-registration-title" className="mt-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <header className="mb-5 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-800">{process.eyebrow}</p>
        <h3 id="consumer-registration-title" className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          <span className="text-sky-700">{process.titleAccent}</span>{' '}{process.title}
        </h3>
        <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-slate-600">{process.description}</p>
      </header>

      <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {process.steps.map((step, index) => {
          const Icon = stepIcons[index] ?? ClipboardCheck
          const featured = index % 2 === 0

          return (
            <li
              key={step.title}
              className={`rounded-xl border p-4 ${featured ? 'border-sky-700 bg-sky-50' : 'border-slate-200 bg-white'}`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${featured ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-800'}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-800">
                  {process.stepLabel} <DigitalNumber value={String(index + 1).padStart(2, '0')} />
                </span>
              </div>
              <h4 className="mt-4 font-bold text-slate-950">{step.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              {step.url && (
                <a
                  className="mt-3 inline-flex font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-950"
                  href={step.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {process.portalLink}
                </a>
              )}
            </li>
          )
        })}
      </ol>

      <section aria-labelledby="consumer-benefits-title" className="mt-8 border-t border-slate-200 pt-6">
        <h3 id="consumer-benefits-title" className="text-center text-3xl font-black text-sky-700">
          {benefits.title}
        </h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-2">
          <div className="lg:border-r lg:border-slate-300 lg:pr-6">
            <h4 className="text-center text-xl font-bold text-slate-950">{benefits.residentialTitle}</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {eligibility.subsidyBreakdown.slice(0, 3).map((item) => (
                <article key={item.title} className="text-center">
                  <p className="text-sm text-slate-700">{item.title}</p>
                  <p className="mt-1 text-xl font-black text-sky-700"><DigitalNumber value={item.value} /></p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-slate-950">
              {benefits.communityTitle} <span className="text-sky-700">{benefits.communityAccent}</span>
            </h4>
            <p className="text-sm text-slate-600">{benefits.communitySubtitle}</p>
            {eligibility.subsidyBreakdown.slice(3, 4).map((item) => (
              <article key={item.title} className="mt-4">
                <p className="text-sm text-slate-700">{item.title}</p>
                <p className="mt-1 text-xl font-black text-sky-700"><DigitalNumber value={item.value} /></p>
                <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-600">{benefits.communityDetails}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-semibold leading-6 text-slate-800">
          {benefits.specialStatesNote}
        </p>
        <div className="mt-5">
          <h4 className="text-center text-lg font-bold text-slate-950">{benefits.capacityTitle}</h4>
          <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[560px] text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
              <tbody className="divide-y divide-emerald-100">
                <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                  <th scope="row" className="bg-amber-700 text-left font-bold text-white">{benefits.consumptionLabel}</th>
                  {benefits.consumptionValues.map((value) => (
                    <td key={value} className="border-l border-slate-200 px-4 py-3 text-center text-slate-900"><DigitalNumber value={value} /></td>
                  ))}
                </tr>
                <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                  <th scope="row" className="bg-amber-700 text-left font-bold text-white">{benefits.capacityLabel}</th>
                  {benefits.capacityValues.map((value) => (
                    <td key={value} className="border-l border-slate-200 px-4 py-3 text-center text-slate-900"><DigitalNumber value={value} /></td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </section>
  )
}
