// 6kyu
// Complete the solution so that the function will break up camel casing, using a space between words.
// solution("camelCasing")  ==  "camel Casing"

const solutionFirst = string => {
  let words = string.split(/[A-Z]/g);
  let capitals = string.match(/[A-Z]/g);
  let firstWord = words[0]
  let result = [firstWord];
  for (i=1; i<words.length; i++) {
    result.push(" ", capitals[i-1], words[i])
  }
  return result.join('');
}

const solution = string => {
  return string.replace(/([A-Z])/g, ' $1');
}
// why does this one need brackets?


const solutionBest = string => {
  return string.replace(/[A-Z]/g, ' $&')
}

console.log(solutionFirst("camelCasingTest"));
console.log(solution("camelCasingTest"));
console.log(solutionBest("camelCasingTest"));
