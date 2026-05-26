// ### Intermediate

// Sort numbers in ascending order.

// **Hint:** Compare function

// ### Hard

// Sort array so even numbers come first and odd later.

// **Hint:** Custom compare logic

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];

console.log(arr.sort((a,b) => a-b));

console.log(arr.sort((a,b) => (b % 2 == 0) - (a % 2 == 0)  ));
