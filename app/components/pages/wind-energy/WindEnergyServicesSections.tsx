import TirupatiEnergySection from "@/app/components/ui/TirupatiEnergySection";
import { WindSectionEyebrow } from "@/app/components/ui";
import type { Translations } from '@/lib/LocaleContext';

export function WindEnergyServicesSections({ t }: { t: Translations }) {
  const windPage = t.windPage

  const serviceSectionsLocalized = windPage.sections
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="mb-8 max-w-3xl">
                  <WindSectionEyebrow>{windPage.labels.serviceSections}</WindSectionEyebrow>
                  <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.labels.serviceSectionsTitle}</h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  {serviceSectionsLocalized.map((section) => (
                    <div key={section.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                      <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{section.title}</h3>
                      <p className="mt-2 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{section.heading}</p>
                      <p className="mt-4 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{section.overview}</p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <h4 className="text-slate-800 text-lg font-semibold tracking-normal leading-snug">{windPage.labels.applications}</h4>
                          <ul className="mt-2 space-y-2 text-base leading-6 text-slate-600">
                            {section.applications.map((app) => (
                              <li key={app.title} className="flex gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div>
                                  <div className="font-medium text-slate-800 tracking-normal">{app.title}</div>
                                  <div className="text-base leading-6 text-slate-600">{app.description}</div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-slate-800 text-lg font-semibold tracking-normal leading-snug">{windPage.labels.keyBenefits}</h4>
                          <ul className="mt-2 space-y-2 text-base leading-6 text-slate-600">
                            {section.benefits.map((benefit) => (
                              <li key={benefit} className="flex gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                                <div className="text-base leading-6 text-slate-600">{benefit}</div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 rounded-xl bg-slate-50 p-4 text-base text-slate-700">
                        <div className="flex items-center justify-between">
                          <div className="font-medium tracking-normal">{windPage.labels.illustrativeCalculation}</div>
                          <div className="text-base text-slate-500">{section.calculation.label}</div>
                        </div>
                        <div className="mt-2 flex gap-2 text-lg font-bold tracking-normal">
                          <div className="text-emerald-600">{section.calculation.result}</div>
                          <div className="text-slate-500">{section.calculation.formula}</div>
                        </div>
                        <div className="mt-2 text-base text-slate-500">{section.calculation.note}</div>
                      </div>

                      <div className="mt-6 border-t border-slate-200 pt-4">
                        <h4 className="text-slate-800 text-lg font-semibold tracking-normal leading-snug">{windPage.labels.faqs}</h4>
                        <div className="mt-2 space-y-3 text-base leading-6 text-slate-600">
                          {section.faqs.map((faq) => (
                            <div key={faq.question} className="flex flex-col gap-1">
                              <div className="font-medium text-slate-800 tracking-normal">{faq.question}</div>
                              <div className="text-base">{faq.answer}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
      <TirupatiEnergySection background="second" />
    </>
  )
}
