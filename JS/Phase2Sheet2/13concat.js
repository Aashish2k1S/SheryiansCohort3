// ### Intermediate

// Merge two arrays.

// **Hint:** Use `concat()`

// ### Hard

// Merge 3 arrays and remove duplicate values.

// **Hint:** Combine + loop/includes

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];
let arr2 = [432, 123, 132];
let brr = arr.concat(arr2);
console.log(brr);

// let brr2 = brr.concat(arr, arr2);
// let brr3 = [];
// for (let i = 0; i < brr2.length; i++) {
//     if (!brr3.includes(brr2[i])) brr3.push(brr2[i]);
// }

// brr3.sort((a,b) => a-b);
// console.log(brr3);

let brr2 = [...new Set([...brr, ...arr, ...arr2])].sort((a, b) => a - b);
console.log(brr2);
