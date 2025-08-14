import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp, verifyOtp } from "../services/authService";
import { isValidMobile } from "../utils/validators";
import Input from "../common/Input";

export default function Login() {
  const navigate = useNavigate(); // <--- useNavigate hook
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    if (isValidMobile(mobile)) {
      const res = await sendOtp(mobile);
      if (res.success) setOtpSent(true);
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  const handleVerify = async () => {
    const ok = await verifyOtp(mobile, otp);
    if (ok) {
      // Navigate to the ApplicationForm page after successful OTP
      navigate("/form");
    } else {
      alert("Invalid OTP (use 1234 for demo)");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden md:flex-row bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="hidden h-full md:flex md:w-1/2">
        <img
          src="/public/image/login.jpeg"
          alt="Student"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex items-center justify-center w-full h-full p-8 md:w-1/2">
        <div className="w-full max-w-md p-8 border border-gray-200 shadow-2xl bg-white/90 backdrop-blur-md rounded-2xl">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-indigo-700">
            User Login
          </h2>

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
                className="w-full py-2 mt-5 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-green-400 to-green-600 hover:scale-105"
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
                className="w-full py-2 mt-5 font-semibold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105"
              >
                Verify OTP
              </button>
            </>
          )}

          <p className="mt-6 text-sm text-center text-gray-600">
            By logging in, you agree to our{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:underline"
            >
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
