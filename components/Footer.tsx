import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="16" cy="16" r="7" fill="#FBC02D" />
                <g stroke="#FBC02D" strokeWidth="2" strokeLinecap="round">
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="16" y1="26" x2="16" y2="30" />
                  <line x1="2" y1="16" x2="6" y2="16" />
                  <line x1="26" y1="16" x2="30" y2="16" />
                  <line x1="5.86" y1="5.86" x2="8.69" y2="8.69" />
                  <line x1="23.31" y1="23.31" x2="26.14" y2="26.14" />
                  <line x1="26.14" y1="5.86" x2="23.31" y2="8.69" />
                  <line x1="8.69" y1="23.31" x2="5.86" y2="26.14" />
                </g>
              </svg>
              <span className="text-white font-bold text-xl">
                <span className="text-primary">AeroSun</span>{' '}
                <span className="text-secondary">Energy</span>
              </span> */}
              <Image src="/images/logo-horizontal.png" alt="AeroSun Energy logo" width={180} height={60} priority />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Power from Sun &amp; Wind
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Delivering clean, reliable, and affordable renewable energy solutions across India.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              📧 customercare@aerosunenergy.in
            </p>
            <p className="text-gray-500 text-sm mt-1">
              🌐 aerosunenergy.in
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-black font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-900 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-black font-semibold text-lg mb-5">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              {/* Twitter/X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="p-2 rounded-full bg-gray-900 hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-gray-900 hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-gray-900 hover:bg-primary transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            
            {/* QR Code */}
            <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow inline-block">
              <Image 
                src="/images/qr-code.png" 
                alt="AeroSun Energy QR Code" 
                width={100} 
                height={100}
                className="w-20 h-20"
              />
              <p className="text-center text-xs text-gray-600 mt-1 font-semibold">Scan</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <p className="text-center text-gray-500 text-sm">
          Vulchi Vijaya Kumar © 2026 AeroSun Energy. All rights reserved. |{' '}
          <a href="https://aerosunenergy.in" className="hover:text-primary transition-colors">
            aerosunenergy.in
          </a>
        </p>
      </div>
    </footer>
  )
}
