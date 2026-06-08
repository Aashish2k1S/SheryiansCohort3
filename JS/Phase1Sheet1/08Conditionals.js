// 1. Check whether a number is positive or negative.

let num = -62354

if (num > 0) console.log('positive');
else console.log('negative');

// 2. Check whether a number is even or odd.

if (num % 2 === 0) console.log('even');
else console.log('odd');

// 3. Check whether a person is eligible to vote.

let age = 18;
if (age >= 18) console.log('eligible to vote');
else console.log('not eligible to vote');

// 4. Find the largest among two numbers.

let a = 876, b = 89798; 
if (a > b) console.log(a);
else console.log(b);

// 5. Find the largest among three numbers.

a = 876, b = 89798
let c = 9786; 

if (a > b && a > c) console.log(a);
else if (b > a && b > c) console.log(b);
else if (c > a && c > b) console.log(c);

// 6. Check whether a year is a leap year.

let year = 2028; 
if (year % 400 === 0) console.log('Leap Year');
else if (year % 100 !== 0 && year % 4 === 0) console.log('Leap Year');
else console.log('Not a Leap Year');

// 7. Check whether a number is divisible by both 3 and 5.
// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// 1. Check whether a character is a vowel or consonant.
// 2. Create a calculator using `switch` statement.
// 3. Print the day name based on a number (1–7).
// 4. Check whether a username is `"admin"` and password is `"1234"`.