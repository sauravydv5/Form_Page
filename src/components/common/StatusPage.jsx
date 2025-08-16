import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const StatusPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState(
    location.state?.appNumber || ""
  );
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const stages = [
    { name: "Submitted", reason: "" },
    { name: "Under Verification", reason: "Documents under verification." },
    { name: "District Approved", reason: "District level approval completed." },
    { name: "State Approved", reason: "State level approval completed." },
    { name: "Completed", reason: "Application fully processed." },
  ];

  // Dummy data generator for demo
  const generateStatusData = (appNumber) => {
    const randomStageIndex = Math.floor(Math.random() * stages.length);
    return {
      applicationNo: appNumber,
      name: "Demo User",
      currentStage: randomStageIndex,
    };
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStatusData(null);

    setTimeout(() => {
      if (searchQuery.trim() === "") {
        setError("Please enter a valid application number.");
        setLoading(false);
        return;
      }

      const result = generateStatusData(searchQuery);
      if (result) {
        setStatusData(result);
      } else {
        setError("No application found with this number.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white border border-gray-200 shadow-2xl rounded-3xl">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-[#372948]">
          Track Your Application Status
        </h2>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="space-y-6">
          <div>
            <label
              htmlFor="searchQuery"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              Application Number
            </label>
            <input
              type="text"
              id="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
              className="block w-full px-4 py-3 text-base text-gray-800 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#372948] focus:border-[#372948]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 text-lg font-bold text-white bg-[#372948] rounded-lg shadow-md hover:bg-[#2a2033] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Checking..." : "Track Status"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <div className="p-4 mt-6 text-center text-red-700 bg-red-100 border border-red-300 rounded-lg">
            {error}
          </div>
        )}

        {/* Status Display */}
        {statusData && (
          <div className="p-6 mt-8 bg-white border border-gray-200 shadow-xl rounded-2xl">
            <div className="mb-6 text-center">
              <p className="text-sm text-gray-500">Application Number:</p>
              <p className="text-lg font-semibold text-gray-800">
                {statusData.applicationNo}
              </p>
              <p className="mt-1 text-sm text-gray-500">Applicant Name:</p>
              <p className="text-lg font-semibold text-gray-800">
                {statusData.name}
              </p>
            </div>

            <p className="mb-3 font-semibold text-gray-700">
              Application Progress:
            </p>

            <div className="space-y-3">
              {stages.map((stage, index) => (
                <div
                  key={stage.name}
                  className={`flex items-center px-4 py-3 rounded-lg border transition-all ${
                    index === statusData.currentStage
                      ? "bg-[#372948] text-white shadow-lg font-bold"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <CheckCircleIcon
                    className={`w-6 h-6 mr-3 ${
                      index <= statusData.currentStage
                        ? "text-green-400"
                        : "text-gray-300"
                    }`}
                  />
                  <div>
                    {stage.name}
                    {index === statusData.currentStage && stage.reason && (
                      <p className="mt-1 text-sm font-normal text-yellow-200">
                        {stage.reason}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
