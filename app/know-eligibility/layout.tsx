import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Check your eligibility for rooftop solar and available subsidies',
  description:
    'Check rooftop solar eligibility, system-size needs, PM Surya Ghar subsidy requirements, and project suitability for homes and businesses.',
  keywords: [
    'solar eligibility check',
    'rooftop solar eligibility India',
    'PM Surya Ghar eligibility',
    'AeroSun Energy subsidy eligibility',
    'solar scheme eligibility',
    'rooftop solar qualification',
    'residential solar eligibility',
    'commercial solar eligibility',
    'solar subsidy eligibility',
    'renewable energy eligibility',
    'solar rooftop qualification',
    'grid-connected solar eligibility',
    'off-grid solar eligibility',
    'clean energy project eligibility',
    'hybrid solar eligibility',
    'industrial solar eligibility',
    'solar system size eligibility',
    'green energy subsidy check',
    'AeroSun Energy solar assessment',
    'solar power suitability India',
    'renewable energy consultation eligibility',
    'roof suitability for solar',
    'solar project feasibility check',
  ],
  alternates: {
    canonical: '/know-eligibility',
  },
  openGraph: {
    title: 'Check your eligibility for rooftop solar and available subsidies | AeroSun Energy Private Limited',
    description:
      'Check rooftop solar eligibility, system-size needs, PM Surya Ghar subsidy requirements, and project suitability for homes and businesses.',
    url: 'https://aerosunenergy.in/know-eligibility',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function KnowEligibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
