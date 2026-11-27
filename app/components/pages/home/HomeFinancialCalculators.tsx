import { BankEMICalculator } from "@/app/components/forms/BankEMICalculator";
import { SolarEstimation } from "@/app/components/forms/SolarEstimation";
export function HomeFinancialCalculators() {

  return (
    <>
      <SolarEstimation showGstGuide={false} />
      <BankEMICalculator />
    </>
  )
}
