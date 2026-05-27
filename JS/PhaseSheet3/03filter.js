// ### Intermediate Question

// Filter all even numbers.
// ```jsx
let nums = [1,2,3,4,5,6,7,8];
// ```

// Expected Output:
// ```jsx
// [2,4,6,8]
// ```

// ### Hint
// - `filter()` keeps elements when condition is `true`.

let evenNums = nums.filter((e) => e%2 === 0)
console.log(evenNums);



// ### Hard Question

// You are given users.
// ```jsx
let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];
// ```

// Return only active users.

// ### Hint
// - Check `active === true`
// - Return condition directly.

let activeUsers = users.filter((e) => e.active === true)
console.log(activeUsers);
