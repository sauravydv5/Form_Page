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
    <>
      <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
        <div className="w-full max-w-md p-6 bg-white shadow-2xl sm:max-w-lg lg:max-w-xl sm:p-8 rounded-3xl">
          <h2 className="mb-6 text-2xl font-extrabold text-center text-indigo-700 sm:mb-8 sm:text-3xl">
            Application Dashboard
          </h2>

          <div className="flex flex-col items-center w-full gap-4 p-6 text-white shadow-xl sm:gap-6 sm:p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
            <div className="text-center">
              <p className="text-base font-medium sm:text-lg">
                Application Number
              </p>
              <p className="mt-1 text-3xl font-extrabold sm:mt-2 sm:text-5xl">
                {appNumber}
              </p>
            </div>

            <div className="text-center">
              <p className="text-base font-medium sm:text-lg">Applicant Name</p>
              <p className="mt-1 text-xl font-semibold sm:text-2xl">{name}</p>
            </div>
          </div>

          <p className="mt-6 text-sm text-center text-gray-600 sm:mt-8 sm:text-base">
            Please keep this information safe for future reference.
          </p>

          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 font-semibold text-white transition-all bg-indigo-600 rounded-lg shadow-md sm:px-6 sm:py-3 hover:bg-indigo-700 hover:scale-105"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
