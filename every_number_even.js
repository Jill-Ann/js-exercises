// Have the function SimpleEvens(num) check whether every single number in the passed in parameter is even. If so, return the string true, otherwise return the string false. For example: if num is 4602225 your program should return the string false because 5 is not an even number.

const simpleEvens = (num) => {
  return num.toString().search(/[13579]/) === -1 ? 'true' : 'false';

}

console.log(simpleEvens(2222220222));
// true

console.log(simpleEvens(20864646452));
// false
