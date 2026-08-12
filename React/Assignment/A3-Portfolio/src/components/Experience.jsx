import { useRef } from "react";
import { useGSAP } from "../hooks/useGsap";
import { createExperienceReveal } from "../animations/experienceAnimations";

function Experience() {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            createExperienceReveal(sectionRef.current);
        },
        { scope: sectionRef },
    );

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="border-t border-neutral-800 px-6 py-32 md:px-10 md:py-40"
        >
            {/* border-t border-neutral-800 px-6 py-32 md:px-10 md:py-40  */}
            <div className="mx-auto max-w-350">
                {/* Section Header */}
                <div className="experience-header mb-16 md:mb-20 grid gap-6 md:grid-cols-2">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                            03 / Experience
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                            Where I've
                            <br />
                            been building.
                        </h2>
                    </div>
                </div>

                {/* Experience Item */}
                <article className="experience-item border-t border-neutral-800 py-10 md:py-12">
                    {/* border-t border-neutral-800 py-10 */}
                    <div className="grid gap-10 md:grid-cols-[180px_220px_1fr]">
                        {/* Date */}
                        <div>
                            <p className="mono text-xs uppercase tracking-wider text-neutral-500">
                                2024 — Present
                            </p>
                        </div>

                        {/* Company / Role */}
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight">
                                Quest Global
                            </h3>

                            <p className="mt-2 text-sm text-neutral-500">
                                Software Developer
                            </p>
                        </div>

                        {/* Description */}
                        <div>
                            <p className="max-w-xl text-base leading-7 text-neutral-400">
                                Working on backend applications and APIs with a
                                focus on .NET, SQL and application development.
                                Responsibilities include API development,
                                database optimization and reporting solutions.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                                {[
                                    ".NET",
                                    "ASP.NET Core",
                                    "SQL Server",
                                    "REST APIs",
                                    "Crystal Reports",
                                    "Kotlin",
                                ].map((technology) => (
                                    <span
                                        key={technology}
                                        className="mono text-[10px] uppercase tracking-wider text-neutral-600"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>

                {/* Additional Experience Placeholder */}
                <article className="experience-item border-t border-neutral-800 py-10">
                    <div className="grid gap-10 md:grid-cols-[180px_220px_1fr]">
                        <div>
                            <p className="mono text-xs uppercase tracking-wider text-neutral-500">
                                Freelance
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight">
                                Web Application Development
                            </h3>

                            <p className="mt-2 text-sm text-neutral-500">
                                Freelance Developer
                            </p>
                        </div>

                        <div>
                            <p className="max-w-xl text-base leading-7 text-neutral-400">
                                Worked on full-stack web application development
                                involving Angular, .NET Core and Microsoft SQL
                                Server, with responsibility across frontend,
                                backend and database layers.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                                {[
                                    ".NET Core",
                                    "Angular",
                                    "MS SQL",
                                    "REST APIs",
                                ].map((technology) => (
                                    <span
                                        key={technology}
                                        className="mono text-[10px] uppercase tracking-wider text-neutral-600"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Experience;
