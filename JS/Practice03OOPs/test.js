// Library Management System

class Book {
    constructor(id, title, author, borrowed = false) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.borrowed = borrowed;
    }
}
class Library {
    #books = new Array();

    addBook(book) {
        if (!(book instanceof Book)) {
            console.log("Invalid book");
            return;
        }
        this.#books.push(book);
        console.log("Book added successfully...");
    }
    borrowBook(id) {
        const book = this.#books.find(book => book.id === id);
        if (!book) {
            console.log("Book not found...");
            return;
        }
        if (book.borrowed) {
            console.log("Book already borrowed...");
            return;
        }
        book.borrowed = true;
        console.log("Book borrowed successfully...");
    }
    returnBook(id) {
        const book = this.#books.find(book => book.id === id);
        if (!book) {
            console.log("Book not found...");
            return;
        }
        if (!book.borrowed) {
            console.log("Book already returned...");
            return;
        }
        book.borrowed = false;
        console.log("Book returned successfully...");
    }
    showAvailableBooks() {
        const availableBooks = this.#books.filter(book => !book.borrowed);
        if (!availableBooks.length) {
            console.log("No available books...");
            return;
        }
        console.log("Available books:");
        availableBooks.forEach(book => {
            console.log(
                `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`
            );
        });
    }
    showAllBooks() {
        if (!this.#books.length) {
            console.log("No books found...");
            return;
        }
        console.log("All books:");
        this.#books.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Borrowed: ${book.borrowed}`);
        });
    }
}
const library = new Library();
library.addBook(new Book(1, "Book 1", "Author 1"));
library.addBook(new Book(2, "Book 2", "Author 2"));
library.showAllBooks();
library.borrowBook(1);
library.showAvailableBooks();
library.returnBook(1);
library.showAllBooks();
library.addBook(new Book(3, "Book 3", "Author 3"));
library.showAllBooks();
console.log(library);
