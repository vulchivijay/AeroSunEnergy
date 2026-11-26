import { getAccentOrDefault } from "@/lib/utils/utils";
import TirupatiEnergySection from "@/app/components/ui/TirupatiEnergySection";
import { WindCapacityTable, WindContentBlock, WindFeatureCard, WindInfoPanel, WindSectionEyebrow } from "@/app/components/ui";
import { windSolutionImages } from "@/app/components/ui/EnergyContentImages";
import type { Translations } from '@/lib/LocaleContext';

export function HomeWindEnergySections({ t }: { t: Translations }) {
  const home = t.home

  const wind = home.wind
  return (
    <>
      <TirupatiEnergySection />
      <section className="bg-gradient-to-br from-white to-[#f1f2f6] px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <>
            <div className="mb-8 flex items-center justify-between gap-4">
              <>
                <WindSectionEyebrow>{wind.eyebrow}</WindSectionEyebrow>
                <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                  {wind.title}
                </h2>
              </>
            </div>
            <div id="wind-energy-content">
              <div className="grid gap-6 lg:grid-cols-3">
                {wind.cards.map((card, index) => (
                  <WindFeatureCard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    descriptionClassName="line-clamp-3"
                    points={[]}
                    accent={getAccentOrDefault(card.accent, ['amber', 'sky', 'violet'] as const, 'emerald')}
                    imageSrc={windSolutionImages[index]}
                  />
                    ))}
              </div>
              <div className="mt-10">
                <WindContentBlock eyebrow={wind.eyebrow} title={wind.title} description={t.windPage.hero.subtitle} benefits={wind.benefits} imageSrc={windSolutionImages[0]} />
              </div>
              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                {wind.panels.map((panel, index) => (
                  <WindInfoPanel key={panel.title} title={panel.title} index={index} accent={getAccentOrDefault(panel.accent, ['emerald', 'amber'] as const, 'sky')} content={panel.content} />
                    ))}
              </div>
              <div className="mt-8">
                <WindCapacityTable rows={wind.capacity} />
              </div>
            </div>
          </>
        </div>
      </section>
    </>
  )
}
