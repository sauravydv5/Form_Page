import React, { useState } from "react";

const StatusPage = () => {
  // State variables for the search form
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("applicationNo"); // Default search by application number

  // State variables for displaying the result and handling loading/errors
  const [statusData, setStatusData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dummy data to simulate different API responses
  const dummyData = {
    // Passed case
    APP12345: {
      applicationNo: "APP12345",
      name: "Amit Kumar",
      status: "Passed",
    },
    // Rejected case with a reason
    APP67890: {
      applicationNo: "APP67890",
      name: "Priya Sharma",
      status: "Rejected",
      reason:
        "Documents were incomplete as per the district verification report.",
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setStatusData(null);

    // Simulate an API call with a delay of 2 seconds
    setTimeout(() => {
      // Find the data based on the search query
      const result = dummyData[searchQuery];

      if (result) {
        setStatusData(result);
      } else {
        // Handle no results found case
        setError(
          "No application found with this detail. Please check and try again."
        );
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 font-sans bg-gray-100">
      <div className="w-full max-w-xl p-8 bg-white border border-gray-200 shadow-2xl rounded-2xl">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900">
          Check Your Application Status
        </h2>
        <p className="mb-8 text-sm text-center text-gray-500">
          Please enter your details to view the current status of your
          application.
        </p>

        <form onSubmit={handleSearch} className="space-y-6">
          <div>
            <label
              htmlFor="searchBy"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              Search By
            </label>
            <div className="relative">
              <select
                id="searchBy"
                name="searchBy"
                value={searchBy}
                onChange={(e) => setSearchBy(e.target.value)}
                className="block w-full px-4 py-3 text-base text-gray-800 border-2 border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="applicationNo">Application Number</option>
                <option value="district">District</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="searchQuery"
              className="block mb-2 text-sm font-semibold text-gray-700"
            >
              Enter{" "}
              {searchBy === "applicationNo"
                ? "Application Number"
                : "District Name"}
            </label>
            <input
              type="text"
              id="searchQuery"
              name="searchQuery"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
              className="block w-full px-4 py-3 text-base text-gray-800 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading} // Disable button when loading
            className="flex justify-center w-full px-4 py-3 text-lg font-bold text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {/* Conditional rendering for search results */}
        {loading && (
          <div className="flex items-center justify-center mt-8 text-blue-600">
            <svg
              className="w-6 h-6 mr-3 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span className="text-lg font-semibold">
              Searching for your application details...
            </span>
          </div>
        )}

        {error && (
          <div className="p-4 mt-8 text-center text-red-700 bg-red-100 border border-red-300 rounded-lg">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {statusData && (
          <div className="p-6 mt-8 bg-white border border-gray-200 shadow-lg rounded-xl">
            <h3 className="mb-4 text-xl font-bold text-center text-gray-900">
              Application Details
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Application Number:
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {statusData.applicationNo}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Applicant Name:
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  {statusData.name}
                </p>
              </div>
              <div className="col-span-1 md:col-span-2">
                <p className="text-sm font-medium text-gray-500">Status:</p>
                <p
                  className={`text-xl font-extrabold ${
                    statusData.status === "Passed"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {statusData.status}
                </p>
              </div>
              {statusData.status === "Rejected" && (
                <div className="col-span-1 mt-4 md:col-span-2">
                  <p className="text-sm font-medium text-gray-500">
                    Reason for Rejection (District Level):
                  </p>
                  <div className="p-3 mt-2 text-base text-gray-700 border border-red-200 rounded-lg bg-red-50">
                    <p className="font-medium">{statusData.reason}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
