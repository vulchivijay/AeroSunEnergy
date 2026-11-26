import Image from "next/image";
import { ArrowUpRight, BadgeCheck, BadgeIndianRupee, ClipboardCheck, FileText, HardHat, House, Leaf, MessageCircle, PanelsTopLeft, Sun, Zap } from "lucide-react";
import Link from "next/link";
import { Info } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

function SolarReviewIllustration({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-hidden" aria-hidden="true">
        <span className="absolute h-28 w-52 rounded-full bg-sky-100/80" />
        <Sun className="absolute right-[18%] top-1 h-14 w-14 text-amber-500" strokeWidth={1.7} />
        <div className="relative z-10 w-32 -rotate-6 rounded-xl border-2 border-[#173c7a] bg-white p-3 shadow-md">
          <div className="flex items-center justify-between text-sm font-extrabold text-[#10235a]">
            <span>BILL</span>
            <Zap className="h-5 w-5 fill-amber-400 text-amber-500" />
          </div>
          <span className="mt-2 block h-1.5 w-16 rounded-full bg-slate-300" />
          <span className="mt-1.5 block h-1.5 w-20 rounded-full bg-slate-200" />
          <div className="mt-3 flex h-7 items-end gap-1">
            <span className="h-3 w-2 rounded-t-sm bg-lime-500" />
            <span className="h-5 w-2 rounded-t-sm bg-lime-600" />
            <span className="h-4 w-2 rounded-t-sm bg-lime-500" />
            <span className="h-6 w-2 rounded-t-sm bg-lime-600" />
          </div>
        </div>
        <Leaf className="absolute bottom-3 left-[16%] h-10 w-10 -rotate-45 fill-lime-600 text-lime-700" />
        <Leaf className="absolute bottom-2 right-[16%] h-10 w-10 rotate-45 fill-lime-600 text-lime-700" />
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-hidden" aria-hidden="true">
        <span className="absolute bottom-0 h-28 w-56 rounded-full bg-sky-100/80" />
        <Sun className="absolute right-[17%] top-1 h-12 w-12 text-amber-500" strokeWidth={1.7} />
        <House className="relative z-10 h-24 w-24 text-[#b86c37]" strokeWidth={1.8} />
        <span className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 -translate-y-5">
          <PanelsTopLeft className="h-10 w-14 -rotate-6 text-blue-700" strokeWidth={2.2} />
        </span>
        <BadgeIndianRupee className="absolute right-[22%] top-8 z-20 h-11 w-11 rounded-full bg-amber-300 p-1.5 text-amber-900 shadow-sm" strokeWidth={1.8} />
        <Leaf className="absolute bottom-1 left-[15%] h-9 w-9 -rotate-45 fill-lime-600 text-lime-700" />
        <Leaf className="absolute bottom-1 right-[14%] h-9 w-9 rotate-45 fill-lime-600 text-lime-700" />
      </div>
    )
  }

  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden" aria-hidden="true">
      <span className="absolute h-28 w-56 rounded-full bg-orange-100/80" />
      <ClipboardCheck className="relative z-10 h-28 w-24 rounded-xl bg-white p-2 text-[#1450e8] drop-shadow-md" strokeWidth={1.8} />
      <BadgeCheck className="absolute bottom-2 right-[23%] z-20 h-12 w-12 rounded-full bg-white text-lime-600 drop-shadow-sm" strokeWidth={2.3} />
      <Sun className="absolute right-[20%] top-1 h-10 w-10 text-amber-500" strokeWidth={1.7} />
      <Leaf className="absolute bottom-1 left-[15%] h-9 w-9 -rotate-45 fill-lime-600 text-lime-700" />
    </div>
  )
}

function WhySolarSection({ t }: { t: Translations }) {
  const content = t.home.trustSections.whySolar
  const accents = [
    { border: 'border-t-[#1450e8]', number: 'text-[#1450e8]', stroke: 'bg-sky-200' },
    { border: 'border-t-[#4cae20]', number: 'text-[#1450e8]', stroke: 'bg-lime-200' },
    { border: 'border-t-[#f28a08]', number: 'text-[#1450e8]', stroke: 'bg-orange-200' },
  ] as const

  return (
    <section
      className="relative isolate overflow-hidden bg-[#fff1df] px-4 py-12 text-[#10204b] sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="why-solar-title"
    >
      <div className="pointer-events-none absolute right-0 top-0 hidden h-64 w-full max-w-3xl overflow-hidden sm:block lg:h-72" aria-hidden="true">
        <Image
          src="/images/slider/slider-1.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 55vw, (min-width: 640px) 70vw, 100vw"
          className="object-cover object-[72%_28%] opacity-35 [mask-image:linear-gradient(to_left,black,transparent_95%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff1df]/20 to-[#fff1df]" />
      </div>
      <Leaf className="pointer-events-none absolute -bottom-8 -left-7 hidden h-28 w-28 -rotate-45 fill-lime-600/50 text-lime-700/40 sm:block" aria-hidden="true" />
      <Leaf className="pointer-events-none absolute -bottom-12 left-12 hidden h-24 w-24 rotate-45 fill-lime-600/40 text-lime-700/30 sm:block" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] inline-flex w-fit items-center gap-2 rounded-full bg-[#1450e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-sm">
            {content.eyebrow}
          </p>
          <h2 id="why-solar-title" className="mt-4 max-w-3xl font-serif text-3xl font-bold leading-[1.08] !tracking-tight text-[#10204b] sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <span className="mt-4 block h-1.5 w-20 rounded-full bg-orange-500" aria-hidden="true" />
        </div>

        <div className="mt-7 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {content.cards.map((card, index) => {
            const accent = accents[index % accents.length]

            return (
              <article
                key={card.title}
                className={`flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100 border-t-[5px] ${accent.border} bg-[#fffdf8] px-5 pb-6 pt-4 shadow-[0_10px_20px_-14px_rgba(74,49,22,0.5)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_24px_-14px_rgba(74,49,22,0.35)] sm:px-6`}
              >
                <span className={`text-4xl font-extrabold leading-none !tracking-tight ${accent.number}`} aria-label={`Review item ${String(index + 1).padStart(2, '0')}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={`mt-2 h-1.5 w-10 -rotate-12 rounded-full ${accent.stroke}`} aria-hidden="true" />
                <SolarReviewIllustration index={index} />
                <h3 className="mt-1 font-serif text-xl font-bold leading-tight !tracking-tight text-[#10204b] sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#24314f] sm:text-base sm:leading-6">
                  {card.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function SolarJourneySection({ t }: { t: Translations }) {
  const content = t.home.trustSections.journey
  const journeyIcons = [FileText, MessageCircle, House, ClipboardCheck, HardHat]
  const stepPositions = ['lg:top-0', 'lg:top-[20%]', 'lg:top-[40%]', 'lg:top-[60%]', 'lg:top-[80%]']

  return (
    <section
      className="relative isolate overflow-x-clip bg-[#06111d] bg-cover bg-center bg-no-repeat px-4 py-10 text-white sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      style={{
        backgroundImage:
          "linear-gradient(110deg, rgba(7, 19, 33, 0.58), rgba(6, 17, 29, 0.62) 58%, rgba(3, 11, 19, 0.68)), url('/images/slider/slider-3.webp')",
      }}
      aria-labelledby="solar-journey-title"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(17rem,0.78fr)_minmax(0,1.22fr)] lg:items-stretch lg:gap-8">
          <div
            className="relative isolate flex min-h-[25rem] flex-col justify-start sm:min-h-[27rem] lg:min-h-[43rem]"
          >
            <div className="relative z-10 w-full rounded-2xl border border-white/20 bg-[#06111d]/45 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:p-6 lg:sticky lg:top-36 lg:self-start">
              <p className="inline-flex w-fit items-center rounded-md border border-amber-500 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-amber-400 sm:text-xs">
                {content.eyebrow}
              </p>
              <h2 id="solar-journey-title" className="mt-5 max-w-lg text-4xl font-bold leading-[0.98] !tracking-tight text-white sm:text-5xl lg:text-6xl">
                From bill
                <br />
                to build.
              </h2>
              <p className="mt-4 max-w-sm text-xl font-medium leading-snug text-slate-100 sm:text-2xl">
                {content.title}
              </p>
              <span className="mt-5 block h-1 w-14 rounded-full bg-lime-400 shadow-[0_0_16px_rgba(163,255,0,0.6)]" aria-hidden="true" />
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                {content.description}
              </p>
            </div>
          </div>

          <div className="relative min-w-0">
            <svg
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full lg:block"
              viewBox="0 0 800 880"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="solar-journey-glow" x="-40%" y="-20%" width="180%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path
                d="M650 72C790 100 774 185 185 248C130 300 130 370 650 424C790 460 775 530 185 600C150 650 135 720 650 776"
                stroke="#a3ff00"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#solar-journey-glow)"
              />
            </svg>

            <ol className="relative grid gap-3 lg:min-h-[55rem] lg:gap-0">
              {content.steps.map((step, index) => {
                const StepIcon = journeyIcons[index % journeyIcons.length]
                const isLeftAligned = index % 2 === 0

                return (
                  <li
                    key={step.title}
                    className={`relative z-10 lg:absolute lg:w-[78%] ${stepPositions[index] ?? 'lg:top-[80%]'} ${isLeftAligned ? 'lg:left-4' : 'lg:right-4'}`}
                  >
                    <article className="relative grid min-h-[6.25rem] grid-cols-[2.5rem_3.25rem_minmax(0,1fr)] items-center gap-3 rounded-xl border border-sky-200/20 bg-[linear-gradient(110deg,rgba(24,41,54,0.78),rgba(12,27,40,0.78))] px-3 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:grid-cols-[3rem_3.5rem_minmax(0,1fr)] sm:gap-4 sm:px-4 lg:h-[9rem]">
                      <span className="text-center text-3xl font-bold leading-none !tracking-tight text-lime-400 sm:text-4xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="grid h-12 place-items-center border-l border-slate-400/60 pl-3 text-slate-100 sm:h-14 sm:pl-4">
                        <StepIcon className="h-8 w-8 stroke-[1.7] sm:h-9 sm:w-9" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-snug !tracking-tight text-white sm:text-lg">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm sm:leading-5">
                          {step.description}
                        </p>
                      </div>
                    </article>
                    <span
                      className={`pointer-events-none absolute top-1/2 z-20 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-white bg-lime-400 shadow-[0_0_0_5px_rgba(163,255,0,0.12),0_0_18px_5px_rgba(163,255,0,0.8)] lg:block ${isLeftAligned ? '-right-[7px]' : '-left-[7px]'}`}
                      aria-hidden="true"
                    />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-amber-500 bg-[#111b22]/95 p-4 text-amber-400 shadow-[0_0_24px_rgba(245,158,11,0.08)] sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden="true" />
            <p className="text-xs leading-5 sm:text-sm sm:leading-5">{content.estimateNote}</p>
          </div>
          <Link
            href="/solar-calculator"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-[0_0_18px_rgba(163,255,0,0.22)] transition hover:bg-lime-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 tracking-normal"
          >
            {content.cta}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function HomeSolarStorySections({ t }: { t: Translations }) {

  return (
    <>
      <WhySolarSection t={t} />
      <SolarJourneySection t={t} />
    </>
  )
}
