import { useParams, Link } from "react-router";
import projects from "../data/projects";

function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((project) => project.slug === slug);

    if (!project) {
        return (
            <section className="min-h-screen px-6 py-40 md:px-10">
                <div className="mx-auto max-w-350">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                        404 / Project
                    </p>

                    <h1 className="mt-8 text-5xl font-semibold tracking-tight md:text-7xl">
                        Project not found.
                    </h1>

                    <Link
                        to="/"
                        data-cursor="interactive"
                        className="mt-10 inline-flex text-sm text-accent"
                    >
                        ← Back to home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <section className="px-6 pb-20 pt-32 md:px-10 md:pb-32 md:pt-40">
                <div className="mx-auto max-w-350">
                    <Link
                        to="/"
                        data-cursor="interactive"
                        className="mono text-xs uppercase tracking-[0.25em] text-muted"
                    >
                        ← Back to work
                    </Link>

                    <div className="mt-16 grid gap-12 md:grid-cols-2">
                        <div>
                            <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                                {String(project.id).padStart(2, "0")} /{" "}
                                {project.category}
                            </p>

                            <h1 className="mt-6 text-6xl font-semibold tracking-tighter md:text-8xl">
                                {project.title}
                            </h1>
                        </div>

                        <div className="flex items-end">
                            <p className="max-w-xl text-base leading-7 text-secondary">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="px-6 md:px-10">
                <div className="mx-auto max-w-350">
                    <div className="aspect-16/10 rounded-2xl overflow-hidden border border-border-custom bg-surface">
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={`${project.title} project preview`}
                                className="h-full w-full object-cover object-top"
                                loading="eager"
                                decoding="async"
                            />
                        ) : (
                            <div className="flex h-full items-center justify-center">
                                <span className="mono text-xs uppercase tracking-[0.3em] text-subtle">
                                    {project.title}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="px-6 py-32 md:px-10 md:py-40">
                <div className="mx-auto grid max-w-350 gap-16 md:grid-cols-[220px_1fr]">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                            01 / Overview
                        </p>
                    </div>

                    <div>
                        <p className="max-w-3xl text-2xl leading-relaxed md:text-4xl">
                            {project.overview}
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem / Solution */}
            <section className="border-t border-border-custom px-6 py-32 md:px-10 md:py-40">
                <div className="mx-auto grid max-w-350 gap-20 md:grid-cols-2">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                            02 / Problem
                        </p>

                        <p className="mt-8 max-w-xl text-base leading-7 text-secondary">
                            {project.problem}
                        </p>
                    </div>

                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                            03 / Solution
                        </p>

                        <p className="mt-8 max-w-xl text-base leading-7 text-secondary">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="border-t border-border-custom px-6 py-32 md:px-10 md:py-40">
                <div className="mx-auto max-w-350">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                        04 / Features
                    </p>

                    <div className="mt-12 border-t border-border-custom">
                        {project.features.map((feature, index) => (
                            <div
                                key={feature}
                                className="grid grid-cols-[60px_1fr] border-b border-border-custom py-6"
                            >
                                <span className="mono text-xs text-subtle">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="text-lg">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="border-t border-border-custom px-6 py-32 md:px-10 md:py-40">
                <div className="mx-auto max-w-350">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                        05 / Technologies
                    </p>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="border border-border-custom px-4 py-3 text-sm text-secondary"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Links */}
            <section className="border-t border-border-custom px-6 py-32 md:px-10 md:py-40">
                <div className="mx-auto max-w-350">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                        06 / Links
                    </p>

                    <div className="mt-10 flex flex-wrap gap-8">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg transition-colors hover:text-accent"
                            >
                                GitHub ↗
                            </a>
                        )}

                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg transition-colors hover:text-accent"
                            >
                                Live Project ↗
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProjectDetails;
