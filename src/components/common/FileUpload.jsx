export default function FileUpload({ label, name, onChange, required }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="border p-2 w-full"
        required={required}
      />
    </div>
  );
}
