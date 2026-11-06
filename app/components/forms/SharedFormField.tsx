import { useId, type InputHTMLAttributes } from 'react'
import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form'

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
