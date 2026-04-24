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
    <Link href="#" title={t.logo.homeTitle} aria-label={t.logo.homeAriaLabel} data-logo="brand" className={`relative flex items-center gap-1`}>
      <Image
        src="/images/logo-aerosunenergy.png"
        alt={t.logo.imageAlt}
        width={isFooter ? 112 : 96}
        height={isFooter ? 112 : 96}
        className={isFooter ? 'h-auto w-28' : 'h-auto w-24'}
        priority
        loading="eager"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center">
          <span className={`${isFooter ? 'text-[2rem]' : 'text-3xl'} font-semibold bg-clip-text bg-linear-to-r from-blue-800 via-blue-700 to-blue-600 drop-shadow-xl text-transparent tracking-wider`}>Aero</span>
          <span className={`${isFooter ? 'text-[2rem]' : 'text-3xl'} ml-1 font-semibold bg-clip-text bg-linear-to-r from-green-800 via-green-700 to-green-600 drop-shadow-xl text-transparent tracking-wider`}>Sun</span>
        </div>
        <div className={`${isFooter ? 'text-[1.03rem]' : 'text-lg'} uppercase text-yellow-700 dark:text-yellow-400 font-semibold`}> {`${isFooter ? '--' : ''}`}------ E n e r g y ------{`${isFooter ? '--' : ''}`}</div>
        <div className={`${isFooter ? 'text-sm' : 'text-sm'} text-gray-900 dark:text-gray-500`}>{t.logo.tagline}</div>
      </div>
    </Link>
  )
}