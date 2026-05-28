// Print all keys and values from this object.
// ```jsx
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}
// ```

// Hint:
// Use:
// ```jsx
// for...in
// ```

for(let key in person) {
    console.log(key, person[key])
}