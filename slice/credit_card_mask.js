// 7kyu
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
console.log(maskify('4556364607935616')); // ############5616

// function maskify(cc) {
//   let arr = cc.split('');
//   for (i=0; i<=arr.length-5; i++) {
//     arr.splice(i, 1, '#');
//   }
//   return arr.join('');
// }
