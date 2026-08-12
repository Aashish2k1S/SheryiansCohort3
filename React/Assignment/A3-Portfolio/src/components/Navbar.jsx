import { useRef, useState } from "react";
import { gsap, useGSAP } from "../hooks/useGsap";
import { scrollToSection } from "../hooks/useScrollToSection";

function Navbar() {
    const navRef = useRef(null);
    const menuRef = useRef(null);
    const menuItemsRef = useRef(null);

    const [menuOpen, setMenuOpen] = useState(false);

    useGSAP(
        () => {
            const nav = navRef.current;
            const menu = menuRef.current;
            const menuItems = menuItemsRef.current;

            if (!nav || !menu || !menuItems) return;

            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            // --------------------------------
            // Navbar entrance
            // --------------------------------

            if (!reduceMotion) {
                gsap.from(nav, {
                    y: -20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                });
            }

            // --------------------------------
            // Navbar scroll transition
            // --------------------------------

            if (!reduceMotion) {
                gsap.to(nav, {
                    scrollTrigger: {
                        trigger: document.documentElement,
                        start: "top top",
                        end: "100px top",
                        scrub: true,
                    },
                    backgroundColor: "rgba(10, 10, 10, 0.75)",
                    backdropFilter: "blur(12px)",
                    borderBottomColor: "#262626",
                });
            }

            // --------------------------------
            // Mobile menu
            // --------------------------------

            if (menuOpen) {
                gsap.set(menu, {
                    display: "block",
                });

                if (reduceMotion) {
                    gsap.set(menu, {
                        opacity: 1,
                        y: 0,
                    });

                    gsap.set(menuItems.children, {
                        opacity: 1,
                        y: 0,
                    });

                    return;
                }

                gsap.fromTo(
                    menu,
                    {
                        opacity: 0,
                        y: -10,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power3.out",
                    },
                );

                gsap.fromTo(
                    menuItems.children,
                    {
                        opacity: 0,
                        y: 10,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.35,
                        stagger: 0.06,
                        delay: 0.05,
                        ease: "power3.out",
                    },
                );
            } else {
                if (reduceMotion) {
                    gsap.set(menu, {
                        display: "none",
                        opacity: 0,
                        y: -10,
                    });

                    return;
                }

                gsap.to(menu, {
                    opacity: 0,
                    y: -10,
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => {
                        gsap.set(menu, {
                            display: "none",
                        });
                    },
                });
            }
        },
        {
            scope: navRef,
            dependencies: [menuOpen],
        },
    );

    const handleMenuToggle = () => {
        setMenuOpen((open) => !open);
    };

    const handleMenuLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent">
            <nav
                ref={navRef}
                className="relative mx-auto flex max-w-350 items-center justify-between px-6 py-6 md:px-10"
            >
                {/* Logo */}
                <button
                    type="button"
                    onClick={() => scrollToSection("hero")}
                    data-cursor="interactive"
                    className="text-sm font-bold tracking-tight text-[#FD1C00]"
                >
                    AASHISH.
                </button>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    data-cursor="interactive"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={handleMenuToggle}
                    className="mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 transition-colors hover:text-white md:hidden"
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <button
                        type="button"
                        onClick={() => scrollToSection("work")}
                        data-cursor="interactive"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        WORK
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollToSection("about")}
                        data-cursor="interactive"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        ABOUT
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollToSection("experience")}
                        data-cursor="interactive"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        EXPERIENCE
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollToSection("skills")}
                        data-cursor="interactive"
                        className="text-sm text-neutral-400 transition-colors hover:text-white"
                    >
                        SKILLS
                    </button>
                </div>

                {/* Desktop CTA */}
                <button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    data-cursor="interactive"
                    className="hidden items-center gap-2 transition-colors duration-200 hover:text-neutral-400 md:inline-flex"
                >
                    Let's Talk
                    <span>↗</span>
                </button>

                {/* Mobile Menu */}
                <div
                    id="mobile-menu"
                    ref={menuRef}
                    aria-hidden={!menuOpen}
                    className="absolute left-0 right-0 top-full hidden border-b border-neutral-800 bg-[#0a0a0a]/95 px-6 py-8 backdrop-blur-md md:hidden"
                >
                    <div
                        ref={menuItemsRef}
                        className="flex flex-col"
                    >
                        <button
                            type="button"
                            onClick={() => scrollToSection("work")}
                            data-cursor="interactive"
                            onClick={handleMenuLinkClick}
                            tabIndex={menuOpen ? 0 : -1}
                            className="border-b border-neutral-800 py-4 text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                            WORK
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("about")}
                            data-cursor="interactive"
                            onClick={handleMenuLinkClick}
                            tabIndex={menuOpen ? 0 : -1}
                            className="border-b border-neutral-800 py-4 text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                            ABOUT
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("experience")}
                            data-cursor="interactive"
                            onClick={handleMenuLinkClick}
                            tabIndex={menuOpen ? 0 : -1}
                            className="border-b border-neutral-800 py-4 text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                            EXPERIENCE
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("skills")}
                            data-cursor="interactive"
                            onClick={handleMenuLinkClick}
                            tabIndex={menuOpen ? 0 : -1}
                            className="border-b border-neutral-800 py-4 text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                            SKILLS
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            data-cursor="interactive"
                            onClick={handleMenuLinkClick}
                            tabIndex={menuOpen ? 0 : -1}
                            className="py-4 text-sm text-neutral-400 transition-colors hover:text-white"
                        >
                            CONTACT
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;