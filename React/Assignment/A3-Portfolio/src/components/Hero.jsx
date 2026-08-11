function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-12 md:px-10 md:pb-16">
      <div className="mx-auto w-full max-w-350">

        <div className="mb-8">
          <p className="mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            Software Developer · India
          </p>
        </div>

        <h1 className="max-w-300 text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
          <span className="block">I BUILD</span>
          <span className="block">SYSTEMS</span>
          <span className="block text-neutral-500">
            THAT MATTER.
          </span>
        </h1>

        <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <p className="max-w-md text-base leading-relaxed text-neutral-400">
            Backend-focused software developer building APIs,
            data-driven applications and modern web experiences.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#work"
              className="group flex items-center gap-3 text-sm font-medium"
            >
              <span>EXPLORE WORK</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <span className="mono text-xs text-neutral-600">
              .NET · PYTHON · SQL · REACT
            </span>
          </div>

        </div>

      </div>

      <div className="mono absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-widest text-neutral-600 md:block">
        Scroll to explore ↓
      </div>
    </section>
  );
}

export default Hero;