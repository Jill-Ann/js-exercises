// 8kyu
const reverseString = str => {
  let newStr = '';
  for (i = str.length; i >=0 ; i--) {
    newStr = newStr + str.charAt(i)
  }
  return newStr;
}

console.log(reverseString("Hello World!"));
