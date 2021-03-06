function validate(username, password) {
  const substrLength = Math.ceil(
    Math.min(username.length, password.length) / 2
  );

  for (i = 0; i <= username.length - substrLength; i++) {
    let substr = username.substring(i, i + substrLength);
    if (password.includes(substr)) return false;
  }
  return true;
}

console.log(validate("username", "myname")); // false
console.log(validate("MASH", "M*A*S*H")); // true
