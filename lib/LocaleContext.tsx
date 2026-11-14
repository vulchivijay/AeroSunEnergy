'use client'

import { createContext, useContext, useEffect, useSyncExternalStore, ReactNode } from 'react'
import en from '@/public/locales/en/index.json'
import hi from '@/public/locales/hi/index.json'
import te from '@/public/locales/te/index.json'
import ta from '@/public/locales/ta/index.json'
import kn from '@/public/locales/kn/index.json'
import ml from '@/public/locales/ml/index.json'
import enBasicElectricalConcepts from '@/public/locales/en/basic-electrical-concepts.json'
import hiBasicElectricalConcepts from '@/public/locales/hi/basic-electrical-concepts.json'
import teBasicElectricalConcepts from '@/public/locales/te/basic-electrical-concepts.json'
import taBasicElectricalConcepts from '@/public/locales/ta/basic-electrical-concepts.json'
import knBasicElectricalConcepts from '@/public/locales/kn/basic-electrical-concepts.json'
import mlBasicElectricalConcepts from '@/public/locales/ml/basic-electrical-concepts.json'

export type Locale = 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'ml'

const locales = { en, hi, te, ta, kn, ml }
const LOCALE_STORAGE_KEY = 'locale'
const LOCALE_CHANGE_EVENT = 'aerosun-locale-change'

export function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'hi' || value === 'te' ||
    value === 'ta' || value === 'kn' || value === 'ml'
}

function getStoredLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    return saved && isLocale(saved) ? saved : 'en'
  } catch {
    return 'en'
  }
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

const basicElectricalConceptLocales: Record<Locale, LocaleConceptFile> = {
  en: enBasicElectricalConcepts,
  hi: hiBasicElectricalConcepts,
  te: teBasicElectricalConcepts,
  ta: taBasicElectricalConcepts,
  kn: knBasicElectricalConcepts,
  ml: mlBasicElectricalConcepts,
}

function mergeLocaleData<T>(fallback: T, localized: unknown): T {
  if (Array.isArray(fallback)) {
    if (!Array.isArray(localized)) return fallback

    const merged = fallback.map((value, index) =>
      index < localized.length
        ? mergeLocaleData(value, localized[index])
        : value,
    )
    merged.push(...localized.slice(fallback.length))
    return merged as T
  }

  if (fallback !== null && typeof fallback === 'object') {
    const localizedRecord =
      localized !== null && typeof localized === 'object'
        ? (localized as Record<string, unknown>)
        : {}
    const fallbackRecord = fallback as Record<string, unknown>
    const merged: Record<string, unknown> = {}

    for (const [key, value] of Object.entries(fallbackRecord)) {
      merged[key] = key in localizedRecord
        ? mergeLocaleData(value, localizedRecord[key])
        : value
    }

    for (const [key, value] of Object.entries(localizedRecord)) {
      if (!(key in fallbackRecord)) merged[key] = value
    }

    return merged as T
  }

  return (localized === undefined ? fallback : localized) as T
}

export function getBasicElectricalConceptData(locale: Locale): ConceptCollection {
  const localeFile = basicElectricalConceptLocales[locale]
  const fallbackFile = basicElectricalConceptLocales.en

  const collection =
    localeFile.basic_electrical_concepts ??
    localeFile.electrical_concepts ??
    fallbackFile.basic_electrical_concepts ??
    fallbackFile.electrical_concepts

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
  const locale = useSyncExternalStore<Locale>(
    subscribeToLocale,
    getStoredLocale,
    () => 'en',
  )

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (l: Locale) => {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, l)
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT))
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: mergeLocaleData(en, locales[locale]) }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
