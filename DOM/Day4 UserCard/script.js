const theme = document.querySelector('#theme');
const body = document.querySelector('body');

const reset = document.querySelector('#reset');

const form = document.querySelector('form');

const nameInp = document.querySelector('#name');
const emailInp = document.querySelector('#email');

const imgUrlInp = document.querySelector('#imgUrl');
const testImg = document.querySelector('#testImg');

const submitBtn = document.querySelector('#submit');

const main = document.querySelector('main');


function User(name, email, imgUrl) {
    this.name = name;
    this.email = email;
    this.imgUrl = imgUrl;
}
let userCards = new Array();

pageLoad();

function pageLoad() {
    if (localStorage.getItem("userCards"))
        userCards = JSON.parse(localStorage.getItem("userCards"));

    themeToggle();
    renderCards();
}

function renderCards() {
    main.innerHTML = "";
    if (userCards.length <= 0) return;

    userCards.forEach(({ name, email, imgUrl }, index) => {
        main.innerHTML += `
            <div class="card">
                <img src="${imgUrl}" alt="card${index + 1}">
                <p><b>Name</b>: <span id="name">${name}</span></p>
                <p><b>Email</b>: <span id="email">${email}</span></p>                
                <button id="edit" class="button"" 
                    onclick=" editCard(${index})">Edit</button>
                <button id="delete" class="button" 
                    onclick="delCard(${index})">Delete</button>
            </div>
        `
    });
}

//#region for theme purpose 
function themeToggle() {
    if (body.classList.toggle('dark')) {
        theme.classList.add('ri-sun-line');
        theme.classList.remove('ri-moon-line');
    }
    else {
        theme.classList.add('ri-moon-line');
        theme.classList.remove('ri-sun-line');
    }
};
//#endregion for theme purpose 


function testUrl() {
    testImg.innerHTML = "";
    let url = imgUrlInp.value;
    if (!url.trim()) return;
    testImg.innerHTML = `<img src="${url}" alt="testIMG">`;
}

//#region for reset form 
function resetClick() {
    form.reset();
    testUrl();
}
//#endregion for reset form

//#region testing image 
imgUrlInp.addEventListener('keyup', (e) => testUrl());
//#endregion testing image

//#region CRUD 
form.addEventListener("submit", (e) => { //add & update 
    e.preventDefault();
    let name = nameInp.value;
    let email = emailInp.value;
    let imgUrl = imgUrlInp.value;

    if (name.trim() === "" || email.trim() === "" || imgUrl.trim() === "") {
        alert('Please fill out all the mandate fields..');
        return;
    }

    userCards.unshift(new User(name, email, imgUrl));
    localStorage.setItem("userCards", JSON.stringify(userCards));
    submitBtn.textContent = "Submit";
    renderCards();
    resetClick();
});

function editCard(index) { //edit 
    let { name, email, imgUrl } = userCards[index];
    nameInp.value = name;
    emailInp.value = email;
    imgUrlInp.value = imgUrl;
    submitBtn.textContent = "Update";
    userCards.splice(index, 1);
    renderCards();
    testUrl();
};

function delCard(index) { //delete 
    let consent = confirm('Are you sure you want to delete this card?');
    if (!consent) return;
    userCards.splice(index, 1);
    localStorage.setItem("userCards", JSON.stringify(userCards));
    renderCards();
}
//#endregion CRUD