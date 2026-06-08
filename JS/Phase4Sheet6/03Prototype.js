// ## Problem 10: Prototype Lookup
// Create:
// ```jsx
// const person = {
//     name: "Rahul"
// };
// ```
// Check whether:
// ```jsx
// person.hasOwnProperty("name")
// ```
// comes from the object itself or its prototype.
// ### Expected Learning
// - Prototype Chain

// console.log( person.hasOwnProperty("name") );
// console.log( person.__proto__ );



// ## Problem 11: Create a Custom Prototype Method
// Add a method to:
// ```jsx
// Array.prototype
// ```
// called:
// ```jsx
// sum()
// ```
// Example:
// ```jsx
// [1,2,3,4].sum()
// ```
// Output:
// ```
// 10
// ```

// function sum() {
//     return this.reduce((a, b) => a + b);
// }

// let arr = [1, 2, 3, 4];

// console.log(Array.prototype);
// Array.prototype.sum = sum;
// console.log(Array.prototype);


// console.log(arr.__proto__);
// arr.prototype.sum = sum; //X
// arr.__proto__.sum = sum; 
// console.log(arr.__proto__);

// console.log(arr.sum());

// arr.prototype.sum = sum; 
// console.log(arr.prototype);
// arr.sum = sum; 
// console.log(arr);

// arr.push(100);
// console.log(arr);
// console.log(arr.sum());


// const Proto = {
//     sum
// };
// console.log(Proto.__proto__);
// Object.setPrototypeOf(Proto, Array.prototype);
// console.log(Proto.__proto__);
// console.log(Proto);

// Object.setPrototypeOf(arr, Proto);

// console.log(Array.prototype); 
// console.log(arr.__proto__); 



// ## Problem 12: Object.create()
// Create:
// ```jsx
// animal
// ```
// object containing:
// ```jsx
// eat()
// sleep()
// ```
// Create a `dog` object using:
// ```jsx
// Object.create()
// ```
// and access inherited methods.


// let animal = {
//     eat: function() {console.log("Eating...")},
//     sleep: function() {console.log("Sleeping...")}
// }
// let dog = Object.create(animal);

// console.log(animal.prototype);
// console.log(animal.__proto__);
// console.log(Object.prototype);
// console.log(dog);
// dog.eat();



// ## Problem 13: Prototype Inheritance
// Create:
// ```jsx
// vehicle
// ```
// object.
// Create:
// ```jsx
// car
// bike
// truck
// ```
// using prototype inheritance.
// Each should inherit:
// ```jsx
// start()
// stop()
// ```

// let vehicle = {
//     start: function() { console.log(`Starting ${this.brand} ${this.model}...`) },
//     stop: function() { console.log(`Stopping ${this.brand} ${this.model}...`) }
// };

// let car = {
//     brand: "Maruti",
//     model: "Swift"
// };
// let bike = {
//     brand: "Honda",
//     model: "CBR"
// };
// let truck = {
//     brand: "Tata",
//     model: "Ace"
// };

// this will create a new object and assign it to car.prototype, which will break the prototype chain. So we should not do this. 
// car.prototype = vehicle;

// Instead, we should set the prototype of car to vehicle. This way, car will inherit from vehicle and we can access the start and stop methods from car, bike and truck.
// car.__proto__ = vehicle;
// bike.__proto__ = vehicle;
// truck.__proto__ = vehicle;

// console.log(car.__proto__);
// console.log(bike.__proto__);
// console.log(truck.__proto__);
// console.log(Object.prototype);
// console.log(car);
// console.log(car.__proto__);

// this will work because car.__proto__ is vehicle, which has the start method. So it will look for the start method in car, then in car.__proto__ (which is vehicle) and find it there.
// car.start();
// bike.stop();
// truck.start();



// ## Problem 14: Constructor Function + Prototype
// Create a constructor:
// ```jsx
// Person
// ```
// that accepts:
// ```jsx
// name
// age
// ```
// Add a method using:
// ```jsx
// Person.prototype.greet
// ```
// ### Expected Output
// ```
// Hi, I am Rahul
// ```

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }


//this is just with the anonymous function 
// Person.prototype.greet = function() {
//     console.log(`Hi, I am ${this.name}`);
// };

//this is with the named function, which is better for debugging and readability.
// function greet () {
//     console.log(`Hi, I am ${this.name}`);
// };

// Person.prototype.greet = greet;

// let p1 = new Person("Rahul", 25);
// console.log(p1);
// p1.greet();



// ## Problem 15: Prototype Chain Investigation
// Create:
// ```jsx
// const arr = [];
// ```
// Print:
// ```jsx
// arr.__proto__
// arr.__proto__.__proto__
// arr.__proto__.__proto__.__proto__
// ```
// Explain the output.

// const arr = [];
// console.log(arr.__proto__); //type of Array so its prototype is Array.prototype
// console.log(arr.__proto__.__proto__); //type of Object so its prototype is Object.prototype
// console.log(arr.__proto__.__proto__.__proto__); //null because Object.prototype is the end of the prototype chain and its prototype is null. 

//Hence, Array is also an Object because it inherits from Object.prototype. This is why we can use Object methods on arrays, such as push, pop, etc. but we can't use Array methods on objects, such as length, etc. because they don't inherit from Array.prototype.




