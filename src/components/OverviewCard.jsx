function OverviewCard({ title, data, note, bg }) {
  //
  const bgclass =
    bg === undefined ? "bg-border text-text-p" : "bg-accent-border";

  return (
    <div className={`${bgclass} rounded-xl min-h-10 px-6 py-4 cursor-default`}>
      <h1 className="text-lg font-semibold">{title}</h1>
      <h1 className="text-5xl font-black mb-2">{data}</h1>
      <p className="text-xs">{`${data} ${note}`}</p>
    </div>
  );
}

export default OverviewCard;
