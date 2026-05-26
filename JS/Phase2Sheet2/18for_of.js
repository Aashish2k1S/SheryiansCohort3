// ### Intermediate

// Print all values using `for...of`.

// **Hint:** Direct value iteration

// ### Hard

// Count vowels from array of characters.

// **Hint:** Use conditions inside loop

let movies = ['3Idiot', 'Zindagi Na Milegi Doobara', 'F1', 'Lucy', 'Spider-Man']

for (val of movies) {
    console.log(val);    
}

let vowels = 'aeiou'.split(''); 
let count = 0;

for (val of movies) {
    for (let i = 0; i < val.length; i++) {
        if (vowels.includes(val[i]) ) count += 1;
    }
}

console.log(`Total ${count} of vowels in all of elem chars.`);
