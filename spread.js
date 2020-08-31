// splits string into array
const toArray = str => {
  return [...str];
}
console.log(toArray("Hello World"));

// Allows array to be used as separate arguments
// won't work without the spread operator. spread syntax “spreads” the array into separate arguments
const maxNum = num => {
  return Math.max(...num);
}
console.log(maxNum([1, 2, 3, 4]));

// can copy an array
const fruits = ['🍏','🍊','🍌','🍉','🍍'];
const moreFruits = [...fruits];

// can concat arrays
const myArray = [`🤪`,`🐻`,`🎌`]
const yourArray = [`🙂`,`🤗`,`🤩`]
const ourArray = [...myArray,...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩

// can add to an array
const fewFruit = ['🍏','🍊','🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  [ "🍉", "🍍", "🍏", "🍊", "🍌" ]
