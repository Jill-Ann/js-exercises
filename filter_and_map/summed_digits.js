// 7kyu
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

const sumDigits = number => {
  let arr = number.toString().split('').filter(item => item.match(/\d/)).map(item => parseInt(item));
  return arr.reduce((a, b) => a + b);
}

console.log(sumDigits(10)); // Returns 1
console.log(sumDigits(99));  // Returns 18
console.log(sumDigits(-32)); // Returns 5
