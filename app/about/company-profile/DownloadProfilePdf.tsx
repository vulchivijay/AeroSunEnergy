'use client'

import { Download } from 'lucide-react'

export default function DownloadProfilePdf() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-lime-300 px-5 py-2.5 text-sm font-bold text-emerald-950 transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      Download Company Profile PDF
    </button>
  )
}
