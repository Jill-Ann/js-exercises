// You need to write a code that will return product ID from string representing URL for that product's page in your online shop.

// All URLs are formatted similarly, first there is a domain exampleshop.com, then we have name of a product separated by dashes(-), then we have letter p indicating start of product ID, then an actual ID (no limit on length), and lastly 8-digit long representation of date when product got added followed by .html.It can look like this:

// exampleshop.com/fancy-coffee-cup-p-90764-12052019.html = 90764

function getProductId(url){
    let id = url.match(/p-[0-9]+/g)
    let lastIndex = id.length -1
    return id[lastIndex].slice(2)
}

console.log(getProductId("exampleshop.com/fancy-coffee-cup-p-90764-12052019.html"));

function getEvenNumbers(array){
  return array.filter(num => num % 2 == 0)
}

console.log(getEvenNumbers([2, 2, 4, 0]));