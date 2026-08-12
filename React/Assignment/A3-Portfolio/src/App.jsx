import { lazy, Suspense, useRef } from "react";
import { gsap, useGSAP } from "./hooks/useGsap";

const CustomCursor = lazy(() => import("./components/CustomCursor"));
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
    const pageRef = useRef(null);

    useGSAP(
        () => {
            const reduceMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
            ).matches;

            if (reduceMotion) return;

            gsap.set(pageRef.current, {
                opacity: 0,
            });

            gsap.to(pageRef.current, {
                opacity: 1,
                duration: 0.8,
                ease: "expo.out",
            });
        },
        {
            scope: pageRef,
        },
    );
    return (
        <main
            ref={pageRef}
            className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]"
        >
            <CustomCursor />
            <Navbar />
            <Hero />
            <Projects />
            <About />
            <Experience />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
