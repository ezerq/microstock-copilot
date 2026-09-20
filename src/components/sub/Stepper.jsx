import { toTitleCase } from "../../utils/helper";

function Stepper({ steps, currentStep }) {
  //
  const baseLine = ((steps.length - 1) / steps.length) * 100;
  const line = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="flex gap-3 relative ">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div
            key={step}
            className="flex items-center flex-col flex-1 relative"
          >
            <div
              className={`pipeline-dot transition-all duration-500 ease-in-out ${isActive ? "border-4 border-accent" : isCompleted ? "bg-accent" : "border border-border bg-border"}`}
            ></div>
            <div
              className={`absolute top-11 text-center ${isActive ? "font-black text-accent" : "text-text-p"}`}
            >
              {toTitleCase(step)}
            </div>
          </div>
        );
      })}

      <div
        className=" absolute w-[80%] h-2 left-1/2 -translate-x-1/2 overflow-hidden bg-border top-1/2 -translate-y-1/2 -z-10"
        style={{ width: `${baseLine}%` }}
      >
        <div
          className="h-3 bg-accent transition-all duration-500 ease-in-out"
          style={{ width: `${line}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Stepper;
