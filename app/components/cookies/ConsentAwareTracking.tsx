'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/LocaleContext'

const COOKIE_KEY = 'aerosun_cookie_consent'

export default function ConsentAwareTracking({
  gtmId,
  gaMeasurementId,
}: {
  gtmId?: string
  gaMeasurementId?: string
}) {
  const { t } = useLocale()
  const adsTagIds = t.componentData.consentAwareTracking.adsTagIds
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      setHasConsent(window.localStorage.getItem(COOKIE_KEY) === 'accepted')
    }

    const handleConsentChange = (event: Event) => {
      const choice = (event as CustomEvent<{ choice?: string }>).detail?.choice
      setHasConsent(choice === 'accepted')
    }

    syncConsent()
    window.addEventListener('aerosun-cookie-consent', handleConsentChange)
    window.addEventListener('storage', syncConsent)

    return () => {
      window.removeEventListener('aerosun-cookie-consent', handleConsentChange)
      window.removeEventListener('storage', syncConsent)
    }
  }, [])

  if (!hasConsent) return null

  if (gtmId) {
    return (
      <>
        <Script id="google-tag-manager-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          `}
        </Script>
        <Script
          id="google-tag-manager"
          src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
          strategy="lazyOnload"
        />
      </>
    )
  }

  const gtagId = gaMeasurementId || adsTagIds[0]

  return (
    <>
      <Script
        id="google-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
        strategy="lazyOnload"
      />
      <Script id="google-gtag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          ${gaMeasurementId ? `gtag('config', '${gaMeasurementId}');` : ''}
          ${adsTagIds.map((id) => `gtag('config', '${id}');`).join('\n')}
        `}
      </Script>
    </>
  )
}
