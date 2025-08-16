import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import LogoRight from "../../assets/logo-right.png"; // BSMFC Logo

export default function Registration() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  // Step 1: Send OTP
  const handleSendOtp = () => {
    if (!/^\d{10}$/.test(mobile))
      return alert("Enter a valid 10-digit mobile number");

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
    setGeneratedOtp(otpCode);
    setIsOtpSent(true);

    alert(`Your OTP is ${otpCode}`); // For demo; in real apps, send via SMS
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      alert("Registration successful! You can now login.");
      navigate("/"); // Redirect to login page
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white border shadow-lg rounded-2xl">
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
          Register with Mobile
        </h2>

        {/* Department & Scheme */}
        <div className="text-sm leading-tight text-center text-gray-700 md:text-base">
          <p>Bihar State Minorities Financial Corporation Ltd.</p>
          <p>Mukhyamantri Shram Shakti Yojna</p>
        </div>

        {/* Form */}
        {!isOtpSent ? (
          <div className="space-y-4">
            <Input
              label="Mobile Number"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
            />
            <button
              onClick={handleSendOtp}
              className="w-full py-3 mt-4 text-lg font-semibold text-white transition-colors bg-pink-600 rounded-lg hover:bg-pink-700"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <Input
              label="Enter OTP"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP sent to your mobile"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full py-3 mt-2 text-lg font-semibold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Footer */}
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
