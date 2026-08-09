import './style.css';
import { gsap } from "gsap";


// gsap.to('.btn', { scale: 1.25, duration: 0.4, ease: 'back.out(2)' });

// document.querySelectorAll('.btn').forEach(btn => {
//   btn.addEventListener('mouseenter', () => {

//     // 1. Scale Animation
//     if (btn.classList.contains('btn-scale')) {
//       gsap.to(btn, { scale: 1.25, duration: 0.4, ease: 'back.out(2)' });
//     }

//     // 2. Glow Animation (Box-shadow & Brightness)
//     if (btn.classList.contains('btn-glow')) {
//       gsap.to(btn, {
//         boxShadow: '0px 0px 20px 5px rgba(255, 215, 0, 0.85)',
//         backgroundColor: '#ffd700',
//         color: '#111111',
//         duration: 0.3,
//         ease: 'power2.out'
//       });
//     }

//     // 3. Wiggle Animation (Keyframe Rotation Sequence)
//     if (btn.classList.contains('btn-wiggle')) {
//       gsap.to(btn, {
//         keyframes: [
//           { rotation: -12, duration: 0.1 },
//           { rotation: 12, duration: 0.1 },
//           { rotation: -8, duration: 0.1 },
//           { rotation: 8, duration: 0.1 },
//           { rotation: 0, duration: 0.1 }
//         ],
//         ease: 'power1.inOut'
//       });
//     }

//   });

//   btn.addEventListener('mouseleave', () => {

//     // Reset Scale
//     if (btn.classList.contains('btn-scale')) {
//       gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
//     }

//     // Reset Glow
//     if (btn.classList.contains('btn-glow')) {
//       gsap.to(btn, {
//         boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
//         backgroundColor: '', // Reverts to CSS default
//         color: '',
//         duration: 0.3,
//         ease: 'power2.out'
//       });
//     }

//     // Reset Wiggle
//     if (btn.classList.contains('btn-wiggle')) {
//       gsap.to(btn, { rotation: 0, duration: 0.2, ease: 'power2.out' });
//     }

//   });
// });


// gsap.to('.box', {
//   x: 500,
//   duration: 3,
//   // ease: 'bounce.out', 
//   // stagger: 1
//   stagger: {
//     each: 0.8,
//     from: 'edges',
//     // grid: "auto",
//     ease: 'bounce.out'
//   }
// });



let tl = gsap.timeline({ paused: true });

tl.to('.box1', { x: 500, duration: 3, ease: 'elastic', stagger: 1 })
  .to('.box2', { x: 500, duration: 3, ease: 'elastic', stagger: 1 }, "<")
  .to('.box3', { x: 500, duration: 3, ease: 'elastic', stagger: 1 }, "test")
  .to('.box4', { x: 500, duration: 3, ease: 'elastic', stagger: 1 })
  .to('.box5', { x: 500, duration: 3, ease: 'elastic', stagger: 1 }, "-=2.8")
  .to('.box6', { x: 500, duration: 3, ease: 'elastic', stagger: 1 }, "test");

  tl.timeScale(2)
tl.play();

let timeout = setTimeout(() => {tl.timeScale(2)}, 2000);
// clearTimeout(timeout);


