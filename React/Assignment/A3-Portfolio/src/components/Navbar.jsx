import { useRef } from "react";
import { gsap, useGSAP } from "../hooks/useGsap";

function Navbar() {
    const navRef = useRef(null);

    useGSAP(
        () => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            gsap.from(navRef.current, {
                y: -20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        },
        { scope: navRef },
    );

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav
                ref={navRef}
                className="mx-auto flex max-w-350 items-center justify-between px-6 py-6 md:px-10"
            >
                <a href="/" className="text-sm font-bold tracking-tight">
                    AASHISH.
                </a>

                <button
                    type="button"
                    className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 md:hidden"
                >
                    Menu
                </button>

                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#work"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        WORK
                    </a>

                    <a
                        href="#about"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        ABOUT
                    </a>

                    <a
                        href="#experience"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        EXPERIENCE
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        SKILLS
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        CONTACT
                    </a>
                </div>

                <a
                    href="#contact"
                    className="hidden items-center gap-2 transition-colors duration-200 hover:text-neutral-400 md:inline-flex"
                >
                    Let's Talk
                    <span>↗</span>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;
