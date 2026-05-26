// ### Intermediate

// Remove first element from array.

// **Hint:** Use `shift()`

// ### Hard

// Remove first element repeatedly until only 2 elements remain.

// **Hint:** Loop + length check


let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];
console.log(arr.shift());

while (arr.length > 2) arr.shift();
console.log(arr.length);
console.log(arr);
