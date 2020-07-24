// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.


// conditional
const isDivisible = (n, x, y) => {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isDivisible(12, 7, 2));


// simplified
const isDivisible2 = (n, x, y) => {
  return n % x === 0 && n % y === 0
}
console.log(isDivisible2(10, 2, 5));
