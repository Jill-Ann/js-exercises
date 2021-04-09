// 7kyu
// Given a string str, reverse it omitting all non-alphabetic characters.

function reverseLetter(str) {
  return str.replace(/[^a-z]/gi, '').split('').reverse().join('');
}
console.log(reverseLetter("ultr53o?n")); // "nortlu"


function solve(str){
   let arr = str.split('');
   let indexes = [];
   for (i=0; i<arr.length; i++) {
     if (arr[i] === ' ') {
       indexes.push(i);
     }
   }
   let reversed = arr.reverse().filter(char => char != ' ');
   for (i=0; i<indexes.length; i++) {
     reversed.splice(indexes[i], 0, ' ');
   }
   return reversed.join('');
}

console.log(solve("your code rocks")); // "skco redo cruoy"
