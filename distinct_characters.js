// Have the function DistinctCharacters(str) take the str parameter being passed and determine if it contains at least 10 distinct characters, if so, then your program should return the string true, otherwise it should return the string false. For example: if str is "abc123kkmmmm?" then your program should return the string false because this string contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.

const distinctCharacters = str => {
  let distinct = [];
  let arr = str.split('').sort();
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i-1]) {
      distinct.push(arr[i]);
    }
  }
  return (distinct.length >= 10) ? 'true' : 'false';
}

// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

const distinctCharacters2 = str => {
  let mySet = new Set(str.split(''));
  console.log(mySet);
  return (mySet >= 10) ? 'true' : 'false';
}

console.log(distinctCharacters("abc123kkmmmm?"));
console.log(distinctCharacters2("abc123kkmmmm?"));
