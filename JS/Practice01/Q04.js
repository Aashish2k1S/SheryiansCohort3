// ARRAYS + OBJECTS + FUNCTIONS TOGETHER

// letusers = [
//   { name: "Ritik", age: 20 },
//   { name: "Aman", age: 16 },
//   { name: "Priya", age: 25 },
// ];
// function getAdults(users) {
//     return users.filter(
//         (elem) => elem.age >= 18
//     );
// }
// let adultUsers = getAdults(letusers);
// console.log(adultUsers);

// letcart = [
//   { name: "Mouse", price: 500, qty: 2 },
//   { name: "Keyboard", price: 1000, qty: 1 },
//   { name: "Monitor", price: 10000, qty: 1 },
// ];
// function getCartTotal(cart) {
//     return cart.reduce(
//         (acc, cur) => acc + cur.price * cur.qty
//     , 0);
// }
// let totalVal = getCartTotal(letcart);
// console.log(totalVal);

// letstudents = [
//   { name: "Ritik", marks: [80, 90, 85] },
//   { name: "Aman", marks: [50, 40, 60] },
// ];
// function generateReport(students) {

//   function newRows(elem) {

//     let totalMarks = elem.marks.reduce((acc, cur) => acc + cur, 0);
//     let avgMarks = totalMarks / elem.marks.length;

//     let grade = "";
//     if (avgMarks <= 50) grade = "C";
//     else if (avgMarks <= 70) grade = "B";
//     else if (avgMarks <= 100) grade = "A";

//     return {
//       name: elem.name,
//       //totalMarks: totalMarks,
//       avgMarks: avgMarks,
//       grade: grade,
//     };
//   }

//   return students.map(newRows);
// }
// console.log(generateReport(letstudents));

let books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    borrowed: false,
  },
];

function addBook(title, author){
    books.push({
        id: books.length + 1,
        title: title,
        author: author,
        borrowed: false
    })
}

function borrowBook(id){
    for (let i = 0; i < books.length; i++){
        if (books[i].id === id){
            books[i].borrowed = true;
        }
    }
}

function returnBook(id){
    for (let i = 0; i < books.length; i++){
        if (books[i].id === id){
            books[i].borrowed = false;
        }
    }
}

function showAvailableBooks() {
    return books.filter(
        (elem) => !Boolean(elem.borrowed)
    );
}

addBook('Rich Dad Poor Dad', 'Jack Canfield');
borrowBook(2);
console.log(books);
console.log(showAvailableBooks());
console.log(books);
returnBook(2);
console.log(books);
console.log(showAvailableBooks());
console.log(books);
