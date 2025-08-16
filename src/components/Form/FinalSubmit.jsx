import { useNavigate } from "react-router-dom";

function FinalSubmitPage({ data, onSubmit }) {
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
    if (typeof value === "object") return Object.values(value).join(", ");
    return value.toString();
  };

  return (
    <div className="max-w-5xl p-8 mx-auto mt-8 shadow-2xl rounded-xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <h2 className="mb-8 text-4xl font-extrabold text-center text-indigo-700">
        Final Submission Preview
      </h2>

      <div className="p-6 bg-white divide-y divide-gray-200 shadow-lg rounded-xl">
        {Object.entries(data).map(([key, value], index) => (
          <div
            key={key}
            className={`flex justify-between py-3 px-4 rounded-lg ${
              index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
            } hover:bg-purple-50 transition`}
          >
            <div className="font-semibold text-gray-700 capitalize">{key}</div>
            <div className="text-gray-900">{formatValue(value)}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
        <button
          onClick={handleClick}
          className="w-full px-8 py-3 text-lg font-semibold text-white transition-all bg-blue-600 rounded-lg shadow-lg md:w-auto hover:bg-blue-700 hover:scale-105"
        >
          Final Submit
        </button>
      </div>
    </div>
  );
}

export default FinalSubmitPage;
