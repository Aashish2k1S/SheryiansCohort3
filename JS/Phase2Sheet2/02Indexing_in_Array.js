// ### Intermediate

// Print the first and last element of an array.

// **Hint:** Use `0` and `length - 1`

// ### Hard

// Swap the second and second-last element using indexing.

// **Hint:** Use temporary variable


let movies = ['3Idiot', 'Zindagi Na Milegi Doobara', 'F1', 'Lucy', 'Spider-Man']
console.log(movies[0]);
console.log(movies[movies.length-1]);

console.log(movies);

let temp = movies[1];

movies[1] = movies[movies.length-2]; 
movies[movies.length-2] = temp; 

console.log(movies);


