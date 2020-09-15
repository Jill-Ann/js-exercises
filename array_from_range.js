// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// GetSum(1, 2) == 3   // 1 + 2 = 3

const getSum = (a, b) => {
  if (a === b) {
    return a;
  } else if (a > b){
    [a, b] = [b, a];
  }
  let length = b-a;
  let arr = Array.from(new Array(length + 1), (x,i) => i+a);
  return arr.reduce((a,b) => a + b);
}
console.log(getSum(1, 4)); // 10
console.log(getSum(2, 4)); // 9
console.log(getSum(0, 1)); // 1
console.log(getSum(1, 1)); // 1
console.log(getSum(-1, 2)); // 2
console.log(getSum(2, -1)); // 2

// ---------

const getSumRefactored = (a,b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max - min +1) * (max + min) / 2;
}

// https://en.wikipedia.org/wiki/Arithmetic_progression#Sum

console.log("------------");
console.log(getSumRefactored(1, 4)); // 10
console.log(getSumRefactored(2, 4)); // 9
console.log(getSumRefactored(0, 1)); // 1
console.log(getSumRefactored(1, 1)); // 1
console.log(getSumRefactored(-1, 2)); // 2
console.log(getSumRefactored(2, -1)); // 2

// basic array from range. This one gives 1 - 20
const toArray = () => {
  return Array.from(new Array(20), (x,i) => i+1);
}
// what does the x do?

console.log("-------------");
console.log(toArray());

const arr = n => {
  return Array.from(new Array(n), (x,i) => i+1);
}
console.log(arr(20));
