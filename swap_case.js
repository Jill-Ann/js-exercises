// Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.

// Input: "Sup DUDE!!?"
// Output: sUP dude!!?

const swapCase = str => {
  let arr = str.split('');
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else if (arr[i] == arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join('');
}

const swapCase2 = str => {
  let arr = str.split('');
  for (i = 0; i < arr.length; i++) {
    (arr[i] == arr[i].toUpperCase()) ? arr[i] = arr[i].toLowerCase() : arr[i] = arr[i].toUpperCase();
  }
  return arr.join('');
}

console.log(swapCase("Sup DUDE!!?"));
console.log(swapCase2("Hello World!!!"));
