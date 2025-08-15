import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp, verifyOtp } from "../services/authService";
import { isValidMobile } from "../utils/validators";
import Input from "../common/Input";
import LogoRight from "../../assets/logo-right.png"; // BSMFC Logo

export default function Login() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    if (isValidMobile(mobile)) {
      try {
        const res = await sendOtp(mobile);
        if (res.success) setOtpSent(true);
        else alert("Failed to send OTP. Try again!");
      } catch (err) {
        console.error(err);
        alert("Error sending OTP. Check console.");
      }
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  const handleVerify = async () => {
    try {
      const ok = await verifyOtp(mobile, otp);
      if (ok) {
        navigate("/form");
      } else {
        alert("Invalid OTP (use 1234 for demo)");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP. Check console.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-6 bg-white border shadow-lg rounded-xl sm:p-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={LogoRight}
            alt="BSMFC Logo"
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-800 sm:text-3xl">
          User Login
        </h2>

        {/* Department & Scheme Name */}
        <div className="text-sm text-center text-gray-700 sm:text-base">
          <p>Bihar State Minorities Financial Corporation Ltd.</p>
          <p>Mukhyamantri Shram Shakti Yojna</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {!otpSent ? (
            <>
              <Input
                label="Mobile Number"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter mobile number"
              />
              <button
                onClick={handleSendOtp}
                className="w-full py-2 font-semibold text-white transition-all duration-200 bg-green-600 rounded-lg hover:bg-green-700 hover:shadow-md"
              >
                Send OTP
              </button>
            </>
          ) : (
            <>
              <Input
                label="Enter OTP"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP (1234 for demo)"
              />
              <button
                onClick={handleVerify}
                className="w-full py-2 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-md"
              >
                Verify OTP
              </button>
            </>
          )}
        </div>

        {/* Footer Links */}
        <p className="mt-4 text-xs text-center text-gray-500">
          By logging in, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms & Conditions
          </a>
        </p>

        <p className="mt-2 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 hover:underline"
          >
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}
