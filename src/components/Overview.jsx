import OverviewCard from "./OverviewCard";
import { projectsDummy } from "../testing/dummydata";

function Overview() {
  //
  const totalGenerated = projectsDummy.reduce(
    (total, project) => total + project.generated,
    0,
  );

  const totalApproved = projectsDummy.reduce(
    (total, project) => total + project.approved,
    0,
  );

  // const totalUpscaled = projectsDummy.reduce(
  //   (total, project) => total + project.upscaled,
  //   0,
  // );

  const totalMetadata = projectsDummy.reduce(
    (total, project) => total + project.metadataGenerated,
    0,
  );

  const totalReadyUpload = projectsDummy.reduce(
    (total, project) => total + project.readyUpload,
    0,
  );

  const totalRejected = projectsDummy.reduce(
    (total, project) => total + project.rejected,
    0,
  );

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-accent">Overview</h1>

      <div className="grid grid-cols-5 gap-3">
        <OverviewCard
          title={"Generated Images"}
          data={totalGenerated}
          note={`images generated`}
        />

        <OverviewCard
          title={"Approved Images"}
          data={totalApproved}
          note={`images approved`}
        />

        <OverviewCard
          title={"Rejected Images"}
          data={totalRejected}
          note={`images rejected`}
        />

        <OverviewCard
          title={"Metadata Images"}
          data={totalMetadata}
          note={`images' metadata generated`}
        />

        <OverviewCard
          title={"Ready to Upload"}
          data={totalReadyUpload}
          bg={1}
          note={`images ready to upload`}
        />
      </div>
    </div>
  );
}

export default Overview;
