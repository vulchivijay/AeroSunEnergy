import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore renewable energy research and development',
  description: 'Secure research and development workspace for authorized AeroSun Energy users.',
  keywords: [
    'solar energy research and development',
    'small wind energy research',
    'hybrid renewable energy prototypes',
    'solar system testing and development',
    'AeroSun Energy research',
    'renewable energy technology research',
    'solar panel performance testing',
    'small wind turbine development',
    'hybrid energy system design',
    'solar prototype specifications',
    'renewable energy engineering projects',
    'solar and wind testing methods',
    'distributed energy innovation',
    'AeroSun renewable technology',
    'clean energy research projects',
  ],
  alternates: {
    canonical: '/auth/dashboard/research-development',
  },
  openGraph: {
    title: 'Explore renewable energy research and development | AeroSun Energy Private Limited',
    description: 'Secure research and development workspace for authorized AeroSun Energy users.',
    url: 'https://aerosunenergy.in/auth/dashboard/research-development',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function ResearchDevelopmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
