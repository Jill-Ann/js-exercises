// 8kyu
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.
// Your task is to create a function that, given a proper first and last name, will return the correct alias.
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.
// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

const aliasGen = (first, last) => {
  let firstInitial = first[0].toUpperCase();
  let lastInitial = last[0].toUpperCase();
  if (firstInitial.match(/\d/) || lastInitial.match(/\d/) ) {
    return "Your name must start with a letter from A - Z."
  }
  return firstName[firstInitial] + ' ' + surname[lastInitial];
}

var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}


console.log(aliasGen('clara', 'Brentwood')); // 'Cache Bomb'
console.log(aliasGen('134a', 'Brentwood')); //
