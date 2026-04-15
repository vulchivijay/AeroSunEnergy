'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6 uppercase tracking-wide">
            Take the First Step
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Ready to Power Your Home or Business with Clean Energy?
          </h2>
          <p className="text-white/90 text-lg sm:text-xl mb-4 max-w-2xl mx-auto">
            Join hundreds of homes, businesses, and public projects across India already running on AeroSun&apos;s hybrid solar wind energy systems — saving money and supporting a greener planet.
          </p>
          <p className="text-white/80 text-base mb-10 max-w-xl mx-auto">
            Our experts will assess your site, design a custom system, and walk you through the full installation — completely free of charge at the consultation stage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-block bg-accent text-gray-900 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200"
            >
              Request a Free Quote
            </a>
            <a
              href="#how-it-works"
              className="inline-block border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-white/10 transition-all duration-200"
            >
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
