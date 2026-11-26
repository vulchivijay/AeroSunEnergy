import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Learn how we deliver solar, wind, and hybrid energy solutions',
  description:
    'Meet the team behind AeroSun Energy and learn about our renewable energy mission, solar and wind solutions, and hybrid power projects for homes, farms, and businesses.',
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
    'solar power',
    'solar electricity',
    'solar panels for homes',
    'solar installation',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Learn how we deliver solar, wind, and hybrid energy solutions | AeroSun Energy Private Limited',
    description:
      'Meet the team behind AeroSun Energy and learn about our renewable energy mission, solar and wind solutions, and hybrid power projects for homes, farms, and businesses.',
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
