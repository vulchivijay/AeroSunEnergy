import type { Metadata } from 'next'
import { Poppins, Roboto } from 'next/font/google'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { JsonLd } from '@/app/components/seo'
import { LocaleProvider } from '@/lib/LocaleContext'
import { Header, Footer, LordGanesha } from '@/app/components/layout'
import { PerformanceMonitor } from '@/app/components/performance'
import CookieConsent from '@/app/components/cookies/CookieConsent'
import Notifications from '@/app/components/layout/Notifications'
import ProductionProtector from '@/app/components/security/ProductionProtector'
import Script from 'next/script'

import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400'],
  preload: true,
  display: 'swap',
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-logo',
  weight: ['700'],
  preload: true,
  display: 'swap',
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif'],
})

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || process.env.GTM_ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || process.env.GA_MEASUREMENT_ID
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION || undefined
const BING_SITE_VERIFICATION = process.env.BING_SITE_VERIFICATION || 'CFCE648996D804079C4F28B5C09CE9D3'

export const metadata: Metadata = {
  title: {
    default: 'Solar Energy Solutions for Homes & Businesses | AeroSun Energy',
    template: '%s | AeroSun Energy',
  },
  description:
    'AeroSun Energy designs and installs solar, wind, and hybrid renewable energy systems for homes, businesses, farms, and industrial projects across India.',
  keywords: [
    'solar energy',
    'wind energy',
    'renewable energy',
    'hybrid energy systems',
    'solar power solutions',
    'wind power solutions',
    'solar energy solutions',
    'solar panel installation',
    'renewable energy solutions',
    'solar wind hybrid system',
    'AeroSun Energy',
    'solar energy in India',
    'on-grid solar systems',
    'off-grid solar systems',
    'hybrid power solutions',
    'wind energy solutions',
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
    canonical: 'https://aerosunenergy.in',
    languages: {
      'en-IN': 'https://aerosunenergy.in',
      en: 'https://aerosunenergy.in',
    },
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
    title: 'AeroSun Energy | Solar, Wind & Hybrid Energy Solutions in India',
    description:
      'AeroSun Energy designs and installs solar, wind, and hybrid renewable energy systems for homes, businesses, farms, and infrastructure across India.',
    url: 'https://aerosunenergy.in',
    siteName: 'AeroSun Energy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://aerosunenergy.in/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AeroSun Energy – Solar & Wind Energy Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AeroSun Energy | Solar, Wind & Hybrid Energy Solutions in India',
    description:
      'AeroSun Energy delivers solar, wind, and hybrid renewable energy systems for homes, businesses, and infrastructure across India.',
    images: ['https://aerosunenergy.in/images/og-image.png'],
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18547983243"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18547983243');
          `}
        </Script>
        {GTM_ID ? (
          <Script id="gtm-script" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
            `}
          </Script>
        ) : null}
      </head>
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
