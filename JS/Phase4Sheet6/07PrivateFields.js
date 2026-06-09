// ## Problem 25: Secure Bank Account
// Create:
// ```jsx
// #balance
// ```
// as a private field.
// Allow:
// ```jsx
// deposit()
// withdraw()
// getBalance()
// ```
// Disallow direct access.

// class BankAccount {
//     #balance = 0;
//     // static #balance = 0;
//     deposit(amount) {
//         this.#balance += amount;
//     }
//     withdraw(amount) {
//         this.#balance -= amount;
//     }
//     getBalance() {
//         return this.#balance;
//     }
// }

// const account1 = new BankAccount();
// account1.deposit(5000);
// account1.withdraw(2000);
// console.log(account1.getBalance());
// console.log(account1);
// console.log(BacnkAccount["#balance"]);

// ## Problem 26: Student Grades System
// Create:
// ```jsx
// #marks
// ```
// Store marks privately.
// Provide methods:
// ```jsx
// setMarks()
// getMarks()
// ```

class Student {
    #marks = 0; _marks2 = 0;

    set Marks2(marks) {
        this._marks2 = marks;
    }
    get Marks2() {
        return this._marks2;
    }
    setMarks2(marks) {
        this._marks2 = marks;
    }
    getMarks2() {
        return this._marks2;
    }

    set Marks(marks) {
        this.#marks = marks;
    }
    get Marks() {
        return this.#marks;
    }    
    setMarks(marks) {
        this.#marks = marks;
    }
    getMarks() {
        return this.#marks;
    }
}

const student1 = new Student();

console.log(student1.__proto__);

console.log();
student1.Marks = 100;
console.log(student1["#marks"]);
console.log(student1.Marks);
console.log();
student1.setMarks(150);
console.log(student1.getMarks());

console.log();

student1.Marks2 = 80;
console.log(student1._marks2);
console.log(student1.Marks2);
console.log();
student1.setMarks(120);
console.log(student1.getMarks());
