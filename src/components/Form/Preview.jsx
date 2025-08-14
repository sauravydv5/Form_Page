import { useNavigate } from "react-router-dom";

export default function PreviewPage({ data }) {
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    if (window.confirm("Are you sure you want to submit your application?")) {
      // alert("Your application has been submitted successfully!");
      navigate("/final");
    }
  };

  const formatValue = (v) => {
    if (!v) return "-";
    if (typeof v === "object") {
      if (v.name) return v.name;
      return JSON.stringify(v);
    }
    return v.toString();
  };

  return (
    <div className="max-w-4xl p-6 mx-auto mt-6 rounded-lg shadow-lg bg-gray-50">
      <h2 className="mb-6 text-3xl font-extrabold text-center text-blue-700">
        Preview Your Application
      </h2>

      <div className="p-6 bg-white divide-y rounded-lg shadow">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between py-3">
            <div className="font-semibold text-gray-700 capitalize">{key}</div>
            <div className="text-gray-900">{formatValue(value)}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => navigate("/form")}
          className="px-6 py-2 font-semibold text-white transition bg-gray-500 rounded-lg hover:bg-gray-600"
        >
          Edit
        </button>
        <button
          onClick={handleFinalSubmit}
          className="px-6 py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Final Submit
        </button>
      </div>
    </div>
  );
}
