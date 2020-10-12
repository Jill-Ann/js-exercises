// 7kyu
// Write function gap(num) that,  given a positive num,  returns the length of its longest binary gap.

function gap(num) {
  let binary = (num >>> 0).toString(2);
  binary = '1001000001'
  let gaps = binary.match(/1[0]*1/g); // why does this only match the first?
  console.log(gaps);
  if (gaps === null) {
    return 0;
  }
  return gaps === null ? 0 : gaps.sort((a,b) => b.length - a.length)[0].length;
}

console.log(gap(900));


function toBinary(dec){
    return (dec >>> 0).toString(2);
}
console.log(toBinary(900));
