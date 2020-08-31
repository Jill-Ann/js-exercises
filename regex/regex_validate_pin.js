// 7kyu
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false


const validatePIN = (pin) => {
  if (pin.length === 4 || pin.length === 6) {
    return (pin.match(/^\d+$/)) ? true : false;
  } else {
    return false;
  }
};

const validatePinAlternative = pin => {
  return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("1a234")); // false
console.log(validatePIN("a234")); // false
console.log(validatePIN("123456")); // true
console.log(validatePIN("1234")); // true

console.log('-------------------------');

console.log(validatePinAlternative("1a234")); // false
console.log(validatePinAlternative("a234")); // false
console.log(validatePinAlternative("123456")); // true
console.log(validatePinAlternative("1234")); // true
