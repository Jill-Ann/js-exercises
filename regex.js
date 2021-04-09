// check that the given string is a valid pin consisting of only numbers and with the specified length

const string7 = "1234567d"
const string4 = "1234"

// console.log(/\D/.test(string4));

const checkPin = (pin, length = 4) => {
    let string = pin.toString()
    if (string.length == length) {
        return /\D/.test(string) == false ? true : false;
    } else {
        return false
    }
}

console.log(checkPin('22223', 5));

const validatePIN = (string) => {
    return /^\d{4}$/.test(string)
}

// console.log(validatePIN(string4));
