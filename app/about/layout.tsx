import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About AeroSun Energy | Reliable Solar Solutions for Homes & Businesses',
  description:
    'Learn about AeroSun Energy and our commitment to reliable solar solutions for homes and businesses. Discover how our expert team helps customers choose efficient solar and hybrid power systems for a more sustainable energy future.',
  keywords: [
    "energy solutions",
    "solar energy solutions",
    "solar energy",
    "solar solutions",
    "renewable energy solutions",
    "solar power",
    "solar panel",
    "solar power solutions",
    "clean energy solutions",
    "solar installation",
    "solar wind hybrid system",
    "solar energy systems",
    "sustainable energy solutions",
    "solar electricity",
    "hybrid solar solutions",
    "solar panel installation",
    "hybrid power solutions",
    "solar heating",
    "solar systems",
    "solar generation",
    "solar panel solutions",
    "rooftop solar",
    "renewable energy systems",
    "off grid solar power systems",
    "solar wind energy",
    "off grid solar system",
    "sun energy",
    'about AeroSun Energy',
    'about AeroSun Energy company profile',
    'renewable energy company India',
    'solar wind energy experts',
    'green energy mission',
    'hybrid renewable energy company',
    'solar and wind solutions India',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About AeroSun Energy',
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
