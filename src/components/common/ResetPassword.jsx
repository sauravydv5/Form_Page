import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../common/Input";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const { mobile } = location.state || {}; // get mobile from OTP verification

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = () => {
    if (!newPassword || !confirmPassword) {
      return alert("Please fill in both fields");
    }
    if (newPassword !== confirmPassword) {
      return alert("Passwords do not match");
    }
    // Dummy password reset
    alert(`Password reset successful for mobile ${mobile}`);
    navigate("/"); // redirect to login page
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md p-6 space-y-6 bg-white border shadow-lg rounded-xl sm:p-8">
        <h2 className="text-2xl font-bold text-center text-blue-800 sm:text-3xl">
          Reset Password
        </h2>

        <p className="text-sm text-center text-gray-700 sm:text-base">
          Enter a new password for your account (Mobile: {mobile || "N/A"})
        </p>

        <div className="space-y-4">
          <Input
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
          <button
            onClick={handleReset}
            className="w-full py-2 font-semibold text-white transition-all duration-200 bg-green-600 rounded-lg hover:bg-green-700 hover:shadow-md"
          >
            Reset Password
          </button>
          <p
            className="text-sm text-right text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Back to Login
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
