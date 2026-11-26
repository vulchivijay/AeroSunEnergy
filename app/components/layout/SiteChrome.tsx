'use client'

import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LocaleProvider } from '@/lib/LocaleContext'
import en from '@/public/locales/en/index.json'
import ProductionProtector from './chrome/ProductionProtector'
import ConsentAwareTracking from './chrome/ConsentAwareTracking'
import PerformanceMonitor from './chrome/PerformanceMonitor'
import ToastProvider from './chrome/ToastProvider'
import NetworkStatus from './chrome/NetworkStatus'
import Notifications from './chrome/Notifications'
import Navbar from './chrome/SiteNavbar'
import Footer from './chrome/SiteFooter'
import BackToTop from './chrome/BackToTop'

const DeferredOverlays = dynamic(() => import('./DeferredOverlays'), {
  ssr: false,
  loading: () => null,
})

function DeferredOverlayLoader() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  return isReady ? <DeferredOverlays /> : null
}

export default function SiteChrome({
  children,
  gtmId,
  googleAdsId,
  gaMeasurementId,
}: {
  children: ReactNode
  gtmId?: string
  googleAdsId?: string
  gaMeasurementId?: string
}) {
  const pathname = usePathname() ?? ''
  const isDashboardRoute = pathname === '/auth/dashboard' || pathname.startsWith('/auth/dashboard/')

  return (
    <>
      {process.env.NODE_ENV === 'production' ? <ProductionProtector /> : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(en.componentData.jsonLdSchema) }}
      />
      <ConsentAwareTracking
        gtmId={gtmId}
        googleAdsId={googleAdsId}
        gaMeasurementId={gaMeasurementId}
      />
      {process.env.NODE_ENV !== 'production' ? <PerformanceMonitor /> : null}
      <LocaleProvider>
        <ToastProvider>
          <NetworkStatus />
          {!isDashboardRoute && <Notifications />}
          <DeferredOverlayLoader />
          {!isDashboardRoute && <Navbar />}
          {children}
          {!isDashboardRoute && <Footer />}
          <BackToTop />
        </ToastProvider>
      </LocaleProvider>
    </>
  )
}
