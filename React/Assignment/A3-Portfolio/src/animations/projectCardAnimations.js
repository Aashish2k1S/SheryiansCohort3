import { gsap } from "../hooks/useGsap";

export function createProjectCardReveal(card, visual) {

    if (!card || !visual) return;

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;

    const isTouchDevice = window.matchMedia(
        "(pointer: coarse)",
    ).matches;

    if (reduceMotion || isTouchDevice) return;

    const handleMouseMove = (event) => {
        const rect = card.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        gsap.to(visual, {
            x: x * 10,
            y: y * 10,
            scale: 1.03,
            duration: 0.4,
            ease: "power3.out",
            overwrite: true,
        });
    };

    const handleMouseEnter = () => {
        gsap.to(visual, {
            scale: 1.03,
            duration: 0.4,
            ease: "power3.out",
            overwrite: true,
        });
    };

    const handleMouseLeave = () => {
        gsap.to(visual, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out",
            overwrite: true,
        });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
    };
}
