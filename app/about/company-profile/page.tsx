"use client";

import Link from "next/link";
import {
  ArrowRight,
  Download,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  inverse = false,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  inverse?: boolean;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p
        className={`font-mono text-md font-bold uppercase tracking-[0.2em] ${inverse ? "text-lime-300" : "text-emerald-700 "}`}
      >
        {number} / {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-black leading-tight tracking-tight sm:text-4xl ${inverse ? "text-white" : "text-slate-950 "}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 ${inverse ? "text-emerald-50/80" : "text-slate-600 "}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-md leading-6 text-slate-700  sm:text-sm"
        >
          <span
            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function CompanyProfilePage() {
  const { t } = useLocale();
  const cp = t.about.companyProfile;
  const missionPoints = cp.missionPoints;
  const solarSolutions = cp.solarSolutions;
  const windDevelopment = cp.windDevelopment;
  const hybridApplications = cp.hybridApplications;
  const productsAndServices = cp.productsAndServices;
  const innovationFocus = cp.innovationFocus;
  const developmentSteps = cp.developmentSteps;
  const customerSegments = cp.customerSegments;
  const manufacturingModel = cp.manufacturingModel;
  const qualityPractices = cp.qualityPractices;
  const reasonsToWorkWithUs = cp.reasonsToWorkWithUs;
  const futurePriorities = cp.futurePriorities;

  return (
    <main className="overflow-hidden bg-[#f5f6ef] text-slate-900  ">
      <section className="relative isolate overflow-hidden bg-[#14372f] text-white">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(52,211,153,0.2),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(163,217,119,0.11),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 bg-white/[0.06] px-3 py-1.5 text-md font-bold uppercase tracking-[0.2em] text-emerald-100">
            <span
              className="h-1.5 w-1.5 rounded-full bg-lime-300"
              aria-hidden="true"
            />
            {cp.badge}
          </p>
          <h1 className="mt-7 max-w-4xl text-4xl font-black uppercase leading-[1.05] tracking-[0.045em] sm:text-6xl lg:text-7xl">
            {cp.title}
            <span className="mt-2 block text-emerald-300">{cp.subtitle}</span>
          </h1>
          <p className="mt-5 text-lg font-bold uppercase tracking-[0.22em] text-emerald-100/75 sm:text-xl">
            {cp.motto}
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
            {cp.intro}
          </p>
          <a
            href="/company-profile.pdf"
            download="company-profile.pdf"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-200"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {cp.downloadLabel}
          </a>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-md font-bold uppercase tracking-[0.16em] text-emerald-100/60">
                {cp.officeLabel}
              </p>
              <p className="mt-2 text-md leading-6 text-white">
                {cp.officeText}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <p className="text-md font-bold uppercase tracking-[0.16em] text-emerald-100/60">
                {cp.cinLabel}
              </p>
              <p className="mt-2 font-mono text-lg font-bold tracking-wide text-lime-200">
                U35106AP2026PTC128748
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:col-span-2 lg:col-span-1">
              <p className="text-md font-bold uppercase tracking-[0.16em] text-emerald-100/60">
                {cp.focusLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-md font-semibold text-white">
                {cp.focusTags?.map((tag: string, idx: number) => (
                  <span key={tag} className="inline-flex items-center gap-1.5">
                    {idx === 0 && (
                      <Sun
                        className="h-4 w-4 text-lime-300"
                        aria-hidden="true"
                      />
                    )}
                    {idx === 1 && (
                      <Wind
                        className="h-4 w-4 text-lime-300"
                        aria-hidden="true"
                      />
                    )}
                    {idx === 2 && (
                      <Zap
                        className="h-4 w-4 text-lime-300"
                        aria-hidden="true"
                      />
                    )}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-14 sm:space-y-20 sm:px-8 sm:py-20 lg:px-10">
        <section>
          <SectionHeading
            number="01"
            eyebrow={cp.section1Eyebrow}
            title={cp.section1Title}
            description={cp.section1Description}
          />
        </section>

        <section>
          <SectionHeading
            number="02"
            eyebrow={cp.section2Eyebrow}
            title={cp.section2Title}
          />
          <p className="max-w-4xl rounded-3xl border border-emerald-900/10 bg-white p-6 text-lg leading-8 text-slate-700    sm:p-8">
            {cp.section2Text}
          </p>
        </section>

        <section>
          <SectionHeading
            number="03"
            eyebrow={cp.section3Eyebrow}
            title={cp.section3Title}
          />
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-6   sm:p-8">
            <BulletList items={missionPoints} />
          </div>
        </section>

        <section>
          <SectionHeading
            number="04"
            eyebrow={cp.section4Eyebrow}
            title={cp.section4Title}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-emerald-900/10 bg-white p-6   sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800  ">
                <Sun className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.solarTitle}</h3>
              <div className="mt-4">
                <BulletList items={solarSolutions} />
              </div>
            </article>
            <article className="rounded-3xl border border-emerald-900/10 bg-white p-6   sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-800  ">
                <Wind className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.windTitle}</h3>
              <p className="mt-3 text-md leading-6 text-slate-600 ">
                {cp.windProductIntro}
              </p>
              <div className="mt-4">
                <BulletList items={windDevelopment} />
              </div>
            </article>
            <article className="rounded-3xl border border-emerald-900/10 bg-white p-6   sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-800  ">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.hybridTitle}</h3>
              <p className="mt-3 text-md leading-6 text-slate-600 ">
                {cp.hybridIntro}
              </p>
              <div className="mt-4">
                <BulletList items={hybridApplications} />
              </div>
              <p className="mt-4 text-md leading-6 text-slate-600 ">
                {cp.hybridFinal}
              </p>
            </article>
          </div>
          <p className="mt-5 rounded-2xl border border-amber-300/50 bg-amber-50 px-5 py-4 text-md leading-6 text-amber-950   ">
            {cp.waitNote}
          </p>
        </section>

        <section>
          <SectionHeading
            number="05"
            eyebrow={cp.productSectionEyebrow}
            title={cp.productSectionTitle}
          />
          <div className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white  ">
            <div className="grid grid-cols-[0.8fr_1.2fr] bg-emerald-950 px-5 py-4 text-md font-bold uppercase tracking-[0.16em] text-emerald-50 sm:px-7">
              <span>{cp.productTableCategory}</span>
              <span>{cp.productTableServices}</span>
            </div>
            {productsAndServices.map(([category, description], index) => (
              <div
                key={category}
                className={`grid grid-cols-[0.8fr_1.2fr] gap-3 px-5 py-4 text-md leading-6 sm:px-7 ${
                  index % 2 === 0
                    ? "bg-white "
                    : "bg-emerald-50/70 "
                }`}
              >
                <span className="font-semibold text-slate-900 ">
                  {category}
                </span>
                <span className="text-slate-600 ">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              number="06"
              eyebrow={cp.innovationEyebrow}
              title={cp.innovationTitle}
              description={cp.innovationDescription}
            />
            <p className="rounded-2xl border-l-4 border-lime-500 bg-white px-5 py-4 text-md leading-6 text-slate-600  ">
              {cp.innovationNote}
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {innovationFocus.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5  "
              >
                <span className="font-mono text-md font-bold text-emerald-700 ">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-md leading-6 text-slate-700 ">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading
            number="07"
            eyebrow={cp.technologyDevelopmentEyebrow}
            title={cp.technologyDevelopmentTitle}
            description={cp.technologyDevelopmentDescription}
          />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {developmentSteps.map((step, index) => (
              <li
                key={step}
                className="rounded-2xl border border-emerald-900/10 bg-white p-5  "
              >
                <span className="font-mono text-md font-bold text-emerald-700 ">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-md leading-6 text-slate-700 ">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              number="08"
              eyebrow={cp.whoWeServeEyebrow}
              title={cp.whoWeServeTitle}
              description={cp.whoWeServeDescription}
            />
            <BulletList items={customerSegments} />
          </div>
          <div>
            <SectionHeading
              number="09"
              eyebrow={cp.manufacturingEyebrow}
              title={cp.manufacturingTitle}
              description={cp.manufacturingDescription}
            />
            <BulletList items={manufacturingModel} />
            <p className="mt-5 text-md leading-6 text-slate-600 ">
              {cp.manufacturingNote}
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-[#14372f] p-6 text-white sm:p-10">
          <SectionHeading
            number="10"
            eyebrow={cp.qualityEyebrow}
            title={cp.qualityTitle}
            description={cp.qualityDescription}
            inverse
          />
          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPractices.map((practice) => (
              <div
                key={practice}
                className="flex gap-3 text-md leading-6 text-emerald-50"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime-300"
                  aria-hidden="true"
                />
                {practice}
              </div>
            ))}
          </div>
          <p className="mt-7 border-t border-white/15 pt-5 text-md leading-6 text-emerald-100/80">
            {cp.qualityNote}
          </p>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              number="11"
              eyebrow={cp.whyWorkEyebrow}
              title={cp.whyWorkTitle}
              description={cp.whyWorkDescription}
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {reasonsToWorkWithUs.map((reason) => (
              <div
                key={reason}
                className="rounded-2xl border border-emerald-900/10 bg-white p-5 text-md font-semibold leading-6 text-slate-700   "
              >
                {reason}
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading
            number="12"
            eyebrow={cp.futureEyebrow}
            title={cp.futureTitle}
            description={cp.futureDescription}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {futurePriorities.map((priority, index) => (
              <div
                key={priority}
                className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5  "
              >
                <span className="font-mono text-md font-bold text-emerald-700 ">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-md leading-6 text-slate-700 ">
                  {priority}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white  ">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-[#14372f] p-7 text-white sm:p-10">
              <p className="text-md font-bold uppercase tracking-[0.2em] text-lime-300">
                13 / {cp.contactEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {cp.contactTitle}
              </h2>
              <p className="mt-4 text-lg font-semibold italic text-emerald-100">
                {cp.contactTagline}
              </p>
            </div>
            <div className="space-y-5 p-7 sm:p-10">
              <h3 className="text-xl font-bold text-slate-950 ">
                {cp.contactCompany}
              </h3>
              <p className="flex gap-3 text-md leading-6 text-slate-600 ">
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-emerald-700 "
                  aria-hidden="true"
                />
                {cp.officeText}.
              </p>
              <a
                className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700  "
                href="https://aerosunenergy.in/"
              >
                <Globe2
                  className="h-4 w-4 text-emerald-700 "
                  aria-hidden="true"
                />
                {cp.contactWebsite}
              </a>
              <a
                className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700  "
                href="mailto:customercare@aerosunenergy.in"
              >
                <Mail
                  className="h-4 w-4 text-emerald-700 "
                  aria-hidden="true"
                />
                {cp.contactEmail}
              </a>
              <a
                className="flex items-center gap-3 text-md text-slate-700 hover:text-emerald-700  "
                href="tel:+918099181075"
              >
                <Phone
                  className="h-4 w-4 text-emerald-700 "
                  aria-hidden="true"
                />
                {cp.contactPhone}
              </a>
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-md font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                {cp.contactAction}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
