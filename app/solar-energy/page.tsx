import { getRequestTranslations } from '@/lib/serverLocale';
import TirupatiEnergySection from '@/app/components/ui/TirupatiEnergySection';
import { SolarHeroSections } from '@/app/components/pages/solar-energy/SolarHeroSections';
import { SolarOfferingsSections } from '@/app/components/pages/solar-energy/SolarOfferingsSections';
import { SolarSystemTypesSections } from '@/app/components/pages/solar-energy/SolarSystemTypesSections';
import { SolarSubsidySections } from '@/app/components/pages/solar-energy/SolarSubsidySections';
import { SolarComparisonAndMeasurementSections } from '@/app/components/pages/solar-energy/SolarComparisonAndMeasurementSections';

export default async function SolarEnergyPage() {
  const t = await getRequestTranslations()

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <SolarHeroSections t={t} />

      {/* <SharedHeroSlider slides={solarSlidesLocalized} ariaLabel={solarPage.hero.eyebrow} /> */}

      <SolarOfferingsSections t={t} />

      <SolarSystemTypesSections t={t} />

      <SolarSubsidySections t={t} />

      <SolarComparisonAndMeasurementSections t={t} />
      <TirupatiEnergySection background="first" />
    </main>
  )
}
