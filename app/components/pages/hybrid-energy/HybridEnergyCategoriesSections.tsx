import { getAccentOrDefault } from "@/lib/utils/utils";
import { HybridFeatureCard, HybridSectionEyebrow } from "@/app/components/ui";
import { hybridSolutionImages } from "@/app/components/ui/EnergyContentImages";
import type { Translations } from '@/lib/LocaleContext';

export function HybridEnergyCategoriesSections({ t }: { t: Translations }) {
  const hybridPage = t.hybridPage

  const hybridTypesLocalized = hybridPage.categories.items

  const integrationTypesLocalized = hybridPage.integration.items
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <HybridSectionEyebrow>{hybridPage.categories.eyebrow}</HybridSectionEyebrow>
            <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{hybridPage.categories.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {hybridTypesLocalized.map((type, index) => (
              <HybridFeatureCard
                key={type.title}
                title={type.title}
                description={type.description}
                points={type.highlights}
                accent={getAccentOrDefault(type.accent, ['sky', 'violet', 'amber'] as const, 'emerald')}
                imageSrc={hybridSolutionImages[index]}
              />
                  ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="rounded-xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <>
                <HybridSectionEyebrow>{hybridPage.integration.eyebrow}</HybridSectionEyebrow>
                <h3 className="mt-2 text-white text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{hybridPage.integration.title}</h3>
              </>
              <div className="hidden rounded-full border border-slate-700 bg-white/5 px-3 py-2 text-xs uppercase text-slate-200 sm:block text-xs font-semibold tracking-wide leading-5">
                {hybridPage.integration.badge}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {integrationTypesLocalized.map((item, index) => (
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
