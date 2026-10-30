import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hybrid Solar & Wind Energy Systems | Reliable Renewable Power by AeroSun Energy',
  description:
    'Hybrid solar and wind energy systems combining PV, wind turbines, storage, and intelligent controls for reliable power generation for homes, businesses, farms, and microgrids in India.',
  keywords: [
    'hybrid solar and wind energy',
    'solar wind hybrid system',
    'hybrid renewable energy',
    'microgrid solar wind',
    'battery storage hybrid system',
    'commercial hybrid energy',
    'off-grid hybrid system',
    'renewable hybrid power',
    'AeroSun Energy hybrid',
    'wind solar hybrid system',
    'grid-connected hybrid solar',
    'farm hybrid power system',
    'resilient clean energy system',
    'renewable energy India',
    'hybrid power generation',
    'solar and wind combination system',
    'hybrid rooftop solar system',
    'industrial hybrid power',
    'residential hybrid energy system',
    'energy storage hybrid solution',
    'solar wind battery system',
    'smart hybrid energy system',
    'microgrid hybrid power solution',
    'renewable backup power system',
    'clean hybrid power system',
  ],
  alternates: {
    canonical: '/hybridenergy',
  },
  openGraph: {
    title: 'Hybrid Solar & Wind Energy Systems | Reliable Renewable Power by AeroSun Energy',
    description:
      'Integrated solar and wind energy systems with storage for reliable power generation, smart controls, and energy resilience across India.',
    url: 'https://aerosunenergy.in/hybridenergy',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HybridEnergyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
