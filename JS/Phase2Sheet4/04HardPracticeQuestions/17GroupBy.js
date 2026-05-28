// Group users by age.
// ```jsx
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
]
// ```

// Expected Output:
// ```jsx
// {
//   20: [
//     { name: "A", age: 20 },
//     { name: "C", age: 20 }
//   ],
//   21: [
//     { name: "B", age: 21 }
//   ]
// }
// ```

const groupByAge = users.reduce((a,b) => {

    // console.log(undefined, b, a);    

    const { age } = b;
    // console.log(age, b, a);    

    a[age] = a[age] || [];
    // console.log(age, b, a);    
        
    a[age].push(b);
    // console.log(age, b, a);    

    return a;
}, {});

console.log(groupByAge);