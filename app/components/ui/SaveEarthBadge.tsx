import Image from 'next/image'

export default function SaveEarthBadge() {
  return (
    <div className="fixed bottom-20 left-4 z-50 md:bottom-24 md:left-5">
      <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-2 shadow-[0_18px_38px_-24px_rgba(16,185,129,0.7)] backdrop-blur-sm dark:border-emerald-500/30 dark:bg-slate-900/80">
        <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-500/10">
          <Image
            src="/images/globe.png"
            alt="Globe icon"
            width={24}
            height={24}
            className="h-4 w-4 animate-[spin_8s_linear_infinite] object-cover md:h-5 md:w-5"
          />
        </span>

        <span className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 dark:text-emerald-300 md:text-[11px]">
          SAVE EARTH
        </span>
      </div>
    </div>
  )
}
