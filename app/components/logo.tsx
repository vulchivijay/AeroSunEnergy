import Image from "next/image"
import Link from "next/link"


export default function Logo() {
  return (
    <Link href="#" className="flex items-center gap-1 relative">
      <Image
        src="/images/logo-aerosunenergy.png"
        alt="AeroSun Energy logo"
        width={96}
        height={96}
        className="w-24 h-auto"
        priority
      />
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <span className="text-3xl font-extrabold bg-clip-text bg-linear-to-r from-blue-800 via-blue-700 to-blue-600 drop-shadow-xl text-transparent tracking-wider">Aero</span>
          <span className="text-3xl font-extrabold bg-clip-text bg-linear-to-r from-green-800 via-green-700 to-green-600 drop-shadow-xl text-transparent tracking-wider ml-1">Sun</span>
        </div>
        <div className="items-center justify-center text-md uppercase text-yellow-600 font-semibold">------ E n e r g y ------</div>
        <div className="items-center justify-center text-xs text-gray-900 dark:text-gray-500">Power from Sun and Wind</div>
      </div>
    </Link>
  )
}