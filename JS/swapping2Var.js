// let a = 10;
// let b = 20;

// // with 3rd variable 
// console.log("Before swapping: a = " + a + ", b = " + b);
// let temp = a; 
// a = b;
// b = temp;

// console.log("After swapping: a = " + a + ", b = " + b);


// // without 3rd variable 
// a = 10, b = 20;
// console.log("Before swapping: a = " + a + ", b = " + b);

// a = a + b;
// b = a - b;
// a = a - b;

// console.log("After swapping: a = " + a + ", b = " + b);

// // with destructuring 
// a = 10, b = 20;
// console.log("Before swapping: a = " + a + ", b = " + b);

// [a, b] = [b, a];

// console.log("After swapping: a = " + a + ", b = " + b);


let c = 'aas'; let d = 'hole'; 

//with 3rd variable 
console.log("Before swapping: c = " + c + ", d = " + d);
let temp1 = c;
c = d;
d = temp1;

console.log("After swapping: c = " + c + ", d = " + d);

// without 3rd variable 
c = 'aas'; d = 'hole';
console.log("Before swapping: c = " + c + ", d = " + d);

c = c + d;
d = c - d;
c = c - d;

console.log("After swapping: c = " + c + ", d = " + d);

// with destructuring 
c = 'aas'; d = 'hole';
console.log("Before swapping: c = " + c + ", d = " + d);

[c, d] = [d, c];

console.log("After swapping: c = " + c + ", d = " + d);