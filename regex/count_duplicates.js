// 6 kyu

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

const duplicateCount = text => {
  let obj = {};
  [...text.toLowerCase()].forEach(char => {
    (obj[char]) ? obj[char]++ : obj[char] = 1;
  })
  return Object.values(obj).filter(char => char > 1).length;
}

console.log(duplicateCount('abcde')); // 0
console.log(duplicateCount('aabbcde')); // 2
console.log(duplicateCount('aabBcde')); // 2
console.log(duplicateCount('indivisibility')); // 1 (i 6 times)
console.log(duplicateCount('Indivisibilities')); // 2 (i 7 times, s twice)
console.log('------------------');

const duplicateCount2 = text => {
  return (text.split('').sort().join('').match(/([^])\1+/gi) || []);
}
// regex for how many times any char [^] occurs one (or more) more times after original capture group ([^]).

console.log(duplicateCount2('abcde')); // 0
console.log(duplicateCount2('aabbcde')); // 2
console.log(duplicateCount2('aabBcde')); // 2
console.log(duplicateCount2('indivisibility')); // 1 (i 6 times)
console.log(duplicateCount2('Indivisibilities')); // 2 (i 7 times, s twice)
