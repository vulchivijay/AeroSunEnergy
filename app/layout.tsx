import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { JsonLd } from '@/app/components/seo'
import { LocaleProvider } from '@/lib/LocaleContext'
import { Header, Footer, LordGanesha } from '@/app/components/layout'
import { PerformanceMonitor } from '@/app/components/performance'
import CookieConsent from '@/app/components/cookies/CookieConsent'
import Notifications from '@/app/components/layout/Notifications'
import { SaveEarthBadge, SaveSanatanaBadge } from '@/app/components/ui'
import ProductionProtector from '@/app/components/security/ProductionProtector'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400'],
  preload: true,
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['700'],
  preload: true,
  display: 'swap',
})

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || process.env.GTM_ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || undefined
const BING_SITE_VERIFICATION = process.env.BING_SITE_VERIFICATION || 'CFCE648996D804079C4F28B5C09CE9D3'

export const metadata: Metadata = {
  title: {
    default: 'AeroSun Energy | Solar Energy Solutions - Solar Panel Installation - Save Electricity With Solar - Get Your Solar Quote Today - Affordable Solar Solutions - Renewable Energy Solutions - Residential Solar Solutions - Commercial Solar Systems - Hybrid Solar Power Systems',
    template: '%s | AeroSun Energy',
  },
  description:
    'Go solar with Aerosun Energy. Explore reliable solar solutions for your energy needs. Reduce your electricity bills with efficient solar power systems. Contact us today! Solar solutions for homes and businesses. Get expert guidance and request a quote. Discover solar and hybrid energy systems designed for reliable, sustainable power.',
  keywords: [
    "energy solutions",
    "solar energy solutions",
    "solar energy",
    "solar solutions",
    "renewable energy solutions",
    "solar power",
    "solar panel",
    "solar power solutions",
    "clean energy solutions",
    "solar installation",
    "solar wind hybrid system",
    "solar energy systems",
    "sustainable energy solutions",
    "solar electricity",
    "hybrid solar solutions",
    "solar panel installation",
    "hybrid power solutions",
    "solar heating",
    "solar systems",
    "solar generation",
    "solar panel solutions",
    "rooftop solar",
    "renewable energy systems",
    "off grid solar power systems",
    "solar wind energy",
    "off grid solar system",
    "sun energy"
  ],
  metadataBase: new URL('https://aerosunenergy.in'),
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  applicationName: 'AeroSun Energy',
  authors: [{ name: 'AeroSun Energy', url: 'https://aerosunenergy.in' }],
  creator: 'AeroSun Energy',
  publisher: 'AeroSun Energy',
  category: 'Renewable Energy',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'AeroSun Energy | Hybrid Solar Wind Energy Solutions India',
    description:
      'Hybrid solar wind energy systems that power homes, highways, parks, and commercial spaces across India — day and night.',
    url: 'https://aerosunenergy.in',
    siteName: 'AeroSun Energy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AeroSun Energy – Solar & Wind Energy Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AeroSun Energy | Solar & Wind Energy Solutions in India',
    description:
      'Clean, affordable solar and wind energy solutions for homes, businesses, and industries across India.',
    images: ['/images/og-image.png'],
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': BING_SITE_VERIFICATION,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${poppins.variable} bg-white text-gray-900 transition-colors duration-150`}>
        {process.env.NODE_ENV === 'production' ? <ProductionProtector /> : null}
        {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
        {GA_MEASUREMENT_ID ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> : null}
        <JsonLd />
        <PerformanceMonitor />
        <LocaleProvider>
          <Notifications />
          <Header />
          <LordGanesha />
          {children}
          <Footer />
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  )
}
