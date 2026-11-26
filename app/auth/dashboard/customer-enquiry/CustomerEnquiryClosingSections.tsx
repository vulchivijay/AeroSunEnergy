import type { Translations } from "@/lib/LocaleContext";
import {
  CustomerEnquirySectionTitle as SectionTitle,
  CustomerEnquiryTextField as TextField,
} from "./CustomerEnquiryFormFields";

type CustomerEnquiryCopy = Translations["customerEnquiryPage"];

export function CustomerEnquiryClosingSections({
  page,
  paymentMilestones,
}: {
  page: CustomerEnquiryCopy;
  paymentMilestones: string[];
}) {
  return (
    <>
      <section className="rounded-xl border border-sky-200 bg-gradient-to-br from-[#f1f2f6] to-white p-5">
        <SectionTitle number="12" title={page.sections[11]} />
        <p className="mb-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.paymentScheduleIntro}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {paymentMilestones.map((milestone, index) => (
            <div
              key={milestone}
              className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2"
            >
              <p className="self-center text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
                {milestone}
              </p>
              <TextField
                label={page.paymentPercentage}
                name={`payment_percentage_${index + 1}`}
                type="number"
                min={0}
                max={100}
                step={0.01}
                required
              />
              <TextField
                label={page.paymentAmount}
                name={`payment_amount_${index + 1}`}
                type="number"
                min={0}
                step={0.01}
                required
                className="sm:col-span-2"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-right text-emerald-900 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.totalPaymentPercentage}
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <TextField
            label={page.accountName}
            name="bank_account_name"
            placeholder={page.companyName}
          />
          <TextField label={page.bankName} name="bank_name" />
          <TextField label={page.accountNumber} name="bank_account_number" />
          <TextField label={page.ifscCode} name="bank_ifsc" />
          <TextField label={page.branch} name="bank_branch" />
        </div>
        <p className="mt-3 italic text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.bankDetailsNote}
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <SectionTitle number="13" title={page.sections[12]} />
        <ol className="grid gap-2 sm:grid-cols-2">
          {page.termsAndConditions.map((term, index) => (
            <li
              key={term}
              className="flex gap-3 rounded-xl bg-slate-50 p-3 text-base leading-5 text-slate-700"
            >
              <span className="font-mono font-bold text-emerald-700 tracking-normal tabular-nums">
                {index + 1}.
              </span>
              {term}
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-xl border border-emerald-200 bg-gradient-to-br from-[#f1f2f6] to-white p-5">
        <SectionTitle number="14" title={page.sections[13]} />
        <p className="mb-4 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.acceptanceCopy}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <TextField label={page.customerName} name="acceptance_customer_name" required minLength={2} />
          <TextField label={page.signatureName} name="customer_signature" required minLength={2} />
          <TextField label={page.date} name="customer_acceptance_date" type="date" required />
          <TextField label={page.place} name="customer_acceptance_place" required />
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <SectionTitle number="15" title={page.sections[14]} />
        <p className="mb-4 text-slate-800 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.forCompany}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <TextField label={page.authorisedRepresentative} name="authorised_representative" required minLength={2} />
          <TextField label={page.designation} name="authorised_designation" required />
          <TextField label={page.authorisedSignature} name="authorised_signature" required minLength={2} />
          <TextField label={page.authorisationDate} name="authorisation_date" type="date" required />
        </div>
        <label className="mt-3 block text-xs sm:text-sm font-semibold tracking-normal leading-5">
          <span className="mb-1.5 block text-base font-bold text-slate-700 tracking-normal">
            {page.companySeal}
          </span>
          <input
            name="company_seal"
            placeholder={page.companySealPlaceholder}
            className="min-h-10 w-full min-w-0 max-w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base"
          />
        </label>
      </section>
    </>
  );
}
