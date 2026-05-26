// ### Intermediate

// Create a 2D array and print all first elements of inner arrays.

// **Hint:** Double indexing

// ### Hard

// Find the sum of all diagonal elements in a 3x3 matrix.

// **Hint:** Same row and column index

let arr = [
    [10,20,30], 
    [11,22,33], 
    [99,88,77]
]

console.log(arr[0][0]);
console.log(arr[1][0]);
console.log(arr[2][0]);

console.log(
    arr[0][0] + 
    arr[0][arr[0].length-1] + 
    arr[1][1] + 
    arr[arr.length-1][0] + 
    arr[arr.length-1][arr.length-1] 
);


