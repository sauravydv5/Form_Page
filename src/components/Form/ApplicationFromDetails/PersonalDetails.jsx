import { RELIGIONS } from "../../constants/religions";

const RequiredLabel = ({ text }) => (
  <>
    {text} <span className="text-red-600">*</span>
  </>
);

function PersonalDetails({ formData, setFormData, nextStep }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    if (!file) return;
    if (name === "aadhaarCard" && file.type !== "application/pdf") {
      alert("Only PDF files are allowed for this field.");
      e.target.value = "";
      return;
    }
    if (name === "incomeCert" && file.type !== "application/pdf") {
      alert("Only PDF files are allowed for this field.");
      e.target.value = "";
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleNext = () => {
    // Add validation for this page before proceeding
    if (
      !formData.name ||
      !formData.fatherName ||
      !formData.motherName ||
      !formData.dob ||
      !formData.religion ||
      !formData.gender ||
      !formData.handicapped ||
      !formData.aadhaarNo ||
      !formData.aadhaarCard ||
      !formData.annualIncome ||
      !formData.incomeCert ||
      !formData.nationality ||
      !formData.maritalStatus
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    nextStep();
  };

  return (
    <>
      <section className="p-6 rounded-lg shadow-inner bg-indigo-50">
        <h3 className="pb-2 mb-4 text-2xl font-semibold text-indigo-800 border-b-2 border-indigo-300">
          Personal Details / व्यक्तिगत विवरण
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* ... All your personal details input fields ... */}
          {/* Applicant Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Applicant Name / आवेदक का नाम" />
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Father's Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Father's Name / पिता का नाम" />
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Mother's Name */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Mother's Name / माता का नाम" />
            </label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Date of Birth */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Date of Birth / जन्म तिथि" />
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Religion */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Religion / धर्म" />
            </label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            >
              <option value="">Select Religion / धर्म चुनें</option>
              {RELIGIONS.map((rel) => (
                <option key={rel} value={rel}>
                  {rel}
                </option>
              ))}
            </select>
          </div>
          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Gender / लिंग" />
            </label>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                    required
                    className="accent-indigo-500"
                  />
                  {g === "Male"
                    ? "Male / पुरुष"
                    : g === "Female"
                    ? "Female / महिला"
                    : "Other / अन्य"}
                </label>
              ))}
            </div>
          </div>
          {/* Handicapped */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Physically Handicapped / शारीरिक रूप से विकलांग" />
            </label>
            <div className="flex gap-4">
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="handicapped"
                    value={v}
                    checked={formData.handicapped === v}
                    onChange={handleChange}
                    required
                    className="accent-indigo-500"
                  />
                  {v === "Yes" ? "Yes / हाँ" : "No / नहीं"}
                </label>
              ))}
            </div>
          </div>
          {/* Disability Degree */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Degree of Disability / विकलांगता की डिग्री
            </label>
            <input
              type="text"
              name="disabilityDegree"
              value={formData.disabilityDegree}
              onChange={handleChange}
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Aadhaar Number */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Aadhaar Number / आधार संख्या" />
            </label>
            <input
              type="number"
              name="aadhaarNo"
              value={formData.aadhaarNo}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Aadhaar Card - PDF */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Upload Aadhaar Card / आधार कार्ड अपलोड करें" />
            </label>
            <input
              type="file"
              name="aadhaarCard"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg cursor-pointer focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Annual Income */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Annual Income / वार्षिक आय" />
            </label>
            <input
              type="number"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Income Certificate - PDF */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Income Certificate / आय प्रमाण पत्र" />
            </label>
            <input
              type="file"
              name="incomeCert"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="w-full p-2 border-2 border-indigo-300 rounded-lg cursor-pointer focus:ring focus:ring-indigo-200"
            />
          </div>
          {/* Nationality */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Nationality / राष्ट्रीयता" />
            </label>
            <div className="flex gap-4">
              {["Indian", "Non-Indian", "Other"].map((v) => (
                <label key={v} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="nationality"
                    value={v}
                    checked={formData.nationality === v}
                    onChange={handleChange}
                    required
                    className="accent-indigo-500"
                  />
                  {v === "Indian"
                    ? "Indian / भारतीय"
                    : v === "Non-Indian"
                    ? "Non-Indian / गैर-भारतीय"
                    : "Other / अन्य"}
                </label>
              ))}
            </div>
          </div>
          {/* Marital Status */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Marital Status / वैवाहिक स्थिति" />
            </label>
            <div className="flex flex-wrap gap-4">
              {["Married", "Unmarried", "Separated", "Divorced"].map((v) => (
                <label key={v} className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="maritalStatus"
                    value={v}
                    checked={formData.maritalStatus === v}
                    onChange={handleChange}
                    required
                    className="accent-indigo-500"
                  />
                  {v === "Married"
                    ? "Married / विवाहित"
                    : v === "Unmarried"
                    ? "Unmarried / अविवाहित"
                    : v === "Separated"
                    ? "Separated / पृथक"
                    : "Divorced / तलाकशुदा"}
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={handleNext}
          className="px-8 py-3 text-xl font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 hover:shadow-xl"
        >
          Next / अगला
        </button>
      </div>
    </>
  );
}

export default PersonalDetails;
