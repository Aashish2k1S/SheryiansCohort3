// ## Problem 21: Math Utility Class
// Create:
// ```jsx
// MathHelper
// ```
// with static methods:
// ```jsx
// add()
// subtract()
// multiply()
// divide()
// ```
// Use them without creating an object.

// class MathHelper {
//     static count = 0;
//     static add(a, b) {
//         return a + b;
//     }
//     static subtract(a, b) {
//         return a - b;
//     }
//     static multiply(a, b) {
//         return a * b;
//     }
//     static divide(a, b) {
//         return a / b;
//     }
// }
// console.log(MathHelper.add(10, 20));
// console.log(MathHelper.subtract(10, 20));
// console.log(MathHelper.multiply(10, 20));
// console.log(MathHelper.divide(10, 20));

// console.log(MathHelper.prototype);
// console.log(MathHelper.__proto__);



// ## Problem 22: User Counter
// Create a class:
// ```jsx
// User
// ```
// Use a static property to count how many users have been created.
// ### Example
// ```
// Total Users: 5
// ```

// class User {
//     static count = 0;
//     constructor(name) {
//         this.name = name;
//         User.count += 1;
//     }
//     static name3() {
//         console.log(this.name);
//     }
// }

// const user1 = new User("Anubhav");
// const user2 = new User("Rahul");
// const user3 = new User("Aman");
// const user4 = new User("Aman");
// const user5 = new User("Aman");
// console.log(`Total Users: ${User.count}`);

// console.log(User);
// console.log(User.prototype);
// console.log(User.__proto__);
