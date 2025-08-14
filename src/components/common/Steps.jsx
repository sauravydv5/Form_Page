const steps = [
  { id: 1, label: "Form" },
  { id: 2, label: "Preview" },
  { id: 3, label: "Final Submit" },
  { id: 4, label: "Confirmation" },
];

export default function Steps({ current }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-3">
      <div className="flex items-center gap-2 text-sm flex-wrap">
        {steps.map((s, idx) => (
          <div key={s.id} className="flex items-center">
            <div
              className={`px-2 py-1 rounded ${
                current >= s.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {s.label}
            </div>
            {idx < steps.length - 1 && (
              <div className="mx-2 text-gray-400">›</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
