// FUNCTIONS 

// function greet(name) {console.log(`Hello ${name}`);}
// greet('Ritik');

// function add(a,b) { return a + b; }
// console.log(add(10,20));

// function square(num) {return num * num;}
// console.log(square(5));

// function isEven(num) {return num % 2 === 0 && num !== 0;}
// console.log(isEven(5));

// function greet(name="Guest") {
//     console.log(`Hello ${name}`);
// }
// greet();
// greet('Ritik');

// function convertTemp(celsius) {return `${(parseInt(celsius)*9/5)+32} F`;}
// console.log(convertTemp('20 C'));

// function multiply(a,b) {returna*b;}
// let multiply = (a,b) => a*b;

// function calculateDiscount(price) {
//     return (price * 0.9).toFixed(2);
// }
// console.log(calculateDiscount(100));
// console.log(calculateDiscount(500));

// function findLargest(a,b,c) {return Math.max(a,b,c);}
// console.log(findLargest(10,50,20));

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello"));

// function countVowels(str) {
//     const vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("javascript"));

// function generateUsername(name) {
//     return name.toLowerCase().split(' ').join('_');
// }
// console.log(generateUsername("Ritik Rajput"));

// function sum(...numbers) {
//     return numbers.reduce(
//         (acc, cur) => acc + cur, 0
//     );
// }
// console.log(sum(1,2,3,4));

// function login(username,password) {
//     return (username === "admin" && password === "12345") ? "Login Successful" : "Invalid Credentials";
// }

// console.log(login("admin", "12345"));
// console.log(login("asdas", "54564"));

// function factorial(n) {
//     // return n === 0 ? 1 : n * factorial(n - 1);    
//     if (n < 0) return undefined;
//     if (n <= 1) return 1;
//     let fact = 1
//     for(let i = 2; i<= n; i++) fact *= i;
//     return fact;
// }
// console.log(factorial(5));

// function isPalindrome(str) {
//     return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("Aashish"));

// function checkPassword(password){
//     const char = 'abcdefghijklmnopqrstuvwxyz';
//     const num = '0123456789';
//     let charCount = 0, numCount = 0;
//     for (let i = 0; i < password.length; i++) {
//         if (char.includes(password[i])) charCount++;
//         if (num.includes(password[i])) numCount++;

//         if (charCount >= 8 && numCount >= 1) return 'Strong';        
//     }
//     return 'Weak';
// }
// console.log(checkPassword('aghduiashdkas5'));
// console.log(checkPassword('agh5'));

// function makeMultiplier(multiplier) {
//     return (num) => num * multiplier;
// }
// let double = makeMultiplier(2);
// //(num) => num * 2
// console.log(double(10));
// //(10) => 10 * 2

// function processUser(name,callback) {
//     console.log(`Processing User...`);
//     callback(name);
// }
// function welcomeUser(name) {
//     console.log(`Welcome ${name}`);
// }
// processUser("Ritik",welcomeUser);

function generateBill(items) {
    
}