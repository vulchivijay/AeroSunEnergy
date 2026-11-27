import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore renewable energy research and development',
  description:
    'Explore AeroSun Energy’s research and development priorities for solar, wind, and hybrid renewable energy, including engineering focus areas and technology development.',
  keywords: [
    'AeroSun Energy research and development',
    'renewable energy research',
    'solar energy technology development',
    'small wind energy development',
    'solar wind hybrid systems',
    'renewable energy engineering',
    'solar and wind energy integration',
    'clean energy innovation',
  ],
  alternates: {
    canonical: '/about/research',
  },
  openGraph: {
    title: 'Renewable energy research and development | AeroSun Energy Private Limited',
    description:
      'Explore AeroSun Energy’s research and development priorities for solar, wind, and hybrid renewable energy, including engineering focus areas and technology development.',
    url: 'https://aerosunenergy.in/about/research',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
