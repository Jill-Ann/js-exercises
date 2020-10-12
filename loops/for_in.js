const person = {
  name: 'Bob',
  age: 33,
  'hair color': 'blonde',
  cool: false,
}
// console.log(person['hair color']);

for (let info in person) {
  console.log(info + ' ' + person[info]);
}
