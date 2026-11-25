import type { Translations } from "@/lib/LocaleContext";
import { CustomerEnquirySectionTitle, CustomerEnquiryTextField } from "./CustomerEnquiryFormFields";

type CustomerEnquiryCopy = Translations["customerEnquiryPage"];

export function CustomerEnquiryPricingSection({ page }: { page: CustomerEnquiryCopy }) {
  return (
    <section className="rounded-xl border border-emerald-200 bg-gradient-to-br from-[#f1f2f6] to-white p-5">
      <CustomerEnquirySectionTitle number="06" title={page.sections[5]} />
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
          <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
            <tr>
              <th className="px-3 py-3">{page.serialNumber}</th>
              <th className="px-3 py-3">{page.descriptionLabel}</th>
              <th className="px-3 py-3">{page.amountRupees}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-100">
            {page.priceItems.map((item, index) => (
              <tr
                key={item}
                className="border-t border-slate-200 odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70"
              >
                <td className="px-3 py-2">{index + 1}</td>
                <td className="px-3 py-2">{item}</td>
                <td className="px-3 py-2">
                  <input
                    name={`price_item_${index + 1}`}
                    type="number"
                    min={0}
                    step="0.01"
                    placeholder="0.00"
                    aria-label={`${item} ${page.amountInRupees}`}
                    className="min-h-9 w-full rounded-lg border border-slate-200 px-2"
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
                className="border-t border-slate-200 odd:bg-white even:bg-emerald-50/70 font-semibold transition-colors hover:bg-emerald-100/70 tracking-normal"
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
                    placeholder="0.00"
                    aria-label={`${label} ${page.amountInRupees}`}
                    className="min-h-9 w-full rounded-lg border border-slate-200 px-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <CustomerEnquiryTextField
          label={page.totalAmountInWords}
          name="total_amount_words"
          required
          placeholder={page.totalAmountPlaceholder}
        />
        <CustomerEnquiryTextField
          label={page.gstTreatmentNotes}
          name="gst_treatment"
          placeholder={page.gstPlaceholder}
        />
      </div>
      <p className="mt-3 text-slate-600      text-sm sm:text-base font-normal tracking-normal leading-6 sm:leading-7">
        {page.gstNote}
      </p>
    </section>
  );
}
