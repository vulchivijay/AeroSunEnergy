import { Sun, Wind, Zap } from "lucide-react";
import type { Translations } from '@/lib/LocaleContext';

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
        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 uppercase before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] ${inverse ? "border-amber-300/20 bg-white/[0.08] text-amber-200" : " border-slate-200 bg-white/75 text-teal-800 "} text-xs font-semibold tracking-wide leading-5`}
      >
        {number} / {eyebrow}
      </p>
      <h2
        className={`mt-4 ${inverse ? "text-white" : "text-[#152b29]"} text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 ${inverse ? "text-indigo-100/90" : " text-slate-600 "} text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}
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

export function CompanyProfileSolutionsAndProductsSections({ t }: { t: Translations }) {
  const cp = t.about.companyProfile;

  const solarSolutions = cp.solarSolutions;

  const windDevelopment = cp.windDevelopment;

  const hybridApplications = cp.hybridApplications;

  const productsAndServices = cp.productsAndServices;
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <SectionHeading
                  number="04"
                  eyebrow={cp.section4Eyebrow}
                  title={cp.section4Title}
                />
                <div className="grid gap-5 lg:grid-cols-3">
                  <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-800">
                      <Sun className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{cp.solarTitle}</h3>
                    <div className="mt-4">
                      <BulletList items={solarSolutions} />
                    </div>
                  </article>
                  <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-800">
                      <Wind className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{cp.windTitle}</h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {cp.windProductIntro}
                    </p>
                    <div className="mt-4">
                      <BulletList items={windDevelopment} />
                    </div>
                  </article>
                  <article className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-800">
                      <Zap className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{cp.hybridTitle}</h3>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {cp.hybridIntro}
                    </p>
                    <div className="mt-4">
                      <BulletList items={hybridApplications} />
                    </div>
                    <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                      {cp.hybridFinal}
                    </p>
                  </article>
                </div>
                <p className="mt-5 rounded-xl border border-amber-200 bg-[#fff8ed] px-5 py-4 text-amber-950 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="grid grid-cols-1 gap-2 bg-[linear-gradient(145deg,#713f12_0%,#92400e_55%,#a16207_100%)] px-5 py-4 text-xs uppercase text-white sm:grid-cols-[0.8fr_1.2fr] sm:gap-0 sm:px-7 text-xs font-semibold tracking-wide leading-5">
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
                      <span className="font-semibold text-[#112c2a] tracking-normal">
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
    </>
  )
}
