export function mergeLocaleData<T>(fallback: T, localized: unknown): T {
  if (Array.isArray(fallback)) {
    if (!Array.isArray(localized)) return fallback;

    const merged = fallback.map((value, index) =>
      index < localized.length
        ? mergeLocaleData(value, localized[index])
        : value,
    );
    merged.push(...localized.slice(fallback.length));
    return merged as T;
  }

  if (fallback !== null && typeof fallback === "object") {
    const localizedRecord =
      localized !== null && typeof localized === "object"
        ? (localized as Record<string, unknown>)
        : {};
    const fallbackRecord = fallback as Record<string, unknown>;
    const merged: Record<string, unknown> = {};

    for (const [key, value] of Object.entries(fallbackRecord)) {
      merged[key] =
        key in localizedRecord
          ? mergeLocaleData(value, localizedRecord[key])
          : value;
    }

    for (const [key, value] of Object.entries(localizedRecord)) {
      if (!(key in fallbackRecord)) merged[key] = value;
    }

    return merged as T;
  }

  return (localized === undefined ? fallback : localized) as T;
}
