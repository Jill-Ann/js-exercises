// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

const string = "HW!";
const string2 = "HLWD";

const middleCharacter = (str) => {
  if (str.length % 2 === 1) {
    var middle = (str.length / 2) - 0.5;
    return str.substring(middle, middle + 1);
  } else {
    var middle = (str.length / 2)
    return str.substring(middle -1, middle +1);
  }
}

console.log(middleCharacter(string2));

// Improve this solution!
// e.g Map.floor ?
