import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Save Earth with Solar, Wind & Hybrid Renewable Energy | AeroSun Energy',
  description:
    'Learn how rooftop solar, wind, and hybrid renewable energy solutions help reduce emissions, protect the environment, and build a cleaner future with AeroSun Energy.',
  keywords: [
    'clean energy solutions in Tirupati',
    'renewable energy in Tirupati Andhra Pradesh',
    'solar energy for a greener Tirupati',
    'solar and wind energy Tirupati',
    'sustainable energy solutions Tirupati',
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
    title: 'Save Earth with Solar, Wind & Hybrid Renewable Energy | AeroSun Energy',
    description:
      'Our planet, our responsibility: explore environmental challenges and practical solutions for a sustainable future.',
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
