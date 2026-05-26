// ### Intermediate

// Check whether `"apple"` exists in array.

// **Hint:** Use boolean result

// ### Hard

// Check if all elements of one array exist inside another.

// **Hint:** Loop + includes

let arr = [10, 20, 30, 11, 22, 33, 99, 88, 77];

arr.push('apple');
arr.push('mango');

console.log(arr.includes('apple'));

arr.push([1,2,3,4]);
console.log(arr);

console.log(arr.includes([1,2,3,4]));

arr.pop();
arr.pop();
arr.pop();

arr.push(1);
arr.push(2);
// arr.push(3);
arr.push(4);
console.log(arr);

let arr2 = [1,2,3,4]; 
let count = 0; 

for(let i = 0; i < arr2.length; i++) {    
    if (arr.includes(arr2[i])) count += 1;    
}

console.log(arr2.length === count ? 'arr2 exists in arr' : 'arr2 not exists in arr');

