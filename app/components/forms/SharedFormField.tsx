import { useId, type InputHTMLAttributes } from 'react'
import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form'
import { INDIAN_MOBILE_HTML_PATTERN, MAX_EMAIL_LENGTH } from '@/lib/validation/contact'

type SharedFormFieldProps<TFieldValues extends FieldValues> = {
  label: string
  name?: FieldPath<TFieldValues>
  placeholder?: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  register: UseFormRegister<TFieldValues>
  error?: { message?: string }
  wrapperClassName?: string
  labelClassName: string
  inputClassName: string
  errorClassName: string
}

export function SharedFormField<TFieldValues extends FieldValues>({
  label,
  name,
  placeholder,
  type = 'text',
  register,
  error,
  wrapperClassName,
  labelClassName,
  inputClassName,
  errorClassName,
}: SharedFormFieldProps<TFieldValues>) {
  const generatedId = useId()
  const inputId = name ?? generatedId

  return (
    <div className={wrapperClassName}>
      <label htmlFor={inputId} className={labelClassName}>
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        maxLength={type === 'email' ? MAX_EMAIL_LENGTH : type === 'tel' ? 13 : undefined}
        inputMode={type === 'tel' ? 'tel' : undefined}
        pattern={type === 'tel' ? INDIAN_MOBILE_HTML_PATTERN : undefined}
        {...(name ? register(name) : {})}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={inputClassName}
      />
      {error && <p id={`${inputId}-error`} className={errorClassName}>{error.message}</p>}
    </div>
  )
}
