'use client'

import { useEffect, useState } from 'react'

type DashboardTable = 'submissions' | 'referrals' | 'users' | 'sessions'
type DashboardRow = Record<string, unknown>

type DashboardResponse = {
  table: DashboardTable
  page: number
  pageSize: number
  total: number
  rows: DashboardRow[]
}

const tabs: { id: DashboardTable; label: string; description: string }[] = [
  { id: 'submissions', label: 'Website forms', description: 'Contact, newsletter, solar assessment, and business-form submissions.' },
  { id: 'referrals', label: 'Referrals', description: 'Customer referrals and their current status.' },
  { id: 'users', label: 'Accounts', description: 'Registered account details. Password hashes are never shown.' },
  { id: 'sessions', label: 'Sessions', description: 'Session metadata only. Session tokens are never shown.' },
]

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
const dashboardTables: DashboardTable[] = ['submissions', 'referrals', 'users', 'sessions']

const tableColumns: Record<Exclude<DashboardTable, 'submissions'>, { key: string; label: string }[]> = {
  referrals: [
    { key: 'id', label: 'ID' },
    { key: 'reference_code', label: 'Reference' },
    { key: 'referrer_name', label: 'Referrer' },
    { key: 'referrer_phone', label: 'Referrer phone' },
    { key: 'referred_name', label: 'Referred person' },
    { key: 'referred_phone', label: 'Referred phone' },
    { key: 'postal_code', label: 'PIN code' },
    { key: 'property_type', label: 'Property' },
    { key: 'status', label: 'Status' },
    { key: 'referrer_permission_confirmed_at', label: 'Permission confirmed' },
    { key: 'created_at', label: 'Submitted' },
    { key: 'updated_at', label: 'Updated' },
  ],
  users: [
    { key: 'id', label: 'Account ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'created_at', label: 'Created' },
  ],
  sessions: [
    { key: 'id', label: 'Session ID' },
    { key: 'user_id', label: 'Account ID' },
    { key: 'name', label: 'Account' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
    { key: 'created_at', label: 'Created' },
    { key: 'expires_at', label: 'Expires' },
  ],
}

function isDashboardResponse(value: unknown): value is DashboardResponse {
  if (typeof value !== 'object' || value === null) return false
  if (!('table' in value) || !dashboardTables.includes(value.table as DashboardTable)) return false
  if (!('page' in value) || typeof value.page !== 'number') return false
  if (!('pageSize' in value) || typeof value.pageSize !== 'number') return false
  if (!('total' in value) || typeof value.total !== 'number') return false
  if (!('rows' in value) || !Array.isArray(value.rows)) return false
  return value.rows.every((row) => typeof row === 'object' && row !== null && !Array.isArray(row))
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined || value === '') return '—'
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value)
  if (Array.isArray(value)) return value.map(formatValue).join(', ')
  return JSON.stringify(value) ?? String(value)
}

function getSubmissionDetails(payload: unknown): [string, unknown][] {
  let value = payload
  if (typeof payload === 'string') {
    try {
      value = JSON.parse(payload) as unknown
    } catch {
      return [['Submission payload', payload]]
    }
  }
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return [['Submission payload', value]]
  }
  return Object.entries(value)
}

function formatDate(value: unknown): string {
  if (typeof value !== 'string' || !value) return formatValue(value)
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

export default function DashboardDataTabs() {
  const [activeTable, setActiveTable] = useState<DashboardTable>('submissions')
  const [formType, setFormType] = useState('all')
  const [page, setPage] = useState(1)
  const [data, setData] = useState<DashboardResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const controller = new AbortController()
    const params = new URLSearchParams({ table: activeTable, page: String(page) })
    if (activeTable === 'submissions' && formType !== 'all') params.set('formType', formType)

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
      } catch (loadError) {
        if (loadError instanceof Error && loadError.name === 'AbortError') return
        setData(null)
        setError('Records could not be loaded. Please try again.')
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    void loadData()
    return () => controller.abort()
  }, [activeTable, formType, page, retryCount])

  const pageCount = data ? Math.max(1, Math.ceil(data.total / data.pageSize)) : 1

  function chooseTable(table: DashboardTable) {
    setActiveTable(table)
    setPage(1)
  }

  return (
    <section className="mt-7 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_70px_-44px_rgba(15,23,42,0.28)]">
      <div className="border-b border-slate-200 bg-slate-50/80 px-5 pt-5 sm:px-7">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Database tables">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              aria-pressed={activeTable === tab.id}
              onClick={() => chooseTable(tab.id)}
              className={`min-h-11 rounded-t-xl border px-4 text-sm font-bold transition ${
                activeTable === tab.id
                  ? 'border-slate-200 border-b-white bg-white text-emerald-900'
                  : 'border-transparent text-slate-500 hover:bg-white/70 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-7" aria-live="polite">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-950">{tabs.find((tab) => tab.id === activeTable)?.label}</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">{tabs.find((tab) => tab.id === activeTable)?.description}</p>
          </div>
          {activeTable === 'submissions' && (
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
        </div>

        {error ? (
          <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-800" role="alert">
            <p>{error}</p>
            <button type="button" onClick={() => setRetryCount((current) => current + 1)} className="mt-3 font-bold underline underline-offset-2">
              Retry
            </button>
          </div>
        ) : loading ? (
          <div className="mt-6 rounded-2xl bg-slate-50 px-5 py-12 text-center text-sm font-medium text-slate-500" role="status">
            Loading records…
          </div>
        ) : data?.rows.length ? (
          <>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              {activeTable === 'submissions' ? (
                <table className="min-w-[760px] w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      {['ID', 'Reference', 'Form', 'Status', 'Submitted', 'Updated', 'Stored fields'].map((heading) => <th key={heading} className="px-4 py-3 font-bold">{heading}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.rows.map((row) => (
                      <tr key={formatValue(row.id)} className="align-top text-slate-700">
                        <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">{formatValue(row.id)}</td>
                        <td className="whitespace-nowrap px-4 py-4 font-mono text-xs font-semibold text-emerald-900">{formatValue(row.reference_code)}</td>
                        <td className="whitespace-nowrap px-4 py-4">{formatValue(row.form_type).replace(/_/g, ' ')}</td>
                        <td className="px-4 py-4"><span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold capitalize text-amber-800">{formatValue(row.status)}</span></td>
                        <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">{formatDate(row.created_at)}</td>
                        <td className="whitespace-nowrap px-4 py-4 text-xs text-slate-500">{formatDate(row.updated_at)}</td>
                        <td className="px-4 py-4">
                          <details className="max-w-2xl">
                            <summary className="cursor-pointer font-semibold text-emerald-800 underline underline-offset-2">View fields</summary>
                            <dl className="mt-3 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                              {getSubmissionDetails(row.payload).map(([key, value]) => (
                                <div key={key} className="min-w-0 rounded-lg bg-slate-50 p-2.5">
                                  <dt className="break-words text-[11px] font-bold uppercase tracking-wide text-slate-500">{key.replace(/_/g, ' ')}</dt>
                                  <dd className="mt-1 break-words text-sm text-slate-800">{formatValue(value)}</dd>
                                </div>
                              ))}
                            </dl>
                          </details>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                    <tr>
                      {tableColumns[activeTable].map((column) => <th key={column.key} className="whitespace-nowrap px-4 py-3 font-bold">{column.label}</th>)}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.rows.map((row) => (
                      <tr key={formatValue(row.id)} className="text-slate-700">
                        {tableColumns[activeTable].map((column) => (
                          <td key={column.key} className="whitespace-nowrap px-4 py-3">
                            {column.key.endsWith('_at') ? formatDate(row[column.key]) : formatValue(row[column.key])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
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
            <p className="mt-1 text-sm text-slate-500">New submissions will appear here after they are saved.</p>
          </div>
        )}
      </div>
    </section>
  )
}
