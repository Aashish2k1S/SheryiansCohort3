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

// REMOVED: localStorage.removeItem("products"); -> This was wiping your data on every reload!

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
let products = JSON.parse(localStorage.getItem("products")) || [
    new Product(
        1,
        "Wireless Headphones",
        59,
        "High-quality noise-canceling wireless headphones with a 20-hour battery life.",
        "https://picsum.photos/seed/headphones/300/300"
    ),
    new Product(
        2,
        "Fitness Smartwatch",
        129,
        "Waterproof fitness tracker with heart rate monitor and sleep tracking.",
        "https://picsum.photos/seed/smartwatch/300/300"
    ),
    new Product(
        3,
        "Mechanical Keyboard",
        89,
        "RGB backlit mechanical keyboard with tactile blue switches for typing and gaming.",
        "https://picsum.photos/seed/keyboard/300/300"
    ),
    new Product(
        4,
        "Ergonomic Gaming Mouse",
        45,
        "Wired gaming mouse with adjustable DPI settings and customizable side buttons.",
        "https://picsum.photos/seed/mouse/300/300"
    ),
    new Product(
        5,
        "Portable Power Bank",
        24,
        "10000mAh portable charger with dual USB outputs and fast charging support.",
        "https://picsum.photos/seed/powerbank/300/300"
    ),
    new Product(
        6,
        "Bluetooth Speaker",
        39,
        "Compact and waterproof portable Bluetooth speaker delivering deep bass.",
        "https://picsum.photos/seed/speaker/300/300"
    ),
    new Product(
        7,
        "Aluminum Laptop Stand",
        19,
        "Adjustable laptop riser compatible with all laptops ranging from 10 to 15.6 inches.",
        "https://picsum.photos/seed/laptopstand/300/300"
    ),
    new Product(
        8,
        "1080p HD Webcam",
        49,
        "High-definition web camera with a built-in dual noise reduction microphone.",
        "https://picsum.photos/seed/webcam/300/300"
    ),
    new Product(
        9,
        "USB-C Hub Adapter",
        29,
        "7-in-1 Type C dongle featuring 4K HDMI, USB 3.0 ports, and SD/TF card readers.",
        "https://picsum.photos/seed/usbc/300/300"
    ),
    new Product(
        10,
        "Extended Desk Pad",
        15,
        "Large anti-slip rubber base desk mat and gaming mouse pad.",
        "https://picsum.photos/seed/deskpad/300/300"
    )
];

const card = (id, name, price, desc, image) => {
    const 
        formattedName = name.trim().length > 15 ? name.trim().slice(0, 15) + "..." : name.trim(),
        formattedPrice = parseFloat(price).toFixed(2), 
        formattedDesc = desc.trim().length > 15 ? desc.trim().slice(0, 15) + "..." : desc.trim(), 
        formattedImage = image.trim();

    return `
        <div class="card"> 
            <div class="prodImg" data-id="${id}"> 
                <img src="${formattedImage}" alt="${name}" class="img${id}"/> 
            </div> 
            <div class="mid" data-id="${id}"> 
                <h1 class="id">${id}</h1> 
                <h2 class="name">${formattedName}</h2> 
                <h4 class="price">$ ${formattedPrice}</h4> 
                <small class="desc">${formattedDesc}</small> 
            </div> 
            <div class="lower"> 
                <i class="ri-delete-bin-6-line delete" data-id="${id}"></i>
                <i class="ri-shopping-bag-line cart" data-id="${id}"></i>
            </div>
        </div>
    `;
};

const renderProductCard = () => {
    hero.innerHTML = products.length > 0
        ? products.map(({ id, name, price, desc, image }) => card(id, name, price, desc, image)).join("")
        : `<div id="noProduct">No products yet!!</div>`;
};


const sampleImgLoad = (src) => {
    // Remove previous samples
    document.querySelectorAll(".sample").forEach((e) => e.remove());

    if (!src) return;
    
    const sampleFormImg = document.createElement("img");
    sampleFormImg.setAttribute("id", "sampleFormImg");
    sampleFormImg.setAttribute("alt", "sample preview");
    sampleFormImg.classList.add("sample");

    // Proper way to handle image loading/errors
    sampleFormImg.onload = () => {
        imgUrlInp.after(sampleFormImg);
    };

    sampleFormImg.onerror = () => {
        alert("Invalid Image URL!!");
    };

    sampleFormImg.src = src; // Trigger the load
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

    sampleImgLoad("");
};

const edit = (prodId) => {
    let index = products.findIndex((p) => p.id === prodId);
    if (index === -1) return; // Safety check

    formVisibility(1);

    let { id, name, price, desc, image: img } = products[index];

    form[0].value = id;
    form[1].value = name;
    form[2].value = price;
    form[3].value = desc;
    form[4].value = img;

    sampleImgLoad(img);
};

const del = (id) => {
    let consent = confirm(`Are you sure you want to delete product ID: ${id}?`);
    if (!consent) return;

    products = products.filter((p) => p.id !== id);

    if (products.length > 0) {
        localStorage.setItem("products", JSON.stringify(products));
    } else {
        localStorage.removeItem("products");
    }

    renderProductCard();
};

const submit = (e) => {
    e.preventDefault();

    // Fix: Safely handle ID generation if the array is completely empty
    const providedId = e.target[0].value;
    const generatedId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const id = parseInt(providedId || generatedId);

    const name = e.target[1].value.trim();
    const price = e.target[2].value.trim();
    const desc = e.target[3].value.trim();
    const img = e.target[4].value.trim();

    if (!id || isNaN(id)) {
        alert("Product ID is Invalid!!!");
        return;
    }

    if (!name || !price || !desc || !img) {
        alert("Please fill out the mandatory fields!!!");
        return;
    }

    const newProd = new Product(id, name, price, desc, img);

    if (providedId === "") {
        // Create new
        products.unshift(newProd);
    } else {
        // Update existing
        let index = products.findIndex((p) => p.id === id);
        if (index !== -1) {
            products[index] = newProd;
        }
    }

    localStorage.setItem("products", JSON.stringify(products));
    renderProductCard();
    formVisibility(0);
};

const pageLoad = () => {
    themeToggler();
    renderProductCard();
};

// Event Listeners
pageLoad();

theme.addEventListener("click", themeToggler);
create.addEventListener("click", () => formVisibility(1));
close.addEventListener("click", () => formVisibility(0));
form.addEventListener("submit", submit);

// Debounce or at least delay image loading to prevent firing on every single keystroke
imgUrlInp.addEventListener("change", () => sampleImgLoad(imgUrlInp.value.trim()));

// Cleaner Event Delegation
hero.addEventListener("click", (e) => {
    const target = e.target;
    
    // Find the closest parent that has a data-id attribute
    const actionContainer = target.closest('[data-id]');
    
    if (!actionContainer) return;

    const id = parseInt(actionContainer.dataset.id);

    if (target.closest(".delete")) {
        del(id);
    } else if (target.closest(".cart")) {
        alert("Added to cart: ID " + id);
    } else if (target.closest(".prodImg") || target.closest(".mid")) {
        edit(id);
    }
});