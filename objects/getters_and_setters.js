class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }
​
  get name() {
    return this._name.toUpperCase()
  }
​
  set name(newName) {
    if (newName) {
      this._name = newName
    }
​
    return 'bob'
  }
}
​
let doofus;
doofus = new Person('Steve', 50)
console.log(doofus)
​
console.log(doofus.name, doofus.age)
​
doofus.name = 'Dave'
console.log((doofus.age = 54))
​
console.log(doofus.name, doofus.age)
​
console.log(doofus)
