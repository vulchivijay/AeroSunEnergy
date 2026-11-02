'use client'

import { OptimizedImage } from '@/app/components/ui'
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
      <OptimizedImage
        src="/images/logo.png"
        alt={t.logo.imageAlt}
        width={80}
        height={80}
        priority
        loading="eager"
        className={compact ? '' : ''}
      />
      <div className="flex min-w-0 flex-col items-start justify-center text-left">
        <div className={`flex items-center justify-start ${compact ? 'gap-0.5' : 'gap-1'}`}>
          <span data-brand-name className={compact ? 'relative whitespace-nowrap pr-2 text-2xl font-bold tracking-wider text-[#20A44A] drop-shadow-xl' : 'relative whitespace-nowrap pr-3 text-2xl font-bold tracking-wider text-[#20A44A] drop-shadow-xl'}>
            AeroSun<sup className={`absolute right-0 text-[8px] ${compact ? 'top-1 text-white' : 'top-2 text-black'}`}>TM</sup>
          </span>
          <span data-brand-name className={compact ? 'whitespace-nowrap text-2xl font-bold tracking-wider text-[#F59E0B] drop-shadow-xl' : 'whitespace-nowrap text-2xl font-bold tracking-wider text-[#F59E0B] drop-shadow-xl'}>
            Energy
          </span>
        </div>
        <div className={compact ? 'whitespace-nowrap text-[11px] text-white' : 'whitespace-nowrap text-[12px] text-black'}>
          ---- Power from Sun, Wind, Water, Fire ----
        </div>
      </div>
    </Link>
  )
}
