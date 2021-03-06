// Have the function Superincreasing(arr) take the array of numbers stored in arr and determine if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should return the string "false".

// Input: [1,2,3,4]
// Output: false

// Input: [1,2,5,10]
// Output: true


const superincreasing = arr => {
  let sum = 0;
  if (arr[1] === 0 || arr[0] === arr[1]) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < sum) {
      return false;
    }
    sum += arr[i];
  }
  return true;
}

console.log(superincreasing([1,2,3,4]));

console.log(superincreasing([0,0,0,2,2]));
// should return false

console.log(superincreasing([3, 3]));
// should return false
