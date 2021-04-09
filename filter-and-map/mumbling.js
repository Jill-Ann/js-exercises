// 7kyu

function accum(str) {
  return str.split('').map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index)).join('-');
}

console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
