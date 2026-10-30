import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar, Wind & Hybrid Projects | AeroSun Energy',
  description:
    'Explore AeroSun Energy rooftop solar, wind, hybrid, and renewable energy projects for homes, businesses, agricultural sites, and industrial facilities across India.',
  keywords: [
    'AeroSun Energy projects',
    'solar projects India',
    'rooftop solar projects',
    'commercial solar projects',
    'industrial solar projects',
    'wind energy projects',
    'hybrid energy projects',
    'renewable energy projects',
    'solar and wind installation projects',
    'agricultural solar project',
    'solar water pumping project',
    'solar rooftop installation project',
    'AeroSun Energy case studies',
    'green energy project India',
    'commercial renewable energy project',
    'industrial renewable energy solution',
    'off-grid solar project',
    'solar farm project',
    'hybrid microgrid project',
    'solar energy project company',
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Solar, Wind & Hybrid Projects | AeroSun Energy',
    description:
      'Discover AeroSun Energy solar, wind, hybrid, and infrastructure projects delivering clean energy across India.',
    url: 'https://aerosunenergy.in/projects',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
