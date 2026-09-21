import Skeleton from "./sub/Skeleton";

function RejectedImageSection({ project }) {
  return (
    <div className="h-fit w-full card">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold ml-1 text-red-400">
          Rejected Images
        </h1>
        <p>{`${project.assets / 10} rejected images`}</p>
      </div>

      <div className="h-35 flex gap-3">
        <Skeleton count={8} className={"rounded-xl"} />
      </div>
    </div>
  );
}

export default RejectedImageSection;
