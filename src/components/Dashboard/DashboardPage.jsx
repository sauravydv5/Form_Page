import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DashboardPage({
  appNumber: initialAppNumber,
  name: initialName,
}) {
  const navigate = useNavigate();
  const [appNumber, setAppNumber] = useState("-");
  const [name, setName] = useState("-");
  const [userData, setUserData] = useState(null);

  // Load data from props or sessionStorage
  useEffect(() => {
    const savedData = sessionStorage.getItem("dashboardData");
    const savedFormData = sessionStorage.getItem("confirmationData");

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

    if (savedFormData) {
      setUserData(JSON.parse(savedFormData)); // Store full user data for preview
    }
  }, [initialAppNumber, initialName]);

  const handleViewApplication = () => {
    if (userData) {
      navigate("/preview", { state: { data: userData.data } });
    } else {
      alert("No application data found!");
    }
  };

  const handleTrackApplication = () => {
    navigate("/status", { state: { appNumber } });
  };

  const isPreviewPage = window.location.pathname.includes("/preview");

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
      <div
        className="w-full max-w-md p-6 shadow-2xl sm:max-w-lg lg:max-w-xl sm:p-8 rounded-3xl"
        style={{ backgroundColor: "#372948" }}
      >
        <h2 className="mb-6 text-2xl font-extrabold text-center text-white sm:mb-8 sm:text-3xl">
          Application Dashboard
        </h2>

        <div className="flex flex-col items-center w-full gap-4 p-6 text-white shadow-xl sm:gap-6 sm:p-8 rounded-2xl">
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

          {/* Buttons (hidden on preview page) */}
          {!isPreviewPage && (
            <div className="flex flex-col w-full gap-4 mt-4 sm:flex-row">
              <button
                onClick={handleViewApplication}
                className="flex-1 px-4 py-2 font-semibold text-white transition-all bg-green-500 rounded-lg shadow-md hover:bg-green-600 hover:scale-105"
              >
                View Application
              </button>
              <button
                onClick={handleTrackApplication}
                className="flex-1 px-4 py-2 font-semibold text-white transition-all bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 hover:scale-105"
              >
                Track Your Application
              </button>
            </div>
          )}
        </div>

        <p className="mt-6 text-sm text-center text-gray-300 sm:mt-8 sm:text-base">
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
  );
}
