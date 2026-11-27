import { getRequestTranslations } from '@/lib/serverLocale'
import { ResearchPageSections } from '@/app/components/pages/research/ResearchPageSections'

export default async function ResearchPage() {
  const t = await getRequestTranslations()

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <ResearchPageSections t={t} />
    </main>
  )
}
