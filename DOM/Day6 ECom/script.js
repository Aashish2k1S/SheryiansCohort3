import { task } from "./tasks.js";

//#region elements

const body = document.body;
const create = document.querySelector("#create");
const theme = document.querySelector("#theme");

const main = document.querySelector("main");

const hero = document.querySelector("#hero");

const formDiv = document.querySelector("#form");
const form = document.querySelector("form");
const imgUrlInp = document.querySelector("#imgUrlInp");

const close = document.querySelector("#close");

//#endregion elements

localStorage.removeItem("products");

const themeToggler = () => {
    theme.innerHTML = body.classList.toggle("dark")
        ? '<i class="ri-sun-line"></i>'
        : '<i class="ri-moon-line"></i>';
};

function Product(id, name, price, desc, image) {
    this.id = parseInt(id);
    this.name = name;
    this.price = parseFloat(price).toFixed(2);
    this.desc = desc;
    this.image = image;
}
let products = JSON.parse(localStorage.getItem("products")) || task;

const card = (id, name, price, desc, image) => {
    name =
        name.trim().length > 15
            ? name.trim().slice(0, 15) + "..."
            : name.trim();
    desc =
        desc.trim().length > 15
            ? desc.trim().slice(0, 15) + "..."
            : desc.trim();
    price = parseFloat(price).toFixed(2);

    return `
        <div class="card"> 
            <div class="prodImg" data-id="${id}"> 
                <img src="${image}" alt="${name}" class="img${id}"/> 
            </div> 
            <div class="mid" data-id="${id}"> 
                <h1 class="id">${id}</h1> 
                <h2 class="name">${name}</h2> 
                <h4 class="price">$ ${price}</h4> 
                <small class="desc">${desc}</small> 
            </div> 
            <div class="lower"> 
                <i class="ri-delete-bin-6-line delete" data-id="${id}"></i>
                <i class="ri-shopping-bag-line cart" data-id="${id}"></i>
            </div>
        </div>
    `;
};

const renderProductCard = () => {
    hero.innerHTML = "";
    hero.innerHTML =
        products.length > 0
            ? products
                  .map(({ id, name, price, desc, image }) => {
                      return card(id, name, price, desc, image);
                  })
                  .join("")
            : `<div id="noProduct">no products yet!!</div>`;
};

const formVisibility = (mode) => {
    form.reset();

    if (mode === 1) {
        formDiv.style.display = "flex";
        main.classList.add("main-overflow");
    } else {
        formDiv.style.display = "none";
        main.classList.remove("main-overflow");
    }

    sampleFormImg.src = "";
    sampleFormImg.style.display = "none";
};

const edit = (prodId) => {
    let index = products.findIndex((p) => p.id === prodId);
    formVisibility(1);

    let { id, name, price, desc, image: img } = products[index];

    form[0].value = id;
    form[1].value = name;
    form[2].value = price;
    form[3].value = desc;
    form[4].value = img;
};

const del = (id) => {
    let consent = confirm(`Are sure you want to delete the product-${id}?`);
    if (!consent) return;

    let index = products.findIndex((p) => p.id === id);
    products.splice(index, 1);

    products.length > 0
        ? localStorage.setItem("products", JSON.stringify(products))
        : localStorage.removeItem("products");

    renderProductCard();
};

const submit = (e) => {
    e.preventDefault();

    const id = parseInt(
        e.target[0].value || Math.max(...products.map(({ id }) => id)) + 1,
    );
    const name = e.target[1].value.trim();
    const price = parseFloat(e.target[2].value).toFixed(2);
    const desc = e.target[3].value.trim();
    const img = e.target[4].value.trim();

    if (!id) {
        alert("Product ID is Invalid!!!");
        return;
    }

    console.log(img);

    if (!name || !price || !price || !desc || !img) {
        alert("Please fillout the manadate fields!!!");
        return;
    }

    products.unshift(new Product(id, name, price, desc, img));
    localStorage.setItem("products", JSON.stringify(products));
    renderProductCard();
    formVisibility(0);
};

const pageLoad = () => {
    themeToggler();
    renderProductCard();
};

pageLoad();

theme.addEventListener("click", themeToggler);
create.addEventListener("click", () => formVisibility(1));
close.addEventListener("click", () => formVisibility(0));
form.addEventListener("submit", (e) => submit(e));
imgUrlInp.addEventListener("input", () => {
    let testElem = document.querySelectorAll(".sample");
    testElem.forEach((e) => e.remove());

    let src = imgUrlInp.value.trim();
    if (!src) return;

    const sampleFormImg = document.createElement("img");

    sampleFormImg.setAttribute("id", "sampleFormImg");
    sampleFormImg.setAttribute("alt", "sample");
    sampleFormImg.classList.add("sample");

    try {
        sampleFormImg.src = src;
        imgUrlInp.after(sampleFormImg);
    } catch (e) {
        sampleFormImg.remove();
        alert("Invalid URL!!");
    }
});
hero.addEventListener(
    "click",
    (e) => {
        if (e.target.closest(".prodImg")) {
            let id = parseInt(e.target.closest(".prodImg").dataset.id);
            edit(id);
        } else if (e.target.closest(".mid")) {
            let id = parseInt(e.target.closest(".mid").dataset.id);
            edit(id);
        } else if (e.target.closest(".delete")) {
            let id = parseInt(e.target.closest(".delete").dataset.id);
            del(id);
        } else if (e.target.closest(".cart")) {
            let id = parseInt(e.target.closest(".cart").dataset.id);
            alert("clicked on cart for id " + id);
        }
    },
    true,
);
