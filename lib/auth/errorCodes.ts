export const authErrorCodes = {
  invalidInput: 'invalidInput',
  nameRequired: 'nameRequired',
  nameTooLong: 'nameTooLong',
  emailInvalid: 'emailInvalid',
  passwordRequired: 'passwordRequired',
  passwordTooShort: 'passwordTooShort',
  passwordTooLong: 'passwordTooLong',
  confirmPasswordRequired: 'confirmPasswordRequired',
  passwordMismatch: 'passwordMismatch',
  duplicateAccount: 'duplicateAccount',
  invalidCredentials: 'invalidCredentials',
  signupUnavailable: 'signupUnavailable',
  loginUnavailable: 'loginUnavailable',
  invalidRequestContentType: 'invalidRequestContentType',
  requestTooLarge: 'requestTooLarge',
  invalidRequestJson: 'invalidRequestJson',
  networkError: 'networkError',
  genericError: 'genericError',
} as const

export type AuthErrorCode = keyof typeof authErrorCodes

export function isAuthErrorCode(value: unknown): value is AuthErrorCode {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(authErrorCodes, value)
}
