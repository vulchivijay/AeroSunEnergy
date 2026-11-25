import { useForm } from "react-hook-form";
import { SharedFormField } from "@/app/components/forms/SharedFormField";
import type { AgreementFormValues } from "./customerAgreementFormTypes";

type FieldProps = {
  label: string;
  name?: keyof AgreementFormValues;
  placeholder: string;
  type?: string;
  register: ReturnType<typeof useForm<AgreementFormValues>>["register"];
  error?: { message?: string };
  compact?: boolean;
  dark?: boolean;
};

export function CustomerAgreementField({
  label,
  name,
  placeholder,
  type = "text",
  register,
  error,
  compact = false,
  dark = false,
}: FieldProps) {
  return (
    <SharedFormField
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      register={register}
      error={error}
      wrapperClassName={compact ? "" : "md:col-span-2"}
      labelClassName={`mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-wide leading-5 ${dark ? "text-slate-200" : "text-slate-700"}`}
      inputClassName={`h-11 w-full rounded-lg border px-4 py-3 text-sm sm:text-base font-normal tracking-normal leading-6 outline-none transition-all duration-200 placeholder:text-slate-600 focus:ring-4 ${dark ? "border-slate-700 bg-white/5 text-white placeholder:text-slate-400 focus:border-indigo-400 focus:ring-indigo-600/30" : "border-slate-200 bg-white text-slate-900 focus:border-sky-500 focus:ring-sky-100"}`}
      errorClassName="mt-2 text-xs sm:text-sm font-normal tracking-normal leading-5 text-rose-300"
    />
  );
}
