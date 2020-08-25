// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Write a function that returns both the minimum and maximum number of the given list/array.

// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]

const minMax = array => {
  let sorted = array.sort((a, b) => a - b);
  return new Array(sorted[0], sorted[sorted.length -1])
}

console.log(minMax([1,5,3,4,1]));
console.log(minMax([1]));
console.log(minMax([2334454,5]));
console.log(minMax([10, 3 ,5]));

const minMaxAgain = array => {
  return new Array(Math.min(...array), Math.max(...array));
}
console.log("---------------");
console.log(minMaxAgain([1,5,3,4,1]));
