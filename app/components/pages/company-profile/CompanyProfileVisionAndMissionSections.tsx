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

export function CompanyProfileVisionAndMissionSections({ t }: { t: Translations }) {
  const cp = t.about.companyProfile;

  const missionPoints = cp.missionPoints;
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <SectionHeading
                  number="02"
                  eyebrow={cp.section2Eyebrow}
                  title={cp.section2Title}
                />
                <p className="max-w-4xl rounded-xl border border-slate-200 bg-slate-50 p-6 text-slate-700 sm:p-8 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
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
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <BulletList items={missionPoints} />
                </div>
              </div>
            </section>
    </>
  )
}
