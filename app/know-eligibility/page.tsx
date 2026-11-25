import { getRequestTranslations } from '@/lib/serverLocale';
import { KnowEligibilityHeroSections } from '@/app/components/pages/know-eligibility/KnowEligibilityHeroSections';
import { KnowEligibilityRequirementsSections } from '@/app/components/pages/know-eligibility/KnowEligibilityRequirementsSections';

export default async function KnowEligibilityPage() {
  const t = await getRequestTranslations()

  return (
    <main className="min-h-screen bg-[#f7f7f2] text-slate-800 ">
      <KnowEligibilityHeroSections t={t} />

      <KnowEligibilityRequirementsSections t={t} />
    </main>
  )
}
