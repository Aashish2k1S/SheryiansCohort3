// ### Intermediate

// Remove 2 elements from middle of array.

// **Hint:** `splice(start, deleteCount)`

// ### Hard

// Replace 3 middle elements with 5 new values.

// **Hint:** Use insertion with splice


let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];
console.log(arr.splice(3,2)); // 11, 22
console.log(arr); //10, 20, 30, 33, 99, 88, 77

console.log(arr.splice(3,3, 1,2,3,4,5)); // 33, 99, 88
console.log(arr); //10, 20, 30, 1,2,3,4,5, 77

