import { gsap } from "../hooks/useGsap";

export function createAboutReveal(element) {
    const q = gsap.utils.selector(element);

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: element.current,
            start: "top 85%",
            end: "top top", 
            once: true
        },
    });

    return timeline
        .from(q(".about-header"), {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        })
        .from(
            q(".about-main"),
            {
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "-=0.25",
        )
        .from(
            q(".about-principles"),
            {
                y: 40,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            },
            "-=0.25",
        )
        .from(
            q(".about-principle"),
            {
                y: 25,
                opacity: 0,
                duration: 0.5,
                stagger: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: q(".about-principles"), 
                    start: "top bottom",
                    end: "bottom 80%",
                    scrub: true,
                }
            },
            "-=0.25",
        );
}