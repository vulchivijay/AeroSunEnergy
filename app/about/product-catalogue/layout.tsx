import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore solar, wind, and hybrid renewable energy products',
  description:
    'Browse solar panels, inverters, batteries, off-grid systems, small wind turbines, and hybrid renewable energy solutions for homes, farms, and businesses.',
  keywords: [
    'AeroSun Energy product catalogue',
    'residential rooftop solar',
    'commercial industrial solar',
    'agricultural solar pumps',
    'off-grid solar systems',
    'solar battery storage',
    'small wind generators',
    'AeroSun AS-WG-3000',
    'solar wind hybrid systems',
    'renewable energy consultation',
    'solar feasibility assessment',
    'renewable energy solutions India',
    'PM Surya Ghar solar system',
    'solar inverter and battery',
    'hybrid solar inverter',
  ],
  alternates: {
    canonical: '/about/product-catalogue',
  },
  openGraph: {
    title: 'Explore solar, wind, and hybrid renewable energy products | AeroSun Energy Private Limited',
    description:
      'Browse solar panels, inverters, batteries, off-grid systems, small wind turbines, and hybrid renewable energy solutions for homes, farms, and businesses.',
    url: 'https://aerosunenergy.in/about/product-catalogue',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProductCatalogueLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
