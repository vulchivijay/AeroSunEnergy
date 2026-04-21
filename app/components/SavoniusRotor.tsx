'use client';

import Image from 'next/image';

export default function SavoniusRotor() {
  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-slate-50 to-white">

      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Savonius Rotor
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          The most practical “circle wind roller” for low-wind environments
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/images/savonius-rotor.png" // place your image in public/images
            alt="Savonius wind rotor"
            fill
            className="object-contain rounded-md shadow-md"
          />
        </div>

        {/* Description */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            How it works
          </h3>

          <p className="text-gray-600 mb-4">
            A Savonius rotor is a vertical-axis wind turbine that uses drag force.
            Its S-shaped blades capture wind from any direction, making it ideal
            for rooftops and urban environments.
          </p>

          {/* Key Points */}
          <ul className="space-y-3 text-gray-700">
            <li>✔ Works in low wind speeds (3–5 m/s)</li>
            <li>✔ Omni-directional (no alignment needed)</li>
            <li>✔ Simple, durable, and low maintenance</li>
            <li>✔ Ideal for hybrid solar + wind systems</li>
          </ul>
        </div>
      </div>

      {/* Specs Section */}
      <div className="max-w-5xl mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="p-5 rounded-xl bg-white shadow">
          <p className="text-gray-500 text-sm">Efficiency</p>
          <p className="text-xl font-semibold text-gray-800">15–25%</p>
        </div>

        <div className="p-5 rounded-xl bg-white shadow">
          <p className="text-gray-500 text-sm">Wind Range</p>
          <p className="text-xl font-semibold text-gray-800">3–8 m/s</p>
        </div>

        <div className="p-5 rounded-xl bg-white shadow">
          <p className="text-gray-500 text-sm">Output</p>
          <p className="text-xl font-semibold text-gray-800">50–300W</p>
        </div>

        <div className="p-5 rounded-xl bg-white shadow">
          <p className="text-gray-500 text-sm">Noise</p>
          <p className="text-xl font-semibold text-gray-800">Very Low</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
          Explore Hybrid Solution
        </button>
      </div>
    </section>
  );
}