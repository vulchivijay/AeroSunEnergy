import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover how clean energy can support climate action',
  description:
    'Learn how solar, wind, and hybrid renewable energy can reduce emissions and support a cleaner future through practical energy solutions.',
  keywords: [
    'Save Earth initiative',
    'renewable energy and climate action',
    'solar for environment',
    'reduce carbon emissions',
    'clean energy India',
    'AeroSun Energy sustainability',
    'green energy solutions',
    'solar power for climate action',
    'wind energy sustainability',
    'hybrid power climate impact',
    'renewable environmental benefits',
    'AeroSun Energy green future',
    'low carbon energy solutions',
    'eco friendly power',
    'clean electricity generation',
    'sustainable energy India',
    'solar and wind climate change',
    'reduce pollution with solar',
    'renewable resource protection',
    'green technology solutions',
    'clean energy for future generations',
    'AeroSun Energy environmental mission',
    'solar for a greener planet',
    'solar power',
    'solar electricity',
    'sun energy',
  ],
  alternates: {
    canonical: '/save-earth',
  },
  openGraph: {
    title: 'Discover how clean energy can support climate action | AeroSun Energy Private Limited',
    description:
      'Learn how solar, wind, and hybrid renewable energy can reduce emissions and support a cleaner future through practical energy solutions.',
    url: 'https://aerosunenergy.in/save-earth',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function SaveEarthLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
