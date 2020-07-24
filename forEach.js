const groceries = ['milk', 'apples', 'bananas', 'cereal'];

groceries.forEach(item => console.log(item));

const printList = (element) => {
  console.log(element);
}

groceries.forEach(printList);
