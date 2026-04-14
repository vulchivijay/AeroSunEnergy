import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AeroSun Energy | Solar & Wind Energy Solutions',
  description: 'Renewable energy solutions using solar and wind power',
  keywords: ['solar energy', 'wind energy', 'renewable energy', 'AeroSun Energy', 'clean energy'],
  metadataBase: new URL('https://aerosunenergy.in'),
  openGraph: {
    title: 'AeroSun Energy | Solar & Wind Energy Solutions',
    description: 'Renewable energy solutions using solar and wind power',
    url: 'https://aerosunenergy.in',
    siteName: 'AeroSun Energy',
    locale: 'en_IN',
    type: 'website',
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
        {children}
      </body>
    </html>
  )
}
