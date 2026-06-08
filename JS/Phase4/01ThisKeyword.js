// ## Problem 1: Global vs Function `this`

// Create a function `showThis()` and print the value of `this` when:
// - Called normally
// - Called in strict mode

// ### Expected Learning
// - Default Binding
// - Strict Mode Behavior


// function showThis() {
//   console.log(this);
// }
// showThis(); //Window Function // In strict mode, this will be undefined


// 'use strict';
// function showThis2() {
//   console.log(this);
// }
// showThis2(); // In strict mode, this will be undefined


// ## Problem 2: Object Method Context

// Create an object:
// ```jsx
// const user = {
//   name: "Anubhav"
// };
// ```
// Add a method that prints:
// ```
// Hello Anubhav
// ```
// Then store the method in another variable and call it.
// ### Expected Learning
// - Method Binding
// - Call Site Concept

// user.greet = function() { return `Hello ${this.name}`; } 
// console.log(user.greet?.()); 


// ## Problem 3: Arrow Function vs Regular Function

// Create an object with:
// ```jsx
// name: "Rahul"
// ```

// Implement:
// - One regular method
// - One arrow method

// Print `this.name` from both.
// ### Expected Learning
// - Lexical `this`
// - Object Method Context

// const user = {
//   name: "Rahul",
//   regularMethod: function() {   
//     console.log(`Regular Method: Hello ${this.name}`);
//     },
//     arrowMethod: () => {
//         console.log(`Arrow Method: Hello ${this.name}`);
//     }
// };
// user.regularMethod();
// user.arrowMethod(); 


// ## Problem 4: Nested Callback Problem
// Create an object:
// ```jsx
// let obj ={
//  name: "Rahul",
//  hobbies: ["Coding", "Gaming", "Reading"]
// }
// ```
// Print:
// ```
// Rahul likes Coding
// Rahul likes Gaming
// Rahul likes Reading
// ```
// without storing `this` in another variable.
// ### Expected Learning
// - Arrow Functions
// - Preserving `this`

// obj.hobbies.forEach(hobby => {
//     console.log(`${obj.name} likes ${hobby}`);
// });


// ## Problem 5: Event Handler Simulation

// Create an object representing a button.
// Write:
// - One regular function handler
// - One arrow function handler
// Compare the value of `this`.
// ### Expected Learning
// - Event Context
// - Lexical Scope

const button = {
    name: "Submit Button",
    regularHandler: function() {
        console.log(`Regular Handler: This is ${this.name}`);
    },
    arrowHandler: () => console.log(`Arrow Handler: This is ${this.name}`)
};
button.regularHandler();
button.arrowHandler();