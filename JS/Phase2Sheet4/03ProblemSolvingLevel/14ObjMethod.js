// Create an object with:
// - name
// - marks
// - method called `getResult`

// If marks > 40:
// ```jsx
// "Pass"
// ```

// else:
// ```jsx
// "Fail"
// ```

const student = {
    name: "Anubhav",
    marks: 50,
    getResult: function() {
        return this.marks > 40 ? "Pass" : "Fail";
    }
}

console.log(student.getResult);
console.log(student.getResult());
