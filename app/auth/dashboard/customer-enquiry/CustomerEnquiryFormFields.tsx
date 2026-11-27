type SectionTitleProps = { number: string; title: string };

export function CustomerEnquirySectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="mb-5 flex items-center gap-3 border-b border-slate-200 pb-3">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-700 font-mono text-base font-bold text-white tracking-normal tabular-nums">
        {number}
      </span>
      <h2
        id={`quotation-section-${number}`}
        className="scroll-mt-28 uppercase text-slate-900 text-2xl sm:text-3xl font-semibold !tracking-tight leading-snug"
      >
        {title}
      </h2>
    </div>
  );
}

type TextFieldProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "date" | "number";
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  maxLength?: number;
  minLength?: number;
  step?: number | "any";
  pattern?: string;
  className?: string;
  labelTextClassName?: string;
};

export function CustomerEnquiryTextField({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  min,
  max,
  maxLength,
  minLength,
  step,
  pattern,
  className = "",
  labelTextClassName = "text-slate-700",
}: TextFieldProps) {
  return (
    <label className={`block min-w-0 ${className} text-xs sm:text-sm font-semibold tracking-normal leading-5`}>
      <span className={`mb-1.5 block text-base font-bold ${labelTextClassName} tracking-normal`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder ?? (type === "date" ? undefined : label)}
        min={min}
        max={max}
        maxLength={maxLength}
        minLength={minLength}
        step={step}
        pattern={pattern}
        className="min-h-10 w-full min-w-0 max-w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
      />
    </label>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  placeholder: string;
};

export function CustomerEnquirySelectField({
  label,
  name,
  options,
  required = false,
  placeholder,
}: SelectFieldProps) {
  return (
    <label className="block min-w-0 text-xs sm:text-sm font-semibold tracking-normal leading-5">
      <span className="mb-1.5 block text-base font-bold text-slate-700 tracking-normal">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="min-h-10 w-full min-w-0 max-w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
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

type EditableTableProps = {
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
};

export function CustomerEnquiryEditableTable({
  rowHeader,
  headers,
  rows,
}: EditableTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm text-slate-800 [&_th]:border-b [&_th]:border-slate-200 [&_td]:border-b [&_td]:border-slate-200 [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3">
        <thead className="bg-amber-700 uppercase text-white text-xs font-semibold tracking-wide leading-5">
          <tr>
            <th className="border-b border-r border-slate-200 px-3 py-2.5">
              {rowHeader}
            </th>
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-r border-slate-200 px-3 py-2.5 last:border-r-0"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-emerald-100">
          {rows.map((row) => (
            <tr key={row.label} className="odd:bg-white even:bg-emerald-50/70 transition-colors hover:bg-emerald-100/70">
              <th
                scope="row"
                className="min-w-52 border-b border-r border-slate-200 px-3 py-2 text-left font-semibold text-slate-700 tracking-normal"
              >
                {row.label}
              </th>
              {row.fields.map((field) => (
                <td
                  key={field.name}
                  className="min-w-36 border-b border-r border-slate-200 px-2 py-1.5 last:border-r-0"
                >
                  <input
                    name={field.name}
                    type={field.type ?? "text"}
                    min={field.min}
                    step={field.step}
                    placeholder={field.label}
                    aria-label={`${row.label}: ${field.label}`}
                    className="min-h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-base text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </td>
              ))}
              {row.unit !== undefined && (
                <td className="border-b border-slate-200 px-3 py-2.5 text-slate-600">
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

type ChoiceGroupProps = {
  legend: string;
  name: string;
  options: string[];
  required?: boolean;
};

export function CustomerEnquiryChoiceGroup({
  legend,
  name,
  options,
  required = false,
}: ChoiceGroupProps) {
  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-base font-bold text-slate-700 tracking-normal">
        {legend}
        {required && <span aria-hidden="true"> *</span>}
      </legend>
      <div className="grid grid-cols-1 gap-2">
        {options.map((option, index) => (
          <label
            key={option}
            className="flex min-w-0 items-start gap-2 rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 text-xs sm:text-sm font-semibold tracking-normal leading-5"
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
