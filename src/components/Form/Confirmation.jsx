import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ConfirmationPage() {
  const printRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const [appData] = useState(() => {
    const stateData = location.state;
    if (stateData) {
      sessionStorage.setItem("confirmationData", JSON.stringify(stateData));
      return stateData;
    }
    const saved = sessionStorage.getItem("confirmationData");
    return saved ? JSON.parse(saved) : { data: {}, appNumber: "-", name: "-" };
  });

  const { data, appNumber, name } = appData;

  const handlePrint = () => {
    window.print();
  };

  const handleGoDashboard = () => {
    navigate("/dashboard", { state: { appNumber, name } });
  };

  const formatValue = (value) => {
    if (!value) return "-";
    if (value instanceof File) return value.name;
    if (Array.isArray(value)) return value.join(", ");
    if (typeof value === "object") return Object.values(value).join(", ");
    return String(value);
  };

  return (
    <div className="max-w-5xl p-6 mx-auto mt-8 shadow-xl rounded-xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <CheckCircleIcon className="text-green-600 w-14 h-14 animate-bounce" />
        <h2 className="mt-4 text-4xl font-extrabold text-indigo-700">
          Application Submitted Successfully!
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Thank you, <span className="font-semibold">{name}</span>! Your
          application number is{" "}
          <span className="font-semibold">{appNumber}</span>.
        </p>
      </div>

      {/* Printable Content */}
      <div
        ref={printRef}
        className="p-6 space-y-6 bg-white border border-gray-200 shadow-lg rounded-xl"
      >
        <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-indigo-50">
          <p className="font-semibold text-gray-700">Application Number:</p>
          <p className="text-gray-800">{appNumber || "-"}</p>
          <p className="font-semibold text-gray-700">Name:</p>
          <p className="text-gray-800">{name || "-"}</p>
        </div>

        <table className="w-full border-collapse">
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr
                key={key}
                className="transition border-b bg-gradient-to-r from-white to-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50"
              >
                <td className="p-3 font-medium text-gray-700 capitalize bg-gray-100">
                  {key}
                </td>
                <td className="p-3 text-gray-800">{formatValue(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center justify-center gap-4 mt-8 md:flex-row">
        <button
          onClick={handlePrint}
          className="w-full px-6 py-3 text-lg font-semibold text-white transition-all bg-green-500 rounded-lg shadow-md hover:bg-green-600 hover:scale-105 md:w-auto"
        >
          Print
        </button>
        <button
          onClick={handleGoDashboard}
          className="w-full px-6 py-3 text-lg font-semibold text-white transition-all bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105 md:w-auto"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
