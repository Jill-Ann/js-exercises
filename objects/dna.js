// 7 kyu

const replacements = {
  'A' : 'T',
  'T' : 'A',
  'C' : 'G',
  'G' : 'C',
}

function DNAStrand(dna){
  return dna.replace(/[ATCG]/g, char => replacements[char]);
}
console.log(DNAStrand("ATTGC")); // "TAACG"
