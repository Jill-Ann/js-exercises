// 7kyu
// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
// (the only-positive or only-negative integer may appear more than once!)

function solve(arr){
  return Array.from(new Set(arr)).reduce((a,b) => a + b);
};

console.log(solve([1,-1,2,-2,3])); // 3
console.log(solve([1,-1,2,-2,3,3])); // 3
