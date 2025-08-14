export default function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input {...props} className="border rounded w-full p-2" />
    </div>
  );
}
