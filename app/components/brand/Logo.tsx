'use client'

import { OptimizedImage } from '@/app/components/ui'
import Link from "next/link"
import { useLocale } from '@/lib/LocaleContext'

export default function Logo() {
  const { t } = useLocale()

  return (
    <Link
      href="/"
      title={t.logo.homeTitle}
      aria-label={t.logo.homeAriaLabel}
      data-logo="brand"
      className="relative flex max-w-full items-center gap-2 font-(--font-logo) sm:gap-3"
    >
      <OptimizedImage
        src="/images/logo.png"
        alt={t.logo.imageAlt}
        width={80}
        height={80}
        priority
        loading="eager"
      />
      <div className="flex min-w-0 flex-col items-start justify-center text-left sm:mb-2">
        <div className="flex items-center justify-start gap-1">
          <span className={`text-2xl font-bold text-[#20A44A] tracking-wider drop-shadow-xl`}>
            AeroSun <sup classname={'text-black text-sm'}>TM</sup>
          </span>
          <span className={`text-2xl font-bold text-[#F59E0B] tracking-wider drop-shadow-xl`}>
            Energy
          </span>
        </div>
        <div className={`text-[12px] whitespace-nowrap text-[#18251F]`}>
          ---- Power from Sun and Wind ----
        </div>
      </div>
    </Link>
  )
}
