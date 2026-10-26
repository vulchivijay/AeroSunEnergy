export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://aerosunenergy.in/#organization',
        name: 'AeroSun Energy',
        url: 'https://aerosunenergy.in',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://aerosunenergy.in/#logo',
          url: 'https://aerosunenergy.in/images/logo.png',
          contentUrl: 'https://aerosunenergy.in/images/logo.png',
          width: 512,
          height: 512,
        },
        image: 'https://aerosunenergy.in/images/logo.png',
        description:
          'AeroSun Energy provides solar, wind, and hybrid renewable energy systems for residential, commercial, industrial, agricultural, and infrastructure projects across India.',
        email: 'customercare@aerosunenergy.in',
        telephone: '+91-XXXXXXXXXX',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        sameAs: [
          'https://aerosunenergy.in',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://aerosunenergy.in/#website',
        url: 'https://aerosunenergy.in',
        name: 'AeroSun Energy',
        description:
          'Solar, wind and hybrid renewable energy solutions for homes, businesses and industries in India.',
        inLanguage: 'en-IN',
        publisher: { '@id': 'https://aerosunenergy.in/#organization' },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://aerosunenergy.in/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://aerosunenergy.in/#webpage',
        url: 'https://aerosunenergy.in',
        name: 'AeroSun Energy | Solar, Wind & Hybrid Energy Solutions in India',
        isPartOf: { '@id': 'https://aerosunenergy.in/#website' },
        about: { '@id': 'https://aerosunenergy.in/#organization' },
        description:
          'AeroSun Energy offers solar panels, wind turbines, hybrid systems, and energy infrastructure solutions across India for homes, businesses, and larger projects.',
        inLanguage: 'en-IN',
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://aerosunenergy.in/#localbusiness',
        name: 'AeroSun Energy',
        url: 'https://aerosunenergy.in',
        image: 'https://aerosunenergy.in/images/logo.png',
        logo: 'https://aerosunenergy.in/images/logo.png',
        description:
          'Renewable energy company specializing in solar energy systems, wind turbines, and hybrid energy solutions across India.',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        priceRange: '₹₹',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
        },
        telephone: '+91-XXXXXXXXXX',
        email: 'customercare@aerosunenergy.in',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Renewable Energy Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Solar Energy Solutions',
                description: 'Rooftop solar, commercial solar, and sustainable energy system design and installation.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Wind Energy Solutions',
                description: 'Wind turbine systems for sites requiring efficient renewable power generation.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hybrid Energy Systems',
                description: 'Integrated solar and wind hybrid power systems with smart monitoring and storage support.',
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