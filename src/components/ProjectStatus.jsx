import { toTitleCase } from "../utils/helper";
import { Link } from "react-router-dom";

function ProjectStatus({ projects }) {
  //

  return (
    <div className="col-span-2 card">
      <h1 className="card-headline">Project Status</h1>

      <div className="bg-bg/40 h-full rounded-lg mt-1 p-2 border border-text-p/15">
        <div className="grid grid-cols-2 gap-2">
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              className=" bg-accent cursor-pointer hover:bg-accent/90 rounded-lg p-3 pt-1 text-accent-text flex flex-col gap-1"
            >
              <div className="flex gap-3 items-center justify-between">
                <h1 className="text-lg font-bold">
                  {toTitleCase(project.title)}
                </h1>
                <p className="text-sm font-semibold">{`${project.assets} assets`}</p>
              </div>

              <div className="ml-1 grid grid-cols-3 text-xs place-content-between font-semibold">
                <p className="p-status">{`Prmpt: ${project.prompts}`}</p>
                <p className="p-status">{`Imags: ${project.images}`}</p>
                <p className="p-status">{`Rview: ${project.reviewed}`}</p>
                <p className="p-status">{`Upscl: ${project.upscale}`}</p>
                <p className="p-status">{`Mtdta: ${project.metadata}`}</p>
                <p className="p-status">{`Ready: ${project.ready}`}</p>
              </div>

              <div className="flex text-sm font-semibold bg-accent-text rounded-md text-accent px-2 justify-between py-0.5">
                <p>{`${project.status.stat}...`}</p>
                <p>{`${project.status.percent}%`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectStatus;
