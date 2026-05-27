// ### Intermediate Question

// Check if all numbers are positive.
// ```jsx
let nums = [10, 20, 30, 40];
// ```

// Expected Output:
// ```jsx
// true
// ```

// ### Hint
// - `every()` checks all elements.

console.log(nums.every((e) => e > 0));


// ### Hard Question

// Check if all students passed.
// ```jsx
let students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];
// ```

// Passing marks:
// ```jsx
// 40
// ```

// ### Hint
// - Return condition:
// ```jsx
// marks >= 40
// ```

console.log(students.every((e) => e.marks >= 40));
