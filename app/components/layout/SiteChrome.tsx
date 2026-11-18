'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? ''
  const isDashboardRoute = pathname === '/auth/dashboard' || pathname.startsWith('/auth/dashboard/')

  return (
    <>
      {!isDashboardRoute && <Header />}
      {children}
      {!isDashboardRoute && <Footer />}
    </>
  )
}
