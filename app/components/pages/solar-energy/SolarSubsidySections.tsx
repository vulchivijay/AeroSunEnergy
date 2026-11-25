import { getRequestTranslations } from '@/lib/serverLocale';
import { SectionEyebrow } from '@/app/components/ui';
import { DigitalNumber } from '@/app/components/ui/DigitalNumber';
import type { Translations } from '@/lib/LocaleContext';

function SubsidyCard({
  label,
  value,
  note,
}: {
  label: string
  value: string
  note: string
}) {
  return (
    <div className="border-t border-emerald-200 py-5">
      <p className="uppercase text-emerald-700    text-xs font-semibold tracking-wide leading-5">{label}</p>
      <div className="mt-3 text-3xl font-bold tracking-tight text-slate-900">{value}</div>
      <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{note}</p>
    </div>
  )
}

async function CapacityTable() {
  const t = await getRequestTranslations()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400 ">
      <table
        aria-label={`${ui.averageMonthlyUsage}, ${ui.suitableRooftopCapacity}, ${ui.bestFit}`}
        className="w-full min-w-[620px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 "
      >
        <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
          <tr>
            <th scope="col">{ui.averageMonthlyUsage}</th>
            <th scope="col">{ui.suitableRooftopCapacity}</th>
            <th scope="col">{ui.bestFit}</th>
          </tr>
        </thead>
        <tbody>
        {t.solarPage.capacityTable.rows.map((row) => (
          <tr key={row.usage} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 ">
            <th scope="row" className="font-semibold text-slate-900 tracking-normal tabular-nums"><DigitalNumber value={row.usage} /></th>
            <td className="font-bold text-emerald-700 tracking-normal tabular-nums"><DigitalNumber value={row.capacity} /></td>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.tag} /></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export function SolarSubsidySections({ t }: { t: Translations }) {
  const solarPage = t.solarPage
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="mb-8 max-w-3xl">
                  <SectionEyebrow>{solarPage.subsidy.eyebrow}</SectionEyebrow>
                  <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{solarPage.subsidy.title}</h2>
                  <p className="mt-4 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{solarPage.subsidy.description}</p>
                  <p className="mt-4 rounded-xl border border-slate-200 bg-[#eaf2e9] px-4 py-3 text-slate-700      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{t.subsidyNotice}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {solarPage.subsidy.cards.map((card) => (
                    <SubsidyCard key={card.label} label={card.label} value={card.value} note={card.note} />
                  ))}
                </div>

                <div className="mt-8">
                  <CapacityTable />
                </div>
              </div>
            </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white border-y border-slate-200 bg-slate-50">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
                  <SectionEyebrow>{solarPage.subsidy.strategicEyebrow}</SectionEyebrow>
                  <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{solarPage.subsidy.strategicTitle}</h2>
                  <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
                      {solarPage.subsidy.strategyOverview}
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-700">
                      {solarPage.subsidy.strategyAdditionalOptions}
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}
