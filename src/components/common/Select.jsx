export default function Select({ label, name, options, onChange, required }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <select
        name={name}
        onChange={onChange}
        className="border p-2 w-full"
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
