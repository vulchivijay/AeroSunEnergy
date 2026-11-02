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
      className={`relative flex items-center gap-2 font-(--font-logo) ${compact ? 'w-max max-w-none shrink-0' : 'max-w-full'}`}
    >
      <OptimizedImage
        src="/images/logo.png"
        alt={t.logo.imageAlt}
        width={80}
        height={80}
        priority
        loading="eager"
        className={compact ? 'h-10 w-10 shrink-0 rounded-xl bg-white sm:h-12 sm:w-12 [&_img]:object-contain' : ''}
      />
      <div className="flex min-w-0 flex-col items-start justify-center text-left">
        <div className={`flex items-center justify-start ${compact ? 'gap-0.5' : 'gap-1'}`}>
          <span data-brand-name className={compact ? 'relative whitespace-nowrap pr-2 text-[1.15rem] font-bold tracking-wide text-[#20A44A] drop-shadow-sm sm:text-xl' : 'relative whitespace-nowrap pr-3 text-2xl font-bold tracking-wider text-[#20A44A] drop-shadow-xl'}>
            AeroSun<sup className={`absolute right-0 text-[6px] text-black ${compact ? 'top-1' : 'top-2'}`}>TM</sup>
          </span>
          <span data-brand-name className={compact ? 'whitespace-nowrap text-[1.15rem] font-bold tracking-wide text-[#F59E0B] drop-shadow-sm sm:text-xl' : 'whitespace-nowrap text-2xl font-bold tracking-wider text-[#F59E0B] drop-shadow-xl'}>
            Energy
          </span>
        </div>
        <div className={compact ? 'whitespace-nowrap text-[9px] text-[#18251F] sm:text-[10px]' : 'whitespace-nowrap text-[12px] text-[#18251F]'}>
          ---- Power from Sun and Wind ----
        </div>
      </div>
    </Link>
  )
}
