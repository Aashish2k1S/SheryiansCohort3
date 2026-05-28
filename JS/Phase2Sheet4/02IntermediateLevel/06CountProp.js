// Write a function that returns how many properties an object has.
// Example:
// ```jsx
countProperties({a:1,b:2,c:3})
// // 3
// ```

// Hint:
// Use:
// ```jsx
// Object.keys()
// ```


function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties({a:1,b:2,c:3}));