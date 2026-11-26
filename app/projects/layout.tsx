import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore our solar, wind, and hybrid renewable energy projects',
  description:
    'Explore solar, wind, and hybrid renewable energy projects for homes, farms, businesses, and industry, including rooftop, off-grid, and water-pumping systems.',
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
    title: 'Explore our solar, wind, and hybrid renewable energy projects | AeroSun Energy Private Limited',
    description:
      'Explore solar, wind, and hybrid renewable energy projects for homes, farms, businesses, and industry, including rooftop, off-grid, and water-pumping systems.',
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
