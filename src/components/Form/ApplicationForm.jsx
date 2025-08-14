import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DISTRICTS } from "../constants/districts";
import { RELIGIONS } from "../constants/religions";

export default function ApplicationForm({ onSave, initialData }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    dob: "",
    religion: "",
    gender: "",
    handicapped: "",
    disabilityDegree: "",
    aadhaarNo: "",
    aadhaarCard: null,
    annualIncome: "",
    incomeCert: null,
    nationality: "",
    maritalStatus: "",
    email: "",
    mobile: "",
    telephone: "",
    nativeOfBihar: "",
    residenceNo: "",
    resCert: null,
    district: "",
    correspondenceAddress: "",
    permanentAddress: "",
    trainingDistrict: "",
    education: [],
    marksheet: null,
    earlierParticipation: "",
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const updated = checked
          ? [...prev.education, value]
          : prev.education.filter((v) => v !== value);
        return { ...prev, education: updated };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    navigate("/preview");
  };

  const RequiredLabel = ({ text }) => (
    <>
      {text} <span className="text-red-600">*</span>
    </>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 mx-auto space-y-8 bg-white shadow-2xl max-w-7xl rounded-xl"
    >
      <h2 className="mb-6 text-4xl font-bold text-center text-indigo-700">
        Application Form for Training under Sankalp Yojna / संकल्प योजना के तहत
        प्रशिक्षण के लिए आवेदन
      </h2>

      {/* Personal Details */}
      <section className="p-6 rounded-lg shadow-inner bg-indigo-50">
        <h3 className="pb-2 mb-4 text-2xl font-semibold text-indigo-800 border-b-2 border-indigo-300">
          Personal Details / व्यक्तिगत विवरण
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

          {/* Aadhaar Card */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Upload Aadhaar Card / आधार कार्ड अपलोड करें" />
            </label>
            <input
              type="file"
              name="aadhaarCard"
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

          {/* Income Certificate */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Income Certificate / आय प्रमाण पत्र" />
            </label>
            <input
              type="file"
              name="incomeCert"
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
              type="number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
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
              Residence Certificate Number / निवास प्रमाण पत्र संख्या
            </label>
            <input
              type="text"
              name="residenceNo"
              value={formData.residenceNo}
              onChange={handleChange}
              className="w-full p-2 border-2 border-yellow-300 rounded-lg focus:border-yellow-500 focus:ring focus:ring-yellow-200"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Upload Residence Certificate / निवास प्रमाण पत्र अपलोड करें
            </label>
            <input
              type="file"
              name="resCert"
              onChange={handleFileChange}
              className="w-full p-2 border-2 border-yellow-300 rounded-lg cursor-pointer focus:ring focus:ring-yellow-200"
            />
          </div>
        </div>
      </section>

      {/* Address Details */}
      <section className="p-6 rounded-lg shadow-inner bg-purple-50">
        <h3 className="pb-2 mb-4 text-2xl font-semibold text-purple-800 border-b-2 border-purple-300">
          Address Information / पता विवरण
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
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

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Correspondence Address / पत्राचार पता" />
            </label>
            <textarea
              name="correspondenceAddress"
              value={formData.correspondenceAddress}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              <RequiredLabel text="Permanent Address / स्थायी पता" />
            </label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              required
              className="w-full p-2 border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:ring focus:ring-purple-200"
            ></textarea>
          </div>
        </div>
      </section>

      {/* Education */}
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
                className="accent-pink-500"
              />
              {level}
            </label>
          ))}

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Upload Marksheet / अंक तालिका अपलोड करें
            </label>
            <input
              type="file"
              name="marksheet"
              onChange={handleFileChange}
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
          <label className="block mb-1 font-medium text-gray-700">
            Earlier Participation in Training / पहले प्रशिक्षण में भाग लिया
          </label>
          <textarea
            name="earlierParticipation"
            value={formData.earlierParticipation}
            onChange={handleChange}
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-gray-500 focus:ring focus:ring-gray-200"
          ></textarea>
        </div>
      </section>

      {/* Submit Button */}
      <div className="mt-6 text-center">
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
