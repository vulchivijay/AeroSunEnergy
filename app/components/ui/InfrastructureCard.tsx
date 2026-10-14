export default function InfrastructureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg mb-2">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}