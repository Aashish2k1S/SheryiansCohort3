class BankAccount {
    #balance = 0;
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Success, deposited ${amount}`;
        }
        else {
            return `Invalid amount`;
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Success, withdrawn ${amount}`;
        }
        else {
            return `Invalid amount`;
        }
    }
    getBalance() { return `Current balance is ${this.#balance}`; }
}
const acc = new BankAccount();
console.log(acc.getBalance());
console.log(acc.deposit(1000));
console.log(acc.getBalance());
console.log(acc.withdraw(300));
console.log(acc.getBalance());