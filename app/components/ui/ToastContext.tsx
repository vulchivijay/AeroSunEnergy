'use client'

import { createContext, useContext } from 'react'

export type ToastKind = 'success' | 'error' | 'info'
export type ToastApi = {
  success: (message: string) => void
  error: (message: string) => void
  info: (message: string) => void
}

export const ToastContext = createContext<ToastApi | null>(null)

export function useToast(): ToastApi {
  const toast = useContext(ToastContext)
  if (!toast) throw new Error('useToast must be used within ToastProvider.')
  return toast
}
