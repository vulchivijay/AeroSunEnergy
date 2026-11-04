import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Solar & Renewable Energy Product Catalogue | AeroSun Energy',
  description:
    'Explore AeroSun Energy’s residential, commercial, agricultural, off-grid, battery, wind and hybrid renewable-energy solutions, consultation services and project process.',
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
  ],
  alternates: {
    canonical: '/about/product-catalogue',
  },
  openGraph: {
    title: 'Solar & Renewable Energy Product Catalogue | AeroSun Energy',
    description:
      'Discover AeroSun Energy’s renewable-energy solutions for homes, farms, businesses and institutions, including solar, battery, wind and hybrid systems.',
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
