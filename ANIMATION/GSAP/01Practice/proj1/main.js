import './style.css'
import { gsap } from "gsap";
  
// gsap.to('.box', {
//   // x:500, rotation: 360, duration: 3, ease: 'power2.in'
//   x: 400, rotation: 720, duration: 3, ease: 'bounce.out'

// })

// gsap.from('.box', {
//   // x:500, rotation: 360, duration: 3, ease: 'power2.in'
//   x: 400, rotation: 720, duration: 3, ease: 'bounce.out'

// })


let tween = gsap.fromTo('.box', {
  opacity: 1,
  scale: 0.5
}, {
  opacity: 0, 
  // scale: 1,
  scale: "+=2",
  duration: 1
}); 
// tween.repeat(5-1) //to repeat 
tween.repeat(5-1).yoyo(true); //to reverse and repeat  
// tween.yoyo(true); //and without repeat yoyo will not work  
 

let count = {score:0}; 
let countElem = document.querySelector('.count'); 


gsap.to(count, {
  score: 10, 
  duration: 5, 
  ease: 'bounce.out', 
  onUpdate: () => { 
    console.log(count);
    countElem.textContent = Math.round(count.score); 
  }
}); 





