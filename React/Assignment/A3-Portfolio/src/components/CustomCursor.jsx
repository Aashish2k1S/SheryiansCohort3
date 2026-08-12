import { useRef } from "react";
import { gsap, useGSAP } from "../hooks/useGsap";

function CustomCursor() {
    const cursorRef = useRef(null);
    const labelRef = useRef(null);

    useGSAP(
        () => {
            const cursor = cursorRef.current;
            const label = labelRef.current;

            if (!cursor || !label) return;

            const isTouchDevice =
                window.matchMedia("(pointer: coarse)").matches;

            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (isTouchDevice || reduceMotion) {
                cursor.style.display = "none";
                return;
            }

            gsap.set(cursor, {
                xPercent: -50,
                yPercent: -50,
            });

            const xTo = gsap.quickTo(cursor, "x", {
                duration: 0.2,
                ease: "power3.out",
            });

            const yTo = gsap.quickTo(cursor, "y", {
                duration: 0.2,
                ease: "power3.out",
            });

            const handleMouseMove = (event) => {
                xTo(event.clientX);
                yTo(event.clientY);
            };

            const setDefaultState = () => {
                gsap.to(cursor, {
                    width: 16,
                    height: 16,
                    duration: 0.3,
                    ease: "power3.out",
                });

                gsap.to(label, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.2,
                    ease: "power3.out",
                });

                label.textContent = "";
            };

            const setInteractiveState = () => {
                gsap.to(cursor, {
                    width: 36,
                    height: 36,
                    duration: 0.25,
                    ease: "power3.out",
                });

                gsap.to(label, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.2,
                    ease: "power3.out",
                });

                label.textContent = "";
            };

            const setProjectState = () => {
                gsap.to(cursor, {
                    width: 64,
                    height: 64,
                    duration: 0.3,
                    ease: "power3.out",
                });

                label.textContent = "VIEW";

                gsap.to(label, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.25,
                    ease: "power3.out",
                });
            };

            const handlePointerOver = (event) => {
                const target = event.target.closest("[data-cursor]");

                if (!target) {
                    setDefaultState();
                    return;
                }

                const cursorType = target.dataset.cursor;

                if (cursorType === "project") {
                    setProjectState();
                    return;
                }

                if (cursorType === "interactive") {
                    setInteractiveState();
                    return;
                }

                setDefaultState();
            };

            const handlePointerOut = (event) => {
                const target = event.target.closest("[data-cursor]");

                if (!target) return;

                const nextTarget =
                    event.relatedTarget?.closest?.("[data-cursor]");

                if (nextTarget === target) return;

                setDefaultState();
            };

            window.addEventListener("mousemove", handleMouseMove);

            document.addEventListener("pointerover", handlePointerOver);

            document.addEventListener("pointerout", handlePointerOut);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);

                document.removeEventListener("pointerover", handlePointerOver);

                document.removeEventListener("pointerout", handlePointerOut);
            };
        },
        { scope: cursorRef },
    );

    return (
        <div
            ref={cursorRef}
            className="pointer-events-none fixed left-0 top-0 z-100 items-center justify-center rounded-full bg-[#FD1C00] mix-blend-difference flex"
        >
            <span
                ref={labelRef}
                className="mono text-xs font-bold uppercase tracking-wider text-white opacity-0"
            />
        </div>
    );
}

export default CustomCursor;
