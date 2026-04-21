import Image from "next/image"
import Link from "next/link"

type LogoProps = {
  size?: 'default' | 'footer'
}

export default function Logo({ size = 'default' }: LogoProps) {
  const isFooter = size === 'footer'

  return (
    <Link href="#" title="Go to AeroSun Energy homepage" aria-label="AeroSun Energy logo - go to homepage" data-logo="brand" className={`relative flex items-center`}>
      <Image
        src="/images/logo-aerosunenergy.png"
        alt="AeroSun Energy logo"
        width={isFooter ? 112 : 96}
        height={isFooter ? 112 : 96}
        className={isFooter ? 'h-auto w-28' : 'h-auto w-24'}
        priority
        loading="eager"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex items-center justify-center">
          <span className={`${isFooter ? 'text-[2.05rem]' : 'text-3xl'} font-semibold bg-clip-text bg-linear-to-r from-blue-800 via-blue-700 to-blue-600 drop-shadow-xl text-transparent tracking-wider`}>Aero</span>
          <span className={`${isFooter ? 'text-[2.05rem]' : 'text-3xl'} ml-1 font-semibold bg-clip-text bg-linear-to-r from-green-800 via-green-700 to-green-600 drop-shadow-xl text-transparent tracking-wider`}>Sun</span>
        </div>
        <div className={`${isFooter ? 'text-[1.03rem]' : 'text-md'} uppercase text-yellow-600 font-semibold`}> {`${isFooter ? '--' : ''}`}---- E n e r g y ----{`${isFooter ? '--' : ''}`}</div>
        <div className={`${isFooter ? 'text-sm' : 'text-xs'} text-gray-900 dark:text-gray-500`}>Power from Sun and Wind</div>
      </div>
    </Link>
  )
}