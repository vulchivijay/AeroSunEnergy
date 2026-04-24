'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '@/../public/locales/en.json'
import hi from '@/../public/locales/hi.json'
import te from '@/../public/locales/te.json'

const locales = { en, hi, te } as const

export type Locale = keyof typeof locales
export type Translations = typeof en

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
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('locale') as Locale
      if (saved && saved in locales) {
        setLocaleState(saved)
      }
    } catch {
      // ignore
    }
  }, [])

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
