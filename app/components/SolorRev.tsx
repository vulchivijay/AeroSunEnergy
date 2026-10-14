function FeatureItem({ text }: { text: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700 shadow-sm">
      {text}
    </div>
  )
}

<section className="mt-12">
  <h2 className="text-2xl font-bold mb-6">
    What You Receive
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    <FeatureItem text="High Efficiency Solar Panels" />
    <FeatureItem text="Grid-Tied Solar Inverter" />
    <FeatureItem text="Weather Resistant Mounting Structure" />
    <FeatureItem text="Net Meter Support" />
    <FeatureItem text="Earthing & Safety Protection" />
    <FeatureItem text="Installation & Commissioning" />
    <FeatureItem text="Warranty Documentation" />
    <FeatureItem text="After Sales Support" />
  </div>
</section>