import { useRef } from "react";
import { useGSAP } from "../hooks/useGsap";
import { createProjectReveal } from "../animations/projectAnimations";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            createProjectReveal(sectionRef.current);
        },
        {
            scope: sectionRef,
        },
    );

    return (
        <section
            ref={sectionRef}
            id="work"
            className="border-t border-neutral-800 px-6 pt-32 md:px-10 md:pt-40"
        >
            {/* px-6 py-32 md:px-10 md:py-40  */}
            <div className="mx-auto max-w-350">
                <div className="mb-16 md:mb-20 grid gap-6 md:grid-cols-2">
                    <div>
                        <p className="mono text-xs uppercase tracking-[0.25em] text-neutral-500">
                            01 / Selected Work
                        </p>
                    </div>

                    <div>
                        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
                            Things I've built,
                            <br />
                            explored & shipped.
                        </h2>
                    </div>
                </div>

                <div>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
