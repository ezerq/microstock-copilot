import { toTitleCase } from "../utils/helper";
import { Link } from "react-router-dom";

function ProjectStatus({ projects, stages }) {
  //

  return (
    <div className="col-span-2 card">
      <h1 className="card-headline">Project Status</h1>

      <div className="bg-bg/40 h-full rounded-lg mt-1 p-3 border border-text-p/15">
        <div className="grid grid-cols-2 gap-3">
          {projects.map((project) => (
            <Link
              to={`/project/${project.id}`}
              className=" bg-accent cursor-pointer hover:bg-accent/90 rounded-lg p-3 pt-2.5 text-accent-text flex flex-col gap-2"
            >
              <div className="flex gap-3 items-center justify-between">
                <h1 className="text-lg font-bold leading-5 max-w-40 line-clamp-2">
                  {toTitleCase(project.name)}
                </h1>
                <p className="text-xs text-center leading-3 font-semibold">{`${project.targetAssets} assets`}</p>
              </div>

              <div className="flex text-sm font-semibold bg-accent-text rounded-md text-accent px-2 justify-between py-0.5">
                <p>{`${toTitleCase(stages[3].v2)}...`}</p>
                {/* <p>{`${project.status.percent}%`}</p> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectStatus;
