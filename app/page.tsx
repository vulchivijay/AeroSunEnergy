import { getRequestTranslations } from '@/lib/serverLocale';
import { HomeHeroSections } from '@/app/components/pages/home/HomeHeroSections';
import { HomeSolarOfferingsSections } from '@/app/components/pages/home/HomeSolarOfferingsSections';
import { HomeTrustAndRecognitionSections } from '@/app/components/pages/home/HomeTrustAndRecognitionSections';
import { HomeSolarStorySections } from '@/app/components/pages/home/HomeSolarStorySections';
import { HomeEvidenceSections } from '@/app/components/pages/home/HomeEvidenceSections';
import { HomeFinancialCalculators } from '@/app/components/pages/home/HomeFinancialCalculators';
import { HomeWindEnergySections } from '@/app/components/pages/home/HomeWindEnergySections';
import { HomeBrandsSection } from '@/app/components/pages/home/HomeBrandsSection';
import { HomeHybridEnergySection } from '@/app/components/pages/home/HomeHybridEnergySection';

export default async function Home() {
  const t = await getRequestTranslations()

  return (
    <main>
      <HomeHeroSections t={t} />
      <HomeSolarOfferingsSections t={t} />
      <HomeTrustAndRecognitionSections t={t} />
      <HomeSolarStorySections t={t} />
      <HomeEvidenceSections t={t} />
      <HomeFinancialCalculators />
      <HomeWindEnergySections t={t} />
      {/* Hybrid Energy Section */}
      <HomeHybridEnergySection t={t} />
      <HomeBrandsSection t={t} />
    </main>
  )
}
