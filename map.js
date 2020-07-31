const shopping = ['milk', 'apples', 'bananas', 'cereal', 'butter', 'pasta', 'peas']

const list = shopping.map(item => {
  return 'We need: ' + item;
})
console.log(list);

let arr10 = [10, 20, 30, 40, 50, 60];

let newArr = arr10.map(item => {
  return item * item;
})
console.log(newArr);
