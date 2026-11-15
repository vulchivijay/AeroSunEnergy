'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

type ToastKind = 'success' | 'error' | 'info'
type ToastItem = { id: number; kind: ToastKind; message: string }
type ToastApi = {
  success: (message: string) => void
  error: (message: string) => void
  info: (message: string) => void
}

const ToastContext = createContext<ToastApi | null>(null)

export function useToast(): ToastApi {
  const toast = useContext(ToastContext)
  if (!toast) throw new Error('useToast must be used within ToastProvider.')
  return toast
}

function ToastIcon({ kind }: { kind: ToastKind }) {
  if (kind === 'success') {
    return (
      <svg className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.78-9.97a.75.75 0 0 0-1.06-1.06L9 10.69 7.28 8.97a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l4.25-4.25Z" clipRule="evenodd" />
      </svg>
    )
  }
  if (kind === 'error') {
    return (
      <svg className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clipRule="evenodd" />
      </svg>
    )
  }
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0ZM9.25 8a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0V8Zm.75-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" clipRule="evenodd" />
    </svg>
  )
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const nextId = useRef(0)
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>())

  const dismiss = useCallback((id: number) => {
    const timer = timers.current.get(id)
    if (timer) clearTimeout(timer)
    timers.current.delete(id)
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const show = useCallback((kind: ToastKind, message: string) => {
    const id = ++nextId.current
    setToasts((current) => [...current, { id, kind, message }])
    timers.current.set(id, setTimeout(() => dismiss(id), 5000))
  }, [dismiss])

  const toast = useMemo<ToastApi>(() => ({
    success: (message) => show('success', message),
    error: (message) => show('error', message),
    info: (message) => show('info', message),
  }), [show])

  useEffect(() => {
    const activeTimers = timers.current
    let validationTimer: ReturnType<typeof setTimeout> | undefined
    let firstValidationMessage = ''
    const handleInvalid = (event: Event) => {
      const field = event.target
      if (!(field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement)) return

      event.preventDefault()
      if (!firstValidationMessage) {
        firstValidationMessage = field.validationMessage || 'Please review the highlighted form fields.'
      }
      if (validationTimer) return
      validationTimer = setTimeout(() => {
        toast.error(firstValidationMessage)
        firstValidationMessage = ''
        validationTimer = undefined
      }, 0)
    }

    document.addEventListener('invalid', handleInvalid, true)
    return () => {
      document.removeEventListener('invalid', handleInvalid, true)
      if (validationTimer) clearTimeout(validationTimer)
      for (const timer of activeTimers.values()) clearTimeout(timer)
      activeTimers.clear()
    }
  }, [toast])

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[100] flex w-[min(24rem,calc(100vw-2rem))] flex-col gap-3 sm:right-6 sm:top-6" aria-label="Notifications">
        {toasts.map((item) => (
          <div
            key={item.id}
            role={item.kind === 'error' ? 'alert' : 'status'}
            aria-live={item.kind === 'error' ? 'assertive' : 'polite'}
            aria-atomic="true"
            className={`pointer-events-auto flex items-start gap-3 rounded-2xl border bg-white p-4 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.38)] ${
              item.kind === 'success'
                ? 'border-emerald-200'
                : item.kind === 'error'
                  ? 'border-rose-200'
                  : 'border-sky-200'
            }`}
          >
            <ToastIcon kind={item.kind} />
            <p className="min-w-0 flex-1 text-sm font-medium leading-5 text-slate-800">{item.message}</p>
            <button
              type="button"
              onClick={() => dismiss(item.id)}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
              aria-label="Dismiss notification"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
