function ProjectCard({ project }) {
  return (
    <article className="group border-t border-neutral-800 py-10">
      <div className="grid gap-8 md:grid-cols-[80px_1fr_1.2fr_auto] md:items-start">
        <span className="mono text-xs text-neutral-600">
          {String(project.id).padStart(2, "0")}
        </span>

        <h3 className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <div>
          <p className="max-w-lg text-sm leading-7 text-neutral-400">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="mono text-[10px] uppercase tracking-wider text-neutral-500"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <span className="text-xl text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
          ↗
        </span>
      </div>
    </article>
  );
}

export default ProjectCard;