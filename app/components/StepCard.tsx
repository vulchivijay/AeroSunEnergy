type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

export default function StepCard({
  step,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="border rounded-xl p-6 text-center">
      <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        {step}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}