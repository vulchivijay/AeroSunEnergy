'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '@/public/locales/en/index.json'
import hi from '@/public/locales/hi/index.json'
import te from '@/public/locales/te/index.json'
import enBasicElectricalConcepts from '@/public/locales/en/basic-electrical-concepts.json'
import hiBasicElectricalConcepts from '@/public/locales/hi/basic-electrical-concepts.json'
import teBasicElectricalConcepts from '@/public/locales/te/basic-electrical-concepts.json'

const locales = { en, hi, te } as const

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

export type Locale = keyof typeof locales
export type Translations = typeof en

const basicElectricalConceptLocales: Record<Locale, LocaleConceptFile> = {
  en: enBasicElectricalConcepts,
  hi: hiBasicElectricalConcepts,
  te: teBasicElectricalConcepts,
}

const defaultConceptCollection: ConceptCollection = {
  title: 'Basic Electrical Concepts',
  description: 'Fundamental electrical concepts for practical projects.',
  components: [],
}

export function getBasicElectricalConceptData(locale: Locale): ConceptCollection {
  const localeFile = basicElectricalConceptLocales[locale]
  const fallbackFile = basicElectricalConceptLocales.en

  return (
    localeFile.basic_electrical_concepts ??
    localeFile.electrical_concepts ??
    fallbackFile.basic_electrical_concepts ??
    fallbackFile.electrical_concepts ??
    defaultConceptCollection
  )
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
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem('locale') as Locale | null
      if (saved && saved in locales) {
        return saved
      }
    } catch {
      // ignore
    }
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    try {
      localStorage.setItem('locale', l)
    } catch {
      // ignore
    }
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: locales[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
