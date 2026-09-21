function Skeleton({ count, className }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-text/10 h-full w-full ${className} }
             })`}
        ></div>
      ))}
    </>
  );
}

export default Skeleton;
