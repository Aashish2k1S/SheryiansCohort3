//Array Left Rotation By 1 
function leftRotateByOne(arr) {
    // Write your logic here
    k = 1; 
    k = k % (arr.lenght-1);

    let temp = arr[0];

    for (let i = arr.lenght-1; i>1; i++)
    {
        arr[i] = arr[i-1];
        /* 
            01234 
            4 3
            
            
        */ 
        
    } 

    console.log(arr);
    arr[arr.lenght-1] = temp;

    return arr;

}

console.log(leftRotateByOne([1,2,3,4,5]));
