import { HybridContentBlock, HybridInfoPanel, HybridSectionEyebrow } from "@/app/components/ui";
import { hybridSolutionImages } from "@/app/components/ui/EnergyContentImages";
import type { Translations } from '@/lib/LocaleContext';

export function HybridEnergySolutionsAndServicesSections({ t }: { t: Translations }) {
  const hybridPage = t.hybridPage

  const keyBenefitsLocalized = hybridPage.common.benefits

  const serviceSectionsLocalized = hybridPage.sections
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <HybridContentBlock
                  eyebrow={hybridPage.hero.eyebrow}
                  title={`${hybridPage.hero.title} ${hybridPage.hero.titleAccent}`}
                  description={hybridPage.hero.subtitle}
                  benefits={keyBenefitsLocalized.map((benefit) => ({
                    title: benefit.split(' ').slice(0, 3).join(' ') || hybridPage.labels.benefitFallback,
                    description: benefit,
                  }))}
                  imageSrc={hybridSolutionImages[0]}
                />

                <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    <HybridInfoPanel title={hybridPage.common.whyWorks} content={keyBenefitsLocalized} index={0} accent="emerald" />
                    <HybridInfoPanel title={hybridPage.common.feasibilityChecklist} content={hybridPage.labels.feasibilityItems} index={1} accent="sky" />
                </div>
              </div>
            </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="mb-8 max-w-3xl">
                  <HybridSectionEyebrow>{hybridPage.solutions.eyebrow}</HybridSectionEyebrow>
                  <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.solutions.title}</h2>
                </div>

                <div className="space-y-8">
                  {serviceSectionsLocalized.map((service, index) => (
                    <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                      <div className="mb-6 flex items-center justify-between gap-3">
                        <>
                          <p className="uppercase text-emerald-700 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.servicePrefix} {index + 1}</p>
                          <h3 className="mt-2 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{service.title}</h3>
                        </>
                        <div className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs uppercase text-emerald-700 sm:block text-xs font-semibold tracking-wide leading-5">
                          {hybridPage.labels.systemBadge}
                        </div>
                      </div>

                      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                        <>
                          <h4 className="text-slate-900 text-lg font-semibold tracking-normal leading-snug">{service.heading}</h4>
                          <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.overview}</p>

                          <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {service.applications.map((item) => (
                              <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                                <p className="uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.application}</p>
                                <h5 className="mt-3 text-slate-900 text-base font-semibold tracking-normal leading-snug">{item.title}</h5>
                                <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </>

                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                          <p className="uppercase text-emerald-700 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.benefits}</p>
                          <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-3 rounded-xl bg-white/70 p-3">
                                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white tracking-normal">✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                        <div className="rounded-xl border border-sky-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_100%)] p-5">
                          <p className="uppercase text-sky-700 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.exampleCalculation}</p>
                          <h4 className="mt-3 text-slate-900 text-lg font-semibold tracking-normal leading-snug">{service.calculation.label}</h4>
                          <p className="mt-3 font-mono text-slate-800 tabular-nums text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.calculation.formula}</p>
                          <div className="mt-4 rounded-xl bg-slate-900 p-3 text-base font-semibold text-white tracking-normal">{service.calculation.result}</div>
                          <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{service.calculation.note}</p>
                        </div>

                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                          <p className="uppercase text-slate-600 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.faqs}</p>
                          <div className="mt-4 space-y-4">
                            {service.faqs.map((item) => (
                              <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-3.5">
                                <p className="text-slate-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.question}</p>
                                <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item.answer}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-slate-700 tracking-normal"
                        >
                          {hybridPage.labels.requestAssessment}
                        </a>
                        <a
                          href="/auth/dashboard/customer-enquiry"
                          className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-base font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-100 tracking-normal"
                        >
                          {hybridPage.labels.enquireNow}
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
    </>
  )
}
