import { Link, useParams } from "react-router-dom";
import { toTitleCase } from "../utils/helper";
import RejectedImageSection from "../components/RejectedImageSection";
import Pipeline from "../components/Pipeline";
import { useState } from "react";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  const [currentStep, setCurrentStep] = useState(1);

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <p>Loading...</p>;
  }

  const steps = [
    "generate image",
    "review image",
    "upscale image",
    "metadata image",
    "ready to upload",
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center justify-between pb-3">
        <div className="flex gap-3 items-center">
          <Link
            to="/"
            className="text-2xl rounded-full hover:bg-text-p/15 h-10 flex justify-center items-center aspect-square"
          >
            <span className="mso">arrow_back</span>
          </Link>

          <span className="text-4xl font-semibold leading-none -translate-y-0.5">
            {`Project: ${toTitleCase(project.title)}`}
          </span>
        </div>

        <button
          onClick={() =>
            setCurrentStep((prev) =>
              steps.length === currentStep ? prev + 0 : prev + 1,
            )
          }
          className="btn-primary btn-large"
        >
          {currentStep === steps.length
            ? "Open Assets Folder"
            : toTitleCase(steps[currentStep])}
        </button>
      </div>

      <Pipeline steps={steps} currentStep={currentStep} project={project} />

      <RejectedImageSection project={project} />
    </div>
  );
}

export default ProjectDetails;
