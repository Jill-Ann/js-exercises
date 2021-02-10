// Have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character.

// Input: "abcdef"
// Output: a

// Input: "hello world hi hey"
// Output: w

const nonRepeatingCharacter = str => {
    let arr = str.split('');
    for (var i = 0; i < str.length; i++) {
        let temp = [...arr];
        temp.splice(i, 1);
        if (!temp.includes(str[i])) return str[i];
    };
};

console.log(nonRepeatingCharacter("hello world hi hey"));

// do a regex to match all chars in str one by one then check length of returned array?
