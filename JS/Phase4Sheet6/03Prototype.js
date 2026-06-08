// ## Problem 10: Prototype Lookup
// Create:
// ```jsx
const person = {
    name: "Rahul"
};
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

function sum() {
    return this.reduce((a,b) => a+b);
}

let arr = [1,2,3,4]; 

// console.log(Array.prototype);
// Array.prototype.sum = sum;
// console.log(Array.prototype);


// console.log(arr.__proto__);
// // arr.prototype.sum = sum; //X
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

// // console.log(animal.prototype);
// console.log(animal.__proto__);
// console.log(Object.prototype);
// // console.log(dog);
// // dog.eat();



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

