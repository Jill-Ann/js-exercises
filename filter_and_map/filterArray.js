const shopping = ['milk', 'apples', 'bananas', 'cereal', 'butter', 'pasta', 'peas']

let filteredShopping = shopping.filter(item => {
  return item.length > 5;
});

console.log(filteredShopping);

const duplicates = ['milk', 'milk', 'apples', 'apples', 'bananas', 'cereal', 'butter', 'butter', 'pasta', 'peas']

// removes duplicates (if duplicates are next to each other)
let listWithoutDuplicates = duplicates.filter((item, index) => item != duplicates[index -1] )

console.log(duplicates);
console.log(listWithoutDuplicates);
