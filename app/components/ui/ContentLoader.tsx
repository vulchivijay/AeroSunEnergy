"use client"

import React from 'react'

export function ContentLoader({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="h-16 w-16 skeleton skeleton-circle" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 skeleton skeleton-rect" />
            <div className="h-3 w-1/2 skeleton skeleton-rect" />
          </div>
        </div>
      ))}
    </div>
  )
}
