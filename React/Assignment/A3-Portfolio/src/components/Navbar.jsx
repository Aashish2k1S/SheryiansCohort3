function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-350 items-center justify-between px-6 py-6 md:px-10">
        <a
          href="/"
          className="text-sm font-bold tracking-tight"
        >
          AASHISH.
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#work"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            WORK
          </a>

          <a
            href="#about"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            ABOUT
          </a>

          <a
            href="#contact"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            CONTACT
          </a>
        </div>

        <a
          href="#contact"
          className="mono hidden text-xs uppercase tracking-wider md:block"
        >
          Let's Talk ↗
        </a>
      </nav>
    </header>
  );
}

export default Navbar;