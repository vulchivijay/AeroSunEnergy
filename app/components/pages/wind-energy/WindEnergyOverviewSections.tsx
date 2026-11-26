import { getAccentOrDefault } from "@/lib/utils/utils";
import { WindFeatureCard, WindSectionEyebrow } from "@/app/components/ui";
import { windSolutionImages } from "@/app/components/ui/EnergyContentImages";
import type { Translations } from '@/lib/LocaleContext';

export function WindEnergyOverviewSections({ t }: { t: Translations }) {
  const windPage = t.windPage

  const turbineTypesLocalized = windPage.overview.items

  const deploymentTypesLocalized = windPage.classification.items
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <WindSectionEyebrow>{windPage.overview.eyebrow}</WindSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.overview.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {turbineTypesLocalized.map((type, index) => (
              <WindFeatureCard
                key={type.title}
                title={type.title}
                description={type.description}
                points={type.highlights}
                accent={getAccentOrDefault(type.accent, ['emerald', 'amber', 'violet'] as const, 'sky')}
                imageSrc={windSolutionImages[index]}
              />
                  ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <WindSectionEyebrow>{windPage.classification.eyebrow}</WindSectionEyebrow>
                <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{windPage.classification.title}</h3>
              </div>
              <div className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 hidden rounded-full border border-slate-700 bg-white/5 px-3 py-2 text-xs uppercase text-slate-200 sm:block text-xs font-semibold tracking-wide leading-5">
                {windPage.classification.badge}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {deploymentTypesLocalized.map((item, index) => (
                <div key={item} className="rounded-xl border border-slate-700 bg-white/5 p-4">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-bold text-emerald-300 tracking-normal">
                    {index + 1}
                  </div>
                  <p className="text-slate-100 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
