// #region SELECTORS

const body = document.body;

const nav = document.querySelector('nav');

const dashboard = document.querySelector('#dashboard');

const dailyPlans = document.querySelector('.plan-table');

// #endregion SELECTORS

let data = {
    isDark: false,
    dailyPlan: {
        plan1: "", plan2: "", plan3: "",
        plan4: "", plan5: "", plan6: "",
        plan7: "", plan8: "", plan9: "",
        plan10: "", plan11: "", plan12: "",
        plan13: "", plan14: "", plan15: "",
        plan16: "", plan17: "", plan18: ""
    }
};
if (localStorage.getItem('data')) data = JSON.parse(localStorage.getItem('data'));

console.log(data);


function themeToggle() {
    let flag = body.classList.toggle('dark');

    const theme = document.querySelector('#theme');

    document.querySelector('#sE0 img').setAttribute('src', `./assets/images/${flag ? 'todoDark.png' : 'todo-light.avif'}`);
    document.querySelector('#sE1 img').setAttribute('src', `assets/images/${flag ? 'daily-PlanDark.png' : 'daily-planLight.jpg'}`);
    document.querySelector('#sE2 img').setAttribute('src', `assets/images/${flag ? 'moti-dark.jpg' : 'moti-light.jpg'}`);
    document.querySelector('#sE3 img').setAttribute('src', `assets/images/${flag ? 'pomoDark.jpg' : 'pomolight.jpeg'}`);
    document.querySelector('#sE4 img').setAttribute('src', `assets/images/${flag ? 'goalsDark.jpg' : 'goalsLight.avif'}`);

    theme.classList.remove(flag ? 'ri-moon-fill' : 'ri-sun-fill');
    theme.classList.add(flag ? 'ri-sun-fill' : 'ri-moon-fill');

    data.isDark = flag;

    localStorage.setItem('data', JSON.stringify(data));
}

function weatherFeature() {
    const apiKey = '87cf32deedd9442793a70453250305'
    const city = 'kolkata';

    const dashImg = document.querySelector('#dashboardImg')
    const dashVid = document.querySelector('#dashboardVid')

    const cardTime = document.querySelector('.day-time')
    const cardDate = document.querySelector('.date-year')
    const cardLocation = document.querySelector('.location')

    const cardTemp = document.querySelector('.temperature')
    const cardWeather = document.querySelector('.weather')
    const cardCondition = document.querySelector('.condition')
    const cardHumidity = document.querySelector('.humidity')
    const cardWind = document.querySelector('.wind')

    async function weatherAPICall() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`)
        const resData = await response.json()
        // console.log(resData.current);

        cardTemp.innerHTML = `${resData.current.temp_c}°C`
        cardWeather.innerHTML = `${resData.current.condition.text}`
        cardCondition.innerHTML = `Heat_Index: ${resData.current.heatindex_c}%`
        cardHumidity.innerHTML = `Humidity: ${resData.current.humidity}%`
        cardWind.innerHTML = `Wind: ${resData.current.wind_kph}km/h`
    }
    weatherAPICall();

    let hourFlag = 0;

    function timeDate() {
        const totaldaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let date = new Date()
        let daysOfWeek = totaldaysOfWeek[date.getDay()]
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
        let dates = date.getDate()
        let month = months[date.getMonth()]
        let year = date.getFullYear()

        cardDate.innerHTML = `${dates} ${month}, ${year}`

        if (hours >= 12) {
            cardTime.innerHTML = `${daysOfWeek}, ${String(hours - 12).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} PM`

            if (hourFlag !== hours) {

                if (hours >= 12 && hours < 15) {
                    dashImg.setAttribute('src', 'assets/images/afternoon.jpg');
                    dashVid.setAttribute('src', 'assets/Videos/sky.mp4');
                } else if (hours >= 15 && hours < 17) {
                    dashImg.setAttribute('src', 'assets/images/eveningimg.avif');
                    dashVid.setAttribute('src', 'assets/Videos/evening.mp4');
                }
                else {
                    dashImg.setAttribute('src', 'assets/images/night.jpg');
                    dashVid.setAttribute('src', 'assets/Videos/night.mp4');
                }
                hourFlag = hours;
            }

        } else {
            cardTime.innerHTML = `${daysOfWeek}, ${String(hours).padStart('2', '0')}:${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')} AM`

            if (hourFlag !== hours) {
                if (hours >= 5 && hours < 12) {
                    dashImg.setAttribute('src', 'assets/images/sunriseimg.jpg');
                    dashVid.setAttribute('src', 'assets/Videos/morning.mp4');
                }
                else {
                    dashImg.setAttribute('src', 'assets/images/night.jpg');
                    dashVid.setAttribute('src', 'assets/Videos/night.mp4');
                }
                hourFlag = hours;
            }
        }
    }
    setInterval(() => { timeDate() }, 1000);
}

function dailyPlanFeature() {
    let planInputs = document.querySelectorAll('.plan-div input');
    // console.log(planInputs);
    planInputs.forEach((input, idx) => {
        // console.dir(input);
        // console.log(data?.dailyPlan?.[`plan${idx + 1}`] || '');        
        input.value = data?.dailyPlan?.[`plan${idx + 1}`] || '';
    });
}

function quoteFeature() {
    const Quote = document.querySelector('.quote-desc')
    const Author = document.querySelector('.quote-author')

    async function fetchQuote() {
        const response = await fetch('https://dummyjson.com/quotes/random')

        const data = await response.json();
        Quote.textContent = data.quote
        Author.textContent = `__${data.author}`
    }
    fetchQuote();
}

function timerFeature() {
    const timer = document.querySelector('.timer-time')
    const startBtn = document.querySelector('.timerStartBtn')
    const pauseBtn = document.querySelector('.timerPauseBtn')
    const resetBtn = document.querySelector('.timerResetBtn')
    const session = document.querySelector('.timerTop')
    
    let isWorkSession = true

    let totalSeconds = 25 * 60
    let timerInterval = null

    function upDateTimer() {
        let minutes = Math.floor(totalSeconds / 60) 
        let seconds = totalSeconds % 60

        timer.innerHTML = `${String(minutes).padStart('2', '0')}:${String(seconds).padStart('2', '0')}`
    }

    function startTimer() {
        clearInterval(timerInterval)

        if (isWorkSession) {
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--
                    upDateTimer()
                } else {
                    isWorkSession = false
                    clearInterval(timerInterval)
                    timer.innerHTML = '05:00'
                    session.innerHTML = 'Take a Break'
                    totalSeconds = 5 * 60
                }
            }, 1000)
        } else {

            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--
                    upDateTimer()
                } else {
                    isWorkSession = true
                    clearInterval(timerInterval)
                    timer.innerHTML = '25:00'
                    session.innerHTML = 'Work session'
                    session.style.backgroundColor = 'var(--green)'
                    totalSeconds = 25 * 60
                }
            }, 1000)
        }

    }
}


function pageLoad() {
    data.isDark && themeToggle();
    weatherFeature();
    dailyPlanFeature();
    quoteFeature();
    timerFeature();
}
pageLoad();

function featureToggle(flag = false, feature = '') {
    nav.style.display = flag ? 'none' : 'flex';
    dashboard.style.display = flag ? 'none' : 'block';

    const notes = document.querySelector('#notes');
    const plan = document.querySelector('#plan');
    const quotes = document.querySelector('#quotes');
    const timer = document.querySelector('#timer');

    const features = [notes, quotes, plan, timer];

    features.forEach(section => {
        // console.log(section.getAttribute('id'));        

        section.style.display =
            (flag && section.getAttribute('id') === feature)
                ? 'block' : 'none';
    })

    // notes.style.display = (flag && feature === 'notes') ? 'block' : 'none';
    // quotes.style.display = (flag && feature === 'quotes') ? 'block' : 'none';
    // plan.style.display = (flag && feature === 'plan') ? 'block' : 'none';
    // timer.style.display = (flag && feature === 'timer') ? 'block' : 'none';
}


dailyPlans.addEventListener('keyup', (e) => {
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
})




