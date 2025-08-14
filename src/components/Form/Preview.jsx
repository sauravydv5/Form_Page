import { useNavigate } from "react-router-dom";

export default function PreviewPage({ data }) {
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    if (window.confirm("Are you sure you want to submit your application?")) {
      navigate("/final");
    }
  };

  const formatValue = (v) => {
    if (!v) return "-";
    if (v instanceof File) return v.name;
    if (Array.isArray(v)) return v.join(", ");
    if (typeof v === "object") {
      if (v.name) return v.name;
      return Object.values(v).join(", ");
    }
    return v.toString();
  };

  return (
    <div className="max-w-5xl p-8 mx-auto mt-8 shadow-2xl rounded-xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <h2 className="mb-8 text-4xl font-extrabold text-center text-indigo-700">
        Preview Your Application
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
          onClick={() => navigate("/form")}
          className="w-full px-8 py-3 text-lg font-semibold text-white transition-all bg-gray-500 rounded-lg shadow-md md:w-auto hover:bg-gray-600 hover:scale-105"
        >
          Edit
        </button>
        <button
          onClick={handleFinalSubmit}
          className="w-full px-8 py-3 text-lg font-semibold text-white transition-all bg-blue-600 rounded-lg shadow-md md:w-auto hover:bg-blue-700 hover:scale-105"
        >
          Final Submit
        </button>
      </div>
    </div>
  );
}
