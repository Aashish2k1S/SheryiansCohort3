// ### Q16. Find the largest number in an array.

// ```jsx
// [10, 20, 30, 40, 50]
// ```
// Output: 50

function findLargestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let max = Math.max(...arr);
    return max;
}
console.log(findLargestNumber([10, 20, 30, 40, 50])); // Output: 50


// ### Q17. Find the smallest number in an array.

// ```jsx
// [10, 20, 30, 40, 50]
// ```
// Output: 10

function findSmallestNumber(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let min = Math.min(...arr);
    return min;
}   
console.log(findSmallestNumber([10, 20, 30, 40, 50])); // Output: 10


// ### Q18. Find the sum of all array elements.

// ```jsx
// [1,2,3,4,5]
// ```
// Output: 15

function findSum(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
console.log(findSum([1, 2, 3, 4, 5])); // Output: 15


// ### Q19. Return only even numbers from an array.

// ```jsx
// [1,2,3,4,5,6]
// ```
// Output: [2,4,6]

function findEvenNumbers(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]


// ### Q20. Remove duplicate values from an array.

// ```jsx
// [1,2,2,3,4,4,5]
// ```
// Output: [1,2,3,4,5]

function removeDuplicates(arr) {
    if (arr.length === 0) {
        return null; // Return null for an empty array
    }
    let uniqueValues = [];
    arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr);
            uniqueValues.push(curr);
        }
        return acc;
    }, []);
    return uniqueValues;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]


// ### 🎯 Bonus Task (For Fast Learners)
// Build a **Student Marks Calculator**.
// Input:
// ```jsx
// [50, 60, 70, 80, 90]
// ```
// Output:
// ```jsx
// Highest Marks: 90
// Lowest Marks: 50
// Average Marks: 70
// Total Marks: 350
// ```

function studentMarksCalculator(marks) {
    if (marks.length === 0) {
        return null; // Return null for an empty array
    }
    let highestMarks = Math.max(...marks);
    let lowestMarks = Math.min(...marks);
    let totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
    let averageMarks = totalMarks / marks.length;
    return {
        highestMarks,
        lowestMarks,
        totalMarks,
        averageMarks
    };
}
const marks = [50, 60, 70, 80, 90];
const result = studentMarksCalculator(marks);
console.log(`Highest Marks: ${result.highestMarks}`);
console.log(`Lowest Marks: ${result.lowestMarks}`);
console.log(`Average Marks: ${result.averageMarks}`);
console.log(`Total Marks: ${result.totalMarks}`);