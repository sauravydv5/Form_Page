import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // optional icon for success

export default function ConfirmationPage() {
  const printRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const { data = {}, appNumber, name } = location.state || {};

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const handleGoDashboard = () => {
    navigate("/dashboard", { state: { appNumber, name } });
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
      {/* Success Message */}
      <div className="flex items-center justify-center mb-6 text-green-700">
        <CheckCircleIcon className="w-10 h-10 mr-2" />
        <h2 className="text-3xl font-extrabold">
          Application Submitted Successfully!
        </h2>
      </div>

      <div ref={printRef} className="p-6 bg-white divide-y rounded-lg shadow">
        <div className="mb-4">
          <p>
            <strong>Application Number:</strong> {appNumber || "-"}
          </p>
          <p>
            <strong>Name:</strong> {name || "-"}
          </p>
        </div>

        <table className="w-full mt-4 border-collapse">
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr
                key={key}
                className="transition border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="p-3 font-semibold capitalize bg-gray-100">
                  {key}
                </td>
                <td className="p-3">{formatValue(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={handlePrint}
          className="px-6 py-3 font-semibold text-white transition bg-green-500 rounded-lg shadow-lg hover:bg-green-600"
        >
          Print
        </button>
        <button
          onClick={handleGoDashboard}
          className="px-6 py-3 font-semibold text-white transition bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
