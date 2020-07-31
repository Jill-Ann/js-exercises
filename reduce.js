const addArray = arr => {
  return arr.reduce((a, b) => {
    return a + b;
  })
}

let myArray = [1, 2, 3, 4];

console.log(addArray(myArray));

let addedArray = myArray.reduce((a, b) => {
  return a + b;
})

console.log(addedArray);
