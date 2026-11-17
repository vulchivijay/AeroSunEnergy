import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar Financing Options | PM Surya Ghar Loan Guide | AeroSun Energy',
  description:
    'Review the PM Surya Ghar standard solar-loan product, eligibility conditions, loan limits, subsidy and application steps. Confirm current terms with your bank.',
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
