"use client"

import React from 'react'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/85 backdrop-blur-sm dark:bg-slate-950/80">
      <div className="w-full max-w-md px-6">
        <div className="mb-6 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-600 dark:text-slate-300">
          <span>Loading</span>
          <span className="inline-flex items-center gap-2">
            <span className="page-loader-spinner h-3.5 w-3.5 rounded-full border-2 border-[#20A44A]/30 border-t-[#20A44A]" />
            Route
          </span>
        </div>

        <div className="page-loader-track relative h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
          <div className="page-loader-progress absolute inset-y-0 left-0 w-1/3 rounded-full bg-linear-to-r from-[#20A44A] via-[#34d399] to-[#f59e0b]" />
        </div>
      </div>
    </div>
  )
}
