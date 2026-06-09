// ## Problem 16: Basic Class
// Create a class:
// ```jsx
// Student
// ```
// with:
// ```jsx
// name
// course
// ```
// Add a method:
// ```jsx
// introduce()
// ```
// ### Expected Output
// ```
// I am Anubhav and I study MERN Stack
// ```

// class Student {
//     constructor(name, course) {
//         this.name = name;
//         this.course = course;
//     }
// };

// Student.__proto__.introduce = function() {
//     console.log(`I am ${this.name} and I study ${this.course}`);
// };

// console.log(Student.__proto__.__proto__);
// student1.__proto__.introduce();


// Student.prototype.introduce = function() {
//     console.log(`I am ${this.name} and I study ${this.course}`);
// };

// const student1 = new Student("Anubhav", "MERN Stack");

// console.log(student1.__proto__);

// student1.introduce();




// ## Problem 17: Employee Management
// Create a class:
// ```jsx
// Employee
// ```
// with:
// ```jsx
// name
// salary
// ```
// Add methods:
// ```jsx
// increaseSalary()
// showSalary()
// ```

// class Employee {
//     constructor(name, salary) {
//         this.name = name;
//         this.salary = salary;
//     }
// };
// function increaseSalary() {
//     this.salary += 1000;
// };
// function showSalary() {
//     console.log(`My salary is ${this.salary}`);
// };

// console.log(Employee.prototype);

// Employee.prototype.increaseSalary = increaseSalary;
// Employee.prototype.showSalary = showSalary;

// console.log(Employee.prototype);

// const employee1 = new Employee("Anubhav", 50000);
// employee1.__proto__.showSalary = showSalary;
// employee1.__proto__.increaseSalary = increaseSalary;
// console.log(employee1.__proto__);

// employee1.showSalary();
// employee1.increaseSalary();
// employee1.showSalary();




// ## Problem 18: Bank Account System
// Create a class:
// ```jsx
// BankAccount
// ```
// Features:
// - Deposit
// - Withdraw
// - Check Balance
// ### Bonus
// Prevent withdrawing more than available balance.

// class BankAccount {
//     constructor(owner, balance) {
//         this.owner = owner;
//         this.balance = balance;
//     }
// };

// function deposit(amount) {
//     this.balance += amount;
// };
// function withdraw(amount) {
//     if (amount > this.balance) {
//         console.log("Insufficient balance");
//     } else {
//         this.balance -= amount;
//     }
// };
// function checkBalance() {
//     console.log(`Your balance is ${this.balance}`);
// };

// console.log(BankAccount.prototype);
// BankAccount.prototype.methods = {deposit, withdraw, checkBalance};
// console.log(BankAccount.prototype);
// BankAccount.prototype.deposit = deposit;
// BankAccount.prototype.withdraw = withdraw;
// BankAccount.prototype.checkBalance = checkBalance;  
// console.log(BankAccount.prototype);

// const account1 = new BankAccount("Anubhav", 10000);
// account1.checkBalance();
// account1.deposit(5000);
// account1.checkBalance();
// account1.withdraw(2000);
// account1.checkBalance();
// account1.withdraw(15000);
// account1.checkBalance();

// account1.withdraw(15000);
// account1.withdraw(10000);
// account1.checkBalance();



// ## Problem 19: Inheritance Challenge
// Create:
// ```jsx
// Animal
// ```
// class.
// Create:
// ```jsx
// Dog
// ```
// class using:
// ```jsx
// extends
// ```
// Methods:
// ```jsx
// eat()
// bark()
// ```

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// };


// class Dog extends Animal {
//     constructor(name) {
//         super(name);

//         function eat_test() {
//             console.log(`${this.name} is eating`);
//         };
//         function bark_test() {
//             console.log(`${this.name} is barking`);
//         }
//     };

//     eat() {
//         console.log(`${this.name} is eating`);
//     }
//     bark() {
//         console.log(`${this.name} is barking`);
//     }
// };

// const dog1 = new Dog("Buddy");
// dog1.eat();
// dog1.bark();

// console.log(dog1.__proto__);

// dog1.eat_test();
// dog1.bark_test();




// ## Problem 20: Multi-Level Inheritance
// Create:
// ```
// Person
//    ↓
// Employee
//    ↓
// Manager
// ```
// Add unique properties and methods at each level.


//this multi-level inheritance is not possible in ES6
// class Person {
//     constructor(name) {
//         this.name = name;        
//     }

//     introduce() { 
//         console.log(`Hello, my name is ${this.name}`); 
//     }; 
// };

// class Employee extends Person {
//     constructor(name, salary) {
//         super(name);
//         this.salary = salary;
//     }

//     showSalary() {
//         console.log(`My salary is ${this.salary}`);
//     };    

// };

// class Manager extends Employee {
//     constructor(name, salary, department) {
//         super(name, salary);
//         this.department = department;
//     }

//     showDepartment() {
//         console.log(`My department is ${this.department}`);
//     };
// };


// console.log(Person.prototype);
// console.log(Employee.prototype);
// console.log(Manager.prototype);

// const manager1 = new Manager("Anubhav", 50000, "IT");
// console.log(manager1);

// manager1.introduce();
// manager1.showSalary();
// manager1.showDepartment();
