import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AeroSun Energy Company Profile | Solar, Wind & Hybrid Energy Solutions',
  description:
    'Explore AeroSun Energy Private Limited’s company profile, vision, mission, solar and wind solutions, innovation focus, development approach, quality commitments and future direction.',
  keywords: [
    'AeroSun Energy company profile',
    'AeroSun Energy Private Limited',
    'renewable energy company India',
    'solar energy solutions',
    'wind energy solutions',
    'solar wind hybrid energy',
    'small wind generator development',
    'hybrid vertical axis wind turbine',
    'agricultural renewable energy',
    'off-grid renewable energy',
    'AeroSun Energy vision and mission',
    'solar panel price in India',
    'rooftop solar subsidy India',
    'PM Surya Ghar rooftop solar',
    'solar battery storage',
    'small wind turbine for agriculture',
  ],
  alternates: {
    canonical: '/about/company-profile',
  },
  openGraph: {
    title: 'AeroSun Energy Company Profile | Solar, Wind & Hybrid Energy Solutions',
    description:
      'Learn about AeroSun Energy’s renewable-energy solutions, technology development, quality and safety commitments, and long-term priorities.',
    url: 'https://aerosunenergy.in/about/company-profile',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CompanyProfileLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
