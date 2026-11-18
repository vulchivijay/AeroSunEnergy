'use client'

import { Fragment, useEffect, useState, type FormEvent } from 'react'
import { Database, FileText, MailPlus, Users, type LucideIcon } from 'lucide-react'
import { useToast } from '@/app/components/ui/ToastProvider'

type DashboardRole = 'admin' | 'operator' | 'monitor'
type DashboardRow = Record<string, unknown> & { id?: string }
type DashboardResponse = {
  collection: string
  page: number
  pageSize: number
  total: number
  role: DashboardRole
  rows: DashboardRow[]
}
type CollectionsResponse = {
  collections: string[]
  role: DashboardRole
}

const formTypeOptions = [
  ['all', 'All form types'],
  ['contact', 'Contact'],
  ['newsletter', 'Newsletter'],
  ['solar_assessment', 'Solar assessment'],
  ['customer_enquiry', 'Customer enquiry'],
  ['warranty_policy', 'Warranty'],
  ['purchase_order', 'Purchase order'],
  ['invoice_receipt', 'Invoice / receipt'],
  ['customer_agreement', 'Customer agreement'],
  ['installation_checklist', 'Installation checklist'],
] as const
const formSubmissionFields: Record<string, string[]> = {
  contact: ['fullName', 'email', 'phone', 'solarNeed', 'state', 'monthlyAverageElectricityBill', 'interestedInFinancing', 'projectType', 'message'],
  newsletter: ['email'],
  solar_assessment: ['name', 'phone', 'propertyType', 'monthlyBill', 'pinCode'],
  customer_enquiry: ['customer_name', 'customer_email', 'mobile_number', 'project_name', 'price_total'],
  warranty_policy: ['customerName', 'email', 'phone', 'projectName', 'productLine'],
  purchase_order: ['customerName', 'poNumber', 'projectTitle', 'supplierName', 'totalValue'],
  invoice_receipt: ['customerName', 'invoiceNumber', 'projectName', 'amount', 'paymentMode'],
  customer_agreement: ['customerName', 'projectReference', 'projectType', 'systemCapacity', 'quotedAmount'],
  installation_checklist: ['customerName', 'companyName', 'projectName', 'siteLocation', 'installationDate', 'checklistStatus'],
}
const collectionIcons: Record<string, LucideIcon> = {
  auth_users: Users,
  website_form_submissions: MailPlus,
  solar_referrals: FileText,
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isDashboardRole(value: unknown): value is DashboardRole {
  return value === 'admin' || value === 'operator' || value === 'monitor'
}

function isCollectionsResponse(value: unknown): value is CollectionsResponse {
  return isRecord(value) &&
    Array.isArray(value.collections) &&
    value.collections.every((collection) => typeof collection === 'string') &&
    isDashboardRole(value.role)
}

function isDashboardResponse(value: unknown): value is DashboardResponse {
  return isRecord(value) &&
    typeof value.collection === 'string' &&
    typeof value.page === 'number' &&
    typeof value.pageSize === 'number' &&
    typeof value.total === 'number' &&
    isDashboardRole(value.role) &&
    Array.isArray(value.rows) &&
    value.rows.every(isRecord)
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (Array.isArray(value)) return value.map(formatValue).join(', ')
  return JSON.stringify(value) ?? String(value)
}

function formatFieldLabel(field: string): string {
  return field
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

function formatSubmissionDate(value: unknown): string {
  if (typeof value !== 'string') return formatValue(value)
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (dateOnly) return `${dateOnly[3]}-${dateOnly[2]}-${dateOnly[1]}`

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${day}-${month}-${date.getFullYear()}`
}

function renderSubmissionDetails(row: DashboardRow) {
  const payload = row.payload
  if (!isRecord(payload)) return '—'
  const fields = formSubmissionFields[String(row.form_type)] ?? []
  const details = fields
    .filter((field) => payload[field] !== undefined && payload[field] !== null && payload[field] !== '')
    .map((field) => [
      field,
      /date/i.test(field) ? formatSubmissionDate(payload[field]) : formatValue(payload[field]),
    ] as const)

  if (details.length === 0) return '—'

  return (
    <dl className="grid gap-x-4 gap-y-1 sm:grid-cols-2">
      {details.map(([field, value]) => (
        <div key={field} className="min-w-0">
          <dt className="inline text-xs font-semibold text-slate-500">{formatFieldLabel(field)}: </dt>
          <dd className={`inline text-sm text-slate-800 ${field === 'message' ? 'line-clamp-2' : 'break-words'}`}>
            {value}
          </dd>
        </div>
      ))}
    </dl>
  )
}

function formatCollectionName(collection: string): string {
  if (collection === 'website_form_submissions') return 'Form submissions'
  return collection.replace(/_/g, ' ')
}

function getCollectionIcon(collection: string): LucideIcon {
  return collectionIcons[collection] ?? Database
}

function editableJson(row: DashboardRow): string {
  const fields = Object.fromEntries(Object.entries(row).filter(([key]) => key !== 'id'))
  return JSON.stringify(fields, null, 2)
}

async function getApiError(response: Response): Promise<string> {
  try {
    const body: unknown = await response.json()
    if (isRecord(body) && typeof body.error === 'string') return body.error.replace(/_/g, ' ')
  } catch {
    return `Request failed (${response.status}).`
  }
  return `Request failed (${response.status}).`
}

type UserAccessManagerProps = {
  row: DashboardRow
  actorRole: DashboardRole
  onSaved: () => void
}

function UserAccessManager({ row, actorRole, onSaved }: UserAccessManagerProps) {
  const toast = useToast()
  const [role, setRole] = useState<DashboardRole>(isDashboardRole(row.role) ? row.role : 'monitor')
  const [approved, setApproved] = useState(row.approved === true)
  const [saving, setSaving] = useState(false)
  const isAdminAccount = row.role === 'admin'
  const disabled = actorRole === 'operator' && isAdminAccount

  async function saveAccess() {
    if (typeof row.id !== 'string') {
      toast.error('This account has no supported record ID.')
      return
    }

    setSaving(true)
    try {
      const response = await fetch('/api/dashboard', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'manage_user', id: row.id, role, approved }),
      })
      if (!response.ok) throw new Error(await getApiError(response))
      toast.success('Account access updated.')
      onSaved()
    } catch (saveError) {
      toast.error(saveError instanceof Error ? saveError.message : 'Account access could not be updated.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="mt-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-3">
      <p className="text-xs font-bold uppercase tracking-wide text-emerald-900">Account access</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          Role
          <select
            value={role}
            disabled={disabled || saving}
            onChange={(event) => {
              if (isDashboardRole(event.target.value)) setRole(event.target.value)
            }}
            className="min-h-9 rounded-xl border border-slate-300 bg-white px-2 text-sm disabled:opacity-60"
          >
            <option value="monitor">Monitor</option>
            <option value="operator">Operator</option>
            {actorRole === 'admin' && <option value="admin">Admin</option>}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
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
          className="min-h-9 rounded-full bg-emerald-800 px-4 text-xs font-bold text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? 'Saving…' : 'Save access'}
        </button>
      </div>
      {disabled && <p className="mt-2 text-xs text-slate-600">Only an admin can change an admin account.</p>}
    </div>
  )
}

export default function DashboardDataTabs() {
  const toast = useToast()
  const [collections, setCollections] = useState<string[]>([])
  const [activeCollection, setActiveCollection] = useState('')
  const [role, setRole] = useState<DashboardRole>('monitor')
  const [formType, setFormType] = useState('all')
  const [page, setPage] = useState(1)
  const [data, setData] = useState<DashboardResponse | null>(null)
  const [loadingCollections, setLoadingCollections] = useState(true)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [retryCount, setRetryCount] = useState(0)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [createJson, setCreateJson] = useState('{\n  \n}')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editJson, setEditJson] = useState('')
  const [savingRecord, setSavingRecord] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    async function loadCollections() {
      setLoadingCollections(true)
      try {
        const response = await fetch('/api/dashboard?list=collections', {
          cache: 'no-store',
          signal: controller.signal,
        })
        const result: unknown = await response.json()
        if (!response.ok || !isCollectionsResponse(result)) {
          throw new Error('Collections could not be loaded.')
        }
        setCollections(result.collections)
        setRole(result.role)
        setActiveCollection((current) => {
          if (current && result.collections.includes(current)) return current
          return result.collections.includes('website_form_submissions')
            ? 'website_form_submissions'
            : result.collections[0] ?? ''
        })
      } catch (loadError) {
        if (loadError instanceof Error && loadError.name === 'AbortError') return
        setError('Collections could not be loaded. Please try again.')
        toast.error('Collections could not be loaded. Please try again.')
      } finally {
        if (!controller.signal.aborted) setLoadingCollections(false)
      }
    }

    void loadCollections()
    return () => controller.abort()
  }, [retryCount, toast])

  useEffect(() => {
    if (!activeCollection) return

    const controller = new AbortController()
    const params = new URLSearchParams({
      collection: activeCollection,
      page: String(page),
    })
    if (activeCollection === 'website_form_submissions' && formType !== 'all') {
      params.set('formType', formType)
    }

    async function loadData() {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(`/api/dashboard?${params.toString()}`, {
          cache: 'no-store',
          signal: controller.signal,
        })
        const result: unknown = await response.json()
        if (!response.ok || !isDashboardResponse(result)) {
          throw new Error('Dashboard records could not be loaded.')
        }
        setData(result)
        setRole(result.role)
      } catch (loadError) {
        if (loadError instanceof Error && loadError.name === 'AbortError') return
        setData(null)
        setError('Records could not be loaded. Please try again.')
        toast.error('Records could not be loaded. Please try again.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void loadData()
    return () => controller.abort()
  }, [activeCollection, formType, page, retryCount, toast])

  const pageCount = data ? Math.max(1, Math.ceil(data.total / data.pageSize)) : 1
  const isAccountCollection = activeCollection === 'auth_users' || activeCollection === 'auth_sessions'
  const canEditRecords =
    (role === 'admin' && activeCollection === 'auth_users') ||
    ((role === 'admin' || role === 'operator') && !isAccountCollection)
  const canCreateRecords = (role === 'admin' || role === 'operator') && !isAccountCollection
  const canDeleteRecords = role === 'admin' || (role === 'operator' && !isAccountCollection)
  const hasUserAccessControls =
    activeCollection === 'auth_users' && (role === 'admin' || role === 'operator')
  const hasActions = canEditRecords || canDeleteRecords || hasUserAccessControls
  const isFormSubmissions = activeCollection === 'website_form_submissions'
  const columns = isFormSubmissions
    ? ['reference_code', 'form_type', 'payload', 'status', 'created_at', 'updated_at']
    : data
      ? [...new Set(data.rows.flatMap((row) => Object.keys(row)))]
      : []

  function chooseCollection(collection: string) {
    setActiveCollection(collection)
    setPage(1)
    setFormType('all')
    setEditingId(null)
  }

  async function submitRecord(event: FormEvent<HTMLFormElement>, mode: 'create' | 'update', id?: string) {
    event.preventDefault()
    setSavingRecord(true)
    try {
      const parsed: unknown = JSON.parse(mode === 'create' ? createJson : editJson)
      if (!isRecord(parsed)) throw new Error('Enter a JSON object.')
      const response = await fetch('/api/dashboard', {
        method: mode === 'create' ? 'POST' : 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mode === 'create'
          ? { collection: activeCollection, document: parsed }
          : { collection: activeCollection, id, document: parsed }),
      })
      if (!response.ok) throw new Error(await getApiError(response))
      setShowCreateForm(false)
      setEditingId(null)
      setCreateJson('{\n  \n}')
      setRetryCount((current) => current + 1)
      toast.success(mode === 'create' ? 'Record created.' : 'Record updated.')
    } catch (saveError) {
      toast.error(saveError instanceof Error ? saveError.message : 'The record could not be saved.')
    } finally {
      setSavingRecord(false)
    }
  }

  async function deleteRecord(id: string) {
    if (!window.confirm('Delete this record? This cannot be undone.')) return
    try {
      const params = new URLSearchParams({ collection: activeCollection, id })
      const response = await fetch(`/api/dashboard?${params.toString()}`, { method: 'DELETE' })
      if (!response.ok) throw new Error(await getApiError(response))
      setRetryCount((current) => current + 1)
      toast.success('Record deleted.')
    } catch (deleteError) {
      toast.error(deleteError instanceof Error ? deleteError.message : 'The record could not be deleted.')
    }
  }

  return (
    <section className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50/80 px-5 pt-5 sm:px-7">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Database collections">
          {collections.map((collection) => {
            const Icon = getCollectionIcon(collection)
            return (
              <button
                key={collection}
                type="button"
                aria-pressed={activeCollection === collection}
                onClick={() => chooseCollection(collection)}
                className={`min-h-11 rounded-t-xl border px-4 text-sm font-bold capitalize transition ${
                  activeCollection === collection
                    ? 'border-slate-200 border-b-white bg-white text-emerald-900'
                    : 'border-transparent text-slate-500 hover:bg-white/70 hover:text-slate-900'
                }`}
              >
                <Icon className="mr-2 inline-block h-4 w-4 align-[-3px]" aria-hidden="true" />
                {formatCollectionName(collection)}
              </button>
            )
          })}
        </div>
      </div>

      <div className="p-5 sm:p-7" aria-live="polite">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold capitalize text-slate-950">{formatCollectionName(activeCollection || 'Collections')}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {role === 'admin'
                ? 'Admin access · manage collection records and account roles.'
                : role === 'operator'
                  ? 'Operator access · manage business records and approved account roles.'
                  : 'Monitor access · read-only view of collection records.'}
            </p>
          </div>
          <div className="flex flex-wrap items-end gap-3">
            {activeCollection === 'website_form_submissions' && (
              <label className="grid gap-1.5 text-xs font-bold uppercase tracking-wide text-slate-500">
                Filter by form
                <select
                  value={formType}
                  onChange={(event) => {
                    setFormType(event.target.value)
                    setPage(1)
                  }}
                  className="min-h-10 rounded-xl border border-slate-300 bg-white px-3 text-sm font-medium normal-case tracking-normal text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
                >
                  {formTypeOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
                </select>
              </label>
            )}
            {canCreateRecords && (
              <button
                type="button"
                onClick={() => {
                  setShowCreateForm((current) => !current)
                  setEditingId(null)
                }}
                className="min-h-10 rounded-full bg-emerald-800 px-4 text-sm font-bold text-white hover:bg-emerald-900"
              >
                {showCreateForm ? 'Cancel' : 'New record'}
              </button>
            )}
          </div>
        </div>

        {canCreateRecords && showCreateForm && (
          <form onSubmit={(event) => void submitRecord(event, 'create')} className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50/40 p-4">
            <label className="grid gap-2 text-sm font-bold text-slate-800">
              New record (JSON)
              <textarea
                value={createJson}
                onChange={(event) => setCreateJson(event.target.value)}
                rows={7}
                spellCheck={false}
                placeholder="Enter a JSON object for the new record."
                className="w-full rounded-xl border border-slate-300 bg-white p-3 font-mono text-xs text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
              />
            </label>
            <button type="submit" disabled={savingRecord} className="mt-3 min-h-10 rounded-full bg-emerald-800 px-4 text-sm font-bold text-white hover:bg-emerald-900 disabled:opacity-50">
              {savingRecord ? 'Saving…' : 'Create record'}
            </button>
          </form>
        )}

        {error ? (
          <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-800" role="alert">
            <p>{error}</p>
            <button type="button" onClick={() => setRetryCount((current) => current + 1)} className="mt-3 font-bold underline underline-offset-2">
              Retry
            </button>
          </div>
        ) : loadingCollections || (activeCollection !== '' && loading) ? (
          <div className="mt-6 rounded-2xl bg-slate-50 px-5 py-12 text-center text-sm font-medium text-slate-500" role="status">
            Loading records…
          </div>
        ) : !activeCollection ? (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">
            <p className="font-semibold text-slate-800">No collections found</p>
            <p className="mt-1 text-sm text-slate-500">Database collections will appear here when available.</p>
          </div>
        ) : data?.rows.length ? (
          <>
            <div className="mt-6 overflow-x-auto overscroll-x-contain rounded-2xl border border-emerald-100" tabIndex={0} aria-label={`${formatCollectionName(activeCollection)} records table`}>
              <table className="min-w-max w-full text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-emerald-100 [&_td]:border-b [&_td]:border-emerald-100 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
                <thead className="bg-amber-700 text-xs font-bold uppercase tracking-wide text-white">
                  <tr>
                    {columns.map((column) => (
                      <th key={column} className="whitespace-nowrap px-4 py-3 font-bold">
                        {isFormSubmissions && column === 'payload' ? 'Submitted details' : column.replace(/_/g, ' ')}
                      </th>
                    ))}
                    {hasActions && <th className="whitespace-nowrap px-4 py-3 font-bold">Actions</th>}
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100">
                  {data.rows.map((row, index) => {
                const id = typeof row.id === 'string' ? row.id : ''
                const isEditing = id !== '' && editingId === id
                return (
                  <Fragment key={id || `${data.collection}-${index}`}>
                    <tr className="align-top text-slate-700 odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                      {columns.map((column) => (
                        <td key={column} className={`${column === 'payload' ? 'min-w-[20rem] max-w-[34rem]' : 'min-w-[8rem] max-w-[28rem]'} whitespace-normal px-4 py-3`}>
                          <div className="break-words">
                            {column === 'payload'
                              ? isFormSubmissions
                                ? renderSubmissionDetails(row)
                                : formatValue(row[column])
                              : column === 'created_at' || column === 'updated_at'
                                ? formatSubmissionDate(row[column])
                                : isFormSubmissions && column === 'form_type'
                                  ? formTypeOptions.find(([value]) => value === row[column])?.[1] ?? formatValue(row[column])
                                  : formatValue(row[column])}
                          </div>
                        </td>
                      ))}
                      {hasActions && (
                        <td className="min-w-[12rem] px-4 py-3">
                          <div className="flex flex-wrap gap-2">
                            {canEditRecords && id && (
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingId(isEditing ? null : id)
                                  setEditJson(editableJson(row))
                                }}
                                className="min-h-9 rounded-full border border-slate-300 px-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
                              >
                                {isEditing ? 'Cancel edit' : 'Edit'}
                              </button>
                            )}
                            {canDeleteRecords && id && (
                              <button
                                type="button"
                                onClick={() => void deleteRecord(id)}
                                className="min-h-9 rounded-full border border-rose-200 px-3 text-xs font-bold text-rose-700 hover:bg-rose-50"
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
                              onSaved={() => setRetryCount((current) => current + 1)}
                            />
                          )}
                        </td>
                      )}
                    </tr>
                    {isEditing && (
                      <tr className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
                        <td colSpan={columns.length + Number(hasActions)} className="p-4">
                          <form onSubmit={(event) => void submitRecord(event, 'update', id)} className="max-w-4xl">
                            <label className="grid gap-2 text-sm font-bold text-slate-800">
                              Update record (JSON)
                              <textarea
                                value={editJson}
                                onChange={(event) => setEditJson(event.target.value)}
                                rows={8}
                                spellCheck={false}
                                placeholder="Enter the updated JSON object."
                                className="w-full rounded-xl border border-slate-300 bg-white p-3 font-mono text-xs text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
                              />
                            </label>
                            <button type="submit" disabled={savingRecord} className="mt-3 min-h-10 rounded-full bg-emerald-800 px-4 text-sm font-bold text-white hover:bg-emerald-900 disabled:opacity-50">
                              {savingRecord ? 'Saving…' : 'Save changes'}
                            </button>
                          </form>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                )
              })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>{data.total.toLocaleString()} records · Page {data.page} of {pageCount}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={data.page <= 1 || loading}
                  onClick={() => setPage((current) => Math.max(1, current - 1))}
                  className="min-h-10 rounded-full border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={data.page >= pageCount || loading}
                  onClick={() => setPage((current) => current + 1)}
                  className="min-h-10 rounded-full border border-slate-300 px-4 font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">
            <p className="font-semibold text-slate-800">No records found</p>
            <p className="mt-1 text-sm text-slate-500">Records in this collection will appear here.</p>
          </div>
        )}
      </div>
    </section>
  )
}
