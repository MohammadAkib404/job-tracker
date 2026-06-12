export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-primary transition-opacity hover:opacity-70">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Job Tracker</span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {["Dashboard", "Analytics", "Settings"].map((item) => (
            <a key={item} href="#" className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-primary">
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-primary">Sign in</button>
          <button className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-hover active:scale-[0.98]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
