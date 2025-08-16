import React from "react";
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input {...props} className="w-full p-2 border rounded" />
    </div>
  );
}

export default Input;
