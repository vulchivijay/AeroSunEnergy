import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Estimate your solar system cost, savings, and payback',
  description:
    'Estimate rooftop solar system size, installation cost, energy savings, payback, and return on investment for your home or business with our solar calculator.',
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
    'solar cost',
    'solar panel price',
    'solar system price',
    'solar power for home cost',
    'cost solar panels',
    'solar energy cost',
    'solar system installation cost',
    'solar savings',
  ],
  alternates: {
    canonical: '/solar-calculator',
  },
  openGraph: {
    title: 'Estimate your solar system cost, savings, and payback | AeroSun Energy Private Limited',
    description:
      'Estimate rooftop solar system size, installation cost, energy savings, payback, and return on investment for your home or business with our solar calculator.',
    url: 'https://aerosunenergy.in/solar-calculator',
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
