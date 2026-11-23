type StepKind = 'consultation' | 'quotation' | 'system' | 'installation'

const steps: { number: string; title: string; kind: StepKind }[] = [
  { number: '1', title: 'Consultation', kind: 'consultation' },
  { number: '2', title: 'Clear quotation', kind: 'quotation' },
  { number: '3', title: 'System options explained', kind: 'system' },
  { number: '4', title: 'Installation and beyond', kind: 'installation' },
]

function StepIcon({ kind }: { kind: StepKind }) {
  const common = {
    className: 'h-6 w-6 text-amber-100 sm:h-7 sm:w-7',
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  if (kind === 'consultation') {
    return (
      <svg {...common}>
        <circle cx="18" cy="16" r="6" />
        <path d="M6.5 38v-3.5A9.5 9.5 0 0 1 16 25h4a9.5 9.5 0 0 1 9.5 9.5V38" />
        <circle cx="34" cy="18" r="4.5" />
        <path d="M33 27h1.5a7.5 7.5 0 0 1 7.5 7.5V38" />
      </svg>
    )
  }

  if (kind === 'quotation') {
    return (
      <svg {...common}>
        <path d="M12 5h17l8 8v30H12z" />
        <path d="M29 5v9h8M18 22h13M18 28h13M18 34h9" />
      </svg>
    )
  }

  if (kind === 'system') {
    return (
      <svg {...common}>
        <path d="m24 7 17 9-17 9-17-9z" />
        <path d="m9 24 15 8 15-8M9 32l15 8 15-8" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <path d="m29 7 12 12M26 10l5-5 8 8-5 5M8 40l15-15M9 31l8 8M31 27l-4 4M7 12l8-8 8 8-8 8z" />
      <path d="m11 8 4 4M34 38l7 7M37 35l-7 7" />
    </svg>
  )
}

function EnergyLandscape() {
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[47%] w-full sm:h-[53%] lg:h-[68%]"
      viewBox="0 0 1600 430"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <clipPath id="trust-solar-panel-clip">
          <path d="M980 360 1318 310 1458 420H980Z" />
        </clipPath>
        <linearGradient id="trust-solar-glow" x1="430" y1="200" x2="1450" y2="430" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5546ff" stopOpacity=".9" />
          <stop offset=".48" stopColor="#ffc66d" stopOpacity=".98" />
          <stop offset="1" stopColor="#a9d8ff" stopOpacity=".85" />
        </linearGradient>
        <radialGradient id="trust-sun-glow" cx="0" cy="0" r="1" gradientTransform="matrix(0 185 -240 0 1320 264)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff2a8" stopOpacity=".95" />
          <stop offset=".3" stopColor="#ffb950" stopOpacity=".42" />
          <stop offset="1" stopColor="#ff9b64" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="trust-sun-disc" x1="1320" y1="188" x2="1320" y2="340" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff9d6" />
          <stop offset="1" stopColor="#ffbd58" />
        </linearGradient>
        <filter id="trust-sun-aura" x="1150" y="90" width="340" height="350" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <ellipse
        className="motion-safe:animate-pulse"
        style={{ animationDuration: '5.5s' }}
        cx="1320"
        cy="264"
        rx="250"
        ry="195"
        fill="url(#trust-sun-glow)"
      />
      <circle cx="1320" cy="264" r="82" fill="#ffc85e" fillOpacity=".62" filter="url(#trust-sun-aura)" />
      <circle cx="1320" cy="264" r="76" fill="url(#trust-sun-disc)" />
      <path d="M1535 205v175" stroke="#fff5df" strokeOpacity=".95" strokeWidth="4" strokeLinecap="round" />
      <g
        className="motion-safe:animate-spin"
        style={{
          transformBox: 'view-box',
          transformOrigin: '1535px 205px',
          animationDuration: '12s',
        }}
      >
        <path d="M1535 205v-58m0 58-50 29m50-29 50 29" stroke="#fff5df" strokeOpacity=".96" strokeWidth="4" strokeLinecap="round" />
        <path d="M1535 205v-58m0 58-50 29m50-29 50 29" stroke="#ffd98b" strokeOpacity=".58" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <circle cx="1535" cy="205" r="6" fill="#fff5df" />
      <path
        className="motion-safe:animate-spin"
        style={{
          transformBox: 'view-box',
          transformOrigin: '82.5% 61.4%',
          animationDuration: '28s',
        }}
        d="M1320 176v-44M1320 352v44M1232 264h-44M1408 264h44M1258 202l-31-31M1382 202l31-31M1258 326l-31 31M1382 326l31 31"
        stroke="#fff0a5"
        strokeOpacity=".96"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M0 267c150-35 270 19 414 2 135-16 223-96 368-73 131 21 211 85 340 55 176-42 283-2 478 10v169H0z" fill="#39266f" fillOpacity=".24" />
      <path d="M0 316c166-54 300-28 456-3 158 25 263-58 401-37 182 28 253 49 405 6 144-41 231-32 338-4v152H0z" fill="#101b60" fillOpacity=".34" />
      <path d="M0 358c190-35 332-49 495-8 149 38 258-15 380-7 160 11 254 39 399 6 119-27 226-51 326-30v111H0z" fill="#07143f" fillOpacity=".42" />
      <path d="M980 360 1318 310 1458 420H980Z" fill="#101d68" stroke="url(#trust-solar-glow)" strokeWidth="3" />
      <g clipPath="url(#trust-solar-panel-clip)" stroke="#b8e0ff" strokeOpacity=".76" strokeWidth="2">
        <path d="M1048 350 1076 420m39-80 56 80m12-90 84 90m-17-100 112 100m-61-108 144 108M980 375 1353 338M980 390 1388 365M980 405 1423 393" />
      </g>
      <path d="M0 337c242 38 415 61 625 21s356-94 558-34 291 36 417-11" stroke="url(#trust-solar-glow)" strokeWidth="4" />
    </svg>
  )
}

export function TrustRibbon({ className = '' }: { className?: string } = {}) {
  return (
    <section
      aria-labelledby="aerosun-banner-title"
      className={className}
    >
      <div
        className="relative isolate min-h-[900px] w-full overflow-hidden bg-[#08164e] text-white sm:min-h-[760px] md:aspect-[3/1] md:min-h-[360px]"
        style={{
          background:
            'radial-gradient(ellipse at 82% 80%, rgba(255,180,89,.38), transparent 34%), radial-gradient(ellipse at 54% 8%, rgba(70,151,255,.25), transparent 36%), linear-gradient(112deg,#06143f 0%,#102c9e 34%,#4932b3 64%,#9a3fa7 82%,#f27d61 100%)',
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(125deg,rgba(255,255,255,.14) 0,rgba(255,255,255,.14) 1px,transparent 1px,transparent 10px)',
          }}
          aria-hidden="true"
        />
        <EnergyLandscape />

        <div className="relative z-10 grid min-h-[900px] gap-8 px-6 py-9 sm:min-h-[760px] sm:px-10 sm:py-12 md:absolute md:inset-0 md:min-h-0 md:grid-cols-[48.5%_49.5%] md:items-center md:gap-0 md:px-[3.3%] md:py-[2.5%] lg:px-[3.5%]">
          <div className="max-w-[620px] self-center md:-translate-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-sky-100 shadow-lg shadow-blue-950/10 backdrop-blur-md sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_14px_rgba(255,211,109,0.9)]" />
              The AeroSun Promise
            </div>

            <h1
              id="aerosun-banner-title"
              className="mt-3 max-w-[650px] font-serif text-[clamp(1.7rem,3.5vw,4.5rem)] font-bold leading-[.99] tracking-[-0.045em] text-white md:mt-4"
            >
              <span className="block whitespace-nowrap">Solar, clearly planned.</span>
              <span className="mt-1 block whitespace-nowrap bg-gradient-to-r from-amber-100 via-orange-200 to-rose-200 bg-clip-text italic text-transparent">
                Every step of the way.
              </span>
            </h1>

            <p className="mt-3 max-w-[590px] text-[13px] leading-[1.45] tracking-[0.015em] text-blue-50/95 sm:text-sm md:mt-3 md:text-[clamp(11px,1vw,15px)] lg:text-[clamp(12px,1.05vw,17px)]">
              Trust AeroSun Energy for a transparent, dependable solar experience from your first consultation through installation and beyond. We provide clear quotations, explain your system options, and keep you informed at every stage—so you can make confident decisions with no unexpected costs or surprises.
            </p>
          </div>

          <div className="relative min-h-[400px] sm:min-h-[450px] md:h-full md:min-h-0 md:-translate-y-6">
            <svg
              className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
              viewBox="0 0 800 300"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="trust-journey-line" x1="90" y1="126" x2="700" y2="27" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9b9bff" stopOpacity=".7" />
                  <stop offset=".45" stopColor="#ffd77b" />
                  <stop offset="1" stopColor="#fff0c2" />
                </linearGradient>
                <filter id="trust-journey-glow" x="-20%" y="-50%" width="140%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <path d="M92 126C180 126 200 96 292 96S400 63 492 63 600 27 692 27" stroke="url(#trust-journey-line)" strokeWidth="3" filter="url(#trust-journey-glow)" />
            </svg>

            <div
              className="absolute left-1/2 top-0 z-20 grid h-[68px] w-[68px] -translate-x-1/2 place-items-center rounded-full border border-amber-200/20 bg-white/[0.06] shadow-[0_0_30px_rgba(255,203,103,.18)] sm:h-[82px] sm:w-[82px] md:left-[7%] md:top-[1%] md:h-[86px] md:w-[86px] md:translate-x-0"
              aria-hidden="true"
            >
              <span className="absolute inset-2 rounded-full border border-sky-200/20" />
              <span className="absolute inset-4 rounded-full border border-amber-200/25" />
              <svg
                className="relative h-9 w-9 text-amber-100 sm:h-11 sm:w-11"
                viewBox="0 0 48 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M24 5 39 11v11c0 10-6.4 16.7-15 21-8.6-4.3-15-11-15-21V11z" />
                <path d="m16.5 24 5 5 10-11" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-3 pt-[84px] sm:gap-4 md:absolute md:inset-0 md:block md:pt-0">
              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className={[
                    'relative flex min-h-[128px] flex-col justify-between rounded-[1.1rem] border border-white/30 bg-[#281f69]/50 p-3 shadow-[0_16px_38px_rgba(3,10,48,.22)] backdrop-blur-xl sm:min-h-[140px] sm:p-4 md:absolute md:h-[82px] md:min-h-0 md:w-[22.2%] md:rounded-[1rem] md:p-2 lg:h-[clamp(82px,8vw,112px)] lg:p-3',
                    index === 0 ? 'md:left-0 md:top-[42%]' : '',
                    index === 1 ? 'md:left-[25%] md:top-[32%]' : '',
                    index === 2 ? 'md:left-[50%] md:top-[21%]' : '',
                    index === 3 ? 'md:left-[75%] md:top-[9%]' : '',
                  ].join(' ')}
                >
                  <span className="absolute -top-3 left-1/2 z-10 grid h-7 w-7 -translate-x-1/2 place-items-center rounded-full border border-amber-100/70 bg-[#5b3e99] text-xs font-semibold text-amber-50 shadow-[0_0_18px_rgba(255,203,103,.35)]">
                    {step.number}
                  </span>
                  <div className="flex flex-1 items-center justify-center pt-2">
                    <StepIcon kind={step.kind} />
                  </div>
                  <h2 className="mx-auto mt-1 max-w-[10rem] text-center text-[11px] font-semibold leading-tight text-white sm:text-xs md:text-[clamp(9px,.8vw,13px)]">
                    {step.title}
                  </h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustRibbon
