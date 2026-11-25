import { Database, FileText, MailPlus, Users, type LucideIcon } from "lucide-react";
import { DigitalNumber } from "@/app/components/ui/DigitalNumber";

export type DashboardRole = "admin" | "operator" | "monitor";
export type DashboardRow = Record<string, unknown> & { id?: string };
export type DashboardResponse = {
  collection: string;
  page: number;
  pageSize: number;
  total: number;
  role: DashboardRole;
  rows: DashboardRow[];
};
export type CollectionsResponse = {
  collections: string[];
  role: DashboardRole;
};

export const formTypeOptions = [
  ["all", "All form types"],
  ["contact", "Contact"],
  ["newsletter", "Newsletter"],
  ["solar_assessment", "Solar assessment"],
  ["customer_enquiry", "Customer enquiry"],
  ["warranty_policy", "Warranty"],
  ["purchase_order", "Purchase order"],
  ["invoice_receipt", "Invoice / receipt"],
  ["customer_agreement", "Customer agreement"],
  ["installation_checklist", "Installation checklist"],
] as const;

const formSubmissionFields: Record<string, string[]> = {
  contact: ["fullName", "email", "phone", "solarNeed", "state", "monthlyAverageElectricityBill", "interestedInFinancing", "projectType", "message"],
  newsletter: ["email"],
  solar_assessment: ["name", "phone", "propertyType", "monthlyBill", "pinCode"],
  customer_enquiry: ["customer_name", "customer_email", "mobile_number", "project_name", "price_total"],
  warranty_policy: ["customerName", "email", "phone", "projectName", "productLine"],
  purchase_order: ["customerName", "poNumber", "projectTitle", "supplierName", "totalValue"],
  invoice_receipt: ["customerName", "invoiceNumber", "projectName", "amount", "paymentMode"],
  customer_agreement: ["customerName", "projectReference", "projectType", "systemCapacity", "quotedAmount"],
  installation_checklist: ["customerName", "companyName", "projectName", "siteLocation", "installationDate", "checklistStatus"],
};

const collectionIcons: Record<string, LucideIcon> = {
  auth_users: Users,
  website_form_submissions: MailPlus,
  solar_referrals: FileText,
};

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isDashboardRole(value: unknown): value is DashboardRole {
  return value === "admin" || value === "operator" || value === "monitor";
}

export function isCollectionsResponse(value: unknown): value is CollectionsResponse {
  return isRecord(value) &&
    Array.isArray(value.collections) &&
    value.collections.every((collection) => typeof collection === "string") &&
    isDashboardRole(value.role);
}

export function isDashboardResponse(value: unknown): value is DashboardResponse {
  return isRecord(value) &&
    typeof value.collection === "string" &&
    typeof value.page === "number" &&
    typeof value.pageSize === "number" &&
    typeof value.total === "number" &&
    isDashboardRole(value.role) &&
    Array.isArray(value.rows) &&
    value.rows.every(isRecord);
}

export function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === "") return "—";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) return value.map(formatValue).join(", ");
  return JSON.stringify(value) ?? String(value);
}

export function renderNumericValue(value: unknown) {
  if (typeof value === "number") return <DigitalNumber value={value} />;
  if (
    typeof value === "string" &&
    /^[\s₹$+-]*\d[\d,. /:-]*(?:[a-zA-Z²/]+)?\s*%?$/.test(value)
  ) {
    return <DigitalNumber value={value} />;
  }
  return formatValue(value);
}

function formatFieldLabel(field: string): string {
  return field
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function formatSubmissionDate(value: unknown): string {
  if (typeof value !== "string") return formatValue(value);
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (dateOnly) return `${dateOnly[3]}-${dateOnly[2]}-${dateOnly[1]}`;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}-${month}-${date.getFullYear()}`;
}

export function renderSubmissionDetails(row: DashboardRow) {
  const payload = row.payload;
  if (!isRecord(payload)) return "—";
  const fields = formSubmissionFields[String(row.form_type)] ?? [];
  const details = fields
    .filter((field) => payload[field] !== undefined && payload[field] !== null && payload[field] !== "")
    .map((field) => [
      field,
      /date/i.test(field) ? formatSubmissionDate(payload[field]) : payload[field],
    ] as const);

  if (details.length === 0) return "—";

  return (
    <dl className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
      {details.map(([field, value]) => (
        <div key={field} className="min-w-0">
          <dt className="inline text-xs font-semibold text-slate-500 tracking-normal">{formatFieldLabel(field)}: </dt>
          <dd className={`inline text-sm text-slate-800 ${field === "message" ? "line-clamp-2" : "break-words"}`}>
            {renderNumericValue(value)}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function formatCollectionName(collection: string): string {
  if (collection === "website_form_submissions") return "Form submissions";
  return collection.replace(/_/g, " ");
}

export function getCollectionIcon(collection: string): LucideIcon {
  return collectionIcons[collection] ?? Database;
}

export function editableJson(row: DashboardRow): string {
  const fields = Object.fromEntries(Object.entries(row).filter(([key]) => key !== "id"));
  return JSON.stringify(fields, null, 2);
}

export async function getApiError(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json();
    if (isRecord(body) && typeof body.error === "string") return body.error.replace(/_/g, " ");
  } catch {
    return `Request failed (${response.status}).`;
  }
  return `Request failed (${response.status}).`;
}
