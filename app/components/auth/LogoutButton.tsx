'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleLogout() {
    setPending(true)
    setError('')

    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' })
      if (!response.ok) {
        const result = (await response.json()) as { error?: string }
        setError(result.error ?? 'Unable to sign out. Please try again.')
        return
      }

      router.replace('/login')
      router.refresh()
    } catch {
      setError('Unable to reach the server. Please try again.')
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
      {error && <p className="mt-3 text-sm text-red-700" role="alert">{error}</p>}
    </div>
  )
}
