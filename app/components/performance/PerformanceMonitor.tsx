'use client'

import { useEffect } from 'react'

const REPORT_KEY = 'aerosun_performance_report'

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
      const paintEntries = performance.getEntriesByType('paint')
      const layoutShiftEntries = performance.getEntriesByType('layout-shift') as PerformanceEntry[]
      const firstPaint = paintEntries.find((entry) => entry.name === 'first-paint')
      const firstContentfulPaint = paintEntries.find((entry) => entry.name === 'first-contentful-paint')

      const cls = layoutShiftEntries.reduce((sum, entry) => sum + ('value' in entry ? Number((entry as PerformanceEntry & { value?: number }).value ?? 0) : 0), 0)

      const metrics = {
        ttfb: navigation ? navigation.responseStart - navigation.startTime : 0,
        domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.startTime : 0,
        load: navigation ? navigation.loadEventEnd - navigation.startTime : 0,
        firstPaint: firstPaint ? firstPaint.startTime : 0,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
        cls: Number(cls.toFixed(4)),
        timestamp: Date.now(),
      }

      try {
        sessionStorage.setItem(REPORT_KEY, JSON.stringify(metrics))
      } catch {
        // storage is optional and should never break the page
      }

      if (process.env.NODE_ENV !== 'production') {
        console.table([
          { metric: 'TTFB', value: `${Math.round(metrics.ttfb)} ms` },
          { metric: 'DOMContentLoaded', value: `${Math.round(metrics.domContentLoaded)} ms` },
          { metric: 'Load', value: `${Math.round(metrics.load)} ms` },
          { metric: 'FCP', value: `${Math.round(metrics.firstContentfulPaint)} ms` },
          { metric: 'CLS', value: metrics.cls.toFixed(4) },
        ])
      }
    }

    if (document.readyState === 'complete') {
      handleLoad()
      return
    }

    window.addEventListener('load', handleLoad, { once: true })
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return null
}
