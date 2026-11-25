import { ArrowDown, BadgeIndianRupee, BatteryCharging, Cloud, Coins, House, Leaf, PanelsTopLeft, Sun } from 'lucide-react'
import { ContentIllustratedBenefitCard } from './SharedContentComponents'

function SolarBenefitIllustration({ index }: { index: number }) {
  const sun = <Sun className="absolute right-1 top-0 h-12 w-12 fill-[#f8c64b] text-[#f8c64b]" strokeWidth={1.7} />
  const leaf = 'absolute h-10 w-10 fill-[#75914d] text-[#75914d]'

  const illustration = (() => {
    switch (index % 6) {
      case 0:
        return (
          <>
            {sun}
            <Cloud className="absolute left-0 top-8 h-14 w-14 fill-[#fffdf6] text-[#76905b]" strokeWidth={2} />
            <span className="absolute left-5 top-[3.05rem] text-xs font-extrabold text-[#183a27]">CO₂</span>
            <ArrowDown className="absolute bottom-0 left-10 h-8 w-8 text-[#638347]" strokeWidth={3} />
            <Leaf className={`${leaf} bottom-2 right-0 rotate-[25deg]`} />
          </>
        )
      case 1:
        return (
          <>
            <Sun className="absolute left-5 top-0 h-12 w-12 fill-[#f8c64b] text-[#f8c64b]" strokeWidth={1.7} />
            <Leaf className={`${leaf} bottom-1 left-0 -rotate-[38deg]`} />
            <Leaf className={`${leaf} bottom-1 right-0 rotate-[38deg]`} />
          </>
        )
      case 2:
        return (
          <>
            {sun}
            <Coins className="absolute bottom-1 left-0 h-12 w-12 text-[#789257]" strokeWidth={2.2} />
            <Coins className="absolute bottom-1 left-8 h-12 w-12 text-[#789257]" strokeWidth={2.2} />
            <BadgeIndianRupee className="absolute bottom-0 right-0 h-12 w-12 rounded-full bg-[#f5d761] p-1 text-[#a78316]" strokeWidth={1.8} />
          </>
        )
      case 3:
        return (
          <>
            <Sun className="absolute right-2 top-0 h-11 w-11 fill-[#f8c64b] text-[#f8c64b]" strokeWidth={1.7} />
            <House className="absolute bottom-0 left-0 h-[4.5rem] w-[4.5rem] text-[#66834a]" strokeWidth={2} />
            <PanelsTopLeft className="absolute bottom-5 right-0 h-10 w-10 -rotate-12 text-[#66834a]" strokeWidth={2} />
            <Leaf className={`${leaf} bottom-0 right-0 rotate-[35deg]`} />
          </>
        )
      case 4:
        return (
          <>
            <Sun className="absolute left-2 top-0 h-16 w-16 fill-[#f8c64b] text-[#f8c64b]" strokeWidth={1.7} />
            <Leaf className={`${leaf} bottom-0 left-0 -rotate-[35deg]`} />
            <Leaf className={`${leaf} bottom-0 right-0 rotate-[35deg]`} />
          </>
        )
      default:
        return (
          <>
            <Sun className="absolute right-0 top-0 h-14 w-14 fill-[#f8c64b] text-[#f8c64b]" strokeWidth={1.7} />
            <BatteryCharging className="absolute bottom-0 left-0 h-[4.5rem] w-[4.5rem] rounded-lg bg-[#fffdf6] text-[#66834a]" strokeWidth={2} />
            <Leaf className={`${leaf} bottom-0 right-0 rotate-[35deg]`} />
          </>
        )
    }
  })()

  return (
    <div className="pointer-events-none absolute right-1 top-4 h-24 w-24" aria-hidden="true">
      {illustration}
    </div>
  )
}

export function SolarBenefitCard({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) {
  return (
    <ContentIllustratedBenefitCard
      title={title}
      description={description}
      index={index}
      illustration={<SolarBenefitIllustration index={index} />}
    />
  )
}
