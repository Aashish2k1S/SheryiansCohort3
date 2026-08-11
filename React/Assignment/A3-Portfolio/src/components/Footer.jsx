function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800 px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-350 flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold tracking-tight">
            AASHISH.
          </p>

          <p className="mono mt-2 text-[10px] uppercase tracking-wider text-neutral-600">
            Software Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://github.com/Aashish2k1S"
            target="_blank"
            rel="noreferrer"
            className="mono text-[10px] uppercase tracking-wider text-neutral-500 transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aashish-gupta001/"
            target="_blank"
            rel="noreferrer"
            className="mono text-[10px] uppercase tracking-wider text-neutral-500 transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <span className="mono text-[10px] uppercase tracking-wider text-neutral-700">
            © {year}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;