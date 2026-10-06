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
    <Link href="/" title={t.logo.homeTitle} aria-label={t.logo.homeAriaLabel} data-logo="brand" className={`relative flex items-center font-(--font-logo)`}>
      <Image
        src="/images/logo-transparent.png"
        alt={t.logo.imageAlt}
        width={isFooter ? 112 : 96}
        height={isFooter ? 112 : 96}
        className={isFooter ? 'h-auto w-32' : 'h-auto w-24 md:w-32'}
        priority
        loading="eager"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center">
          <span className={`${isFooter ? 'text-[2rem]' : 'text-3xl'} font-bold text-[#20A44A] drop-shadow-xl tracking-wider`}>AeroSun</span>
          <span className={`${isFooter ? 'text-[2rem]' : 'text-3xl'} ml-1 font-bold text-[#F59E0B] drop-shadow-xl tracking-wider`}>Energy</span>
          <span className=""></span>
        </div>
        <div className={`${isFooter ? 'text-md' : 'text-sm'} uppercase text-[#18251F]`}> {`${isFooter ? '---' : ''}`}--- Power from Sun and Wind ---{`${isFooter ? '---' : ''}`}</div>
        {/* <div className={`${isFooter ? 'text-md' : 'text-sm'} text-gray-900 dark:text-gray-300`}>{t.logo.tagline}</div> */}
      </div>
    </Link>
  )
}