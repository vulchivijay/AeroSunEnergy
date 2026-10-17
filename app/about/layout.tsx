import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About AeroSun Energy',
  description:
    'Learn about AeroSun Energy, our mission, renewable energy expertise, founder-led vision, and commitment to sustainable solar and wind solutions in India.',
  keywords: [
    'about AeroSun Energy',
    'AeroSun Energy company profile',
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
