'use client'

import Image from 'next/image'
import Link from "next/link"
import { useLocale } from '@/lib/LocaleContext'

export default function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale()

  return (
    <Link
      href="/"
      title={t.logo.homeTitle}
      aria-label={t.logo.homeAriaLabel}
      data-logo="brand"
      className={`relative flex items-center gap-2 font-(--font-logo) ${compact ? 'w-max max-w-auto' : 'max-w-full'}`}
    >
      <Image
        src="/images/logo.webp"
        alt={t.logo.imageAlt}
        width={512}
        height={401}
        priority
        className="h-auto w-20 shrink-0 object-contain"
      />
      <div className="flex min-w-0 flex-col items-start justify-center text-left">
        <div className={`flex items-center justify-start ${compact ? 'gap-0.5' : 'gap-1'}`}>
          <span data-brand-name className={compact ? 'relative whitespace-nowrap pr-2 text-2xl font-bold tracking-wider text-[#20A44A] drop-shadow-xl' : 'relative whitespace-nowrap pr-3 text-2xl font-bold tracking-wider text-[#20A44A] drop-shadow-xl'}>
            AeroSun<sup className={`absolute right-0 text-[12px] ${compact ? 'top-1 text-white' : 'top-2 text-black'}`}>TM</sup>
          </span>
          <span data-brand-name className={`whitespace-nowrap text-2xl font-bold tracking-wider drop-shadow-xl ${compact ? 'text-[#F59E0B]' : 'text-[#F59E0B]'}`}>
            Energy
          </span>
        </div>
        <div className={compact ? 'whitespace-nowrap text-[12px] text-white' : 'whitespace-nowrap text-[12px] text-black'}>
          ---- Power from Sun, Wind, Water, Fire ----
        </div>
      </div>
    </Link>
  )
}
