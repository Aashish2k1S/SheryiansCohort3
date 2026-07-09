// #region SELECTORS

const body = document.body;

const nav = document.querySelector("nav");

const dashboard = document.querySelector("#dashboard");

const notesForm = document.querySelector("#notes .below .left form");

const dailyPlans = document.querySelector(".plan-table");

// #endregion SELECTORS

let data = {
    isDark: false,
    tasks: [],
    dailyPlan: {
        plan1: "",
        plan2: "",
        plan3: "",
        plan4: "",
        plan5: "",
        plan6: "",
        plan7: "",
        plan8: "",
        plan9: "",
        plan10: "",
        plan11: "",
        plan12: "",
        plan13: "",
        plan14: "",
        plan15: "",
        plan16: "",
        plan17: "",
        plan18: "",
    },
    goals: [],
};

// localStorage.removeItem("data");

if (localStorage.getItem("data"))
    data = JSON.parse(localStorage.getItem("data"));

// console.log(data);

function themeToggle() {
    let flag = body.classList.toggle("dark");

    const theme = document.querySelector("#theme");

    document
        .querySelector("#sE0 img")
        .setAttribute(
            "src",
            `./assets/images/${flag ? "todoDark.png" : "todo-light.avif"}`,
        );
    document
        .querySelector("#sE1 img")
        .setAttribute(
            "src",
            `assets/images/${flag ? "daily-PlanDark.png" : "daily-planLight.jpg"}`,
        );
    document
        .querySelector("#sE2 img")
        .setAttribute(
            "src",
            `assets/images/${flag ? "moti-dark.jpg" : "moti-light.jpg"}`,
        );
    document
        .querySelector("#sE3 img")
        .setAttribute(
            "src",
            `assets/images/${flag ? "pomoDark.jpg" : "pomolight.jpeg"}`,
        );
    document
        .querySelector("#sE4 img")
        .setAttribute(
            "src",
            `assets/images/${flag ? "goalsDark.jpg" : "goalsLight.avif"}`,
        );

    theme.classList.remove(flag ? "ri-moon-fill" : "ri-sun-fill");
    theme.classList.add(flag ? "ri-sun-fill" : "ri-moon-fill");

    data.isDark = flag;

    localStorage.setItem("data", JSON.stringify(data));
}

function weatherFeature() {
    const apiKey = "87cf32deedd9442793a70453250305";
    const city = "kolkata";

    const dashImg = document.querySelector("#dashboardImg");
    const dashVid = document.querySelector("#dashboardVid");

    const cardTime = document.querySelector(".day-time");
    const cardDate = document.querySelector(".date-year");
    const cardLocation = document.querySelector(".location");

    const cardTemp = document.querySelector(".temperature");
    const cardWeather = document.querySelector(".weather");
    const cardCondition = document.querySelector(".condition");
    const cardHumidity = document.querySelector(".humidity");
    const cardWind = document.querySelector(".wind");

    cardLocation.innerHTML = `${city.toUpperCase()}`;

    async function weatherAPICall() {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
        );
        const resData = await response.json();
        // console.log(resData.current);

        cardTemp.innerHTML = `${resData.current.temp_c}°C`;
        cardWeather.innerHTML = `${resData.current.condition.text} <br> near by`;
        cardCondition.innerHTML = `Heat_Index: ${resData.current.heatindex_c}%`;
        cardHumidity.innerHTML = `Humidity: ${resData.current.humidity}%`;
        cardWind.innerHTML = `Wind: ${resData.current.wind_kph}km/h`;
    }
    weatherAPICall();

    let hourFlag = 0;

    function timeDate() {
        const totaldaysOfWeek = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        let date = new Date();
        let daysOfWeek = totaldaysOfWeek[date.getDay()];
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let dates = date.getDate();
        let month = months[date.getMonth()];
        let year = date.getFullYear();

        cardDate.innerHTML = `${dates} ${month}, ${year}`;

        if (hours >= 12) {
            cardTime.innerHTML = `${daysOfWeek}, ${String(hours - 12).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")} PM`;

            if (hourFlag !== hours) {
                if (hours >= 12 && hours < 15) {
                    dashImg.setAttribute("src", "assets/images/afternoon.jpg");
                    dashVid.setAttribute("src", "assets/Videos/sky.mp4");
                } else if (hours >= 15 && hours < 17) {
                    dashImg.setAttribute(
                        "src",
                        "assets/images/eveningimg.avif",
                    );
                    dashVid.setAttribute("src", "assets/Videos/evening.mp4");
                } else {
                    dashImg.setAttribute("src", "assets/images/night.jpg");
                    dashVid.setAttribute("src", "assets/Videos/night.mp4");
                }
                hourFlag = hours;
            }
        } else {
            cardTime.innerHTML = `${daysOfWeek}, ${String(hours).padStart("2", "0")}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")} AM`;

            if (hourFlag !== hours) {
                if (hours >= 5 && hours < 12) {
                    dashImg.setAttribute("src", "assets/images/sunriseimg.jpg");
                    dashVid.setAttribute("src", "assets/Videos/morning.mp4");
                } else {
                    dashImg.setAttribute("src", "assets/images/night.jpg");
                    dashVid.setAttribute("src", "assets/Videos/night.mp4");
                }
                hourFlag = hours;
            }
        }
    }
    setInterval(() => {
        timeDate();
    }, 1000);
}

function dailyPlanFeature() {
    const planTable = document.querySelector(".plan-table");

    let hours = new Array();

    for (let i = 0; i < 18; i++) {
        hours.push(`${String(i + 6).padStart("2", "0")}:00`);
    }

    planTable.innerHTML = hours
        .map((e, idx) => {
            return `
        <div class="plan-div plan${idx + 1}">
            <label for="plan${idx + 1}">${e}</label>
            <input type="text" name="plan${idx + 1}" 
                id="plan${idx + 1}" placeholder="..." 
                value="${data?.dailyPlan?.[`plan${idx + 1}`] || ""}">
        </div>
        `;
        })
        .join("");
}

function quoteFeature() {
    const Quote = document.querySelector(".quote-desc");
    const Author = document.querySelector(".quote-author");

    async function fetchQuote() {
        const response = await fetch("https://dummyjson.com/quotes/random");

        const data = await response.json();
        Quote.textContent = data.quote;
        Author.textContent = `__${data.author}`;
    }
    fetchQuote();
}

function timerFeature() {
    const timer = document.querySelector(".timer-time");
    const startBtn = document.querySelector(".timerStartBtn");
    const pauseBtn = document.querySelector(".timerPauseBtn");
    const resetBtn = document.querySelector(".timerResetBtn");
    const session = document.querySelector(".timerTop");

    let isWorkSession = true;

    let totalSeconds = 25 * 60;
    let timerInterval = null;

    function upDateTimer() {
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        timer.innerHTML = `${String(minutes).padStart("2", "0")}:${String(seconds).padStart("2", "0")}`;
    }

    function startTimer() {
        clearInterval(timerInterval);

        if (isWorkSession) {
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    upDateTimer();
                } else {
                    isWorkSession = false;
                    clearInterval(timerInterval);
                    timer.innerHTML = "05:00";
                    session.innerHTML = "Take a Break";
                    session.style.backgroundColor = "var(--blue)";
                    totalSeconds = 5 * 60;
                }
            }, 1000);
        } else {
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    upDateTimer();
                } else {
                    isWorkSession = true;
                    clearInterval(timerInterval);
                    timer.innerHTML = "25:00";
                    session.innerHTML = "Work session";
                    session.style.backgroundColor = "var(--green)";
                    totalSeconds = 25 * 60;
                }
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }
    function resetTimer() {
        totalSeconds = 25 * 60;
        clearInterval(timerInterval);
        upDateTimer();
    }

    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
}

function pageLoad() {
    data.isDark && themeToggle();
    weatherFeature();
    dailyPlanFeature();
    quoteFeature();
    timerFeature();
}
pageLoad();

function featureToggle(flag = false, feature = "") {
    nav.style.display = flag ? "none" : "flex";
    dashboard.style.display = flag ? "none" : "block";

    const notes = document.querySelector("#notes");
    const plan = document.querySelector("#plan");
    const quotes = document.querySelector("#quotes");
    const timer = document.querySelector("#timer");

    const features = [notes, quotes, plan, timer];

    features.forEach((section) => {
        // console.log(section.getAttribute('id'));

        section.style.display =
            flag && section.getAttribute("id") === feature ? "block" : "none";
    });

    // notes.style.display = (flag && feature === 'notes') ? 'block' : 'none';
    // quotes.style.display = (flag && feature === 'quotes') ? 'block' : 'none';
    // plan.style.display = (flag && feature === 'plan') ? 'block' : 'none';
    // timer.style.display = (flag && feature === 'timer') ? 'block' : 'none';
}

function notesFeature(state = "todo") {
    const header = document.querySelector("#notes .top h1");

    //left
    const formTitle = document.querySelector(
        "#notes .below .left form #noteTitle",
    );
    const formDesc = document.querySelector(
        "#notes .below .left form #noteDesc",
    );
    const divImp = document.querySelector(
        "#notes .below .left form div:nth-child(3)",
    );

    const formSubmitBtn = document.querySelector(
        "#notes .below .left form button",
    );

    //right
    const noNote = document.querySelector("#notes .right #noNote");
    const allTodo = document.querySelector("#notes .right #allTodo");
    const allGoal = document.querySelector("#notes .right #allGoal");

    notesForm.reset();

    header.textContent =
        state === "todo" ? "Your Personalised task List" : "Daily Goals";
    formTitle.setAttribute(
        "placeholder",
        state === "todo" ? "Enter task title..." : "Enter goal title...",
    );
    formDesc.setAttribute(
        "placeholder",
        state === "todo"
            ? "Enter task descritption..."
            : "Enter goal descritption...",
    );

    divImp.style.display = state === "todo" ? "flex" : "none";
    noNote.style.display = "none";
    allTodo.style.display = "none";
    allGoal.style.display = "none";

    formSubmitBtn.textContent = state === "todo" ? "All Tasks" : "All Goals";

    if (state === "todo") {
        // data.tasks = [
        //     {
        //         title: "Finish project proposal",
        //         description:
        //             "Complete the first draft of the client proposal before Friday.",
        //         isImportant: true,
        //     },
        //     {
        //         title: "Buy groceries",
        //         description:
        //             "Pick up milk, eggs, vegetables, bread, and fruit.",
        //         isImportant: false,
        //     },
        //     {
        //         title: "Morning workout",
        //         description: "Do a 30-minute strength training session.",
        //         isImportant: true,
        //     },
        //     {
        //         title: "Reply to emails",
        //         description: "Respond to unread work and personal emails.",
        //         isImportant: false,
        //     },
        //     {
        //         title: "Schedule dentist appointment",
        //         description:
        //             "Call the clinic and book a check-up for next week.",
        //         isImportant: true,
        //     },
        //     {
        //         title: "Clean the workspace",
        //         description:
        //             "Organize the desk and throw away unnecessary papers.",
        //         isImportant: false,
        //     },
        //     {
        //         title: "Read a book",
        //         description: "Read at least 25 pages of the current novel.",
        //         isImportant: false,
        //     },
        //     {
        //         title: "Pay electricity bill",
        //         description: "Complete the payment before the due date.",
        //         isImportant: true,
        //     },
        //     {
        //         title: "Practice coding",
        //         description: "Solve three JavaScript coding challenges.",
        //         isImportant: true,
        //     },
        //     {
        //         title: "Call parents",
        //         description: "Catch up and check how they're doing.",
        //         isImportant: false,
        //     },
        //     {
        //         title: "Update resume",
        //         description: "Add the latest project and skills.",
        //         isImportant: true,
        //     },
        //     {
        //         title: "Water the plants",
        //         description: "Water all indoor and balcony plants.",
        //         isImportant: false,
        //     },
        //     {
        //         title: "Plan weekend trip",
        //         description: "Research destinations and prepare a budget.",
        //         isImportant: false,
        //     },
        //     {
        //         title: "Backup laptop",
        //         description: "Create a full backup of important documents.",
        //         isImportant: true,
        //     },
        //     {
        //         title: "Prepare tomorrow's schedule",
        //         description: "List priorities and set reminders for meetings.",
        //         isImportant: true,
        //     },
        // ];

        allTodo.innerHTML = data?.tasks?.length
            ? data.tasks
                  .map(
                      (task, idx) =>
                          `
                      <div class="card">
                          <div class="cardTitle">
                              <h2 class="cardHead ${task?.isImportant ? "cardImp" : ""}">
                                  ${task.title.length <= 20 ? task.title : task.title.substring(0, 20) + "..."}
                              </h2>
                              <p class="card-del" onclick="deleteNote(${idx}, 'todo')">Mark as complete</p>
                          </div>
                          </div>
                          `,
                      // <div class="cardDesc">${task.description}</div>
                  )
                  .join("")
            : ``;

        noNote.style.display = data?.tasks?.length ? "none" : "flex";
        noNote.textContent = "NO TASKS";
        allTodo.style.display = data?.tasks?.length ? "flex" : "none";
    } else if (state === "goal") {
        // data.goals = [
        //     {
        //         title: "Be a better person",
        //         description:
        //             "Practice kindness, patience, and empathy every day.",
        //     },
        //     {
        //         title: "Read more books",
        //         description: "Read at least 20 pages every day.",
        //     },
        //     {
        //         title: "Exercise regularly",
        //         description: "Work out for 30 minutes, five days a week.",
        //     },
        //     {
        //         title: "Learn JavaScript",
        //         description: "Complete one coding lesson or project each week.",
        //     },
        //     {
        //         title: "Save money",
        //         description: "Set aside 20% of monthly income for savings.",
        //     },
        //     {
        //         title: "Wake up early",
        //         description: "Wake up by 6:00 AM every morning.",
        //     },
        //     {
        //         title: "Drink more water",
        //         description: "Drink at least 2 liters of water daily.",
        //     },
        //     {
        //         title: "Meditate",
        //         description:
        //             "Practice mindfulness meditation for 10 minutes daily.",
        //     },
        //     {
        //         title: "Improve communication",
        //         description: "Listen actively and express thoughts clearly.",
        //     },
        //     {
        //         title: "Learn a new language",
        //         description:
        //             "Study vocabulary and grammar for 30 minutes each day.",
        //     },
        //     {
        //         title: "Keep a journal",
        //         description:
        //             "Write about daily experiences and reflections every evening.",
        //     },
        //     {
        //         title: "Eat healthier",
        //         description:
        //             "Include more fruits and vegetables in every meal.",
        //     },
        //     {
        //         title: "Reduce screen time",
        //         description:
        //             "Limit recreational screen time to 2 hours per day.",
        //     },
        //     {
        //         title: "Stay organized",
        //         description:
        //             "Plan tasks each morning and keep the workspace tidy.",
        //     },
        //     {
        //         title: "Build confidence",
        //         description:
        //             "Take on one challenge each week that pushes your comfort zone.",
        //     },
        // ];

        allGoal.innerHTML = data?.goals?.length
            ? data.goals
                  .map(
                      (goal, idx) =>
                          `
                    <div class="card">
                        <div class="cardTitle">
                            <h2 class="cardHead">
                                ${
                                    goal.title.length <= 20
                                        ? goal.title
                                        : goal.title.substring(0, 20) + "..."
                                }
                            </h2>                    
                            <i class="card-del ri-close-large-fill" onclick="deleteNote(${idx}, 'goal')"></i>
                        </div>
                        <div class="cardDesc">
                            ${
                                goal.description.length <= 50
                                    ? goal.description
                                    : goal.description.substring(0, 50) + "..."
                            }
                        </div>
                    </div>
                `,
                  )
                  .join("")
            : ``;

        noNote.style.display = data?.goals?.length ? "none" : "flex";
        noNote.textContent = "NO GOALS";
        allGoal.style.display = data?.goals?.length ? "grid" : "none";
    }
}

function deleteNote(id = 0, state = "todo") {
    if (isNaN(id)) return;

    if (state === "todo") data.tasks.splice(id, 1);
    else if (state === "goal") data.goals.splice(id, 1);

    localStorage.setItem("data", JSON.stringify(data));
    notesFeature(state);
}

notesForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector(
        "#notes .below .left form #noteTitle",
    ).value;
    const description = document.querySelector(
        "#notes .below .left form #noteDesc",
    ).value;
    const isImportant = document.querySelector(
        "#notes .below .left form #chkImp",
    ).checked;
    const submitBtn = document.querySelector(
        "#notes .below .left form #noteSubmit",
    );

    if (!title || !description) return;

    const feature = submitBtn.textContent === "All Tasks" ? "todo" : "goal";

    let id = 0;
    if (feature === "todo") {
        id = data.tasks.length ? data.tasks.length + 1 : 1;

        data.tasks.push({
            title,
            description,
            isImportant,
        });
    } else if (feature === "goal") {
        id = data.goals.length ? data.goals.length + 1 : 1;
        data.goals.push({
            title,
            description,
            isImportant,
        });
    }

    localStorage.setItem("data", JSON.stringify(data));

    e.target.reset();

    notesFeature(feature);
});

dailyPlans.addEventListener("keyup", (e) => {
    if (!e.target.matches(".plan-div input")) return;
    // console.dir(e.target);

    data.dailyPlan[e.target.id] = e.target.value;
    localStorage.setItem("data", JSON.stringify(data));

    // let planArr = Object.keys(data.dailyPlan);
    // planArr.forEach((key, idx) => {
    //     if (e.target.closest(`.plan-div #${key}`)) {
    //         data.dailyPlan[key] = e.target.value;
    //         localStorage.setItem('data', JSON.stringify(data));
    //     }
    // });
    // console.log(e.target.closest('.plan-div'));
});
