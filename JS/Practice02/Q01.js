// ARRAYS

// let prices= [100,250,500,150,700];
// console.log(prices.filter((e) => e>300));

// let students= ["Aman","Ritik","Priya","Rahul"];
// console.log(students[students.length-1]);

// let products= ["Laptop","Mouse","Keyboard"];
// products.push("Monitor");
// console.log(products);

// let notifications = [
//     "Order Placed",
//     "Order Shipped",
//     "Order Delivered"
// ];
// console.log(notifications.pop());
// console.log(notifications);

// let users= ["Aman","Ritik","Priya"];
// console.log(users.includes("Ritik"));

// let marks= [80,90,70];
// marks = marks.map((e) => `${e}%`);
// console.log(marks);

// let cart = [
//     "Mouse",
//     "Keyboard",
//     "Monitor",
//     "Laptop"
// ];
// console.log(cart.length);

// let marks= [80,90,70,85,95];
// let avg = marks.reduce((a,c) => a+c, 0)/marks.length;
// console.log(avg);

// let numbers= [1,2,3,4,5,6,7,8];
// console.log(numbers.filter((e) => e%2===0 && e!==0));

// let products = [
//     "Laptop",
//     "Mouse",
//     "Keyboard",
//     "Monitor"
// ];
// console.log(products.indexOf("Keyboard"));

// let sales= [500,700,1000,300];
// console.log(sales.reduce((a,c)=> a+c,0));

// let users= ["ritik","aman","priya"];
// users = users.map(e => e.toUpperCase());
// console.log(users);

// let ages= [12,15,17,19,22];
// console.log(ages.find(e => e>=18));

// let nums= [5,8,10,3];
// // let nums= [5,8,10,3,-1];
// console.log(nums.every(e => e>=0));

// let numbers= [1,2,2,3,2,4,2,5,1,1,1];
// let freq = numbers.reduce(
//     (a, c) => {
//         a[c] = (a[c] || 0) + 1;
//         return a;
//     }, {}
// )
// // console.log(freq);
// let max = Math.max(...Object.values(freq));
// // console.log(max);
// let maxFreq = Object.entries(freq).reduce(
//     (a,c) => {
//         if (c[1] === max) a.push(c);
//         return a;
//     }, []
// );
// // console.log(maxFreq);
// let minValWithMaxFreq = maxFreq.map((e) => parseInt(e[0]));
// // console.log(minValWithMaxFreq);
// console.log(Math.min(...minValWithMaxFreq));

// let nums= [10,50,20,80,40];
// nums = nums.sort((a,b) => b-a);
// console.log(nums[1]);

// let ids= [1,2,2,3,4,4,5,5];
// let newIds = [];
// ids.forEach(e => {
//     if (!newIds.includes(e)) newIds.push(e);
// });
// console.log(newIds);

// let words = [
//     "JavaScript",
//     "HTML",
//     "CSS",
//     "Programming"
// ];
// let longWord = words.reduce(
//     (a,c) => {
//         if (a.length < c.length) a = c;
//         return a;
//     }, ''
// )
// console.log(longWord);

// let nums= [1,2,3,4,5];
// let newNums = [], n = 4; 
// let k = n % nums.length;
// // newNums = JSON.parse(JSON.stringify(
// //     nums.slice(nums.length-k, nums.length)
// // ));
// // // console.log(newNums);
// // // console.log(nums);
// // for (let i = 0; i < nums.length-k; i++) 
// //     newNums.push(nums[i]);
// newNums = [
//     ...nums.slice(nums.length - k),
//     ...nums.slice(0, nums.length - k)
// ];
// console.log(newNums);



