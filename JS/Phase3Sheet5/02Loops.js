// Q6. Print numbers from 1 to 50 using a loop.

for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// Q7. Print all even numbers between 1 and 100.
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }   
}

// ### Q8. Find the sum of numbers from 1 to 100.

// Output:
// ```jsx
// 5050
// ```

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}

let n = 100;
let sum = (n * (n + 1)) / 2; // Using the formula for the sum of the first n natural numbers
console.log(sum);


// ### Q9. Print the multiplication table of a number.

// Example:
// ```jsx
// table(5);
// ```

// Output:
// ```jsx
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
// ```

let table = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
table(5);


// ### Q10. Count how many digits are present in a number.

// Example:
// ```jsx
// countDigits(12345);
// ```
// Output: 5

let countDigits = (num) => {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
};
console.log(countDigits(12345)); // Output: 5