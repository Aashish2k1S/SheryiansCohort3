// ### Intermediate

// Find index of `"Rahul"` in array.

// **Hint:** Use `indexOf()`

// ### Hard

// Find all positions of repeated number `5`.

// **Hint:** Loop through entire array

let arr = [10, 20, 5, 11, 'Rahul', 22, 33, 5, 88, 5];
console.log(arr.indexOf('Rahul'));
console.log(arr[arr.indexOf('Rahul')]);
console.log(arr.indexOf(5));

let arr2 = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        console.log(i);        
        arr2.push(i);
    }
}

console.log(arr2);


