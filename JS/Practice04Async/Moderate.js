// Q5
// function countDown(num) {
//     if (num <= 0) setTimeout(() => console.log("Done"), 1000);

//     let count = num,
//         timer = (num + 1) * 1000;
//     let counterInterval = setInterval(() => {
//         console.log(count);
//         count--;
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(counterInterval);
//         console.log("Done");
//     }, timer);
// }
// countDown(5);

// Q6 fake API Call
// let user = (ID, name) => ({ID, name});

// function fetchUser(ID, name, user) {
//     console.log("Fetching User...");
//     setTimeout(() => console.log(user(ID, name)), 1000);
// }
// fetchUser(1, "Aashish", user);

// Q7 CREATE YOU FIRST PROMISE
async function count(num) {

    let newNUm = num+10;

    if (num > 15 || num > 20) {
        throw new Error("Number too big");      
    }

    return newNUm;
    
}

count(5).
.then((res) => {console.log(res); return res})
.then((res) => {console.log(res); return res})
.catch((err) => console.log(err));
