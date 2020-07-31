const groceries = ['milk', 'apples', 'bananas', 'cereal'];

groceries.forEach(item => console.log(item));


const printList = (element) => {
  console.log(element);
}

groceries.forEach(printList);


let arr1 = [1, 2, 3, 4, 5, 6]
let arr10 = [10, 20, 30, 40, 50, 60]

let newArray = arr1.forEach(item => {
  console.log(item + 1);
})

const takeTheDigitAndAddOne = digit => {
  console.log(digit + 1);
}

arr10.forEach(takeTheDigitAndAddOne);

console.log(arr10);

const plusOne = takeTheDigitAndAddOne;

arr1.forEach(plusOne);
