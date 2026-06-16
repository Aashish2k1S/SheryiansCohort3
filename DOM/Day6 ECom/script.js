const body = document.body;
const create = document.querySelector('#create');
const theme = document.querySelector('#theme');

const hero = document.querySelector('#hero');

const formDiv = document.querySelector('#form');
const form = document.querySelector('form');
const close = document.querySelector('#close');





const themeToggler = () => {
    if (body.classList.toggle('dark')) {
        theme.innerHTML = '<i class="ri-moon-line"></i>';
    } else {
        theme.innerHTML = '<i class="ri-sun-line"></i>';
    }
}

let products = [];
function product(name, price, desc, image) {
    this.name = name;
    this.price = price;
    this.desc = desc;
    this.image = image
}

if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
}

const card = (index, name, price, desc, image) => {

    return `
        <div class="card">
            <img src="${image}" alt="img${index + 1}">
            <div class="mid">
                <div class="content">
                    <h3 class="name">${name}</h3>
                    <i class="ri-shopping-bag-line cart" onclick="cart(${index})"></i>
                </div>
                <p class="price">${price}</p>
                <p class="desc">${desc}</p>
            </div>
            <div class="lower">
                <i class="ri-edit-box-line update" onclick="edit(${index})"></i>
                <i class="ri-delete-bin-6-line delete" onclick="del(${index})"></i>
            </div>

        </div>
    `;
};

const renderProductCard = () => {
    hero.innerHTML = '';
    if (products.length > 0) {
        console.log(products);

        products.forEach(({ name, price, desc, img }, index) => {
            hero.innerHTML += card(index, name, price, desc, img);
        })
    }
    else {
        hero.innerHTML = `<div id="noProduct">no products yet!!</div>`;
    }

}
const edit = (index) => {
    formDiv.style.display = "flex";
    let {name, price, desc, img} = products[index]; 
    form.name.value = name;
    form.price.value = price;
    form.desc.value = desc;
    form.img.value = img;
}
    

const del = (index) => {
    let consent = confirm('Are sure you want to delete this product?'); 
    if (!consent) return; 

    products.splice(index, 1);

    products.length > 0 
    ? localStorage.setItem('products', JSON.stringify(products)) 
    : localStorage.removeItem('products'); 

    renderProductCard(); 
};



theme.addEventListener('click', themeToggler);

const pageLoad = () => {
    themeToggler();
    renderProductCard();
}

pageLoad();


create.addEventListener('click', () => {
    formDiv.style.display = "flex";
});
close.addEventListener('click', () => {
    form.reset();
    formDiv.style.display = "none";
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const price = e.target[1].value;
    const desc = e.target[2].value;
    const img = e.target[3].value;

    if (
        name.trim() === "" || price.trim() === "" ||
        parseFloat(price.trim()) <= 0 ||
        desc.trim() === "" || img.trim() === ""
    )
        alert('Please fillout the manadate fields!!!');

    products.push(new product(name, price, desc, img));
    localStorage.setItem('products', JSON.stringify(products));
    renderProductCard();
    form.reset();
});




