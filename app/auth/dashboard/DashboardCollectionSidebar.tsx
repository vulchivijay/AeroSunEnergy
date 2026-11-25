"use client";

import type { LucideIcon } from "lucide-react";
import {
  formatCollectionName,
  getCollectionIcon,
  type DashboardRole,
} from "./DashboardDataUtils";

export function DashboardCollectionSidebar({
  collections,
  activeCollection,
  role,
  onChooseCollection,
}: {
  collections: string[];
  activeCollection: string;
  role: DashboardRole;
  onChooseCollection: (collection: string) => void;
}) {
  return (
    <aside className="border-b border-slate-200 bg-white/20 p-4 lg:border-b-0 lg:border-r lg:p-5">
      <p className="px-2  uppercase text-slate-500    text-xs font-semibold tracking-wide leading-5">Workspace</p>
      <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible" aria-label="Database collections">
        {collections.map((collection) => {
          const Icon: LucideIcon = getCollectionIcon(collection);
          return (
            <button
              key={collection}
              type="button"
              aria-pressed={activeCollection === collection}
              onClick={() => onChooseCollection(collection)}
              className={`flex min-h-11 min-w-fit items-center rounded-lg border px-3 text-left text-sm font-bold capitalize transition lg:w-full ${
                activeCollection === collection
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-transparent text-slate-600 hover:bg-white hover:text-slate-950"
              } tracking-normal`}
            >
              <Icon className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
              {formatCollectionName(collection)}
            </button>
          );
        })}
      </nav>
      <div className="mt-5 hidden rounded-xl border border-slate-200 bg-white/55 p-3 lg:block">
        <p className=" uppercase text-slate-500    text-xs font-semibold tracking-wide leading-5">Access level</p>
        <p className="mt-1 capitalize text-slate-900      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{role}</p>
        <p className="mt-1 text-slate-500      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {role === "admin" ? "Full record management" : role === "operator" ? "Business record management" : "Read-only access"}
        </p>
      </div>
    </aside>
  );
}
