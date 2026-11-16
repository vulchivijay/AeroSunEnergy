"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/lib/LocaleContext";

export default function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();

  return (
    <Link
      href="/"
      title={t.logo.homeTitle}
      aria-label={t.logo.homeAriaLabel}
      data-logo="brand"
      className={`relative flex items-center gap-2 font-(--font-logo) ${compact ? "w-max max-w-auto px-2 py-1" : "max-w-full"}`}
    >
      <Image
        src="/images/logo.png"
        alt={t.logo.imageAlt}
        width={80}
        height={62}
        priority
        className="h-auto w-16 shrink-0 object-contain sm:w-20"
      />
      <div className="flex min-w-0 flex-col items-start justify-center text-left">
        <div
          className={`flex items-center justify-start ${compact ? "gap-1" : "gap-1"}`}
        >
          <span
            data-brand-name
            className={`relative whitespace-nowrap pr-2 text-2xl font-bold tracking-wider text-[#20A44A] sm:text-3xl
              compact
                ? ""
                : ""
            `}
          >
            {t.logo.wordmark}
            <sup
              className={`absolute right-0 text-[10px] font-normal top-1 text-[#ffffff] ${compact ? "" : ""}`}
            >
              {t.logo.trademark}
            </sup>
          </span>
          <span
            data-brand-name
            className={`whitespace-nowrap text-2xl font-bold tracking-wider text-[#F59E0B] sm:text-3xl`}
          >
            {t.logo.wordmarkSuffix}
          </span>
        </div>
        <div
          className={`text-[12px] whitespace-nowrap
            compact
              ? "text-[#ffffff]"
              : "text-[#333333]"
          `}
        >
          ---- {t.navbar.brandTagline} ----
        </div>
      </div>
    </Link>
  );
}
