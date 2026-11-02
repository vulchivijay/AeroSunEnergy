import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Save Earth with Solar, Wind & Hybrid Renewable Energy | AeroSun Energy',
  description:
    'Learn how rooftop solar, wind, and hybrid renewable energy solutions help reduce emissions, protect the environment, and build a cleaner future with AeroSun Energy.',
  keywords: [
    'Save Earth initiative',
    'renewable energy and climate action',
    'solar for environment',
    'reduce carbon emissions',
    'clean energy India',
    'AeroSun Energy sustainability',
    'green energy solutions',
    'solar power for climate action',
    'wind energy sustainability',
    'hybrid power climate impact',
    'renewable environmental benefits',
    'AeroSun Energy green future',
    'low carbon energy solutions',
    'eco friendly power',
    'clean electricity generation',
    'sustainable energy India',
    'solar and wind climate change',
    'reduce pollution with solar',
    'renewable resource protection',
    'green technology solutions',
    'clean energy for future generations',
    'AeroSun Energy environmental mission',
    'solar for a greener planet',
  ],
  alternates: {
    canonical: '/save-earth',
  },
  openGraph: {
    title: 'Save Earth with Solar, Wind & Hybrid Renewable Energy | AeroSun Energy',
    description:
      'Our planet, our responsibility: explore environmental challenges and practical solutions for a sustainable future.',
    url: 'https://aerosunenergy.in/save-earth',
    siteName: 'AeroSun Energy',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

type DocumentaryBlock =
  | { type: 'heading'; level: 2 | 3; text: string; id: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'rule' }

type DocumentarySection = {
  heading: { text: string; id: string }
  blocks: DocumentaryBlock[]
}

const documentaryTitle = 'SAVE EARTH'
const documentarySubtitle = 'Our Planet, Our Responsibility'
const documentaryTagline = 'Every Action Matters. Every Life Counts.'

const openingContent: DocumentaryBlock[] = [
  { type: 'paragraph', text: "I recommend creating a comprehensive environmental awareness documentary titled “SAVE EARTH – Our Planet, Our Responsibility.”" },
  { type: 'paragraph', text: "The documentary should cover the major environmental challenges facing humanity and practical solutions that individuals, families, businesses, governments and industries can implement." },
  { type: 'paragraph', text: "It can also highlight how renewable energy companies such as AeroSun Energy can contribute to protecting the planet." },
  { type: 'paragraph', text: "Below is a proposed documentary script suitable for a 15–20-minute video." },
  { type: 'paragraph', text: "Documentary Duration: 15–20 minutes Theme: Environmental protection, climate action, sustainability and a better future for generations to come." },
  { type: 'rule' },
]

const documentarySections: DocumentarySection[] = [
  {
    heading: { text: "1. INTRODUCTION – THE PLANET WE CALL HOME", id: "1-introduction-the-planet-we-call-home" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Earth rotating in space.",
          "Beautiful mountains, forests, oceans and rivers.",
          "Birds flying across the sky.",
          "Green agricultural fields.",
          "Children playing in nature.",
          "Transition to polluted cities, melting glaciers, forest fires and dried rivers."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Earth is our only home." },
      { type: 'paragraph', text: "It gives us air to breathe, water to drink, food to eat and natural resources to survive." },
      { type: 'paragraph', text: "For millions of years, nature has maintained a delicate balance that supports life." },
      { type: 'paragraph', text: "But today, that balance is under tremendous pressure." },
      { type: 'paragraph', text: "Forests are disappearing. Rivers are becoming polluted. Oceans are filling with plastic. Temperatures are rising. Wildlife habitats are being destroyed." },
      { type: 'paragraph', text: "The question is no longer whether our planet needs protection." },
      { type: 'paragraph', text: "The question is whether humanity is ready to take responsibility." },
      { type: 'paragraph', text: "We cannot build a healthy future on a damaged planet." },
      { type: 'paragraph', text: "Saving Earth is not the responsibility of one person, one country or one organisation." },
      { type: 'paragraph', text: "It is everyone's responsibility." },
      { type: 'paragraph', text: "SAVE EARTH. SAVE LIFE." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "2. CLIMATE CHANGE AND GLOBAL WARMING", id: "2-climate-change-and-global-warming" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Melting glaciers.",
          "Heatwaves.",
          "Droughts.",
          "Floods.",
          "Forest fires.",
          "Extreme weather events.",
          "Industrial emissions."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "One of the greatest environmental challenges of our time is climate change." },
      { type: 'paragraph', text: "Human activities, particularly burning fossil fuels, deforestation and unsustainable industrial practices, are increasing greenhouse gas concentrations in the atmosphere." },
      { type: 'paragraph', text: "This is warming our planet and changing weather patterns." },
      { type: 'paragraph', text: "The consequences include:" },
      { type: 'list', ordered: false, items: [
          "Rising global temperatures.",
          "Melting glaciers and ice sheets.",
          "Rising sea levels.",
          "More intense heatwaves.",
          "Increased risks from droughts and heavy rainfall.",
          "Threats to agriculture, biodiversity and human health."
      ] },
      { type: 'paragraph', text: "Climate change does not respect geographical boundaries." },
      { type: 'paragraph', text: "Its effects reach farmers, fishermen, businesses, cities, villages and future generations." },
      { type: 'paragraph', text: "We must reduce greenhouse gas emissions and accelerate the transition towards cleaner energy and sustainable development." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "3. SAVE TREES AND PROTECT FORESTS", id: "3-save-trees-and-protect-forests" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Dense green forests.",
          "Trees being cut down.",
          "Forest fires.",
          "Wildlife losing habitats.",
          "People planting native trees.",
          "Community forest restoration."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Forests are among Earth's most valuable natural systems." },
      { type: 'paragraph', text: "They absorb carbon dioxide, support biodiversity, protect soil, regulate water cycles and provide livelihoods for millions of people." },
      { type: 'paragraph', text: "Yet forests continue to disappear because of land conversion, illegal logging, fires and unsustainable development." },
      { type: 'paragraph', text: "We can make a difference." },
      { type: 'paragraph', text: "What can we do?" },
      { type: 'list', ordered: true, items: [
          "Plant native trees suitable for local ecosystems.",
          "Protect existing forests instead of relying only on tree planting.",
          "Reduce unnecessary paper consumption.",
          "Reuse and recycle paper products.",
          "Prevent forest fires.",
          "Support sustainable agriculture and forestry.",
          "Protect wildlife corridors and natural habitats.",
          "Participate in community tree-care programmes."
      ] },
      { type: 'paragraph', text: "Planting a tree is a beginning." },
      { type: 'paragraph', text: "Protecting it until it becomes a healthy, mature tree is the real responsibility." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "4. SAVE WATER – EVERY DROP MATTERS", id: "4-save-water-every-drop-matters" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Clean rivers and waterfalls.",
          "Dry reservoirs.",
          "Water scarcity in villages.",
          "Leaking taps.",
          "Rainwater harvesting systems.",
          "Farmers using drip irrigation."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Water is essential for every form of life." },
      { type: 'paragraph', text: "But freshwater is limited, and many communities already face water stress." },
      { type: 'paragraph', text: "Groundwater depletion, pollution, inefficient irrigation and changing rainfall patterns threaten water security." },
      { type: 'paragraph', text: "We must use water responsibly." },
      { type: 'paragraph', text: "Practical actions include:" },
      { type: 'list', ordered: false, items: [
          "Repair leaking taps and pipelines.",
          "Install rainwater harvesting systems.",
          "Reuse treated wastewater wherever appropriate.",
          "Adopt drip and sprinkler irrigation.",
          "Protect lakes, ponds, rivers and wetlands.",
          "Avoid dumping chemicals into water bodies.",
          "Prevent groundwater contamination.",
          "Use water-efficient appliances.",
          "Encourage responsible industrial water management."
      ] },
      { type: 'paragraph', text: "Water conservation is not just about saving money." },
      { type: 'paragraph', text: "It is about securing life for future generations." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "5. ELIMINATE PLASTIC POLLUTION", id: "5-eliminate-plastic-pollution" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Plastic waste on beaches.",
          "Rivers carrying plastic.",
          "Marine animals affected by plastic pollution.",
          "Waste segregation.",
          "Reusable shopping bags.",
          "Recycling facilities."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Plastic has become a serious environmental challenge." },
      { type: 'paragraph', text: "Single-use plastic products frequently escape proper waste-management systems and enter rivers, oceans, agricultural land and urban environments." },
      { type: 'paragraph', text: "Plastic pollution harms wildlife, damages ecosystems and breaks down into smaller particles that can enter the food chain." },
      { type: 'paragraph', text: "We must change the way we consume and dispose of plastic." },
      { type: 'paragraph', text: "Actions we can take:" },
      { type: 'list', ordered: true, items: [
          "Avoid unnecessary single-use plastics.",
          "Carry reusable shopping bags.",
          "Use refillable water bottles.",
          "Choose products with less packaging.",
          "Separate recyclable and non-recyclable waste.",
          "Support responsible recycling systems.",
          "Never throw plastic into rivers, lakes or open land.",
          "Encourage businesses to adopt sustainable packaging."
      ] },
      { type: 'paragraph', text: "The best plastic waste is the waste we avoid creating in the first place." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "6. CLEAN AIR – THE RIGHT TO BREATHE", id: "6-clean-air-the-right-to-breathe" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Heavy traffic.",
          "Industrial smoke.",
          "Construction dust.",
          "Air pollution monitoring.",
          "Public transport.",
          "Cycling and walking.",
          "Green urban spaces."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Clean air is fundamental to human health." },
      { type: 'paragraph', text: "Air pollution comes from several sources, including vehicles, industrial processes, fossil-fuel combustion, construction dust, waste burning and household fuels." },
      { type: 'paragraph', text: "Air pollution contributes to respiratory and cardiovascular diseases and affects ecosystems." },
      { type: 'paragraph', text: "Solutions include:" },
      { type: 'list', ordered: false, items: [
          "Transitioning to cleaner energy.",
          "Improving public transportation.",
          "Encouraging walking and cycling.",
          "Maintaining vehicles.",
          "Controlling industrial emissions.",
          "Preventing open waste burning.",
          "Improving construction dust management.",
          "Expanding urban green spaces.",
          "Using clean cooking technologies."
      ] },
      { type: 'paragraph', text: "Clean air should not be a luxury." },
      { type: 'paragraph', text: "It should be a basic condition of life." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "7. RENEWABLE ENERGY – POWERING A CLEANER FUTURE", id: "7-renewable-energy-powering-a-cleaner-future" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Large solar farms.",
          "Rooftop solar panels.",
          "Wind turbines.",
          "Small wind generators.",
          "Solar-powered agricultural pumps.",
          "Battery energy storage.",
          "Solar-wind hybrid systems.",
          "Rural electrification."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Energy powers our homes, industries, transportation systems and economies." },
      { type: 'paragraph', text: "But conventional fossil-fuel-based energy production is a major source of greenhouse gas emissions and air pollution." },
      { type: 'paragraph', text: "Renewable energy provides an important pathway towards a cleaner energy future." },
      { type: 'paragraph', text: "Solar energy converts sunlight into electricity." },
      { type: 'paragraph', text: "Wind energy converts the movement of air into useful electrical power." },
      { type: 'paragraph', text: "Hydropower, geothermal energy and sustainably managed bioenergy can also contribute to the renewable energy mix." },
      { type: 'paragraph', text: "Combining solar and wind with energy storage and intelligent energy management can help provide electricity under varying weather conditions." },
      { type: 'paragraph', text: "What can we do?" },
      { type: 'list', ordered: true, items: [
          "Install rooftop solar where technically and economically suitable.",
          "Encourage renewable energy in commercial and industrial buildings.",
          "Explore solar-powered agricultural pumps.",
          "Improve energy efficiency.",
          "Use efficient lighting and appliances.",
          "Develop responsible wind energy projects.",
          "Explore solar-wind hybrid systems where resources justify them.",
          "Invest in appropriate energy storage.",
          "Reduce unnecessary electricity consumption.",
          "Support research and innovation in clean technologies."
      ] },
      { type: 'paragraph', text: "Renewable energy is not just an energy solution." },
      { type: 'paragraph', text: "It is an investment in cleaner air, energy security and a more sustainable future." },
      { type: 'paragraph', text: "A cleaner future begins with cleaner energy choices." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "8. PROTECT ANIMALS AND BIODIVERSITY", id: "8-protect-animals-and-biodiversity" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Elephants, tigers, birds and marine animals.",
          "Coral reefs.",
          "Endangered species.",
          "Wildlife habitats.",
          "Forest conservation projects.",
          "Natural ecosystems."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Every living species has a role in maintaining ecological balance." },
      { type: 'paragraph', text: "Pollinators support food production. Forest animals help maintain ecosystems. Marine organisms support ocean food webs." },
      { type: 'paragraph', text: "But habitat destruction, pollution, climate change, invasive species and illegal wildlife trade threaten biodiversity." },
      { type: 'paragraph', text: "We must:" },
      { type: 'list', ordered: false, items: [
          "Protect forests and wetlands.",
          "Preserve natural habitats.",
          "Stop illegal wildlife trafficking.",
          "Reduce pesticide misuse.",
          "Protect pollinators.",
          "Support wildlife conservation.",
          "Avoid disturbing nesting and breeding areas.",
          "Promote sustainable fishing.",
          "Protect marine ecosystems."
      ] },
      { type: 'paragraph', text: "Protecting biodiversity means protecting the natural systems that support human life." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "9. SUSTAINABLE AGRICULTURE AND FOOD SECURITY", id: "9-sustainable-agriculture-and-food-security" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Traditional farming.",
          "Organic farming practices.",
          "Drip irrigation.",
          "Soil conservation.",
          "Compost preparation.",
          "Solar-powered agricultural equipment.",
          "Farmers harvesting crops."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Agriculture feeds humanity." },
      { type: 'paragraph', text: "But unsustainable agricultural practices can contribute to soil degradation, groundwater depletion, biodiversity loss and greenhouse gas emissions." },
      { type: 'paragraph', text: "The future of farming must be productive and environmentally responsible." },
      { type: 'paragraph', text: "Important solutions include:" },
      { type: 'list', ordered: true, items: [
          "Soil conservation.",
          "Efficient irrigation.",
          "Crop rotation.",
          "Appropriate organic matter management.",
          "Integrated pest management.",
          "Responsible fertiliser use.",
          "Agroforestry.",
          "Protection of pollinators.",
          "Reduction of food waste.",
          "Renewable energy for suitable agricultural applications."
      ] },
      { type: 'paragraph', text: "Farmers are not just food producers." },
      { type: 'paragraph', text: "They are important partners in environmental protection." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "10. WASTE MANAGEMENT – REDUCE, REUSE, RECYCLE", id: "10-waste-management-reduce-reuse-recycle" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Landfills.",
          "Waste segregation.",
          "Composting.",
          "Recycling plants.",
          "Electronic waste collection.",
          "Repair and reuse activities."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Every day, households, businesses and industries generate enormous quantities of waste." },
      { type: 'paragraph', text: "Poor waste management contaminates soil, water and air." },
      { type: 'paragraph', text: "The solution begins with changing our consumption habits." },
      { type: 'paragraph', text: "Follow the principles of:" },
      { type: 'paragraph', text: "REFUSE: Avoid unnecessary products and packaging." },
      { type: 'paragraph', text: "REDUCE: Consume only what is needed." },
      { type: 'paragraph', text: "REUSE: Use products multiple times." },
      { type: 'paragraph', text: "REPAIR: Extend the useful life of products." },
      { type: 'paragraph', text: "RECYCLE: Recover materials wherever recycling is appropriate." },
      { type: 'paragraph', text: "ROT: Compost suitable biodegradable waste." },
      { type: 'paragraph', text: "Special attention must be given to electronic waste, batteries, chemicals, medical waste and industrial waste." },
      { type: 'paragraph', text: "These materials require appropriate collection, handling and treatment." },
      { type: 'paragraph', text: "A clean planet requires responsible consumption and responsible disposal." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "11. CLEAN TRANSPORTATION AND GREEN CITIES", id: "11-clean-transportation-and-green-cities" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Electric vehicles.",
          "Electric buses.",
          "Metro trains.",
          "Cycling lanes.",
          "Pedestrian-friendly roads.",
          "Green buildings.",
          "Urban parks."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Cities are growing rapidly." },
      { type: 'paragraph', text: "Transportation, construction, electricity consumption and waste generation place increasing pressure on the environment." },
      { type: 'paragraph', text: "We need cities designed around people, nature and resource efficiency." },
      { type: 'paragraph', text: "Solutions include:" },
      { type: 'list', ordered: false, items: [
          "Reliable public transportation.",
          "Electric mobility supported by cleaner electricity.",
          "Safe walking and cycling infrastructure.",
          "Energy-efficient buildings.",
          "Urban tree cover.",
          "Rainwater harvesting.",
          "Sustainable construction materials.",
          "Better waste management.",
          "Protection of urban lakes and wetlands."
      ] },
      { type: 'paragraph', text: "A green city is not simply a city with more buildings and a few trees." },
      { type: 'paragraph', text: "It is a city that uses resources responsibly and provides a healthy environment for its people." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "12. OCEAN AND MARINE CONSERVATION", id: "12-ocean-and-marine-conservation" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Beautiful oceans.",
          "Coral reefs.",
          "Sea turtles.",
          "Mangrove forests.",
          "Plastic waste on beaches.",
          "Coastal clean-up campaigns."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Oceans regulate Earth's climate, support biodiversity, provide food and sustain millions of livelihoods." },
      { type: 'paragraph', text: "But marine ecosystems face threats from plastic pollution, overfishing, habitat destruction, chemical contamination and climate change." },
      { type: 'paragraph', text: "We must:" },
      { type: 'list', ordered: false, items: [
          "Reduce plastic waste entering waterways.",
          "Protect mangroves.",
          "Preserve coral reefs.",
          "Encourage sustainable fishing.",
          "Prevent untreated sewage discharge.",
          "Reduce coastal pollution.",
          "Support marine conservation programmes.",
          "Protect coastal ecosystems from destructive development."
      ] },
      { type: 'paragraph', text: "Healthy oceans are essential for a healthy planet." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "13. RESPONSIBLE INDUSTRIES AND GREEN BUSINESSES", id: "13-responsible-industries-and-green-businesses" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Solar-powered factories.",
          "Energy-efficient industrial equipment.",
          "Water recycling systems.",
          "Green manufacturing.",
          "Electric industrial transportation.",
          "Responsible supply chains."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Businesses and industries have an important responsibility in shaping the environmental future." },
      { type: 'paragraph', text: "Economic development and environmental protection must progress together." },
      { type: 'paragraph', text: "Companies can contribute by:" },
      { type: 'list', ordered: false, items: [
          "Improving energy efficiency.",
          "Transitioning to renewable electricity.",
          "Reducing industrial emissions.",
          "Managing wastewater responsibly.",
          "Minimising production waste.",
          "Using sustainable materials.",
          "Improving supply-chain transparency.",
          "Measuring and reducing their environmental footprint.",
          "Designing durable and repairable products."
      ] },
      { type: 'paragraph', text: "Green business is not only about marketing." },
      { type: 'paragraph', text: "It is about measurable environmental improvements and responsible business practices." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "14. EDUCATION, TECHNOLOGY AND PUBLIC PARTICIPATION", id: "14-education-technology-and-public-participation" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Students participating in environmental activities.",
          "Teachers conducting nature education.",
          "Scientists researching clean technologies.",
          "Community clean-up programmes.",
          "Digital environmental awareness campaigns."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Technology alone cannot save Earth." },
      { type: 'paragraph', text: "Government policies alone cannot save Earth." },
      { type: 'paragraph', text: "Environmental protection requires knowledge, participation and collective responsibility." },
      { type: 'paragraph', text: "Schools must teach environmental awareness." },
      { type: 'paragraph', text: "Universities must encourage research and innovation." },
      { type: 'paragraph', text: "Businesses must adopt responsible practices." },
      { type: 'paragraph', text: "Governments must enforce environmental regulations." },
      { type: 'paragraph', text: "Communities must protect their local natural resources." },
      { type: 'paragraph', text: "Social media can spread environmental knowledge and encourage positive action." },
      { type: 'paragraph', text: "Every informed citizen can influence the future." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "15. WHAT EVERY PERSON CAN DO STARTING TODAY", id: "15-what-every-person-can-do-starting-today" },
    blocks: [
      { type: 'paragraph', text: "Visuals: A sequence of everyday sustainable actions." },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Saving Earth does not always require expensive technology or extraordinary sacrifices." },
      { type: 'paragraph', text: "It begins with daily decisions." },
      { type: 'paragraph', text: "At home:" },
      { type: 'list', ordered: false, items: [
          "Switch off unused electrical appliances.",
          "Save water.",
          "Reduce food waste.",
          "Segregate household waste.",
          "Avoid unnecessary plastic.",
          "Use energy-efficient appliances."
      ] },
      { type: 'paragraph', text: "At work:" },
      { type: 'list', ordered: false, items: [
          "Reduce paper consumption.",
          "Save electricity.",
          "Encourage responsible waste disposal.",
          "Support sustainable procurement.",
          "Reduce unnecessary travel."
      ] },
      { type: 'paragraph', text: "In communities:" },
      { type: 'list', ordered: false, items: [
          "Protect local trees.",
          "Clean public spaces.",
          "Restore local water bodies.",
          "Support biodiversity.",
          "Participate in environmental awareness programmes."
      ] },
      { type: 'paragraph', text: "As consumers:" },
      { type: 'list', ordered: false, items: [
          "Choose durable products.",
          "Repair before replacing.",
          "Avoid unnecessary purchases.",
          "Support responsible manufacturers.",
          "Consider the environmental impact of products."
      ] },
      { type: 'paragraph', text: "The smallest responsible action, repeated by millions of people, can create meaningful change." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "16. GOVERNMENTS, ORGANISATIONS AND GLOBAL RESPONSIBILITY", id: "16-governments-organisations-and-global-responsibility" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "International climate conferences.",
          "Environmental policy discussions.",
          "Renewable energy projects.",
          "Conservation programmes.",
          "Community development initiatives."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Environmental challenges are interconnected and global." },
      { type: 'paragraph', text: "Governments must develop effective environmental policies, enforce pollution controls, protect natural resources and invest in sustainable infrastructure." },
      { type: 'paragraph', text: "International cooperation is essential to address climate change, biodiversity loss and ocean pollution." },
      { type: 'paragraph', text: "Organisations must measure their environmental impacts and improve their practices." },
      { type: 'paragraph', text: "Citizens must demand transparency and accountability." },
      { type: 'paragraph', text: "A sustainable future requires cooperation between nations, industries, communities and individuals." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "17. THE FUTURE WE WANT TO CREATE", id: "17-the-future-we-want-to-create" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "Clean rivers.",
          "Green forests.",
          "Solar-powered homes.",
          "Wind farms.",
          "Sustainable agriculture.",
          "Children planting trees.",
          "Wildlife returning to natural habitats.",
          "A beautiful Earth from space."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "Imagine a future where cities breathe clean air." },
      { type: 'paragraph', text: "Where rivers run clean." },
      { type: 'paragraph', text: "Where forests are protected." },
      { type: 'paragraph', text: "Where wildlife lives safely." },
      { type: 'paragraph', text: "Where agriculture uses water responsibly." },
      { type: 'paragraph', text: "Where industries operate efficiently." },
      { type: 'paragraph', text: "Where renewable energy powers homes and businesses." },
      { type: 'paragraph', text: "Where children inherit a planet with healthy ecosystems and opportunities for a better life." },
      { type: 'paragraph', text: "This future is possible, but it will not happen automatically." },
      { type: 'paragraph', text: "It requires decisions." },
      { type: 'paragraph', text: "It requires investment." },
      { type: 'paragraph', text: "It requires innovation." },
      { type: 'paragraph', text: "Most importantly, it requires action." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "18. FINAL MESSAGE – THE EARTH IS IN OUR HANDS", id: "18-final-message-the-earth-is-in-our-hands" },
    blocks: [
      { type: 'paragraph', text: "Visuals:" },
      { type: 'list', ordered: false, items: [
          "A child holding a small plant.",
          "People planting trees.",
          "Solar panels and wind turbines at sunset.",
          "Earth rotating slowly in space.",
          "Fade to black."
      ] },
      { type: 'paragraph', text: "Narrator:" },
      { type: 'paragraph', text: "We do not own this planet." },
      { type: 'paragraph', text: "We are temporary guardians of a world that existed long before us and must continue long after us." },
      { type: 'paragraph', text: "Nature does not need our appreciation alone." },
      { type: 'paragraph', text: "It needs our protection." },
      { type: 'paragraph', text: "We cannot reverse every environmental problem overnight." },
      { type: 'paragraph', text: "But we can stop making many of them worse." },
      { type: 'paragraph', text: "We can conserve resources." },
      { type: 'paragraph', text: "We can reduce pollution." },
      { type: 'paragraph', text: "We can protect biodiversity." },
      { type: 'paragraph', text: "We can choose cleaner energy." },
      { type: 'paragraph', text: "We can educate future generations." },
      { type: 'paragraph', text: "We can hold ourselves accountable." },
      { type: 'paragraph', text: "Let us move beyond awareness." },
      { type: 'paragraph', text: "Let us turn responsibility into action." },
      { type: 'paragraph', text: "Because there is no Planet B." },
      { type: 'paragraph', text: "SAVE EARTH." },
      { type: 'paragraph', text: "SAVE WATER." },
      { type: 'paragraph', text: "SAVE TREES." },
      { type: 'paragraph', text: "SAVE WILDLIFE." },
      { type: 'paragraph', text: "REDUCE POLLUTION." },
      { type: 'paragraph', text: "CHOOSE CLEAN ENERGY." },
      { type: 'paragraph', text: "PROTECT FUTURE GENERATIONS." },
      { type: 'heading', level: 3, text: "OUR PLANET. OUR RESPONSIBILITY. OUR FUTURE.", id: "our-planet-our-responsibility-our-future" },
      { type: 'paragraph', text: "The change begins with us." },
      { type: 'heading', level: 2, text: "Additional topics to include for a truly comprehensive documentary", id: "additional-topics-to-include-for-a-truly-comprehensive-documentary" },
      { type: 'paragraph', text: "The script above covers the major environmental areas. For an expanded documentary series, I recommend adding these subjects:" },
      { type: 'table', headers: ["Area", "Topics to investigate"], rows: [
          ["Climate", "Carbon emissions, methane, climate adaptation"],
          ["Energy", "Solar, wind, hydro, geothermal, storage, energy efficiency"],
          ["Water", "Groundwater, wastewater, watershed restoration"],
          ["Forests", "Deforestation, restoration, indigenous communities"],
          ["Agriculture", "Soil health, food security, regenerative practices"],
          ["Oceans", "Coral bleaching, overfishing, ocean acidification"],
          ["Pollution", "Air, water, soil, noise and light pollution"],
          ["Technology", "Green hydrogen, carbon capture, recycling technologies"],
          ["Human health", "Heat stress, pollution-related diseases"],
          ["Consumption", "Fast fashion, electronic waste, sustainable products"],
          ["Infrastructure", "Green buildings, sustainable transport"],
          ["Governance", "Environmental laws, conservation funding and accountability"]
      ] },
      { type: 'heading', level: 2, text: "Suggested documentary production style", id: "suggested-documentary-production-style" },
      { type: 'paragraph', text: "I recommend:" },
      { type: 'list', ordered: false, items: [
          "Narration: Professional, emotional and authoritative.",
          "Visuals: Real environmental footage, satellite images, scientific animations and practical demonstrations.",
          "Music: Cinematic orchestral background, with quieter sections for serious environmental issues.",
          "Language: English narration with subtitles in Telugu, Hindi, Tamil and Kannada.",
          "Ending: A strong public environmental responsibility message."
      ] },
      { type: 'paragraph', text: "My recommendation: Make this an international-quality documentary rather than only a promotional video. AeroSun Energy can be acknowledged as a supporting organisation in a separate closing credit, while the documentary itself remains educational and independent." },
      { type: 'paragraph', text: "I can also develop this into a complete production package with scene-by-scene visuals, camera directions, narration timing, background music cues and a documentary shooting plan." },
      { type: 'paragraph', text: "Below is the complete documentary document, written in a professional, educational and globally relevant style. It covers environmental problems, their causes, consequences and practical solutions, with particular attention to India's environmental challenges." },
    ],
  },
  {
    heading: { text: "SAVE EARTH", id: "save-earth-2" },
    blocks: [
      { type: 'heading', level: 2, text: "OUR PLANET, OUR RESPONSIBILITY", id: "our-planet-our-responsibility-2" },
      { type: 'heading', level: 3, text: "A Comprehensive Documentary on Environmental Protection, Sustainability and the Future of Humanity", id: "a-comprehensive-documentary-on-environmental-protection-sustainability-and-the-future-of-humanity" },
      { type: 'paragraph', text: "Documentary Theme: Protecting Earth through awareness, responsibility, innovation and collective action." },
      { type: 'paragraph', text: "Purpose: To educate individuals, communities, businesses, industries and governments about environmental challenges and practical solutions for protecting our planet." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "CHAPTER 1: INTRODUCTION – EARTH, OUR ONLY HOME", id: "chapter-1-introduction-earth-our-only-home" },
    blocks: [
      { type: 'paragraph', text: "Earth is more than a planet. It is our home, our source of life and the foundation of our existence." },
      { type: 'paragraph', text: "It provides everything necessary for survival: oxygen, water, food, energy, minerals and natural resources. Its forests produce oxygen and store carbon. Its oceans regulate climate. Its rivers provide freshwater. Its soil supports agriculture. Its ecosystems maintain the natural balance that allows millions of species to survive." },
      { type: 'paragraph', text: "For billions of years, natural processes have shaped and sustained life on Earth." },
      { type: 'paragraph', text: "However, human activities are placing unprecedented pressure on the planet's natural systems." },
      { type: 'paragraph', text: "Deforestation, industrial pollution, excessive consumption, fossil-fuel dependence, habitat destruction, plastic waste and unsustainable development are damaging ecosystems and threatening biodiversity." },
      { type: 'paragraph', text: "Climate change is increasing environmental risks across the world. Water scarcity is affecting communities. Air pollution is threatening human health. Agricultural land is experiencing degradation. Wildlife is losing natural habitats." },
      { type: 'paragraph', text: "These challenges are interconnected." },
      { type: 'paragraph', text: "The destruction of forests contributes to climate change. Climate change affects rainfall patterns. Changing rainfall affects agriculture and freshwater availability. Pollution damages ecosystems and threatens biodiversity." },
      { type: 'paragraph', text: "Environmental protection must therefore be approached as a complete global responsibility." },
      { type: 'paragraph', text: "Saving Earth does not mean stopping development. It means developing responsibly, using resources efficiently and ensuring that economic progress does not destroy the natural systems on which life depends." },
      { type: 'paragraph', text: "The future of humanity depends on the decisions we make today." },
    ],
  },
  {
    heading: { text: "CHAPTER 2: UNDERSTANDING CLIMATE CHANGE AND GLOBAL WARMING", id: "chapter-2-understanding-climate-change-and-global-warming" },
    blocks: [
      { type: 'paragraph', text: "Climate change is one of the most significant challenges facing humanity." },
      { type: 'paragraph', text: "Earth naturally experiences variations in temperature and climate. However, human activities have significantly increased the concentration of greenhouse gases in the atmosphere." },
      { type: 'paragraph', text: "Carbon dioxide, methane and nitrous oxide trap heat within the Earth's atmosphere." },
      { type: 'paragraph', text: "The major sources of human-related greenhouse gas emissions include:" },
      { type: 'list', ordered: true, items: [
          "Burning coal, petroleum and natural gas.",
          "Industrial manufacturing.",
          "Transportation.",
          "Deforestation.",
          "Agriculture and livestock production.",
          "Waste disposal and landfills.",
          "Energy-intensive buildings and infrastructure."
      ] },
      { type: 'paragraph', text: "The consequences include:" },
      { type: 'list', ordered: false, items: [
          "Increasing average global temperatures.",
          "Melting glaciers and ice sheets.",
          "Rising sea levels.",
          "More frequent and intense heatwaves.",
          "Changes in rainfall patterns.",
          "Increased risks from droughts and heavy rainfall.",
          "Threats to food production.",
          "Damage to natural ecosystems.",
          "Greater risks to human health."
      ] },
      { type: 'heading', level: 3, text: "Solutions", id: "solutions" },
      { type: 'paragraph', text: "Individual responsibility" },
      { type: 'list', ordered: false, items: [
          "Reduce unnecessary electricity consumption.",
          "Use energy-efficient appliances.",
          "Avoid unnecessary vehicle journeys.",
          "Reduce food waste.",
          "Choose durable and reusable products."
      ] },
      { type: 'paragraph', text: "Business responsibility" },
      { type: 'list', ordered: false, items: [
          "Improve energy efficiency.",
          "Measure greenhouse gas emissions.",
          "Adopt renewable electricity where feasible.",
          "Reduce production waste.",
          "Improve supply-chain sustainability."
      ] },
      { type: 'paragraph', text: "Government responsibility" },
      { type: 'list', ordered: false, items: [
          "Develop effective climate policies.",
          "Support clean-energy infrastructure.",
          "Protect natural carbon sinks.",
          "Improve climate resilience.",
          "Encourage sustainable transportation."
      ] },
      { type: 'paragraph', text: "Climate change cannot be solved by one technology or one organisation. It requires coordinated action across the global economy." },
    ],
  },
  {
    heading: { text: "CHAPTER 3: SAVE TREES – PROTECT FORESTS", id: "chapter-3-save-trees-protect-forests" },
    blocks: [
      { type: 'paragraph', text: "Forests are among the most important natural resources on Earth." },
      { type: 'paragraph', text: "They absorb carbon dioxide, store carbon, regulate water cycles, prevent soil erosion and provide habitats for countless species." },
      { type: 'paragraph', text: "Forests also support indigenous communities and millions of people whose livelihoods depend on natural ecosystems." },
      { type: 'paragraph', text: "Despite their importance, forests are being destroyed through:" },
      { type: 'list', ordered: false, items: [
          "Agricultural land expansion.",
          "Illegal logging.",
          "Urbanisation.",
          "Mining.",
          "Infrastructure development.",
          "Forest fires.",
          "Unsustainable timber extraction."
      ] },
      { type: 'paragraph', text: "Deforestation contributes to biodiversity loss, soil degradation and increased greenhouse gas emissions." },
      { type: 'heading', level: 3, text: "How to protect forests", id: "how-to-protect-forests" },
      { type: 'list', ordered: true, items: [
          "Protect existing forests.",
          "Prevent illegal logging.",
          "Restore degraded forest ecosystems.",
          "Plant native tree species.",
          "Protect young trees until they mature.",
          "Reduce unnecessary paper consumption.",
          "Encourage sustainable forestry.",
          "Prevent forest fires.",
          "Protect wildlife corridors.",
          "Support community-based forest conservation."
      ] },
      { type: 'heading', level: 3, text: "Importance of native trees", id: "importance-of-native-trees" },
      { type: 'paragraph', text: "Tree-planting programmes should prioritise species suitable for the local climate and ecosystem." },
      { type: 'paragraph', text: "Planting unsuitable species can affect groundwater, soil conditions and biodiversity." },
      { type: 'paragraph', text: "Successful reforestation is not measured simply by the number of trees planted. It must also consider survival rates, ecosystem restoration and long-term maintenance." },
      { type: 'paragraph', text: "Protecting an existing forest is often more valuable than trying to recreate one after destruction." },
    ],
  },
  {
    heading: { text: "CHAPTER 4: SAVE WATER – PROTECT EVERY DROP", id: "chapter-4-save-water-protect-every-drop" },
    blocks: [
      { type: 'paragraph', text: "Water is essential for human survival, agriculture, industry and natural ecosystems." },
      { type: 'paragraph', text: "Although most of Earth's surface is covered by water, only a small proportion is freshwater, and only part of that is readily accessible for human use." },
      { type: 'paragraph', text: "Freshwater resources are under pressure from:" },
      { type: 'list', ordered: false, items: [
          "Groundwater over-extraction.",
          "River pollution.",
          "Industrial wastewater.",
          "Agricultural runoff.",
          "Urbanisation.",
          "Inefficient irrigation.",
          "Destruction of wetlands.",
          "Climate-related changes in rainfall."
      ] },
      { type: 'paragraph', text: "Water scarcity threatens agriculture, public health, food security and economic development." },
      { type: 'heading', level: 3, text: "Household water conservation", id: "household-water-conservation" },
      { type: 'list', ordered: false, items: [
          "Repair leaking taps and pipelines.",
          "Install water-efficient fixtures.",
          "Avoid unnecessary water consumption.",
          "Use water-efficient washing equipment.",
          "Collect rainwater where feasible.",
          "Reuse suitable household water for gardening."
      ] },
      { type: 'heading', level: 3, text: "Agricultural water conservation", id: "agricultural-water-conservation" },
      { type: 'list', ordered: false, items: [
          "Adopt drip irrigation.",
          "Use sprinkler irrigation where appropriate.",
          "Schedule irrigation based on crop requirements.",
          "Monitor soil moisture.",
          "Maintain irrigation pipelines.",
          "Select crops suitable for local water availability."
      ] },
      { type: 'heading', level: 3, text: "Industrial water conservation", id: "industrial-water-conservation" },
      { type: 'list', ordered: false, items: [
          "Recycle and reuse treated wastewater.",
          "Improve manufacturing efficiency.",
          "Monitor water consumption.",
          "Prevent chemical contamination.",
          "Maintain wastewater treatment systems."
      ] },
      { type: 'heading', level: 3, text: "Rainwater harvesting", id: "rainwater-harvesting" },
      { type: 'paragraph', text: "Rainwater harvesting is an effective way to collect and store rainfall." },
      { type: 'paragraph', text: "Systems can be installed in:" },
      { type: 'list', ordered: false, items: [
          "Residential buildings.",
          "Commercial buildings.",
          "Schools and colleges.",
          "Factories.",
          "Agricultural properties.",
          "Community facilities."
      ] },
      { type: 'paragraph', text: "Rainwater can be directed into storage tanks or suitable groundwater-recharge structures after appropriate filtration and assessment." },
      { type: 'heading', level: 3, text: "Protect rivers and lakes", id: "protect-rivers-and-lakes" },
      { type: 'paragraph', text: "Rivers, lakes, ponds and wetlands are essential ecological systems." },
      { type: 'paragraph', text: "Communities must prevent untreated sewage, industrial waste, plastics and chemicals from entering natural water bodies." },
      { type: 'paragraph', text: "Saving water today means securing life tomorrow." },
    ],
  },
  {
    heading: { text: "CHAPTER 5: STOP PLASTIC POLLUTION", id: "chapter-5-stop-plastic-pollution" },
    blocks: [
      { type: 'paragraph', text: "Plastic is widely used because it is inexpensive, durable and convenient." },
      { type: 'paragraph', text: "However, improper plastic production, consumption and disposal create serious environmental problems." },
      { type: 'paragraph', text: "Plastic waste accumulates in:" },
      { type: 'list', ordered: false, items: [
          "Oceans.",
          "Rivers.",
          "Lakes.",
          "Agricultural land.",
          "Forests.",
          "Urban drainage systems.",
          "Coastal ecosystems."
      ] },
      { type: 'paragraph', text: "Marine animals may ingest plastic or become entangled in discarded materials." },
      { type: 'paragraph', text: "Over time, larger plastics can break into microplastics and smaller particles." },
      { type: 'heading', level: 3, text: "What individuals can do", id: "what-individuals-can-do" },
      { type: 'list', ordered: true, items: [
          "Carry reusable shopping bags.",
          "Avoid unnecessary disposable plastic products.",
          "Use reusable bottles.",
          "Choose products with minimal packaging.",
          "Separate recyclable materials.",
          "Avoid littering.",
          "Participate in local clean-up campaigns.",
          "Support responsible packaging systems."
      ] },
      { type: 'heading', level: 3, text: "What businesses can do", id: "what-businesses-can-do" },
      { type: 'list', ordered: false, items: [
          "Reduce unnecessary packaging.",
          "Adopt reusable transport packaging.",
          "Improve material recovery.",
          "Introduce responsible product design.",
          "Support authorised recycling systems.",
          "Follow applicable plastic-waste regulations."
      ] },
      { type: 'heading', level: 3, text: "What governments can do", id: "what-governments-can-do" },
      { type: 'list', ordered: false, items: [
          "Improve waste collection.",
          "Enforce plastic-waste regulations.",
          "Strengthen recycling infrastructure.",
          "Prevent illegal dumping.",
          "Support alternatives where environmentally appropriate."
      ] },
      { type: 'paragraph', text: "Recycling is important, but prevention and reduction should come first." },
    ],
  },
  {
    heading: { text: "CHAPTER 6: CLEAN AIR – THE RIGHT TO BREATHE", id: "chapter-6-clean-air-the-right-to-breathe" },
    blocks: [
      { type: 'paragraph', text: "Clean air is fundamental to human health." },
      { type: 'paragraph', text: "Air pollution is caused by a combination of natural and human activities." },
      { type: 'paragraph', text: "Major human-related sources include:" },
      { type: 'list', ordered: false, items: [
          "Vehicle emissions.",
          "Industrial processes.",
          "Coal-fired power generation.",
          "Construction dust.",
          "Waste burning.",
          "Household solid fuels.",
          "Agricultural residue burning."
      ] },
      { type: 'paragraph', text: "Air pollution contains harmful substances such as particulate matter, nitrogen oxides, sulphur dioxide and ground-level ozone." },
      { type: 'paragraph', text: "Exposure can increase the risk of respiratory and cardiovascular diseases." },
      { type: 'heading', level: 3, text: "Solutions", id: "solutions-2" },
      { type: 'paragraph', text: "Transportation" },
      { type: 'list', ordered: false, items: [
          "Improve public transport.",
          "Encourage walking and cycling.",
          "Promote cleaner vehicle technologies.",
          "Maintain vehicles properly.",
          "Reduce unnecessary travel."
      ] },
      { type: 'paragraph', text: "Industries" },
      { type: 'list', ordered: false, items: [
          "Install appropriate emission-control equipment.",
          "Monitor industrial emissions.",
          "Improve energy efficiency.",
          "Adopt cleaner production technologies."
      ] },
      { type: 'paragraph', text: "Households" },
      { type: 'list', ordered: false, items: [
          "Avoid burning waste.",
          "Use cleaner cooking fuels.",
          "Reduce indoor smoke.",
          "Improve ventilation."
      ] },
      { type: 'paragraph', text: "Urban planning" },
      { type: 'list', ordered: false, items: [
          "Protect green spaces.",
          "Manage construction dust.",
          "Improve traffic management.",
          "Develop pedestrian-friendly infrastructure."
      ] },
      { type: 'paragraph', text: "Clean air must be treated as a public-health priority." },
    ],
  },
  {
    heading: { text: "CHAPTER 7: RENEWABLE ENERGY – A CLEANER ENERGY FUTURE", id: "chapter-7-renewable-energy-a-cleaner-energy-future" },
    blocks: [
      { type: 'paragraph', text: "Energy is essential for modern life." },
      { type: 'paragraph', text: "Homes, hospitals, schools, agriculture, transportation, businesses and industries depend on reliable electricity." },
      { type: 'paragraph', text: "However, fossil-fuel-based energy production is a major source of greenhouse gas emissions." },
      { type: 'paragraph', text: "Renewable energy provides important alternatives." },
      { type: 'heading', level: 2, text: "7.1 Solar Energy", id: "7-1-solar-energy" },
      { type: 'paragraph', text: "Solar energy uses sunlight to produce electricity or heat." },
      { type: 'paragraph', text: "Photovoltaic solar panels convert sunlight directly into electricity." },
      { type: 'paragraph', text: "Solar applications include:" },
      { type: 'list', ordered: false, items: [
          "Residential rooftop systems.",
          "Commercial rooftop systems.",
          "Industrial solar plants.",
          "Agricultural solar pumps.",
          "Solar street lighting.",
          "Off-grid electricity systems.",
          "Solar-powered water heating.",
          "Utility-scale solar farms."
      ] },
      { type: 'paragraph', text: "Solar energy can reduce dependence on conventional electricity sources, depending on system design and the electricity generation mix it replaces." },
      { type: 'heading', level: 2, text: "7.2 Wind Energy", id: "7-2-wind-energy" },
      { type: 'paragraph', text: "Wind turbines convert the kinetic energy of moving air into electricity." },
      { type: 'paragraph', text: "Wind power can be generated through:" },
      { type: 'list', ordered: false, items: [
          "Large wind farms.",
          "Medium-scale commercial turbines.",
          "Small distributed wind systems.",
          "Suitable agricultural and remote-site applications."
      ] },
      { type: 'paragraph', text: "Wind projects require careful assessment of:" },
      { type: 'list', ordered: false, items: [
          "Average wind speed.",
          "Wind-speed distribution.",
          "Turbine power curves.",
          "Turbulence.",
          "Site conditions.",
          "Structural safety.",
          "Environmental impacts."
      ] },
      { type: 'paragraph', text: "A turbine's rated capacity does not mean it continuously generates that amount of electricity." },
      { type: 'paragraph', text: "Actual output depends on wind conditions and equipment performance." },
      { type: 'heading', level: 2, text: "7.3 Solar-Wind Hybrid Energy", id: "7-3-solar-wind-hybrid-energy" },
      { type: 'paragraph', text: "Solar and wind resources can complement one another." },
      { type: 'paragraph', text: "Solar generation is generally strongest during daylight hours, while wind availability varies by location and season." },
      { type: 'paragraph', text: "A hybrid system may combine:" },
      { type: 'list', ordered: false, items: [
          "Solar panels.",
          "Wind turbines.",
          "Battery storage.",
          "Charge controllers.",
          "Power conversion equipment.",
          "Energy management systems.",
          "Grid connectivity where applicable."
      ] },
      { type: 'paragraph', text: "Hybrid systems can improve energy availability when properly designed." },
      { type: 'paragraph', text: "However, combining technologies does not automatically guarantee uninterrupted electricity. Storage capacity, generation resources, demand and system controls must all be considered." },
      { type: 'heading', level: 2, text: "7.4 Hydropower", id: "7-4-hydropower" },
      { type: 'paragraph', text: "Hydropower generates electricity from moving water." },
      { type: 'paragraph', text: "It can provide renewable electricity, but projects must consider ecological impacts, river flows, fish migration, sediment movement and community displacement." },
      { type: 'heading', level: 2, text: "7.5 Geothermal Energy", id: "7-5-geothermal-energy" },
      { type: 'paragraph', text: "Geothermal energy uses heat from within the Earth." },
      { type: 'paragraph', text: "It can provide electricity and direct heating in locations with suitable geological resources." },
      { type: 'heading', level: 2, text: "7.6 Sustainable Bioenergy", id: "7-6-sustainable-bioenergy" },
      { type: 'paragraph', text: "Bioenergy can be produced from suitable organic materials, agricultural residues and biogas." },
      { type: 'paragraph', text: "Its environmental benefits depend on feedstock sourcing, land-use impacts, emissions and production methods." },
      { type: 'heading', level: 2, text: "7.7 Energy Storage", id: "7-7-energy-storage" },
      { type: 'paragraph', text: "Batteries and other storage technologies help balance electricity supply and demand." },
      { type: 'paragraph', text: "They can store electricity when generation is available and release it when required." },
      { type: 'paragraph', text: "Storage systems must be designed with appropriate safety measures, battery management and end-of-life recycling arrangements." },
      { type: 'heading', level: 2, text: "7.8 Energy Efficiency", id: "7-8-energy-efficiency" },
      { type: 'paragraph', text: "The cleanest energy is often energy that does not need to be consumed." },
      { type: 'paragraph', text: "Important actions include:" },
      { type: 'list', ordered: false, items: [
          "LED lighting.",
          "Efficient motors.",
          "Efficient cooling systems.",
          "Insulation.",
          "Smart energy monitoring.",
          "Industrial process optimisation.",
          "Reducing standby consumption."
      ] },
      { type: 'paragraph', text: "Renewable energy and energy efficiency must work together to build a sustainable energy system." },
    ],
  },
  {
    heading: { text: "CHAPTER 8: PROTECT WILDLIFE AND BIODIVERSITY", id: "chapter-8-protect-wildlife-and-biodiversity" },
    blocks: [
      { type: 'paragraph', text: "Earth supports millions of species of plants, animals, fungi and microorganisms." },
      { type: 'paragraph', text: "These species form interconnected ecosystems." },
      { type: 'paragraph', text: "Pollinators support agriculture. Forest organisms contribute to nutrient cycling. Wetlands filter water. Marine ecosystems support food chains." },
      { type: 'paragraph', text: "Biodiversity is essential for ecological stability and human well-being." },
      { type: 'heading', level: 3, text: "Major threats", id: "major-threats" },
      { type: 'list', ordered: false, items: [
          "Habitat destruction.",
          "Illegal wildlife trade.",
          "Pollution.",
          "Climate change.",
          "Overexploitation.",
          "Invasive species.",
          "Unsustainable fishing.",
          "Human-wildlife conflict."
      ] },
      { type: 'heading', level: 3, text: "Conservation measures", id: "conservation-measures" },
      { type: 'list', ordered: true, items: [
          "Protect natural habitats.",
          "Establish and maintain wildlife corridors.",
          "Prevent illegal hunting and trafficking.",
          "Restore wetlands and forests.",
          "Protect endangered species.",
          "Reduce pesticide misuse.",
          "Promote sustainable fishing.",
          "Protect nesting and breeding areas.",
          "Encourage scientific research.",
          "Support community conservation programmes."
      ] },
      { type: 'paragraph', text: "Wildlife conservation must also consider the needs and livelihoods of communities living near natural habitats." },
      { type: 'paragraph', text: "Protecting biodiversity means protecting the living systems that sustain our planet." },
    ],
  },
  {
    heading: { text: "CHAPTER 9: SUSTAINABLE AGRICULTURE AND FOOD SECURITY", id: "chapter-9-sustainable-agriculture-and-food-security" },
    blocks: [
      { type: 'paragraph', text: "Agriculture is essential for human survival." },
      { type: 'paragraph', text: "However, unsustainable agricultural practices can damage soil, deplete groundwater and contribute to pollution and greenhouse gas emissions." },
      { type: 'paragraph', text: "The future of agriculture must combine productivity with environmental protection." },
      { type: 'heading', level: 3, text: "Sustainable farming practices", id: "sustainable-farming-practices" },
      { type: 'list', ordered: false, items: [
          "Crop rotation.",
          "Soil conservation.",
          "Appropriate organic matter management.",
          "Integrated pest management.",
          "Efficient irrigation.",
          "Agroforestry.",
          "Responsible fertiliser use.",
          "Conservation agriculture.",
          "Protection of pollinators.",
          "Reduced post-harvest losses."
      ] },
      { type: 'heading', level: 3, text: "Soil conservation", id: "soil-conservation" },
      { type: 'paragraph', text: "Healthy soil supports plant growth, stores carbon, retains water and supports microorganisms." },
      { type: 'paragraph', text: "Soil degradation can result from erosion, excessive chemical inputs, deforestation and poor land management." },
      { type: 'paragraph', text: "Farmers can protect soil through:" },
      { type: 'list', ordered: false, items: [
          "Cover cropping.",
          "Mulching.",
          "Contour farming.",
          "Appropriate crop rotation.",
          "Reduced soil disturbance.",
          "Maintaining vegetation cover."
      ] },
      { type: 'heading', level: 3, text: "Reduce food waste", id: "reduce-food-waste" },
      { type: 'paragraph', text: "Food waste occurs during production, storage, transportation, retail and household consumption." },
      { type: 'paragraph', text: "Solutions include better storage, improved supply chains, appropriate food planning, food donation programmes and composting of suitable organic waste." },
      { type: 'heading', level: 3, text: "Renewable energy in agriculture", id: "renewable-energy-in-agriculture" },
      { type: 'paragraph', text: "Solar pumps, efficient electric motors and suitable renewable-energy systems can support agricultural operations." },
      { type: 'paragraph', text: "However, irrigation systems should be designed to prevent groundwater over-extraction." },
      { type: 'paragraph', text: "Technology must be combined with responsible water management." },
    ],
  },
  {
    heading: { text: "CHAPTER 10: WASTE MANAGEMENT – REDUCE, REUSE AND RECYCLE", id: "chapter-10-waste-management-reduce-reuse-and-recycle" },
    blocks: [
      { type: 'paragraph', text: "Waste generation is increasing with population growth, urbanisation and consumption." },
      { type: 'paragraph', text: "Improper waste disposal contaminates the environment and wastes valuable materials." },
      { type: 'paragraph', text: "Waste management must begin with preventing unnecessary waste." },
      { type: 'heading', level: 3, text: "The 6R approach", id: "the-6r-approach" },
      { type: 'paragraph', text: "1. REFUSE" },
      { type: 'paragraph', text: "Avoid unnecessary products and packaging." },
      { type: 'paragraph', text: "2. REDUCE" },
      { type: 'paragraph', text: "Consume only what is required." },
      { type: 'paragraph', text: "3. REUSE" },
      { type: 'paragraph', text: "Use products multiple times." },
      { type: 'paragraph', text: "4. REPAIR" },
      { type: 'paragraph', text: "Repair products rather than immediately replacing them." },
      { type: 'paragraph', text: "5. RECYCLE" },
      { type: 'paragraph', text: "Recover suitable materials through responsible recycling systems." },
      { type: 'paragraph', text: "6. ROT" },
      { type: 'paragraph', text: "Compost biodegradable organic waste where appropriate." },
      { type: 'heading', level: 3, text: "Household waste", id: "household-waste" },
      { type: 'paragraph', text: "Households should separate:" },
      { type: 'list', ordered: false, items: [
          "Wet biodegradable waste.",
          "Dry recyclable waste.",
          "Domestic hazardous waste.",
          "Sanitary waste.",
          "Electronic waste."
      ] },
      { type: 'heading', level: 3, text: "Industrial waste", id: "industrial-waste" },
      { type: 'paragraph', text: "Industries should:" },
      { type: 'list', ordered: false, items: [
          "Identify waste streams.",
          "Minimise waste generation.",
          "Recover reusable materials.",
          "Treat wastewater.",
          "Store hazardous waste safely.",
          "Use authorised disposal facilities."
      ] },
      { type: 'heading', level: 3, text: "Electronic waste", id: "electronic-waste" },
      { type: 'paragraph', text: "Discarded computers, phones, televisions, batteries and electronic appliances may contain hazardous substances and valuable recoverable materials." },
      { type: 'paragraph', text: "Electronic waste must be handled through authorised collection and recycling channels." },
      { type: 'heading', level: 3, text: "Construction waste", id: "construction-waste" },
      { type: 'paragraph', text: "Construction and demolition activities generate concrete, metal, wood, glass and other materials." },
      { type: 'paragraph', text: "Appropriate segregation and material recovery can reduce landfill pressure." },
      { type: 'paragraph', text: "Waste is not simply something to throw away. Much of it represents resources that can be recovered." },
    ],
  },
  {
    heading: { text: "CHAPTER 11: OCEAN AND MARINE CONSERVATION", id: "chapter-11-ocean-and-marine-conservation" },
    blocks: [
      { type: 'paragraph', text: "Oceans cover most of Earth's surface and play a fundamental role in regulating climate." },
      { type: 'paragraph', text: "They support biodiversity, fisheries, transportation, livelihoods and food security." },
      { type: 'paragraph', text: "Marine ecosystems face serious threats." },
      { type: 'heading', level: 3, text: "Major problems", id: "major-problems" },
      { type: 'list', ordered: false, items: [
          "Plastic pollution.",
          "Overfishing.",
          "Coral bleaching.",
          "Ocean acidification.",
          "Coastal habitat destruction.",
          "Chemical contamination.",
          "Untreated sewage.",
          "Climate change."
      ] },
      { type: 'heading', level: 3, text: "Solutions", id: "solutions-3" },
      { type: 'list', ordered: true, items: [
          "Reduce plastic waste.",
          "Protect mangrove ecosystems.",
          "Preserve coral reefs.",
          "Promote sustainable fisheries.",
          "Prevent untreated sewage discharge.",
          "Improve coastal waste management.",
          "Protect marine wildlife.",
          "Strengthen marine protected areas.",
          "Monitor ocean pollution.",
          "Encourage responsible coastal development."
      ] },
      { type: 'paragraph', text: "Mangroves, seagrasses and salt marshes also store significant amounts of carbon and provide important coastal protection." },
      { type: 'paragraph', text: "Healthy oceans are essential for a healthy planet." },
    ],
  },
  {
    heading: { text: "CHAPTER 12: GREEN CITIES AND SUSTAINABLE TRANSPORTATION", id: "chapter-12-green-cities-and-sustainable-transportation" },
    blocks: [
      { type: 'paragraph', text: "Urbanisation is transforming the world." },
      { type: 'paragraph', text: "Cities require energy, water, transportation, buildings, food and waste-management infrastructure." },
      { type: 'paragraph', text: "Poor planning can increase pollution, congestion, flooding and resource consumption." },
      { type: 'heading', level: 3, text: "Green city solutions", id: "green-city-solutions" },
      { type: 'list', ordered: false, items: [
          "Energy-efficient buildings.",
          "Rooftop solar.",
          "Urban tree cover.",
          "Rainwater harvesting.",
          "Sustainable drainage systems.",
          "Efficient public transportation.",
          "Waste segregation.",
          "Water recycling.",
          "Protection of urban lakes.",
          "Pedestrian-friendly infrastructure."
      ] },
      { type: 'heading', level: 3, text: "Sustainable transportation", id: "sustainable-transportation" },
      { type: 'paragraph', text: "Transportation is a major source of energy consumption and emissions." },
      { type: 'paragraph', text: "Solutions include:" },
      { type: 'list', ordered: false, items: [
          "Public transport.",
          "Metro and rail systems.",
          "Electric mobility.",
          "Walking.",
          "Cycling.",
          "Shared transportation.",
          "Efficient freight movement.",
          "Cleaner fuels where appropriate."
      ] },
      { type: 'paragraph', text: "Electric vehicles can reduce local exhaust emissions, but their total environmental impact depends on electricity generation, battery production, vehicle use and end-of-life recycling." },
      { type: 'paragraph', text: "A sustainable city must be designed around people, nature and efficient resource use." },
    ],
  },
  {
    heading: { text: "CHAPTER 13: GREEN INDUSTRIES AND RESPONSIBLE BUSINESSES", id: "chapter-13-green-industries-and-responsible-businesses" },
    blocks: [
      { type: 'paragraph', text: "Businesses and industries influence resource consumption, employment, manufacturing and environmental quality." },
      { type: 'paragraph', text: "Economic growth must be accompanied by environmental responsibility." },
      { type: 'heading', level: 3, text: "Actions businesses should take", id: "actions-businesses-should-take" },
      { type: 'list', ordered: true, items: [
          "Improve energy efficiency.",
          "Adopt renewable electricity where feasible.",
          "Reduce industrial emissions.",
          "Treat wastewater.",
          "Minimise material waste.",
          "Improve product durability.",
          "Use sustainable procurement.",
          "Manage chemicals responsibly.",
          "Improve packaging.",
          "Measure environmental performance."
      ] },
      { type: 'heading', level: 3, text: "Environmental responsibility in manufacturing", id: "environmental-responsibility-in-manufacturing" },
      { type: 'paragraph', text: "Manufacturers should consider the entire product lifecycle:" },
      { type: 'list', ordered: false, items: [
          "Raw-material extraction.",
          "Manufacturing.",
          "Transportation.",
          "Product use.",
          "Maintenance.",
          "Repair.",
          "Reuse.",
          "Recycling.",
          "Final disposal."
      ] },
      { type: 'paragraph', text: "Renewable energy equipment itself must also be manufactured, maintained and recycled responsibly." },
      { type: 'paragraph', text: "Solar panels, wind turbine blades, batteries, electronic controllers and other equipment require appropriate end-of-life management." },
      { type: 'paragraph', text: "Green business must be based on measurable environmental benefits, not merely environmental marketing claims." },
    ],
  },
  {
    heading: { text: "CHAPTER 14: TECHNOLOGY AND INNOVATION FOR EARTH", id: "chapter-14-technology-and-innovation-for-earth" },
    blocks: [
      { type: 'paragraph', text: "Scientific research and technology can help address environmental problems." },
      { type: 'paragraph', text: "Important areas include:" },
      { type: 'heading', level: 3, text: "1. Smart energy systems", id: "1-smart-energy-systems" },
      { type: 'paragraph', text: "Digital monitoring and intelligent controls can improve electricity efficiency and renewable-energy integration." },
      { type: 'heading', level: 3, text: "2. Green hydrogen", id: "2-green-hydrogen" },
      { type: 'paragraph', text: "Hydrogen produced using low-emission electricity may support industrial applications and selected transportation sectors." },
      { type: 'paragraph', text: "Its environmental benefits depend on how it is produced and transported." },
      { type: 'heading', level: 3, text: "3. Battery innovation", id: "3-battery-innovation" },
      { type: 'paragraph', text: "Improved battery technologies can support renewable-energy storage and electric transportation." },
      { type: 'paragraph', text: "Responsible mineral sourcing, manufacturing and recycling remain essential." },
      { type: 'heading', level: 3, text: "4. Carbon capture", id: "4-carbon-capture" },
      { type: 'paragraph', text: "Carbon capture technologies aim to capture carbon dioxide from industrial processes or other sources." },
      { type: 'paragraph', text: "They may help address emissions in certain difficult-to-decarbonise sectors, but require careful evaluation of cost, energy use, storage safety and long-term effectiveness." },
      { type: 'heading', level: 3, text: "5. Precision agriculture", id: "5-precision-agriculture" },
      { type: 'paragraph', text: "Sensors, satellite data and digital tools can help farmers optimise irrigation, fertiliser use and crop management." },
      { type: 'heading', level: 3, text: "6. Environmental monitoring", id: "6-environmental-monitoring" },
      { type: 'paragraph', text: "Satellites, sensors and scientific models can help monitor:" },
      { type: 'list', ordered: false, items: [
          "Forest loss.",
          "Water resources.",
          "Air pollution.",
          "Land degradation.",
          "Coastal changes.",
          "Biodiversity.",
          "Greenhouse gas emissions."
      ] },
      { type: 'paragraph', text: "Technology is an important tool, but it must be supported by responsible policies and public participation." },
    ],
  },
  {
    heading: { text: "CHAPTER 15: PROTECT MOUNTAINS, GLACIERS AND NATURAL LANDSCAPES", id: "chapter-15-protect-mountains-glaciers-and-natural-landscapes" },
    blocks: [
      { type: 'paragraph', text: "Mountains and glaciers are important parts of Earth's natural systems." },
      { type: 'paragraph', text: "They influence regional climate, support biodiversity and provide freshwater to millions of people." },
      { type: 'paragraph', text: "They are threatened by:" },
      { type: 'list', ordered: false, items: [
          "Rising temperatures.",
          "Glacier retreat.",
          "Unsustainable tourism.",
          "Mining.",
          "Deforestation.",
          "Poorly planned construction.",
          "Waste disposal.",
          "Soil erosion."
      ] },
      { type: 'heading', level: 3, text: "Protection measures", id: "protection-measures" },
      { type: 'list', ordered: false, items: [
          "Regulate environmentally sensitive construction.",
          "Protect mountain forests.",
          "Manage tourism responsibly.",
          "Prevent plastic and waste dumping.",
          "Restore degraded slopes.",
          "Monitor glacier changes.",
          "Protect natural water sources.",
          "Encourage sustainable local livelihoods."
      ] },
      { type: 'paragraph', text: "Mountain ecosystems are sensitive, and development must respect their ecological limits." },
    ],
  },
  {
    heading: { text: "CHAPTER 16: HUMAN HEALTH AND ENVIRONMENTAL PROTECTION", id: "chapter-16-human-health-and-environmental-protection" },
    blocks: [
      { type: 'paragraph', text: "Environmental quality directly influences human health." },
      { type: 'paragraph', text: "Air pollution, contaminated water, unsafe sanitation, chemical exposure, extreme heat and poor waste management create serious public-health risks." },
      { type: 'paragraph', text: "Environmental degradation also affects mental well-being, food security and community livelihoods." },
      { type: 'heading', level: 3, text: "Practical health-related environmental actions", id: "practical-health-related-environmental-actions" },
      { type: 'list', ordered: false, items: [
          "Improve access to clean drinking water.",
          "Reduce air pollution.",
          "Maintain safe sanitation.",
          "Improve waste management.",
          "Protect urban green spaces.",
          "Reduce chemical contamination.",
          "Improve heatwave preparedness.",
          "Promote clean cooking.",
          "Protect food safety.",
          "Strengthen environmental health monitoring."
      ] },
      { type: 'paragraph', text: "Environmental protection is also an investment in public health." },
    ],
  },
  {
    heading: { text: "CHAPTER 17: POPULATION, CONSUMPTION AND RESOURCE RESPONSIBILITY", id: "chapter-17-population-consumption-and-resource-responsibility" },
    blocks: [
      { type: 'paragraph', text: "Population growth increases demand for housing, food, energy, transportation and natural resources." },
      { type: 'paragraph', text: "However, environmental pressure is not determined by population alone." },
      { type: 'paragraph', text: "Consumption patterns, technology, inequality, production systems and resource efficiency also matter." },
      { type: 'paragraph', text: "Some communities consume far more resources per person than others." },
      { type: 'paragraph', text: "A sustainable future requires responsible consumption and equitable access to resources." },
      { type: 'heading', level: 3, text: "Practical solutions", id: "practical-solutions" },
      { type: 'list', ordered: false, items: [
          "Reduce unnecessary purchases.",
          "Choose durable products.",
          "Repair and reuse.",
          "Avoid food waste.",
          "Use energy efficiently.",
          "Share resources where practical.",
          "Support circular-economy models.",
          "Encourage responsible manufacturing."
      ] },
      { type: 'paragraph', text: "The goal is not to deny people a better standard of living." },
      { type: 'paragraph', text: "The goal is to make human development compatible with ecological sustainability." },
    ],
  },
  {
    heading: { text: "CHAPTER 18: ENVIRONMENTAL EDUCATION AND COMMUNITY PARTICIPATION", id: "chapter-18-environmental-education-and-community-participation" },
    blocks: [
      { type: 'paragraph', text: "Environmental protection requires informed citizens." },
      { type: 'paragraph', text: "Education helps people understand the relationship between human activities and natural ecosystems." },
      { type: 'paragraph', text: "Schools, colleges, universities and community organisations can play important roles." },
      { type: 'heading', level: 3, text: "Environmental programmes", id: "environmental-programmes" },
      { type: 'list', ordered: false, items: [
          "Tree protection campaigns.",
          "Water conservation activities.",
          "Waste segregation education.",
          "Plastic reduction programmes.",
          "Nature education.",
          "Local biodiversity surveys.",
          "Community clean-up initiatives.",
          "Renewable-energy awareness.",
          "Sustainable agriculture workshops.",
          "Environmental science projects."
      ] },
      { type: 'paragraph', text: "Students can participate in practical environmental projects." },
      { type: 'paragraph', text: "Teachers can incorporate environmental science into education." },
      { type: 'paragraph', text: "Businesses can support community programmes." },
      { type: 'paragraph', text: "Local governments can strengthen environmental awareness and infrastructure." },
      { type: 'paragraph', text: "Environmental education should encourage evidence-based thinking and responsible action." },
    ],
  },
  {
    heading: { text: "CHAPTER 19: THE ROLE OF GOVERNMENTS AND INTERNATIONAL COOPERATION", id: "chapter-19-the-role-of-governments-and-international-cooperation" },
    blocks: [
      { type: 'paragraph', text: "Environmental challenges cross national boundaries." },
      { type: 'paragraph', text: "Climate change, ocean pollution, biodiversity loss and atmospheric pollution require coordinated responses." },
      { type: 'paragraph', text: "Governments have an essential responsibility to:" },
      { type: 'list', ordered: true, items: [
          "Develop environmental policies.",
          "Enforce pollution-control standards.",
          "Protect forests and wildlife.",
          "Improve water management.",
          "Support renewable energy.",
          "Strengthen public transportation.",
          "Improve waste infrastructure.",
          "Encourage sustainable agriculture.",
          "Invest in environmental research.",
          "Support climate adaptation."
      ] },
      { type: 'heading', level: 3, text: "Important international environmental frameworks", id: "important-international-environmental-frameworks" },
      { type: 'paragraph', text: "Paris Agreement" },
      { type: 'paragraph', text: "An international agreement under the United Nations Framework Convention on Climate Change aimed at limiting global warming through national climate commitments." },
      { type: 'paragraph', text: "Convention on Biological Diversity" },
      { type: 'paragraph', text: "An international framework for conserving biodiversity, promoting sustainable use and sharing benefits from genetic resources fairly." },
      { type: 'paragraph', text: "Montreal Protocol" },
      { type: 'paragraph', text: "An international agreement that has helped phase out many ozone-depleting substances." },
      { type: 'paragraph', text: "United Nations Sustainable Development Goals" },
      { type: 'paragraph', text: "A collection of 17 global goals addressing poverty, health, education, clean water, clean energy, sustainable cities, responsible consumption, climate action and environmental protection." },
      { type: 'paragraph', text: "International cooperation must be supported by measurable implementation at national and local levels." },
    ],
  },
  {
    heading: { text: "CHAPTER 20: INDIA'S RESPONSIBILITY IN PROTECTING EARTH", id: "chapter-20-india-s-responsibility-in-protecting-earth" },
    blocks: [
      { type: 'paragraph', text: "India has an important role in global environmental protection." },
      { type: 'paragraph', text: "Its diverse geography includes mountains, forests, rivers, coastal ecosystems, wetlands, agricultural landscapes and deserts." },
      { type: 'paragraph', text: "Environmental challenges in India include:" },
      { type: 'list', ordered: false, items: [
          "Urban air pollution.",
          "Water scarcity.",
          "Groundwater depletion.",
          "River contamination.",
          "Plastic waste.",
          "Deforestation and habitat fragmentation.",
          "Soil degradation.",
          "Agricultural residue burning.",
          "Climate-related heatwaves and extreme rainfall."
      ] },
      { type: 'heading', level: 3, text: "Important opportunities for India", id: "important-opportunities-for-india" },
      { type: 'paragraph', text: "Renewable energy" },
      { type: 'paragraph', text: "Expand appropriate solar, wind, hydropower and other low-emission energy systems." },
      { type: 'paragraph', text: "Agriculture" },
      { type: 'paragraph', text: "Improve irrigation efficiency, soil health and sustainable farming." },
      { type: 'paragraph', text: "Water conservation" },
      { type: 'paragraph', text: "Protect rivers, lakes, ponds and groundwater resources." },
      { type: 'paragraph', text: "Urban development" },
      { type: 'paragraph', text: "Improve public transportation, waste management and energy-efficient buildings." },
      { type: 'paragraph', text: "Biodiversity" },
      { type: 'paragraph', text: "Protect forests, wetlands, mangroves and wildlife habitats." },
      { type: 'paragraph', text: "Circular economy" },
      { type: 'paragraph', text: "Improve recycling, material recovery, repair and product reuse." },
      { type: 'heading', level: 3, text: "Community participation", id: "community-participation" },
      { type: 'paragraph', text: "Indian communities can contribute through:" },
      { type: 'list', ordered: false, items: [
          "Protecting village ponds.",
          "Restoring local water bodies.",
          "Planting and protecting native trees.",
          "Preventing open waste burning.",
          "Separating household waste.",
          "Conserving groundwater.",
          "Supporting sustainable agriculture.",
          "Promoting environmental education."
      ] },
      { type: 'paragraph', text: "India's environmental future depends on cooperation between citizens, farmers, businesses, scientists and governments." },
    ],
  },
  {
    heading: { text: "CHAPTER 21: A PRACTICAL ACTION PLAN FOR EVERY PERSON", id: "chapter-21-a-practical-action-plan-for-every-person" },
    blocks: [
      { type: 'paragraph', text: "Environmental protection should not remain limited to discussions and awareness campaigns." },
      { type: 'paragraph', text: "It must become part of everyday life." },
      { type: 'heading', level: 2, text: "Daily actions", id: "daily-actions" },
      { type: 'list', ordered: false, items: [
          "Switch off unused electrical appliances.",
          "Avoid wasting drinking water.",
          "Carry reusable bags.",
          "Avoid unnecessary plastic.",
          "Separate household waste.",
          "Avoid littering.",
          "Reduce food waste.",
          "Use public transportation when practical."
      ] },
      { type: 'heading', level: 2, text: "Weekly actions", id: "weekly-actions" },
      { type: 'list', ordered: false, items: [
          "Check household water leaks.",
          "Review electricity consumption.",
          "Organise recyclable materials.",
          "Support local environmental activities.",
          "Educate family members about conservation."
      ] },
      { type: 'heading', level: 2, text: "Monthly actions", id: "monthly-actions" },
      { type: 'list', ordered: false, items: [
          "Participate in community clean-up activities.",
          "Support local tree protection.",
          "Monitor household waste generation.",
          "Review opportunities for energy efficiency.",
          "Learn about local environmental issues."
      ] },
      { type: 'heading', level: 2, text: "Annual actions", id: "annual-actions" },
      { type: 'list', ordered: false, items: [
          "Review household energy and water consumption.",
          "Support ecosystem restoration.",
          "Participate in environmental education.",
          "Evaluate sustainable transport options.",
          "Support responsible businesses and conservation programmes."
      ] },
    ],
  },
  {
    heading: { text: "CHAPTER 22: A PRACTICAL ACTION PLAN FOR BUSINESSES", id: "chapter-22-a-practical-action-plan-for-businesses" },
    blocks: [
      { type: 'paragraph', text: "Businesses must integrate environmental responsibility into their operations." },
      { type: 'heading', level: 3, text: "Energy", id: "energy" },
      { type: 'list', ordered: false, items: [
          "Conduct energy audits.",
          "Improve equipment efficiency.",
          "Reduce electricity wastage.",
          "Evaluate renewable-energy opportunities."
      ] },
      { type: 'heading', level: 3, text: "Water", id: "water" },
      { type: 'list', ordered: false, items: [
          "Measure water consumption.",
          "Repair leaks.",
          "Reuse treated wastewater where appropriate.",
          "Prevent contamination."
      ] },
      { type: 'heading', level: 3, text: "Waste", id: "waste" },
      { type: 'list', ordered: false, items: [
          "Reduce production waste.",
          "Segregate materials.",
          "Improve recycling.",
          "Handle hazardous waste responsibly."
      ] },
      { type: 'heading', level: 3, text: "Transportation", id: "transportation" },
      { type: 'list', ordered: false, items: [
          "Optimise logistics.",
          "Reduce unnecessary journeys.",
          "Evaluate cleaner vehicle options."
      ] },
      { type: 'heading', level: 3, text: "Manufacturing", id: "manufacturing" },
      { type: 'list', ordered: false, items: [
          "Improve material efficiency.",
          "Reduce emissions.",
          "Select responsible suppliers.",
          "Design durable products."
      ] },
      { type: 'heading', level: 3, text: "Reporting", id: "reporting" },
      { type: 'paragraph', text: "Businesses should measure relevant environmental indicators and report progress transparently." },
      { type: 'paragraph', text: "Environmental performance should be based on measurable results rather than unsupported claims." },
    ],
  },
  {
    heading: { text: "CHAPTER 23: A 10-YEAR VISION FOR A HEALTHIER PLANET", id: "chapter-23-a-10-year-vision-for-a-healthier-planet" },
    blocks: [
      { type: 'paragraph', text: "Imagine the world ten years from now." },
      { type: 'paragraph', text: "Cities are using energy more efficiently." },
      { type: 'paragraph', text: "Renewable electricity is contributing increasingly to energy supply." },
      { type: 'paragraph', text: "Forests are being protected and restored." },
      { type: 'paragraph', text: "Rivers and lakes are receiving better protection." },
      { type: 'paragraph', text: "Agriculture is using water more responsibly." },
      { type: 'paragraph', text: "Industries are reducing pollution and waste." },
      { type: 'paragraph', text: "Communities are adopting circular-economy practices." },
      { type: 'paragraph', text: "Wildlife habitats are being restored." },
      { type: 'paragraph', text: "Children are learning environmental responsibility from an early age." },
      { type: 'paragraph', text: "These improvements are achievable through sustained action." },
      { type: 'paragraph', text: "However, no single solution can solve every environmental problem." },
      { type: 'paragraph', text: "Renewable energy cannot replace forest conservation." },
      { type: 'paragraph', text: "Tree planting cannot replace pollution control." },
      { type: 'paragraph', text: "Recycling cannot replace waste prevention." },
      { type: 'paragraph', text: "Technology cannot replace responsible consumption." },
      { type: 'paragraph', text: "Every environmental solution must be part of a broader strategy." },
      { type: 'paragraph', text: "The future we want requires scientific knowledge, responsible policies, investment, innovation and collective participation." },
    ],
  },
  {
    heading: { text: "CHAPTER 24: FINAL MESSAGE – THE EARTH IS IN OUR HANDS", id: "chapter-24-final-message-the-earth-is-in-our-hands" },
    blocks: [
      { type: 'paragraph', text: "Earth existed long before humanity." },
      { type: 'paragraph', text: "It has supported countless generations and continues to provide the natural resources on which all life depends." },
      { type: 'paragraph', text: "We are not the owners of this planet." },
      { type: 'paragraph', text: "We are part of its natural systems, and we have a responsibility to protect them." },
      { type: 'paragraph', text: "We cannot solve every environmental problem overnight." },
      { type: 'paragraph', text: "But we can reduce pollution." },
      { type: 'paragraph', text: "We can conserve water." },
      { type: 'paragraph', text: "We can protect forests." },
      { type: 'paragraph', text: "We can preserve biodiversity." },
      { type: 'paragraph', text: "We can use energy responsibly." },
      { type: 'paragraph', text: "We can support renewable energy." },
      { type: 'paragraph', text: "We can reduce unnecessary consumption." },
      { type: 'paragraph', text: "We can protect oceans." },
      { type: 'paragraph', text: "We can improve agriculture." },
      { type: 'paragraph', text: "We can educate children." },
      { type: 'paragraph', text: "We can encourage responsible industries." },
      { type: 'paragraph', text: "We can demand accountability from institutions." },
      { type: 'paragraph', text: "Most importantly, we can change our own behaviour." },
      { type: 'paragraph', text: "The future of Earth is not determined by one decision." },
      { type: 'paragraph', text: "It is shaped by millions of decisions made every day." },
      { type: 'paragraph', text: "Let us choose responsibility over waste." },
      { type: 'paragraph', text: "Let us choose conservation over destruction." },
      { type: 'paragraph', text: "Let us choose sustainability over unnecessary consumption." },
      { type: 'paragraph', text: "Let us choose cooperation over indifference." },
      { type: 'paragraph', text: "Let us build a world where economic development and environmental protection work together." },
      { type: 'paragraph', text: "There is no Planet B." },
      { type: 'paragraph', text: "There is no replacement for our natural ecosystems." },
      { type: 'paragraph', text: "There is no substitute for clean air, safe water and healthy soil." },
      { type: 'paragraph', text: "We have one planet, one shared environment and one common responsibility." },
      { type: 'paragraph', text: "SAVE EARTH." },
      { type: 'paragraph', text: "SAVE WATER." },
      { type: 'paragraph', text: "SAVE TREES." },
      { type: 'paragraph', text: "PROTECT WILDLIFE." },
      { type: 'paragraph', text: "STOP POLLUTION." },
      { type: 'paragraph', text: "REDUCE WASTE." },
      { type: 'paragraph', text: "CHOOSE CLEAN ENERGY." },
      { type: 'paragraph', text: "PROTECT OUR OCEANS." },
      { type: 'paragraph', text: "BUILD A SUSTAINABLE FUTURE." },
      { type: 'heading', level: 3, text: "OUR PLANET. OUR RESPONSIBILITY. OUR FUTURE.", id: "our-planet-our-responsibility-our-future-2" },
      { type: 'paragraph', text: "THE CHANGE BEGINS WITH US." },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "APPENDIX A: 30 IMPORTANT ENVIRONMENTAL ACTIONS", id: "appendix-a-30-important-environmental-actions" },
    blocks: [
      { type: 'list', ordered: true, items: [
          "Protect existing forests.",
          "Plant suitable native trees.",
          "Conserve freshwater.",
          "Protect rivers and lakes.",
          "Reduce single-use plastics.",
          "Improve waste segregation.",
          "Recycle responsibly.",
          "Compost suitable organic waste.",
          "Prevent air pollution.",
          "Reduce fossil-fuel consumption.",
          "Improve energy efficiency.",
          "Adopt suitable renewable-energy systems.",
          "Protect wildlife habitats.",
          "Prevent illegal wildlife trade.",
          "Protect marine ecosystems.",
          "Promote sustainable agriculture.",
          "Improve soil health.",
          "Reduce food waste.",
          "Protect groundwater.",
          "Promote public transportation.",
          "Encourage walking and cycling.",
          "Improve building efficiency.",
          "Support responsible manufacturing.",
          "Recycle electronic waste properly.",
          "Reduce unnecessary consumption.",
          "Support environmental education.",
          "Restore degraded ecosystems.",
          "Improve industrial wastewater treatment.",
          "Encourage environmental research.",
          "Participate in local conservation programmes."
      ] },
    ],
  },
  {
    heading: { text: "APPENDIX B: IMPORTANT ENVIRONMENTAL ORGANISATIONS AND RESOURCES", id: "appendix-b-important-environmental-organisations-and-resources" },
    blocks: [
      { type: 'paragraph', text: "The following organisations provide environmental information, research and opportunities for public participation." },
      { type: 'list', ordered: true, items: [
          "United Nations Environment Programme (UNEP).",
          "World Meteorological Organization (WMO).",
          "Intergovernmental Panel on Climate Change (IPCC).",
          "World Wildlife Fund (WWF).",
          "International Union for Conservation of Nature (IUCN).",
          "United Nations Development Programme (UNDP).",
          "Food and Agriculture Organization (FAO).",
          "International Renewable Energy Agency (IRENA).",
          "Central Pollution Control Board (CPCB), India.",
          "Ministry of Environment, Forest and Climate Change, India.",
          "Ministry of New and Renewable Energy, India.",
          "National Biodiversity Authority, India."
      ] },
      { type: 'rule' },
    ],
  },
  {
    heading: { text: "DOCUMENTARY CLOSING STATEMENT", id: "documentary-closing-statement" },
    blocks: [
      { type: 'paragraph', text: "This documentary is intended to promote environmental awareness, responsible consumption, scientific understanding and collective participation." },
      { type: 'paragraph', text: "Environmental protection is a continuous responsibility. Its success depends on measurable improvements, effective policies, responsible technologies and sustained public participation." },
      { type: 'paragraph', text: "Let every home conserve resources." },
      { type: 'paragraph', text: "Let every school educate future generations." },
      { type: 'paragraph', text: "Let every business operate responsibly." },
      { type: 'paragraph', text: "Let every industry reduce its environmental impact." },
      { type: 'paragraph', text: "Let every government protect natural resources." },
      { type: 'paragraph', text: "Let every individual become part of the solution." },
      { type: 'paragraph', text: "SAVE EARTH – BECAUSE OUR FUTURE DEPENDS ON IT." },
      { type: 'heading', level: 3, text: "Recommended document usage", id: "recommended-document-usage" },
      { type: 'paragraph', text: "This document can serve as:" },
      { type: 'list', ordered: false, items: [
          "An environmental awareness publication.",
          "A school or college educational resource.",
          "A corporate social responsibility (CSR) awareness document.",
          "A public environmental campaign.",
          "A foundation for an environmental awareness programme.",
          "A reference document for AeroSun Energy's environmental initiatives."
      ] },
      { type: 'paragraph', text: "Suggested publication credit:" },
      { type: 'paragraph', text: "Prepared as an environmental awareness initiative by AeroSun Energy Private Limited — Power from Sun and Wind." },
      { type: 'paragraph', text: "The content is educational and should not be treated as a substitute for scientific reports, environmental assessments or government regulations." },
    ],
  },
]

function renderBlocks(blocks: DocumentaryBlock[]) {
  return blocks.map((block, index) => {
    if (block.type === 'heading') {
      if (block.level === 2) {
        return (
          <h3
            key={block.id}
            id={block.id}
            className="mt-9 scroll-mt-28 border-b border-emerald-100 pb-3 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl"
          >
            {block.text}
          </h3>
        )
      }
      return (
        <h4
          key={block.id}
          id={block.id}
          className="mt-7 scroll-mt-28 text-lg font-bold tracking-tight text-emerald-900 sm:text-xl"
        >
          {block.text}
        </h4>
      )
    }

    if (block.type === 'paragraph') {
      return (
        <p key={`paragraph-${index}`} className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {block.text}
        </p>
      )
    }

    if (block.type === 'list') {
      const ListTag = block.ordered ? 'ol' : 'ul'
      return (
        <ListTag
          key={`list-${index}`}
          className={`mt-4 space-y-2.5 pl-6 text-sm leading-7 text-slate-600 marker:font-bold marker:text-emerald-600 sm:text-base sm:leading-8 ${
            block.ordered ? 'list-decimal' : 'list-disc'
          }`}
        >
          {block.items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}`} className="pl-1">
              {item}
            </li>
          ))}
        </ListTag>
      )
    }

    if (block.type === 'table') {
      return (
        <div key={`table-${index}`} className="my-7 overflow-hidden rounded-2xl border border-emerald-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-emerald-100 text-left text-sm">
              <thead className="bg-emerald-50 text-xs font-bold uppercase tracking-wider text-emerald-900">
                <tr>
                  {block.headers.map((header, headerIndex) => (
                    <th key={headerIndex} scope="col" className="px-5 py-4">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white text-slate-600">
                {block.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="transition-colors hover:bg-emerald-50/50">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-5 py-4 align-top leading-6">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    return <hr key={`rule-${index}`} className="my-8 border-slate-200" />
  })
}

export default function SaveEarthPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f1] text-slate-800">
      <header className="relative isolate overflow-hidden bg-[#10251f] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_12%,rgba(16,185,129,0.24),transparent_38%),radial-gradient(ellipse_at_12%_95%,rgba(132,204,22,0.12),transparent_36%)]" />
        <div className="absolute -right-36 top-12 -z-10 h-[30rem] w-[30rem] rounded-full border border-white/10 sm:right-[-8rem]">
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-16 rounded-full border border-white/10" />
          <div className="absolute inset-24 rounded-full border border-white/10" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-emerald-200 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_16px_rgba(190,242,100,0.9)]" />
              Our planet · Our responsibility
            </div>
            <h1 className="mt-8 text-5xl font-black uppercase tracking-[-0.07em] text-white sm:text-7xl lg:text-8xl">
              {documentaryTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-tight text-emerald-100 sm:text-4xl">
              {documentarySubtitle}
            </p>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {documentaryTagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#documentary"
                className="rounded-full bg-lime-300 px-6 py-3 text-sm font-bold text-emerald-950 shadow-lg shadow-lime-950/20 transition hover:bg-lime-200"
              >
                Explore the documentary
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-emerald-200/60 hover:bg-white/5"
              >
                Connect with AeroSun Energy
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[linear-gradient(155deg,#173b31_0%,#0b211b_58%,#152b24_100%)] p-7">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-200">
                  <span>Environmental field notes</span>
                  <span className="h-2 w-2 rounded-full bg-lime-300" />
                </div>
                <div>
                  <div className="text-[clamp(7rem,20vw,11rem)] font-black leading-[0.8] tracking-[-0.1em] text-white/10">
                    01
                  </div>
                  <p className="-mt-5 max-w-[15rem] text-3xl font-extrabold leading-tight tracking-tight text-white">
                    Every action matters.
                  </p>
                </div>
                <div className="flex items-end justify-between border-t border-white/15 pt-5">
                  <span className="max-w-[12rem] text-xs leading-5 text-emerald-100/80">
                    {documentaryTagline}
                  </span>
                  <span aria-hidden="true" className="text-3xl text-lime-300">
                    ↗
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 -z-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap gap-x-8 gap-y-3 px-5 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-100/70 sm:px-8 lg:px-10">
            <span>Climate action</span>
            <span>Living ecosystems</span>
            <span>Responsible choices</span>
            <span>Future generations</span>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 lg:px-10">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav
            aria-label="Document contents"
            className="overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-white shadow-[0_18px_50px_-38px_rgba(15,23,42,0.4)]"
          >
            <div className="border-b border-slate-100 px-5 py-5">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                Navigate the guide
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Contents</p>
            </div>
            <ol className="max-h-[calc(100vh-12rem)] space-y-1 overflow-y-auto p-3">
              {documentarySections.map((section, index) => (
                <li key={section.heading.id}>
                  <a
                    href={`#${section.heading.id}`}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-xs leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900"
                  >
                    <span className="shrink-0 font-mono text-[10px] font-bold text-emerald-600/70 group-hover:text-emerald-700">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{section.heading.text}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-4 hidden px-2 text-xs leading-6 text-slate-500 lg:block">
            A complete documentary script and practical environmental guide.
          </p>
        </aside>

        <article className="min-w-0 space-y-8">
          <section
            id="documentary"
            className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-[linear-gradient(135deg,#10251f_0%,#15372d_100%)] p-6 text-white shadow-[0_24px_70px_-45px_rgba(16,37,31,0.8)] sm:p-9"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-lime-300" />
              <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-lime-200">
                The documentary
              </p>
            </div>
            <div className="max-w-3xl">{renderBlocks(openingContent)}</div>
          </section>

          {documentarySections.map((section, index) => (
            <section
              key={section.heading.id}
              id={section.heading.id}
              className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_65px_-48px_rgba(15,23,42,0.42)]"
            >
              <div
                className={`border-b border-slate-100 px-6 py-7 sm:px-9 sm:py-8 ${
                  index % 2 === 0 ? 'bg-emerald-50/70' : 'bg-[#f3f6ed]'
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-emerald-900/10 bg-white/80 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-emerald-800">
                    Section {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-emerald-900/10" />
                  <span className="font-mono text-xs font-bold text-emerald-900/40">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="max-w-4xl text-2xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-4xl">
                  {section.heading.text}
                </h2>
              </div>
              <div className="px-6 py-7 sm:px-9 sm:py-9">{renderBlocks(section.blocks)}</div>
            </section>
          ))}

          <footer className="rounded-[2rem] border border-emerald-900/10 bg-white p-6 shadow-[0_20px_65px_-48px_rgba(15,23,42,0.42)] sm:p-9">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-emerald-700">
                  Turn awareness into action
                </p>
                <p className="mt-2 max-w-xl text-lg font-bold leading-7 text-slate-900">
                  Explore renewable energy with AeroSun Energy.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
              >
                Get in touch
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </main>
  )
}
