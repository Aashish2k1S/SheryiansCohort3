//debounce
// let input = document.getElementById("search");
// function debounce(fn, delay) {
//     let timer;
//     return function (value) {
//         clearTimeout(timer);
//         timer = setTimeout(fn, delay, value);
//     };
// }

// function search(value) {
//     console.log("Searching:", value);
// }
// const debouncedSearch = debounce(search, 500);
input.addEventListener("input", (e) => {
    // console.log(e.target.value);    
    debouncedSearch(e.target.value);
});

//throttle
function throttle(fn, delay) {
    let lastTime = 0;
    return function (value) {
        const now = Date.now();
        if (now - lastTime >= delay) {
            lastTime = now;
            fn(value);
        }
    };
}

function handleScroll() {
    console.log("Scrolling...");
}

window.addEventListener(
    "scroll",
    //handleScroll
    throttle(handleScroll, 500),
);
