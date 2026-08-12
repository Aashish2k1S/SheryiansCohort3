import { gsap } from "../hooks/useGsap";

export function createScrollReveal(
    element,
    { y = 50, duration = 0.8, start = "top 85%" } = {},
) {
    return gsap.from(element, {
        y,
        opacity: 0,
        duration,
        ease: "power3.out",
        scrollTrigger: {
            trigger: element,
            start,
            scrub: true,
        },
    });
}
