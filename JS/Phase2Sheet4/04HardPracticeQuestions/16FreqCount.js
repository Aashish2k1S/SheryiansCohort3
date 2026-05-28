// Count frequency of each character.
// Input:
// ```jsx
// "banana"
// ```

// Expected Output:
// ```jsx
// {
//   b:1,
//   a:3,
//   n:2
// }
// ```

const str = "banana";
const obj = {};

for (let char of str) 
    obj[char] = obj[char] + 1 || 1;

console.log(obj);
