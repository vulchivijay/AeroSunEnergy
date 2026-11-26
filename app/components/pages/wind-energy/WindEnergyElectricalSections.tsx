import { getRequestTranslations } from "@/lib/serverLocale";
import { WindContentBlock, WindInfoPanel, WindSectionEyebrow } from "@/app/components/ui";
import { windSolutionImages } from "@/app/components/ui/EnergyContentImages";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import type { Translations } from '@/lib/LocaleContext';

async function WindComparisonTable({ rows }: { rows: { system: string; detail: string; use: string }[] }) {
  const t = await getRequestTranslations()
  const ui = t.ui

  return (
    <div className="overflow-x-auto rounded-xl border border-emerald-200 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-300 [&::-webkit-scrollbar-thumb:hover]:bg-emerald-400">
      <table
        aria-label={`${ui.systemType}, ${ui.howItWorks}, ${ui.typicalUse}`}
        className="w-full min-w-[780px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3"
      >
        <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
          <tr>
            <th scope="col">{ui.systemType}</th>
            <th scope="col">{ui.howItWorks}</th>
            <th scope="col">{ui.typicalUse}</th>
          </tr>
        </thead>
        <tbody>
        {rows.map((row) => (
          <tr key={row.system} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
            <th scope="row" className="font-semibold text-slate-900 tracking-normal tabular-nums"><DigitalNumber value={row.system} /></th>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.detail} /></td>
            <td className="text-slate-700 tabular-nums"><DigitalNumber value={row.use} /></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export function WindEnergyElectricalSections({ t }: { t: Translations }) {
  const windPage = t.windPage

  const systemConfigsLocalized = windPage.electrical.rows

  const keyBenefitsLocalized = windPage.benefits.items

  const strategicPointsLocalized = windPage.benefits.feasibilityItems
  return (
    <>
      <section className="bg-gradient-to-br from-white to-[#f1f2f6]">
              <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
                <div className="mb-8 max-w-3xl">
                  <WindSectionEyebrow>{windPage.electrical.eyebrow}</WindSectionEyebrow>
                  <h2 className="mt-3 text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{windPage.electrical.title}</h2>
                </div>

                <WindComparisonTable rows={systemConfigsLocalized} />
              </div>
            </section>
      <section className="bg-gradient-to-br from-[#f1f2f6] to-white mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
              <WindContentBlock
                eyebrow={windPage.hero.eyebrow}
                title={windPage.overview.title}
                description={windPage.hero.subtitle}
                benefits={keyBenefitsLocalized.map((benefit) => ({
                  title: benefit.split(' ').slice(0, 3).join(' ') || 'Benefit',
                  description: benefit,
                }))}
                imageSrc={windSolutionImages[0]}
              />

              <div className="mt-10 grid gap-5 lg:grid-cols-2">
                  <WindInfoPanel title={windPage.benefits.title} content={keyBenefitsLocalized} index={0} accent="sky" />
                  <WindInfoPanel title={windPage.benefits.feasibility} content={strategicPointsLocalized} index={1} accent="emerald" />
              </div>
            </section>
    </>
  )
}
