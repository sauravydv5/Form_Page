import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "./ApplicationFromDetails/PersonalDetails";
import ContactAndNative from "./ApplicationFromDetails/ContactAndNative";
import AddressDetails from "./ApplicationFromDetails/AddressDetails";
import EducationAndOther from "./ApplicationFromDetails/EducationAndOther";
import TraningSelection from "./ApplicationFromDetails/TraningSelection";

// Initial form data state
const initialData = {
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
  trainingDistrict1: "",
  trainingDistrict2: "",
  trainingDistrict3: "",
  jobRole1: "",
  jobRole2: "",
  jobRole3: "",

  // name: "Saurav Kumar",
  // fatherName: "Ramesh Kumar",
  // motherName: "Sunita Kumari",
  // dob: "1998-05-12",
  // religion: "Hindu",
  // gender: "Male",
  // handicapped: "No",
  // disabilityDegree: "",
  // aadhaarNo: "123456789012",
  // aadhaarCard: null, // file upload ke liye
  // annualIncome: "500000",
  // incomeCert: null, // file upload ke liye
  // nationality: "Indian",
  // maritalStatus: "Single",
  // email: "saurav.kumar@example.com",
  // mobile: "9876543210",
  // telephone: "0612-1234567",
  // nativeOfBihar: "Yes",
  // residenceNo: "123, ABC Colony",
  // resCert: null, // file upload ke liye
  // district: "Patna",
  // correspondenceAddress: "123, ABC Colony, Patna, Bihar",
  // permanentAddress: "123, ABC Colony, Patna, Bihar",
  // trainingDistrict: "Patna",
  // education: [
  //   { degree: "10th", board: "BSEB", year: "2014", percentage: "75" },
  //   { degree: "12th", board: "BSEB", year: "2016", percentage: "78" },
  //   {
  //     degree: "Graduation",
  //     board: "Magadh University",
  //     year: "2020",
  //     percentage: "72",
  //   },
  // ],
  // marksheet: null, // file upload ke liye
  // earlierParticipation: "No",
  // trainingDistrict1: "Patna",
  // trainingDistrict2: "Gaya",
  // trainingDistrict3: "Buxar",
  // jobRole1: "Software Developer",
  // jobRole2: "Data Analyst",
  // jobRole3: "Web Designer",
};

function ApplicationForm({ onSave }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [currentStep, setCurrentStep] = useState(1);

  // Function to move to the next step
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Function to move to the previous step
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // The final submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.mobile)) {
      alert("Mobile number must be exactly 10 digits.");
      return;
    }
    onSave(formData);
    navigate("/preview");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalDetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <ContactAndNative
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 3:
        return (
          <AddressDetails
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <TraningSelection
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <EducationAndOther
            formData={formData}
            setFormData={setFormData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return <div>Form Completed!</div>;
    }
  };

  return (
    <div className="p-8 mx-auto space-y-8 bg-white shadow-2xl max-w-7xl rounded-xl">
      <h2 className="mb-1 text-3xl font-bold tracking-wide text-center text-indigo-800">
        Application Form for Training under Mukhyamantri Shram Shakti Yojna
      </h2>
      <h3 className="mb-4 text-xl font-semibold text-center text-indigo-800">
        मुख्यमंत्री श्रम शक्ति योजना के तहत प्रशिक्षण के लिए आवेदन
      </h3>
      <p className="mb-8 text-base italic font-medium text-center text-gray-600">
        Department: Bihar State Minority Financial Corporation <br /> विभाग:
        बिहार राज्य अल्पसंख्यक वित्तीय निगम
      </p>

      {/* Progress Indicator (Optional but good for UX) */}
      <div className="flex justify-center mb-6">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
            currentStep >= 1 ? "bg-indigo-600" : "bg-gray-400"
          }`}
        >
          1
        </div>
        <div className="self-center w-12 h-1 mx-2 bg-gray-400"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
            currentStep >= 2 ? "bg-indigo-600" : "bg-gray-400"
          }`}
        >
          2
        </div>
        <div className="self-center w-12 h-1 mx-2 bg-gray-400"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
            currentStep >= 3 ? "bg-indigo-600" : "bg-gray-400"
          }`}
        >
          3
        </div>
        <div className="self-center w-12 h-1 mx-2 bg-gray-400"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
            currentStep >= 3 ? "bg-indigo-600" : "bg-gray-400"
          }`}
        >
          4
        </div>
        <div className="self-center w-12 h-1 mx-2 bg-gray-400"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
            currentStep >= 4 ? "bg-indigo-600" : "bg-gray-400"
          }`}
        >
          5
        </div>
        <div className="self-center w-12 h-1 mx-2 bg-gray-400"></div>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
            currentStep >= 4 ? "bg-indigo-600" : "bg-gray-400"
          }`}
        >
          6
        </div>
      </div>

      {renderStep()}
    </div>
  );
}

export default ApplicationForm;
