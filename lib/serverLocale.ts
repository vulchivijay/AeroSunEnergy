import { cookies } from "next/headers";
import en from "@/public/locales/en/index.json";
import { mergeLocaleData } from "@/lib/localeData";

type Locale = "en" | "hi" | "te" | "ta" | "kn" | "ml";

const localeLoaders: Record<Exclude<Locale, "en">, () => Promise<unknown>> = {
  hi: () => import("@/public/locales/hi/index.json").then((module) => module.default),
  te: () => import("@/public/locales/te/index.json").then((module) => module.default),
  ta: () => import("@/public/locales/ta/index.json").then((module) => module.default),
  kn: () => import("@/public/locales/kn/index.json").then((module) => module.default),
  ml: () => import("@/public/locales/ml/index.json").then((module) => module.default),
};

function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "hi" || value === "te" ||
    value === "ta" || value === "kn" || value === "ml";
}

export async function getRequestTranslations(): Promise<typeof en> {
  const localeValue = (await cookies()).get("locale")?.value;
  if (!isLocale(localeValue) || localeValue === "en") return en;

  const localized = await localeLoaders[localeValue]();
  return mergeLocaleData(en, localized);
}
