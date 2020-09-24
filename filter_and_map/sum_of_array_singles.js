// 7kyu
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

function repeats(arr){
  let sorted = arr.sort();
  let duplicates = [];
  for (i=0; i<sorted.length; i++) {
    if (sorted[i] === sorted[i+1]) {
      duplicates.push(sorted[i])
    }
  }
  return arr.filter(elem => !duplicates.includes(elem)).reduce((a,b) => a+b);
};



console.log(repeats([4,5,7,5,4,8,10])); // 25
