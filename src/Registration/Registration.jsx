import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";

export default function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = () => {
    if (!formData.name.trim()) return alert("Please enter your full name");
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
    <div className="flex flex-col h-screen overflow-hidden md:flex-row">
      {/* Left Form Section */}
      <div className="flex items-center justify-center flex-1 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="w-full max-w-sm p-6 border border-gray-200 shadow-2xl sm:max-w-md sm:p-8 bg-white/90 backdrop-blur-md rounded-2xl">
          <h2 className="mb-6 text-2xl font-extrabold text-center text-pink-700 sm:text-3xl">
            Create an Account
          </h2>

          <div className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your full name"
            />
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

          <button
            onClick={handleRegister}
            className="w-full py-2 mt-6 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-pink-700 hover:scale-105"
          >
            Register
          </button>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              className="font-semibold text-pink-600 hover:underline"
            >
              Login here
            </button>
          </p>
        </div>
      </div>

      {/* Right Info Section */}
      <div className="relative flex-col items-center justify-center flex-1 hidden p-6 text-center md:flex sm:p-8 lg:p-12 bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600">
        {/* Decorative glowing shapes */}
        <div className="absolute w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-pink-400/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] bg-indigo-400/20 rounded-full blur-2xl bottom-10 right-10 animate-ping"></div>

        {/* Glass Panel */}
        <div className="relative z-10 px-6 py-8 transition-all duration-500 transform border shadow-2xl sm:px-8 sm:py-10 bg-white/10 backdrop-blur-md rounded-3xl border-white/20 hover:scale-105">
          <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-yellow-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
            Mukhyamantri Shram Shakti Yojna
          </h1>
          <p className="text-base font-semibold tracking-wide text-white sm:text-lg drop-shadow-md">
            Bihar State Minority Financial Corporation
          </p>
        </div>
      </div>
    </div>
  );
}
