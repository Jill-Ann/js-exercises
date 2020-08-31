// 8kyu
// remove first and last character from string

function removeChar(str){
 return str.slice(1, str.length -1);
};

// or

function removeChar2(str){
 return str.slice(1, -1);
};

// or

const removeChar3 = (str) => str.slice(1, -1)

console.log(removeChar('Hello'));
console.log(removeChar2('World'));
console.log(removeChar3('Again'));
