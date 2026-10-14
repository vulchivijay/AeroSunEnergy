"use client"

import Image from 'next/image'
import React, { useState } from 'react'

export default function LordGanesha(): React.ReactElement {
  const [open, setOpen] = useState(true)

  if (!open) return <></>

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-4 w-full max-w-xl rounded-lg bg-white p-6 text-gray-900 shadow-lg dark:bg-gray-800 dark:text-gray-100">
        <button
          aria-label="Close"
          className="absolute right-3 top-3 rounded p-1 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col items-center gap-2">
          <div>
            <Image
              src="/images/lordganesha.png"
              alt="AeroSun Energy logo"
              width={180}
              height={60}
              priority
              className='m-auto'
            />
          </div>
          <h2 className="text-xl font-semibold">Lord Ganesha</h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Welcome — blessing modal shown on first load. Click close to dismiss.
          </p>
          <div className="mt-2 flex w-full justify-center">
            <button
              onClick={() => setOpen(false)}
              className="rounded bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
