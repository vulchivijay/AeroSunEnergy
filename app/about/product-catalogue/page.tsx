import { getRequestTranslations } from '@/lib/serverLocale';
import { ProductCatalogueHeroSections } from '@/app/components/pages/product-catalogue/ProductCatalogueHeroSections';
import { ProductCatalogueCommercialSections } from '@/app/components/pages/product-catalogue/ProductCatalogueCommercialSections';
import { ProductCatalogueOffGridSections } from '@/app/components/pages/product-catalogue/ProductCatalogueOffGridSections';
import { ProductCatalogueWindSections } from '@/app/components/pages/product-catalogue/ProductCatalogueWindSections';
import { ProductCatalogueConsultationSections } from '@/app/components/pages/product-catalogue/ProductCatalogueConsultationSections';
import { ProductCatalogueContactSections } from '@/app/components/pages/product-catalogue/ProductCatalogueContactSections';

export default async function ProductCataloguePage() {
  const t = await getRequestTranslations()

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <ProductCatalogueHeroSections t={t} />

      <ProductCatalogueCommercialSections t={t} />

      <ProductCatalogueOffGridSections t={t} />

      <ProductCatalogueWindSections t={t} />

      <ProductCatalogueConsultationSections t={t} />

      <ProductCatalogueContactSections t={t} />
    </main>
  )
}
