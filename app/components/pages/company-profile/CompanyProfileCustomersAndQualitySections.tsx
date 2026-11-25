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
        className={`inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 uppercase before:h-1.5 before:w-1.5 before:rounded-full before:bg-amber-500 before:content-[''] ${inverse ? "border-amber-300/20 bg-white/[0.08] text-amber-200" : " border-slate-200 bg-white/75 text-teal-800    "} text-xs font-semibold tracking-wide leading-5`}
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
          className={`mt-4 ${inverse ? "text-indigo-100/90" : " text-slate-600      "}      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7`}
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

export function CompanyProfileCustomersAndQualitySections({ t }: { t: Translations }) {
  const cp = t.about.companyProfile;

  const customerSegments = cp.customerSegments;

  const manufacturingModel = cp.manufacturingModel;

  const qualityPractices = cp.qualityPractices;
  return (
    <>
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
                <p className="mt-5 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
                <p className="mt-5 border-t border-slate-200 pt-5 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {cp.qualityNote}
                </p>
              </div>
            </section>
    </>
  )
}
