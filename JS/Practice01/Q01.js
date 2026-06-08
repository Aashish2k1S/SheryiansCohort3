// let prices = [200, 250, 500, 150, 700]; 
// let newPrice = prices.filter(e => e >= 300);
// console.log(newPrice);



// let marks = [80, 90, 70, 85, 95];
// let sum = marks.reduce((acc, curr) => acc + curr, 0);
// let average = sum / marks.length;
// console.log(average);


// let numbers = [1, 2, 2, 3, 2, 4, 2, 5, 1, 1, 1];
let numbers = ['a', 'b', 'b', 'c', 'b', 'd', 'b', 'e', 'a', 'a', 'a']; 

let obj = numbers.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

let max = Math.max(...Object.values(obj));
let mostFrequent = []; 
for (let key in obj) {
    if (obj[key] >= max)         
        mostFrequent.push(
            !isNaN(key) ? Number(key) : key
        ); 
}
mostFrequent = mostFrequent.sort((a, b) => a - b);
console.log(mostFrequent.length > 0 ? mostFrequent[0] : null);
