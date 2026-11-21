'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, useSyncExternalStore, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import en from '@/public/locales/en/index.json'
import { mergeLocaleData } from '@/lib/localeData'

export type Locale = 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'ml'

const LOCALE_STORAGE_KEY = 'locale'
const LOCALE_CHANGE_EVENT = 'aerosun-locale-change'

const localeLoaders: Record<Exclude<Locale, 'en'>, () => Promise<unknown>> = {
  hi: () => import('@/public/locales/hi/index.json').then((module) => module.default),
  te: () => import('@/public/locales/te/index.json').then((module) => module.default),
  ta: () => import('@/public/locales/ta/index.json').then((module) => module.default),
  kn: () => import('@/public/locales/kn/index.json').then((module) => module.default),
  ml: () => import('@/public/locales/ml/index.json').then((module) => module.default),
}

const conceptLocaleLoaders: Record<Locale, () => Promise<LocaleConceptFile>> = {
  en: () => import('@/public/locales/en/basic-electrical-concepts.json').then((module) => module.default),
  hi: () => import('@/public/locales/hi/basic-electrical-concepts.json').then((module) => module.default),
  te: () => import('@/public/locales/te/basic-electrical-concepts.json').then((module) => module.default),
  ta: () => import('@/public/locales/ta/basic-electrical-concepts.json').then((module) => module.default),
  kn: () => import('@/public/locales/kn/basic-electrical-concepts.json').then((module) => module.default),
  ml: () => import('@/public/locales/ml/basic-electrical-concepts.json').then((module) => module.default),
}

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'hi' || value === 'te' ||
    value === 'ta' || value === 'kn' || value === 'ml'
}

function getLocalStorageLocale(): Locale | undefined {
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return saved && isLocale(saved) ? saved : undefined
  } catch {
    return undefined
  }
}

function getCookieLocale(): Locale | undefined {
  const saved = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${LOCALE_STORAGE_KEY}=`))
    ?.slice(LOCALE_STORAGE_KEY.length + 1)

  return saved && isLocale(saved) ? saved : undefined
}

function getStoredLocale(): Locale {
  return getLocalStorageLocale() ?? getCookieLocale() ?? 'en'
}

function saveLocaleCookie(locale: Locale) {
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie =
    `${LOCALE_STORAGE_KEY}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
}

function subscribeToLocale(callback: () => void) {
  window.addEventListener('storage', callback)
  window.addEventListener(LOCALE_CHANGE_EVENT, callback)

  return () => {
    window.removeEventListener('storage', callback)
    window.removeEventListener(LOCALE_CHANGE_EVENT, callback)
  }
}

export type ComponentContent = {
  purpose?: string
  working?: string
  types?: string[]
  applications?: string[]
  benefits?: string[]
  components?: string[]
}

export type ConceptComponent = {
  name: string
  category?: string
  image?: string
  content?: ComponentContent
}

export type BasicConceptMeta = {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
}

export type ConceptCollection = {
  title: string
  description: string
  meta?: BasicConceptMeta
  components: ConceptComponent[]
}

type LocaleConceptFile = {
  basic_electrical_concepts?: ConceptCollection
  electrical_concepts?: ConceptCollection
}

export type Translations = typeof en

export async function getBasicElectricalConceptData(locale: Locale): Promise<ConceptCollection> {
  const localeFile = await conceptLocaleLoaders[locale]()
  let collection =
    localeFile.basic_electrical_concepts ??
    localeFile.electrical_concepts

  if (!collection && locale !== 'en') {
    const fallbackFile = await conceptLocaleLoaders.en()
    collection = fallbackFile.basic_electrical_concepts ?? fallbackFile.electrical_concepts
  }

  if (!collection) {
    throw new Error(`Missing basic electrical concepts data for locale "${locale}" and English fallback`)
  }

  return collection
}

interface LocaleContextValue {
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  t: en,
})

export function LocaleProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocale,
    getStoredLocale,
    () => 'en',
  )
  const [localizedTranslations, setLocalizedTranslations] = useState<{
    locale: Locale
    translations: Translations
  } | null>(null)

  useEffect(() => {
    const preferredLocale = getLocalStorageLocale()
    const cookieLocale = getCookieLocale()
    if (preferredLocale && preferredLocale !== cookieLocale) {
      saveLocaleCookie(preferredLocale)
      router.refresh()
    }
  }, [router])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  useEffect(() => {
    if (locale === 'en') return

    let cancelled = false
    void localeLoaders[locale]()
      .then((localized) => {
        if (!cancelled) {
          setLocalizedTranslations({
            locale,
            translations: mergeLocaleData(en, localized),
          })
        }
      })
      .catch((error: unknown) => {
        if (cancelled) return
        console.error(`Unable to load translations for locale "${locale}".`, error)
        setLocalizedTranslations(null)
      })

    return () => {
      cancelled = true
    }
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, l)
    } catch {
      console.error(`Unable to save locale preference "${l}".`)
    }
    saveLocaleCookie(l)
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT))
    router.refresh()
  }, [router])

  const translations = locale === 'en'
    ? en
    : localizedTranslations?.locale === locale
      ? localizedTranslations.translations
      : en

  const contextValue = useMemo(
    () => ({ locale, setLocale, t: translations }),
    [locale, setLocale, translations],
  )

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
