import { categories } from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-neutral-800 px-6 py-32 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-350">

        {/* Header */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <div>
            <p className="mono text-xs uppercase tracking-[0.25em] text-neutral-500">
              04 / Skills
            </p>
          </div>

          <div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Tools I use
              <br />
              to build things.
            </h2>
          </div>
        </div>

        {/* Skills */}
        <div className="border-t border-neutral-800">
          {categories.map((category) => (
            <article
              key={category.number}
              className="grid gap-8 border-b border-neutral-800 py-10 md:grid-cols-[80px_220px_1fr]"
            >
              {/* Number */}
              <div>
                <span className="mono text-xs text-neutral-600">
                  {category.number}
                </span>
              </div>

              {/* Category */}
              <div>
                <h3 className="text-2xl font-medium tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Technologies */}
              <div>
                <p className="max-w-lg text-sm leading-7 text-neutral-500">
                  {category.description}
                </p>

                <div className="mt-8 flex max-w-2xl flex-wrap gap-x-3 gap-y-2">
                  {category.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-neutral-800 px-3 py-2 text-xs text-neutral-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;