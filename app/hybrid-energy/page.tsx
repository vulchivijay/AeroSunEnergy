import { getRequestTranslations } from '@/lib/serverLocale';
import TirupatiEnergySection from '@/app/components/ui/TirupatiEnergySection';
import { HybridEnergyHeroSections } from '@/app/components/pages/hybrid-energy/HybridEnergyHeroSections';
import { HybridEnergyCategoriesSections } from '@/app/components/pages/hybrid-energy/HybridEnergyCategoriesSections';
import { HybridEnergySolutionsAndServicesSections } from '@/app/components/pages/hybrid-energy/HybridEnergySolutionsAndServicesSections';
import { HybridEnergyApplicationsAndPrioritiesSections } from '@/app/components/pages/hybrid-energy/HybridEnergyApplicationsAndPrioritiesSections';

export default async function HybridEnergyPage() {
  const t = await getRequestTranslations()

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <HybridEnergyHeroSections t={t} />

      {/* <SharedHeroSlider slides={hybridSlidesLocalized} ariaLabel={hybridPage.labels.sliderAriaLabel} /> */}

      <HybridEnergyCategoriesSections t={t} />

      <HybridEnergySolutionsAndServicesSections t={t} />

      <HybridEnergyApplicationsAndPrioritiesSections t={t} />
      <TirupatiEnergySection />
    </main>
  )
}
