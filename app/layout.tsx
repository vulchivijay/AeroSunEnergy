import type { Metadata, Viewport } from "next";
import { Orbitron, Poppins, Roboto } from "next/font/google";

import SiteChrome from "@/app/components/layout/SiteChrome";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400"],
  preload: true,
  display: "swap",
  adjustFontFallback: true,
  fallback: ["system-ui", "sans-serif"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["700"],
  preload: true,
  display: "swap",
  adjustFontFallback: true,
  fallback: ["system-ui", "sans-serif"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-digital",
  weight: ["600", "700"],
  preload: true,
  display: "swap",
  fallback: ["monospace"],
});

const GTM_ID = process.env._NEXT_PUBLIC_GTM_ID;
const GOOGLE_ADS_ID = process.env._NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA_MEASUREMENT_ID =
  process.env._NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ||
  process.env._NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env._NEXT_PUBLIC_GA_STREAM_ID;
const GOOGLE_SITE_VERIFICATION =
  process.env._NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  "Ne4zcF695B2vvEORY-FzGcJ4gllWu8WKGvMhob3zz-A";
const BING_SITE_VERIFICATION =
  process.env.BING_SITE_VERIFICATION || "CFCE648996D804079C4F28B5C09CE9D3";

export const metadata: Metadata = {
  title: {
    default: "Solar Energy Solutions in Tirupati | AeroSun Energy",
    template: "%s | AeroSun Energy",
  },
  description:
    "AeroSun Energy is based in Tirupati, Andhra Pradesh, offering solar, wind, and hybrid energy solutions for homes, farms, businesses, and industries.",
  keywords: [
    "solar energy",
    "wind energy",
    "solar energy panels",
    "wind energy turbines",
    "renewable energy",
    "hybrid energy systems",
    "solar power solutions",
    "wind power solutions",
    "solar energy solutions",
    "solar panel installation",
    "renewable energy solutions",
    "solar wind hybrid solutions",
    "AeroSun Energy",
    "solar energy in India",
    "on-grid solar systems",
    "off-grid solar systems",
    "hybrid power solutions",
    "wind energy solutions",
    "solar energy in Tirupati",
    "wind energy in Tirupati",
    "solar energy solutions in Tirupati",
    "solar power in Tirupati",
    "solar panel installation in Tirupati",
    "rooftop solar in Tirupati",
    "solar company in Tirupati",
    "solar installer in Tirupati",
    "rooftop solar company in Tirupati",
    "solar for homes in Tirupati",
    "solar for businesses in Tirupati",
    "solar for farms in Tirupati",
    "agricultural solar power in Tirupati",
    "solar water pumping system in Tirupati",
    "commercial solar systems in Tirupati",
    "industrial solar systems in Tirupati",
    "on-grid solar in Tirupati",
    "off-grid solar in Tirupati",
    "hybrid solar systems in Tirupati",
    "wind power solutions in Tirupati",
    "wind energy solutions in Tirupati",
    "solar wind hybrid systems in Tirupati",
    "renewable energy company in Tirupati",
    "renewable energy solutions in Tirupati Andhra Pradesh",
  ],
  metadataBase: new URL("https://aerosunenergy.in"),
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  applicationName: "AeroSun Energy",
  authors: [{ name: "AeroSun Energy", url: "https://aerosunenergy.in" }],
  creator: "AeroSun Energy",
  publisher: "AeroSun Energy",
  category: "Renewable Energy",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://aerosunenergy.in",
    languages: {
      "en-IN": "https://aerosunenergy.in",
      en: "https://aerosunenergy.in",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Solar Energy Solutions in Tirupati | AeroSun Energy",
    description:
      "Based in Tirupati, Andhra Pradesh, AeroSun Energy provides solar, wind, and hybrid energy solutions for homes, farms, businesses, and industries.",
    url: "https://aerosunenergy.in",
    siteName: "AeroSun Energy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://aerosunenergy.in/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "AeroSun Energy – Solar & Wind Energy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Energy Solutions in Tirupati | AeroSun Energy",
    description:
      "Based in Tirupati, Andhra Pradesh, AeroSun Energy provides solar, wind, and hybrid renewable energy solutions.",
    images: ["https://aerosunenergy.in/images/og-image.webp"],
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": BING_SITE_VERIFICATION,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#052e1e",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} ${orbitron.variable} bg-white text-gray-900 transition-colors duration-150`}
      >
        {/* Keep the body free of the dark class while dark mode is temporarily paused. */}
        <SiteChrome
          gtmId={GTM_ID}
          googleAdsId={GOOGLE_ADS_ID}
          gaMeasurementId={GA_MEASUREMENT_ID}
        >
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
