'use client';

import { useState } from 'react';

type FaqCardProps = {
  question: string;
  answer: string;
  defaultOpen?: boolean;
};

export const solarFaqs = [
  {
    question: 'Will solar panels work on cloudy or rainy days?',
    answer:
      'Yes. Solar panels continue generating electricity in cloudy and rainy conditions, but output is lower because the sunlight is diffused and less intense. In monsoon months, a system still produces useful energy, though it will generate less than on clear sunny days.',
  },
  {
    question: 'Do solar panels need direct sunlight?',
    answer:
      'Direct sunlight gives maximum output, but solar panels can still generate electricity from indirect sunlight, morning light, and even soft daylight during cloudy conditions. The design and placement of the rooftop system still matter a lot for performance.',
  },
  {
    question: 'Why does solar generation drop in monsoon or winter?',
    answer:
      'Lower sunlight intensity, shorter daylight hours, cloud cover, dust, and shadows reduce generation. In winter and monsoon periods, energy output may be 20% to 40% lower than summer output, depending on your site conditions and system design.',
  },
  {
    question: 'How much area is needed for a rooftop solar system?',
    answer:
      'A rough guideline is about 100 sq. ft. of shadow-free rooftop space for every 1 kW of solar capacity. So a 3 kW rooftop system generally needs around 300 sq. ft. of suitable roof area, ideally facing south without major shading.',
  },
  {
    question: 'How is the size of the solar system decided?',
    answer:
      'System sizing is based on your monthly electricity consumption measured in units (kWh). A simple rule is: required kW = monthly units ÷ 120. This estimate works well for planning, and it can be refined after checking roof area, consumption pattern, and seasonal variation.',
  },
  {
    question: 'How much electricity does 1 kW solar produce?',
    answer:
      'In many Indian locations, 1 kW of rooftop solar produces around 3.5 to 4.5 units per day on average, which is roughly 100 to 140 units per month depending on the season, tilt, and sunlight availability.',
  },
  {
    question: 'Does roof direction or shadow affect output?',
    answer:
      'Yes. South-facing roofs are usually best for rooftop solar in India. Shadows from trees, water tanks, nearby buildings, or parapet walls can significantly reduce performance, so shading analysis is important before installation.',
  },
  {
    question: 'What is the difference between on-grid, off-grid, and hybrid systems?',
    answer:
      'On-grid systems are connected to the utility grid and are usually the most economical. Off-grid systems run independently with batteries. Hybrid systems combine grid connection with battery backup so that essential loads can continue during outages while still reducing electricity bills.',
  },
  {
    question: 'Does a solar system work during a power cut?',
    answer:
      'An on-grid system automatically shuts down during a grid outage for safety reasons unless it is paired with backup equipment or a hybrid setup. A hybrid or off-grid system can continue supplying power to essential loads during outages.',
  },
  {
    question: 'What is net metering and why is it useful?',
    answer:
      'Net metering allows you to export excess solar energy to the grid and receive credits on your electricity bill. This improves the economic value of a rooftop solar system and helps offset consumption during low-generation periods.',
  },
  {
    question: 'Can solar reduce my electricity bill significantly?',
    answer:
      'Yes. A properly sized rooftop solar system can reduce your bill substantially by replacing a large part of your daytime grid consumption. Savings depend on the system size, usage pattern, tariff, and how much solar energy is being consumed directly versus exported.',
  },
  {
    question: 'How much does a rooftop solar system cost?',
    answer:
      'Typical installed cost varies by location, component quality, and system type, but a practical planning benchmark is around ₹65,000 per kW for an on-grid rooftop system with standard components and paperwork. Final cost depends on brand, inverter, panel type, and installation complexity.',
  },
  {
    question: 'What subsidy is available for residential solar?',
    answer:
      'Eligible households can benefit from government schemes such as PM Surya Ghar: Muft Bijli Yojana. In many cases, the first 2 kW may get a subsidy of ₹30,000 per kW, with a capped support level for additional capacity. It is important to confirm the latest subsidy terms on the official portal and with your local DISCOM.',
  },
  {
    question: 'How long do solar panels last?',
    answer:
      'Modern solar panels are designed to operate for 25 years or more with good maintenance. Performance may slowly reduce over time, but the system is expected to deliver reliable output for a long operating life when installed and maintained correctly.',
  },
  {
    question: 'Is solar maintenance difficult?',
    answer:
      'Solar systems are generally low-maintenance. Regular cleaning, checking for dust and bird droppings, and ensuring there are no new shadows are the main steps. A preventive annual maintenance contract (AMC) helps keep the system performing at its best.',
  },
  {
    question: 'Should I choose a larger system than I currently need?',
    answer:
      'It depends on your future load growth and roof space. Some customers prefer a slightly larger system to support future additions such as EV charging, ACs, or rising consumption. But oversized systems may reduce the financial return if the surplus energy is not used or exported efficiently.',
  },
  {
    question: 'How do I know if my roof is suitable for solar?',
    answer:
      'Your roof should have enough unshaded area, a sound structure, and a suitable orientation. A site survey checks roof size, tilt, direction, weather exposure, and possible shading. These checks are essential before finalizing the system size and type.',
  },
  {
    question: 'Does solar work well in hot weather?',
    answer:
      'Solar panels can produce electricity efficiently in strong sunlight, but very high temperatures can reduce panel efficiency slightly. Good ventilation and correct design help maintain performance. The main driver is still sunlight availability, not temperature alone.',
  },
  {
    question: 'What happens if there is dust or bird droppings on the panels?',
    answer:
      'Dust, leaves, and bird droppings reduce sunlight reaching the cells, which lowers output. Regular cleaning, especially in dusty environments, is important to maintain generation levels and protect long-term performance.',
  },
];

export function FaqSection({ items = solarFaqs }: { items?: Array<{ question: string; answer: string }> }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <FaqCard key={`${item.question}-${index}`} question={item.question} answer={item.answer} defaultOpen={index === 0} />
      ))}
    </div>
  );
}

export default function FaqCard({ question, answer, defaultOpen = false }: FaqCardProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`overflow-hidden rounded-[22px] border bg-white/80 p-0 shadow-[0_16px_40px_-26px_rgba(15,23,42,0.28)] transition-all duration-300 ${isOpen ? 'border-[#F59E0B]/70 bg-[#fffaf1]' : 'border-[#d8c9ab]/70'}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6"
        aria-expanded={isOpen}
      >
        <span className="text-base font-black tracking-[-0.03em] text-[#1f2a44] sm:text-lg">{question}</span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-bold transition ${isOpen ? 'border-[#F59E0B]/60 bg-[#F59E0B] text-white' : 'border-[#F59E0B]/60 bg-[#fff3df] text-[#D97706]'}`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen ? (
        <div className="border-t border-[#f0e3ce] px-5 pb-5 pt-4 sm:px-6">
          <p className="text-base leading-8 text-slate-700">{answer}</p>
        </div>
      ) : null}
    </div>
  );
}