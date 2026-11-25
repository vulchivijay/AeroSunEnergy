import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());

function isConfigured(...names) {
  return names.some((name) => Boolean(process.env[name]?.trim()));
}

function report(label, configured) {
  console.log(`- ${label}: ${configured ? "PRESENT" : "NOT PRESENT"}`);
}

console.log("Production build environment status (values are not printed):");
console.log("Google integrations:");
report(
  "_NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION",
  isConfigured("_NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"),
);
report(
  "Google Analytics measurement ID (_NEXT_PUBLIC_GA_MEASUREMENT_ID or _NEXT_PUBLIC_GA_STREAM_ID)",
  isConfigured(
    "_NEXT_PUBLIC_GA_MEASUREMENT_ID",
    "_NEXT_PUBLIC_GA_STREAM_ID",
  ),
);
report(
  "Google Tag Manager container ID (_NEXT_PUBLIC_GTM_ID)",
  isConfigured("_NEXT_PUBLIC_GTM_ID"),
);
report(
  "Google Ads tag ID (_NEXT_PUBLIC_GOOGLE_ADS_ID)",
  isConfigured("_NEXT_PUBLIC_GOOGLE_ADS_ID"),
);
report("BING_SITE_VERIFICATION", isConfigured("BING_SITE_VERIFICATION"));
console.log("MongoDB application connection:");
for (const name of ["_MONGODB_URI", "_MONGODB_DB"]) {
  report(name, isConfigured(name));
}
console.log(
  "This reports values available during the build (including .env); runtime-only environment variables may not be present here.",
);
console.log("Google tracking scripts still require cookie consent.");
