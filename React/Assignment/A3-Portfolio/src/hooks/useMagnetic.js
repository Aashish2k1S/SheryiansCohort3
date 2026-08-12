import { useRef } from "react";
import { gsap, useGSAP } from "./useGsap";

function useMagnetic({ strength = 0.25, radius = 100 } = {}) {
    const ref = useRef(null);

    useGSAP(
        () => {
            const element = ref.current;

            if (!element) return;

            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            const isTouchDevice = window.matchMedia(
                "(pointer: coarse)",
            ).matches;

            if (reduceMotion || isTouchDevice) return;

            const handleMouseMove = (event) => {
                const rect = element.getBoundingClientRect();

                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distanceX = event.clientX - centerX;
                const distanceY = event.clientY - centerY;

                const distance = Math.sqrt(
                    distanceX ** 2 + distanceY ** 2,
                );

                if (distance < radius) {
                    gsap.to(element, {
                        x: distanceX * strength,
                        y: distanceY * strength,
                        duration: 0.3,
                        ease: "power3.out",
                        overwrite: true,
                    });
                } else {
                    gsap.to(element, {
                        x: 0,
                        y: 0,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.5)",
                        overwrite: true,
                    });
                }
            };

            const handleMouseLeave = () => {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.5)",
                });
            };

            window.addEventListener("mousemove", handleMouseMove);
            element.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
                element.removeEventListener(
                    "mouseleave",
                    handleMouseLeave,
                );
            };
        },
        { scope: ref },
    );

    return ref;
}

export default useMagnetic;