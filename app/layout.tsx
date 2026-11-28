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

const GTM_ID =
  process.env._NEXT_PUBLIC_GTM_ID ||
  process.env._NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID ||
  "GTM-MFRLD628";
const GOOGLE_ADS_ID = process.env._NEXT_PUBLIC_GOOGLE_ADS_ID;
const GA_MEASUREMENT_ID =
  process.env._NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ||
  process.env._NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  process.env._NEXT_PUBLIC_GA_STREAM_ID;
const GOOGLE_SITE_VERIFICATION =
  process.env._NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  "4ake-o4myYSacZqH6saBrPJVLpD7JqBSdZr7OKjy6sk";
const BING_SITE_VERIFICATION =
  process.env.BING_SITE_VERIFICATION || "CFCE648996D804079C4F28B5C09CE9D3";

export const metadata: Metadata = {
  title: {
    default: "Explore solar, wind, and hybrid renewable energy solutions | AeroSun Energy Private Limited",
    template: "%s | AeroSun Energy Private Limited",
  },
  description:
    "Discover solar, wind, and hybrid renewable energy solutions for homes, farms, and businesses, including rooftop solar, battery storage, and small wind systems.",
  keywords: [
    "solar energy",
    "solar panels",
    "solar panel price in India",
    "rooftop solar installation",
    "rooftop solar subsidy",
    "PM Surya Ghar Muft Bijli Yojana",
    "solar power system",
    "solar inverter",
    "solar battery storage",
    "on-grid solar system",
    "off-grid solar system",
    "hybrid solar system",
    "solar wind hybrid system",
    "wind energy",
    "wind turbines",
    "small wind turbine for farms",
    "renewable energy",
    "clean energy solutions",
    "AeroSun Energy",
    "solar energy in India",
    "solar power",
    "solar electricity",
    "solar installation",
    "sun energy",
    "solar power for homes",
    "solar energy system",
    "solar panels for homes",
    "solar energy solutions",
    "solar for home",
    "solar home system",
    "rooftop solar",
    "residential solar",
    "wind and solar",
    "solar energy panels",
    "solar power energy",
    "solar options",
    "solar for your home",
    "solar panels for home use",
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
    title: "Explore solar, wind, and hybrid renewable energy solutions | AeroSun Energy Private Limited",
    description:
      "Discover solar, wind, and hybrid renewable energy solutions for homes, farms, and businesses, including rooftop solar, battery storage, and small wind systems.",
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
    title: "Explore solar, wind, and hybrid renewable energy solutions | AeroSun Energy Private Limited",
    description:
      "Discover solar, wind, and hybrid renewable energy solutions, including rooftop solar, battery storage, and small wind systems.",
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
