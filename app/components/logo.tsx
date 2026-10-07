'use client'

import Image from "next/image"
import Link from "next/link"

import { useLocale } from '@/app/lib/LocaleContext'

type LogoProps = {
  size?: 'default' | 'footer'
}

export default function Logo({ size = 'default' }: LogoProps) {
  const isFooter = size === 'footer'
  const { t } = useLocale()

  return (
    <Link
      href="/"
      title={t.logo.homeTitle}
      aria-label={t.logo.homeAriaLabel}
      data-logo="brand"
      className="relative flex max-w-full items-center gap-2 font-(--font-logo) sm:gap-3"
    >
      <Image
        src="/images/logo-transparent.png"
        alt={t.logo.imageAlt}
        width={90}
        height={90}
        className={isFooter ? 'h-auto w-20 sm:w-24' : 'h-auto w-16 sm:w-24 md:w-28'}
        priority
        loading="eager"
      />
      <div className="flex min-w-0 flex-col items-start justify-center text-left sm:mb-2">
        <div className="flex flex-wrap items-center justify-start gap-1">
          <span className={`text-3xl font-bold text-[#20A44A] tracking-wider drop-shadow-xl`}>
            AeroSun
          </span>
          <span className={`text-3xl font-bold text-[#F59E0B] tracking-wider drop-shadow-xl`}>
            Energy
          </span>
        </div>
        <div className={`text-[16px] ${isFooter ? '' : 'sm:block'} whitespace-nowrap text-[#18251F]`}>
          --- Power from Sun and Wind ---
        </div>
      </div>
    </Link>
  )
}