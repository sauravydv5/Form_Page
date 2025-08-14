export const sendOtp = async (mobile) => {
  console.log(`Sending OTP to ${mobile}`);
  return { success: true };
};

export const verifyOtp = async (mobile, otp) => {
  return otp === "1234"; // demo check
};
