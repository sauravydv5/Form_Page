import { useEffect, useState } from "react";

export default function DashboardPage({
  appNumber: initialAppNumber,
  name: initialName,
}) {
  const [appNumber, setAppNumber] = useState("-");
  const [name, setName] = useState("-");

  // Load data from props or sessionStorage
  useEffect(() => {
    const savedData = sessionStorage.getItem("dashboardData");
    if (savedData) {
      const { appNumber, name } = JSON.parse(savedData);
      setAppNumber(appNumber || "-");
      setName(name || "-");
    } else {
      setAppNumber(initialAppNumber || "-");
      setName(initialName || "-");
      if (initialAppNumber && initialName) {
        sessionStorage.setItem(
          "dashboardData",
          JSON.stringify({ appNumber: initialAppNumber, name: initialName })
        );
      }
    }
  }, [initialAppNumber, initialName]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-indigo-700">
          Application Dashboard
        </h2>

        <div className="flex flex-col items-center gap-6 p-8 text-white shadow-xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
          <div className="text-center">
            <p className="text-lg font-medium">Application Number</p>
            <p className="mt-2 text-5xl font-extrabold">{appNumber}</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-medium">Applicant Name</p>
            <p className="mt-1 text-2xl font-semibold">{name}</p>
          </div>
        </div>

        <p className="mt-8 text-center text-gray-600">
          Please keep this information safe for future reference.
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 font-semibold text-white transition-all bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
