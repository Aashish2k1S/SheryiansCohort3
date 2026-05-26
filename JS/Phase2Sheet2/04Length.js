// ### Intermediate

// Find total elements in an array without counting manually.

// **Hint:** Use `.length`

// ### Hard

// Create a function that checks whether array length is even or odd.

// **Hint:** Use modulus operator

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];
console.log(arr.length);


let odd_even_len = (len) => console.log(len % 2 === 0 ? 'Even' : 'Odd');
odd_even_len(arr.length);
arr.pop();
odd_even_len(arr.length);
