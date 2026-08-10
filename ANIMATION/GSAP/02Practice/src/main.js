import "./style.css";
import { gsap } from "gsap";

let loaderCounter = document.querySelector("#loader .loader-count h2");

let count = { value: 0 };

let tl = gsap.timeline({ paused: true });

tl.to("#loader", {
    y: "-100vh",
    display: "none",
    delay: 1,
    duration: 1,
    ease: "expo.out",
})
    .from(
        ".hero-bg img",
        {
            scale: 1.5,
            duration: 0.5,
            ease: "linear",
        },
        "-=0.8",
    )
    .fromTo(
        ".hero-text .heading h1",
        { opacity: 0, y: 100 },
        { display: "block", opacity: 1, y: 0, duration: 0.5, ease: "linear" },
    )
    .fromTo(
        ".hero-text .sub-heading p",
        { opacity: 0, y: 100 },
        { display: "block", opacity: 1, y: 0, duration: 0.5, ease: "linear" },
        "-=0.1",
    );

gsap.to(count, {
    value: 100,
    duration: 3,
    ease: "linear",
    onUpdate: () => {
        loaderCounter.textContent = Math.floor(count.value) + "%";
    },
    onComplete: () => {
        tl.play();
    },
});
