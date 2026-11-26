import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore solar financing and PM Surya Ghar loan options',
  description:
    'Explore PM Surya Ghar solar loans, rooftop solar financing, eligibility, subsidy details, repayment terms, and application steps. Confirm current offers with your bank.',
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
    title: 'Explore solar financing and PM Surya Ghar loan options | AeroSun Energy Private Limited',
    description:
      'Explore PM Surya Ghar solar loans, rooftop solar financing, eligibility, subsidy details, repayment terms, and application steps. Confirm current offers with your bank.',
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
