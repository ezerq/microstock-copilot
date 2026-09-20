function PilOption({ options, value, onChange }) {
  return (
    <div className="flex rounded-md bg-text-p/15 overflow-hidden justify-around border border-text-p/15">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`option-child ${value === option ? "active" : ""}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default PilOption;
