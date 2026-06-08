// 1. Create a string and print its length.

let str = 'Aashish';
console.log(str.length);

// 2. Convert a string into uppercase.

console.log(str.toUpperCase());

// 3. Convert a string into lowercase.
 
console.log(str.toLowerCase());

// 4. Check if a string includes the word `"JavaScript"`.

str = 'I love JS'; 
console.log(str.includes('JavaScript'));

// 5. Extract the word `"World"` from `"Hello World"`. 

str = 'Hello World'; 

//take start index, end index 
console.log(str.slice(6, 11)); 
console.log(str.substring(6, 11)); 

// 6. Replace `"apple"` with `"mango"` in a sentence. 

str = 'I love apple';
console.log(str.replace('apple', 'mango'));

// 7. Split `"HTML,CSS,JS"` into an array.
str = "HTML,CSS,JS"
console.log(str.split(','));

// 8. Remove extra spaces from a string.

str = '            hello              '
console.log(str);
console.log(str.trim());

// 9. Repeat the word `"Hi"` 5 times.

str = 'Hi'
console.log(str.repeat(5));

// 10. Print the first character of a string.

console.log(str[0]);

// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

let name = 'aashish', age = 24; 
console.log(`My name is ${name} and I am ${age} years old`);
