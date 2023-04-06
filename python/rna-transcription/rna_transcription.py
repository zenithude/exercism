"""Convert DNA sequence to RNA.
  DNA    RNA
- `G` -> `C`
- `C` -> `G`
- `T` -> `A`
- `A` -> `U`

"""

DNA = ['G', 'C', 'T', 'A']
RNA = ['C', 'G', 'A', 'U']

def to_rna(dna_strand):
    rna_strand = ""
    for piece in dna_strand:
        rna_strand += RNA[DNA.index(piece)]
    return rna_strand
