function findGreatest(a, b, c) {
  // Write your logic here
  switch (true) {
    case (a >= b && a >= c):
      return a;
    case (b >= a && b >= c):
      return b;
    default:
      return c;
  }
}

module.exports = { findGreatest };

function printDayName(day) {
  //write your code here
  switch (day) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day number";
  }
}

module.exports = { printDayName };


class Solution {
    get_movie_status(ratingStr) {
        // Write your code here
        let rating = parseFloat(ratingStr).toFixed(1); 
        switch (true) {
            case (rating <= 2.0):
                return "Flop";
            case (rating >= 2.1 && rating <= 3.4):
                return "Semi-hit";
            case (rating >= 3.5 && rating <= 4.5):
                return "Hit";
            case (rating >= 4.6 && rating <= 5.0):
                return "Super Hit";
            default:
                return "Invalid rating";
        }
    }
}

module.exports = Solution;


function checkChar(ch) {
  // Write your logic here
  if (!/^[a-zA-Z]$/.test(ch)) return "Invalid input";
  switch (ch.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return "Vowel";
    default:
      return "Consonant";
  }
}

module.exports = { checkChar };
