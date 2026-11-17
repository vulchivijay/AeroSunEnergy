'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from '@/app/components/ui/ToastProvider'

export default function LogoutButton() {
  const router = useRouter()
  const toast = useToast()
  const [pending, setPending] = useState(false)

  async function handleLogout() {
    setPending(true)

    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' })
      if (!response.ok) {
        const result = (await response.json()) as { error?: string }
        toast.error(result.error ?? 'Unable to sign out. Please try again.')
        return
      }

      toast.success('Signed out.')
      router.replace('/auth')
      router.refresh()
    } catch {
      toast.error('Unable to reach the server. Please try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div>
      <button
        className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-800 px-5 text-sm font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-800 disabled:cursor-wait disabled:opacity-65"
        disabled={pending}
        onClick={handleLogout}
        type="button"
      >
        {pending ? 'Signing out...' : 'Sign out'}
      </button>
    </div>
  )
}
