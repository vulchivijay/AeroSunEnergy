import { FeatureCard, BenefitCard, InfoPanel, SuitableForInfoPanel, SectionEyebrow, solarOfferingAccents, solarOfferingImages } from '@/app/components/ui';
import type { Translations } from '@/lib/LocaleContext';

export function SolarOfferingsSections({ t }: { t: Translations }) {
  const solarPage = t.solarPage

  const offeringsLocalized = solarPage.offer.cards

  const rooftopBenefitsLocalized = solarPage.rooftop.benefits

  const suitableForLocalized = solarPage.rooftop.suitableForItems
  return (
    <>
      <section id="solar-offerings" className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.offer.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{solarPage.offer.title}</h2>
            <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{solarPage.offer.description}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {offeringsLocalized.map((service, index) => (
              <FeatureCard
                key={service.title}
                title={service.title}
                description={service.description}
                points={service.points}
                accent={solarOfferingAccents[index] ?? 'emerald'}
                label={t.ui.solarSolution}
                imageSrc={solarOfferingImages[index]}
              />
                  ))}
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="mb-8 max-w-3xl">
            <SectionEyebrow>{solarPage.rooftop.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{solarPage.rooftop.title}</h2>
            <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{solarPage.rooftop.description}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-5 sm:grid-cols-2">
              {rooftopBenefitsLocalized.map((benefit) => (
                <BenefitCard key={benefit} title={benefit.split(' ').slice(0, 3).join(' ') || 'Benefit'} description={benefit} />
                    ))}
            </div>

            <div className="space-y-5">
              <SuitableForInfoPanel title={solarPage.rooftop.suitableFor} content={suitableForLocalized} />
              <InfoPanel title={solarPage.rooftop.keyBenefits} content={rooftopBenefitsLocalized} accent="sky" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
