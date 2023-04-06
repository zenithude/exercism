//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const DNA = ['G', 'C', 'T', 'A'];
const RNA = ['C', 'G', 'A', 'U'];

export const toRna = (dna) => {
  if (!dna) { 
    return '';
  } else if(dna.length === 1) {
    return RNA[DNA.indexOf(dna)];
  } else {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
      rna += RNA[DNA.indexOf(dna[i])];
    }
    return rna
  }
};
