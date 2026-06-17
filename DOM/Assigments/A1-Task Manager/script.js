const body = document.body;
const theme = document.getElementById("theme");
const add = document.getElementById("add");
const search = document.getElementById("search");
const tags = document.getElementById("tags");
 

function themeToggler () {
    if(body.classList.toggle("dark")) {
        theme.innerHTML = '<i class="ri-sun-line"></i>';
    }
    else { 
        theme.innerHTML = '<i class="ri-moon-line"></i>';
    }
}

function preLoad() {
    themeToggler();
}

preLoad();

theme.addEventListener("click", themeToggler);