import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../common/Input";
import LogoRight from "../../assets/logo-right.png"; // BSMFC Logo

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // changed from userId
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  // Dummy credentials
  const dummyEmail = "user@example.com";
  const dummyPass = "123456";
  const dummyOtp = "1234";

  // Dummy login function
  const handleLogin = () => {
    if (email === dummyEmail && password === dummyPass) {
      alert("Login successful!");
      navigate("/form");
    } else {
      alert("Invalid Email or Password (Try user@example.com / password)");
    }
  };

  // Dummy OTP send
  const handleSendOtp = () => {
    if (mobile.length === 10) {
      setOtpSent(true);
      alert(`OTP sent to ${mobile} (use 1234 for demo)`);
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  // Dummy OTP verify
  const handleVerify = () => {
    if (otp === dummyOtp) {
      alert("OTP verified! You can reset your password now.");
      navigate("/reset-password", { state: { mobile } });
    } else {
      alert("Invalid OTP (use 1234 for demo)");
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
          {forgotPassword ? "Reset Password" : "User Login"}
        </h2>

        {/* Department & Scheme */}
        <div className="text-sm text-center text-gray-700 sm:text-base">
          <p>Bihar State Minorities Financial Corporation Ltd.</p>
          <p>Mukhyamantri Shram Shakti Yojna</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {!forgotPassword && !otpSent && (
            <>
              <Input
                label="Email ID"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email ID"
              />
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <button
                onClick={handleLogin}
                className="w-full py-2 font-semibold text-white transition-all duration-200 bg-green-600 rounded-lg hover:bg-green-700 hover:shadow-md"
              >
                Login
              </button>
              <p
                className="text-sm text-right text-blue-600 cursor-pointer hover:underline"
                onClick={() => setForgotPassword(true)}
              >
                Forgot Password?
              </p>
            </>
          )}

          {forgotPassword && !otpSent && (
            <>
              <Input
                label="Registered Mobile Number"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter mobile number for OTP"
              />
              <button
                onClick={handleSendOtp}
                className="w-full py-2 font-semibold text-white transition-all duration-200 bg-green-600 rounded-lg hover:bg-green-700 hover:shadow-md"
              >
                Send OTP
              </button>
              <p
                className="text-sm text-right text-blue-600 cursor-pointer hover:underline"
                onClick={() => setForgotPassword(false)}
              >
                Back to Login
              </p>
            </>
          )}

          {otpSent && (
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
        {!forgotPassword && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
