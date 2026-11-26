import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Financing Options | PM Surya Ghar Loan Guide | AeroSun Energy',
  description:
    'Review the PM Surya Ghar standard solar-loan product, eligibility conditions, loan limits, subsidy and application steps. Confirm current terms with your bank.',
  keywords: [
    'PM Surya Ghar solar loan',
    'rooftop solar financing',
    'solar loan eligibility in India',
    'solar subsidy and loan guide',
    'AeroSun Energy finance',
    'rooftop solar loan interest',
    'PM Surya Ghar financing eligibility',
    'solar bank loan application',
    'residential solar loan India',
    'solar loan for homeowners',
    'solar financing guide India',
    'solar project payment options',
    'solar subsidy application process',
    'solar loan repayment terms',
    'AeroSun solar financing guide',
    'PM Surya Ghar Muft Bijli Yojana',
    'rooftop solar subsidy India',
    'solar EMI calculator',
    'solar system cost in India',
    'solar panel price in India',
  ],
  alternates: {
    canonical: '/finance',
  },
  openGraph: {
    title: 'Solar Financing Options | AeroSun Energy',
    description:
      'A comparison of PM Surya Ghar solar-loan terms and eligibility for rooftop solar customers.',
    url: 'https://aerosunenergy.in/finance',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
