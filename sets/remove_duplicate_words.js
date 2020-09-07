// 7 kyu

// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

const removeDuplicateWordsWithRegex = str => {
  let arr = str.split(' ');
  let unique = '';
  for (i=0; i<arr.length; i++) {
    let regex = new RegExp("\\b" + arr[i] + "\\b");
    if (!regex.test(unique)) {
      unique += arr[i] + ' ';
    }
  }
  return unique.trim();
}
// b anchor is for word boundaries

const removeDuplicateWords = str => {
  let mySet = new Set(str.split(' '));
  return [...mySet].join(' ');
}

let string = 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
console.log(removeDuplicates(string));
