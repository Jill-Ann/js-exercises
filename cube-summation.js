// Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.
// If both numbers are the same, then the range is empty and the result should be 0.

const cubeSum = (a, b) => {
	if (a == b) return 0
  let min = Math.min(a, b)
	let max = Math.max(a, b)
	let sum = 0
	for (i = min + 1; i <= max; i++) {
		sum += Math.pow(i, 3)
	}
	return sum
}

console.log(cubeSum(0, 4)); // 100
console.log(cubeSum(3, 2)); // 27

