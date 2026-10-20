"use client"

import { useEffect, useState } from 'react'

export default function ProductionProtector() {
  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    const isMobileDevice = () => {
      if (typeof navigator === 'undefined') return false
      const coarsePointer = window.matchMedia && window.matchMedia('(pointer: coarse)').matches
      const smallScreen = window.innerWidth <= 768 || window.innerHeight <= 640
      const userAgent = navigator.userAgent || ''
      const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      return Boolean(coarsePointer || smallScreen || mobileUA)
    }

    if (isMobileDevice()) return

    const onContext = (e: MouseEvent) => {
      try {
        e.preventDefault()
      } catch {}
    }

    const onKey = (e: KeyboardEvent) => {
      try {
        const key = e.key?.toUpperCase()
        if (key === 'F12') e.preventDefault()
        if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(key)) e.preventDefault()
        if (e.ctrlKey && key === 'U') e.preventDefault()
      } catch {}
    }

    const detectBySize = () => {
      try {
        const threshold = 160
        const widthDiff = Math.abs(window.outerWidth - window.innerWidth)
        const heightDiff = Math.abs(window.outerHeight - window.innerHeight)
        return widthDiff > threshold || heightDiff > threshold
      } catch {
        return false
      }
    }

    const detectByConsole = () => {
      try {
        let detected = false
        const element: any = new Image()
        Object.defineProperty(element, 'id', {
          get() {
            detected = true
            return 'devtools'
          },
        })
        // console.log will trigger getter when devtools console is open
        // eslint-disable-next-line no-console
        console.log(element)
        return detected
      } catch {
        return false
      }
    }

    const check = () => {
      try {
        if (detectBySize()) return true
        if (detectByConsole()) return true
      } catch {}
      return false
    }

    let last = false
    const id = window.setInterval(() => {
      const open = check()
      if (open && !last) {
        last = true
        setBlocked(true)
      } else if (!open) {
        last = false
        setBlocked(false)
      }
    }, 700)

    // Prevent selection and copy and block right-click (capture phase)
    const onSelectStart = (e: Event) => {
      if (blocked) e.preventDefault()
    }

    const onMouseDown = (e: MouseEvent) => {
      try {
        if ('button' in e && e.button === 2) e.preventDefault()
      } catch {}
    }

    document.addEventListener('contextmenu', onContext, true)
    document.addEventListener('mousedown', onMouseDown, true)
    document.addEventListener('keydown', onKey, true)
    document.addEventListener('selectstart', onSelectStart)

    return () => {
      clearInterval(id)
      document.removeEventListener('contextmenu', onContext, true)
      document.removeEventListener('mousedown', onMouseDown, true)
      document.removeEventListener('keydown', onKey, true)
      document.removeEventListener('selectstart', onSelectStart)
    }
  }, [blocked])

  if (!blocked) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        background: 'rgba(0,0,0,0.96)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        userSelect: 'none',
        pointerEvents: 'auto',
      }}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
      onDoubleClick={(e) => e.preventDefault()}
    >
      <div>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Developer tools detected</h2>
        <p style={{ opacity: 0.9, maxWidth: 720 }}>
          For security reasons this page has been locked. Please close developer tools to continue.
        </p>
      </div>
    </div>
  )
}
