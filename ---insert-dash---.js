// coderbyte

// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

const dashInsert = str => {
  const regex = /[13579]/;
  let arr = str.split('');
  for (i=0; i<arr.length; i++) {
    if (regex.test(arr[i]) && regex.test(arr[i+1])) {
      arr[i] = arr[i] + '-';
    }
  }
  return arr.join('');
}

console.log(dashInsert('99946')); // 9-9-946
console.log(dashInsert('56730')); // 567-30


// codewars

// re-do with replace!!!

const insertDash = num => {
  const regex = /[13579]/;
  let arr = num.toString().split('');
  for (i=0; i<arr.length; i++) {
    if (regex.test(arr[i]) && regex.test(arr[i+1])) {
      arr[i] = arr[i] + '-';
    }
  }
  return arr.join('');
}

console.log(insertDash(99946));
