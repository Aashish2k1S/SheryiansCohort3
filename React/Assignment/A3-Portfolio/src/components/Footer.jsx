import { scrollToSection } from "../hooks/useScrollToSection";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-custom px-6 py-8 md:px-10 mb-4 md:mb-0">
      <div className="mx-auto flex max-w-350 flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            data-cursor="interactive"
            className="text-accent text-sm font-bold tracking-tight">
            AASHISH.
          </button>

          <p className="mono mt-2 text-[10px] uppercase tracking-wider text-subtle">
            Software Developer
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a data-cursor="interactive"
            href="https://github.com/Aashish2k1S"
            target="_blank"
            rel="noreferrer"
            className="mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a data-cursor="interactive"
            href="https://www.linkedin.com/in/aashish-gupta001/"
            target="_blank"
            rel="noreferrer"
            className="mono text-[10px] uppercase tracking-wider text-muted transition-colors hover:text-white"
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