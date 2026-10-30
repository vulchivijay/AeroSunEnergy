import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Estimation Calculator | Rooftop Solar Savings Estimate',
  description:
    'Use AeroSun Energy’s solar estimation calculator to estimate rooftop solar capacity, savings potential, payback period, and return on investment for homes and businesses in India.',
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
    'solar energy calculator India',
    'solar ROI calculator',
    'renewable energy estimate',
    'solar panel savings estimate',
    'home solar calculator',
    'commercial solar cost estimate',
    'solar power estimate',
    'solar project cost calculator',
    'energy savings estimation',
    'renewable power calculator',
    'AeroSun Energy solar calculator',
    'solar energy budgeting tool',
    'rooftop solar sizing calculator',
  ],
  alternates: {
    canonical: '/estimation-calculator',
  },
  openGraph: {
    title: 'Solar Estimation Calculator | AeroSun Energy',
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
