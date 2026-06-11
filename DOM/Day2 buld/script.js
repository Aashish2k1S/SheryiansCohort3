const bulb = document.querySelector("#bulb"); 
const btn = document.querySelector("button"); 

console.dir(bulb);
console.log(bulb);
console.dir(btn);
console.log(btn);

btn.addEventListener('click', () => {
    if(bulb.classList.toggle("glow")){
        btn.innerText = "OFF";
    }
    else {
        btn.innerText = "ON";
    }
});