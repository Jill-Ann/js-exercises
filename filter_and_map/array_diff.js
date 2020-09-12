// 6 kyu

// It should remove all values from list a, which are present in list b.
// If a value is present in b, all of its occurrences must be removed from the other

function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num));
}

console.log(arrayDiff([1,2,3,4,5,6,7,8],[2, 8, 4])); // [1,3]
