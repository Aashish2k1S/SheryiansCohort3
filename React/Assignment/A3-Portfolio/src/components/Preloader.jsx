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

        const context = createPreLoaderReveal(onComplete, loaderRef.current, textRef.current, counterRef.current);
        
        // const context = gsap.context(() => {
        //     const counter = { value: 0 };

        //     const timeline = gsap.timeline({
        //         onComplete,
        //     });

        //     timeline
        //         .fromTo(
        //             text,
        //             {
        //                 y: 20,
        //                 opacity: 0,
        //             },
        //             {
        //                 y: 0,
        //                 opacity: 1,
        //                 duration: 0.5,
        //                 ease: "power3.out",
        //             },
        //         )
        //         .to(counter, {
        //             value: 100,
        //             duration: 1.2,
        //             ease: "power2.out",
        //             onUpdate: () => {
        //                 counterRef.current.textContent = `${Math.round(
        //                     counter.value,
        //                 )}%`;
        //             },
        //         })
        //         .to(text, {
        //             y: -20,
        //             opacity: 0,
        //             duration: 0.4,
        //             ease: "power3.in",
        //         })
        //         .to(
        //             loader,
        //             {
        //                 yPercent: -100,
        //                 duration: 0.8,
        //                 ease: "power4.inOut",
        //             },
        //             "-=0.1",
        //         );
        // }, loaderRef);

        return () => context.revert();
    }, [onComplete]);

    return (
        <div
            ref={loaderRef}
            className="fixed inset-0 z-100 flex items-center justify-center bg-[#0a0a0a]"
        >
            <div className="flex flex-col items-center gap-4">
                <span
                    ref={textRef}
                    className="text-2xl font-bold tracking-tight text-[#FD1C00]"
                >
                    AASHISH.
                </span>

                <span
                    ref={counterRef}
                    className="mono text-s tracking-[0.2em] text-neutral-500"
                >
                    0%
                </span>
            </div>
        </div>
    );
}

export default Preloader;