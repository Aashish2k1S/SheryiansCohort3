class Solution {

    moveZeros(arr) {
        // write your code here
        for (let i = 0; i < arr.length; i++) {
            arr.push(arr[arr.indexOf(0)]);
            arr.splice(arr.indexOf(0), 1);
        }
        return arr;
    }
}
console.log(new Solution().moveZeros([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
