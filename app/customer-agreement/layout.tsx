import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Agreement | AeroSun Energy',
  description:
    'Review AeroSun Energy customer agreement, payment terms, and renewable energy project acceptance forms for solar, wind, and hybrid power solutions across India.',
  keywords: [
    'customer agreement AeroSun Energy',
    'renewable energy agreement',
    'solar project agreement',
    'solar contract terms',
    'wind energy agreement',
    'hybrid energy project agreement',
    'AeroSun Energy payment terms',
    'renewable energy payment terms',
    'solar installation agreement',
    'commercial solar contract',
    'residential solar agreement',
    'energy project acceptance',
    'solar consultancy agreement',
    'hybrid power contract',
    'customer terms and conditions',
    'project approval form',
    'solar energy contract India',
    'wind turbine agreement',
    'solar EPC agreement',
    'clean energy document',
    'AeroSun Energy project terms',
    'renewable project documentation',
    'solar and wind service agreement',
  ],
  alternates: {
    canonical: '/customer-agreement',
  },
  openGraph: {
    title: 'Customer Agreement | AeroSun Energy',
    description:
      'AeroSun Energy customer agreement and payment terms for solar, wind, and hybrid energy solutions.',
    url: 'https://aerosunenergy.in/customer-agreement',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CustomerAgreementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
