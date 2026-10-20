export default function SavingsCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="text-sm text-gray-500">
        {title}
      </div>
      <div className="text-xl font-bold mt-2">
        {value}
      </div>
    </div>
  );
}