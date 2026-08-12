import { useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, useGSAP } from "../hooks/useGsap";

function SmoothScroll() {
    const lenisRef = useRef(null);

    useGSAP(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduceMotion) return;

        const lenis = new Lenis({
            autoRaf: false,
            anchors: true,
        });

        lenisRef.current = lenis;

        const update = (time) => {
            lenis.raf(time * 1000);
        };

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
            lenisRef.current = null;
        };
    });

    return null;
}

export default SmoothScroll;