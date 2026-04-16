import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Script from 'next/script'
import JsonLd from '@/app/components/JsonLd'

import './globals.css'

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-body',
  weight: ['400'],
  preload: true,
  display: "swap" // Prevents layout shift from font loading
});

const GTM_ID = 'GTM-PLB9S69G';
const BING_SITE_VERIFICATION = 'CFCE648996D804079C4F28B5C09CE9D3';

export const metadata: Metadata = {
  title: {
    default: 'AeroSun Energy | Hybrid Solar Wind Energy Solutions India',
    template: '%s | AeroSun Energy',
  },
  description:
    'AeroSun Energy provides hybrid solar wind energy systems for homes, roads, parks, and commercial spaces across India. 24/7 clean power generation with smart IoT monitoring.',
  keywords: [
    'hybrid solar wind energy',
    'renewable energy solutions India',
    'solar wind hybrid system for homes',
    'green energy infrastructure',
    'smart energy systems',
    'AeroSun Energy',
    'wind turbine installation India',
    'solar panel installation India',
    'HAWT',
    'VAWT',
    'flower turbines',
    'Savonius turbine',
    'clean energy India',
    'sustainable energy infrastructure',
    'aero sun energy'
  ],
  metadataBase: new URL('https://aerosunenergy.in'),
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
        url: '/images/logo-full.png',
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
    images: ['/images/logo-full.png'],
  },
  verification: BING_SITE_VERIFICATION
    ? {
      other: {
        'msvalidate.01': BING_SITE_VERIFICATION,
      },
    }
    : undefined,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {GTM_ID ? (
          <Script
            id="gtm-script"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        ) : null}
      </head>
      <body className={`${roboto.variable} bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100`}>
        {GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
