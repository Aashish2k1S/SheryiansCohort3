const body = document.body;
const hgScore = document.querySelector("#hgScore");
const themeBtn = document.querySelector("#theme");

const timee = document.querySelector("#time");
const scoree = document.querySelector("#score");

const mainBox = document.querySelector("#mainBox");

const box = document.createElement("div");
box.setAttribute("id", "box");

const start = document.querySelector("#start");

const overlay = document.querySelector("#overlay");
const newHgScore = document.querySelector("#newHgScore");
const finalScore = document.querySelector("#finalScore");
const reset = document.querySelector("#reset");


let highestScore = 0, times = 0, scores = 0, clickFlag = false;
let interval, overTimeout, resetTimeout;


const resetGame = () => {
    clearInterval(interval);
    clearTimeout(overTimeout);
    clearTimeout(resetTimeout);

    clickFlag = false;

    timee.innerHTML = "0";
    scoree.innerHTML = "0";
    overlay.style.display = "none";
    hgScore.innerText = highestScore;
};

const themeToggler = (e) => {
    if (body.classList.toggle("dark")) {
        themeBtn.innerHTML = `<i class="ri-moon-line"></i>`;
    } else {
        themeBtn.innerHTML = `<i class="ri-sun-line"></i>`;
    }
};

const pageLoad = () => {
    highestScore = localStorage.getItem("score")
        ? localStorage.getItem("score")
        : "0";

    clickFlag = false;
    themeToggler();
    hgScore.innerText = highestScore;
};
pageLoad();

const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, 0.8)`;
};

const randomPosition = () => {
    let H = mainBox.clientHeight - box.offsetHeight + 1;
    let W = mainBox.clientWidth - box.offsetWidth + 1;
    let rY = Math.floor(Math.random() * H);
    let rX = Math.floor(Math.random() * W);

    // console.dir(mainBox);
    // console.dir(box);

    // console.log(`mainBox rY ${mainBox.clientHeight}, rX ${mainBox.clientWidth}`);
    // console.log(`box rY ${box.offsetHeight}, rX ${box.offsetWidth}`);
    console.log(`rY ${rY}, rX ${rX}`);

    box.style.top = `${rY}px`;
    box.style.left = `${rX}px`;
    let color = randomColor();
    box.style.boxShadow = `0 0 0.5rem ${color}`;
    box.style.backgroundColor = color;

	clickFlag = false;
};

themeBtn.addEventListener("click", themeToggler);

const gameOver = () => {
    finalScore.innerText = scores;

    if (scores > highestScore) {
        highestScore = scores;
        localStorage.setItem("score", highestScore);
        hgScore.innerText = highestScore;

        newHgScore.style.display = "block";
        newHgScore.innerText = `🎉🎉 New High Score : ${highestScore}🎉🎉`;

        finalHgScore.innerText = highestScore;
    } else {
        newHgScore.style.display = "none";
        newHgScore.innerHTML = "";

        finalHgScore.innerText = highestScore;
    }
};

start.addEventListener("click", () => {
    clearInterval(interval);
    clearTimeout(overTimeout);
    clearTimeout(resetTimeout);

    mainBox.innerHTML = "";
    times = 0;
    scores = 0;

    timee.innerText = times;
    scoree.innerText = scores;

    interval = setInterval(() => {
        mainBox.innerHTML = "";
        mainBox.appendChild(box);
        randomPosition();

        times++;

        timee.innerText = times;
    }, 1000);

    overTimeout = setTimeout(() => {
        clearInterval(interval);

        mainBox.innerHTML = "";

        gameOver();

        overlay.style.display = "flex";

        resetTimeout = setTimeout(resetGame, 3000);
    }, 10000);
});

box.addEventListener("click", () => {
	if (!clickFlag) scores++;
	clickFlag = true;
    scoree.innerText = scores;
});

reset.addEventListener("click", resetGame);
