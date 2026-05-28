// Convert this array into an object.
// ```jsx
const arr = ["name", "Anubhav", "age", 24]
// ```

// Expected Output:
// ```jsx
// {
//   name: "Anubhav",
//   age: 24
// }
// ```

const obj = {};
for (let i = 0; i < arr.length; i += 2) {
    obj[arr[i]] = arr[i + 1];
}
console.log(obj);
