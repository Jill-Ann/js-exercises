// capitalize the first letter of each word in a string

// why does this way not work? - forEach
const cap = (str) => {
  const array = str.split(' ');
  const newArr = array.forEach(word => {
    word.charAt(0).toUpperCase() + word.substr(1);
  })
  return newArr;
}
console.log(cap('what the hell is the use of a method that returns udefined???'));

// this one works - replace
const capitalize = (str) => {
  const regex = /\w\S*/g;
  const newStr = str.replace(regex, word => {
    return word.charAt(0).toUpperCase() +  word.substr(1);
  })
  return newStr;
}
console.log(capitalize('oh my god'));


// this also works - for loop
const capsAgain = (str) => {
  const array = str.split(' ');
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    newArr.push(array[i].charAt(0).toUpperCase() + array[i].substr(1));
  }
  return newArr.join(' ');
}
console.log(capsAgain('please help me'));

// let's try with map
const capsWithMap = (str) => {
  const array = str.split(' ');
  let newArr = array.map(word => {
    return word.charAt(0).toUpperCase() + word.substr(1);
  })
  return newArr.join(' ');
}
console.log(capsWithMap('please work - yes it works!'));
