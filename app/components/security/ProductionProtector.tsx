"use client"

import { useEffect } from 'react'

export default function ProductionProtector() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    const onContext = (e: MouseEvent) => {
      e.preventDefault()
    }

    const onKey = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase()
      if (key === 'F12') e.preventDefault()
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(key)) e.preventDefault()
      if (e.ctrlKey && key === 'U') e.preventDefault()
    }

    document.addEventListener('contextmenu', onContext, true)
    document.addEventListener('keydown', onKey, true)

    return () => {
      document.removeEventListener('contextmenu', onContext, true)
      document.removeEventListener('keydown', onKey, true)
    }
  }, [])

  return null
}
