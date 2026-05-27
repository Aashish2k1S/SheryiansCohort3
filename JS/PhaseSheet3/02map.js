// ### Intermediate Question

// Convert all names into uppercase.
// ```jsx
let names = ["anubhav", "rahul", "aman"];
// ```

// Expected Output:
// ```jsx
// ["ANUBHAV", "RAHUL", "AMAN"]
// ```

// ### Hint
// - `map()` creates a new array.
// - Use `.toUpperCase()`.

let upperNames = names.map((e) => e.toUpperCase())
console.log(upperNames);


// ### Hard Question

// You are given products.
// ```jsx
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];
// ```

// Create a new array where:
// - Every product has a new property `discountPrice`
// - Discount is 10%

// Expected:
// ```jsx
// [
//   { name: "Laptop", price: 50000, discountPrice: 45000 }
// ]
// ```

// ### Hint
// - Return a new object from `map()`
// - Formula:
// ```jsx
// price - (price * 10 / 100)
// ```

let discountProducts = products.map((e) => {
    // e['discountPrice'] = e.price - (e.price * 0.1);
    e.discountPrice = e.price - (e.price * 0.1);
    return e;
})

console.log(discountProducts);
