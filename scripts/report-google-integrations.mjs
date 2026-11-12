function isConfigured(...names) {
  return names.some((name) => Boolean(process.env[name]?.trim()))
}

function report(label, configured) {
  console.log(`- ${label}: ${configured ? 'CONFIGURED' : 'NOT CONFIGURED'}`)
}

console.log('Google integration configuration (build environment):')
report(
  'Google Search Console verification',
  isConfigured('GOOGLE_SITE_VERIFICATION'),
)
report(
  'Google Analytics measurement ID',
  isConfigured('NEXT_PUBLIC_GA_MEASUREMENT_ID', 'GA_MEASUREMENT_ID'),
)
report(
  'Google Tag Manager container ID',
  isConfigured('NEXT_PUBLIC_GTM_ID', 'GTM_ID'),
)
console.log('Configured means an environment variable is present; tracking scripts still require cookie consent.')
