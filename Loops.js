// there are only 2 types of loops
// entry controlled loop -> for, while 
// exit controlled loop -> do-while 

//for loop 
function printNumbers(n) {
   //Write your code here
//    let str = '';
   for (let i = n; i >= 1; i--) {
    process.stdout.write(i + " ");
    // str = str + i + " ";
   }   
//    console.log(str.trim());    
}

// process.stdout.write -> this will not print the newline after the output like console.log() do.

module.exports = { printNumbers };


function printNumbers(n) {
   //Write your code here
    //    let str = "";
   for (let i = 1; i <= n; i++) {
        process.stdout.write(i + " ");
        //str = str + i + " ";
   }
//    console.log(str.trim());
}

// process.stdout.write -> this will not print the newline after the output like console.log() do.

module.exports = { printNumbers };


function sumUpToN(n) {
    // Write your logic here
    return n*((n+1)/2);
}

module.exports = { sumUpToN };


function factorial(n) {
    // Write your code here
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;    
}

module.exports = { factorial };


function printFactors(n) {
    // Write your logic here
    
    // instead of iterating from 1 to n, 

    //let str = ''; 
    // for (let i = 1; i <= n; i++) {
    //     if (n%i == 0) {            
    //         //str = str + i + " ";
    //         process.stdout.write(i + " ");
    //     }
    // }
    //console.log(str.trim());

    // we can iterate from 1 to n/2 only because after n/2 no common factors of n exists so from 1 to n/2 and n itself are the common factors of n. 

    for (let i = 1; i <= n/2; i++) {
        if (n%i == 0) process.stdout.write(i + " ");
    }  
    process.stdout.write(n + " ");  
}

// process.stdout.write -> this will not print the newline after the output like console.log() do.

module.exports = { printFactors };


function sumEvenOddInRange(start, end) {
    // Write your logic here
    let sumEven = 0, sumOdd = 0; 
    for (let i = start; i <= end; i++) {
        if (i%2 == 0) sumEven += i; 
        else sumOdd += i; 
    }
    return [sumEven, sumOdd];
}

module.exports = { sumEvenOddInRange };


let count = 0;
for (let i = 2; i <= 20; i += 3) {
    count++;
}
console.log(count);


// # LOOPS PROBLEM PART 1 

// 1. CHECK IF THE NUMBER IS PRIME 
function isPrime(n) {
    // Write your logic here 
    
    // if (n <= 1) return 'Not Prime'; 

    // for (let i = 2; i < Math.ceil(n/2); i++) { 
    //     if (n%i == 0) return 'Not Prime'; 
    // } 
    // return 'Prime'; 

    if (n <= 1) return 'Not Prime'; 

    let isPrime = true; 
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n%i == 0) {
            isPrime = false; 
            break; 
        } 
    }
    return (isPrime ? "Prime" : "Not Prime"); 
}

module.exports = { isPrime };


let i = 10;
while (i % 3 !== 0) {
    console.log(i);
    i--;
}

// 10   10 % 3 !== 0 -> true 
// 9    9 % 3 !== 0 -> false 
// 8    8 % 3 !== 0 -> true 
// 7    7 % 3 !== 0 -> true 
// 6    6 % 3 !== 0 -> false 
// 5    5 % 3 !== 0 -> true 
// 4
// 2
// 1


x = 5
while x:
    print(x)
    x -= 1


// 2. FATORIAL OF A NUMBER 

/**
 * Recursive function to calculate factorial of a number
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    // Write your code here
    if (n == 0 || n == 1) return 1;
    else if (n < 0) return undefined;
    else 
    {
        let fact = 1;
        for (let i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}

module.exports = { factorial };




// # LOOPS PROBLEM PART 2 

// 1. CALCULATE POWER OF A NUMBER 
function calculatePower(a, b) {
    // Write your logic here 

    if (b == 0) return 1;
    if (a == 0) return 0;     
    return a ** b; 
}

module.exports = { calculatePower };


// 2. CHECK IF A NUMBER IS STRONG 
// EG: IT MEANS THE SUM OF THE FACTORIAL OF THE DIGITS OF THE NUMBER SHOULD BE EQUAL TO THE NUMBER ITSELF 
// 145 =>  1! + 4! + 5! = 1 + 24 + 120 = 145 (Yes STRONG NUMBER) 
// 123 => 1! + 2! + 3! = 1 + 2 + 6 = 9 (No STRONG NUMBER) 

function fact(n){
  if (n === 0 || n === 1) return 1; 
  else if (n < 0) return undefined; 
  else {
    let fact = 1; 
    for (let i = 2; i <= n; i++) fact *= i; 
    return fact; 
  }
}

function isStrongNumber(n) {
  if (n < 0) return "No";

  let sum = 0, remain = n, temp = 0; 
  while (true){
    temp = remain % 10; 
    remain = Math.floor(remain/ 10);     
    
    sum += fact(temp); 

    if (remain === 0) break;       
  }

  return (sum === n ? 'Yes' : 'No');
}

module.exports = { isStrongNumber };    


let x = 50;

if (x <= 50) {
    if (x === 50) {
        console.log("x is 50");
    } else {
        console.log("x is less than 50");
    }
} else {
    console.log("x is greater than 50");
}

x = 5
while x:
    print(x)
    x -= 1

let x = 1;
while (true) {
    console.log(x);
    x++;
    if (x > 3) break;
}



// # WHILE LOOPS PROBLEM PART 1 

// SUM OF DIGITS OF A NUMBER 
function sumOfDigits(n) {
    // Write your logic here
    if (n <= 1 || n % 10 === 0) return n; 

    let sum = 0, remain = n, temp = 0; 
    while(true){
        temp = remain % 10; 
        remain = Math.floor(remain / 10); 
        sum += temp; 

        if (remain === 0) break; 
    }
    return sum; 
}

module.exports = { sumOfDigits };


//CHECK IF A NUMBER IS AUTOMORPHIC 
//EG : IT MEANS THE NUMBER SHOULD BE PRESENT AT THE END OF THE SQUARE OF THE NUMBER 
// 5 => 5*5 = 25 (Yes AUTOMORPHIC NUMBER) 
// 6 => 6*6 = 36 (Yes AUTOMORPHIC NUMBER) 
// 25 => 25*25 = 625 (Yes AUTOMORPHIC NUMBER) 
// 76 => 76*76 = 5776 (Yes AUTOMORPHIC NUMBER) 
// 123 => 123*123 = 15129 (No AUTOMORPHIC NUMBER) 

function isAutomorphic(n) {
    // Write your logic here
    if (n<=0) return 'No'; 
    
    let remain = n, temp = 0, sq = n*n, temp2 = 0; 
    let isAutomorphic = true; 

    while(true){
        temp = remain % 10; 
        remain = Math.floor(remain / 10); 
        temp2 = sq % 10; 
        sq = Math.floor(sq / 10); 
        
        if (temp !== temp2) {
            isAutomorphic = false; 
            break; 
        }

        if (remain === 0) break; 
    }
    return (isAutomorphic ? 'Yes' : 'No'); 
}

module.exports = { isAutomorphic };



// # WHILE LOOPS PROBLEM PART 2 

// REVERSE A NUMBER 
function reverseNumber(n) { 
    // Write your logic here 
    
    let num = parseInt(n), temp = 0, rev = 0; 

    while(true) 
    { 
        temp = num % 10; 
        rev = rev * 10 + temp; 
        num = Math.floor(num / 10); 
        
        if (num === 0) break; 
    } 

    return rev; 
}

module.exports = { reverseNumber };


// # DO WHILE LOOP 

// HARSHAD NUMBER CHECK 
//EG : IT MEANS THE NUMBER SHOULD BE DIVISIBLE BY THE SUM OF ITS DIGITS 
// 18 => 1+8 = 9 => 18%9 = 0 (Yes HARSHAD NUMBER) 
// 123 => 1+2+3 = 6 => 123%6 = 3 (No HARSHAD NUMBER) 
class Solution {
    is_harshad(nStr) {
        // Write your code here
        function sumOfDigits(n) {
            let num = parseInt(n), temp = 0, sum = 0; 

            while(true)
            {
                temp = num % 10; 
                num = Math.floor(num / 10); 
                sum += temp; 

                if (num === 0) break; 
            }
            return sum; 
        }

        let sum = sumOfDigits(nStr); 
        let num = parseInt(nStr); 
        return (num % sum === 0 ? 'Harshad Number' : 'Not Harshad Number'); 
    }
}

module.exports = Solution;


// ABUNDANT NUMBER CHECKER 
//EG : IT MEANS THE SUM OF THE PROPER DIVISORS OF THE NUMBER SHOULD BE GREATER THAN THE NUMBER ITSELF 
// 12 => 1+2+3+4+6 = 16 => 16 > 12 (Yes ABUNDANT NUMBER) 
// 18 => 1+2+3+6+9 = 21 => 21 > 18 (Yes ABUNDANT NUMBER) 
// 20 => 1+2+4+5+10 = 22 => 22 > 20 (Yes ABUNDANT NUMBER) 
// 24 => 1+2+3+4+6+8+12 = 36 => 36 > 24 (Yes ABUNDANT NUMBER) 
// 28 => 1+2+4+7+14 = 28 => 28 = 28 (No ABUNDANT NUMBER) 
class Solution {
    is_abundant(nStr) {
        // Write your code here 
        function sumofFactors(n){
            let num = n, sum = 0; 
            if (num === NaN || num === 1 || num === 0 || num < 0) return 0; 
            for (let i = 1; i <= Math.floor(num/2); i++) if (num % i === 0) sum += i; 
            return sum; 
        } 
        
        let num = parseInt(nStr);
        let sumofDivisors = sumofFactors(num); 
         
        return (sumofDivisors > num ? 'Yes' : 'No'); 
    }
}

module.exports = Solution;


// FINDING PRIME FACTORS OF A NUMBER 
//EG : IT MEANS THE NUMBER SHOULD BE DIVISIBLE BY THE SUM OF ITS DIGITS 
// 60 => 2 * 2 * 3 * 5 (Prime Factors of 60 are 2, 2, 3, 5) 
// 12 => 2 * 2 * 3 (Prime Factors of 12 are 2, 2, 3) 
class Solution { 
    prime_factors(nStr) { 
        // Write your code here 
        let num = parseInt(nStr), d = 2, str = ''; 

        if (num <= 1) return 'No prime factors'; 

        while (num > 1) {
            if (num % d === 0) {
            str = str + d + "\n";
            num = num / d;
            } else d++;
        }
        return str.trim(); 
    }
}

module.exports = Solution;


// ARMSTRONG NUMBER 
//EG : IT MEANS THE SUM OF THE POWER OF THE DIGITS OF THE NUMBER SHOULD BE EQUAL TO THE NUMBER ITSELF 
// 153 => 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 (Yes ARMSTRONG NUMBER) 
// 123 => 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 (No ARMSTRONG NUMBER) 
class Solution {
    is_armstrong(nStr) {
        // Write your code here
        let num = parseInt(nStr); 
        if (num < 0) return 'Not Armstrong'; 

        let len = String(num).length, sum = 0, temp = 0, remain = num; 
        
        while(true){
            temp = remain % 10; 
            remain = Math.floor(remain / 10); 
            sum += Math.pow(temp, len); 

            if (remain === 0) break; 
        } 
        return (sum === num ? 'Armstrong' : 'Not Armstrong'); 
    }
}

module.exports = Solution;


// CHECK IF A NUMBER IS A NEON NUMBER 
//EG : IT MEANS THE NUMBER SHOULD BE DIVISIBLE BY THE SUM OF ITS DIGITS 
// 9 => 9*9 = 81 => 8+1 = 9 => 81%9 = 0 (Yes NEON NUMBER) 
// 123 => 1+2+3 = 6 => 123%6 = 3 (No NEON NUMBER) 
class Solution {
    is_neon(nStr) {
        // Write your code here
        let n = parseInt(nStr);

        if (n < 0) return 'No';

        let sq = n*n, sum = 0;

        while(sq > 0){
            sum += sq%10; 
            sq = Math.floor(sq/10); 
        }
        return sum === n ? 'Yes' : 'No';
    }
}

module.exports = Solution;