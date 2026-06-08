// 1. Create a variable called `studentName` and store your name in it.

var studentName = 'aashish gupta';
console.log(studentName); //aashish gupta

// 2. Create a variable `age` and print it.

var age = 24; 
console.log(age); //24

// 3. Create two variables and swap their values.

var a = 10, b = 12; 
var temp = a; 
a = b; 
b = temp; 
console.log('a ', a, ' b ', b); // a 12 b 10

// 4. Create a constant variable for `PI` and print it.

var x = Math.PI; 
console.log('PI ', x); // 3.14...

// 5. Declare a variable without assigning a value and print it.

var d;
console.log(d); //undefined

// 6. Create a variable `score` and increase it by 10.

var score = 1; 
score += 10; 
console.log(score);

// 7. Create three variables for first name, last name, and full name.

var fName = 'aashish', lName = 'gupta';
var fullName = fName + ' ' + lName;
console.log(fullName);