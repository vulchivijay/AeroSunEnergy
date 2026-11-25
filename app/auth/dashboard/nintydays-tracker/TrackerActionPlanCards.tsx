import type { Translations } from "@/lib/LocaleContext";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";

type ActionPlanStage = Translations["ninetyDayTrackerPage"]["actionPlan"][number];

export function TrackerActionPlanCards({
  stages,
}: {
  stages: Translations["ninetyDayTrackerPage"]["actionPlan"];
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {stages.map((stage: ActionPlanStage, index) => (
        <div
          key={stage.title}
          className="rounded-xl border border-slate-200 bg-[#fbfaf7] p-5 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-[#f2b84b] to-[#ed7357] text-base font-bold text-[#30243a] tracking-normal">
              {index + 1}
            </span>
            <h3 className=" text-[#202b43] text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
              {stage.title}
            </h3>
          </div>
          <ul className="space-y-3 text-sm leading-7 text-[#4c566d]">
            {stage.points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ed7357]"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

type TrackerPhase = Translations["ninetyDayTrackerPage"]["phases"][number];

export function TrackerPhaseCards({
  phases,
  expectedResultLabel,
}: {
  phases: Translations["ninetyDayTrackerPage"]["phases"];
  expectedResultLabel: string;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {phases.map((phase: TrackerPhase, index) => (
        <article
          key={phase.period}
          className="overflow-hidden rounded-xl border border-slate-200 bg-[#fbfaf7] shadow-sm"
        >
          <div className="flex flex-wrap items-center gap-3 bg-[#273854] px-5 py-4 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f2b84b] text-base font-bold text-[#30243a] tracking-normal">
              {index + 1}
            </span>
            <div>
              <p className=" uppercase text-[#cbd6e5]    text-xs font-semibold tracking-wide leading-5">
                {phase.period}
              </p>
              <h3 className=" text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">{phase.title}</h3>
            </div>
          </div>
          <div className="p-5">
            <ul className="space-y-3 text-sm leading-7 text-[#4c566d]">
              {phase.actions.map((action) => (
                <li key={action} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ed7357]"
                    aria-hidden="true"
                  />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
            {"target" in phase && (
              <div className="mt-5 rounded-xl border border-[#e5b997] bg-[#f7e3d3] p-4">
                <p className="text-[#723f3d]      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {phase.target}
                </p>
                <p className="mt-1 text-[#784f4a]      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {phase.note}
                </p>
              </div>
            )}
            {"outcome" in phase && (
              <div className="mt-5 rounded-xl border border-slate-200 bg-[#e5efed] p-4">
                <p className=" uppercase text-[#356c68]    text-xs font-semibold tracking-wide leading-5">
                  {expectedResultLabel}
                </p>
                <p className="mt-1 text-[#293e4b]      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                  {phase.outcome}
                </p>
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export function TrackerWorkbookRows({
  rows,
}: {
  rows: Translations["ninetyDayTrackerPage"]["sheetRows"];
}) {
  return (
    <tbody className="divide-y divide-emerald-100 ">
      {rows.map(([sheet, purpose]) => (
        <tr
          key={sheet}
          className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70 "
        >
          <td className="font-bold text-slate-900 tracking-normal tabular-nums">
            <DigitalNumber value={sheet} />
          </td>
          <td className="px-5 py-4 tabular-nums"><DigitalNumber value={purpose} /></td>
        </tr>
      ))}
    </tbody>
  );
}
