// find factorial of number. E.g 4 = (4 * 3 * 2 * 1) = 24

const getFactorial = (num) => {
  let factorial = 1;
  for (i = num; i>= 1; i--){
    factorial = factorial * i;
  }
  return factorial;
}

console.log(getFactorial(4));
