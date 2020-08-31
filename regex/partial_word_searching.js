// 7kyu
// Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

// The method takes two parameters, the query string and the array of strings to search, and returns an array.

// If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty"

// input: "me", ["home", "milk", "Mercury", "fish"]
// output:  ["home", "Mercury"]

const wordSearch = (str, arr) => {
  let regex = RegExp(str, 'i');
  let results = [];
  for (i=0; i<arr.length; i++) {
    if (regex.test(arr[i])) {
      results.push(arr[i])
    }
  }
  return (results.length > 0) ? results : ['Empty'];
}

const wordSearch2 = (str, arr) => {
  let regex = RegExp(str, 'i');
  let results = arr.filter((item) => {
    return regex.test(item);
  })
  return (results.length > 0) ? results : ['Empty'];
}

console.log(wordSearch("me", ["home", "milk", "Mercury", "fish"]));
console.log(wordSearch("te", ["home", "milk", "Mercury", "fish"]));

console.log(wordSearch2("me", ["home", "milk", "Mercury", "fish"]));
console.log(wordSearch2("te", ["home", "milk", "Mercury", "fish"]));
