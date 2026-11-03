type Gtag = (command: string, action: string, parameters: Record<string, string | number>) => void

declare global {
  interface Window {
    dataLayer?: IArguments[]
    gtag?: Gtag
  }
}

export function trackGoogleAdsConversion() {
  if (typeof window === 'undefined') {
    return
  }

  if (window.localStorage.getItem('aerosun_cookie_consent') !== 'accepted') {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer?.push(arguments)
  }

  window.gtag('event', 'conversion', {
    send_to: 'AW-18551268371/ZzetCLuvrbAdEJPI941F',
    value: 1.0,
    currency: 'INR',
  })
}
