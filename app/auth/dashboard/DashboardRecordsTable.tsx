"use client";

import { Fragment, type FormEvent, type ReactNode } from "react";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";
import { UserAccessManager } from "./UserAccessManager";

type DashboardRole = "admin" | "operator" | "monitor";
type DashboardRow = Record<string, unknown> & { id?: string };

type DashboardRecordsTableProps = {
  collection: string;
  collectionLabel: string;
  rows: DashboardRow[];
  columns: string[];
  isFormSubmissions: boolean;
  hasActions: boolean;
  canEditRecords: boolean;
  canDeleteRecords: boolean;
  hasUserAccessControls: boolean;
  role: DashboardRole;
  editingId: string | null;
  editJson: string;
  savingRecord: boolean;
  pageCount: number;
  pageNumber: number;
  total: number;
  loading: boolean;
  renderCell: (row: DashboardRow, column: string) => ReactNode;
  onToggleEdit: (row: DashboardRow, id: string, isEditing: boolean) => void;
  onDeleteRecord: (id: string) => void;
  onEditJsonChange: (value: string) => void;
  onSaveRecord: (
    event: FormEvent<HTMLFormElement>,
    mode: "create" | "update",
    id?: string,
  ) => void;
  onAccessSaved: () => void;
  onPageChange: (page: number) => void;
};

export function DashboardRecordsTable({
  collection,
  collectionLabel,
  rows,
  columns,
  isFormSubmissions,
  hasActions,
  canEditRecords,
  canDeleteRecords,
  hasUserAccessControls,
  role,
  editingId,
  editJson,
  savingRecord,
  pageCount,
  pageNumber,
  total,
  loading,
  renderCell,
  onToggleEdit,
  onDeleteRecord,
  onEditJsonChange,
  onSaveRecord,
  onAccessSaved,
  onPageChange,
}: DashboardRecordsTableProps) {
  return (
    <>
      <div className="mt-6 overflow-x-auto overscroll-x-contain rounded-xl border border-slate-200" tabIndex={0} aria-label={`${collectionLabel} records table`}>
        <table className="min-w-max w-full text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
          <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
            <tr>
              {columns.map((column) => (
                <th key={column} className="whitespace-nowrap px-4 py-3 font-bold tracking-normal">
                  {isFormSubmissions && column === "payload" ? "Submitted details" : column.replace(/_/g, " ")}
                </th>
              ))}
              {hasActions && <th className="whitespace-nowrap px-4 py-3 font-bold tracking-normal">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {rows.map((row, index) => {
              const id = typeof row.id === "string" ? row.id : "";
              const isEditing = id !== "" && editingId === id;
              return (
                <Fragment key={id || `${collection}-${index}`}>
                  <tr className="align-top text-slate-700 odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                    {columns.map((column) => (
                      <td key={column} className={`${column === "payload" ? "min-w-[20rem] max-w-[34rem]" : "min-w-[8rem] max-w-[28rem]"} whitespace-normal px-4 py-3`}>
                        <div className="break-words">{renderCell(row, column)}</div>
                      </td>
                    ))}
                    {hasActions && (
                      <td className="min-w-[12rem] px-4 py-3">
                        <div className="flex flex-wrap gap-2">
                          {canEditRecords && id && (
                            <button
                              type="button"
                              onClick={() => onToggleEdit(row, id, isEditing)}
                              className="min-h-9 rounded-full border border-slate-300 px-3 text-xs font-bold text-slate-700 hover:bg-slate-50 tracking-normal"
                            >
                              {isEditing ? "Cancel edit" : "Edit"}
                            </button>
                          )}
                          {canDeleteRecords && id && (
                            <button
                              type="button"
                              onClick={() => onDeleteRecord(id)}
                              className="min-h-9 rounded-full border border-rose-200 px-3 text-xs font-bold text-rose-700 hover:bg-rose-50 tracking-normal"
                            >
                              Delete
                            </button>
                          )}
                        </div>
                        {hasUserAccessControls && (
                          <UserAccessManager
                            key={`${id}-${String(row.role)}-${String(row.approved)}`}
                            row={row}
                            actorRole={role}
                            onSaved={onAccessSaved}
                          />
                        )}
                      </td>
                    )}
                  </tr>
                  {isEditing && (
                    <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                      <td colSpan={columns.length + Number(hasActions)} className="p-4">
                        <form onSubmit={(event) => onSaveRecord(event, "update", id)} className="max-w-4xl">
                          <label className="grid gap-2 text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
                            Update record (JSON)
                            <textarea
                              value={editJson}
                              onChange={(event) => onEditJsonChange(event.target.value)}
                              rows={8}
                              spellCheck={false}
                              placeholder="Enter the updated JSON object."
                              className="w-full rounded-lg border border-slate-300 bg-white p-3 font-mono text-xs text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15 tabular-nums"
                            />
                          </label>
                          <button type="submit" disabled={savingRecord} className="mt-3 min-h-10 rounded-full bg-emerald-800 px-4 text-sm font-bold text-white hover:bg-emerald-900 disabled:opacity-50 tracking-normal">
                            {savingRecord ? "Saving…" : "Save changes"}
                          </button>
                        </form>
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between ">
        <p>
          <DigitalNumber value={`${total.toLocaleString()} records · Page ${pageNumber} of ${pageCount}`} />
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            disabled={pageNumber <= 1 || loading}
            onClick={() => onPageChange(Math.max(1, pageNumber - 1))}
            className="min-h-10 rounded-full border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45 tracking-normal"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= pageCount || loading}
            onClick={() => onPageChange(pageNumber + 1)}
            className="min-h-10 rounded-full border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45 tracking-normal"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
