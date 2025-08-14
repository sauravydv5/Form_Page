import { useNavigate } from "react-router-dom";

export default function FinalSubmitPage({ data, onSubmit }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Generate application number
    const appNumber = onSubmit(); // assumes onSubmit returns a number
    const name = data.name || "N/A";

    // Show success alert
    alert(`Application submitted successfully!\nApplication No: ${appNumber}`);

    // Navigate to Confirmation page with all data
    navigate("/confirmation", { state: { data, appNumber, name } });
  };

  const formatValue = (value) => {
    if (!value) return "-";
    if (value instanceof File) return value.name;
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return JSON.stringify(value);
    return value.toString();
  };

  return (
    <div className="max-w-4xl p-6 mx-auto mt-6 rounded-lg shadow-lg bg-gray-50">
      <h2 className="mb-6 text-3xl font-extrabold text-center text-blue-700">
        Final Submission
      </h2>

      <div className="p-6 bg-white divide-y rounded-lg shadow">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between py-3">
            <div className="font-semibold text-gray-700 capitalize">{key}</div>
            <div className="text-gray-900">{formatValue(value)}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleClick}
          className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Final Submit
        </button>
      </div>
    </div>
  );
}
