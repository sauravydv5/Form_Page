import { DISTRICTS } from "../../constants/districts";
import { JOB_ROLES } from "../../constants/jobRoles"; // You'll need to create this file

const RequiredLabel = ({ text }) => (
  <>
    {text} <span className="text-red-600">*</span>
  </>
);

function AddressDetails({ formData, setFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Updated validation for this page
    if (
      !formData.district ||
      !formData.correspondenceAddress ||
      !formData.permanentAddress
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    nextStep();
  };

  return (
    <>
      <section className="p-6 rounded-lg shadow-inner bg-purple-50">
        <h3 className="pb-2 mb-6 text-2xl font-semibold text-purple-800 border-b-2 border-purple-300">
          Address Information / पता विवरण
        </h3>
        {/* District */}
        <div className="w-full">
          <label className="block mb-2 font-medium text-gray-700">
            <RequiredLabel text="District / जिला" />
          </label>
          <select
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
            className="w-full p-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200"
          >
            <option value="">Select District / जिला चुनें</option>
            {DISTRICTS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Correspondence + Permanent Address */}
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
          {/* Correspondence Address */}
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700">
              <RequiredLabel text="Correspondence Address / पत्राचार पता" />
            </label>
            <textarea
              name="correspondenceAddress"
              value={formData.correspondenceAddress}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-purple-300 rounded-lg resize-none focus:border-purple-500 focus:ring focus:ring-purple-200"
              rows={4}
            ></textarea>
          </div>
          {/* Permanent Address */}
          <div className="w-full">
            <label className="block mb-2 font-medium text-gray-700">
              <RequiredLabel text="Permanent Address / स्थायी पता" />
            </label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-purple-300 rounded-lg resize-none focus:border-purple-500 focus:ring focus:ring-purple-200"
              rows={4}
            ></textarea>
          </div>
        </div>
      </section>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 text-xl font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-gray-400 to-gray-600 hover:scale-105 hover:shadow-xl"
        >
          Previous / पिछला
        </button>
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

export default AddressDetails;
