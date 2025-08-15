import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import LogoRight from "../assets/logo-right.png"; // BSMFC Logo

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = () => {
    if (!formData.firstName.trim())
      return alert("Please enter your first name");
    if (!formData.lastName.trim()) return alert("Please enter your last name");
    if (!/^\d{10}$/.test(formData.mobile))
      return alert("Enter a valid 10-digit mobile number");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return alert("Enter a valid email address");
    if (formData.password.length < 6)
      return alert("Password must be at least 6 characters");
    if (formData.password !== formData.confirmPassword)
      return alert("Passwords do not match");

    alert("Registration successful! You can now login.");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white border shadow-lg rounded-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={LogoRight}
            alt="BSMFC Logo"
            className="w-20 h-20 md:w-24 md:h-24"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-pink-700 md:text-3xl">
          Create an Account
        </h2>

        {/* Department & Scheme Name */}
        <div className="text-sm leading-tight text-center text-gray-700 md:text-base">
          <p>Bihar State Minorities Financial Corporation Ltd.</p>
          <p>Mukhyamantri Shram Shakti Yojna</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* First Name & Last Name in one row for larger screens */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="First Name"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              placeholder="Enter first name"
            />
            <Input
              label="Last Name"
              type="text"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              placeholder="Enter last name"
            />
          </div>

          <Input
            label="Mobile Number"
            type="tel"
            value={formData.mobile}
            onChange={(e) => handleChange("mobile", e.target.value)}
            placeholder="Enter mobile number"
          />
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Enter password"
          />
          <Input
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleChange("confirmPassword", e.target.value)}
            placeholder="Confirm password"
          />
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full py-3 mt-4 text-lg font-semibold text-white transition-colors bg-pink-600 rounded-lg hover:bg-pink-700"
        >
          Register
        </button>

        {/* Footer Links */}
        <p className="mt-4 text-xs text-center text-gray-500 md:text-sm">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-pink-600 hover:underline">
            Terms & Conditions
          </a>
        </p>

        <p className="mt-2 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-pink-600 hover:underline"
          >
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}
