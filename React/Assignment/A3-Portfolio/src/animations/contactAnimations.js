import { gsap } from "../hooks/useGsap";

export function createContactReveal(element) {
    const q = gsap.utils.selector(element);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: element.current,
            start: "top 85%",
            end: "bottom 90%",
            scrub: true,
        },
    });

    return timeline
        .from(q(".contact-header"), {
            y: 25,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        })
        .from(
            q(".contact-main"),
            {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.2",
        )
        .from(
            q(".contact-info"),
            {
                y: 30,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            },
            "-=0.35",
        )
        .from(
            q(".contact-link"),
            {
                y: 15,
                opacity: 0,
                duration: 0.4,
                stagger: 0.12,
                ease: "power3.out",
            },
            "-=0.25",
        );
}