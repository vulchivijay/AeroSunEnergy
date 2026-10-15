import BenefitCard from "@/app/components/ui/BenefitCard";
import StepCard from "@/app/components/ui/StepCard";
import SavingsCard from "@/app/components/SavingsCard";
import { OptionCard } from "@/app/components/Cards";
import TimelineItem from "@/app/components/ui/TimelineItem";
import InstallationStep from "@/app/components/ui/InstallationStep";
import WeatherPerformance from "@/app/components/ui/SolarPerf";


export default function Installation() {
  return (
	<div className="max-w-7xl mx-auto p-6">
		<div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
			<h1 className="text-4xl font-bold mb-4">
			Why Switch to Solar Energy?
			</h1>

			<p className="text-lg">
			Reduce electricity bills, enjoy government subsidies,
			increase property value, and contribute to a greener future.
			</p>
		</div>

		{/* Benefits */}
		<section className="mt-10">
			<h2 className="text-2xl font-bold mb-6">
			Key Benefits for You
			</h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				<BenefitCard
				title="Save on Electricity Bills"
				description="Generate your own electricity and significantly reduce monthly power bills."
				icon="💰"
				/>

				<BenefitCard
				title="Government Subsidy"
				description="Eligible residential customers can receive subsidy support that reduces overall investment cost."
				icon="🏛️"
				/>

				<BenefitCard
				title="25+ Years Lifespan"
				description="Modern solar panels are designed to operate efficiently for decades."
				icon="☀️"
				/>

				<BenefitCard
				title="Fast Return on Investment"
				description="Many customers recover their investment through electricity savings within a few years."
				icon="📈"
				/>

				<BenefitCard
				title="Increase Property Value"
				description="Solar-powered homes are attractive and energy efficient."
				icon="🏠"
				/>

				<BenefitCard
				title="Eco-Friendly Energy"
				description="Reduce carbon emissions and support a cleaner environment."
				icon="🌱"
				/>
			</div>
		</section>

		{/* How It Works */}
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-6">
			How Solar Works
			</h2>

			<div className="grid md:grid-cols-4 gap-4">
				<StepCard
				step="1"
				title="Sunlight"
				description="Solar panels capture sunlight."
				/>

				<StepCard
				step="2"
				title="Power Generation"
				description="Panels convert sunlight into electricity."
				/>

				<StepCard
				step="3"
				title="Power Usage"
				description="Electricity powers your home."
				/>

				<StepCard
				step="4"
				title="Savings"
				description="Reduce dependency on grid electricity."
				/>
			</div>
		</section>

		{/* Solar Performance */}
		<WeatherPerformance />

		{/* Installation Process */}
		<section className="mt-12">
			<h2 className="text-2xl font-bold mb-6">
			Installation Process
			</h2>

			<div className="grid md:grid-cols-6 gap-4">
			<InstallationStep
			step="1"
			title="Site Survey"
			description="Assess rooftop area, shadow analysis, and electrical requirements."
			/>

			<InstallationStep
			step="2"
			title="System Design"
			description="Recommend optimal solar capacity based on electricity consumption."
			/>

			<InstallationStep
			step="3"
			title="Quotation Approval"
			description="Finalize pricing, subsidy eligibility, and financing options."
			/>

			<InstallationStep
			step="4"
			title="Installation"
			description="Mount panels, inverter, cabling, earthing, and safety equipment."
			/>

			<InstallationStep
			step="5"
			title="Testing"
			description="Perform quality checks, electrical testing, and commissioning."
			/>

			<InstallationStep
			step="6"
			title="Net Meter Activation"
			description="Grid synchronization and net meter approval by electricity department."
			/>
			</div>
			<section className="mt-12">
				<div className="rounded-xl border bg-blue-50 p-6">
				<h2 className="text-2xl font-bold mb-4">
				Expected Timeline
				</h2>

				<div className="space-y-3">
				<TimelineItem
				title="Site Survey"
				duration="1 Day"
				/>

				<TimelineItem
				title="Quotation & Approval"
				duration="1-2 Days"
				/>

				<TimelineItem
				title="Material Procurement"
				duration="2-5 Days"
				/>

				<TimelineItem
				title="Installation"
				duration="1-3 Days"
				/>

				<TimelineItem
				title="Testing & Commissioning"
				duration="1 Day"
				/>

				<TimelineItem
				title="Net Meter Approval"
				duration="7-30 Days"
				/>
				</div>
				</div>
			</section>
		</section>

		{/* Purchase Options */}
		<section className="mt-12">
		<h2 className="text-2xl font-bold mb-6">
		Available Purchase Options
		</h2>

		<div className="grid md:grid-cols-3 gap-6">
		<OptionCard
		title="Full Payment"
		description="One-time investment with maximum long-term savings."
		/>

		<OptionCard
		title="EMI Financing"
		description="Convert your solar investment into easy monthly installments."
		/>

		<OptionCard
		title="Loan Assistance"
		description="Avail financing support through partnered institutions."
		/>
		</div>
		</section>

		{/* Example Savings */}
		<section className="mt-12">
		<div className="bg-green-50 border rounded-xl p-6">
		<h2 className="text-2xl font-bold mb-4">
		Example Savings
		</h2>

		<div className="grid md:grid-cols-4 gap-4">
		<SavingsCard
		title="Monthly Bill"
		value="₹4,000"
		/>

		<SavingsCard
		title="Annual Savings"
		value="₹48,000"
		/>

		<SavingsCard
		title="25-Year Savings"
		value="₹12,00,000+"
		/>

		<SavingsCard
		title="CO₂ Reduction"
		value="Significant"
		/>
		</div>
		</div>
		</section>

		{/* CTA */}
		<section className="mt-12">
		<div className="bg-blue-50 border rounded-xl p-8 text-center">
		<h2 className="text-3xl font-bold mb-4">
		Start Saving with Solar Today
		</h2>

		<p className="text-gray-600 mb-6">
		Get a customized solar solution based on your
		electricity consumption and roof area.
		</p>

		<button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
		Request Free Consultation
		</button>
		</div>
		</section>
	</div>
  );
}
