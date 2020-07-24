// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

// Input: "fun&!! time"
// Output: time

const longestWord = sen => {
  let arr = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
  arr.sort( (a, b) => { return b.length - a.length });
  return arr[0];
}

// or also:
// sen.replace(/[^a-zA-Zsd]/g, '');

console.log(longestWord("fun&!! time"));
