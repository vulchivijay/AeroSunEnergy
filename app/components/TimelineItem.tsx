type TimelineItemProps = {
  title: string;
  duration: string;
  description?: string;
  isLast?: boolean;
};

export default function TimelineItem({
  title,
  duration,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-blue-600" />

        {!isLast && (
          <div className="w-px flex-1 bg-gray-300 min-h-10" />
        )}
      </div>

      <div className="flex-1 pb-6">
        <div className="flex justify-between">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-blue-600 text-sm">
            {duration}
          </span>
        </div>

        {description && (
          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}