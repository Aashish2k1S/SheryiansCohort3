import { gsap } from "../hooks/useGsap";

export function createPreLoaderReveal(onComplete, loader, text, counterRef) {

    const context = gsap.context(() => {
        const counter = { value: 0 };

        const timeline = gsap.timeline({
            onComplete,
        });

        timeline
            .fromTo(
                text,
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.out",
                },
            )
            .to(counter, {
                value: 100,
                duration: 1.2,
                ease: "power2.out",
                onUpdate: () => {
                    counterRef.textContent = `${Math.round(
                        counter.value,
                    )}%`;
                },
            })
            .to(text, {
                y: -20,
                opacity: 0,
                duration: 0.4,
                ease: "power3.in",
            })
            .to(
                loader,
                {
                    yPercent: -100,
                    duration: 0.8,
                    ease: "power4.inOut",
                },
                "-=0.1",
            );
    }, loader);

    return context;

}
