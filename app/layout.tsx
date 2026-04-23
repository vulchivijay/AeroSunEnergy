import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
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
    'solar wind hybrid system for homes',
    'green energy infrastructure',
    'smart energy systems',
    'AeroSun Energy',
    'HAWT and VAWT turbines',
    'VAWT flower turbines',
    'low-wind VAWT solutions',
    'flower turbines',
    'Savonius turbine',
    'aero sun energy',
    'free energy from sun and wind',
    'free energy from wind turbines',
    'free energy from solar panels',
    'solar and wind energy solutions',
    'hybrid energy systems for roads',
    'hybrid energy systems for parks',
    'hybrid energy systems for commercial spaces',
    'IoT energy monitoring',
    'cost savings with hybrid energy',
    'eco-friendly energy solutions',
    'low maintenance energy systems',
    'efficient use of space for energy',
    'Solar energy',
    'Wind energy',
    'Renewable energy',
  ],
  metadataBase: new URL('https://aerosunenergy.in'),
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
      <body className={`${roboto.variable} bg-white text-gray-900 transition-colors duration-150 dark:bg-gray-950 dark:text-gray-100`}>
        {GTM_ID ? <GoogleTagManager gtmId={GTM_ID} /> : null}
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function() {
            try {
              var theme = localStorage.getItem('theme');
              var html = document.documentElement;
              if (theme === 'dark') {
                html.classList.add('dark');
              } else {
                html.classList.remove('dark');
              }
            } catch (e) {
              console.error(e);
            }
          })();`}
        </Script>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
