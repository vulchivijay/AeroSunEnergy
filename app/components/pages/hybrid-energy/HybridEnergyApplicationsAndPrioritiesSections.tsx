import { HybridSectionEyebrow, HybridTable, OptimizedImage } from "@/app/components/ui";
import type { Translations } from '@/lib/LocaleContext';

export function HybridEnergyApplicationsAndPrioritiesSections({ t }: { t: Translations }) {
  const hybridPage = t.hybridPage

  const productPrioritiesLocalized = hybridPage.solutions.items

  const projectRowsLocalized = hybridPage.fit.rows
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="mb-8 max-w-3xl">
                  <HybridSectionEyebrow>{hybridPage.fit.eyebrow}</HybridSectionEyebrow>
                  <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.labels.typicalCombinations}</h2>
                </div>

                <HybridTable rows={projectRowsLocalized} />
              </div>
            </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                    <>
                      <HybridSectionEyebrow>{hybridPage.labels.recommendedLaunch}</HybridSectionEyebrow>
                      <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.labels.productPriorities}</h2>
                      <div className="mt-6 space-y-3">
                        {productPrioritiesLocalized.map((item, index) => (
                          <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-base font-bold text-emerald-700 tracking-normal">
                              {index + 1}
                            </div>
                            <div className="text-sm font-medium text-slate-800 tracking-normal">{item}</div>
                          </div>
                        ))}
                      </div>
                    </>

                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950 p-5 shadow-sm">
                      <div className="relative h-72 overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                        <OptimizedImage
                          src="/images/slider/slider-13.webp"
                          alt={hybridPage.labels.deploymentAlt}
                          fill
                          sizes="(min-width: 1024px) 35vw, 100vw"
                          className="object-cover opacity-85"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                      </div>
                      <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                        <p className="uppercase text-emerald-200 text-xs font-semibold tracking-wide leading-5">{hybridPage.labels.keyInsight}</p>
                        <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{hybridPage.labels.insightTitle}</h3>
                        <p className="mt-2 text-slate-200 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                          {hybridPage.labels.insightDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}
