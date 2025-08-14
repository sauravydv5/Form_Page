export default function DashboardPage({ appNumber, name }) {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-md p-8 text-center bg-white shadow-xl rounded-2xl">
        <h2 className="mb-6 text-2xl font-bold text-indigo-700">
          Your Application Details
        </h2>

        <div className="flex flex-col items-center gap-4 p-8 text-white shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl">
          <p className="text-lg font-medium">Application Number</p>
          <p className="text-4xl font-extrabold">{appNumber}</p>
          <p className="mt-2 text-lg">
            Name: <span className="font-semibold">{name}</span>
          </p>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Keep this information safe for future reference.
        </p>
      </div>
    </div>
  );
}
