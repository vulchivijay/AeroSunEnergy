import type { Metadata } from 'next'

import enBasicElectricalConcepts from '@/public/locales/en/basic-electrical-concepts.json'
import BasicElectricalConceptsContent from './pageClient'

type PageData = {
  title?: string
  description?: string
  meta?: {
    title?: string
    description?: string
    keywords?: string[]
    canonical?: string
  }
}

type EnBasicConceptFile = {
  basic_electrical_concepts?: PageData
  electrical_concepts?: PageData
}

const enPageData = enBasicElectricalConcepts as EnBasicConceptFile

const pageData = enPageData.basic_electrical_concepts ?? enPageData.electrical_concepts
  ?? { title: 'Basic Electrical Concepts', description: 'Fundamental electrical concepts for practical projects.' }
const pageMeta = pageData.meta ?? {}

export const metadata: Metadata = {
  title: pageMeta.title ?? pageData.title ?? 'Basic Electrical Concepts',
  description: pageMeta.description ?? pageData.description,
  keywords: pageMeta.keywords,
  alternates: {
    canonical: pageMeta.canonical ?? '/basic-electrical-concepts',
  },
}

export default function BasicElectricalConceptsPage() {
  return <BasicElectricalConceptsContent />
}
