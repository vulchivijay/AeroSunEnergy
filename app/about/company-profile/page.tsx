import { getRequestTranslations } from '@/lib/serverLocale';
import { CompanyProfileHeroSections } from '@/app/components/pages/company-profile/CompanyProfileHeroSections';
import { CompanyProfileVisionAndMissionSections } from '@/app/components/pages/company-profile/CompanyProfileVisionAndMissionSections';
import { CompanyProfileSolutionsAndProductsSections } from '@/app/components/pages/company-profile/CompanyProfileSolutionsAndProductsSections';
import { CompanyProfileInnovationSections } from '@/app/components/pages/company-profile/CompanyProfileInnovationSections';
import { CompanyProfileCustomersAndQualitySections } from '@/app/components/pages/company-profile/CompanyProfileCustomersAndQualitySections';
import { CompanyProfilePartnershipAndFutureSections } from '@/app/components/pages/company-profile/CompanyProfilePartnershipAndFutureSections';
import { CompanyProfileContactSections } from '@/app/components/pages/company-profile/CompanyProfileContactSections';

export default async function CompanyProfilePage() {
  const t = await getRequestTranslations();

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <CompanyProfileHeroSections t={t} />

      <CompanyProfileVisionAndMissionSections t={t} />

      <CompanyProfileSolutionsAndProductsSections t={t} />

      <CompanyProfileInnovationSections t={t} />

      <CompanyProfileCustomersAndQualitySections t={t} />

      <CompanyProfilePartnershipAndFutureSections t={t} />

      <CompanyProfileContactSections t={t} />
    </main>
  );
}
