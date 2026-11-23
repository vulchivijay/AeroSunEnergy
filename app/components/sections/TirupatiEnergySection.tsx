'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLocale } from '@/lib/LocaleContext'

export default function TirupatiEnergySection({
  background = 'second',
}: {
  background?: 'first' | 'second'
}) {
  const { t } = useLocale()
  const content = t.tirupatiSeo
  const backgroundClassName =
    background === 'first'
      ? 'bg-gradient-to-br from-white to-[#f1f2f6]'
      : 'bg-gradient-to-br from-[#f1f2f6] to-white'

  return (
    <section className={`${backgroundClassName} p-4 sm:p-5`}>
      <div className="mx-auto max-w-[1648px]">
        <div className="relative isolate min-h-[34rem] overflow-hidden rounded-[1.25rem] border border-white/20 bg-[#091b49] shadow-xl shadow-slate-900/20 sm:min-h-[30rem] lg:min-h-[27rem]">
          <Image
            src="/images/tirupati-energy-scene.svg?v=13"
            alt=""
            fill
            unoptimized
            sizes="(min-width: 1688px) 1648px, calc(100vw - 2.5rem)"
            className="object-cover object-[right_55%] lg:object-[center_55%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071b49]/95 via-[#071b49]/60 to-[#071b49]/15 lg:bg-gradient-to-r lg:from-[#071b49]/95 lg:via-[#102868]/45 lg:via-55% lg:to-transparent" />
          <div className="pointer-events-none absolute right-[6%] top-0 z-[2] h-full w-32 sm:w-40 lg:w-56" aria-hidden="true">
            <div className="absolute bottom-[35%] left-1/2 top-[30%] w-3 -translate-x-1/2 rounded-t-full bg-gradient-to-r from-[#b5bfd0] via-[#f5f0e7] to-[#b5bfd0] shadow-md sm:w-3.5 lg:w-4" />
            <div className="absolute left-1/2 top-[calc(30%_-_4rem)] h-32 w-32 -translate-x-1/2 motion-safe:animate-[spin_24s_linear_infinite] motion-reduce:animate-none sm:top-[calc(30%_-_5rem)] sm:h-40 sm:w-40 lg:top-[calc(30%_-_7rem)] lg:h-56 lg:w-56">
              <svg viewBox="0 0 200 200" className="h-full w-full overflow-visible drop-shadow-md">
                <g transform="translate(100 100) rotate(15)" fill="#F5F0E7">
                  <path d="M-5 4-9-5-3-91Q0-101 3-91L9-5 5 4Z" />
                  <path d="M-5 4-9-5-3-91Q0-101 3-91L9-5 5 4Z" transform="rotate(120)" />
                  <path d="M-5 4-9-5-3-91Q0-101 3-91L9-5 5 4Z" transform="rotate(240)" />
                  <circle r="8" fill="#FFF2D8" />
                </g>
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex min-h-[34rem] items-end px-6 py-8 sm:min-h-[30rem] sm:px-10 sm:py-10 lg:min-h-[27rem] lg:items-center lg:px-12 lg:py-12">
            <div className="w-full max-w-3xl lg:w-[62%] lg:max-w-[58rem]">
              <p className="inline-flex w-fit items-center rounded-full border border-white/30 bg-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg backdrop-blur-sm sm:px-6 sm:text-base">
                {content.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {content.title}
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:text-base sm:leading-7 lg:text-xl">
                {content.description}
              </p>

              <Link
                href="/contact"
                prefetch={false}
                className="mt-7 inline-flex min-h-[4.25rem] items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-base font-bold text-[#10234f] shadow-lg shadow-amber-950/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:px-9 sm:text-xl"
              >
                {content.contactCta}
                <ArrowUpRight className="h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
