// Given a list of integers, find the positive difference between each consecutive pair of numbers, and put this into a new list of differences. Then, find the differences between consecutive pairs in this new list, and repeat until the list has a length of 1. Then, return the single value.

// The list will only contain integers, and will not be empty.

// differences([1, 2, 3]) => [1, 1] => [0] -> 0

function differences(arr) {
  let newArr = []
  while (arr.length > 1) {
    arr = arr.slice(1).map((num, i) => Math.abs(arr[i] - arr[i+1]))
  }
  return parseInt(arr)
}

console.log(differences([1, 2, 3])); // 0
