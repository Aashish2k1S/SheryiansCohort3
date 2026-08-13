import { useRef } from "react";
import { useGSAP } from "../hooks/useGsap";
import { createExperienceReveal } from "../animations/experienceAnimations";
import { experience } from "../data/data";

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
            className="border-t border-border-custom px-6 pt-32 md:px-10 md:pt-40"
        >
            <div className="mx-auto max-w-350">
                {/* Section Header */}
                <div className="experience-header mb-16 grid gap-6 md:mb-20 md:grid-cols-2">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
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

                {/* Experience */}
                <div>
                    {experience.map((item) => (
                        <article
                            key={item.id}
                            className="experience-item border-t border-border-custom py-10 md:py-12"
                        >
                            <div className="grid gap-10 md:grid-cols-[180px_220px_1fr]">
                                {/* Period */}
                                <div>
                                    <p className="mono text-xs uppercase tracking-wider text-muted">
                                        {item.period}
                                    </p>
                                </div>

                                {/* Company / Role */}
                                <div>
                                    <h3 className="text-2xl font-semibold tracking-tight">
                                        {item.company}
                                    </h3>

                                    <p className="mt-2 text-sm text-muted">
                                        {item.role}
                                    </p>
                                </div>

                                {/* Description / Technologies */}
                                <div>
                                    <p className="max-w-xl text-base leading-7 text-neutral-400">
                                        {item.description}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                                        {item.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="mono text-[10px] uppercase tracking-wider text-subtle"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
