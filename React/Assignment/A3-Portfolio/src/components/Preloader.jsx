import { useEffect, useRef } from "react";
import { createPreLoaderReveal } from "../animations/preloaderAnimations";

function Preloader({ onComplete }) {
    const loaderRef = useRef(null);
    const textRef = useRef(null);
    const counterRef = useRef(null);

    useEffect(() => {
        const loader = loaderRef.current;
        const text = textRef.current;
        const counter = counterRef.current;

        if (!loader || !text || !counter) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reduceMotion) {
            onComplete();
            return;
        }

        const context = createPreLoaderReveal(
            onComplete,
            loader,
            text,
            counter,
        );

        return () => context.revert();
    }, [onComplete]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-100 flex items-center justify-center bg-background"
        >
            <div className="flex flex-col items-center gap-4">
                <span
                    ref={textRef}
                    data-cursor="interactive"
                    className="text-2xl font-bold tracking-tight text-accent"
                >
                    AASHISH.
                </span>

                <span
                    ref={counterRef}
                    data-cursor="interactive"
                    className="mono text-s tracking-[0.2em] text-muted"
                >
                    0%
                </span>
            </div>
        </div>
    );
}

export default Preloader;
