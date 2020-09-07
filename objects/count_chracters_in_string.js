// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

const count = string => {
  let output = {};
  [...string].forEach(char => {
    output[char] ? output[char]++ : output[char] = 1;
  })
  return output;
}

console.log(count("abaccdj"));

// if (output[char]) {
//   output[char] ++;
// } else {
//   output[char] = 1;
// }
