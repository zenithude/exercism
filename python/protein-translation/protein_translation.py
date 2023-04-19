proteins_codons = {
    "STOP": ["UAA", "UAG", "UGA"],
    "Methionine": ["AUG"],
    "Phenylalanine": ["UUU", "UUC"],
    "Leucine": ["UUA", "UUG"],
    "Serine": ["UCU", "UCC", "UCA", "UCG"],
    "Tyrosine": ["UAU", "UAC"],
    "Cysteine": ["UGU", "UGC"],
    "Tryptophan": ["UGG"]
}

def proteins(strand):
    proteins = []
    stop = False
    for i in range(0, len(strand), 3):
        print(strand[i: i+3])
        if stop:
            break
        for protein, codons in proteins_codons.items():
            if strand[i: i+3] in proteins_codons[protein] and protein == "STOP":
                stop = True
                break
            if strand[i: i+3] in proteins_codons[protein]:
                proteins.append(protein)
    return proteins