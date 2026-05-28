// ### Intermediate Question

// Check if any number is negative.
// ```jsx
let nums = [10, 20, -5, 40];
// ```

// Expected Output:
// ```jsx
// true
// ```

// ### Hint
// - `some()` returns true if at least one condition matches.

console.log(nums.some((e) => e < 0));



// ### Hard Question

// Check if any product is out of stock.
// ```jsx
let products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
// ```

// ### Hint
// - Check:
// ```jsx
// stock === 0
// ```

console.log(products.some((e) => e.stock === 0));

