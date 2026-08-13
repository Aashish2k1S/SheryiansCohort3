import { useRef } from "react";
import { useGSAP } from "../hooks/useGsap";
import { createHeroReveal } from "../animations/heroAnimations";
import useMagnetic from "../hooks/useMagnetic";
import { scrollToSection } from "../hooks/useScrollToSection";

function Hero() {
    const heroRef = useRef(null);
    const exploreRef = useMagnetic();

    useGSAP(
        () => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            createHeroReveal(heroRef.current);
        },
        { scope: heroRef },
    );

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative flex min-h-screen items-end overflow-hidden px-6  pb-12 md:px-10 md:pb-16"
        >
            <div className="mx-auto w-full max-w-350">
                {/* Eyebrow */}
                <div className="hero-eyebrow mb-8">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                        Software Developer · India
                    </p>
                </div>

                {/* Headline */}
                <h1 data-cursor="interactive" className="max-w-250 text-[clamp(3.5rem,9vw,9rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
                    <span className="hero-line block">I BUILD</span>
                    <span className="hero-line block">SYSTEMS</span>
                    <span className="hero-line block text-accent">THAT MATTER.</span>
                </h1>

                {/* Bottom Content */}
                <div className="hero-bottom mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                    <p className="max-w-md text-base leading-relaxed text-neutral-400">
                        Backend-focused software developer building APIs,
                        data-driven applications and modern web experiences.
                    </p>

                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        <button
                            type="button"
                            onClick={() => scrollToSection("work")}
                            ref={exploreRef}
                            className="group flex items-center gap-3 px-4 py-3 text-sm font-medium"
                        >
                            <span>EXPLORE WORK</span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                ↗
                            </span>
                        </button>

                        <span className="mono text-xs text-subtle">
                            .NET · PYTHON · SQL · REACT
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                type="button"
                onClick={() => scrollToSection("contact")} 
                data-cursor="interactive"
                className="hero-scroll mono absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-widest text-subtle md:block mix-blend-difference"
            >
                Scroll to explore ↓
            </button>
        </section>
    );
}

export default Hero;
