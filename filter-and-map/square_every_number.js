// 7kyu
// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
//
// Note: The function accepts an integer and returns an integer

const squareDigits = (num) => {
  let result = num.toString().split('').map(a => Math.pow(a,2)).join('');
  return Number(result);
}

console.log(squareDigits(9119));
// expect 811181

// Math.pow(3,4)
// gives 3*4

// .join('')
// joins an array to a string. ('') means no separator. comma is default
