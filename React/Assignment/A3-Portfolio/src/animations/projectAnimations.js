import { gsap } from "../hooks/useGsap";

export function createProjectReveal(
    section,
    { y = 70, duration = 0.8, start = "top 88%" } = {},
) {
    const cards = section.querySelectorAll(".project-card");

    if (!cards.length) return;

    cards.forEach((card) => {
        gsap.from(card, {
            y,
            opacity: 0,
            duration,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start,
                scrub: true,
            },
        });
    });
}
