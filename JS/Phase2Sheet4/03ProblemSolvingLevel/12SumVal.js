// Find total salary.
// ```jsx
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}
// ```

// Expected Output:
// ```jsx
// 4500
// ```


//#for...in
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }


//#reduce -- redue will not directly work on obj. 
//So, Object.values will convert obj to array
//then reduce will work
let sum = 
    Object.values(salaries)
    .reduce((a,b) => a + b, 0);

console.log(sum);