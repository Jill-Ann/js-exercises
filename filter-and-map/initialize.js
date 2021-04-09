// initials('code wars') => returns C.Wars
// initials('Barack Hussain obama') => returns B.H.Obama

const initials = name => {
  let arr = name.split(' ');
  let result = '';
  for (i=0; i<arr.length-1; i++) {
    result = result + arr[i][0].toUpperCase() + '.';
  }
  let last = arr[arr.length -1];
  return result + last.charAt(0).toUpperCase() + last.slice(1);
}

console.log(initials('code wars'));
console.log(initials('Barack Hussain obama'));

const initials2 = name => {
  let arr = name.split(' ');
  let last = arr.pop();
  let result = arr.map(item => {
    return item.charAt(0).toUpperCase() + '.';
  })
  return result.join('') + last.charAt(0).toUpperCase() + last.slice(1);
}

console.log(initials2('Barack Hussain obama'));
