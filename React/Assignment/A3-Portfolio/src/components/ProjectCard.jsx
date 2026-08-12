function ProjectCard({ project }) {
    return (
        <article data-cursor="project" className="project-card group border-t border-neutral-800 py-12 md:py-16">
            <div className="grid gap-10 md:grid-cols-[80px_1fr]">
                {/* Project Number */}
                <div>
                    <span className="mono text-xs text-neutral-600">
                        {String(project.id).padStart(2, "0")}
                    </span>
                </div>

                {/* Project Content */}
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                    {/* Information */}
                    <div>
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-neutral-300">
                                    {project.title}
                                </h3>

                                <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                                    {project.description}
                                </p>
                            </div>

                            <span className="shrink-0 text-xl text-neutral-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                ↗
                            </span>
                        </div>

                        {/* Technologies */}
                        <div className="mt-8 flex max-w-2xl flex-wrap gap-x-3 gap-y-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="border border-neutral-800 px-3 py-2 text-xs text-neutral-400 transition-colors duration-200 group-hover:border-neutral-700 group-hover:text-neutral-300"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Visual */}
                    <div className="aspect-16/10 overflow-hidden border border-neutral-800 bg-[#101010] transition-colors duration-300 group-hover:border-neutral-700">
                        <div className="flex h-full items-center justify-center">
                            <span className="mono text-xs uppercase tracking-[0.3em] text-neutral-700 transition-colors duration-300 group-hover:text-neutral-500">
                                {project.title}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
