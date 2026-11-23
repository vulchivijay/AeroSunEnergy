"use client";

import { useEffect, useState, type FormEvent } from "react";
import { FormDataNotice } from "@/app/components/forms/FormDataNotice";
import { useToast } from "@/app/components/ui/ToastContext";
import { useLocale, type Locale, type Translations } from "@/lib/LocaleContext";
import {
  electricityBillOptions,
  financingOptions,
  indianStates,
  solarNeedOptions,
} from "@/lib/contactFormOptions";
import { submitWebsiteForm } from "@/lib/websiteFormSubmission";

type ContactFormContent = Translations["contact"]["form"];

export default function ContactForm({
  content,
}: {
  content: ContactFormContent;
}) {
  const { locale, t } = useLocale();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSubmit, setSelectedSubmit] = useState<{
    locale: Locale;
    label: string;
  } | null>(null);
  const submitLabel =
    selectedSubmit?.locale === locale ? selectedSubmit.label : content.submit;

  useEffect(() => {
    const randomIndex = Math.floor(
      Math.random() * content.submitVariants.length,
    );
    // Keep the server-rendered label deterministic and choose a variant after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelectedSubmit({
      locale,
      label: content.submitVariants[randomIndex],
    });
  }, [content.submitVariants, locale]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);

    try {
      const referenceCode = await submitWebsiteForm("contact", {
        fullName: String(formData.get("fullName") ?? "").trim(),
        email: String(formData.get("email") ?? "").trim(),
        phone: String(formData.get("phone") ?? "").trim(),
        solarNeed: String(formData.get("solarNeed") ?? "").trim(),
        state: String(formData.get("state") ?? "").trim(),
        monthlyAverageElectricityBill: String(
          formData.get("monthlyAverageElectricityBill") ?? "",
        ).trim(),
        interestedInFinancing: String(
          formData.get("interestedInFinancing") ?? "",
        ).trim(),
      });
      toast.success(
        `${content.success} ${t.formSubmission.referenceLabel}: ${referenceCode}`,
      );
      form.reset();
    } catch {
      toast.error(t.formSubmission.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4 p-5 sm:p-8" onSubmit={handleSubmit}>
      <label className="block text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
        {content.fullName} <span className="text-red-600" aria-hidden="true">*</span>
        <input
          className="mt-1.5 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
          name="fullName"
          type="text"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
          placeholder={content.fullNamePlaceholder}
        />
      </label>
      <label className="block text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
        {content.phone} <span className="text-red-600" aria-hidden="true">*</span>
        <input
          className="mt-1.5 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          pattern="(?:\+?91)?[6-9][0-9]{9}"
          maxLength={13}
          required
          placeholder={content.phonePlaceholder}
        />
      </label>
      <label className="block text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
        {content.solarNeed} <span className="text-red-600" aria-hidden="true">*</span>
        <select
          className="mt-1.5 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
          name="solarNeed"
          required
          defaultValue=""
        >
          <option value="" disabled>
            {content.solarNeedPlaceholder}
          </option>
          {solarNeedOptions.map((option, index) => (
            <option key={option.value} value={option.value}>
              {content.solarNeedOptions[index]}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
        {content.state} <span className="text-red-600" aria-hidden="true">*</span>
        <select
          className="mt-1.5 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
          name="state"
          required
          defaultValue=""
        >
          <option value="" disabled>
            {content.statePlaceholder}
          </option>
          {indianStates.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
        {content.monthlyAverageElectricityBill}{" "}
        <span className="text-red-600" aria-hidden="true">*</span>
        <select
          className="mt-1.5 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
          name="monthlyAverageElectricityBill"
          required
          defaultValue=""
        >
          <option value="" disabled>
            {content.monthlyAverageElectricityBillPlaceholder}
          </option>
          {electricityBillOptions.map((option, index) => (
            <option key={option.value} value={option.value}>
              {content.electricityBillOptions[index]}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
        {content.interestedInFinancing}
        <select
          className="mt-1.5 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
          name="interestedInFinancing"
          defaultValue=""
        >
          <option value="" disabled>
            {content.interestedInFinancingPlaceholder}
          </option>
          {financingOptions.map((option, index) => (
            <option key={option.value} value={option.value}>
              {content.financingOptions[index]}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-slate-800 text-xs sm:text-sm font-semibold tracking-normal leading-5">
        {content.email} <span className="text-red-600" aria-hidden="true">*</span>
        <input
          className="mt-1.5 min-h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          placeholder={content.emailPlaceholder}
        />
      </label>
      <div className="space-y-3">
        <FormDataNotice />
        <button
          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#087a61] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#075e4b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#087a61] disabled:cursor-wait disabled:opacity-70 tracking-normal"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? t.formSubmission.saving : submitLabel}
        </button>
      </div>
    </form>
  );
}
