// Library Management System with Constructor function, array, prototype

function Book(id, title, author, borrowed) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.borrowed = borrowed;
}
function addBook(book) {
    if (book instanceof Book) {
        this.push(book);
        console.log('\n');
        console.log('Book added successfully...');
    }
    else {
        console.log('\n');
        console.log("Invalid book");
    }
}
function borrowBook(id) {
    let book = this.find(book => book.id === id);
    if (book) {
        if (!book.borrowed) {
            book.borrowed = true;
            console.log('\n');
            console.log('Book borrowed successfully...');
        }
        else {
            console.log('\n');
            console.log('Book already borrowed...');
        }
    }
    else {
        console.log('\n');
        console.log('Book not found...');
    }
}
function returnBook(id) {
    let book = this.find(book => book.id === id);
    if (book) {
        if (book.borrowed) {
            book.borrowed = false;
            console.log('\n');
            console.log('Book returned successfully...');
        }
        else {
            console.log('\n');
            console.log('Book already returned...');
        }
    }
    else {
        console.log('\n');
        console.log('Book not found...');
    }
}
function showAvailableBooks() {
    let availableBooks = this.filter(book => !book.borrowed);
    if (availableBooks.length > 0) {
        console.log('\n');
        console.log('Available books:');
        availableBooks.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
        });
    }
    else {
        console.log('\n');
        console.log('No available books...');
    }
}
function showAllBooks() { 
    if (this.length > 0) {
        console.log('\n');
        console.log('Available books:');
        this.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`);
        });
    }
    else {
        console.log('\n');
        console.log('No available books...');
    }
}

const books = new Array();
books.__proto__.addBook = addBook;
books.__proto__.borrowBook = borrowBook;
books.__proto__.returnBook = returnBook;
books.__proto__.showAvailableBooks = showAvailableBooks;
books.__proto__.showAllBooks = showAllBooks;

books.showAvailableBooks();
books.showAllBooks();
books.addBook(new Book(1, 'Book 1', 'Author 1', false));

books.showAvailableBooks();
books.showAllBooks();
books.addBook(new Book(2, 'Book 2', 'Author 2', false));

books.showAvailableBooks();
books.showAllBooks();
books.borrowBook(1);
books.borrowBook(2);

books.showAvailableBooks();
books.showAllBooks();
books.returnBook(2);

books.showAvailableBooks();
books.showAllBooks();
books.returnBook(1);

books.showAvailableBooks();
books.showAllBooks();

