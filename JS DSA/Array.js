// ARRAY PART 1 



// Calculte sum and mean of an array element 
function calculateSumAndMean(arr, n) {
    // Write your logic here
    let sum = 0;
    for (let i = 0; i < n; i++) sum += arr[i];
    return [sum, (sum / n).toFixed(1)];
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


// Array Reverse Without Using Extra Space
function reverseArrayInPlace(arr) {
    // Write your logic here
    return arr.reverse();
}

module.exports = { reverseArrayInPlace };

// Array Left Rotation by 1
function leftRotateByOne(arr) {
    // Write your logic here
    k = 1;
    k = k % arr.length;
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}

module.exports = { leftRotateByOne };


// Move Zeros
function moveZerosToEnd(arr) {
    // Write your logic here
    // let count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== 0) {
    //         arr[count] = arr[i];
    //         count++;
    //     }
    // }
    // while (count < arr.length) {
    //     arr[count] = 0;
    //     count++;
    // }

    for (let i = 0; i < arr.length; i++) {
        arr.push(arr[arr.indexOf(0)]);
        arr.splice(arr.indexOf(0), 1);
    }
    return arr;
}
module.exports = { moveZerosToEnd };


// Move Zeros without Extra Space
// helper.js

class Solution {

    moveZeros(arr) {
        // write your code here
        for (let i = 0; i < arr.length; i++) {
            arr.push(arr[arr.indexOf(0)]);
            arr.splice(arr.indexOf(0), 1);
        }
        return arr;
    }

}

module.exports = Solution;

