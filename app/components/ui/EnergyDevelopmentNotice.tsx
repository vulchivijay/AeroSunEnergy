import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";

export function EnergyDevelopmentNotice({
  children,
  variant = "banner",
}: {
  children: ReactNode;
  variant?: "banner" | "inline";
}) {
  const content = (
    <div
      className={`flex items-center gap-3 text-xs sm:text-sm tracking-normal leading-5 sm:leading-6 ${
        variant === "inline"
          ? "inline-flex max-w-4xl rounded-lg border border-amber-300/80 bg-amber-50 px-2 py-1 text-amber-950 shadow-sm"
          : "mx-auto max-w-7xl"
      }`}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-800" aria-hidden="true">
        <AlertTriangle className="h-[18px] w-[18px]" strokeWidth={2.2} />
      </span>
      <p>{children}</p>
    </div>
  );

  if (variant === "inline") {
    return (
      <div role="note" className="mt-4">
        {content}
      </div>
    );
  }

  return (
    <div role="note" className="border-b border-amber-300/80 bg-amber-50 px-4 py-3 text-amber-950 sm:px-6 lg:px-10">
      {content}
    </div>
  );
}
