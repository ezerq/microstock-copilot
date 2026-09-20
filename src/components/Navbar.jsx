function Navbar() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold">Microstock Copilot</h1>
      <div className="flex items-center">
        <button className="mso h-8 aspect-square text-xl rounded-lg bg-accent-border text-accent hover:text-text cursor-pointer">
          settings
        </button>
      </div>
    </div>
  );
}

export default Navbar;
