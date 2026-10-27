'use client'

import { useEffect } from 'react'

const ZEROBOUNCE_WIDGET_URL = 'https://www.zerobounce.net/widget/ZeroBounceJsWidget.js'
const ZEROBOUNCE_CONFIG = 'eyJhcGlLZXkiOiJiZmY4NjY5OGM0MDk0NWE2YTVjMjE5YTI3ZmYzZmI4YSIsImRvbWFpbiI6ImFlcm9zdW5lbmVyZ3kuaW4iLCJ0aHJvdHRsZUxpbWl0IjoxMDAwLCJhbGxvd2VkU3RhdHVzZXMiOnsidmFsaWQiOnRydWUsImludmFsaWQiOmZhbHNlLCJjYXRjaC1hbGwiOnRydWUsInVua25vd24iOnRydWUsInNwYW10cmFwIjpmYWxzZSwiYWJ1c2UiOmZhbHNlLCJkb19ub3RfbWFpbCI6ZmFsc2V9LCJ0aHJvdHRsZUxpbWl0QmVoYXZpb3IiOiJhbGxvdyIsInRpbWVvdXRMaW1pdEJlaGF2aW9yIjoiYWxsb3ciLCJ0aW1lb3V0TGltaXQiOjYwLCJub25BY2NlcHRlZFN0YXR1c0JlaGF2aW9yIjoiYmxvY2siLCJzdHlsaW5nIjoiZGVmYXVsdCJ9'

export function ZeroBounceWidget() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-zerobounce-widget="true"]')
    if (existingScript) {
      if ((window as typeof window & { ZBWidget?: { init: (config: string) => void } }).ZBWidget) {
        ;(window as typeof window & { ZBWidget?: { init: (config: string) => void } }).ZBWidget?.init(ZEROBOUNCE_CONFIG)
      }
      return
    }

    const script = document.createElement('script')
    script.src = ZEROBOUNCE_WIDGET_URL
    script.async = true
    script.dataset.zerobounceWidget = 'true'
    script.onload = () => {
      const zbWidget = (window as typeof window & { ZBWidget?: { init: (config: string) => void } }).ZBWidget
      zbWidget?.init(ZEROBOUNCE_CONFIG)
    }

    document.head.appendChild(script)
  }, [])

  return null
}
