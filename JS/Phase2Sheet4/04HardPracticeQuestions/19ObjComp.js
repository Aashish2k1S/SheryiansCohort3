// Check if two objects have same keys and values.
// Example:
// ```jsx
// {a:1,b:2}
// {a:1,b:2}
// ```

// Expected Output:
// ```jsx
// true
// ```


const obj1 = {a:1,b:2};
const obj2 = {a:1,b:2};
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));