const RequiredLabel = ({ text }) => (
  <>
    {text} <span className="text-red-600">*</span>
  </>
);

function ContactAndNative({ formData, setFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    if (!file) return;
    if (name === "resCert" && file.type !== "application/pdf") {
      alert("Only PDF files are allowed for this field.");
      e.target.value = "";
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: file }));
  };

  const handleNext = () => {
    // Add validation for this page
    if (
      !formData.email ||
      !formData.mobile ||
      !formData.nativeOfBihar ||
      !formData.residenceNo ||
      !formData.resCert
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    nextStep();
  };

  return (
    <>
      {/* Contact Information */}
      <section className="p-6 rounded-lg shadow-inner bg-green-50">
        <h3 className="pb-2 mb-4 text-2xl font-semibold text-green-800 border-b-2 border-green-300">
          Contact Information / संपर्क विवरण
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Email / ईमेल" />
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-green-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Mobile Number / मोबाइल नंबर" />
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="\d{10}"
              title="Please enter exactly 10 digits"
              className="w-full p-2 border-2 border-green-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Telephone Number with STD Code / टेलीफोन नंबर
            </label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full p-2 border-2 border-green-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200"
            />
          </div>
        </div>
      </section>
      {/* Bihar Native */}
      <section className="p-6 rounded-lg shadow-inner bg-yellow-50">
        <h3 className="pb-2 mb-4 text-2xl font-semibold text-yellow-800 border-b-2 border-yellow-300">
          Bihar Native / बिहार निवासी
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Native of Bihar / बिहार का मूल निवासी" />
            </label>
            <select
              name="nativeOfBihar"
              value={formData.nativeOfBihar}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:border-yellow-500 focus:ring focus:ring-yellow-200"
            >
              <option value="">Select / चुनें</option>
              {["Yes", "No"].map((v) => (
                <option key={v} value={v}>
                  {v === "Yes" ? "Yes / हाँ" : "No / नहीं"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Residence Certificate Number / निवास प्रमाण पत्र संख्या" />
            </label>
            <input
              type="text"
              name="residenceNo"
              value={formData.residenceNo}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:border-yellow-500 focus:ring focus:ring-yellow-200"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Upload Residence Certificate / निवास प्रमाण पत्र अपलोड करें" />
            </label>
            <input
              type="file"
              name="resCert"
              accept=".pdf"
              onChange={handleFileChange}
              required
              className="w-full p-2 border-2 border-yellow-300 rounded-lg cursor-pointer focus:ring focus:ring-yellow-200"
            />
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

export default ContactAndNative;
