import { getRequestTranslations } from '@/lib/serverLocale';
import { AboutHeroSections } from '@/app/components/pages/about/AboutHeroSections';
import { AboutStoryAndGovernanceSections } from '@/app/components/pages/about/AboutStoryAndGovernanceSections';
import { AboutLeadershipAndStrengthsSections } from '@/app/components/pages/about/AboutLeadershipAndStrengthsSections';
import { AboutRoadmapSections } from '@/app/components/pages/about/AboutRoadmapSections';
import { AboutServicesAndCommitmentsSections } from '@/app/components/pages/about/AboutServicesAndCommitmentsSections';
import { AboutWorkAndImpactSections } from '@/app/components/pages/about/AboutWorkAndImpactSections';

export default async function AboutPage() {
  const t = await getRequestTranslations()

  return (
    <main className="overflow-hidden bg-white text-slate-900 ">
      <AboutHeroSections t={t} />

      <AboutStoryAndGovernanceSections t={t} />

      <AboutLeadershipAndStrengthsSections t={t} />

      <AboutRoadmapSections t={t} />

      <AboutServicesAndCommitmentsSections t={t} />

      <AboutWorkAndImpactSections t={t} />
    </main>
  )
}
