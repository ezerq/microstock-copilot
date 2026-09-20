import OverviewCard from "./OverviewCard";

function Overview() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-accent">Overview & Pipeline</h1>

      <div className="grid grid-cols-5 gap-3">
        <OverviewCard
          title={"Generated Images"}
          data={200}
          note={`images ready to upload to Adobe Stock`}
        />

        <OverviewCard
          title={"Reveiwed Images"}
          data={200}
          note={`images ready to upload to Adobe Stock`}
        />

        <OverviewCard
          title={"Upscaled Images"}
          data={200}
          note={`images ready to upload to Adobe Stock`}
        />

        <OverviewCard
          title={"Metadata Images"}
          data={200}
          note={`images ready to upload to Adobe Stock`}
        />

        <OverviewCard
          title={"Ready to Upload"}
          data={200}
          bg={1}
          note={`images ready to upload to Adobe Stock`}
        />
      </div>
    </div>
  );
}

export default Overview;
