import type { Translations } from "@/lib/LocaleContext";
import {
  CustomerEnquiryChoiceGroup,
  CustomerEnquiryEditableTable,
  CustomerEnquirySectionTitle,
  CustomerEnquirySelectField,
  CustomerEnquiryTextField,
} from "./CustomerEnquiryFormFields";

type CustomerEnquiryCopy = Translations["customerEnquiryPage"];

export function CustomerEnquiryProjectSections({
  page,
}: {
  page: CustomerEnquiryCopy;
}) {
  return (
    <>
      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <CustomerEnquirySectionTitle number="01" title={page.sections[0]} />
        <div className="grid grid-cols-1 gap-3 text-base text-slate-700">
          <p>
            <strong className="tracking-normal">{page.companyName}</strong>
          </p>
          <p>
            <strong className="tracking-normal">{page.company.cin}</strong> {page.company.cinValue}
          </p>
          <p className="sm:col-span-2 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            <strong className="tracking-normal">{page.company.registeredOffice}</strong>{" "}
            {page.company.registeredOfficeValue}
          </p>
          <p>
            <strong className="tracking-normal">{page.company.msme}</strong> {page.company.msmeValue}
          </p>
          <p>
            <strong className="tracking-normal">{page.company.startupIndia}</strong>{" "}
            {page.company.startupIndiaValue}
          </p>
          <p>
            <strong className="tracking-normal">{page.company.website}</strong>{" "}
            {page.company.websiteValue}
          </p>
          <p>
            <strong className="tracking-normal">{page.company.email}</strong> {page.contactEmail}
          </p>
          <p>
            <strong className="tracking-normal">{page.company.phone}</strong> {page.phoneValue}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-sky-200 bg-gradient-to-br from-[#f1f2f6] to-white p-5">
        <CustomerEnquirySectionTitle number="02" title={page.sections[1]} />
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          <CustomerEnquiryTextField
            label={page.customerName}
            name="customer_name"
            required
            minLength={2}
            placeholder={page.customerNamePlaceholder}
          />
          <CustomerEnquiryTextField
            label={page.companyOrganisation}
            name="company_organisation"
            placeholder={page.ifApplicable}
          />
          <CustomerEnquiryTextField
            label={page.contactPerson}
            name="contact_person"
            required
            minLength={2}
          />
          <CustomerEnquiryTextField
            label={page.mobileNumber}
            name="mobile_number"
            type="tel"
            required
            minLength={10}
            maxLength={13}
            pattern="(?:\+?91)?[6-9][0-9]{9}"
            placeholder={page.mobileNumberPlaceholder}
          />
          <CustomerEnquiryTextField
            label={page.emailAddress}
            name="customer_email"
            type="email"
            required
            maxLength={254}
            placeholder={page.emailPlaceholder}
          />
          <CustomerEnquiryTextField
            label={page.customerEnquiryReference}
            name="customer_enquiry_reference"
          />
          <CustomerEnquiryTextField
            label={page.installationAddress}
            name="installation_address"
            required
            className="sm:col-span-2 lg:col-span-3"
          />
          <CustomerEnquiryTextField label={page.district} name="district" required />
          <CustomerEnquiryTextField label={page.state} name="state" required />
          <CustomerEnquiryTextField
            label={page.pinCode}
            name="pin_code"
            required
            pattern="[0-9]{6}"
            placeholder={page.pinCodePlaceholder}
          />
          <CustomerEnquirySelectField
            label={page.customerCategory}
            name="customer_category"
            required
            options={page.customerCategories}
            placeholder={page.selectOption}
          />
          <CustomerEnquiryTextField
            label={page.siteSurveyDate}
            name="site_survey_date"
            type="date"
          />
        </div>
      </section>

      <section className="rounded-xl border border-emerald-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <CustomerEnquirySectionTitle number="03" title={page.sections[2]} />
        <div className="grid grid-cols-1 gap-3">
          <CustomerEnquiryTextField
            label={page.projectName}
            name="project_name"
            required
            placeholder={page.projectNamePlaceholder}
          />
          <CustomerEnquiryTextField
            label={page.proposedCapacity}
            name="proposed_capacity_kwp"
            type="number"
            min={0.01}
            step="any"
            required
          />
          <CustomerEnquiryChoiceGroup
            legend={page.systemConfiguration}
            name="system_configuration"
            required
            options={page.systemConfigurations}
          />
          <CustomerEnquiryChoiceGroup
            legend={page.installationType}
            name="installation_type"
            required
            options={page.installationTypes}
          />
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="text-slate-900 text-xl sm:text-2xl font-semibold !tracking-tight leading-snug">
            {page.projectObjective}
          </h3>
          <p className="mt-2 text-slate-700 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
            {page.projectObjectiveCopy}
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-[#f1f2f6] to-white p-5">
        <CustomerEnquirySectionTitle number="04" title={page.sections[3]} />
        <CustomerEnquiryEditableTable
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
                  "type" in item && item.type === "number" ? "number" : "text",
                min: "type" in item && item.type === "number" ? 0 : undefined,
                step:
                  "type" in item && item.type === "number"
                    ? "any"
                    : undefined,
              },
            ],
          }))}
        />
        <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.technicalSpecificationNote}
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f1f2f6] p-5">
        <CustomerEnquirySectionTitle number="05" title={page.sections[4]} />
        <CustomerEnquiryEditableTable
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
        <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
          {page.billOfMaterialsNote}
        </p>
      </section>
    </>
  );
}
