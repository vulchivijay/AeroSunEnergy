import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn about our renewable energy expertise and company mission',
  description:
    'Learn about AeroSun Energy’s mission, renewable energy expertise, solar and wind technologies, hybrid systems, and project development approach.',
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
    title: 'Learn about our renewable energy expertise and company mission | AeroSun Energy Private Limited',
    description:
      'Learn about AeroSun Energy’s mission, renewable energy expertise, solar and wind technologies, hybrid systems, and project development approach.',
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
