import { getAccentOrDefault } from "@/lib/utils/utils";
import {
  HybridContentBlock,
  HybridFeatureCard,
  HybridInfoPanel,
  HybridSectionEyebrow,
  HybridTable,
} from "@/app/components/ui";
import { hybridSolutionImages } from "@/app/components/ui/EnergyContentImages";
import type { Translations } from "@/lib/LocaleContext";

export function HomeHybridEnergySection({ t }: { t: Translations }) {
  const hybrid = t.home.hybrid;

  return (
    <section className="bg-gradient-to-br from-[#f1f2f6] to-white px-4 py-12 sm:px-6 lg:px-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <>
            <HybridSectionEyebrow>{hybrid.eyebrow}</HybridSectionEyebrow>
            <h2 className="mt-3 text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {hybrid.title}
            </h2>
          </>
        </div>
        <div id="hybrid-energy-content">
          <div className="grid gap-6 lg:grid-cols-3">
            {hybrid.cards.map((card, index) => (
              <HybridFeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
                descriptionClassName="line-clamp-3"
                points={[]}
                accent={getAccentOrDefault(
                  card.accent,
                  ["sky", "violet", "amber"] as const,
                  "emerald",
                )}
                imageSrc={hybridSolutionImages[index]}
              />
            ))}
          </div>
          <div className="mt-10">
            <HybridContentBlock
              eyebrow={hybrid.eyebrow}
              title={hybrid.title}
              description={t.hybridPage.hero.subtitle}
              benefits={hybrid.benefits}
              imageSrc={hybridSolutionImages[0]}
            />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {hybrid.panels.map((panel, index) => (
              <HybridInfoPanel
                key={panel.title}
                title={panel.title}
                index={index}
                accent={getAccentOrDefault(
                  panel.accent,
                  ["sky", "violet"] as const,
                  "emerald",
                )}
                content={panel.content}
              />
            ))}
          </div>
          <div className="mt-8">
            <HybridTable rows={hybrid.table} />
          </div>
        </div>
      </div>
    </section>
  );
}
