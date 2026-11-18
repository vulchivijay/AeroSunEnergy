import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Customer Agreement',
  description: 'Secure customer agreement workspace for authorized AeroSun Energy users.',
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
    canonical: '/auth/dashboard/customer-agreement',
  },
  openGraph: {
    title: 'Customer Agreement | AeroSun Energy Dashboard',
    description: 'Secure customer agreement workspace for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/customer-agreement',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function CustomerAgreementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
