import { Link, useParams } from "react-router-dom";
import { toTitleCase } from "../utils/helper";

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
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center justify-between mb-3">
        <div className="flex gap-3 items-center">
          <Link
            to="/"
            className="text-2xl rounded-full hover:bg-text-p/15 h-10 flex justify-center items-center aspect-square"
          >
            <span className="mso">arrow_back</span>
          </Link>

          <span className="mb-3 text-4xl font-semibold leading-none translate-y-1">
            {toTitleCase(project.title)}
          </span>
        </div>

        <button
          onClick={() => setCurrentStep((prev) => prev + 1)}
          className="btn-primary btn-large"
        >
          {toTitleCase(steps[currentStep])}
        </button>
      </div>

      <Pipeline steps={steps} currentStep={currentStep} />
    </div>
  );
}

export default ProjectDetails;
