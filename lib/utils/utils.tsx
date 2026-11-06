import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAccentOrDefault<const TAllowed extends readonly string[], TFallback extends string>(
  accent: string,
  allowed: TAllowed,
  fallback: TFallback,
): TAllowed[number] | TFallback {
  return allowed.find((value) => value === accent) ?? fallback
}