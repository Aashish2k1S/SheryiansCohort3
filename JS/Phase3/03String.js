// ### Q11. Reverse a string.

// ```jsx
// reverseString("hello");
// ```
// Output: olleh

function reverseString(str) {
    // let reversed = "";
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    // return reversed;
    return str.split("").reverse().join("");
}

// Example usage:
console.log(reverseString("hello")); // Output: olleh
console.log(reverseString("Aashish Gupta")); // Output: olleh


// ### Q12. Count vowels in a string.

// ```jsx
// countVowels("javascript");
// ```
// Output: 3

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("Hello, World!")); // Output: 3


// ### Q13. Check whether a string is a palindrome.

// ```jsx
// isPalindrome("madam");
// ```
// Output: true

let isPalindrome = (str) => console.log((str === str.split("").reverse().join("")) ? true : false);

isPalindrome("madam"); // Output: true
isPalindrome("hello"); // Output: false


// ### Q14. Convert the first letter of every word to uppercase.

// ```jsx
// capitalize("hello world");
// ```
// Output: Hello World

let capitalize = (str) => console.log(str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));

capitalize("hello world");


// ### Q15. Count how many times a character appears in a string.

// ```jsx
// countChar("javascript", "a");
// ```
// Output: 2

function countChar(str, char) {
    let count = 0;  
    for (let c of str) {
        if (c === char) count++;
    }
    return count;
}

console.log(countChar("javascript", "a")); // Output: 2


