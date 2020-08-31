// Have the function OneDecremented(str) count how many times a digit appears that is exactly one less than the previous digit. For example: if str is "5655984" then your program should return 2 because 5 appears directly after 6 and 8 appears directly after 9. The input will always contain at least 1 digit.

// Input: "56"
// Output: 0

// Input: "9876541110"
// Output: 6

const oneDecremented = str => {
  let array = str.split('').map(char => parseInt(char));
  let result = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] === (array[i-1] - 1)) {
      result++;
    }
  }
  return result;
}

console.log(oneDecremented('5655984'));
