import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About AeroSun Energy | Reliable Solar Solutions for Homes & Businesses',
  description:
    'Learn about AeroSun Energy, a trusted renewable energy company delivering solar, wind, and hybrid power solutions for homes, businesses, farms, and industrial projects in India.',
  keywords: [
    'about AeroSun Energy',
    'AeroSun Energy company profile',
    'solar company in India',
    'renewable energy company',
    'solar energy solutions',
    'wind energy solutions',
    'hybrid energy systems',
    'clean energy company',
    'green energy solutions',
    'solar power company',
    'renewable energy solutions',
    'AeroSun Energy mission',
    'solar installation company',
    'off-grid solar solutions',
    'rooftop solar company',
    'commercial solar company',
    'industrial solar solutions',
    'solar and wind energy experts',
    'renewable energy project company',
    'sustainable energy provider',
    'solar energy consultant',
    'clean power solutions India',
    'hybrid renewable energy company',
    'AeroSun Energy India',
    'solar energy for businesses',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | AeroSun Energy',
    description:
      'Discover the mission, values, and renewable energy expertise behind AeroSun Energy.',
    url: 'https://aerosunenergy.in/about',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
