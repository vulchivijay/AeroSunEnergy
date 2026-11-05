import en from '@/public/locales/en/index.json'

export default function JsonLd() {
  const schema = en.componentData.jsonLdSchema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}