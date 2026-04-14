export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
          Ready to switch to clean energy?
        </h2>
        <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Join thousands of homes and businesses across India that are saving money and the planet with AeroSun Energy. Get a free consultation today.
        </p>
        <a
          href="#contact"
          className="inline-block bg-accent text-gray-900 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-200"
        >
          Request a Quote
        </a>
      </div>
    </section>
  )
}
