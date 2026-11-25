"use client";

import { useState } from "react";
import { useToast } from "@/app/components/ui/ToastContext";

type DashboardRole = "admin" | "operator" | "monitor";
type DashboardRow = Record<string, unknown> & { id?: string };

function isDashboardRole(value: unknown): value is DashboardRole {
  return value === "admin" || value === "operator" || value === "monitor";
}

async function getApiError(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json();
    if (typeof body === "object" && body !== null && !Array.isArray(body) &&
      "error" in body && typeof body.error === "string") {
      return body.error.replace(/_/g, " ");
    }
  } catch {
    return `Request failed (${response.status}).`;
  }
  return `Request failed (${response.status}).`;
}

type UserAccessManagerProps = {
  row: DashboardRow;
  actorRole: DashboardRole;
  onSaved: () => void;
};

export function UserAccessManager({ row, actorRole, onSaved }: UserAccessManagerProps) {
  const toast = useToast();
  const [role, setRole] = useState<DashboardRole>(isDashboardRole(row.role) ? row.role : "monitor");
  const [approved, setApproved] = useState(row.approved === true);
  const [saving, setSaving] = useState(false);
  const isAdminAccount = row.role === "admin";
  const disabled = actorRole === "operator" && isAdminAccount;

  async function saveAccess() {
    if (typeof row.id !== "string") {
      toast.error("This account has no supported record ID.");
      return;
    }

    setSaving(true);
    try {
      const response = await fetch("/api/dashboard", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "manage_user", id: row.id, role, approved }),
      });
      if (!response.ok) throw new Error(await getApiError(response));
      toast.success("Account access updated.");
      onSaved();
    } catch (saveError) {
      toast.error(saveError instanceof Error ? saveError.message : "Account access could not be updated.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-4 rounded-xl border border-slate-200 bg-emerald-50/50 p-3">
      <p className="uppercase text-emerald-900    text-xs font-semibold tracking-wide leading-5">Account access</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
          Role
          <select
            value={role}
            disabled={disabled || saving}
            onChange={(event) => {
              if (isDashboardRole(event.target.value)) setRole(event.target.value);
            }}
            className="min-h-9 rounded-lg border border-slate-300 bg-white px-2 text-sm disabled:opacity-60"
          >
            <option value="monitor">Monitor</option>
            <option value="operator">Operator</option>
            {actorRole === "admin" && <option value="admin">Admin</option>}
          </select>
        </label>
        <label className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
          <input
            type="checkbox"
            checked={approved}
            disabled={disabled || saving}
            onChange={(event) => setApproved(event.target.checked)}
            className="size-4 accent-emerald-800"
          />
          Approved to sign in
        </label>
        <button
          type="button"
          disabled={disabled || saving}
          onClick={() => void saveAccess()}
          className="min-h-9 rounded-full bg-emerald-800 px-4 text-xs font-bold text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-50 tracking-normal"
        >
          {saving ? "Saving…" : "Save access"}
        </button>
      </div>
      {disabled && <p className="mt-2 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">Only an admin can change an admin account.</p>}
    </div>
  );
}
