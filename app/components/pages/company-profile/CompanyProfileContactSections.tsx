import Link from "next/link";
import { ArrowRight, Globe2, Mail, MapPin, Phone } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

export function CompanyProfileContactSections({ t }: { t: Translations }) {
  const cp = t.about.companyProfile;
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="bg-[linear-gradient(145deg,#713f12_0%,#92400e_55%,#a16207_100%)] p-7 text-white sm:p-10">
              <p className="before:inline-block before:h-2 before:w-2 before:shrink-0 before:self-center before:align-middle before:rounded-full before:bg-current before:content-[''] before:mr-2 inline-flex w-fit rounded-full border border-amber-300/20 bg-white/[0.08] px-4 py-2 uppercase text-amber-200 text-xs font-semibold tracking-wide leading-5">
                13 / {cp.contactEyebrow}
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
                {cp.contactTitle}
              </h2>
              <p className="mt-4 italic text-indigo-100 text-lg font-semibold tracking-normal leading-snug">
                {cp.contactTagline}
              </p>
            </div>
            <div className="space-y-5 p-7 sm:p-10">
              <h3 className="text-[#112c2a] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
                {cp.contactCompany}
              </h3>
              <p className="flex gap-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-teal-700"
                  aria-hidden="true"
                />
                {cp.officeText}.
              </p>
              <a
                className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-teal-800"
                href="https://aerosunenergy.in/"
              >
                <Globe2
                  className="h-4 w-4 text-teal-700"
                  aria-hidden="true"
                />
                {cp.contactWebsite}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-700">
                <Mail
                  className="h-4 w-4 text-teal-700"
                  aria-hidden="true"
                />
                {cp.contactEmail}
              </div>
              <a
                className="flex items-center gap-3 text-sm text-slate-700 transition hover:text-teal-800"
                href="tel:+918099181075"
              >
                <Phone
                  className="h-4 w-4 text-teal-700"
                  aria-hidden="true"
                />
                {cp.contactPhone}
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#087a61] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61] tracking-normal"
              >
                {cp.contactAction}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
