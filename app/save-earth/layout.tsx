import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Save Earth | AeroSun Energy',
  description:
    'Learn how AeroSun Energy helps reduce emissions and protect the environment through rooftop solar, wind energy, hybrid systems, and renewable power solutions.',
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
  ],
  alternates: {
    canonical: '/save-earth',
  },
  openGraph: {
    title: 'Save Earth | AeroSun Energy',
    description:
      'Discover how switching to clean solar, wind, and hybrid energy can help reduce emissions, save resources, and protect the planet.',
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
