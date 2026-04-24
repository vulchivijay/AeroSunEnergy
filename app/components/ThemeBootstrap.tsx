'use client'

import { useEffect } from 'react'

export default function ThemeBootstrap() {
  useEffect(() => {
    try {
      const html = document.documentElement
      const theme = localStorage.getItem('theme')

      if (theme === 'dark') {
        html.classList.add('dark')
      } else {
        html.classList.remove('dark')
      }
    } catch {
      // Ignore storage access failures.
    }
  }, [])

  return null
}