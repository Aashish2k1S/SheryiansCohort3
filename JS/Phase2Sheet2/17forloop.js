// ### Intermediate

// Print all array elements using loop.

// **Hint:** Loop through indexes

// ### Hard

// Print elements at only even indexes.

// **Hint:** Increase loop smartly

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];

for (let i = 0; i < arr.length; i++) console.log(arr[i]); 

console.log('print only elem with even indices:');


for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && i % 2 === 0 ) console.log(arr[i]); 
}
