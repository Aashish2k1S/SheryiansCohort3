import { useRef } from "react";
import { useGSAP } from "../hooks/useGsap";
import { createContactReveal } from "../animations/contactAnimations";

function Contact() {
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            createContactReveal(sectionRef);
        },
        { scope: sectionRef },
    );
    return (
        <section
            ref={sectionRef}
            id="contact"
            className="border-t border-border-custom px-6 py-32 md:px-10 md:py-40"
        >
            <div className="mx-auto max-w-350">
                <div className="contact-header mb-16 md:mb-20">
                    <p className="mono text-xs uppercase tracking-[0.25em] text-muted">
                        06 / Contact
                    </p>
                </div>

                <div className="contact-main grid gap-16 md:grid-cols-[1.5fr_1fr]">
                    {/* Main CTA */}
                    <div>
                        <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
                            LET&apos;S BUILD
                            <br />
                            SOMETHING
                            <br />
                            <span className="text-accent">USEFUL.</span>
                        </h2>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info flex flex-col justify-end">
                        <p className="max-w-md text-base leading-7 text-neutral-400">
                            Have an interesting project, opportunity, or problem
                            worth discussing? Get in touch.
                        </p>

                        <div className="mt-10 flex flex-col items-start gap-5">
                            <a
                                data-cursor="interactive"
                                href="mailto:aashishgupta.dev2001@gmail.com"
                                className="contact-link group flex items-center gap-3 text-sm font-medium"
                            >
                                <span>EMAIL</span>

                                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                    ↗
                                </span>
                            </a>

                            <a
                                data-cursor="interactive"
                                href="https://www.linkedin.com/in/aashish-gupta001/"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link group flex items-center gap-3 text-sm font-medium"
                            >
                                <span>LINKEDIN</span>

                                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                    ↗
                                </span>
                            </a>

                            <a
                                data-cursor="interactive"
                                href="https://github.com/Aashish2k1S"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link group flex items-center gap-3 text-sm font-medium"
                            >
                                <span>GITHUB</span>

                                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                    ↗
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
