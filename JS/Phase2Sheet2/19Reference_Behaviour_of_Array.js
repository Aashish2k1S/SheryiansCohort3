// ### Intermediate

// Assign one array to another variable and modify second one.

// **Hint:** Observe original array

// ### Hard

// Create true copy so original array does not change.

// **Hint:** Use spread operator

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];

let arr2 = arr; 
arr2.pop(); 
console.log(arr);

let arr3 = [...arr]; 
arr3.pop(); 
arr3.pop(); 
console.log(arr);
console.log(arr3);




