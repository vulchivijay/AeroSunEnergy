import BenefitCard from './ui/BenefitCard';
import FaqCard from './ui/FaqCard';

export default function WeatherPerformance() {
  return (
    <div className="py-6">
      {/* Hero */}
      <section className="bg-linear-to-r from-yellow-500 to-orange-500 text-white rounded-2xl p-8">
        <h1 className="text-4xl font-bold mb-4">
          Solar Performance in Different Weather Conditions
        </h1>

        <p className="text-lg">
          Understand how weather, sunlight, shadows, and maintenance impact
          your solar power generation throughout the year.
        </p>
      </section>

      {/* Weather Performance */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Weather-wise Solar Performance
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BenefitCard
            icon="☀️"
            title="Sunny Days"
            description="Maximum electricity generation. Direct sunlight helps panels produce peak output and achieve the best performance."
          />

          <BenefitCard
            icon="⛅"
            title="Cloudy Weather"
            description="Solar panels continue generating electricity, but production may decrease due to reduced sunlight intensity."
          />

          <BenefitCard
            icon="🌧️"
            title="Rainy Season"
            description="Generation decreases due to frequent cloud cover and rainfall. This is normal and performance improves when sunny weather returns."
          />

          <BenefitCard
            icon="🌡️"
            title="Hot Summer"
            description="More sunlight increases generation, but extremely high panel temperatures can slightly reduce efficiency."
          />
        </div>
      </section>

      {/* Generation Example */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Expected Electricity Generation
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border rounded-xl overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4 text-left">System Size</th>
                <th className="p-4 text-left">Daily Generation</th>
                <th className="p-4 text-left">Monthly Generation</th>
                <th className="p-4 text-left">Annual Generation</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="p-4">1 kW</td>
                <td className="p-4">~4 Units</td>
                <td className="p-4">~120 Units</td>
                <td className="p-4">1400-1500 Units</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">2 kW</td>
                <td className="p-4">~8 Units</td>
                <td className="p-4">~240 Units</td>
                <td className="p-4">2800-3000 Units</td>
              </tr>

              <tr className="border-b">
                <td className="p-4">3 kW</td>
                <td className="p-4">~12 Units</td>
                <td className="p-4">~360 Units</td>
                <td className="p-4">4200-4500 Units</td>
              </tr>

              <tr>
                <td className="p-4">5 kW</td>
                <td className="p-4">~20 Units</td>
                <td className="p-4">~600 Units</td>
                <td className="p-4">7000-7500 Units</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Factors */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Factors Affecting Solar Performance
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-xl p-6">
            <div className="text-4xl mb-4">🌳</div>

            <h3 className="font-semibold text-lg mb-3">
              Shadows
            </h3>

            <p className="text-gray-600">
              Trees, water tanks, nearby buildings, terraces, and antennas can
              block sunlight and reduce electricity production.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <div className="text-4xl mb-4">🧹</div>

            <h3 className="font-semibold text-lg mb-3">
              Dust & Dirt
            </h3>

            <p className="text-gray-600">
              Dust accumulation, bird droppings, and pollution reduce panel
              efficiency. Regular cleaning helps maintain maximum generation.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <div className="text-4xl mb-4">🧭</div>

            <h3 className="font-semibold text-lg mb-3">
              Panel Direction
            </h3>

            <p className="text-gray-600">
              South-facing panels with the correct tilt angle produce better
              yearly energy generation.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="mt-12">
        <div className="bg-green-50 border rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Solar Maintenance Tips
          </h2>

          <ul className="space-y-3">
            <li>
              ✅ Clean solar panels every 2–4 weeks in dusty environments.
            </li>

            <li>
              ✅ Remove leaves, bird droppings, and debris from panel surfaces.
            </li>

            <li>
              ✅ Use only water and a soft cloth or mop for cleaning.
            </li>

            <li>
              ✅ Clean during morning or evening hours.
            </li>

            <li>
              ✅ Ensure there are no new shadows created by growing trees or
              nearby structures.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <FaqCard
            question="Will solar panels work during rainy weather?"
            answer="Yes. Solar panels continue to generate electricity during rain, but power generation will be lower due to reduced sunlight."
          />

          <FaqCard
            question="Do solar panels work on cloudy days?"
            answer="Yes. Panels can still generate electricity from diffused sunlight, although output will be lower."
          />

          <FaqCard
            question="Why is generation lower during monsoon?"
            answer="Cloud cover reduces the intensity of sunlight reaching the panels, resulting in lower energy production."
          />

          <FaqCard
            question="Do solar panels need direct sunlight?"
            answer="Direct sunlight provides maximum output, but solar panels can generate power from indirect sunlight as well."
          />

          <FaqCard
            question="How long do solar panels last?"
            answer="Most modern solar panels are designed to operate efficiently for 25 years or more."
          />
        </div>
      </section>

      {/* Summary */}
      <section className="mt-12">
        <div className="bg-blue-50 border rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Key Takeaway
          </h2>

          <p className="text-lg text-gray-700">
            Solar performance varies with weather, but thoughtful system design and regular maintenance help maintain strong long-term energy generation.
          </p>
        </div>
      </section>
    </div>
  );
}
