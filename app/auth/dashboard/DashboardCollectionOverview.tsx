"use client";

import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import {
  formatCollectionName,
  formTypeOptions,
  type DashboardResponse,
  type DashboardRole,
} from "./DashboardDataUtils";

export function DashboardCollectionOverview({
  activeCollection,
  role,
  data,
  pageCount,
  formType,
  canCreateRecords,
  showCreateForm,
  onFormTypeChange,
  onToggleCreateForm,
}: {
  activeCollection: string;
  role: DashboardRole;
  data: DashboardResponse | null;
  pageCount: number;
  formType: string;
  canCreateRecords: boolean;
  showCreateForm: boolean;
  onFormTypeChange: (formType: string) => void;
  onToggleCreateForm: () => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="capitalize text-slate-950 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">{formatCollectionName(activeCollection || "Collections")}</h2>
          <p className="mt-1 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {role === "admin"
              ? "Admin access · manage collection records and account roles."
              : role === "operator"
                ? "Operator access · manage business records and approved account roles."
                : "Monitor access · read-only view of collection records."}
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-3">
          {activeCollection === "website_form_submissions" && (
            <label className="grid gap-1.5 uppercase text-slate-500 text-xs sm:text-sm font-semibold tracking-normal leading-5">
              Filter by form
              <select
                value={formType}
                onChange={(event) => onFormTypeChange(event.target.value)}
                className="min-h-10 rounded-lg border border-slate-300 bg-white px-3 text-sm font-medium normal-case tracking-normal text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
              >
                {formTypeOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
              </select>
            </label>
          )}
          {canCreateRecords && (
            <button
              type="button"
              onClick={onToggleCreateForm}
              className="min-h-10 rounded-full bg-emerald-800 px-4 text-sm font-bold text-white hover:bg-emerald-900 tracking-normal"
            >
              {showCreateForm ? "Cancel" : "New record"}
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <article className="rounded-xl border border-slate-200 bg-white/45 p-4">
          <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">Matching records</p>
          <p className="mt-2 text-slate-950 text-lg font-semibold tracking-normal leading-snug tabular-nums">
            <DigitalNumber value={data ? data.total.toLocaleString() : "—"} />
          </p>
          <p className="mt-1 truncate text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{formatCollectionName(activeCollection || "Collections")}</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white/45 p-4">
          <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">Visible on this page</p>
          <p className="mt-2 text-slate-950 text-lg font-semibold tracking-normal leading-snug tabular-nums">
            <DigitalNumber value={data ? data.rows.length : "—"} />
          </p>
          <p className="mt-1 text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">Records currently loaded</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white/45 p-4">
          <p className="uppercase text-slate-500 text-xs font-semibold tracking-wide leading-5">Page</p>
          <p className="mt-2 text-slate-950 text-lg font-semibold tracking-normal leading-snug tabular-nums">
            <DigitalNumber value={data ? `${data.page} / ${pageCount}` : "—"} />
          </p>
          <p className="mt-1 text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">Pagination position</p>
        </article>
      </div>
    </>
  );
}
