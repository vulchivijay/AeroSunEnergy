export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://aerosunenergy.in/#organization',
        name: 'AeroSun Energy',
        url: 'https://aerosunenergy.in',
        sameAs: [
          'https://x.com/aerosunenergy',
          'https://www.linkedin.com/company/aerosunenergy',
          'https://www.facebook.com/aerosunenergy',
          'https://www.instagram.com/aerosunenergy',
        ],
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://aerosunenergy.in/#logo',
          url: 'https://aerosunenergy.in/images/logo.png',
          contentUrl: 'https://aerosunenergy.in/images/logo.png',
        },
        image: [
          'https://aerosunenergy.in/images/logo-horizontal.png',
          'https://aerosunenergy.in/images/logo-vertical.png',
        ],
        description:
          'AeroSun Energy is a leading renewable energy company in India providing solar panels, wind turbines (HAWT, VAWT, flower turbines), and hybrid energy systems for homes, businesses, and industries.',
        email: 'info@aerosunenergy.in',
        foundingDate: '2024',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://aerosunenergy.in/#website',
        url: 'https://aerosunenergy.in',
        name: 'AeroSun Energy',
        description: 'Solar & Wind Energy Solutions across India',
        publisher: { '@id': 'https://aerosunenergy.in/#organization' },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://aerosunenergy.in/#webpage',
        url: 'https://aerosunenergy.in',
        name: 'AeroSun Energy | Solar & Wind Energy Solutions in India',
        isPartOf: { '@id': 'https://aerosunenergy.in/#website' },
        about: { '@id': 'https://aerosunenergy.in/#organization' },
        description:
          'Clean, affordable solar and wind energy solutions for homes, businesses, and industries across India. We offer solar panels, 3-blade wind turbines (HAWT), flower turbines, low-wind VAWT, and hybrid systems.',
        inLanguage: 'en-IN',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://aerosunenergy.in/#localbusiness',
        name: 'AeroSun Energy',
        url: 'https://aerosunenergy.in',
        email: 'info@aerosunenergy.in',
        description:
          'Renewable energy company specialising in solar panels and wind turbines across India.',
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Bank Transfer, UPI',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Renewable Energy Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Solar Energy Solutions',
                description:
                  'Residential rooftop and commercial solar farm design, installation, and maintenance.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: '3-Blade Wind Turbines (HAWT)',
                description:
                  'Horizontal-axis wind turbines engineered for high-wind sites and open terrain.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Flower Turbines',
                description:
                  'Vertical-axis flower turbines with helical blades for urban rooftops and low-noise environments.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Low-Wind VAWT (Savonius)',
                description:
                  'Savonius and Darrieus vertical-axis turbines for minimal wind-speed conditions and off-grid sites.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hybrid Energy Systems',
                description:
                  'Integrated solar and wind hybrid systems with smart battery storage and IoT monitoring.',
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
