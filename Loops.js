// there are only 2 types of loops
// entry controlled loop -> for, while 
// exit controlled loop -> do-while 

//for loop 
function printNumbers(n) {
   //Write your code here
   let str = '';
   for (let i = n; i >= 1; i--) {
    str = str + i + " ";
   }   
   console.log(str.trim());    
}

module.exports = { printNumbers };


function printNumbers(n) {
   //Write your code here
   let str = "";
   for (let i = 1; i <= n; i++) {
    str = str + i + " ";
   }
   console.log(str.trim());
}

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
    let str = ''; 
    for (let i = 1; i <= n; i++) {
        if (n%i == 0) {
            str = str + i + " ";
        }
    }
    console.log(str.trim());

}

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

