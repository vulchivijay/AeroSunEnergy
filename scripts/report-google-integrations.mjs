import nextEnv from "@next/env";

nextEnv.loadEnvConfig(process.cwd());

function isConfigured(...names) {
  return names.some((name) => Boolean(process.env[name]?.trim()));
}

function report(label, configured) {
  console.log(`- ${label}: ${configured ? "PRESENT" : "NOT PRESENT"}`);
}

console.log("Build environment variable status (values are not printed):");
for (const name of [
  "_NEXT_PUBLIC_GTM_ID",
  "_NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID",
  "_NEXT_PUBLIC_GOOGLE_TAG_MANAGER_AUTH",
  "_NEXT_PUBLIC_GOOGLE_ADS_ID",
  "_NEXT_PUBLIC_GOOGLE_ANALYTICS_ID",
  "_NEXT_PUBLIC_GA_MEASUREMENT_ID",
  "_NEXT_PUBLIC_GA_STREAM_ID",
  "_NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION",
  "BING_SITE_VERIFICATION",
  "GOOGLE_CUSTOM_SEARCH_API_KEY",
  "GOOGLE_CUSTOM_SEARCH_CX",
  "_MONGODB_URI",
  "_MONGODB_DB",
]) {
  report(name, isConfigured(name));
}
console.log(
  "This reports values available during the build (including .env); runtime-only environment variables may not be present here.",
);
console.log("Google tracking scripts still require cookie consent.");
