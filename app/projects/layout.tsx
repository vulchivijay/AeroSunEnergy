import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | AeroSun Energy',
  description:
    'Explore AeroSun Energy projects across rooftop solar, wind systems, hybrid installations, solar water pumping, and renewable energy infrastructure for homes, businesses, farms, and industrial sites.',
  keywords: [
    'AeroSun Energy projects',
    'solar projects India',
    'wind energy projects',
    'hybrid energy projects',
    'renewable energy projects',
    'rooftop solar project',
    'agricultural solar project',
    'commercial solar project',
    'industrial energy project',
    'solar and wind installation projects',
    'AeroSun Energy case studies',
  ],
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | AeroSun Energy',
    description:
      'Discover the solar, wind, hybrid, and infrastructure projects AeroSun Energy supports across India.',
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
