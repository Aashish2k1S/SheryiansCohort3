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
