// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

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

const getSumRefactored = (a,b) => {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max - min +1) * (max + min) / 2; 
}

console.log("------------");
console.log(getSumRefactored(1, 4)); // 10
console.log(getSumRefactored(2, 4)); // 9
console.log(getSumRefactored(0, 1)); // 1
console.log(getSumRefactored(1, 1)); // 1
console.log(getSumRefactored(-1, 2)); // 2
console.log(getSumRefactored(2, -1)); // 2
