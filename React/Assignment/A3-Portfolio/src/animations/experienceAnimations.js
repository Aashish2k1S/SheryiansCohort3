import { gsap } from "../hooks/useGsap";

export function createExperienceReveal(element) {
    const q = gsap.utils.selector(element);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            scrub: true,
        },
    });

    return timeline
        .from(q(".experience-header"), {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        })
        .from(
            q(".experience-item"),
            {
                y: 50,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
            },
            "-=0.2",
        );
}
