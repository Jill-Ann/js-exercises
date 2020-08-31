// 6kyu
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input: 42145
// Output: 54421

const descendingOrder = num => {
  let sorted = Array.from(num.toString()).sort((a,b) => b - a).join('');
  return parseInt(sorted);
}

console.log(descendingOrder(42145)); // 54421

// need to submit to codewars!
