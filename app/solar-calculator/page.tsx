import { SolarEstimation } from '@/app/components/forms/SolarEstimation'
import { BankEMICalculator } from '../components/forms/BankEMICalculator'
import { TrustRibbon } from '@/app/components/ui/TrustRibbon'

export default function EstimationCalculatorPage() {
  return <>
    <TrustRibbon />
    <SolarEstimation />
    <BankEMICalculator />
  </>
}
