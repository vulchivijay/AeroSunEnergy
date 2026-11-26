import { WindCapacityTable, WindSectionEyebrow } from "@/app/components/ui";
import type { Translations } from '@/lib/LocaleContext';

export function WindEnergyCapacitySections({ t }: { t: Translations }) {
  const windPage = t.windPage

  const capacityBandsLocalized = windPage.capacity.rows
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <WindSectionEyebrow>{windPage.capacity.eyebrow}</WindSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.capacity.title}</h2>
          </div>

          <WindCapacityTable rows={capacityBandsLocalized} />
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <WindSectionEyebrow>{windPage.strategy.eyebrow}</WindSectionEyebrow>
                <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.strategy.title}</h2>
                <div className="mt-6 space-y-5 text-sm leading-7 text-slate-700">
                  <p>
                    {windPage.labels.strategyDescription[0]}
                  </p>
                  <p>
                    {windPage.labels.strategyDescription[1]}
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="uppercase text-emerald-700 text-xs font-semibold tracking-wide leading-5">{windPage.labels.aeroSunView}</p>
                <div className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                  {windPage.strategy.points.map((point, index) => (
                    <div key={point} className="rounded-xl bg-white p-3">{index + 1}. {point}</div>
                        ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
