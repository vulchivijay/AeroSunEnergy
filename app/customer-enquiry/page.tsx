"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useLocale } from "@/lib/LocaleContext";

function SectionTitle({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 border-b border-slate-200 pb-3">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-700 font-mono text-md font-bold text-white">
        {number}
      </span>
      <h2
        id={`quotation-section-${number}`}
        className="scroll-mt-28 text-lg font-black uppercase tracking-wide text-slate-900 sm:text-xl"
      >
        {title}
      </h2>
    </div>
  );
}

function TextField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  min,
  max,
  minLength,
  step,
  pattern,
  className = "",
  labelTextClassName = "text-slate-700",
}: {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date" | "number";
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  minLength?: number;
  step?: number | "any";
  pattern?: string;
  className?: string;
  labelTextClassName?: string;
}) {
  return (
    <label className={`block min-w-0 ${className}`}>
      <span className={`mb-1.5 block text-md font-bold ${labelTextClassName}`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        minLength={minLength}
        step={step}
        pattern={pattern}
        className="min-h-10 w-full min-w-0 max-w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-md text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  placeholder: string;
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-1.5 block text-md font-bold text-slate-700">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="min-h-10 w-full min-w-0 max-w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-md text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function EditableTable({
  rowHeader,
  headers,
  rows,
}: {
  rowHeader: string;
  headers: string[];
  rows: {
    label: string;
    unit?: string;
    fields: {
      label: string;
      name: string;
      type?: "text" | "number";
      min?: number;
      step?: number | "any";
    }[];
  }[];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse text-left text-md">
        <thead className="bg-emerald-50 text-[11px] font-bold uppercase tracking-wide text-emerald-950">
          <tr>
            <th className="border-b border-r border-emerald-100 px-3 py-2.5">
              {rowHeader}
            </th>
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-r border-emerald-100 px-3 py-2.5 last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="odd:bg-white even:bg-slate-50">
              <th
                scope="row"
                className="min-w-52 border-b border-r border-slate-100 px-3 py-2 text-left font-semibold text-slate-700"
              >
                {row.label}
              </th>
              {row.fields.map((field) => (
                <td
                  key={field.name}
                  className="min-w-36 border-b border-r border-slate-100 px-2 py-1.5 last:border-r-0"
                >
                  <input
                    name={field.name}
                    type={field.type ?? "text"}
                    min={field.min}
                    step={field.step}
                    aria-label={`${row.label}: ${field.label}`}
                    className="min-h-9 w-full rounded-md border border-slate-200 bg-white px-2 text-md text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </td>
              ))}
              {row.unit !== undefined && (
                <td className="border-b border-slate-100 px-3 py-2.5 text-slate-600">
                  {row.unit}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChoiceGroup({
  legend,
  name,
  options,
  required = false,
}: {
  legend: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-md font-bold text-slate-700">
        {legend}
        {required && <span aria-hidden="true"> *</span>}
      </legend>
      <div className="grid gap-2 sm:grid-cols-2">
        {options.map((option, index) => (
          <label
            key={option}
            className="flex min-w-0 items-start gap-2 rounded-lg border border-slate-200 bg-white p-2.5 text-md leading-5 text-slate-700"
          >
            <input
              type="radio"
              name={name}
              value={option}
              required={required && index === 0}
              className="mt-1 shrink-0 accent-emerald-700"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function CustomerEnquiryPage() {
  const { t } = useLocale();
  const page = t.customerEnquiryPage;
  const [feedback, setFeedback] = useState("");
  const paymentMilestones = page.paymentMilestones;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
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

    function getFieldLabel(name: string) {
      const radio = Array.from(
        form.querySelectorAll<HTMLInputElement>('input[type="radio"]'),
      ).find((input) => input.name === name);
      if (radio) {
        return (
          radio
            .closest("fieldset")
            ?.querySelector("legend")
            ?.textContent?.trim() ?? radio.value
        );
      }

      const field = form.elements.namedItem(name);
      if (
        field instanceof HTMLInputElement ||
        field instanceof HTMLSelectElement ||
        field instanceof HTMLTextAreaElement
      ) {
        const label =
          field.getAttribute("aria-label") ?? field.labels?.[0]?.textContent;
        if (label) return label.replace(/\s*\*$/, "").trim();
      }

      return name.replaceAll("_", " ");
    }

    const body = [
      page.mailtoBodyTitle,
      page.mailtoBodySubtitle,
      "",
      ...Array.from(formData.entries()).map(
        ([key, value]) => `${getFieldLabel(key)}: ${String(value)}`,
      ),
    ].join("\n");
    const subject = encodeURIComponent(
      `${page.mailtoSubjectPrefix}${String(formData.get("customer_name"))}`,
    );
    window.location.href = `mailto:${page.mailtoRecipient}?subject=${subject}&body=${encodeURIComponent(body)}`;
    setFeedback(page.feedback);
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-md font-bold uppercase tracking-[0.18em] text-emerald-700">
          {page.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">
          {page.title}
        </h1>
        <p className="mt-3 max-w-3xl text-slate-600">{page.description}</p>
      </header>
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_16rem]">
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
          className="min-w-0 space-y-6"
        >
          <header className="rounded-2xl bg-[#123c48] p-5 text-white sm:p-7">
            <p className="text-md font-bold uppercase tracking-[0.2em] text-lime-300">
              {page.companyName}
            </p>
            <h1 className="mt-2 text-2xl font-black uppercase leading-tight sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-2 text-md font-semibold text-emerald-100">
              {page.companyTagline}
            </p>
            <p className="mt-3 text-md uppercase tracking-wide text-emerald-50/80">
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

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <SectionTitle number="01" title={page.sections[0]} />
            <div className="grid gap-3 text-md text-slate-700 sm:grid-cols-2">
              <p>
                <strong>{page.companyName}</strong>
              </p>
              <p>
                <strong>{page.company.cin}</strong> {page.company.cinValue}
              </p>
              <p className="sm:col-span-2">
                <strong>{page.company.registeredOffice}</strong>{" "}
                {page.company.registeredOfficeValue}
              </p>
              <p>
                <strong>{page.company.msme}</strong> {page.company.msmeValue}
              </p>
              <p>
                <strong>{page.company.startupIndia}</strong>{" "}
                {page.company.startupIndiaValue}
              </p>
              <p>
                <strong>{page.company.website}</strong>{" "}
                {page.company.websiteValue}
              </p>
              <p>
                <strong>{page.company.email}</strong> {page.mailtoRecipient}
              </p>
              <p>
                <strong>{page.company.phone}</strong> {page.phoneValue}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-sky-200 bg-sky-50/60 p-5">
            <SectionTitle number="02" title={page.sections[1]} />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <TextField
                label={page.customerName}
                name="customer_name"
                required
                minLength={2}
                placeholder={page.customerNamePlaceholder}
              />
              <TextField
                label={page.companyOrganisation}
                name="company_organisation"
                placeholder={page.ifApplicable}
              />
              <TextField
                label={page.contactPerson}
                name="contact_person"
                required
                minLength={2}
              />
              <TextField
                label={page.mobileNumber}
                name="mobile_number"
                type="tel"
                required
                minLength={10}
                pattern="[0-9+() -]{10,}"
                placeholder={page.mobileNumberPlaceholder}
              />
              <TextField
                label={page.emailAddress}
                name="customer_email"
                type="email"
                required
                placeholder={page.emailPlaceholder}
              />
              <TextField
                label={page.customerEnquiryReference}
                name="customer_enquiry_reference"
              />
              <TextField
                label={page.installationAddress}
                name="installation_address"
                required
                className="sm:col-span-2 lg:col-span-3"
              />
              <TextField label={page.district} name="district" required />
              <TextField label={page.state} name="state" required />
              <TextField
                label={page.pinCode}
                name="pin_code"
                required
                pattern="[0-9]{6}"
                placeholder={page.pinCodePlaceholder}
              />
              <SelectField
                label={page.customerCategory}
                name="customer_category"
                required
                options={page.customerCategories}
                placeholder={page.selectOption}
              />
              <TextField
                label={page.siteSurveyDate}
                name="site_survey_date"
                type="date"
              />
            </div>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
            <SectionTitle number="03" title={page.sections[2]} />
            <div className="grid gap-3 sm:grid-cols-2">
              <TextField
                label={page.projectName}
                name="project_name"
                required
                placeholder={page.projectNamePlaceholder}
              />
              <TextField
                label={page.proposedCapacity}
                name="proposed_capacity_kwp"
                type="number"
                min={0.01}
                step="any"
                required
              />
              <ChoiceGroup
                legend={page.systemConfiguration}
                name="system_configuration"
                required
                options={page.systemConfigurations}
              />
              <ChoiceGroup
                legend={page.installationType}
                name="installation_type"
                required
                options={page.installationTypes}
              />
            </div>
            <div className="mt-4 rounded-xl border border-emerald-100 bg-white p-4">
              <h3 className="text-md font-bold text-slate-900">
                {page.projectObjective}
              </h3>
              <p className="mt-2 text-md leading-6 text-slate-700">
                {page.projectObjectiveCopy}
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
            <SectionTitle number="04" title={page.sections[3]} />
            <EditableTable
              rowHeader={page.parameter}
              headers={[page.proposedSpecification, page.unit]}
              rows={page.technicalSpecifications.map((item) => ({
                label: item.label,
                unit: "unit" in item ? item.unit : "",
                fields: [
                  {
                    label: item.label,
                    name: item.name,
                    type:
                      "type" in item && item.type === "number"
                        ? "number"
                        : "text",
                    min:
                      "type" in item && item.type === "number" ? 0 : undefined,
                    step:
                      "type" in item && item.type === "number"
                        ? "any"
                        : undefined,
                  },
                ],
              }))}
            />
            <p className="mt-3 text-md leading-5 text-slate-600">
              {page.technicalSpecificationNote}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle number="05" title={page.sections[4]} />
            <EditableTable
              rowHeader={page.billOfMaterialsRowHeader}
              headers={[page.brandModel, page.specification, page.quantity]}
              rows={page.billOfMaterials.map((item, index) => ({
                label: `${index + 1}. ${item}`,
                fields: [
                  { label: item, name: `bom_${index + 1}_brand_model` },
                  { label: item, name: `bom_${index + 1}_specification` },
                  {
                    label: item,
                    name: `bom_${index + 1}_quantity`,
                    type: "number",
                    min: 0,
                    step: "any",
                  },
                ],
              }))}
            />
            <p className="mt-3 text-md leading-5 text-slate-600">
              {page.billOfMaterialsNote}
            </p>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
            <SectionTitle number="06" title={page.sections[5]} />
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[520px] border-collapse text-md">
                <thead className="bg-emerald-100 text-left text-md font-bold uppercase text-emerald-950">
                  <tr>
                    <th className="px-3 py-3">{page.serialNumber}</th>
                    <th className="px-3 py-3">{page.descriptionLabel}</th>
                    <th className="px-3 py-3">{page.amountRupees}</th>
                  </tr>
                </thead>
                <tbody>
                  {page.priceItems.map((item, index) => (
                    <tr
                      key={item}
                      className="border-t border-slate-200 odd:bg-white even:bg-slate-50"
                    >
                      <td className="px-3 py-2">{index + 1}</td>
                      <td className="px-3 py-2">{item}</td>
                      <td className="px-3 py-2">
                        <input
                          name={`price_item_${index + 1}`}
                          type="number"
                          min={0}
                          step="0.01"
                          aria-label={`${item} ${page.amountInRupees}`}
                          className="min-h-9 w-full rounded-md border border-slate-200 px-2"
                        />
                      </td>
                    </tr>
                  ))}
                  {[
                    [page.subtotal, "price_subtotal"],
                    [page.gst, "price_gst"],
                    [page.otherApplicableCharges, "price_other_charges"],
                    [page.totalProjectCost, "price_total"],
                  ].map(([label, name]) => (
                    <tr
                      key={name}
                      className="border-t border-slate-200 bg-white font-semibold"
                    >
                      <th colSpan={2} className="px-3 py-2 text-left">
                        {label}
                      </th>
                      <td className="px-3 py-2">
                        <input
                          name={name}
                          type="number"
                          min={0}
                          step="0.01"
                          required={name === "price_total"}
                          aria-label={`${label} ${page.amountInRupees}`}
                          className="min-h-9 w-full rounded-md border border-slate-200 px-2"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <TextField
                label={page.totalAmountInWords}
                name="total_amount_words"
                required
                placeholder={page.totalAmountPlaceholder}
              />
              <TextField
                label={page.gstTreatmentNotes}
                name="gst_treatment"
                placeholder={page.gstPlaceholder}
              />
            </div>
            <p className="mt-3 text-md leading-5 text-slate-600">
              {page.gstNote}
            </p>
          </section>

          <section className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5">
            <SectionTitle number="07" title={page.sections[6]} />
            <EditableTable
              rowHeader={page.parameter}
              headers={[page.estimatedValue, page.unit]}
              rows={page.generationParameters.map(({ label, name, unit }) => ({
                label,
                unit,
                fields: [{ label, name, type: "number", min: 0, step: "any" }],
              }))}
            />
            <h3 className="mb-3 mt-5 text-md font-bold text-slate-900">
              {page.generationAssumptions}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.generationAssumptionFields.map(({ label, name }) => (
                <TextField key={name} label={label} name={name} />
              ))}
            </div>
            <p className="mt-4 rounded-xl bg-amber-50 p-4 text-md leading-5 text-amber-950">
              {page.generationDisclaimer}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle number="08" title={page.sections[7]} />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.financialParameters.map((parameter) => (
                <TextField
                  key={parameter.name}
                  label={`${parameter.label} (${parameter.unit})`}
                  name={parameter.name}
                  type="number"
                  min={0}
                  step="any"
                />
              ))}
            </div>
            <h3 className="mb-3 mt-5 text-md font-bold text-slate-900">
              {page.calculationAssumptions}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <TextField
                label={page.electricityTariff}
                name="electricity_tariff"
                type="number"
                min={0}
                step="any"
              />
              <TextField
                label={page.financialSelfConsumption}
                name="financial_self_consumption"
                type="number"
                min={0}
                max={100}
                step="any"
              />
              <TextField
                label={page.exportCompensation}
                name="export_compensation"
                type="number"
                min={0}
                step="any"
              />
              <TextField
                label={page.annualDegradation}
                name="annual_degradation"
                type="number"
                min={0}
                max={100}
                step="any"
              />
              <SelectField
                label={page.fixedDemandCharges}
                name="fixed_demand_charges"
                options={page.fixedDemandOptions}
                placeholder={page.selectOption}
              />
            </div>
            <p className="mt-4 text-md leading-5 text-slate-600">
              {page.savingsDisclaimer}
            </p>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/40 p-5">
            <SectionTitle number="09" title={page.sections[8]} />
            <p className="mb-4 text-md text-slate-600">
              {page.scopeInstructions}
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {page.scopeActivities.map((activity, index) => (
                <SelectField
                  key={activity}
                  label={activity}
                  name={`scope_activity_${index + 1}`}
                  options={page.includedExcludedOptions}
                  placeholder={page.selectOption}
                />
              ))}
            </div>
            <h3 className="mb-3 mt-6 text-md font-bold text-slate-900">
              {page.scheduleTitle}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {page.scheduleActivities.map((activity, index) => (
                <TextField
                  key={activity}
                  label={`${activity}${page.estimatedDuration}`}
                  name={`schedule_duration_${index + 1}`}
                  placeholder={page.durationPlaceholder}
                />
              ))}
            </div>
            <p className="mt-4 text-md leading-5 text-slate-600">
              {page.scheduleNote}
            </p>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
            <SectionTitle number="10" title={page.sections[9]} />
            <p className="mb-4 text-md text-slate-600">
              {page.exclusionsIntro}
            </p>
            <ol className="grid gap-2 sm:grid-cols-2">
              {page.exclusions.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg bg-white p-3 text-md leading-5 text-slate-700"
                >
                  <span className="font-mono font-bold text-amber-700">
                    {index + 1}.
                  </span>
                  {item}
                </li>
              ))}
            </ol>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-md font-bold text-slate-700">
                {page.additionalWork}
              </span>
              <textarea
                name="additional_work"
                rows={2}
                placeholder={page.additionalWorkPlaceholder}
                className="w-full min-w-0 max-w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-md"
              />
            </label>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle number="11" title={page.sections[10]} />
            <EditableTable
              rowHeader={page.equipment}
              headers={[page.manufacturerWarrantyProvider, page.warrantyPeriod]}
              rows={page.warrantyItems.map((item, index) => ({
                label: item,
                fields: [
                  {
                    label: `${item} ${page.manufacturerOrProvider}`,
                    name: `warranty_provider_${index + 1}`,
                  },
                  {
                    label: `${item} ${page.warrantyPeriodField}`,
                    name: `warranty_period_${index + 1}`,
                  },
                ],
              }))}
            />
            <p className="mt-4 text-md leading-5 text-slate-600">
              {page.warrantyCoverageNote}
            </p>
          </section>

          <section className="rounded-2xl border border-sky-200 bg-sky-50/50 p-5">
            <SectionTitle number="12" title={page.sections[11]} />
            <p className="mb-4 text-md text-slate-600">
              {page.paymentScheduleIntro}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {paymentMilestones.map((milestone, index) => (
                <div
                  key={milestone}
                  className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2"
                >
                  <p className="self-center text-md font-semibold text-slate-700">
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
            <p className="mt-3 text-right text-md font-black text-emerald-900">
              {page.totalPaymentPercentage}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <TextField
                label={page.accountName}
                name="bank_account_name"
                placeholder={page.companyName}
              />
              <TextField label={page.bankName} name="bank_name" />
              <TextField
                label={page.accountNumber}
                name="bank_account_number"
              />
              <TextField label={page.ifscCode} name="bank_ifsc" />
              <TextField label={page.branch} name="bank_branch" />
            </div>
            <p className="mt-3 text-md italic text-slate-600">
              {page.bankDetailsNote}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5">
            <SectionTitle number="13" title={page.sections[12]} />
            <ol className="grid gap-2 sm:grid-cols-2">
              {page.termsAndConditions.map((term, index) => (
                <li
                  key={term}
                  className="flex gap-3 rounded-lg bg-slate-50 p-3 text-md leading-5 text-slate-700"
                >
                  <span className="font-mono font-bold text-emerald-700">
                    {index + 1}.
                  </span>
                  {term}
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
            <SectionTitle number="14" title={page.sections[13]} />
            <p className="mb-4 text-md leading-6 text-slate-700">
              {page.acceptanceCopy}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <TextField
                label={page.customerName}
                name="acceptance_customer_name"
                required
                minLength={2}
              />
              <TextField
                label={page.signatureName}
                name="customer_signature"
                required
                minLength={2}
              />
              <TextField
                label={page.date}
                name="customer_acceptance_date"
                type="date"
                required
              />
              <TextField
                label={page.place}
                name="customer_acceptance_place"
                required
              />
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <SectionTitle number="15" title={page.sections[14]} />
            <p className="mb-4 text-md font-semibold text-slate-800">
              {page.forCompany}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <TextField
                label={page.authorisedRepresentative}
                name="authorised_representative"
                required
                minLength={2}
              />
              <TextField
                label={page.designation}
                name="authorised_designation"
                required
              />
              <TextField
                label={page.authorisedSignature}
                name="authorised_signature"
                required
                minLength={2}
              />
              <TextField
                label={page.authorisationDate}
                name="authorisation_date"
                type="date"
                required
              />
            </div>
            <label className="mt-3 block">
              <span className="mb-1.5 block text-md font-bold text-slate-700">
                {page.companySeal}
              </span>
              <input
                name="company_seal"
                placeholder={page.companySealPlaceholder}
                className="min-h-10 w-full min-w-0 max-w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-md"
              />
            </label>
          </section>

          <section className="rounded-2xl bg-[#123c48] p-5 text-white sm:p-7">
            <h2 className="text-xl font-black uppercase tracking-wide">
              {page.thankYou}
            </h2>
            <p className="mt-2 font-semibold">{page.companyName}</p>
            <p className="mt-1 text-md text-emerald-100">
              {page.companyTagline}
            </p>
            <p className="mt-4 text-md leading-6 text-emerald-50/80">
              {page.company.websiteValue} · {page.mailtoRecipient} ·{" "}
              {page.phoneValue}
            </p>
            <p className="mt-2 font-mono text-md text-emerald-100/70">
              {page.documentReference}
            </p>
          </section>

          <div className="flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex items-start gap-3 text-md leading-6 text-slate-700">
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
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-800 px-6 py-3 text-md font-bold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
            >
              {page.submit}
            </button>
          </div>
          <p className="text-right text-md text-slate-500">
            {page.requiredFieldsNote}
          </p>
          {feedback && (
            <p
              role="status"
              aria-live="polite"
              className="rounded-lg bg-emerald-50 p-3 text-md font-semibold text-emerald-800"
            >
              {feedback}
            </p>
          )}
        </form>
        <aside className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
          <h2 className="mb-4 text-md font-black uppercase tracking-wide text-slate-900">
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
                      className="flex gap-2 rounded-lg px-2 py-1.5 text-md leading-5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <span className="font-mono font-bold text-emerald-700">
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
