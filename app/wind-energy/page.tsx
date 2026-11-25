import { getRequestTranslations } from '@/lib/serverLocale';
import { WindEnergyHeroSections } from '@/app/components/pages/wind-energy/WindEnergyHeroSections';
import { WindEnergyOverviewSections } from '@/app/components/pages/wind-energy/WindEnergyOverviewSections';
import { WindEnergyElectricalSections } from '@/app/components/pages/wind-energy/WindEnergyElectricalSections';
import { WindEnergyCapacitySections } from '@/app/components/pages/wind-energy/WindEnergyCapacitySections';
import { WindEnergyServicesSections } from '@/app/components/pages/wind-energy/WindEnergyServicesSections';

export default async function WindEnergyPage() {
  const t = await getRequestTranslations()

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <WindEnergyHeroSections t={t} />

      {/* <SharedHeroSlider slides={windSlidesLocalized} ariaLabel={windPage.labels.sliderAriaLabel} interval={5200} /> */}

      <WindEnergyOverviewSections t={t} />

      <WindEnergyElectricalSections t={t} />

      <WindEnergyCapacitySections t={t} />

      <WindEnergyServicesSections t={t} />
    </main>
  )
}
