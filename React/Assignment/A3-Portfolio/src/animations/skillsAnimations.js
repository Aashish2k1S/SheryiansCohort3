import { gsap } from "../hooks/useGsap";

export function createSkillsReveal(element) {
    const q = gsap.utils.selector(element);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            scrub: true,
        },
    });

    return timeline
        .from(q(".skills-header"), {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        })
        .from(
            q(".skill-category"),
            {
                y: 45,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
            },
            "-=0.2",
        );
}
