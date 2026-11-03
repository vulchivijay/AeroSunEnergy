'use client'

import { useEffect, useState } from 'react'
import { RefreshCw, WifiOff } from 'lucide-react'

export function NetworkStatus() {
  const [isOffline, setIsOffline] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)
  const [retryMessage, setRetryMessage] = useState('')

  useEffect(() => {
    const updateConnection = () => {
      setIsOffline(!navigator.onLine)
      setHasMounted(true)
    }

    updateConnection()
    window.addEventListener('online', updateConnection)
    window.addEventListener('offline', updateConnection)

    return () => {
      window.removeEventListener('online', updateConnection)
      window.removeEventListener('offline', updateConnection)
    }
  }, [])

  if (!hasMounted || !isOffline) return null

  function retry() {
    if (navigator.onLine) {
      window.location.reload()
      return
    }

    setRetryMessage('Your device is still offline. This notice will update when the connection returns.')
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative z-[70] flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-[#f5c76a]/20 bg-[#092d25] px-4 py-3 text-center text-md text-white"
    >
      <WifiOff className="h-4 w-4 shrink-0 text-[#f5c76a]" aria-hidden="true" />
      <p>
        You appear to be offline. Check your internet connection; the AeroSun website may still be available once you reconnect.
      </p>
      <button
        type="button"
        onClick={retry}
        className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/20 px-3 py-1.5 text-md font-semibold text-[#d6e8b9] transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6e8b9]"
      >
        <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
        Check connection
      </button>
      {retryMessage && <span className="sr-only" aria-live="polite">{retryMessage}</span>}
    </div>
  )
}
