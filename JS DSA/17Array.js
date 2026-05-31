// ARRAY PART 1 



// Calculte sum and mean of an array element 
function calculateSumAndMean(arr, n) {
    // Write your logic here
    let sum = 0;
    for (let i = 0; i < n; i++) sum += arr[i];
    return [sum,(sum / n).toFixed(1)];
}
module.exports = { calculateSumAndMean };


// Find the greatest element and its index 
function findGreatestElementAndIndex(arr) {
    // Write your logic here
    return [Math.max(...arr), arr.indexOf(Math.max(...arr))];
}
module.exports = { findGreatestElementAndIndex };


// Find the second largest element 
function findSecondGreatestElement(arr) {
    // Write your logic here
    
}
module.exports = { findSecondGreatestElement }; 



// ARRAY PART 2 


// Copy and Reverse Array
function copyAndReverseArray(arr) {
    // Write your logic here
    return arr.slice().reverse();   
}

module.exports = { copyAndReverseArray };

//Array Reverse Without Extra Space 
function reverseArrayInPlace(arr) {
    // Write your logic here
    return arr.reverse();
}

module.exports = { reverseArrayInPlace };

//Array Left Rotation By 1 
function leftRotateByOne(arr) {
    // Write your logic here
    
}

module.exports = { leftRotateByOne };



// ARRAY ASSIGNMENTS 


