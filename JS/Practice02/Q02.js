// OBJECTS

// let user = { name: "Ritik", age: 21, city: "Bhopal" };
// console.log(user.name);

// let user = { name:"Ritik", age:21 };
// user.age = 22; console.log(user);

// let user= { name:"Ritik", city:"Bhopal" };
// user.country = 'India'; console.log(user);

// let user= { name:"Ritik", age:21, password:"12345" };
// delete user.password; console.log(user);

// let product= { name:"Laptop", price:60000 };
// console.log(Object.keys(product).includes('price'));
// console.lo?g(product.hasOwnProperty('price'));

// let car= { brand:"BMW", model:"X5", year:2025 };
// console.log(Object.keys(car));

// let car= { brand:"BMW", model:"X5", year:2025 };
// console.log(Object.values(car));

// let user= { name:"Ritik", age:21, city:"Bhopal" };
// Object.entries(user).forEach(
//   ([key, value]) => console.log(`${key}: ${value}`)
// );

// let employee= { name:"Aman", salary:50000 };
// employee.salary = (employee.salary * 1.1).toFixed(0);
// console.log(employee);

// let user = {
//   name: "Ritik",
//   address: {
//     city: "Bhopal",
//     state: "MP",
//   },
// };
// console.log(user.address.city);

// let student= { name:"Priya", age:20, course:"BCA" };
// let {name: studentName, age: studentAge} = student;
// console.log(studentName);
// console.log(studentAge);

// let user= { name:"Ritik", age:21 };
// let address= { city:"Bhopal", state:"MP" };
// user = {...user, ...address};
// console.log(user); //but shares reference
// //so to prevent this we use to do this like
// user = JSON.parse(JSON.stringify({...user, ...address}));
// console.log(user); //this will not share any reference

// let user= { name:"Ritik", age:21, city:"Bhopal", country:"India" };
// console.log(Object.keys(user).length);

// let employees = {aman: 25000,ritik: 50000,priya: 45000};
// let maxSalary = Object.entries(employees).reduce(
//   (a,c) => (c[1] > a[1] ? c : a), ['',0]
// );
// console.log(maxSalary[0].toUpperCase());

// let votes = {JavaScript: 25,Python: 30,Java: 15,Cpp: 10};
// let maxVotes = Object.entries(votes).reduce(
//   (a, c) => (c[1] > a[1] ? c : a), ['', 0]
// );
// console.log(maxVotes[0]);

// let countries = {India: "Delhi",Japan: "Tokyo",France: "Paris"};
// let capital = Object.entries(countries).reduce(
//   (a,c) => {a[c[1]] = c[0]; return a;},{}
// );
// console.log(capital);

// let marks = {math: 90,science: 80,english: 85};
// let totalMarks = Object.values(marks).reduce((a, c) => a + c, 0);
// let averageMarks = totalMarks / Object.keys(marks).length;
// console.log(totalMarks);
// console.log(averageMarks);

// let user= {name:"Ritik",age:21};
// if (!user.hasOwnProperty("email")) user.email= "Not Provided";
// console.log(user);
// if (user.hasOwnProperty("email")) console.log(user.email);

// let inventory = {
//   mouse: 25,
//   keyboard: 10,
//   monitor: 5,
//   laptop: 2,
// };
// let total = Object.values(inventory).reduce((a, c) => a + c, 0);
// console.log(total);
// let highest = 
// Object.entries(inventory).reduce(
//   (a,c) => {
//     if (c[1] > a[1]) return c;
//     return a;
//   }, ['',0]
// );
// console.log(highest[0]);
// let lowest = 
// Object.entries(inventory).reduce(
//   (a,c) => {
//     if (c[1] < a[1]) return c;
//     return a;
//   }, highest
// );
// console.log(lowest[0]);

