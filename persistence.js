// Write a function, persistence, that takes in a positive parameter, num, and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit

// persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2


const persistence = num => {
  let arr = Array.from(num.toString()).map(Number);
  let counter = 0;
  while (arr.length > 1) {
    num = arr.reduce((a,b) => a * b);
    arr = Array.from(num.toString()).map(Number);
    counter++;
  }
  return counter;
}

const persistence2 = num => {
  num = num.toString();
  let counter = 0;
  while (num.length > 1){
    num = num.split('').map(Number).reduce((a,b) => a*b).toString();
    counter++;
  }
  return counter;
}

console.log(persistence(39)); // 3
console.log(persistence(999)); // 4
console.log(persistence(4)); // 0
console.log("-----------");
console.log(persistence2(39)); // 3
console.log(persistence2(999)); // 4
console.log(persistence2(4)); // 0
