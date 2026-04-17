import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Contact AeroSun Energy',
  description:
    'Get in touch with AeroSun Energy for hybrid solar wind energy solutions across India. Request a free quote, discuss your project, or reach us at customercare@aerosunenergy.in.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-24 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-secondary uppercase tracking-widest text-md text-gray-500 dark:text-gray-400">Get In Touch</span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Contact AeroSun Energy
          </h1>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to power your home, business, or infrastructure with clean energy? Reach out and our team will get back to you with a tailored solution.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
            {/* Email */}
            <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm">
              <div className="text-4xl mb-4">📧</div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Email Us</h2>
              <a
                href="mailto:customercare@aerosunenergy.in"
                className="text-primary hover:text-secondary transition-colors break-all"
              >
                customercare@aerosunenergy.in
              </a>
            </div>

            {/* Website */}
            <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm">
              <div className="text-4xl mb-4">🌐</div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Website</h2>
              <a
                href="https://aerosunenergy.in"
                className="text-primary hover:text-secondary transition-colors"
              >
                aerosunenergy.in
              </a>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 shadow-sm">
              <div className="bg-white rounded-xl shadow border border-gray-200 inline-block mb-2">
                <Image
                  src="/images/qr-code.png"
                  alt="AeroSun Energy QR Code"
                  width={120}
                  height={120}
                />
              </div>
              <p className="text-md text-gray-600 dark:text-gray-400 font-semibold">Scan to visit</p>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-12">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Follow Us</h2>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-3 rounded-full bg-gray-900 hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-gray-900 hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-3 rounded-full bg-gray-900 hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12">
            <a
              href="mailto:customercare@aerosunenergy.in"
              className="inline-flex items-center rounded-full bg-slate-950 px-8 py-3.5 text-md font-bold text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-primary dark:bg-accent dark:text-slate-950"
            >
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
