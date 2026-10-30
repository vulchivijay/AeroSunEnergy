import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Agreement | AeroSun Energy',
  description:
    'Review AeroSun Energy customer agreement terms, project scope, payment conditions, and acceptance details for solar, wind, and hybrid renewable energy projects in India.',
  keywords: [
    'customer agreement AeroSun Energy',
    'solar project agreement',
    'renewable energy agreement',
    'solar contract terms',
    'wind energy agreement',
    'hybrid energy project agreement',
    'solar installation agreement',
    'commercial solar contract',
    'residential solar agreement',
    'renewable energy payment terms',
    'AeroSun Energy project terms',
    'solar EPC agreement',
    'customer terms and conditions',
    'project approval form',
    'renewable project documentation',
    'solar energy contract India',
    'wind turbine agreement',
    'clean energy document',
    'solar project contract',
    'AeroSun Energy payment terms',
    'project acceptance form',
    'hybrid power contract',
    'energy project execution agreement',
    'renewable energy service agreement',
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
