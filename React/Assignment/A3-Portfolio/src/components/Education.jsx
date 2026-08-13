import { useRef } from "react";
import { useGSAP } from "../hooks/useGsap";
import { createExperienceReveal } from "../animations/experienceAnimations";
import { education } from "../data/data";

const Education = () => {
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
            id="education"
            className="border-t border-border-custom px-6 pt-32 md:px-10 md:pt-40"
        >
            <div className="mx-auto max-w-350">
                <div className="experience-header mb-16 grid gap-6 md:mb-20 md:grid-cols-2">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                            04 / Education
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                            Where I 
                            <br />
                            <span className="text-accent">started.</span>
                        </h2>
                    </div>
                </div>

                <div>
                    {education.map((item) => (
                        <article
                            key={item.id}
                            className="experience-item grid gap-8 border-t border-border-custom py-10 md:grid-cols-[180px_280px_1fr] md:py-12"
                        >
                            {/* Year */}
                            <div>
                                <p className="mono text-xs uppercase tracking-wider text-muted">
                                    {item.year}
                                </p>
                            </div>

                            {/* Degree */}
                            <div>
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-muted">
                                    {item.degree}
                                </p>
                            </div>

                            {/* Institution + Grade */}
                            <div>
                                <p className="max-w-xl text-base leading-7 text-neutral-400">
                                    {item.institution}
                                </p>

                                <p className="mono mt-4 text-xs uppercase tracking-wider text-subtle">
                                    {item.grade}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
