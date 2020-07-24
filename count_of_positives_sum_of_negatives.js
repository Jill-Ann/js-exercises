// Given an array of integers, return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// If the input array is empty or null, return an empty array.

// Example: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const countPositivesSumNegatives = (input) => {
  var negatives = [];
  var positives = [];
  var i;
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (i = 0; i < input.length; i++) {
    if ( input[i] < 0) {
      negatives.push(input[i])
    } else {
      positives.push(input[i])
    }
  }
  var count = positives.length;
  var sum = negatives.reduce(reducer);
  if (input === []) {
    return [];
  } else {
    return [count, sum];
  }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositivesSumNegatives(array));
