// ### Intermediate

// Add 3 new elements at the end of array.

// **Hint:** Use `push()`

// ### Hard

// Add elements dynamically inside loop from another array.

// **Hint:** Loop + push

let arr = [10, 20, 30, 11, 22, 33];
arr.push(77);
arr.push(88);
arr.push(99);

console.log('arr ', arr);



let arr2 = [];

for (let i = 0; i < arr.length; i++){
    arr2.push(arr[i]);
}
console.log('arr2 ', arr2);


