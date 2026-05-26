// ### Intermediate

// Copy array into new array.

// **Hint:** Use `...`

// ### Hard

// Merge arrays and add extra values in between.

// **Hint:** Combine spread carefully

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];

let arr2 = [...arr];
arr.pop();
console.log(arr2);



let arr3 = [1,2,3,4];

arr3 = arr3.concat(arr2);

// console.log(arr3.splice(1, 0, 999, 111, 222));
console.log(arr3);
