// Find the student with highest marks.
// ```jsx
const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}
// ```

// Expected Output:
// ```jsx
// "Anubhav"
// ```

const highestMarks = 
    Object.keys(marks)
    .reduce((a,b) => {
        // console.log(marks[a], marks[b], a, b);        
        return marks[a] > marks[b] ? a : b
    }, '');

console.log(highestMarks);


