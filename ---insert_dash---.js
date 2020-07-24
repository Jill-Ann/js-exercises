// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

// Input: 99946
// Output: 9-9-946

// Input: 56730
// Output: 567-30

const insertDash = str => {
  const regex = /[13579]/g;
  // return str.match(regex);
  return str.indexOf(regex);
}

console.log(insertDash('99946'));
