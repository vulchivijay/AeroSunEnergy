import Image from "next/image"


export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-1">
      <Image
        src="/images/logo.png"
        alt="AeroSun Energy logo"
        width={80}
        height={80}
        priority
        className="h-auto w-[80px]"
        style={{ height: 'auto', width: '80px' }}
      />
      <div className="flex flex-col">
        <div className="flex">
          <span className="text-3xl font-extrabold bg-clip-text bg-linear-to-r from-blue-800 via-blue-700 to-blue-600 drop-shadow-xl text-transparent tracking-wider">Aero</span>
          <span className="text-3xl font-extrabold bg-clip-text bg-linear-to-r from-green-800 via-green-700 to-green-600 drop-shadow-xl text-transparent tracking-wider ml-1">Sun</span>
        </div>
        <div className="inline-flex text-md uppercase text-yellow-500 font-semibold">------ E n e r g y ------</div>
        <div className="inline-flex text-xs text-gray-900">Power from Sun and Wind</div>
      </div>
    </a>
  )
}