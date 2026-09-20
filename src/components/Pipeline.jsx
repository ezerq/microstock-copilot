import Stepper from "./sub/Stepper";

function Pipeline({ steps, currentStep }) {
  return (
    <div className="h-90">
      <Stepper steps={steps} currentStep={currentStep} />

      <div className="mt-13 h-full flex justify-around gap-3">
        {steps.map((s) => (
          <div key={s} className="card p-4 w-full grid grid-cols-2">
            <div className="card bg-text/5"></div>
            <div className="card bg-text/5"></div>
            <div className="card bg-text/5"></div>
            <div className="card bg-text/5"></div>
            <div className="card bg-text/5"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pipeline;
