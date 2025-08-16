import { DISTRICTS } from "../../constants/districts";
import { JOB_ROLES } from "../../constants/jobRoles"; // You'll need to create this file

const RequiredLabel = ({ text }) => (
  <>
    {text} <span className="text-red-600">*</span>
  </>
);

function TraningSelection({ formData, setFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    // Updated validation for this page
    if (
      !formData.district ||
      !formData.trainingDistrict1 ||
      !formData.trainingDistrict2 ||
      !formData.trainingDistrict3 ||
      !formData.jobRole1 ||
      !formData.jobRole2 ||
      !formData.jobRole3
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

        {/* Choice of District for Training */}
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
          {[1, 2, 3].map((num) => (
            <div key={`trainingDistrict${num}`}>
              <label className="block mb-1 font-medium text-gray-700">
                <RequiredLabel
                  text={`Choice of District for Training ${num} / प्रशिक्षण हेतु जिला का चयन ${num}`}
                />
              </label>
              <select
                name={`trainingDistrict${num}`}
                value={formData[`trainingDistrict${num}`]}
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
          ))}
        </div>

        {/* Choice of Job Role */}
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-3">
          {[1, 2, 3].map((num) => (
            <div key={`jobRole${num}`}>
              <label className="block mb-1 font-medium text-gray-700">
                <RequiredLabel
                  text={`Choice of Job Role ${num} / नौकरी की भूमिका का चयन ${num}`}
                />
              </label>
              <select
                name={`jobRole${num}`}
                value={formData[`jobRole${num}`]}
                onChange={handleChange}
                required
                className="w-full p-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200"
              >
                <option value="">
                  Select Job Role / नौकरी की भूमिका चुनें
                </option>
                {JOB_ROLES.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          ))}
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

export default TraningSelection;
