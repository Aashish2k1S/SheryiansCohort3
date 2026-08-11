function About() {
  return (
    <section
      id="about"
      className="border-t border-neutral-800 px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-350">

        {/* Section Header */}
        <div className="mb-20">
          <p className="mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            02 / About
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">

          {/* Statement */}
          <div>
            <h2 className="max-w-xl text-5xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
              A SOFTWARE
              <br />
              DEVELOPER
              <br />
              WHO BUILDS
              <br />
              <span className="text-neutral-500">
                USEFUL SYSTEMS.
              </span>
            </h2>
          </div>

          {/* Description */}
          <div className="flex flex-col justify-end">
            <div className="max-w-lg">
              <p className="text-lg leading-8 text-neutral-300">
                I'm a software developer primarily focused on
                backend development, API design and
                data-driven applications.
              </p>

              <p className="mt-6 text-base leading-7 text-neutral-500">
                My professional work revolves around .NET,
                SQL and application development, while I've
                also been expanding into Python, React,
                AI and modern infrastructure.
              </p>

              <p className="mt-6 text-base leading-7 text-neutral-500">
                I enjoy working on problems where software
                needs to be reliable, maintainable and
                genuinely useful.
              </p>
            </div>
          </div>

        </div>

        {/* Principles */}
        <div className="mt-32 grid border-t border-neutral-800 md:grid-cols-3">

          <div className="border-b border-neutral-800 py-8 md:border-b-0 md:border-r md:pr-10">
            <span className="mono text-xs text-neutral-600">
              01
            </span>

            <h3 className="mt-6 text-xl font-medium">
              Build with purpose
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Start with the problem rather than the technology.
            </p>
          </div>

          <div className="border-b border-neutral-800 py-8 md:border-b-0 md:border-r md:px-10">
            <span className="mono text-xs text-neutral-600">
              02
            </span>

            <h3 className="mt-6 text-xl font-medium">
              Keep it simple
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              Prefer clear, maintainable solutions over unnecessary complexity.
            </p>
          </div>

          <div className="py-8 md:pl-10">
            <span className="mono text-xs text-neutral-600">
              03
            </span>

            <h3 className="mt-6 text-xl font-medium">
              Learn by building
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-500">
              The fastest way to understand a technology is to use it.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;