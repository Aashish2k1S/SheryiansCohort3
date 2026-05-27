// ### Intermediate Question

// Find first number greater than 50.
// ```jsx
let nums = [20, 35, 60, 80];
// ```

// Expected Output:
// ```jsx
// 60
// ```

// ### Hint
// - `find()` returns first matching element.

let ans = nums.find((e) => e > 50);
console.log(ans);


// ### Hard Question

// Find a user with username `"admin"`.
// ```jsx
let users = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];
// ```

// ### Hint
// - Compare inside callback:
// ```jsx
// user.username === "admin"
// ```

let username = users.find((e) => e.username === 'admin')
console.log(username);
