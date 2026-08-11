function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-800 px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-350">
        <div className="mb-20">
          <p className="mono text-xs uppercase tracking-[0.25em] text-neutral-500">
            05 / Contact
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr]">
          {/* Main CTA */}
          <div>
            <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              <span className="text-neutral-500">
                USEFUL.
              </span>
            </h2>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-end">
            <p className="max-w-md text-base leading-7 text-neutral-400">
              Have an interesting project, opportunity, or
              problem worth discussing? Get in touch.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5">
              <a
                href="mailto:your-email@example.com"
                className="group flex items-center gap-3 text-sm font-medium"
              >
                <span>EMAIL</span>

                <span className="text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/aashish-gupta001/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium"
              >
                <span>LINKEDIN</span>

                <span className="text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/Aashish2k1S"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm font-medium"
              >
                <span>GITHUB</span>

                <span className="text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;