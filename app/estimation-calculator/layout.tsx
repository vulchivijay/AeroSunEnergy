import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Estimation Calculator | Rooftop Solar Savings Estimate',
  description:
    'Use AeroSun Energy’s solar estimation calculator to estimate your rooftop solar system size, savings potential, and payback based on your monthly power consumption.',
  keywords: [
    'solar estimation calculator',
    'solar savings calculator',
    'rooftop solar estimate',
    'solar cost calculator',
    'solar payback calculator',
    'solar system size calculator',
    'solar installation estimate',
    'rooftop solar savings',
    'renewable energy calculator',
    'AeroSun Energy estimation',
    'Tirupati solar estimate',
    'solar energy calculator India',
    'solar ROI calculator',
    'renewable energy estimate',
    'solar panel savings estimate',
    'home solar calculator',
  ],
  alternates: {
    canonical: '/estimation-calculator',
  },
  openGraph: {
    title: 'AeroSun Energy Solar Estimation Calculator',
    description:
      'Estimate your solar system size, potential savings, and ROI with AeroSun Energy.',
    url: 'https://aerosunenergy.in/estimation-calculator',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function EstimationCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
