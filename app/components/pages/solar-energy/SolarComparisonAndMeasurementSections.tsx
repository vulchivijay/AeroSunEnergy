import { OptimizedImage, SectionEyebrow } from '@/app/components/ui';
import type { Translations } from '@/lib/LocaleContext';

export function SolarComparisonAndMeasurementSections({ t }: { t: Translations }) {
  const solarPage = t.solarPage

  const comparisonMeta = solarPage.comparison

  const solarComparisonRows = solarPage.comparison.rows

  const measurement = solarPage.measurement
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{comparisonMeta.label}</p>
                    <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{comparisonMeta.title}</h2>

                    <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
                      <div className="grid grid-cols-1 border-b border-slate-200 bg-[linear-gradient(145deg,#71300c_0%,#92370b_55%,#a94208_100%)] uppercase text-white md:grid-cols-[1.3fr_0.9fr_0.8fr_1.4fr] text-xs font-semibold tracking-wide leading-5">
                        <div className="px-4 py-3">{t.ui.systemType}</div>
                        <div className="px-4 py-3">{comparisonMeta.battery}</div>
                        <div className="px-4 py-3">{comparisonMeta.grid}</div>
                        <div className="px-4 py-3">{comparisonMeta.typicalUse}</div>
                      </div>

                      <div className="divide-y divide-slate-200">
                        {solarComparisonRows.map((row) => (
                          <div key={row.type} className="grid gap-3 px-4 py-4 text-base text-slate-700 md:grid-cols-[1.3fr_0.9fr_0.8fr_1.4fr] md:gap-0">
                            <div className="font-bold text-slate-900 tracking-normal">{row.type}</div>
                            <>{row.battery}</>
                            <>{row.grid}</>
                            <>{row.use}</>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-[linear-gradient(145deg,#71300c_0%,#92370b_55%,#a94208_100%)] p-5 shadow-sm">
                    <div className="relative h-72 overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
                      <OptimizedImage
                        src="/images/slider/slider-6.webp"
                        alt={solarPage.featuredImageAlt}
                        fill
                        sizes="(min-width: 1024px) 30vw, 100vw"
                        className="object-cover opacity-85"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                    </div>
                    <div className="mt-5 rounded-xl border border-amber-400/20 bg-amber-500/10 p-4">
                      <p className="uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{comparisonMeta.recommendedFocus}</p>
                      <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{comparisonMeta.focusTitle}</h3>
                      <p className="mt-2 text-slate-200 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                        {comparisonMeta.recommendationDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="mb-8 max-w-3xl">
                  <SectionEyebrow>{measurement.eyebrow}</SectionEyebrow>
                  <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{measurement.title}</h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-xl border border-slate-200 bg-white p-6">
                    <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {measurement.introductionBefore} <span className="font-bold text-slate-900 tracking-normal">{measurement.unitLabel}</span>{measurement.introductionAfter}
                    </p>

                    <div className="mt-6 space-y-5">
                      <div className="rounded-xl border border-slate-200 bg-[#eaf2e9] p-4">
                        <p className="uppercase text-[#14785e] text-xs font-semibold tracking-wide leading-5">{measurement.consumptionTitle}</p>
                        <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                          {measurement.consumptionDescription}
                        </p>
                      </div>

                      <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
                        <p className="uppercase text-sky-700 text-xs font-semibold tracking-wide leading-5">{measurement.generationTitle}</p>
                        <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                          {measurement.generationDescription}<br />
                          <span className="font-bold text-slate-900 tracking-normal">{measurement.generationFormula}</span>
                        </p>
                        <p className="mt-2 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                          {measurement.generationExample}
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-[#f7fbf8] p-4">
                        <p className="uppercase text-[#137c63] text-xs font-semibold tracking-wide leading-5">{measurement.gridTitle}</p>
                        <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                          {measurement.gridDescription}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="rounded-xl border border-slate-200 bg-[linear-gradient(145deg,#71300c_0%,#92370b_55%,#a94208_100%)] p-5 shadow-sm">
                      <p className="uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">{measurement.exampleLabel}</p>
                      <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{measurement.exampleTitle}</h3>
                      <div className="mt-5 space-y-4 text-base leading-7 text-slate-200">
                        {measurement.balanceItems.map((item) => (
                          <div key={item.label} className="rounded-xl border border-slate-700 bg-white/5 p-3">
                            <span className="font-bold text-white tracking-normal">{item.label}</span> {item.value}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                      <p className="uppercase text-amber-700 text-xs font-semibold tracking-wide leading-5">{measurement.keyPointLabel}</p>
                      <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                        {measurement.keyPoint}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}
