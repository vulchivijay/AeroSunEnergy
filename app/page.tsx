import type { Metadata } from 'next';
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

const homeTitle = 'Solar, Wind & Hybrid Energy in Tirupati | AeroSun Energy';
const homeDescription =
  'AeroSun Energy helps homes, farms, and businesses in Tirupati plan solar, wind, and hybrid energy systems, with clear quotations and installation support.';

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: homeDescription,
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: 'https://aerosunenergy.in',
    siteName: 'AeroSun Energy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://aerosunenergy.in/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'AeroSun Energy renewable energy solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: homeDescription,
    images: ['https://aerosunenergy.in/images/og-image.webp'],
  },
};

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
