type FaqCardProps = {
  question: string;
  answer: string;
};

export default function FaqCard({ question, answer }: FaqCardProps) {
  return (
    <div className="border rounded-xl p-5">
      <h3 className="font-semibold text-lg mb-2">
        {question}
      </h3>

      <p className="text-gray-600">
        {answer}
      </p>
    </div>
  );
}