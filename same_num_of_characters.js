// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

const numXOs = (str) => {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

console.log(numXOs('xxoo')); //expect true
console.log(numXOs('xoo')); //expect false
console.log(numXOs('oo')); //expect false
console.log(numXOs('abc')); //expect true
console.log('---------------------');

const sameNumberOfXsOs = (str) => {
  let numO = str.match(/o/gi);
  let numX = str.match(/x/gi);
  if (numO === null && numX === null) {
    return true;
  } else if (numO === null || numX === null){
    return false;
  } else {
    return numO.length === numX.length;
  }
}

console.log(sameNumberOfXsOs('xxoo')); //expect true
console.log(sameNumberOfXsOs('xoo')); //expect false
console.log(sameNumberOfXsOs('oo')); //expect false
console.log(sameNumberOfXsOs('abc')); //expect true
console.log('---------------------');

let string = 'xxoo';
let splitString = string.split('x');
console.log(splitString.length);

let alphabet = 'abcdefbg';
console.log(alphabet.split('b'));
console.log('---------------------');

const xo = (str) => {
  let o = str.match(/o/gi);
  let x = str.match(/x/gi);
  return (x && x.length) === (o && o.length);
}

console.log(xo(string));
