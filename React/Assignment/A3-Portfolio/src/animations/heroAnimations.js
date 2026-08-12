import { gsap } from "../hooks/useGsap";

export function createHeroReveal(element) {
    
    const q = gsap.utils.selector(element);

    const timeline = gsap.timeline({
        defaults: {
            ease: "power3.out",
        },
    });

    return timeline
        .from(q(".hero-eyebrow"), {
            y: 20,
            opacity: 0,
            duration: 0.6,
        })
        .from(q(".hero-line"),
            {
                y: 80,
                opacity: 0,
                duration: 0.9,
                stagger: 0.1,
            },
            "-=0.25",
        )
        .from(q(".hero-bottom"),
            {
                y: 30,
                opacity: 0,
                duration: 0.7,
            },
            "-=0.35",
        )
        .from(q(".hero-scroll"),
            {
                y: 15,
                opacity: 0,
                duration: 0.5,
            },
            "-=0.2",
        );
}
