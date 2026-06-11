// ARRAYS + OBJECTS + FUNCTIONS TOGETHER

// let users = [
//   { name: "Ritik", age: 20 },
//   { name: "Aman", age: 16 },
//   { name: "Priya", age: 25 },
// ];
// function getAdults(users){
//     return users.filter(
//         (elem) => elem.age >= 18
//     );
// }
// console.log(getAdults(users));

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
// ];
// function getProductNames(products){
//     return products.map((elem) => elem.name);
// }
// console.log(getProductNames(products));

// let users = [{ name: "Ritik" }, { name: "Aman" }, { name: "Priya" }];
// function findUser(users,username) {
//     return users.find(
//         (elem) => elem.name === username
//     );
// }
// console.log(findUser(users,"Aman"));
// console.log(findUser(users,"ritik"));

// let students = [
//   { name: "Ritik", marks: 80 },
//   { name: "Aman", marks: 90 },
//   { name: "Priya", marks: 70 },
// ];
// function getTotalMarks(students) {
//   return students.reduce((a, c) => a + c.marks, 0);
// }
// console.log(getTotalMarks(students));

// let products = [
//   { name: "Mouse", stock: 10 },
//   { name: "Keyboard", stock: 0 },
//   { name: "Monitor", stock: 5 },
// ];
// function availableProducts(product) {
//   return product.filter((elem) => elem.stock > 0);
// }
// console.log(availableProducts(products));

// function addStudent(students, student) {
//   students.push(student);
// }
// let schoolStudents = [
//   { name: "Ritik", marks: 80 },
//   { name: "Aman", marks: 90 },
//   { name: "Priya", marks: 70 },
// ];
// addStudent(schoolStudents, { name: "Rahul", marks: 50 });
// console.log(schoolStudents);

// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 30000 },
//   { name: "Mouse", price: 500 },
// ];

// function productPriceFilter(product, price) {
//   return product.filter((elem) => elem.price > price);
// }
// console.log(productPriceFilter(products, 10000));

// let cart = [
//   { name: "Mouse", price: 500, qty: 2 },
//   { name: "Keyboard", price: 1000, qty: 1 },
//   { name: "Monitor", price: 10000, qty: 1 },
// ];
// function getCartTotal(cart) {
//     return cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);
// }
// console.log(getCartTotal(cart));

// let students = [
//   { name: "Ritik", marks: [80, 90, 85] },
//   { name: "Aman", marks: [70, 75, 80] },
// ];
// function getAverageMarks(students) {
//     students.forEach((elem) => {
//         elem.avg = elem.marks.reduce((a, c) => a + c, 0) / elem.marks.length;
//     });
//     return students;
// }
// console.log(getAverageMarks(students));

// let inventory = [
//   { id: 1, name: "Laptop" },
//   { id: 2, name: "Mouse" },
//   { id: 3, name: "Monitor" },
// ];
// function findProductById(id) {
//   return this.find((elem) => elem.id === id);
// }
// console.log(inventory.__proto__);
// inventory.__proto__.findProductById = findProductById;
// console.log(inventory.__proto__);
// console.log(inventory.findProductById(3));

// let users = [{ name: "Ritik Rajput" }, { name: "Aman Gupta" }];
// function getUserNames(users) {
//   return users.map((elem) => elem.name.toLowerCase().split(" ").join("_"));
// }
// console.log(getUserNames(users));

// let students = [
//   { name: "Ritik", marks: 85 },
//   { name: "Aman", marks: 95 },
//   { name: "Priya", marks: 75 },
// ];
// function getTopper(students) {
//   return students.reduce((a, c) => (a.marks > c.marks ? a : c));
// }
// console.log(getTopper(students).name);

// function updateStock(id,quantity) {
//     let product = this.find(
//         elem => elem.id === id
//     );
//     product.stock += quantity;
// }
// let products = [
//   { id: 1, name: "Mouse", stock: 10 },
//   { id: 2, name: "Keyboard", stock: 0 },
//   { id: 3, name: "Monitor", stock: 5 },
// ];
// products.__proto__.updateStock = updateStock;
// console.log(JSON.parse(JSON.stringify(products)));
// console.log(products);
// products.updateStock(2, 5);
// console.log(JSON.parse(JSON.stringify(products)));
// console.log(products);

// let student = [
//   { name: "A", marks: 70 },
//   { name: "B", marks: 95 },
//   { name: "C", marks: 80 },
// ];
// function getSorted() {
//   this.sort(({ marks: a }, { marks: b }) => a - b);
// }
// student.__proto__.getSorted = getSorted;
// console.log(student);
// console.log(JSON.parse(JSON.stringify(student)));
// student.getSorted();
// console.log(student);
// console.log(JSON.parse(JSON.stringify(student)));

// let students = [
//   { name: "Ritik", marks: [80, 90, 85] },
//   { name: "Aman", marks: [50, 40, 60] },
// ];
// function generateReport() {
//   this.forEach((elem) => {
//     let total = elem.marks.reduce((a, c) => a + c, 0);
//     if (total > 150) elem.grade = "A";
//     else if (total > 100) elem.grade = "B";
//     else elem.grade = "C";
//   });
// }
// students.__proto__.generateReport = generateReport;
// console.log(students);
// console.log(JSON.parse(JSON.stringify(students)));
// students.generateReport();
// console.log(students);
// console.log(JSON.parse(JSON.stringify(students)));

// let products = [
//   { name: "Mouse", price: 500, sold: 20 },
//   { name: "Keyboard", price: 1000, sold: 10 },
// ];
// function getRevenuePerProduct() {
//   return this.map(({ name, price, sold }) => ({ name, revenue: price * sold }));
// }
// function totalRevenue() {
//   return this.reduce((a, c) => a + c.price * c.sold, 0);
// }
// function getBestSelingProduct() {
//   let best = this.reduce((a, c) => ((a?.sold || 0) > c.sold ? a : c), {});
//   return best.name;
// }
// console.log(products);
// products.__proto__.getRevenuePerProduct = getRevenuePerProduct;
// products.__proto__.totalRevenue = totalRevenue;
// products.__proto__.getBestSelingProduct = getBestSelingProduct;
// console.log(products.getRevenuePerProduct());
// console.log(`Total Revenue: ${products.totalRevenue()}`);
// console.log(`Best Selling Product: ${products.getBestSelingProduct()}`);

// let students = [
//   { name: "Ritik", present: true },
//   { name: "Aman", present: false },
//   { name: "Priya", present: true },
// ];
// function countPresent() {
//   return this.filter((e) => e.present).length;
// }
// function countAbsent() {
//   return this.filter((e) => !e.present).length;
// }
// function getPresentStudents() {
//   return this.filter((e) => e.present);
// }
// students.__proto__.countPresent = countPresent;
// students.__proto__.countAbsent = countAbsent;
// students.__proto__.getPresentStudents = getPresentStudents;
// console.log(students.countPresent());
// console.log(students.countAbsent());
// console.log(students.getPresentStudents());

// let books = [{ id: 1, title: "Atomic Habits", borrowed: false }];
// function addBook(book) {
//   this.push(book);
// }
// function borrowBook(id) {
//   let book = this.find((elem) => elem.id === id);
//   book.borrowed = true;
// }
// function returnBook(id) {
//   let book = this.find((elem) => elem.id === id);
//   book.borrowed = false;
// }
// function showAvailableBooks() {
//   return this.filter((elem) => !elem.borrowed);
// }
// books.__proto__.addBook = addBook;
// books.__proto__.borrowBook = borrowBook;
// books.__proto__.returnBook = returnBook;
// books.__proto__.showAvailableBooks = showAvailableBooks;
// console.log(books);
// console.log(JSON.parse(JSON.stringify(books)));
// books.addBook({ id: 2, title: "The Alchemist", borrowed: false });
// console.log(books);
// console.log(JSON.parse(JSON.stringify(books)));
// books.borrowBook(1);
// console.log(books);
// console.log(JSON.parse(JSON.stringify(books)));
// books.returnBook(1);
// console.log(books);
// console.log(JSON.parse(JSON.stringify(books)));
// console.log(books.showAvailableBooks());

// let e_com = [{ id: 1, customer: "Ritik", amount: 5000, status: "Pending" }];
// function createOrder(order) {
//   e_com.push(order);
// }
// function updateStatus(id) {
//   let order = e_com.find((elem) => elem.id === id);
//   order.status = "Completed";
// }
// function getPendingOrders() {
//   return e_com.filter((elem) => elem.status === "Pending");
// }
// function getCompletedOrders() {
//   return e_com.filter((elem) => elem.status === "Completed");
// }
// e_com.__proto__.createOrder = createOrder;
// e_com.__proto__.updateStatus = updateStatus;
// e_com.__proto__.getPendingOrders = getPendingOrders;
// e_com.__proto__.getCompletedOrders = getCompletedOrders;
// // console.log(e_com);
// console.log(JSON.parse(JSON.stringify(e_com)));
// e_com.createOrder({
//   id: 2,
//   customer: "Aman",
//   amount: 10000,
//   status: "Pending",
// });
// // console.log(e_com);
// console.log(JSON.parse(JSON.stringify(e_com)));
// e_com.updateStatus(1);
// // console.log(e_com);
// console.log(JSON.parse(JSON.stringify(e_com)));
// console.log(e_com.getPendingOrders());
// console.log(e_com.getCompletedOrders());

// function addProduct(product) {
//   this.push(product);
// }
// function removeProduct(id) {
//   let index = this.findIndex((elem) => elem.id === id);  
//   this.splice(index, index+1); 
// }
// function updateStock(id, stock) {
//   let product = this.find((elem) => elem.id === id);
//   product.stock += stock;
// }
// function purchaseProduct(id, stock) {
//   let product = this.find((elem) => elem.id === id);
//   product.stock -= stock;
// }
// function getInventoryValue() {
//   return this.reduce((acc, elem) => acc + elem.price * elem.stock, 0);
// }
// let products = [{ id: 1, name: "Laptop", price: 50000, stock: 10 }];
// products.__proto__.addProduct = addProduct;
// products.__proto__.removeProduct = removeProduct;
// products.__proto__.updateStock = updateStock;
// products.__proto__.purchaseProduct = purchaseProduct;
// products.__proto__.getInventoryValue = getInventoryValue;
// // console.log(products);
// console.log(JSON.parse(JSON.stringify(products)));
// products.addProduct({ id: 2, name: "Mobile", price: 15000, stock: 20 });
// // console.log(products);
// console.log(JSON.parse(JSON.stringify(products)));
// products.removeProduct(1);
// // console.log(products);
// console.log(JSON.parse(JSON.stringify(products)));
// products.updateStock(2, 10);
// // console.log(products);
// console.log(JSON.parse(JSON.stringify(products)));
// products.purchaseProduct(2, 5);
// // console.log(products);
// console.log(JSON.parse(JSON.stringify(products)));
// console.log(`Inventory Value: ${products.getInventoryValue()}`);
