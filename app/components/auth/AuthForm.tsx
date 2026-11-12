'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type AuthFormProps = {
  mode: 'login' | 'signup'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === 'signup'
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)
    setError('')

    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    if (isSignup && payload.password !== payload.confirmPassword) {
      setError('Passwords do not match.')
      setPending(false)
      return
    }

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        setError(result.error ?? 'Unable to continue. Please try again.')
        return
      }

      router.replace('/dashboard')
    } catch {
      setError('Unable to reach the server. Check your connection and try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <main className="relative isolate flex min-h-[65vh] items-center justify-center overflow-hidden bg-[#f7faf7] px-4 py-16 sm:px-6">
      <div className="absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" aria-hidden="true" />

      <section className="w-full max-w-md rounded-3xl border border-emerald-950/10 bg-white p-6 shadow-[0_28px_80px_-42px_rgba(4,47,30,0.35)] sm:p-9">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">AeroSun Energy</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {isSignup
              ? 'Sign up to get started with AeroSun Energy.'
              : 'Sign in to continue to your AeroSun Energy account.'}
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {isSignup && (
            <label className="block text-sm font-semibold text-slate-800">
              Full name
              <input
                autoComplete="name"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                maxLength={100}
                minLength={2}
                name="name"
                placeholder="Your name"
                required
              />
            </label>
          )}

          <label className="block text-sm font-semibold text-slate-800">
            Email address
            <input
              autoComplete="email"
              className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
              maxLength={254}
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-800">
            Password
            <input
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
              maxLength={128}
              minLength={isSignup ? 12 : 1}
              name="password"
              placeholder={isSignup ? 'At least 12 characters' : 'Your password'}
              required
              type="password"
            />
          </label>

          {isSignup && (
            <label className="block text-sm font-semibold text-slate-800">
              Confirm password
              <input
                autoComplete="new-password"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                maxLength={128}
                minLength={12}
                name="confirmPassword"
                placeholder="Re-enter your password"
                required
                type="password"
              />
            </label>
          )}

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
              {error}
            </p>
          )}

          <button
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-emerald-800 px-5 text-sm font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-800 disabled:cursor-wait disabled:opacity-65"
            disabled={pending}
            type="submit"
          >
            {pending ? 'Please wait...' : isSignup ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-600">
          {isSignup ? 'Already have an account?' : 'New to AeroSun Energy?'}{' '}
          <Link
            className="font-bold text-emerald-800 underline-offset-4 hover:underline"
            href={isSignup ? '/login' : '/signup'}
          >
            {isSignup ? 'Sign in' : 'Create an account'}
          </Link>
        </p>
      </section>
    </main>
  )
}
