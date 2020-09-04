// 6kyu

// For a given string s find the character with longest consecutive repetition and return:
//
// [c, l]
// where l is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.
//
// For empty string return:
//
// ["", 0]

const longestRepetition = str => {
  return str.match(/[a-z]+/i);
}

console.log(longestRepetition("aaaabb")); // ["a",4]
