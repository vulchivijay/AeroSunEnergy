'use client'

import { useEffect, useState } from 'react'
import { DigitalNumber } from '@/app/components/ui/DigitalNumber'

const REPORT_KEY = 'aerosun_performance_report'

type Metrics = {
  ttfb: number
  domContentLoaded: number
  load: number
  firstPaint: number
  firstContentfulPaint: number
  cls: number
  timestamp: number
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<Metrics | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined
      const paintEntries = performance.getEntriesByType('paint')
      const layoutShiftEntries = performance.getEntriesByType('layout-shift') as PerformanceEntry[]
      const firstPaint = paintEntries.find((entry) => entry.name === 'first-paint')
      const firstContentfulPaint = paintEntries.find((entry) => entry.name === 'first-contentful-paint')

      const cls = layoutShiftEntries.reduce(
        (sum, entry) =>
          sum + ('value' in entry ? Number((entry as PerformanceEntry & { value?: number }).value ?? 0) : 0),
        0,
      )

      const nextMetrics: Metrics = {
        ttfb: navigation ? navigation.responseStart - navigation.startTime : 0,
        domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.startTime : 0,
        load: navigation ? navigation.loadEventEnd - navigation.startTime : 0,
        firstPaint: firstPaint ? firstPaint.startTime : 0,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
        cls: Number(cls.toFixed(4)),
        timestamp: Date.now(),
      }

      setMetrics(nextMetrics)

      try {
        sessionStorage.setItem(REPORT_KEY, JSON.stringify(nextMetrics))
      } catch {
        // storage is optional and should never break the page
      }

      if (process.env.NODE_ENV !== 'production') {
        console.table([
          { metric: 'TTFB', value: `${Math.round(nextMetrics.ttfb)} ms` },
          { metric: 'DOMContentLoaded', value: `${Math.round(nextMetrics.domContentLoaded)} ms` },
          { metric: 'Load', value: `${Math.round(nextMetrics.load)} ms` },
          { metric: 'FCP', value: `${Math.round(nextMetrics.firstContentfulPaint)} ms` },
          { metric: 'CLS', value: nextMetrics.cls.toFixed(4) },
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

  if (process.env.NODE_ENV === 'production') {
    return null
  }

  const rows = metrics
    ? [
        { label: 'TTFB', value: `${Math.round(metrics.ttfb)}ms` },
        { label: 'FCP', value: `${Math.round(metrics.firstContentfulPaint)}ms` },
        { label: 'CLS', value: metrics.cls.toFixed(4) },
      ]
    : [{ label: 'Perf', value: 'Loading…' }]

  return (
    <div className="fixed bottom-4 right-4 z-40 rounded-xl border border-slate-700 bg-slate-950/85 px-3 py-2 text-xs font-medium shadow-md backdrop-blur-sm tracking-normal ">
      <div className="mb-1 flex items-center gap-2 uppercase text-sky-300 text-xs font-semibold tracking-wide leading-5">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm" />
        Perf
      </div>
      <div className="space-y-1 text-slate-200 ">
        {rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-4 ">
            <span className="text-slate-400">{row.label}</span>
            <span className="font-semibold text-white tracking-normal tabular-nums"><DigitalNumber value={row.value} /></span>
          </div>
        ))}
      </div>
    </div>
  )
}
