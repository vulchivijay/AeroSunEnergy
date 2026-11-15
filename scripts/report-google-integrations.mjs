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
report("_GOOGLE_SITE_VERIFICATION", isConfigured("_GOOGLE_SITE_VERIFICATION"));
report(
  "Google Analytics measurement ID (_NEXT_PUBLIC_GA_MEASUREMENT_ID, _NEXT_PUBLIC_GA_STREAM_ID, or GA_MEASUREMENT_ID)",
  isConfigured(
    "_NEXT_PUBLIC_GA_MEASUREMENT_ID",
    "_NEXT_PUBLIC_GA_STREAM_ID",
    "GA_MEASUREMENT_ID",
  ),
);
report(
  "Google Tag Manager container ID (_NEXT_PUBLIC_GTM_ID or GTM_ID)",
  isConfigured("_NEXT_PUBLIC_GTM_ID", "GTM_ID"),
);
report("BING_SITE_VERIFICATION", isConfigured("BING_SITE_VERIFICATION"));
console.log("MongoDB application connection:");
for (const name of ["MONGODB_URI", "MONGODB_DB"]) {
  report(name, isConfigured(name));
}
console.log(
  "This reports values available during the build (including .env); runtime-only environment variables may not be present here.",
);
console.log("Google tracking scripts still require cookie consent.");
