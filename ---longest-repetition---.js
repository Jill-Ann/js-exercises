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
  results = [];
  let arr = str.split('');
  arr.forEach((char, i) => {
    if (char === arr[i-1]) {
      
    }
  })

  return results;
}

console.log(longestRepetition("aaaabbacwrttaa")); // ["a",4]
