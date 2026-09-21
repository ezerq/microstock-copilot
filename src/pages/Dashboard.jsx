import Overview from "../components/Overview";
import PromptGenerator from "../components/PromptGenerator";
import ProjectStatus from "../components/ProjectStatus";

function Dashboard({ projects, stages }) {
  //
  console.log(projects);

  return (
    <div className="flex flex-col gap-5">
      <Overview />

      <div className="grid grid-cols-5 gap-3 h-fit">
        <PromptGenerator />

        <ProjectStatus projects={projects} stages={stages} />
      </div>
    </div>
  );
}

export default Dashboard;
