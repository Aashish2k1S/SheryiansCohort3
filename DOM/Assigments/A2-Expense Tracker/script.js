// #region selectors
const body = document.body,
    main = document.querySelector("main");

const toast = document.querySelector("#toast");

const loginSignup = document.querySelector(".loginSignup"),
    loginSignupForm = document.querySelector("#loginSignupForm"),
    loginSignupTitle = document.querySelector(".loginSignupTitle"),
    loginSignupHead = document.querySelector(".loginSignupHead"),
    loginSignupUsername = document.querySelector(".loginSignupUsername"),
    authBtn = document.querySelector("#authBtn"),
    spanBottom = document.querySelector("#spanBottom"),
    anchor = document.querySelector("#anchor");

const hero = document.querySelector(".hero");

const optionsList = document.querySelector(".optionsList");

const dashboard = document.querySelector("#dashboard"),
    userId = document.querySelector("#userId"),
    userName = document.querySelector("#userName"),
    // theme = document.querySelector('#theme'),
    addTranBtn = document.querySelector("#addTranBtn"),
    logout = document.querySelector("#logout");

const amtBalance = document.querySelector("#amtBalance"),
    amtIncome = document.querySelector("#amtIncome"),
    amtExpense = document.querySelector("#amtExpense"),
    cntTransaction = document.querySelector("#cntTransaction");

const graph = document.querySelector("#myChart"),
    themeSwitch = document.querySelector("#themeToggler"),
    reset = document.querySelector("#reset");

const seacrhInp = document.querySelector("#seacrhInp"),
    filterInp = document.querySelector("#filterInp"),
    transactionsData = document.querySelector("#transactionsData");

const setting = document.querySelector("#setting"),
    settingForm = document.querySelector("#settingForm");

const addTransaction = document.querySelector(".add-transaction-wrapper"),
    addTransactionForm = document.querySelector("#addTransactionForm"),
    addTransactionHead = document.querySelector("#addTransactionHead"),
    typeInp = document.querySelector("#typeInp"),
    categoryInp = document.querySelector("#categoryInp"),
    closeAddTransaction = document.querySelector(".add-transaction-close");

// #endregion selectors

theme.style.display = "none";

function debounce(fn, delay) {
    let timer;
    return function (value) {
        clearTimeout(timer);
        timer = setTimeout(fn, delay, value);
    };
}

function User(
    id,
    username,
    password,
    isDark = false,
    currency = `inr`,
    transactions = [],
    isLoggedIn = false,
) {
    this.id = parseInt(id);
    this.username = username;
    this.password = password;
    this.isDark = Boolean(isDark);
    this.currency = currency;
    this.transactions = transactions;
}
function Transaction(id, amount, type, category, date, description) {
    this.id = parseInt(id);
    this.amount = parseFloat(amount).toFixed(2);
    this.type = type;
    this.category = category;
    this.date = date;
    this.description = description;
}

const
    currency = { usd: `$`, eur: `€`, gbp: `£`, inr: `₹`, jpy: `¥` },
    type = [`income`, `expense`],
    category = [
        `Food &amp; Dining`,
        `Shopping`,
        `Recharge &amp; Bills`,
        `Petrol &amp; Auto`,
        `Utilities`,
        `Salary`,
        `Entertainment`,
        `Other`,
    ];

let userData = [];

if (localStorage.getItem("userData")) userData = JSON.parse(localStorage.getItem("userData"));


function notify(message, type = 1) {
    if (!message.trim()) return;

    toast.textContent = message;
    toast.style.display = "block";
    toast.classList.add("toast-hide");
    toast.classList.add(type ? "toast-success" : "toast-warn");

    let notifyTimeout = setTimeout(() => {
        toast.classList.remove("toast-hide");
        toast.classList.remove(type ? "toast-success" : "toast-warn");
        toast.style.display = "none";
        toast.textContent = "";
        clearTimeout(notifyTimeout);
    }, 2000);
}

// notify("Welcome to FinTrack Pro");

function authToggle(flag) {
    loginSignupForm.reset();
    loginSignupTitle.textContent = flag ? "Create Account" : "Welcome Back";
    loginSignupHead.textContent = flag
        ? "Join FinTrack Pro"
        : "Login to FinTrack Pro";
    loginSignupUsername.textContent = flag ? "Choose a Username" : "Username";

    authBtn.classList.remove(flag ? "loginBtn" : "signupBtn");
    authBtn.classList.add(flag ? "signupBtn" : "loginBtn");
    authBtn.textContent = flag ? "Register" : "Login";


    spanBottom.textContent = flag
        ? "Already have an account?"
        : "Don't have an account?";
    anchor.textContent = flag ? "Login here" : "Register here";
}

function themeToggle(flag) {
    if (flag) {
        body.classList.add("dark");
        // theme.innerHTML = `<i class="ri-sun-fill"></i>`;
        themeSwitch.setAttribute("checked", "true");
    } else {
        body.classList.remove("dark");
        // theme.innerHTML = `<i class="ri-moon-fill"></i>`;
        themeSwitch.removeAttribute("checked");
    }
}

function register(event) {
    event.preventDefault();
    let username = event.target[0].value,
        password = event.target[1].value;

    // console.log(username);
    // console.log(password);

    let usernameTaken = userData.filter(
        (user) => user.username === username,
    ).length;
    if (usernameTaken) {
        notify("username already existed ❌", 0);
        return;
    }

    let newUserID = 1;
    if (userData.length > 0)
        newUserID = Math.max(...userData.map((user) => user.id)) + 1;

    const newUser = new User(newUserID, username, password);

    userData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(userData));

    authToggle(false);
    notify("Registered successfully 🎉", 1);
}

function login(event) {
    event.preventDefault();
    let username = event.target[0].value,
        password = event.target[1].value;

    // console.log(username);
    // console.log(password);

    let userCheck = userData.filter(
        (user) => user.username === username && user.password === password,
    );

    if (!userCheck.length) {
        notify("Invalid username or password ❌", 0);
        return;
    }
    let idx = userData.indexOf(userCheck[0]),
        userID = userCheck[0].id;

    userData[idx].isLoggedIn = true;
    localStorage.setItem("userData", JSON.stringify(userData));

    render();

    authToggle(false);
    notify(`${userName.textContent}, Welcome to FinTrack Pro 🎉`, 1);
}

function loadAll() {
    typeInp.innerHTML = type
        .sort()
        .map((e) => {
            return `<option value="${e.toLowerCase()}"> 
            ${e.substring(0, 1).toUpperCase() +
                e.substring(1, e.length).toLowerCase()
                } 
        </option>`;
        })
        .join("");

    filterInp.innerHTML =
        `<option value="">All</option>` +
        type
            .sort()
            .map((e) => {
                return `<option value="${e.toLowerCase()}"> 
            ${e.substring(0, 1).toUpperCase() +
                    e.substring(1, e.length).toLowerCase()
                    } 
        </option>`;
            })
            .join("");

    categoryInp.innerHTML =
        `<option value="" disabled selected>Select a category</option>` +
        category.map((e) => `<option value="${e}">${e}</option>`).join("");
}

function settingPage() {
    let idx = userData.findIndex(
        (user) => user.id === parseInt(userId.textContent),
    );
    userName.textContent = userData[idx].username;

    // console.log('working');

    dashboard.style.display = "none";
    setting.style.display = "block";

    settingForm.reset();

    settingForm[0].value = userData[idx].username;
    settingForm[1].value = userData[idx].currency;
}

function render() {
    loadAll();

    let idx = userData.findIndex((user) => user.isLoggedIn);
    let id = userData[idx].id;

    main.style.display = "none";
    hero.style.display = "flex";

    dashboard.style.display = "block";
    setting.style.display = "none";

    userId.textContent = id;
    userName.textContent = userData[idx].username;

    addTransaction.style.display = "none";
    addTransactionForm.reset();

    let balance = 0,
        income = 0,
        expense = 0,
        transactionCount = 0,
        userCurrency = currency[userData[idx].currency];

    // console.log(userCurrency);

    let transactions = userData[idx].transactions;

    if (transactions.length) {
        balance = transactions
            .map((tran) =>
                parseFloat(
                    tran.type === "income" ? tran.amount : -tran.amount,
                ).toFixed(2),
            )
            .reduce((a, b) => a + parseFloat(b), 0.0);

        income = transactions
            .map((tran) =>
                parseFloat(tran.type === "income" ? tran.amount : 0).toFixed(2),
            )
            .reduce((a, b) => a + parseFloat(b), 0.0);

        expense = transactions
            .map((tran) =>
                parseFloat(tran.type === "income" ? 0 : tran.amount).toFixed(2),
            )
            .reduce((a, b) => a + parseFloat(b), 0.0);

        transactionCount = transactions.length;
    }

    balance =
        balance.toFixed(2) > 1000000
            ? (balance * 0.000001).toFixed(0) + "M"
            : balance.toFixed(2) > 1000
                ? (balance * 0.001).toFixed(0) + "K"
                : balance.toFixed(2);
    income =
        income.toFixed(2) > 1000000
            ? (income * 0.000001).toFixed(0) + "M"
            : income.toFixed(2) > 1000
                ? (income * 0.001).toFixed(0) + "K"
                : income.toFixed(2);
    expense =
        expense.toFixed(2) > 1000000
            ? (expense * 0.000001).toFixed(0) + "M"
            : expense > 1000
                ? (expense * 0.001).toFixed(0) + "K"
                : expense;

    // console.log(balance);
    // console.log(income);
    // console.log(expense);
    // console.log(transactionCount);
    // console.log(userCurrency);

    amtBalance.textContent = `${userCurrency} ${balance}`;
    amtIncome.textContent = `${userCurrency} ${income}`;
    amtExpense.textContent = `${userCurrency} ${expense}`;
    cntTransaction.textContent = `${transactionCount}`;

    let transaction = userData[idx].transactions;
    graphrender(transaction);
    themeToggle(userData[idx].isDark);

    seacrhInp.value = "";
    transactionRender(seacrhInp.value);
}

function graphrender(transactions) {
    let income = 0,
        expense = 0;

    if (transactions.length) {
        income = transactions
            .filter((e) => e.type === "income")
            .map((e) => e.amount)
            .reduce((a, b) => a + parseFloat(b), 0);
        expense = transactions
            .filter((e) => e.type === "expense")
            .map((e) => e.amount)
            .reduce((a, b) => a + parseFloat(b), 0);
    }

    const ctx = graph.getContext("2d");
    const existingChart = Chart.getChart(ctx);
    if (existingChart) existingChart.destroy();

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [""],
            datasets: [
                {
                    label: "Income",
                    data: [income],
                    backgroundColor: "rgba(69, 168, 69, 0.8)",
                },
                {
                    label: "Expenses",
                    data: [expense],
                    backgroundColor: "rgba(153, 27, 27, 0.8)",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: true, position: "top" } },
            scales: {
                x: { title: { display: true, text: "Income vs Expenses" } },
            },
        },
    });
}
function transactionRender() {
    let search = seacrhInp.value.toLowerCase(),
        searchFilter = filterInp.value.trim().toLowerCase();

    transactionsData.innerHTML = "";
    let idx = userData.findIndex(
        (user) => user.id === Number(userId.textContent),
    );
    let userCurrency = currency[userData[idx].currency],
        transactions = userData[idx].transactions || [];

    if (search.trim() || searchFilter !== "") {
        transactions = transactions.filter((transaction) => {
            const matchesSearch = transaction.description
                .toLowerCase()
                .includes(search);
            const matchesCategory = transaction.type
                .toLowerCase()
                .includes(searchFilter);
            return matchesSearch && matchesCategory;
        });
    }

    if (!transactions.length) return;

    transactionsData.innerHTML = transactions
        .map((transaction) => {
            return `
                <tr>
                    <td style="display: none;">${transaction.id}</td>
                    <td>${transaction.date}</td>
                    <td>${transaction.description}</td>
                    <td>
                        <span class=${`"category-pill ${transaction.category.toLowerCase()}"`}>
                            ${transaction.category}
                        </span>
                    </td>
                    <td class=${`"${transaction.type.toLowerCase()}"`}>
                        ${transaction.type.toLowerCase() === "income" ? "+" : "-"}${userCurrency}${parseFloat(transaction.amount).toFixed(2)}
                    </td>
                    <td>
                        <span class="edit" onclick="edit(${transaction.id})" data-Id="${transaction.id}">
                            <i class="ri-pencil-fill"></i>
                        </span>
                        <span class="delete" onclick="del(${transaction.id})" data-Id="${transaction.id}">
                            <i class="ri-delete-bin-7-fill"></i>
                        </span>
                    </td>
                </tr>                
            `;
        })
        .join("");
}

function pageLoad() {
    let user = userData.filter((user) => user.isLoggedIn);
    if (!user.length) {
        main.style.display = "flex";
        hero.style.display = "none";
        themeToggle(false);
        return;
    } else {
        render();
        notify(`${userName.textContent}, Welcome to FinTrack Pro 🎉`, 1);
        return;
    }
}

pageLoad();

function loadAddTransactionForm(tranID) {
    addTransactionForm.reset();

    if (tranID) {
        let idx = userData.findIndex(
            (user) => user.id === parseInt(userId.textContent),
        );

        transaction = userData[idx].transactions.filter(
            (tran) => tran.id === tranID,
        );

        if (!transaction.length) {
            addTransactionHead.textContent = "Add Transaction";
            addTransactionForm.reset();
            return;
        }

        // console.log(transaction[0].category);
        // console.log(addTransactionForm[5].value);
        // console.log(categoryInp.value);

        addTransactionHead.textContent = "Edit Transaction";

        addTransactionForm[0].value = transaction[0].id;
        addTransactionForm[1].value = transaction[0].type;
        addTransactionForm[2].value = transaction[0].description;
        addTransactionForm[3].value = transaction[0].amount;
        addTransactionForm[4].value = transaction[0].date;
        categoryInp.value = transaction[0].category;
    } else {
        addTransactionHead.textContent = "Add Transaction";
        addTransactionForm[0].value = "0";
    }

    addTransaction.style.display = "flex";
}

function edit(tranId) {
    if (!tranId) {
        notify("Transaction is invalid ❌", 0);
        return;
    }
    loadAddTransactionForm(tranId);
}

function del(tranId) {
    // let consent = confirm("Are you sure you want to delete this transaction?");
    // if (!consent) return;

    if (!tranId) {
        notify("Transaction is invalid ❌", 0);
        return;
    }

    let idx = userData.findIndex(
        (user) => user.id === parseInt(userId.textContent),
    );
    let tranIdx = userData[idx].transactions.findIndex(
        (tran) => tran.id === parseInt(tranId),
    );

    userData[idx].transactions.splice(tranIdx, 1);

    localStorage.setItem("userData", JSON.stringify(userData));
    render();
    notify("1 Transaction Deleted ❌", 0);
}

function submit(e) {
    e.preventDefault();

    let idx = userData.findIndex(
        (user) => user.id === parseInt(userId.textContent),
    );

    let id = parseInt(e.target[0].value),
        type = e.target[1].value.toLowerCase(),
        description = e.target[2].value,
        amount = parseFloat(e.target[3].value).toFixed(2),
        date = e.target[4].value,
        category = e.target[5].value;

    let editflag = true;

    if (!id && userData[idx].transactions.length === 0) {
        id = 1;
        editflag = false;
    } else if (!id && userData[idx].transactions.length !== 0) {
        let maxTranID = userData[idx].transactions
            .map((tran) => tran.id)
            .sort((a, b) => b - a)[0];
        id = maxTranID + 1;
        editflag = false;
    }

    if (!type || !description || !amount || !date || !category) {
        notify("Please fill all the fields!!!", 0);
        return;
    }

    let transaction = new Transaction(
        id,
        amount,
        type,
        category,
        date,
        description,
    );

    let tranIdx = userData[idx].transactions.findIndex(
        (tran) => tran.id === parseInt(id),
    );

    if (tranIdx !== -1) {
        userData[idx].transactions.splice(tranIdx, 1);
    }

    userData[idx].transactions.unshift(transaction);

    localStorage.setItem("userData", JSON.stringify(userData));

    render();

    notify(
        editflag
            ? "Transaction edited successfully 🎯"
            : "Transaction added successfully 🎯",
        1,
    );
}

function logOut() {
    let idx = userData.findIndex(
        (user) => user.id === Number(userId.textContent),
    );
    userData[idx].isLoggedIn = false;
    localStorage.setItem("userData", JSON.stringify(userData));
    themeToggle(false);

    hero.style.display = "none";
    main.style.display = "flex";
    notify(`${userName.textContent} is logged out successfully 🎯`, 0);
}

function resetAllData() {
    let consent = confirm("Are sure you want to reset entire user data?");
    if (!consent) return;

    let idx = userData.findIndex(
        (user) => user.id === Number(userId.textContent),
    );
    userData[idx].transactions = [];
    userData[idx].currency = `inr`;
    userData[idx].isDark = false;
    localStorage.setItem("userData", JSON.stringify(userData));
    render();
}

loginSignupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    authBtn.classList.contains("loginBtn") ? login(e) : register(e);
});

anchor.addEventListener("click", () =>
    authToggle(anchor.textContent.toLowerCase() === "register here"),
);

optionsList.addEventListener(
    "click",
    (e) => {
        for (let i = 0; i < optionsList.children.length; i++)
            optionsList.children[i].classList.remove("options-li-active");

        if (e.target.closest("#dashboardOption")) {
            e.target
                .closest("#dashboardOption")
                .classList.add("options-li-active");
            render();
        } else if (e.target.closest("#settingOption")) {
            e.target
                .closest("#settingOption")
                .classList.add("options-li-active");
            settingPage();
        }
    },
    true,
);

addTranBtn.addEventListener("click", () => loadAddTransactionForm(0));
addTransactionForm.addEventListener("submit", (e) => submit(e));
closeAddTransaction.addEventListener("click", () => render());
addTransaction.addEventListener(
    "click",
    (e) => {
        if (e.target.closest("#addTransaction")) return;
        addTransaction.style.display = "none";
    },
    true,
);

logout.addEventListener("click", () => logOut());

// theme.addEventListener('click', themeToggle);
themeSwitch.addEventListener("change", (e) => {
    let idx = userData.findIndex(
        (user) => user.id === Number(userId.textContent),
    );
    userData[idx].isDark = e.target.checked;
    localStorage.setItem("userData", JSON.stringify(userData));
    themeToggle(e.target.checked);
});

reset.addEventListener("click", () => resetAllData());

seacrhInp.addEventListener("keyup", (e) => debounce(transactionRender, 500)());

filterInp.addEventListener("change", (e) => debounce(transactionRender, 500)());

settingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let idx = userData.findIndex(
        (user) => user.id === parseInt(userId.textContent),
    );
    userData[idx].username = e.target[0].value;
    userData[idx].currency = e.target[1].value;
    localStorage.setItem("userData", JSON.stringify(userData));
    settingPage();
    notify("Settings updated successfully 🎉", 1);
});
