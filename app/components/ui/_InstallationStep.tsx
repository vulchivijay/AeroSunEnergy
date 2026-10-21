export default function InstallationStep({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-xl p-4 text-center">
      <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-3">
        {step}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">
        {description}
      </p>
    </div>
  );
}