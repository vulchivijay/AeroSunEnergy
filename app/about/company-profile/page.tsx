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
import { getRequestTranslations } from "@/lib/serverLocale";

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
        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] ${inverse ? "border-amber-300/20 bg-white/[0.08] text-amber-200" : "border-teal-900/10 bg-white/75 text-teal-800"}`}
      >
        {number} / {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-black leading-[1.05] tracking-tighter sm:text-4xl lg:text-5xl ${inverse ? "text-white" : "text-[#152b29]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-7 sm:text-base sm:leading-8 ${inverse ? "text-indigo-100/90" : "text-slate-600"}`}
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
          className="flex gap-3 text-sm leading-7 text-slate-700 sm:text-base"
        >
          <span
            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CompanyProfilePage() {
  const t = await getRequestTranslations();
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
    <main className="overflow-hidden bg-white text-slate-900">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-white to-[#f1f2f6] text-[#152b29]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_8%,rgba(217,119,6,0.1),transparent_38%),radial-gradient(ellipse_at_5%_100%,rgba(251,191,36,0.12),transparent_35%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#137c63]/15 bg-white/75 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#137c63]">
            <span
              className="h-1.5 w-1.5 rounded-full bg-amber-500"
              aria-hidden="true"
            />
            {cp.badge}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] tracking-tighter text-[#152b29] sm:text-6xl lg:text-7xl">
            {cp.title}
            <span className="mt-2 block text-[#137c63]">{cp.subtitle}</span>
          </h1>
          <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-slate-600">
            {cp.motto}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            {cp.intro}
          </p>
          <a
            href="/company-profile.pdf"
            download="company-profile.pdf"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#087a61] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {cp.downloadLabel}
          </a>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#e2e8e2] bg-white/85 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#137c63]">
                {cp.officeLabel}
              </p>
              <p className="mt-2 text-sm leading-7 text-[#152b29]">
                {cp.officeText}
              </p>
            </div>
            <div className="rounded-2xl border border-[#e2e8e2] bg-white/85 p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#137c63]">
                {cp.cinLabel}
              </p>
              <p className="mt-2 font-mono text-lg font-bold tracking-wide text-[#137c63]">
                U35106AP2026PTC128748
              </p>
            </div>
            <div className="rounded-2xl border border-[#e2e8e2] bg-white/85 p-5 sm:col-span-2 lg:col-span-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#137c63]">
                {cp.focusLabel}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm font-semibold text-[#152b29]">
                {cp.focusTags?.map((tag: string, idx: number) => (
                  <span key={tag} className="inline-flex items-center gap-1.5">
                    {idx === 0 && (
                      <Sun
                        className="h-4 w-4 text-[#137c63]"
                        aria-hidden="true"
                      />
                    )}
                    {idx === 1 && (
                      <Wind
                        className="h-4 w-4 text-[#137c63]"
                        aria-hidden="true"
                      />
                    )}
                    {idx === 2 && (
                      <Zap
                        className="h-4 w-4 text-[#137c63]"
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

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="01"
            eyebrow={cp.section1Eyebrow}
            title={cp.section1Title}
            description={cp.section1Description}
          />
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="02"
            eyebrow={cp.section2Eyebrow}
            title={cp.section2Title}
          />
          <p className="max-w-4xl rounded-2xl border border-slate-200 bg-slate-50 p-6 text-base leading-8 text-slate-700 sm:p-8 sm:text-lg">
            {cp.section2Text}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="03"
            eyebrow={cp.section3Eyebrow}
            title={cp.section3Title}
          />
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <BulletList items={missionPoints} />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="04"
            eyebrow={cp.section4Eyebrow}
            title={cp.section4Title}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                <Sun className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.solarTitle}</h3>
              <div className="mt-4">
                <BulletList items={solarSolutions} />
              </div>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
                <Wind className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.windTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {cp.windProductIntro}
              </p>
              <div className="mt-4">
                <BulletList items={windDevelopment} />
              </div>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                <Zap className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{cp.hybridTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {cp.hybridIntro}
              </p>
              <div className="mt-4">
                <BulletList items={hybridApplications} />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {cp.hybridFinal}
              </p>
            </article>
          </div>
          <p className="mt-5 rounded-2xl border border-amber-200 bg-[#fff8ed] px-5 py-4 text-sm leading-7 text-amber-950">
            {cp.waitNote}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="05"
            eyebrow={cp.productSectionEyebrow}
            title={cp.productSectionTitle}
          />
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-1 gap-2 bg-[linear-gradient(145deg,#713f12_0%,#92400e_55%,#a16207_100%)] px-5 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-white sm:grid-cols-[0.8fr_1.2fr] sm:gap-0 sm:px-7">
              <span>{cp.productTableCategory}</span>
              <span>{cp.productTableServices}</span>
            </div>
            {productsAndServices.map(([category, description], index) => (
              <div
                key={category}
                className={`grid grid-cols-1 gap-1 px-5 py-4 text-sm leading-7 sm:grid-cols-[0.8fr_1.2fr] sm:gap-3 sm:px-7 ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50"
                }`}
              >
                <span className="font-semibold text-[#112c2a]">
                  {category}
                </span>
                <span className="text-slate-600">
                  {description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="06"
            eyebrow={cp.innovationEyebrow}
            title={cp.innovationTitle}
            description={cp.innovationDescription}
          />
          <p className="rounded-2xl border-l-4 border-amber-500 bg-white px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm">
            {cp.innovationNote}
          </p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2">
            {innovationFocus.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="font-mono text-sm font-bold text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-7 text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
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
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="font-mono text-sm font-bold text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="08"
            eyebrow={cp.whoWeServeEyebrow}
            title={cp.whoWeServeTitle}
            description={cp.whoWeServeDescription}
          />
          <BulletList items={customerSegments} />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="09"
            eyebrow={cp.manufacturingEyebrow}
            title={cp.manufacturingTitle}
            description={cp.manufacturingDescription}
          />
          <BulletList items={manufacturingModel} />
          <p className="mt-5 text-sm leading-7 text-slate-600">
            {cp.manufacturingNote}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="10"
            eyebrow={cp.qualityEyebrow}
            title={cp.qualityTitle}
            description={cp.qualityDescription}
          />
          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityPractices.map((practice) => (
              <div
                key={practice}
                className="flex gap-3 text-sm leading-7 text-slate-700"
              >
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-300"
                  aria-hidden="true"
                />
                {practice}
              </div>
            ))}
          </div>
          <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-700">
            {cp.qualityNote}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <SectionHeading
            number="11"
            eyebrow={cp.whyWorkEyebrow}
            title={cp.whyWorkTitle}
            description={cp.whyWorkDescription}
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {reasonsToWorkWithUs.map((reason) => (
              <div key={reason} className="p-2 text-md leading-7 text-slate-700">
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f1f2f6] to-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
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
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="font-mono text-sm font-bold text-teal-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-7 text-slate-700">
                  {priority}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="bg-[linear-gradient(145deg,#713f12_0%,#92400e_55%,#a16207_100%)] p-7 text-white sm:p-10">
              <p className="inline-flex w-fit rounded-full border border-amber-300/20 bg-white/[0.08] px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-amber-200">
                13 / {cp.contactEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-[1.05] tracking-tighter sm:text-4xl">
                {cp.contactTitle}
              </h2>
              <p className="mt-4 text-lg font-semibold italic text-indigo-100">
                {cp.contactTagline}
              </p>
            </div>
            <div className="space-y-5 p-7 sm:p-10">
              <h3 className="text-xl font-bold text-[#112c2a]">
                {cp.contactCompany}
              </h3>
              <p className="flex gap-3 text-sm leading-7 text-slate-600">
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
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#087a61] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61]"
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
    </main>
  );
}
