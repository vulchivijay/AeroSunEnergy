import Link from "next/link";
import { getRequestTranslations } from "@/lib/serverLocale";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import { BadgeCheck, ClipboardCheck, KeyRound, Monitor, PanelsTopLeft, Smartphone, type LucideIcon } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

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
    <section aria-labelledby="consumer-registration-title" className="mt-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 ">
      <header className="mb-5 text-center">
        <p className="uppercase text-sky-800    text-xs font-semibold tracking-wide leading-5">{process.eyebrow}</p>
        <h3 id="consumer-registration-title" className="mt-2 text-slate-950 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
          <span className="text-sky-700">{process.titleAccent}</span>{' '}{process.title}
        </h3>
        <p className="mx-auto mt-2 max-w-3xl text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{process.description}</p>
      </header>

      <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 ">
        {process.steps.map((step, index) => {
          const Icon = stepIcons[index] ?? ClipboardCheck
          const featured = index % 2 === 0

          return (
            <li
              key={step.title}
              className={`rounded-xl border p-4 ${featured ? 'border-sky-700 bg-sky-50' : 'border-slate-200 bg-white '}`}
            >
              <div className="flex items-center gap-3 ">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${featured ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-800'}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="font-mono uppercase text-sky-800 text-xs font-semibold tracking-wide leading-5 tabular-nums">
                  {process.stepLabel} <DigitalNumber value={String(index + 1).padStart(2, '0')} />
                </span>
              </div>
              <h4 className="mt-4 text-slate-950 text-lg font-semibold tracking-normal leading-snug">{step.title}</h4>
              <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{step.description}</p>
              {step.url && (
                <a
                  className="mt-3 inline-flex font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 hover:text-sky-950 tracking-normal"
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

      <section aria-labelledby="consumer-benefits-title" className="mt-8 border-t border-slate-200 pt-6 ">
        <h3 id="consumer-benefits-title" className="text-center text-sky-700 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
          {benefits.title}
        </h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-2 ">
          <div className="lg:border-r lg:border-slate-300 lg:pr-6 ">
            <h4 className="text-center text-slate-950 text-lg font-semibold tracking-normal leading-snug">{benefits.residentialTitle}</h4>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 ">
              {eligibility.subsidyBreakdown.slice(0, 3).map((item) => (
                <article key={item.title} className="text-center ">
                  <p className="text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.title}</p>
                  <p className="mt-1 text-lg sm:text-xl text-sky-700 font-semibold tracking-normal leading-snug tabular-nums"><DigitalNumber value={item.value} /></p>
                  <p className="mt-1 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.note}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="text-center ">
            <h4 className=" text-slate-950 text-lg font-semibold tracking-normal leading-snug">
              {benefits.communityTitle} <span className="text-sky-700">{benefits.communityAccent}</span>
            </h4>
            <p className="text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{benefits.communitySubtitle}</p>
            {eligibility.subsidyBreakdown.slice(3, 4).map((item) => (
              <article key={item.title} className="mt-4 ">
                <p className="text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.title}</p>
                <p className="mt-1 text-lg sm:text-xl text-sky-700 font-semibold tracking-normal leading-snug tabular-nums"><DigitalNumber value={item.value} /></p>
                <p className="mx-auto mt-2 max-w-xl text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{benefits.communityDetails}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-slate-800      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {benefits.specialStatesNote}
        </p>
        <div className="mt-5 ">
          <h4 className="text-center text-slate-950 text-lg font-semibold tracking-normal leading-snug">{benefits.capacityTitle}</h4>
          <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200 ">
            <table className="w-full min-w-[560px] text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 ">
              <tbody className="divide-y divide-emerald-100 ">
                <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
                  <th scope="row" className="bg-amber-700 text-left font-bold text-white tracking-normal">{benefits.consumptionLabel}</th>
                  {benefits.consumptionValues.map((value) => (
                    <td key={value} className="border-l border-slate-200 px-4 py-3 text-center text-slate-900 tabular-nums"><DigitalNumber value={value} /></td>
                  ))}
                </tr>
                <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
                  <th scope="row" className="bg-amber-700 text-left font-bold text-white tracking-normal">{benefits.capacityLabel}</th>
                  {benefits.capacityValues.map((value) => (
                    <td key={value} className="border-l border-slate-200 px-4 py-3 text-center text-slate-900 tabular-nums"><DigitalNumber value={value} /></td>
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

export function KnowEligibilityRequirementsSections({ t }: { t: Translations }) {
  const page = t.knowEligibilityPage

  const labels = page.labels
  return (
    <>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-12 lg:px-10 lg:py-16 ">
              <article className="min-w-0 ">
                <section id="eligibility-requirements" className="scroll-mt-28 mb-8 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-6 shadow-sm sm:p-8 ">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-lg text-emerald-800">i</span>
                    <div>
                      <p className=" uppercase text-emerald-800    text-xs font-semibold tracking-wide leading-5">{labels.glanceTitle}</p>
                      <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                        {labels.glanceDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-3 ">
                    {labels.glanceItems.map((item, index) => (
                      <div key={item.label} className="flex gap-3 rounded-xl bg-[#f4f8fc] p-3 ">
                        <span className="font-mono text-xs font-bold text-emerald-700 tracking-normal tabular-nums"><DigitalNumber value={`0${index + 1}`} /></span>
                        <span className="text-xs leading-5 text-slate-600">
                          <strong className="block text-base text-slate-900">{item.label}</strong>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                  <h2 className="mt-7 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.checkEligibility}</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 ">
                    {page.eligibilityChecks.map((item, index) => (
                      <div key={item.title} className="rounded-xl border border-slate-200 bg-[#f8fafc] p-4 ">
                        <div className="flex items-start gap-3 ">
                          <span className="font-mono text-xs font-bold text-emerald-700 tracking-normal tabular-nums"><DigitalNumber value={String(index + 1).padStart(2, '0')} /></span>
                          <div>
                            <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{item.title}</h3>
                            <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="space-y-4 ">
                  <section id="subsidy-overview" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f1f2f6] to-white shadow-sm ">
                    <div className="flex items-start gap-4 p-5 sm:p-6 ">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800 tracking-normal tabular-nums"><DigitalNumber value="01" /></span>
                      <div className="min-w-0 flex-1 ">
                        <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.subsidyTitle}</h2>
                        <p className="mt-3 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.subsidyDescription}</p>
                        <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-950      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{t.subsidyNotice}</p>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2 ">
                          {page.subsidyBreakdown.map((item) => (
                            <div key={item.title} className="rounded-xl bg-[#f4f8fc] p-4 ">
                              <p className=" uppercase text-emerald-800    text-xs font-semibold tracking-wide leading-5">{item.title}</p>
                              <p className="mt-2 text-lg sm:text-xl text-slate-950 font-semibold tracking-normal leading-snug tabular-nums"><DigitalNumber value={item.value} /></p>
                              <p className="mt-1 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.note}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent " />
                  </section>

                  <section id="scheme-categories" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] shadow-sm ">
                    <div className="flex items-start gap-4 p-5 sm:p-6 ">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800 tracking-normal tabular-nums"><DigitalNumber value="02" /></span>
                      <div className="min-w-0 flex-1 ">
                        <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.schemeCategoriesTitle}</h2>
                        <div className="mt-4 grid gap-3">
                          {page.schemeOverviewCards.map((card) => (
                            <div key={card.title} className="rounded-xl bg-[#f4f8fc] p-4">
                              <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{card.title}</h3>
                              <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{card.detail}</p>
                            </div>
                          ))}
                        </div>
                        <h3 className="mt-6 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{labels.pmKusumTitle}</h3>
                        <div className="mt-3 grid gap-3 sm:grid-cols-3 ">
                          {page.pmKusumComponents.map((item, index) => (
                            <div key={item.title} className="rounded-xl border border-slate-200 bg-sky-50/70 p-4 ">
                              <span className="font-mono text-xs font-bold text-sky-800 tracking-normal tabular-nums"><DigitalNumber value={`0${index + 1}`} /></span>
                              <h4 className="mt-2 text-slate-900 text-lg font-semibold tracking-normal leading-snug">{item.title}</h4>
                              <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent " />
                  </section>

                  <section id="application-process" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-[#f1f2f6] to-white shadow-sm ">
                    <div className="flex items-start gap-4 p-5 sm:p-6 ">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800 tracking-normal tabular-nums"><DigitalNumber value="03" /></span>
                      <div className="min-w-0 flex-1 ">
                        <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.processTitle}</h2>
                        <ol className="mt-4 space-y-3 ">
                          {page.processSteps.map((step, index) => (
                            <li key={step} className="flex items-start gap-3 text-base leading-6 text-slate-600 ">
                              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-mono text-xs font-bold text-emerald-800 tracking-normal tabular-nums"><DigitalNumber value={index + 1} /></span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                        <ConsumerRegistrationProcess />
                      </div>
                    </div>
                    <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent " />
                  </section>

                  <section id="verification-and-exclusions" className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] shadow-sm ">
                    <div className="flex items-start gap-4 p-5 sm:p-6 ">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 font-mono text-xs font-bold text-emerald-800 tracking-normal tabular-nums"><DigitalNumber value="04" /></span>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{labels.verifyTitle}</h2>
                        <ul className="mt-4 space-y-3">
                          {[...page.importantNotes, ...page.schemeEligibilityNotes].map((note) => (
                            <li key={note} className="flex items-start gap-3 text-base leading-6 text-slate-600">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                        <h3 className="mt-6 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{labels.rejectionReasonsTitle}</h3>
                        <ul className="mt-3 space-y-2.5">
                          {page.commonRejectionReasons.map((reason) => (
                            <li key={reason} className="flex items-start gap-3 text-base leading-6 text-slate-600">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                              <span>{reason}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="h-px bg-linear-to-r from-emerald-100 via-sky-100 to-transparent " />
                  </section>
                </div>

                <p className="mt-7 rounded-xl border border-slate-200 bg-white p-5 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {labels.contactPrompt}{' '}
                  <Link href="/contact" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800 tracking-normal">{labels.contactLink}</Link>
                  {' '}{labels.or}{' '}<Link href="/solar-energy" className="font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-sky-800 tracking-normal">{labels.solutionsLink}</Link>.
                </p>
              </article>

              <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start ">
                <nav aria-label={labels.sectionsLabel} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ">
                  <div className="border-b border-slate-200 px-5 py-4">
                    <p className=" uppercase text-emerald-800    text-xs font-semibold tracking-wide leading-5">{labels.findTopic}</p>
                    <p className="mt-1 text-slate-900      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.guideTitle}</p>
                  </div>
                  <ol className="space-y-1 p-3 ">
                    {[
                      ['eligibility-requirements', labels.checkEligibility],
                      ['subsidy-overview', labels.subsidyTitle],
                      ['scheme-categories', labels.schemeCategoriesTitle],
                      ['application-process', labels.processTitle],
                      ['verification-and-exclusions', labels.verifyTitle],
                    ].map(([id, label], index) => (
                      <li key={id}>
                        <a href={`#${id}`} className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900 ">
                          <span className="font-mono font-bold text-emerald-700/70 tracking-normal tabular-nums"><DigitalNumber value={String(index + 1).padStart(2, '0')} /></span>
                          <span>{label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <section className="rounded-xl bg-gradient-to-br from-[#f1f2f6] to-white p-5">
                  <p className=" uppercase text-emerald-800    text-xs font-semibold tracking-wide leading-5">{labels.important}</p>
                  <p className="mt-3 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{labels.importantDescription}</p>
                  <a href="https://pmsuryaghar.gov.in/" target="_blank" rel="noreferrer" className="mt-4 inline-flex text-base font-bold text-emerald-800 underline decoration-emerald-300/50 underline-offset-4 hover:text-emerald-950 tracking-normal">{labels.portalLink}</a>
                </section>
              </aside>
            </div>
    </>
  )
}
