"use client"

import React from 'react'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-slate-900/80">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-16 rounded-full border-4 border-[#20A44A]/30 border-t-4 border-t-[#20A44A] animate-spin" />
        <div className="space-y-3">
          <div className="h-6 w-72 skeleton skeleton-rect" />
          <div className="h-4 w-56 skeleton skeleton-rect" />
        </div>
      </div>
    </div>
  )
}
