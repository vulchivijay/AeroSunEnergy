'use client'

import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLocale } from '@/lib/LocaleContext'
import { FormDataNotice } from '@/app/components/forms/FormDataNotice'
import { useToast } from '@/app/components/ui/ToastProvider'

type AuthFormProps = {
  mode: 'login' | 'signup'
}

function getErrorMessage(code: string | undefined, messages: Record<string, string>): string {
  return code && Object.prototype.hasOwnProperty.call(messages, code)
    ? messages[code]
    : messages.genericError
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === 'signup'
  const router = useRouter()
  const { t } = useLocale()
  const toast = useToast()
  const auth = t.auth
  const [pending, setPending] = useState(false)

  useEffect(() => {
    document.title = isSignup ? auth.signupTitle : auth.loginTitle
  }, [auth.loginTitle, auth.signupTitle, isSignup])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPending(true)

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const payload = Object.fromEntries(formData.entries())

    if (isSignup && payload.password !== payload.confirmPassword) {
      toast.error(auth.errors.passwordMismatch)
      setPending(false)
      return
    }

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { error?: string; pendingApproval?: boolean }

      if (!response.ok) {
        toast.error(getErrorMessage(result.error, auth.errors))
        return
      }

      if (isSignup && result.pendingApproval) {
        formElement.reset()
        toast.success(auth.signupPendingApproval)
        return
      }

      toast.success(auth.loginSuccess)
      router.replace('/dashboard')
    } catch {
      toast.error(auth.errors.networkError)
    } finally {
      setPending(false)
    }
  }

  return (
    <main className="relative isolate flex min-h-[65vh] items-center justify-center overflow-hidden bg-[#f7faf7] px-4 py-16 sm:px-6">
      <div className="absolute -left-24 top-8 -z-10 h-64 w-64 rounded-full bg-emerald-200/50 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" aria-hidden="true" />

      <section className="w-full max-w-md rounded-2xl border border-emerald-950/10 bg-gradient-to-br from-white to-[#f1f2f6] p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-700">{auth.brand}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            {isSignup ? auth.signupHeading : auth.loginHeading}
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {isSignup ? auth.signupDescription : auth.loginDescription}
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {isSignup && (
            <label className="block text-sm font-semibold text-slate-800">
              {auth.fullName}
              <input
                autoComplete="name"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                maxLength={100}
                minLength={2}
                name="name"
                placeholder={auth.namePlaceholder}
                required
              />
            </label>
          )}

          <label className="block text-sm font-semibold text-slate-800">
            {auth.emailAddress}
            <input
              autoComplete="email"
              className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
              maxLength={254}
              name="email"
              placeholder={auth.emailPlaceholder}
              required
              type="email"
            />
          </label>

          <label className="block text-sm font-semibold text-slate-800">
            {auth.password}
            <input
              autoComplete={isSignup ? 'new-password' : 'current-password'}
              className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
              maxLength={128}
              minLength={isSignup ? 12 : 1}
              name="password"
              placeholder={isSignup ? auth.signupPasswordHint : auth.passwordPlaceholder}
              required
              type="password"
            />
          </label>

          {isSignup && (
            <label className="block text-sm font-semibold text-slate-800">
              {auth.confirmPassword}
              <input
                autoComplete="new-password"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base font-normal outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-4 focus:ring-emerald-700/10"
                maxLength={128}
                minLength={12}
                name="confirmPassword"
                placeholder={auth.confirmPasswordPlaceholder}
                required
                type="password"
              />
            </label>
          )}

          <FormDataNotice />

          <button
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-emerald-800 px-5 text-sm font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-emerald-800 disabled:cursor-wait disabled:opacity-65"
            disabled={pending}
            type="submit"
          >
            {pending ? auth.pending : isSignup ? auth.submitSignup : auth.submitLogin}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-slate-600">
          {isSignup ? auth.alreadyHaveAccount : auth.newToAeroSun}{' '}
          <Link
            className="font-bold text-emerald-800 underline-offset-4 hover:underline"
            href={isSignup ? '/login' : '/signup'}
          >
            {isSignup ? auth.loginLink : auth.signupLink}
          </Link>
        </p>
      </section>
    </main>
  )
}
