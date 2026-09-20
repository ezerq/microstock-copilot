import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  //
  const projects = [
    {
      id: 1,
      title: "new year",
      assets: 120,
      prompts: 20,
      images: 30,
      reviewed: 20,
      upscale: 10,
      metadata: 30,
      ready: 10,
      status: {
        stat: "Prompting",
        percent: 50,
      },
    },
  ];

  return (
    <div className="m-10">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard projects={projects} />} />

        <Route
          path="/project/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>
    </div>
  );
}

export default App;
