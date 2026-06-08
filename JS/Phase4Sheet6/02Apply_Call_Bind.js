// ## Problem 6: Borrow a Method using call()

const person1 = { name: "Anubhav" };
const person2 = { name: "Rahul" };

function introduce() { console.log(`Hi, I am ${this.name}`); }

// person1.introduce = introduce;
// console.log(person1); 

// person1.introduce.call(person2); // Output: Hi, I am Anubhav
// console.log(person2);

// introduce.call(person1); // Output: Hi, I am Anubhav
// introduce.call(person2); // Output: Hi, I am Rahul



// ## Problem 7: apply() with Array Arguments

function introduce(city, country) {
    console.log(`I am ${this.name} from ${city}, ${country}`);
}
introduce.apply(person2, ["Indore", "India"]);
console.log(person2.prototype);



// ## Problem 8: bind() for Delayed Execution

// Arrow functions do not have their own 'this'/lexical context, so as we use 'this' inside an arrow function to refer to its parent's 'this' value. In this case, it would refer to the global object (or undefined in strict mode) instead of the person object. Instead, we can use a regular function expression to define the delayedIntroduction function.

// let delayedIntroduction = () => {
//     console.log(`Hello, I am ${this.name}`);
// }
let delayedIntroduction = function () {
    console.log(`Hello, I am ${this.name}`);
}
const boundIntroduction = delayedIntroduction.bind(person1);
// console.log(person1.__proto__);
setTimeout(boundIntroduction, 2000);


// ## Problem 9: Custom Calculator

const calculator = { value: 100 };
function addToValue(num1, num2) {
    this.value += num1 + num2;
    console.log(this.value);
}

// with call we can pass arguments one by one, 
// whereas with apply we can pass arguments as an array. 
// bind returns a new function with the specified 'this' value and optional arguments, which can be called later.

addToValue.call(calculator, 10, 20);
addToValue.apply(calculator, [30, 40]);
let newAddToValue = addToValue.bind(calculator, 50, 60);
newAddToValue();

console.log(calculator?.value);

