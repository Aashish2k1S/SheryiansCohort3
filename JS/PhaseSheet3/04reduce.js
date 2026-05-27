// ### Intermediate Question

// Find total sum of array.
// ```jsx
let nums = [10,20,30,40];
// ```

// Expected Output:
// ```jsx
// 100
// ```

// ### Hint
// - `reduce()` needs:
//     - accumulator
//     - current value

let sum = nums.reduce((a, v) => {return a+v;}, 0);
console.log(sum);


// ### Hard Question

// Count frequency of elements.
// ```jsx
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// ```

// Expected Output:
// ```jsx
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// ```

// ### Hint
// - Create an empty object `{}` as initial value.
// - Increase count if already exists.

let obj = fruits.reduce((a,v) => {
    // console.log('before a ', a , ' v ', v);
    
    // a[v] = 1;
    a[v] = (a[v] || 0) + 1;

    // console.log('after a ', a , ' v ', v);

    return a;
}, {});

console.log(obj);
