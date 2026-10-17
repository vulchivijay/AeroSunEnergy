'use client'

import { useEffect } from 'react'

export default function ThemeBootstrap() {
  useEffect(() => {
    try {
      const html = document.documentElement
      const savedTheme = localStorage.getItem('theme')

      if (savedTheme === 'dark') {
        html.classList.add('dark')
        return
      }

      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } catch {
      // Ignore storage access failures.
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return null
}