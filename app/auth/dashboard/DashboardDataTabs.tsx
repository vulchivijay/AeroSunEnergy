'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { useToast } from '@/app/components/ui/ToastContext'
import { DashboardRecordsTable } from './DashboardRecordsTable'
import { DashboardCollectionSidebar } from './DashboardCollectionSidebar'
import { DashboardCollectionOverview } from './DashboardCollectionOverview'
import {
  editableJson,
  formatCollectionName,
  formatSubmissionDate,
  formatValue,
  formTypeOptions,
  getApiError,
  isCollectionsResponse,
  isDashboardResponse,
  isRecord,
  renderNumericValue,
  renderSubmissionDetails,
  type DashboardResponse,
  type DashboardRole,
} from './DashboardDataUtils'

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
    <section className="mt-6 grid overflow-hidden rounded-xl border border-slate-200 bg-white/25 shadow-sm backdrop-blur-xl lg:grid-cols-[230px_minmax(0,1fr)]">
      <DashboardCollectionSidebar
        collections={collections}
        activeCollection={activeCollection}
        role={role}
        onChooseCollection={chooseCollection}
      />

      <div className="min-w-0 p-4 sm:p-6 lg:p-8" aria-live="polite">
        <DashboardCollectionOverview
          activeCollection={activeCollection}
          role={role}
          data={data}
          pageCount={pageCount}
          formType={formType}
          canCreateRecords={canCreateRecords}
          showCreateForm={showCreateForm}
          onFormTypeChange={(value) => {
            setFormType(value)
            setPage(1)
          }}
          onToggleCreateForm={() => {
            setShowCreateForm((current) => !current)
            setEditingId(null)
          }}
        />

        {canCreateRecords && showCreateForm && (
          <form onSubmit={(event) => void submitRecord(event, 'create')} className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
            <label className="grid gap-2 text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
              New record (JSON)
              <textarea
                value={createJson}
                onChange={(event) => setCreateJson(event.target.value)}
                rows={7}
                spellCheck={false}
                placeholder="Enter a JSON object for the new record."
                className="w-full rounded-lg border border-slate-300 bg-white p-3 font-mono text-xs text-slate-800 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15 tabular-nums"
              />
            </label>
            <button type="submit" disabled={savingRecord} className="mt-3 min-h-10 rounded-full bg-emerald-800 px-4 text-sm font-bold text-white hover:bg-emerald-900 disabled:opacity-50 tracking-normal">
              {savingRecord ? 'Saving…' : 'Create record'}
            </button>
          </form>
        )}

        {error ? (
          <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-800" role="alert">
            <p>{error}</p>
            <button type="button" onClick={() => setRetryCount((current) => current + 1)} className="mt-3 font-bold underline underline-offset-2 tracking-normal">
              Retry
            </button>
          </div>
        ) : loadingCollections || (activeCollection !== '' && loading) ? (
          <div className="mt-6 rounded-xl bg-slate-50 px-5 py-12 text-center text-sm font-medium text-slate-500 tracking-normal" role="status">
            Loading records…
          </div>
        ) : !activeCollection ? (
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">
            <p className="text-slate-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">No collections found</p>
            <p className="mt-1 text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">Database collections will appear here when available.</p>
          </div>
        ) : data?.rows.length ? (
          <DashboardRecordsTable
            collection={activeCollection}
            collectionLabel={formatCollectionName(activeCollection)}
            rows={data.rows}
            columns={columns}
            isFormSubmissions={isFormSubmissions}
            hasActions={hasActions}
            canEditRecords={canEditRecords}
            canDeleteRecords={canDeleteRecords}
            hasUserAccessControls={hasUserAccessControls}
            role={role}
            editingId={editingId}
            editJson={editJson}
            savingRecord={savingRecord}
            pageCount={pageCount}
            pageNumber={data.page}
            total={data.total}
            loading={loading}
            renderCell={(row, column) =>
              column === 'payload'
                ? isFormSubmissions
                  ? renderSubmissionDetails(row)
                  : renderNumericValue(row[column])
                : column === 'created_at' || column === 'updated_at'
                  ? renderNumericValue(formatSubmissionDate(row[column]))
                  : isFormSubmissions && column === 'form_type'
                    ? formTypeOptions.find(([value]) => value === row[column])?.[1] ?? formatValue(row[column])
                    : renderNumericValue(row[column])
            }
            onToggleEdit={(row, id, isEditing) => {
              setEditingId(isEditing ? null : id)
              setEditJson(editableJson(row))
            }}
            onDeleteRecord={(id) => void deleteRecord(id)}
            onEditJsonChange={setEditJson}
            onSaveRecord={(event, mode, id) => void submitRecord(event, mode, id)}
            onAccessSaved={() => setRetryCount((current) => current + 1)}
            onPageChange={setPage}
          />
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-12 text-center">
            <p className="text-slate-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">No records found</p>
            <p className="mt-1 text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">Records in this collection will appear here.</p>
          </div>
        )}
      </div>
    </section>
  )
}
