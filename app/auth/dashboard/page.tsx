import DashboardDataTabs from './DashboardDataTabs'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto w-full max-w-[1600px]">
        <h1 className="sr-only text-3xl sm:text-4xl lg:text-5xl font-semibold !tracking-tight leading-tight">
          Dashboard
        </h1>
        <DashboardDataTabs />
      </div>
    </main>
  )
}
