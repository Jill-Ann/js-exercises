// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

const corrections = {
  '5': 'S',
  '1': 'I',
  '0': 'O',
}

const correct = str => {
  return str.replace(/[510]/g, char => corrections[char]);
}
console.log(correct("51NGAP0RE"));
