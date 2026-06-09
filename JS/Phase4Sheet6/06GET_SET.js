// ## Problem 23: Full Name Getter
// Create:
// ```jsx
// Person
// ```
// with:
// ```jsx
// firstName
// lastName
// ```
// Create a getter:
// ```jsx
// fullName
// ```

// class Person {
//     _department = 'IT'; //private property

//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set department(department) {
//         this._department = department;
//     }
//     get department() {
//         return this._department;
//     }
// }

// const person = new Person('Aashish', 'Gupta');
// console.log(person.fullName);

// person.department = 'Engineering';
// console.log(person.department);
// console.log(person._department);
// console.log(person["_department"]);

// ## Problem 24: Email Validation Setter
// Create a setter:
// ```jsx
// email
// ```
// Reject invalid emails.
// ### Example
// ```
// Invalid Email
// ```

// class Person {
//   _department = "IT"; //private property
//   _email = "";

//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   set department(department) {
//     this._department = department;
//   }
//   get department() {
//     return this._department;
//   }
//   set email(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailRegex.test(email)) {
//       // if (email.includes('@')) {
//       this._email = email;
//     } else {
//       console.log("Invalid Email");
//     }
//   }

//   get email() {
//     return this._email;
//   }
// }

// const person = new Person("Aashish", "Gupta");

// person.email = "aashishgupta.com";
// console.log(person.email);

// person.email = "aashishgupta@gmail.com";
// console.log(person.email);

// person.email = "aashishgupta.com";
// console.log(person.email);
