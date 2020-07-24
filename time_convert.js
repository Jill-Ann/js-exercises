// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

// Input: 126
// Output: 2:6

const timeConvert = num => {
  let hours = Math.floor(num / 60);
  let mins = (num % 60);
  return `${hours}:${mins}`
}

console.log(timeConvert(126));
