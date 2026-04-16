import Image from "next/image"


export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-1">
      <Image src="/images/logo.png" alt="AeroSun Energy logo" width={80} height={80} priority className="h-auto w-[80px]" />
      <div className="flex flex-col">
        <div className="flex">
          <span className="text-3xl font-extrabold bg-clip-text bg-linear-to-r from-amber-600 via-rose-600 to-indigo-700 drop-shadow-xl text-transparent">Aero</span>
          <span className="text-3xl font-extrabold bg-clip-text bg-linear-to-r from-amber-600 via-rose-600 to-indigo-700 drop-shadow-xl text-transparent ml-1">Sun</span>
        </div>
        <div className="inline-flex text-sm uppercase">-------- E n e r g y --------</div>
        <div className="inline-flex text-xs">Power from Sun and Wind</div>
      </div>
    </a>
  )
}