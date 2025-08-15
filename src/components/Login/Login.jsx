import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp, verifyOtp } from "../services/authService";
import { isValidMobile } from "../utils/validators";
import Input from "../common/Input";

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
    <div className="flex flex-col h-screen overflow-hidden md:flex-row">
      {/* Left Form Section */}
      <div className="flex items-center justify-center w-full h-full p-8 md:w-1/2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
        <div className="w-full max-w-md p-8 border border-gray-200 shadow-2xl bg-white/90 backdrop-blur-md rounded-2xl">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-pink-700">
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
            <a href="#" className="font-semibold text-blue-600 hover:underline">
              Terms & Conditions
            </a>
          </p>

          <p className="mt-4 text-sm text-center text-gray-700">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="font-semibold text-pink-600 hover:underline"
            >
              Register here
            </button>
          </p>
        </div>
      </div>

      {/* Right Info Section */}
      <div className="relative flex flex-col items-center justify-center w-full h-full p-8 overflow-hidden text-center bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 md:w-1/2">
        {/* Decorative glowing shapes */}
        <div className="absolute w-[400px] h-[400px] bg-pink-400/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] bg-indigo-400/20 rounded-full blur-2xl bottom-10 right-10 animate-ping"></div>

        {/* Glass Panel */}
        <div className="relative z-10 px-8 py-10 transition-all duration-500 transform border shadow-2xl bg-white/10 backdrop-blur-md rounded-3xl border-white/20 hover:scale-105">
          <h1 className="mb-4 text-4xl font-extrabold tracking-wide text-yellow-300 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]">
            Mukhyamantri Shram Shakti Yojna
          </h1>
          <p className="text-lg font-semibold tracking-wide text-white drop-shadow-md">
            Bihar State Minority Financial Corporation
          </p>
        </div>
      </div>
    </div>
  );
}
