"use client";

import { useState, type FormEvent } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { FormDataNotice } from "@/app/components/forms/FormDataNotice";
import { submitWebsiteForm } from "@/lib/websiteFormSubmission";
import { useToast } from "@/app/components/ui/ToastContext";
import {
  CustomerEnquiryTextField as TextField,
} from "./CustomerEnquiryFormFields";
import { CustomerEnquiryPricingSection } from "./CustomerEnquiryPricingSection";
import { CustomerEnquiryClosingSections } from "./CustomerEnquiryClosingSections";
import { CustomerEnquiryProjectSections } from "./CustomerEnquiryProjectSections";
import { CustomerEnquiryTechnicalSections } from "./CustomerEnquiryTechnicalSections";

export default function CustomerEnquiryPage() {
  const { t } = useLocale();
  const toast = useToast();
  const page = t.customerEnquiryPage;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const paymentMilestones = page.paymentMilestones;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const percentages = paymentMilestones.map((_, index) =>
      Number(formData.get(`payment_percentage_${index + 1}`)),
    );
    const totalPercentage = percentages.reduce(
      (total, percentage) => total + percentage,
      0,
    );
    const lastPercentageInput = form.elements.namedItem(
      `payment_percentage_${paymentMilestones.length}`,
    );

    if (lastPercentageInput instanceof HTMLInputElement) {
      lastPercentageInput.setCustomValidity(
        Math.abs(totalPercentage - 100) < 0.001
          ? ""
          : page.paymentPercentageValidation,
      );
      if (!form.reportValidity()) return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [key, String(value)]),
      );
      const referenceCode = await submitWebsiteForm("customer_enquiry", submissionData);

      toast.success(`${page.feedback} ${t.formSubmission.referenceLabel}: ${referenceCode}`);
    } catch {
      toast.error(t.formSubmission.error);
    } finally {
      setIsSubmitting(false);
    }

  }

  return (
    <main className="min-h-screen w-full bg-[#f7f7f2] px-4 py-10 sm:px-6 lg:px-8">
      <header className="mx-auto mb-8 max-w-7xl rounded-xl border border-slate-200 bg-linear-to-br from-white/75 via-sky-50/65 to-cyan-100/55 p-6 shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/60 sm:p-8">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-[#eaf2e9] px-4 py-2 uppercase text-emerald-800 text-xs font-semibold tracking-wide leading-5">
          {page.eyebrow}
        </p>
        <h1 className="mt-3 text-slate-950 text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
          {page.title}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{page.description}</p>
      </header>
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <form
          onSubmit={handleSubmit}
          onInput={(event) => {
            const target = event.target;
            if (
              target instanceof HTMLInputElement &&
              target.name.startsWith("payment_percentage_")
            ) {
              const lastPercentageInput =
                event.currentTarget.elements.namedItem(
                  `payment_percentage_${paymentMilestones.length}`,
                );
              if (lastPercentageInput instanceof HTMLInputElement)
                lastPercentageInput.setCustomValidity("");
            }
          }}
          className="min-w-0 space-y-6 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5 lg:p-6"
        >
          <header className="rounded-xl border border-slate-700 bg-linear-to-br from-sky-900/65 via-cyan-800/55 to-slate-900/65 p-5 text-white shadow-sm backdrop-blur-2xl ring-1 ring-inset ring-white/15 sm:p-6">
            <p className="uppercase text-lime-300 text-xs font-semibold tracking-wide leading-5">
              {page.companyName}
            </p>
            <h1 className="mt-2 uppercase text-3xl sm:text-4xl lg:text-5xl font-bold !tracking-tight leading-tight">
              {page.title}
            </h1>
            <p className="mt-2 text-emerald-100 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {page.companyTagline}
            </p>
            <p className="mt-3 uppercase text-emerald-50/80 text-xs font-semibold tracking-wide leading-5">
              {page.proposalTitle}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <TextField
                label={page.quotationReference}
                name="quotation_reference"
                placeholder={page.quotationReferencePlaceholder}
                required
                labelTextClassName="text-white"
              />
              <TextField
                label={page.revision}
                name="quotation_revision"
                placeholder={page.revisionPlaceholder}
                required
                pattern="[0-9]{2}"
                labelTextClassName="text-white"
              />
              <TextField
                label={page.quotationDate}
                name="quotation_date"
                type="date"
                required
                labelTextClassName="text-white"
              />
              <TextField
                label={page.validUntil}
                name="quotation_valid_until"
                type="date"
                required
                labelTextClassName="text-white"
              />
            </div>
          </header>

          <CustomerEnquiryProjectSections page={page} />

          <CustomerEnquiryPricingSection page={page} />

          <CustomerEnquiryTechnicalSections page={page} />

          <CustomerEnquiryClosingSections page={page} paymentMilestones={paymentMilestones} />

          <section className="rounded-xl bg-gradient-to-br from-[#f1f2f6] to-white p-5 text-slate-900 sm:p-7">
            <h2 className="uppercase text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
              {page.thankYou}
            </h2>
            <p className="mt-2 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">{page.companyName}</p>
            <p className="mt-1 text-emerald-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {page.companyTagline}
            </p>
            <p className="mt-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {page.company.websiteValue} · {page.contactEmail} ·{" "}
              {page.phoneValue}
            </p>
            <p className="mt-2 font-mono text-emerald-800 tabular-nums text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
              {page.documentReference}
            </p>
          </section>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5">
              <input
                type="checkbox"
                name="accept_terms"
                value={page.acceptanceValue}
                required
                className="mt-1 h-4 w-4 accent-emerald-700"
              />
              {page.acceptTerms}
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-base font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 disabled:cursor-wait disabled:opacity-70 tracking-normal"
            >
              {isSubmitting ? t.formSubmission.saving : page.submit}
            </button>
          </div>
          <p className="text-right text-slate-500 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {page.requiredFieldsNote}
          </p>
          <FormDataNotice />
          {isSubmitting && <p className="text-emerald-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7" role="status">{t.formSubmission.saving}</p>}
        </form>
        <aside className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <h2 className="mb-4 uppercase text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug">
            {page.quotationSectionsTitle}
          </h2>
          <nav aria-label={page.quotationSectionsAriaLabel}>
            <ol className="space-y-2">
              {page.sections.map((section, index) => {
                const number = String(index + 1).padStart(2, "0");
                return (
                  <li key={number}>
                    <a
                      href={`#quotation-section-${number}`}
                      className="flex gap-2 rounded-xl px-2 py-1.5 text-base leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <span className="font-mono font-bold text-emerald-700 tracking-normal tabular-nums">
                        {number}
                      </span>
                      <span>{section}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </aside>
      </div>
    </main>
  );
}
