// 1. Convert the string `"50"` into a number.

let num = '50'; 
console.log(num); //string
console.log(Number(num)); //number

// 2. Convert the number `100` into a string.

let num2 = 100; 
console.log(num2); //number
console.log(String(num2)); //string

// 3. Convert `"true"` into a boolean.

let bol = 'true';
console.log(bol);
console.log(Boolean(bol));

// 4. Check the output of:
// - `"5" + 2`
console.log("5" + 2);

// - `"5" - 2`
console.log("5" - 2);

// - `true + 1`
console.log(true + 1);

// 1. Create a variable with value `"123abc"` and convert it into a number.

let temp = '123abc'; 
console.log(temp); //`123abc`
console.log(Number(temp)); //NaN
console.log(Number.isInteger(temp)); //false

// 2. Use `parseInt()` on `"500px"`.

let temp2 = '500px'; 
console.log(parseInt(temp2));