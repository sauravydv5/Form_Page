const RequiredLabel = ({ text }) => (
  <>
    {text} <span className="text-red-600">*</span>
  </>
);

function EducationAndOther({ formData, setFormData, prevStep, handleSubmit }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const updated = checked ? [value] : [];
        return { ...prev, education: updated };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    if (!file) return;
    if (
      name === "marksheet" &&
      !["image/png", "image/jpeg", "image/jpg"].includes(file.type)
    ) {
      alert("Only PNG, JPG, or JPEG images are allowed for this field.");
      e.target.value = "";
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Educational Qualification */}
      <section className="p-6 rounded-lg shadow-inner bg-pink-50">
        <h3 className="pb-2 mb-4 text-2xl font-semibold text-pink-800 border-b-2 border-pink-300">
          Educational Qualification / शैक्षिक योग्यता
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {["10th", "12th", "Graduate", "Post Graduate"].map((level) => (
            <label key={level} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="education"
                value={level}
                checked={formData.education.includes(level)}
                onChange={handleChange}
                required={formData.education.length === 0}
                className="accent-pink-500"
              />
              {level}
            </label>
          ))}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Upload Marksheet / अंक तालिका अपलोड करें" />
            </label>
            <input
              type="file"
              name="marksheet"
              accept=".png,.jpg,.jpeg"
              onChange={handleFileChange}
              required
              className="w-full p-2 border-2 border-pink-300 rounded-lg cursor-pointer focus:ring focus:ring-pink-200"
            />
          </div>
        </div>
      </section>
      {/* Other Info */}
      <section className="p-6 rounded-lg shadow-inner bg-gray-50">
        <h3 className="pb-2 mb-4 text-2xl font-semibold text-gray-800 border-b-2 border-gray-300">
          Other Information / अन्य जानकारी
        </h3>
        <label className="block mb-2 font-medium text-gray-700">
          क्या आपने पहले बिहार राज्य अल्पसंख्यक वित्तीय निगम लिमिटेड द्वारा
          प्रायोजित किसी कौशल विकास कार्यक्रम में प्रशिक्षण लिया है?{" "}
          <span className="text-red-500">*</span>
        </label>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="earlierParticipation"
              value="Yes"
              checked={formData.earlierParticipation === "Yes"}
              onChange={handleChange}
              required
              className="accent-gray-600"
            />{" "}
            हाँ
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="earlierParticipation"
              value="No"
              checked={formData.earlierParticipation === "No"}
              onChange={handleChange}
              required
              className="accent-gray-600"
            />{" "}
            नहीं
          </label>
        </div>
      </section>
      {/* Submit Button */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-8 py-3 text-xl font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-gray-400 to-gray-600 hover:scale-105 hover:shadow-xl"
        >
          Previous / पिछला
        </button>
        <button
          type="submit"
          className="px-8 py-3 text-xl font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 hover:shadow-xl"
        >
          Save & Preview / सहेजें और पूर्वावलोकन करें
        </button>
      </div>
    </form>
  );
}

export default EducationAndOther;
