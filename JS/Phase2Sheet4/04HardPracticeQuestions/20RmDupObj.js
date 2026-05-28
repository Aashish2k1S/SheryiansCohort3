// Remove duplicate objects from array based on `id`.
// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"},
//   {id:1,name:"A"}
// ]
// ```

// Expected Output:
// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"}
// ]
// ```

const arr = [
    {id:1,name:"A"},
    {id:2,name:"B"},
    {id:1,name:"A"}
]


for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].id === arr[j].id) {
            // console.log(arr.splice(j, 1));            
            arr.splice(j, 1);
            j--;
        }
    }
}

console.log(arr);