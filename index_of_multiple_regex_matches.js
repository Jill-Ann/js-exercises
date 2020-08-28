// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

const capitals = word => {
  let caps = /[A-Z]/g;
  let results = [];
  let match;
  while ((match = caps.exec(word)) != null) {
      results.push(match.index);
  }
  return results;
}

console.log(capitals('CodEWaRs')); // [0,3,4,6]
