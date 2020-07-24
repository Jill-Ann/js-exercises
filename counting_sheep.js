// count how many times true appears in an array

const array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];


// with for loop
const countSheeps1 = (arrayOfSheep) => {
  let totalSheep = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      totalSheep++;
    }
  }
  return totalSheep;
}
console.log(countSheeps1(array1));

// with forEach

const countSheeps2 = (arrayOfSheep) => {
  let totalSheep = 0;
  arrayOfSheep.forEach(item => {
    if (item === true) {
      totalSheep = totalSheep + 1;
    }
  })
  return totalSheep;
}
console.log(countSheeps2(array1));

// with filter

const countSheeps3 = (arrayOfSheep) => {
  return arrayOfSheep.filter(sheep => sheep === true).length;
}
console.log(countSheeps3(array1));


// alternative formatting in answer
function countSheeps(arrayOfSheep) {
  let total = arrayOfSheeps.filter(sheep => sheep === true).length;
  return total + `There are ${total} sheeps in total`;
}
