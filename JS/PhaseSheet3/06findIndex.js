// ### Intermediate Question

// Find index of number `90`.
// ```jsx
let nums = [10, 40, 90, 50];
// ```

// ### Hint
// - `findIndex()` returns index number.

let index = nums.findIndex((e) => e === 90)
console.log(index);



// ### Hard Question

// Find index of first failed student.
// ```jsx
let students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];
// ```

// Condition:
// - Failed if marks < 40

// ### Hint
// - Use condition directly inside callback.

let failedStudent = students.findIndex((e) => e.marks < 40)
console.log(failedStudent);
console.log(students[failedStudent]);

