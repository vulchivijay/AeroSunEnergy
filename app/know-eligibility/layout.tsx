import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Check Your Solar Eligibility & Rooftop Subsidy Options | AeroSun Energy',
  description:
    'Understand rooftop solar and subsidy eligibility with AeroSun Energy, including household requirements, system sizing, and renewable energy project suitability in India.',
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
    title: 'Check Your Solar Eligibility & Rooftop Subsidy Options | AeroSun Energy',
    description:
      'Learn whether your property qualifies for rooftop solar and subsidy support with AeroSun Energy expert guidance.',
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
