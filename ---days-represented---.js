// My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

// Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

function daysRepresented(trips) {
  return trips.map((arr) => arr[1] - arr[0] + 1).reduce((a, b) => a + b);
}

// console.log(
//   daysRepresented([
//     [243, 245],
//     [138, 151],
//     [133, 151],
//     [140, 179],
//     [221, 239],
//     [314, 316],
//   ])
// );
// 72

function solve(arr) {
  let results = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > )
  }
}

console.log(solve([16, 17, 14, 3, 14, 5, 2]));
