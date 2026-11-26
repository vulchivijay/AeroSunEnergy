import { FeatureCard, BenefitCard, SectionEyebrow, solarSystemAccents, solarSystemImages } from '@/app/components/ui';
import type { Translations } from '@/lib/LocaleContext';

export function SolarSystemTypesSections({ t }: { t: Translations }) {
  const solarPage = t.solarPage

  const systemTypesLocalized = solarPage.systemTypes.items

  const whySolarLocalized = solarPage.whySolar.items
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.systemTypes.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{solarPage.systemTypes.title}</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {systemTypesLocalized.map((type, index) => (
              <FeatureCard key={type.title} title={type.title} description={type.description} points={type.benefits} accent={solarSystemAccents[index] ?? 'emerald'} label={t.ui.solarSolution} imageSrc={solarSystemImages[index]} />
                  ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.whySolar.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{solarPage.whySolar.title}</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whySolarLocalized.map((item) => (
              <BenefitCard key={item.title} title={item.title} description={item.description} />
                  ))}
          </div>
        </div>
      </section>
    </>
  )
}
