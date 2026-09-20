function InputText({ label, id, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none bg-text-p/15 px-3 py-1 hover:bg-accent-bg focus:bg-accent-bg rounded-md text-sm border border-text-p/15 focus:border-accent"
      />
    </div>
  );
}

export default InputText;
