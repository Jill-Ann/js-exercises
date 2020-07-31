const reverseStringAgain = str => {
  let newStr = '';
  for (i = str.length; i >=0 ; i--) {
    newStr.concat(str.charAt(i));
  }
  return newStr;
}

console.log(reverseStringAgain("Hello World!"));
