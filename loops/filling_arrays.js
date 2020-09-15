// array from range
const arr = n => {
  return Array.from(new Array(n), (x,i) => i+2);
}
console.log(arr(10));

// 6kyu
// n is length of output array

// array of squares
const squares = n => {
  let arr = [];
  for (i=1; i<=n;i++) {
    arr.push(i*i);
  }
  return arr;
}
// console.log(squares(5)); // [1, 4, 9, 16, 25]

// from range
const range = (n, start, step) => {
  let arr = [];
  // let i = start;
  // while (arr.length < n) {
  //   arr.push(i);
  //   i+=step;
  // }
  for (i = start; arr.length < n; i+=step) {
    arr.push(i);
  }
  return arr;
}
// console.log(range(6, 3, 2)); // [3, 5, 7, 9, 11, 13]

// array of random numbers between 2 points
const random = (n, min, max) => {
  let arr = [];
  for (i=0; arr.length < n; i++) {
    arr.push(Math.round(Math.random() * (max - min) + min));
  }
  return arr;
}
console.log('random');
console.log(random(4, 5, 10));

const isPrime = (num) => {
  for (i=2; i<num; i++){
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(7));
// console.log(isPrime(8));

// array of primes
const primes = n => {
  let arr = [];
  for (let i=2; arr.length<n; i++){
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(primes(6)); // [2, 3, 5, 7, 11, 13]

const myFunction = num => {
  num = num * 2;
  return num;
}
