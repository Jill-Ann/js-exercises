const shopping = ['milk', 'apples', 'bananas', 'cereal', 'butter', 'pasta', 'peas']

let filteredShopping = shopping.filter(item => {
  return item.length > 5;
});

console.log(filteredShopping);
