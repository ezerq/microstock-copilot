import Skeleton from "./sub/Skeleton";
import { toTitleCase } from "../utils/helper";
import Stepper from "./sub/Stepper";

function PipelineCard({ steps, project, gridCols }) {
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold ml-1">{toTitleCase(steps)}</h1>

        <h1>{`${project.assets} / ${project.assets}`}</h1>
      </div>

      <div className={`w-full h-full grid ${gridCols} grid-rows-4 gap-3`}>
        <Skeleton count={16} className={"rounded-xl"} />
      </div>
    </div>
  );
}

function Pipeline({ steps, currentStep, project }) {
  //
  const activeCard = steps.slice(currentStep - 1, currentStep + 1);

  // console.log(activeCard)

  return (
    <div className="h-fit flex flex-col gap-3">
      <Stepper steps={steps} currentStep={currentStep} />

      <div
        className={`h-170 grid gap-4 ${activeCard.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
      >
        {activeCard.map((card) => (
          <PipelineCard
            project={project}
            steps={card}
            gridCols={`${activeCard.length === 1 ? "grid-cols-8" : "grid-cols-4"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Pipeline;
