import { CustomerEnquiryForm } from '@/app/components/forms/CustomerEnquiryForm'
import FormWarningRibbon from '@/app/components/ui/FormWarningRibbon'

export default function CustomerEnquiryPage() {
  return (
    <>
      <FormWarningRibbon />
      <CustomerEnquiryForm />
    </>
  )
}
