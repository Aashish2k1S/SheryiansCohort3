// ### Intermediate

// Reverse an array using method.

// **Hint:** Use `reverse()`

// ### Hard

// Reverse only first half of array.

// **Hint:** Manual swapping

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];

console.log(arr.reverse()); // 77, 88, 99, 33, 22, 11, 30, 20, 10
console.log(arr); // 77, 88, 99, 33, 22, 11, 30, 20, 10 

let tempArr = arr.splice(0, arr.length/2).reverse();

arr = [...tempArr.concat(arr)]; 
console.log(arr);
