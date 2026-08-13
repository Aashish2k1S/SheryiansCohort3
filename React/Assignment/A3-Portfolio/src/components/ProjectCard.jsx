import { useRef } from "react";
import { useGSAP } from "../hooks/useGsap";
import { createProjectCardReveal } from "../animations/projectCardAnimations";
import { Link } from "react-router";

function ProjectCard({ project }) {
    const cardRef = useRef(null);
    const visualRef = useRef(null);

    useGSAP(
        () => {
            createProjectCardReveal(cardRef.current, visualRef.current);
        },
        {
            scope: cardRef,
        },
    );

    return (
        <article
            ref={cardRef}
            data-cursor="project"
            className="project-card group border-t border-border-custom py-12 md:py-16"
        >
            <div className="grid gap-10 md:grid-cols-[80px_1fr]">
                {/* Project Number */}
                <div>
                    <span className="mono text-xs text-subtle">
                        {String(project.id).padStart(2, "0")}
                    </span>
                </div>

                {/* Project Content */}
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
                    {/* Information */}
                    <div>
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <Link
                                    to={`/projects/${project.slug}`}
                                    data-cursor="project"
                                    className="group block"
                                >
                                    <h3 className="text-[clamp(1.75rem,3vw,2.75rem)] font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 group-hover:text-neutral-300">
                                        {project.title}
                                    </h3>
                                </Link>

                                <p className="mt-5 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                                    {project.description}
                                </p>
                            </div>

                            <span className="shrink-0 text-xl text-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                                ↗
                            </span>
                        </div>

                        {/* Technologies */}
                        <div className="mt-8 flex max-w-2xl flex-wrap gap-x-3 gap-y-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="border border-border-custom px-3 py-2 text-xs text-neutral-400 transition-colors duration-200 group-hover:border-neutral-700 group-hover:text-neutral-100"
                                >
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Project Visual */}
                    <div
                        ref={visualRef}
                        className="aspect-16/10 rounded-2xl overflow-hidden border border-border-custom bg-[surface] transition-colors duration-300 group-hover:border-neutral-700"
                    >
                        <Link
                            to={`/projects/${project.slug}`}
                            ref={visualRef}
                            data-cursor="project"
                            className="aspect-16/10 rounded-2xl overflow-hidden border border-border-custom bg-[surface] transition-colors duration-300 group-hover:border-neutral-700"
                            >
                            {/* className="block aspect-16/10 overflow-hidden border border-border-custom bg-surface" */}
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center">
                                    <span className="mono text-xs uppercase tracking-[0.3em] text-neutral-700 transition-colors duration-300 group-hover:text-muted">
                                        {project.title}
                                    </span>
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
