import { Routes, Route } from "react-router-dom";
import { projectsDummy } from "./testing/dummydata";

import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProjectDetails from "./pages/ProjectDetails";
import { stagesData } from "./datas/stages";

function App() {
  //
  const projects = projectsDummy;
  const stages = stagesData;

  return (
    <div className="m-10">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Dashboard projects={projects} stages={stages} />}
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>
    </div>
  );
}

export default App;
