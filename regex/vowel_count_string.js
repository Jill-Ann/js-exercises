// 7kyu
// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for this challenge.

const vowelCount = str => {
  let vowels = str.match(/[aeiou]/g);
  return (vowels === null) ? 0 : vowels.length;
}

console.log(vowelCount("Hello World!"));
// 3

console.log(vowelCount("bzz8*"));
