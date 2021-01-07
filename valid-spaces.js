// Check if a string has valid spacing. The function should return either True or False. One space between words, and no leading or trailing spaces

// function validSpacing(s) {
//   const valid = s
//     .split(" ")
//     .filter((char) => char != "")
//     .join(" ");
//   return s == valid;
// }

function validSpacing(s) {
  return s.replace("  ", " ").trim() == s;
}

console.log(validSpacing(" Hello  world"));
