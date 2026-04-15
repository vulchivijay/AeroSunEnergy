import type { Metadata } from 'next'
import Script from 'next/script'
import JsonLd from '@/components/JsonLd'
import './globals.css'

// Replace with your actual Google Tag Manager container ID
const GTM_ID = 'GTM-XXXXXXX'

export const metadata: Metadata = {
  title: {
    default: 'AeroSun Energy | Solar & Wind Energy Solutions in India',
    template: '%s | AeroSun Energy',
  },
  description:
    'AeroSun Energy provides solar panels, wind turbines (HAWT, VAWT, flower turbines), and hybrid energy systems for homes, businesses, and industries across India. Get clean, affordable renewable energy.',
  keywords: [
    'solar energy India',
    'wind energy India',
    'renewable energy',
    'AeroSun Energy',
    'solar panels',
    'wind turbines',
    'HAWT',
    'VAWT',
    'flower turbines',
    'hybrid energy systems',
    'rooftop solar',
    'green energy India',
    'Savonius turbine',
    'solar installation',
    'clean energy solutions',
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
    title: 'AeroSun Energy | Solar & Wind Energy Solutions in India',
    description:
      'Clean, affordable solar and wind energy solutions for homes, businesses, and industries across India.',
    url: 'https://aerosunenergy.in',
    siteName: 'AeroSun Energy',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo-full.jpeg',
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
    images: ['/logo-full.jpeg'],
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    google: 'REPLACE_WITH_GOOGLE_VERIFICATION_CODE',
    other: {
      // Replace with your actual Bing Webmaster Tools verification code
      'msvalidate.01': 'REPLACE_WITH_BING_VERIFICATION_CODE',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <JsonLd />
        {children}
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </body>
    </html>
  )
}
