// const user = {
//     name: "Ritik",
//     greet() {
//         console.log(this.name);
//     }
// };
// user.greet?.();


// 'use strict'
// function show() {
//     console.log(this);
// }
// show();


// function introduce() {
//     console.log(this.name);
// }
// const person = {
//     name: "Ritik"
// };
// introduce.call(person);


// function introduce(city, country) {
//     console.log(`${this.name} from ${city}, ${country}`);
// }
// const person = {
//     name: "Ritik"
// };
// // introduce.apply(person, ['Kolkata', 'India']);
// //let intro = introduce.bind(person, 'Kolkata', 'India');
// // intro();
// introduce.bind(person, 'Kolkata', 'India')();

// const user = {
//     name: "Ritik",
//     greet() {
//         console.log(this.name);
//     }
// };
// const fn = user.greet;
// fn.bind(user)();

// const animal = { eats: true }; 
// const dog = Object.create(animal);
// console.log(dog.eats);

// function Person(name) {
//     this.name = name;
// }
// function greet() {
//     console.log(`Hello, ${this.name}`);
// }
// Person.prototype.greet = greet;
// const user = new Person('Aashish');
// user.greet();

// class Student {
//     constructor(name, marks) {
//         this.name = name; 
//         this.marks = marks;
//     }
//     getGrade(){
//         if(this.marks >= 90) return 'A';
//         if(this.marks >= 75) return 'B';
//         if(this.marks >= 60) return 'C';
//         if(this.marks < 60) return 'F';
//     }
// }
// let std = new Student('Aashish', 71);
// console.log(std.getGrade());

// class Employee { 
//     constructor(name, salary) { 
//         this.name = name; 
//         this.salary = salary; 
//     } 
//     work(){ 
//         return `${this.name} is working..`; 
//     } 
// } 
// class Developer extends Employee { 
//     constructor(name, salary){ 
//         super(name, salary); 
//     } 
//     code(){ 
//         return `${this.name} is writing code...`; 
//     } 
// } 

// const emp = new Employee('Ankit', 20000); 
// console.log(emp.work());
// // console.log(emp.code());
// const dev = new Developer('Aashish', 50000); 
// console.log(dev.work()); 
// console.log(dev.code()); 

