// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

const number = (array) => array.map((line, index) => `${index + 1}: ${line}`);

console.log(number(["a", "b", "c"]));

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function solve(s) {
  const vowels = s.match(/[aeiou]+/gi).sort((a, b) => b.length - a.length);
  return vowels[0].length;
}
console.log(solve("codewarriors")); // 2

function mirror(data) {
  let sorted = data.slice().sort((a, b) => a - b);
  return [...sorted, ...sorted.reverse().slice(1)];
}

console.log(mirror([2, 3, 1])); // [1, 2, 3, 2, 1]
console.log(mirror([-8, 42, 18, 0, -16])); // [-16, -8, 0, 18, 42, 18, 0, -8, -16]
