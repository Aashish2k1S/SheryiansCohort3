import { useRef } from "react";
import { categories } from "../data/skills";
import { useGSAP } from "../hooks/useGsap";
import { createSkillsReveal } from "../animations/skillsAnimations";

function Skills() {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            createSkillsReveal(sectionRef.current);
        },
        {
            scope: sectionRef,
        },
    );

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="border-t border-neutral-800 px-6 pt-32 md:px-10 md:pt-40"
        >
            <div className="mx-auto max-w-350">
                {/* Header */}
                <div className="skills-header mb-16 grid gap-6 md:mb-20 md:grid-cols-2">
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
                <div>
                    {categories.map((category) => (
                        <article
                            key={category.number} 
                            className="skill-category grid gap-8 border-t border-neutral-800 py-10 md:grid-cols-[80px_220px_1fr] md:py-12"
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
