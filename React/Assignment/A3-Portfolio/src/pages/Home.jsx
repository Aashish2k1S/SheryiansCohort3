import { lazy, useRef, useState } from "react";
import { gsap, useGSAP } from "../hooks/useGsap";

const Preloader = lazy(() => import("../components/Preloader"));
const Navbar = lazy(() => import("../components/Navbar"));
const Hero = lazy(() => import("../components/Hero"));
const Projects = lazy(() => import("../components/Projects"));
const About = lazy(() => import("../components/About"));
const Experience = lazy(() => import("../components/Experience"));
const Education = lazy(() => import("../components/Education"));
const Skills = lazy(() => import("../components/Skills"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const pageRef = useRef(null);

    useGSAP(
        () => {
            if (isLoading) return;

            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) {
                gsap.set(pageRef.current, {
                    opacity: 1,
                });

                return;
            }

            gsap.fromTo(
                pageRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.8,
                    ease: "expo.out",
                },
            );
        },
        {
            scope: pageRef,
            dependencies: [isLoading],
        },
    );

    return (
        <>
            {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

            <main
                ref={pageRef}
                className="min-h-screen bg-background text-foreground"
            >
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Contact />
                <Footer />
            </main>
        </>
    );
};

export default Home;
