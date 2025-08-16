function FileUpload({ label, name, onChange, required }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="w-full p-2 border"
        required={required}
      />
    </div>
  );
}

export default FileUpload;
