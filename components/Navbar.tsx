export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Start */}
        <div className="flex items-center">
          <a
            href="/"
            className="text-xl font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            Job Tracker
          </a>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Projects", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-zinc-600 transition-colors hover:text-black"
            >
              {item}
            </a>
          ))}
        </div>

        {/* End */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-zinc-100">
            Login
          </button>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-all hover:opacity-90">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}