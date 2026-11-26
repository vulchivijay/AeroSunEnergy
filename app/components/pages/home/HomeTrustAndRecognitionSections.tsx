import Image from "next/image";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import WindTurbineIllustration from "@/app/components/ui/WindTurbineIllustration";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, CalendarDays, Mail, MapPin, Phone, Rocket, Sun, Zap } from "lucide-react";
import Link from "next/link";
import type { Translations } from '@/lib/LocaleContext';

function RecognitionHighlight({ t }: { t: Translations }) {
  const recognitions = t.home.recognition

  return (
    <section className="bg-transparent p-0">
      <div className="relative isolate grid min-h-[720px] w-full grid-cols-1 gap-8 overflow-hidden bg-[linear-gradient(112deg,#06143f_0%,#07398f_38%,#352ecc_70%,#e74398_90%,#ff7b55_100%)] px-5 py-8 text-white sm:min-h-[650px] sm:px-8 sm:py-10 md:px-10 lg:min-h-[390px] lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-8 lg:px-8 lg:py-8 xl:aspect-[3.2/1] xl:min-h-0 xl:gap-10 xl:px-10">
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(255,156,91,0.32),transparent_35%),radial-gradient(ellipse_at_50%_0%,rgba(61,131,255,0.23),transparent_42%)]"
          aria-hidden="true"
        />
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[150px] w-full sm:h-[180px] lg:h-[220px] xl:h-[54%]"
          viewBox="0 0 1600 260"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="credentials-sun-glow">
              <stop stopColor="#fff6b8" stopOpacity=".9" />
              <stop offset=".3" stopColor="#ffbd55" stopOpacity=".42" />
              <stop offset="1" stopColor="#ff925f" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="credentials-horizon-glow" x1="0" x2="1">
              <stop stopColor="#9b9bff" stopOpacity=".8" />
              <stop offset=".45" stopColor="#ffc66d" />
              <stop offset="1" stopColor="#ff9b64" />
            </linearGradient>
            <clipPath id="credentials-panel-clip">
              <path d="M0 150 338 190 478 260H0z" />
            </clipPath>
          </defs>
          <g transform="translate(0 25)">
            <circle
              cx="320"
              cy="150"
              r="112"
              fill="url(#credentials-sun-glow)"
            />
            <circle cx="320" cy="150" r="49" fill="#ffd46a" />
          </g>
          <path
            d="M320 126V90M355 140l30-30M369 175h36M355 210l30 30M320 224v36M285 210l-30 30M271 175h-36M285 140l-30-30"
            stroke="#fff0a5"
            strokeOpacity=".9"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-opacity"
              values=".45;1;.45"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="2;4;2"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </path>
          <path transform="translate(0 25)" d="M0 157c122-26 214-14 310 2 96 16 145-23 238-8 95 15 157 55 264 34 131-26 224-31 330-14 139 22 269-27 458-42v131H0z" fill="#453073" fillOpacity=".55" />
          <path d="M0 191c135-24 247-33 366-10 118 24 209 39 331 21 105-16 193-26 300-14 143 17 264 9 398-15 76-13 142-18 205-17v104H0z" fill="#10205c" fillOpacity=".8" />
          <path d="M0 215c190-17 300-33 426-7 130 27 223 42 356 22 151-23 239-25 371-11 149 16 291 13 447-16v77H0z" fill="#071642" fillOpacity=".88" />
          <path d="M0 185c165-17 270 21 381 26 129 7 191-36 321-13 182 32 263 49 439 22 156-24 287-33 459-45" stroke="url(#credentials-horizon-glow)" strokeWidth="4" />
          <path d="M0 150 338 190 478 260H0z" fill="#102568" stroke="#c3e4ff" strokeOpacity=".78" strokeWidth="2" />
          <g clipPath="url(#credentials-panel-clip)" stroke="#b7ddff" strokeOpacity=".78" strokeWidth="2">
            <path d="M68 158 96 260M136 166 191 260M203 174 287 260M270 182 382 260M0 178 373 208M0 205 408 225M0 232 443 243" />
          </g>
          <WindTurbineIllustration x={400} y={38} width={200} height={222} />
        </svg>

        <div className="relative z-10 flex min-w-0 flex-col justify-center lg:-translate-y-12 lg:pl-1">
          <div className="flex max-w-[320px] items-center gap-3">
            <span className="h-px flex-1 bg-amber-300/90" aria-hidden="true" />
            <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 whitespace-nowrap rounded-full bg-[#dcecff] px-4 py-1 uppercase text-[#17345f] text-xs font-semibold tracking-wide leading-5">
              {t.home.recognitionHeader.badge}
            </p>
            <span className="h-px flex-1 bg-amber-300/90" aria-hidden="true" />
          </div>
          <h2 className="mt-4 max-w-[540px] border-l-[5px] border-amber-400 pl-4 font-serif text-[#fffaf1] text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {t.home.recognitionHeader.title}
          </h2>
          <p className="mt-3 max-w-[480px] pl-5 text-blue-50/90 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {t.home.recognitionHeader.description}
          </p>
        </div>

        <div className="relative z-10 grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:-translate-y-12 lg:gap-3 xl:gap-4">
          {recognitions.map((item, index) => (
            <article
              key={item.title}
              className="relative flex min-h-[238px] min-w-0 flex-col justify-center bg-[#101c69]/25 px-4 py-5 backdrop-blur-[2px] sm:min-h-[250px] sm:px-5 sm:py-5 lg:min-h-[264px] lg:px-4 lg:py-4 xl:min-h-0 xl:h-full xl:px-5"
              style={{
                clipPath:
                  'polygon(0 0, 96% 0, 100% 6%, 100% 94%, 96% 100%, 4% 100%, 0 94%)',
              }}
            >
              <svg
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 1H95L99 6V94L95 99H5L1 94Z"
                  stroke="#fffaf1"
                  strokeOpacity=".9"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#fffaf1]/80 bg-white/[0.06] text-blue-50 sm:h-12 sm:w-12">
                  {index === 0 ? (
                    <BriefcaseBusiness className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  ) : (
                    <Rocket className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  )}
                </span>
                <span className="h-px flex-1 bg-[#fffaf1]/80" aria-hidden="true" />
              </div>
              <p className={`before:inline-block before:h-2 before:w-2 before:shrink-0 before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 mt-3 w-fit max-w-full rounded-full px-3 py-1 uppercase text-[#101b54] ${index === 0 ? 'bg-[#cde4ff]' : ' bg-[#ffb52e] '} text-xs font-semibold tracking-wide leading-5`}>
                {item.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-[#fffaf1] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
                {item.title}
              </h3>
              <span className="mt-2 h-[3px] w-12 bg-amber-400" aria-hidden="true" />
              <p className="mt-2 max-w-lg text-blue-50/95 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const serviceFactIcons = [Sun, MapPin, CalendarDays, Zap]

const serviceFactStyles = [
  'border-emerald-200 bg-emerald-50 text-emerald-800',
  'border-sky-200 bg-sky-50 text-sky-800',
  'border-amber-200 bg-amber-50 text-amber-800',
  'border-violet-200 bg-violet-50 text-violet-800',
]

function CompanyTrustSection({ t }: { t: Translations }) {
  const content = t.home.trustSections.company
  const footer = t.footer
  const addressUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`

  return (
    <section
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#fbf9ff] via-[#f5f4ff] to-[#eaf2ff] px-4 py-12 text-slate-900 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-labelledby="company-trust-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_14%_14%,rgba(255,255,255,0.92),transparent_38%),radial-gradient(ellipse_at_88%_22%,rgba(196,181,253,0.25),transparent_36%),radial-gradient(ellipse_at_75%_100%,rgba(147,197,253,0.22),transparent_40%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-56 w-[78%] sm:h-64 lg:h-[47%] lg:w-[43%]" aria-hidden="true">
        <Image
          src="/images/slider/slider-1.webp"
          alt=""
          fill
          sizes="(min-width: 1024px) 43vw, 78vw"
          className="object-cover object-left-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#f6f5fd]/45 to-[#f6f5fd]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#f6f5fd]" />
      </div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.6fr)] lg:items-center lg:gap-10">
        <div className="relative flex min-h-[25rem] flex-col justify-center pb-36 sm:min-h-[27rem] sm:pb-40 lg:sticky lg:top-24 lg:min-h-[34rem] lg:pb-0 lg:self-start">
          <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] inline-flex w-fit items-center gap-2 rounded-full border border-violet-500 bg-white/75 px-4 py-2 uppercase text-violet-700 text-xs font-bold tracking-[0.08em] leading-5 shadow-sm">
            {content.eyebrow}
          </p>
          <h2 id="company-trust-title" className="mt-5 max-w-xl text-slate-950 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold !tracking-tight leading-[1.05]">
            {content.title}
          </h2>
          <div className="mt-3 h-2 w-36 -rotate-2 rounded-full bg-emerald-600" aria-hidden="true" />
          <p className="mt-4 max-w-md text-slate-700 text-base sm:text-lg font-normal tracking-normal leading-6 sm:leading-7">
            {content.description}
          </p>
          <Link
            href="/contact"
            prefetch={false}
            className="mt-7 inline-flex min-h-14 w-fit items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3 text-base font-bold text-white shadow-[0_12px_24px_-12px_rgba(5,150,105,0.75)] transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 tracking-normal"
          >
            {content.contactCta}<ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid min-w-0 gap-4">
          <div className="grid gap-3 md:grid-cols-[1.1fr_1fr]">
            <a
              href={addressUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-40 items-start gap-4 rounded-[1.35rem] border border-white/80 bg-white/75 p-5 shadow-[0_16px_34px_-24px_rgba(30,41,59,0.4)] backdrop-blur-md transition hover:bg-white sm:p-6"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100/80 text-violet-700">
                <MapPin className="h-7 w-7" aria-hidden="true" />
              </span>
              <span className="h-24 w-px shrink-0 bg-slate-200" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block uppercase text-slate-600 text-xs font-bold tracking-wide leading-5">{content.officeLabel}</span>
                <span className="mt-1 block text-sm sm:text-base leading-6 text-slate-800">{footer.address}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-violet-700 tracking-normal">
                  {content.mapCta}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </a>

            <div className="grid gap-3">
              <a
                href={`tel:${footer.phoneHref}`}
                className="flex min-h-[5.5rem] items-center gap-4 rounded-[1.35rem] border border-white/80 bg-white/75 p-4 shadow-[0_16px_34px_-24px_rgba(30,41,59,0.4)] backdrop-blur-md transition hover:bg-white sm:px-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100/80 text-violet-700">
                  <Phone className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="h-12 w-px shrink-0 bg-slate-200" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block uppercase text-slate-600 text-xs font-bold tracking-wide leading-5">{content.phoneLabel}</span>
                  <span className="mt-1 block text-base sm:text-lg font-bold text-slate-900 tabular-nums"><DigitalNumber value={footer.phone} /></span>
                </span>
              </a>
              <div className="flex min-h-[5.5rem] items-center gap-4 rounded-[1.35rem] border border-white/80 bg-white/75 p-4 shadow-[0_16px_34px_-24px_rgba(30,41,59,0.4)] backdrop-blur-md sm:px-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100/80 text-violet-700">
                  <Mail className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="h-12 w-px shrink-0 bg-slate-200" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block uppercase text-slate-600 text-xs font-bold tracking-wide leading-5">{content.emailLabel}</span>
                  <span className="mt-1 block break-all text-sm sm:text-base font-bold text-slate-900">{footer.email}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 text-slate-800 shadow-[0_18px_38px_-24px_rgba(30,41,59,0.42)] backdrop-blur-md sm:p-6">
            <p className="text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {content.residentialServiceDescription}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 min-[1100px]:grid-cols-4">
              {content.serviceFacts.map((fact, index) => {
                const Icon = serviceFactIcons[index] ?? BadgeCheck
                const style = serviceFactStyles[index] ?? 'border-slate-200 bg-slate-50 text-slate-700'

                return (
                  <div key={fact.label} className={`flex min-w-0 items-center gap-3 rounded-2xl border p-3 sm:p-3.5 ${style}`}>
                    <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block uppercase text-[0.65rem] font-bold tracking-wide leading-4">
                        {fact.label}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-slate-900 tracking-normal tabular-nums">
                        <DigitalNumber value={fact.value} />
                      </span>
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HomeTrustAndRecognitionSections({ t }: { t: Translations }) {

  return (
    <>
      <RecognitionHighlight t={t} />
      <CompanyTrustSection t={t} />
    </>
  )
}
