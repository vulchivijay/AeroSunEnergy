"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "@/app/components/ui/ToastContext";
import { INDIAN_MOBILE_HTML_PATTERN } from "@/lib/validation/contact";
import type { Translations } from "@/lib/LocaleContext";

type ReferralFormContent =
  Translations["home"]["referralProgram"]["form"];

type ReferralResponse = {
  referenceCode: string;
};

function isReferralResponse(value: unknown): value is ReferralResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "referenceCode" in value &&
    typeof value.referenceCode === "string"
  );
}

export default function ReferralForm({
  content,
}: {
  content: ReferralFormContent;
}) {
  const toast = useToast();
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);

    try {
      const response = await fetch("/api/referrals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referrerName: formData.get("referrerName"),
          referrerPhone: formData.get("referrerPhone"),
          referredName: formData.get("referredName"),
          referredPhone: formData.get("referredPhone"),
          postalCode: formData.get("postalCode"),
          propertyType: formData.get("propertyType"),
          consent: formData.get("consent") === "true",
        }),
      });
      const result: unknown = await response.json();

      if (!response.ok || !isReferralResponse(result)) {
        toast.error(content.error);
        return;
      }

      toast.success(
        `${content.successTitle} ${content.successDescription} ${content.referenceLabel}: ${result.referenceCode}`,
      );
      form.reset();
    } catch {
      toast.error(content.error);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClassName =
    "mt-1.5 min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15";

  return (
    <div className="min-w-0 rounded-2xl bg-[#f8f7f1] p-5 text-slate-900 shadow-sm sm:p-7 lg:p-9">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087a61] sm:text-sm">
            {content.title}
          </p>
          <h3 className="mt-3 text-2xl font-bold leading-tight text-[#122b2a] sm:text-3xl">
            {content.conversationTitle}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {content.description}
          </p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f0e8] text-[#087a61]">
          <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <form className="mt-6 space-y-5 sm:mt-7" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
          <label className="block text-xs font-medium text-slate-600 sm:text-sm">
            {content.referrerNameLabel}
            <input
              className={inputClassName}
              name="referrerName"
              type="text"
              autoComplete="name"
              placeholder={content.referrerNameLabel}
              minLength={2}
              maxLength={100}
              required
            />
          </label>
          <label className="block text-xs font-medium text-slate-600 sm:text-sm">
            {content.referrerPhoneLabel}
            <input
              className={inputClassName}
              name="referrerPhone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={content.referrerPhoneLabel}
              pattern={INDIAN_MOBILE_HTML_PATTERN}
              maxLength={13}
              required
            />
          </label>
          <label className="block text-xs font-medium text-slate-600 sm:text-sm">
            {content.referredNameLabel}
            <input
              className={inputClassName}
              name="referredName"
              type="text"
              placeholder={content.referredNameLabel}
              minLength={2}
              maxLength={100}
              required
            />
          </label>
          <label className="block text-xs font-medium text-slate-600 sm:text-sm">
            {content.referredPhoneLabel}
            <input
              className={inputClassName}
              name="referredPhone"
              type="tel"
              inputMode="tel"
              placeholder={content.referredPhoneLabel}
              pattern={INDIAN_MOBILE_HTML_PATTERN}
              maxLength={13}
              required
            />
          </label>
          <label className="block text-xs font-medium text-slate-600 sm:text-sm">
            {content.postalCodeLabel}
            <input
              className={inputClassName}
              name="postalCode"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder={content.postalCodeLabel}
              pattern="[0-9]{6}"
              maxLength={6}
              required
            />
          </label>
          <label className="block text-xs font-medium text-slate-600 sm:text-sm">
            {content.propertyTypeLabel}
            <select
              className={inputClassName}
              name="propertyType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                {content.propertyTypePlaceholder}
              </option>
              {content.propertyTypes.map((propertyType) => (
                <option key={propertyType.value} value={propertyType.value}>
                  {propertyType.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500 sm:text-sm">
          <input
            className="mt-1 h-4 w-4 shrink-0 accent-emerald-800"
            name="consent"
            type="checkbox"
            value="true"
            required
          />
          <span>{content.consent}</span>
        </label>

        <p className="text-xs leading-5 text-slate-500">
          {content.privacyPrefix}
        </p>

        <button
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#17865e] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#126f4e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17865e] disabled:cursor-wait disabled:opacity-70"
          type="submit"
          disabled={submitting}
        >
          {submitting ? content.submitting : content.submit}
          {!submitting && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </form>
    </div>
  );
}
