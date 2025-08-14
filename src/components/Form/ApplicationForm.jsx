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

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-indigo-700">
        Application Form for Training under Sankalp Yojna
      </h2>

      {/* Personal Details */}
      <section>
        <h3 className="pb-1 mb-4 text-xl font-semibold text-gray-700 border-b">
          Personal Details
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            name="name"
            placeholder="Applicant Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="fatherName"
            placeholder="Father's Name"
            value={formData.fatherName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother's Name"
            value={formData.motherName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />

          {/* Religion Dropdown */}
          <div>
            <label className="block mb-1 font-medium">Religion</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select Religion</option>
              {RELIGIONS.map((rel) => (
                <option key={rel} value={rel}>
                  {rel}
                </option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 font-medium">Gender</label>
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="block">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                  required
                />{" "}
                {g}
              </label>
            ))}
          </div>

          {/* Handicapped */}
          <div>
            <label className="block mb-1 font-medium">
              Physically Handicapped
            </label>
            {["Yes", "No"].map((v) => (
              <label key={v} className="block">
                <input
                  type="radio"
                  name="handicapped"
                  value={v}
                  checked={formData.handicapped === v}
                  onChange={handleChange}
                  required
                />{" "}
                {v}
              </label>
            ))}
          </div>

          <input
            type="text"
            name="disabilityDegree"
            placeholder="Degree of Disability"
            value={formData.disabilityDegree}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />

          <input
            type="number"
            name="aadhaarNo"
            placeholder="Aadhaar Number"
            value={formData.aadhaarNo}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="annualIncome"
            placeholder="Annual Income"
            value={formData.annualIncome}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <div>
            <label className="block mb-1 font-medium">Income Certificate</label>
            <input
              type="file"
              name="incomeCert"
              onChange={handleFileChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Nationality */}
          <div>
            <label className="block mb-1 font-medium">Nationality</label>
            {["Indian", "Non-Indian", "Other"].map((v) => (
              <label key={v} className="block">
                <input
                  type="radio"
                  name="nationality"
                  value={v}
                  checked={formData.nationality === v}
                  onChange={handleChange}
                  required
                />{" "}
                {v}
              </label>
            ))}
          </div>

          {/* Marital Status */}
          <div>
            <label className="block mb-1 font-medium">Marital Status</label>
            {["Married", "Unmarried", "Separated", "Divorced"].map((v) => (
              <label key={v} className="block">
                <input
                  type="radio"
                  name="maritalStatus"
                  value={v}
                  checked={formData.maritalStatus === v}
                  onChange={handleChange}
                  required
                />{" "}
                {v}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section>
        <h3 className="pb-1 mb-4 text-xl font-semibold text-gray-700 border-b">
          Contact Information
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="telephone"
            placeholder="Telephone Number with STD Code"
            value={formData.telephone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </section>

      {/* Bihar Native */}
      <section>
        <h3 className="pb-1 mb-4 text-xl font-semibold text-gray-700 border-b">
          Bihar Native Details
        </h3>
        <div>
          {["Yes", "No"].map((v) => (
            <label key={v} className="block">
              <input
                type="radio"
                name="nativeOfBihar"
                value={v}
                checked={formData.nativeOfBihar === v}
                onChange={handleChange}
                required
              />{" "}
              {v}
            </label>
          ))}
        </div>
        {formData.nativeOfBihar === "Yes" && (
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
            <input
              type="text"
              name="residenceNo"
              placeholder="Residence Number"
              value={formData.residenceNo}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
            <div>
              <label className="block mb-1 font-medium">
                Residential Certificate
              </label>
              <input
                type="file"
                name="resCert"
                onChange={handleFileChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}
      </section>

      {/* Address / District */}
      <section>
        <h3 className="pb-1 mb-4 text-xl font-semibold text-gray-700 border-b">
          Address Information
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* District */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            >
              <option value="">Select District</option>
              {DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Choice of Training District */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">
              Choice of Training District
            </label>
            <input
              type="text"
              name="trainingDistrict"
              placeholder="Enter Choice of District"
              value={formData.trainingDistrict}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Address for Correspondence */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">
              Address for Correspondence
            </label>
            <textarea
              name="correspondenceAddress"
              placeholder="Enter Address for Correspondence"
              value={formData.correspondenceAddress}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Permanent Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 font-medium">Permanent Address</label>
            <textarea
              name="permanentAddress"
              placeholder="Enter Permanent Address"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </section>

      {/* Education Details */}
      <section>
        <h3 className="pb-1 mb-4 text-xl font-semibold text-gray-700 border-b">
          Education Details
        </h3>
        <div>
          {["Class 12 passed or equivalent", "Graduate or Higher"].map((v) => (
            <label key={v} className="block">
              <input
                type="checkbox"
                name="education"
                value={v}
                checked={formData.education.includes(v)}
                onChange={handleChange}
              />{" "}
              {v}
            </label>
          ))}
        </div>
        <div className="mt-2">
          <label className="block mb-1 font-medium">
            Marksheet of Highest Degree
          </label>
          <input
            type="file"
            name="marksheet"
            onChange={handleFileChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
      </section>

      {/* Earlier Participation */}
      <section>
        <h3 className="pb-1 mb-4 text-xl font-semibold text-gray-700 border-b">
          Other Information
        </h3>
        <div>
          {["Yes", "No"].map((v) => (
            <label key={v} className="block">
              <input
                type="radio"
                name="earlierParticipation"
                value={v}
                checked={formData.earlierParticipation === v}
                onChange={handleChange}
                required
              />{" "}
              {v}
            </label>
          ))}
        </div>
      </section>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-green-400 to-green-600 hover:scale-105"
        >
          Save & Preview
        </button>
      </div>
    </form>
  );
}
