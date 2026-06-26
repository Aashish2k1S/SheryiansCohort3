let h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.textContent = "Welcome";
document.body.appendChild(h1);

setTimeout(() => {
    h1.textContent = "Welcome to JS DOM!!!";
}, 3000);

