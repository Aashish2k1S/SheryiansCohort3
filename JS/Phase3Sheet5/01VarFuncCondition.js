// ### Q1. Create a function that returns the sum of two numbers.

// ```jsx
// add(10, 20);
// ```
// Output: 30

let add = (a, b) => a + b;
console.log(add(10, 20));


// ### Q2. Create a function that returns the square of a number.

// ```jsx
// square(5);
// ```
// Output: 25

let square = (n) => n * n;
console.log(square(5));


// ### Q3. Create a function that checks whether a number is Even or Odd.

// ```jsx
// checkEvenOdd(7);
// ```
// Output: Odd

let checkEvenOdd = (n) => n % 2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd(7));


// ### Q4. Create a function that returns the larger number among two numbers.

// ```jsx
// max(10, 20);
// ```
// Output: 20

let max = (a, b) => Math.max(a, b);
console.log(max(10, 20));


// ### Q5. Create a function that checks if a person is eligible to vote.

// ```jsx
// isEligible(18);
// ```
// Output: Eligible

let isEligible = (age) => age >= 18 ? "Eligible" : "Not Eligible";
console.log(isEligible(18));

