// ### Intermediate Question

// You are given an array of prices.
// Print each price with `"₹"` before it.
// ```jsx
let prices = [100, 250, 399, 499];
// ```

// ### Hint
// - `forEach()` runs once for every element.
// - You don't return anything here.
// - Use `console.log()` inside it.

prices.forEach((e) => console.log(`₹ ${e}`))


// ### Hard Question

// You are given an array of students.
// ```jsx
let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];
// ```

// Print:
// - `"Pass"` if marks are greater than 50
// - `"Fail"` otherwise

// Output format:
// ```jsx
// Anubhav - Pass
// Rahul - Fail
// ```

// ### Hint
// - Loop through objects using `forEach()`
// - Use condition checking inside loop.

students.forEach((e) => console.log(`${e.name} - ${e.marks > 50 ? 'Pass' : 'Fail'}`))
