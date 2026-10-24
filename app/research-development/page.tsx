import type { Metadata } from 'next'
import ResearchDevelopmentPage from '@/app/components/pages/ResearchDevelopmentPage'

export const metadata: Metadata = {
  title: 'మార్వాడీ వ్యాపార పద్ధతులు | AeroSun Energy',
  description:
    'AeroSun Energy కోసం మార్వాడీ వ్యాపార పద్ధతులు, పెట్టుబడి, నగదు ప్రవాహం, సరఫరాదారులు, profitability, 90-day plan, and realistic operating roadmap.',
  robots: {
    index: false,
    follow: false,
  },
}

const highlights = [
  { title: 'తక్కువ పెట్టుబడి', text: 'ముందుగా పెద్ద స్టాక్ కాదని, డిమాండ్ నిర్ధారించి తర్వాత వనరులు సేకరించండి.' },
  { title: 'నగదు ప్రవాహం', text: 'లాభం అనేది ఒక పక్క, నిజమైన cash flow అంటే వ్యాపార జాడ ఉంది.' },
  { title: 'సరఫరాదారులు', text: 'చిన్న ఆర్డర్లు, బలమైన సంబంధాలు, నాణ్యత, వారంటీ, సేవ.' },
  { title: 'వ్యవస్థాపన', text: 'ప్రతి ప్రాజెక్ట్ తర్వాత లాభం, బాకీలు, స్టాక్, ఖర్చులు అన్నీ గుర్తించండి.' },
]

const budgetRows = [
  ['ప్రారంభ మార్కెటింగ్', '₹20,000'],
  ['టూల్స్, కొలత పరికరాలు', '₹30,000'],
  ['సైట్ సర్వేలు, ప్రయాణాలు', '₹15,000'],
  ['నమూనా మానిటరింగ్ పరికరాలు', '₹25,000'],
  ['వర్కింగ్ క్యాపిటల్', '₹60,000'],
  ['అత్యవసర నగదు నిల్వ', '₹50,000'],
  ['మొత్తం', '₹2,00,000'],
]

const principles = [
  'తక్కువ పెట్టుబడితో ప్రారంభించండి — డిమాండ్ నిర్ధారణ లేకుండా భారీ స్టాక్ కొనకండి.',
  'నగదు ప్రవాహాన్ని నియంత్రించండి — అమ్మకాలు మాత్రమే కాదు, వసూలు కూడా పర్యవేక్షించండి.',
  'సరఫరాదారులతో బలమైన సంబంధాలు ఏర్పరచుకోండి — ధరతో పాటు నాణ్యత, వారంటీ, సేవను కూడా పోల్చండి.',
  'ప్రతి ప్రాజెక్ట్ లాభాన్ని లెక్కించండి — ఆదాయం = లాభం కాదు.',
  'కస్టమర్ నమ్మకాన్ని సంపాదించండి — వాస్తవిక అంచనాలు, పారదర్శక ధరలు ఇవ్వండి.',
  'నెట్‌వర్క్‌ను నిర్మించండి — ఎలక్ట్రికల్ కాంట్రాక్టర్లు, బిల్డర్లు, కస్టమర్లతో సంబంధాలు పెంచండి.',
  'క్రెడిట్‌ను నియంత్రించండి — ఆలస్య బాకీలను పెంచకండి.',
  'దశలవారీగా విస్తరించండి — కొత్త ఉత్పత్తులు, ఉద్యోగులు, గోదాములు ముందుగా కాకుండా డేటా ఆధారంగా.',
]

const cashFlowSteps = [
  ['ఆర్డర్ నిర్ధారణ', '40%'],
  ['పరికరాల సమీకరణ, సైట్ సిద్ధం', '40%'],
  ['ఇన్‌స్టాలేషన్, అంగీకరించిన పరీక్షలు', '20%'],
]

const distributionModels = [
  {
    title: 'రిటైల్ విక్రయం',
    text: 'నేరుగా తుది కస్టమర్‌కు పరికరాలు లేదా సిస్టమ్‌ను అమ్మడం. ఒక్కో అమ్మకం మీద మార్జిన్ ఉన్నప్పటికీ, కస్టమర్ నమ్మకం చాలా ముఖ్యమైనది.',
    tone: 'from-emerald-500 to-lime-500',
  },
  {
    title: 'హోల్‌సేల్',
    text: 'ఇతర ఇన్‌స్టాలర్లకు, డీలర్లకు, కాంట్రాక్టర్లకు పెద్ద పరిమాణంలో సరఫరా. పరిమాణం ఎక్కువ కానీ క్రెడిట్, స్టాక్, వసూళ్ల నియంత్రణ కీలకం.',
    tone: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'EPC ప్రాజెక్టులు',
    text: 'డిజైన్, procuring, ఇన్‌స్టాలేషన్, పరీక్షలు, కమిషనింగ్ వంటి పనులను సమన్వయం చేయడం. పెద్ద ఆదాయం, కానీ నిర్వహణ మరియు రిస్క్ ఎక్కువ.',
    tone: 'from-violet-500 to-fuchsia-500',
  },
]

const plans90 = [
  {
    phase: 'మొదటి 30 రోజులు',
    title: 'మార్కెట్‌ను అర్థం చేసుకోవడం',
    tasks: [
      'తిరుపతి పరిసరాల్లో 20 మంది సంభావ్య కస్టమర్లతో మాట్లాడండి.',
      'కనీసం ఐదు మంది సరఫరాదారుల ధరలు మరియు వారంటీలు పరిశీలించండి.',
      'స్థానిక పోటీదారుల కోటేషన్లను పోల్చండి.',
      'సైట్ సర్వే ఫారం మరియు ప్రామాణిక కోటేషన్ నమూనా రూపొందించండి.',
    ],
  },
  {
    phase: '31–60 రోజులు',
    title: 'మొదటి కస్టమర్లను సంపాదించడం',
    tasks: [
      'స్థానిక ఎలక్ట్రికల్ కాంట్రాక్టర్లతో సంబంధాలు ఏర్పరచుకోండి.',
      'అర్హతగల కస్టమర్లకు సైట్ సర్వేలు చేయండి.',
      'వాస్తవ ఖర్చుల ఆధారంగా కోటేషన్లు ఇవ్వండి.',
      'అవసరమైన అనుమతులు, అర్హతలు నిర్ధారించండి మరియు మొదటి ప్రాజెక్టులను ప్రారంభించండి.',
    ],
  },
  {
    phase: '61–90 రోజులు',
    title: 'వ్యవస్థను మెరుగుపరచడం',
    tasks: [
      'పూర్తయిన ప్రాజెక్టుల ఖర్చులను విశ్లేషించండి.',
      'కస్టమర్ల నుంచి అభిప్రాయాలు సేకరించండి.',
      'వారంటీ, సర్వీస్ ప్రక్రియను పరీక్షించండి.',
      'నగదు ప్రవాహం, పెట్టుబడి, మరియు తదుపరి మూడు నెలల అనుగుణ్యతను లెక్కించండి.',
    ],
  },
]

const summaryCards = [
  ['సోలార్ విక్రయాలు', 'రిటైల్ + ఇన్‌స్టాలేషన్ మొదటి వృద్ధి మార్గం'],
  ['సాంకేతిక అభివృద్ధి', 'స్మార్ట్ మానిటరింగ్, CT మీటర్లు, హైబ్రిడ్ పరీక్షలు'],
  ['భవిష్యత్ విస్తరణ', 'డేటా నిరూపితమైన తర్వాత సొంత టర్బైన్ లేదా కొత్త ఉత్పత్తులు'],
]

const riskRows = [
  ['ధరల పోటీ', 'నాణ్యత, సేవ, మొత్తం ఖర్చు ఆధారంగా పోటీ చేయండి.'],
  ['సరఫరా ఆలస్యం', 'ప్రత్యామ్నాయ సరఫరాదారులు, ముందుగానే ఆర్డర్లు చేయండి.'],
  ['కస్టమర్ బాకీలు', 'దశలవారీ చెల్లింపులు, రాతపూర్వక ఒప్పందం.'],
  ['నాణ్యత సమస్యలు', 'అర్హత కలిగిన పరికరాలు, వారంటీ, పరీక్షలు.'],
  ['నగదు కొరత', 'వారపు cash flow అంచనా, అత్యవసర రిజర్వ్.'],
  ['అధిక విస్తరణ', 'డిమాండ్ నిర్ధారణకు ముందే ఉద్యోగులు, స్టాక్ పెంచకండి.'],
]

const customerTiers = [
  ['Essential', 'ప్రాథమిక సోలార్ సిస్టమ్', 'ప్రారంభ పెట్టుబడిని పరిమితం చేయాలనుకునే వారికి'],
  ['Smart', 'సోలార్ + మానిటరింగ్', 'వినియోగాన్ని తెలుసుకోవాలనుకునే వారికి'],
  ['Backup', 'హైబ్రిడ్ + బ్యాటరీ', 'విద్యుత్ అంతరాయాల్లో బ్యాకప్ కావాలనే వారికి'],
]

const networkCards = [
  ['Supplier Network', 'సోలార్ ప్యానెల్స్, ఇన్వర్టర్లు, బ్యాటరీలు, కేబుల్స్, మౌంటింగ్ స్ట్రక్చర్లు'],
  ['Technical Network', 'ఎలక్ట్రికల్ ఇంజినీర్లు, ఇన్‌స్టాలేషన్ టెక్నీషియన్లు, సిస్టమ్ డిజైనర్లు'],
  ['Sales Network', 'బిల్డర్లు, ఎలక్ట్రికల్ కాంట్రాక్టర్లు, ఆర్కిటెక్టులు, స్థానిక వ్యాపార సంస్థలు'],
  ['Customer Network', 'ఇప్పటికే సోలార్ అమర్చుకున్న కస్టమర్లు, వారి పరిచయాలు, అపార్ట్‌మెంట్ అసోసియేషన్లు'],
  ['Finance Network', 'బ్యాంకులు, అకౌంటెంట్లు, కంపెనీ సెక్రటరీలు, చార్టర్డ్ అకౌంటెంట్లు, ఇన్వెస్టర్లు'],
]

const creditCards = [
  ['కొత్త కస్టమర్', 'ఆద్యం లేదా ముందుగా అంగీకరించిన మైలురాయి చెల్లింపులు'],
  ['చెల్లింపు చరిత్ర ఉన్న కస్టమర్', 'పరిమిత క్రెడిట్, రాతపూర్వక గడువు'],
  ['ఆలస్యంగా చెల్లించే కస్టమర్', 'కొత్త క్రెడిట్‌ను పరిమితం చేయడం లేదా నిలిపివేయడం'],
]

const opsCards = [
  ['Sales & Marketing', 'కస్టమర్ లీడ్స్, సైట్ సర్వేలు, కోటేషన్లు'],
  ['Procurement', 'సరఫరాదారుల ధరలు, కొనుగోలు ఆర్డర్లు'],
  ['Technical Ops', 'డిజైన్ సమీక్ష, ఇన్‌స్టాలేషన్ నాణ్యత'],
  ['Finance', 'చెల్లింపులు, ఇన్‌వాయిసులు, బాకీలు, బడ్జెట్'],
  ['Customer Support', 'ఫిర్యాదులు, వారంటీ, నిర్వహణ'],
]

const expansionCards = [
  ['దశ 1', 'సోలార్ విక్రయాలు, ఇన్‌స్టాలేషన్'],
  ['దశ 2', 'మానిటరింగ్, నిర్వహణ, సర్వీస్'],
  ['దశ 3', 'హైబ్రిడ్ సిస్టమ్స్'],
  ['దశ 4', 'సొంత సాంకేతిక ఉత్పత్తులు'],
]

const reportingCards = [
  ['రోజువారీ', 'లీడ్స్, ఫోన్, సైట్ సర్వేలు, కోటేషన్లు, చెల్లింపులు, బాకీలు, సరఫరాదారుల క్రమబద్ధీకరణ.'],
  ['వారపు', 'నూతన లీడ్స్, వసూలు, బాకీల పరిశీలన, డెలివరీ సమయం, కస్టమర్ ఫిర్యాదులు.'],
  ['నెలవారీ', 'లాభనష్టాల నివేదిక, cash flow, బాకీల నివేదిక, ప్రాజెక్ట్ పనితీరు, పెట్టుబడి నిర్ణయాలు.'],
]

const supplierOptions = [
  { name: 'సరఫరాదారు A', total: '₹2,02,000', text: 'ఉత్పత్తి మంచి, కానీ డెలివరీ, సేవ, వారంటీ స్థాయి చూసుకోవాలి.' },
  { name: 'సరఫరాదారు B', total: '₹1,98,000', text: 'తక్కువ మొత్తం, కానీ నాణ్యత, సేవ మరియు డెలివరీ సమయం సరిపోలేదా చూడాలి.' },
]

const profitabilityMetrics = [
  { label: 'కస్టమర్ ఆదాయం', value: '₹1,80,000' },
  { label: 'ప్రత్యక్ష ఖర్చులు', value: '₹1,35,000' },
  { label: 'స్థూల కాంట్రిబ్యూషన్', value: '₹45,000' },
  { label: 'చివరి నికర లాభం', value: 'చివరి ఖర్చులు తర్వాత' },
]

const exampleMetrics = [
  { label: 'మొత్తం ఆదాయం', value: '₹6,00,000' },
  { label: 'ప్రత్యక్ష ఖర్చులు', value: '₹5,00,000' },
  { label: 'స్థూల కాంట్రిబ్యూషన్', value: '₹1,00,000' },
  { label: 'నెలవారీ నిర్వహణ', value: '₹30,000' },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.15),_transparent_22%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mb-8 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700 shadow-sm">
            AeroSun Energy Strategy
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                మార్వాడీ వ్యాపార పద్ధతులు:
                <br />
                <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-violet-600 bg-clip-text text-transparent">
                  పెట్టుబడి నుంచి లాభాల వరకు
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                మీరు అడిగినది కేవలం మార్వాడీలు వ్యాపారం ఎలా చేస్తారనే విషయం మాత్రమే కాదు. వారి వ్యాపార పద్ధతుల్లో
                ఉపయోగకరమైన సూత్రాలను అర్థం చేసుకుని, వాటిని AeroSun Energy Private Limited అభివృద్ధికి ఎలా
                ఉపయోగించుకోవాలో తెలుసుకోవాలనుకుంటున్నారు.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['తక్కువ పెట్టుబడి', 'నగదు ప్రవాహం', 'సరఫరాదారులు', 'కస్టమర్ అవసరం', '90 రోజులు'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-slate-700 shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_35px_80px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.26em] text-slate-500">Critical Reminder</p>
              <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm leading-7 text-slate-700">
                  <span className="font-black text-emerald-700">ముఖ్యమైన సూత్రం:</span> అమ్మకాలు పెంచడం మాత్రమే లక్ష్యం కాదు. ప్రతి
                  అమ్మకం తర్వాత డబ్బు వసూలు కావాలి, అన్ని ఖర్చులు లెక్కించాలి, కస్టమర్‌కు విలువ అందించాలి, తదుపరి ప్రాజెక్ట్
                  నిర్వహించడానికి కంపెనీ వద్ద తగిన వనరులు ఉండాలి.
                </p>
              </div>
              <div className="mt-5 space-y-3">
                {['డిమాండ్ ముందుగా', 'లాభం గణన కావాలి', 'నగదు 관리 ముఖ్యం', 'విస్తరణ డేటాతో'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-xs font-black text-white">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Principle</p>
              <h2 className="mt-3 text-xl font-black text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700">1. తక్కువ పెట్టుబడితో ప్రారంభించడం</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">ప్రారంభంలో పెద్ద పెట్టుబడి కాదు, డిమాండ్ ముందుగా</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-black text-emerald-700">AeroSun ఉదాహరణ</h3>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">
              <p>
                మీరు సోలార్ ప్యానెల్స్, ఇన్వర్టర్లు, మౌంటింగ్ స్ట్రక్చర్లు మరియు ఇన్‌స్టాలేషన్ సేవలు అందించాలని అనుకుంటే,
                ముందుగా భారీ స్టాక్ కొనుగోలు చేయడం కంటే కస్టమర్ డిమాండ్‌ను నిర్ధారించడం చాలా మేధావి పద్ధతి.
              </p>
              <p>
                1. కస్టమర్‌ను సంప్రదించడం<br />
                2. విద్యుత్ బిల్లులు, వినియోగం, రూఫ్ వివరాలు సేకరించడం<br />
                3. సైట్ సర్వే చేయడం<br />
                4. సరైన సిస్టమ్‌ను డిజైన్ చేయడం<br />
                5. లిఖితపూర్వక కోట్ ఇవ్వడం<br />
                6. అడ్వాన్స్ తీసుకోవడం<br />
                7. సరఫరాదారుల నుంచి సరుకను కొనుగోలు చేయడం
              </p>
              <p>
                ఈ విధానం స్టాక్ కోసం ముందుగానే పెద్ద మొత్తాన్ని ఖర్చు చేయాల్సిన అవసరాన్ని తగ్గిస్తుంది. అయితే కస్టమర్ అడ్వాన్స్,
                మొత్తం ప్రాజెక్ట్ ఖర్చును కవర్ చేస్తుందని అనుకోకూడదు; ఆర్డర్ తీసుకునే ముందు మీ వద్ద ఎంత నగదు అవసరమవుతుందో
                లెక్కించాలి.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">ప్రారంభ పెట్టుబడి ఉదాహరణ</p>
            <div className="mt-5 space-y-3">
              {budgetRows.map(([label, value]) => (
                <div
                  key={label}
                  className={`flex items-center justify-between gap-4 rounded-2xl border px-3 py-2.5 ${
                    label === 'మొత్తం'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  <span className="text-sm font-medium">{label}</span>
                  <span className="text-sm font-black">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-700">2. నగదు ప్రవాహం (Cash Flow)</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">లాభం మరియు నగదు రెండూ వేర్వేరు</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50 p-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-700">వర్కింగ్ క్యాపిటల్ సూత్రం</p>
            <div className="mt-5 rounded-3xl border border-cyan-100 bg-white p-4">
              <p className="text-sm leading-7 text-slate-700">స్టాక్ + కస్టమర్ల నుంచి రావాల్సిన డబ్బు − సరఫరాదారులకు చెల్లించాల్సిన బాకీలు</p>
              <p className="mt-3 text-2xl font-black text-slate-900">₹1,00,000 + ₹80,000 − ₹50,000 = ₹1,30,000</p>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-700">
              అంటే, ప్రాజెక్ట్ లాభం కనిపించినా కస్టమర్ చెల్లింపు ఆలస్యమైతే, మీరు రోజువారీ ఖర్చులు, సరఫరాదారులు, ఉద్యోగులు,
              వాహనాలు, సర్వీస్ ఖర్చులు అన్నిటినీ ఇప్పుడు భరించలేరు. అందుకే నగదు ప్రవాహాన్ని పర్యవేక్షించడం అత్యంత కీలకం.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">చెల్లింపు షెడ్యూల్ ఉదాహరణ</p>
            <div className="mt-5 space-y-3">
              {cashFlowSteps.map(([step, value]) => (
                <div key={step} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <span className="text-sm font-medium text-slate-700">{step}</span>
                  <span className="text-sm font-black text-slate-900">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-amber-700">జాగ్రత్త</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                ప్రతి ఇన్వాయిస్‌కు చెల్లింపు గడువు, బాకీల జాబితా, రాతపూర్వక ఒప్పందం, మరియు అత్యవసర నగదు నిల్వ ఉండాలి.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-700">3. సరఫరాదారులతో సంబంధాలు, కొనుగోలు ధరలు</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">ఒక్క సరఫరాదారుపై ఆధారపడకండి</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {supplierOptions.map((supplier) => (
            <div key={supplier.name} className="rounded-[1.8rem] border border-violet-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl font-black text-slate-900">{supplier.name}</p>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-violet-700">
                  Total
                </span>
              </div>
              <p className="mt-4 text-3xl font-black text-violet-700">{supplier.total}</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{supplier.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-violet-100 bg-violet-50 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-violet-700">సరఫరాదారుతో చర్చించేటప్పుడు</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
            <li>• త్రైమాసిక కొనుగోళ్ల అంచనాను చెప్పండి.</li>
            <li>• మొదటి ఆర్డర్ చిన్నదిగా ఉంచండి; తదుపరి ఆర్డర్లకు తగ్గింపు గురించి చర్చించండి.</li>
            <li>• డెలివరీ సమయం, రీప్లేస్‌మెంట్ బాధ్యతలను లిఖితపూర్వకంగా పొందండి.</li>
            <li>• మీకు అవసరం లేని స్టాక్‌ను బలవంతంగా కొనుగోలు చేయకండి.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-amber-700">5. లాభాల లెక్కలు, తిరిగి పెట్టుబడి</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">ఆదాయం = లాభం కాదు; ప్రాజెక్ట్ కాంట్రిబ్యూషన్ తెలుసుకోవాలి</h2>
        </div>

        <div className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6">
          <p className="text-base leading-8 text-slate-700">
            ఒక 3 kW సోలార్ ప్రాజెక్ట్‌ను ₹1,80,000కు విక్రయించారని అనుకుందాం. ప్రత్యక్ష ఖర్చులు ₹1,35,000 అయితే,
            <span className="font-black text-slate-900"> ప్రాజెక్ట్ స్థూల కాంట్రిబ్యూషన్ ₹45,000</span>. కానీ ఇది చివరి నికర లాభం కాదు.
            కంపెనీ ఓవర్‌హెడ్స్, అమ్మకాల ఖర్చులు, వారంటీ రిజర్వ్, వడ్డీ, పన్నులు మొదలైనవి ఇంకా తీసివేయాలి.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {profitabilityMetrics.map(({ label, value }) => (
              <div key={label} className="rounded-2xl border border-amber-200 bg-white p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-700">{label}</p>
                <p className="mt-2 text-xl font-black text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700">13. AeroSun కోసం పూర్తి వ్యాపార ఉదాహరణ</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">నెలవారీ సదుపాయాలు, లాభాలు మరియు నగదు అవసరాలు</h2>
        </div>

        <div className="rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm">
          <p className="text-base leading-8 text-slate-700">
            అనుకుందాం, AeroSun ఒక నెలలో నాలుగు ప్రాజెక్టులు పూర్తి చేసింది. సగటు అమ్మకపు ధర ₹1,50,000; నాలుగు ప్రాజెక్టుల మొత్తం
            ₹6,00,000. ప్రత్యక్ష ఖర్చులు ₹5,00,000 అయితే, స్థూల కాంట్రిబ్యూషన్ ₹1,00,000. నెలవారీ నిర్వహణ ఖర్చులు ₹30,000 అయితే,
            <span className="font-black text-slate-900"> మిగిలిన మిగులు ₹70,000.</span>
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {exampleMetrics.map(({ label, value }) => (
              <div key={label} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">{label}</p>
                <p className="mt-2 text-xl font-black text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-violet-700">14. మొదటి 90 రోజుల కార్యాచరణ ప్రణాళిక</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">స్వల్ప కాలంలో డేటా సేకరించడానికి బాగా రూపొందించిన ప్రణాళిక</h2>
        </div>

        <div className="space-y-5">
          {plans90.map((plan) => (
            <div key={plan.phase} className="rounded-[1.8rem] border border-violet-200 bg-white p-5 shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-violet-700">
                  {plan.phase}
                </span>
                <p className="text-xl font-black text-slate-900">{plan.title}</p>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                {plan.tasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-600">15. మార్వాడీ వ్యాపార పద్ధతుల నుంచి ప్రధాన సూత్రాలు</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">12 ముఖ్య సూత్రాలు</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((principle, index) => (
            <div key={principle} className="flex gap-3 rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm font-black text-white">
                {index + 1}
              </div>
              <p className="text-sm leading-7 text-slate-700">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2.2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.45)]">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-emerald-700">16. AeroSun Energy కోసం తుది సూచన</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900">మూడు సమాంతర మార్గాలు</h2>

          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {summaryCards.map(([title, text]) => (
              <div key={title} className="rounded-[1.6rem] border border-white/60 bg-white/80 p-4 backdrop-blur-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">{title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-700">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-lg leading-9 text-slate-800">
            అతి ముఖ్యమైన విషయం: వ్యాపారంలో అమ్మకాలు పెంచడం మాత్రమే లక్ష్యం కాదు. ప్రతి అమ్మకం తర్వాత డబ్బు వసూలు కావాలి,
            అన్ని ఖర్చులు లెక్కించాలి, కస్టమర్‌కు విలువ అందించాలి, తదుపరి ప్రాజెక్ట్ నిర్వహించడానికి కంపెనీ వద్ద తగిన వనరులు
            ఉండాలి. ఇదే సూత్రం AeroSun Energy యొక్క వాస్తవిక, స్థిరమైన వృద్ధికి ఆధారం.
          </p>
        </div>
      </section>

      <ResearchDevelopmentPage />
    </main>
  )
}
