// Merge these two objects into one.
// ```jsx
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
// ```

// Hint:
// Use:
// ```jsx
// spread operator
// ```

const obj3 = {...obj1,...obj2}; //shallow copy
console.log(obj3);

const obj4 = JSON.parse(JSON.stringify({...obj1,...obj2})); //deep copy
console.log(obj4);