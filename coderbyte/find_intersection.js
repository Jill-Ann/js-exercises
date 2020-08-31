// find which numbers occur in both arrays. Return those numbers.

// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13

const findIntersection = strArr => {
  let arr1 = strArr.slice(0, 1).toString().replace(/,/g, '').split(' ');
  let arr2 = strArr.slice(1).toString().replace(/,/g, '').split(' ');
  let intersection = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
      }
    }
  }
  return (intersection === []) ? 'false' : intersection.join();
}

const findIntersection2 = strArr => {
  let arr1 = strArr[0].split(', '),
      arr2 = strArr[1].split(', '),
      matches = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        matches.push(arr1[i]);
      }
    }
  }
  return (matches === []) ? 'false' : matches.join();
}

console.log(findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
console.log(findIntersection2(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
