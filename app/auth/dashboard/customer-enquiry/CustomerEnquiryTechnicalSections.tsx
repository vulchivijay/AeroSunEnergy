import type { Translations } from "@/lib/LocaleContext";
import {
  CustomerEnquiryEditableTable,
  CustomerEnquirySectionTitle,
  CustomerEnquirySelectField,
  CustomerEnquiryTextField,
} from "./CustomerEnquiryFormFields";

type CustomerEnquiryCopy = Translations["customerEnquiryPage"];

export function CustomerEnquiryTechnicalSections({
  page,
}: {
  page: CustomerEnquiryCopy;
}) {
  return (
    <>
      <section className="rounded-xl border border-sky-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <CustomerEnquirySectionTitle number="07" title={page.sections[6]} />
        <CustomerEnquiryEditableTable
          rowHeader={page.parameter}
          headers={[page.estimatedValue, page.unit]}
          rows={page.generationParameters.map(({ label, name, unit }) => ({
            label,
            unit,
            fields: [{ label, name, type: "number", min: 0, step: "any" }],
          }))}
        />
        <h3 className="mb-3 mt-5 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
          {page.generationAssumptions}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.generationAssumptionFields.map(({ label, name }) => (
            <CustomerEnquiryTextField key={name} label={label} name={name} />
          ))}
        </div>
        <p className="mt-4 rounded-xl bg-amber-50 p-4 text-amber-950 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.generationDisclaimer}
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-[#f1f2f6] to-white p-5">
        <CustomerEnquirySectionTitle number="08" title={page.sections[7]} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.financialParameters.map((parameter) => (
            <CustomerEnquiryTextField
              key={parameter.name}
              label={`${parameter.label} (${parameter.unit})`}
              name={parameter.name}
              type="number"
              min={0}
              step="any"
            />
          ))}
        </div>
        <h3 className="mb-3 mt-5 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
          {page.calculationAssumptions}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <CustomerEnquiryTextField
            label={page.electricityTariff}
            name="electricity_tariff"
            type="number"
            min={0}
            step="any"
          />
          <CustomerEnquiryTextField
            label={page.financialSelfConsumption}
            name="financial_self_consumption"
            type="number"
            min={0}
            max={100}
            step="any"
          />
          <CustomerEnquiryTextField
            label={page.exportCompensation}
            name="export_compensation"
            type="number"
            min={0}
            step="any"
          />
          <CustomerEnquiryTextField
            label={page.annualDegradation}
            name="annual_degradation"
            type="number"
            min={0}
            max={100}
            step="any"
          />
          <CustomerEnquirySelectField
            label={page.fixedDemandCharges}
            name="fixed_demand_charges"
            options={page.fixedDemandOptions}
            placeholder={page.selectOption}
          />
        </div>
        <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.savingsDisclaimer}
        </p>
      </section>

      <section className="rounded-xl border border-emerald-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <CustomerEnquirySectionTitle number="09" title={page.sections[8]} />
        <p className="mb-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.scopeInstructions}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.scopeActivities.map((activity, index) => (
            <CustomerEnquirySelectField
              key={activity}
              label={activity}
              name={`scope_activity_${index + 1}`}
              options={page.includedExcludedOptions}
              placeholder={page.selectOption}
            />
          ))}
        </div>
        <h3 className="mb-3 mt-6 text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
          {page.scheduleTitle}
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {page.scheduleActivities.map((activity, index) => (
            <CustomerEnquiryTextField
              key={activity}
              label={`${activity}${page.estimatedDuration}`}
              name={`schedule_duration_${index + 1}`}
              placeholder={page.durationPlaceholder}
            />
          ))}
        </div>
        <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.scheduleNote}
        </p>
      </section>

      <section className="rounded-xl border border-amber-200 bg-gradient-to-br from-[#f1f2f6] to-white p-5">
        <CustomerEnquirySectionTitle number="10" title={page.sections[9]} />
        <p className="mb-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.exclusionsIntro}
        </p>
        <ol className="grid gap-2 sm:grid-cols-2">
          {page.exclusions.map((item, index) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl bg-white p-3 text-base leading-5 text-slate-700"
            >
              <span className="font-mono font-bold text-amber-700 tracking-normal tabular-nums">
                {index + 1}.
              </span>
              {item}
            </li>
          ))}
        </ol>
        <label className="mt-4 block text-xs sm:text-sm font-semibold tracking-normal leading-5">
          <span className="mb-1.5 block text-base font-bold text-slate-700 tracking-normal">
            {page.additionalWork}
          </span>
          <textarea
            name="additional_work"
            rows={2}
            placeholder={page.additionalWorkPlaceholder}
            className="w-full min-w-0 max-w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-base"
          />
        </label>
      </section>

      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <CustomerEnquirySectionTitle number="11" title={page.sections[10]} />
        <CustomerEnquiryEditableTable
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
        <p className="mt-4 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.warrantyCoverageNote}
        </p>
      </section>
    </>
  );
}
