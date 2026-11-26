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
    'solar panels',
    'solar panels for homes',
    'solar pv panels',
    'pv panels',
    'photovoltaic panels',
    'solar pv',
    'solar pv system',
    'solar technology',
    'types of solar panels',
    'solar panel information',
    'solar panel system',
    'solar power panels',
    'rooftop solar panels',
    'commercial solar panel',
    'commercial solar system',
    'solar panels for business',
    'solar panels for commercial buildings',
    'solar for commercial buildings',
    'industrial solar panels',
    'solar energy storage',
    'solar panel price',
    'best solar',
    'best solar system',
    'best solar system for home',
    'best solar panels for home',
    'sun panels',
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
