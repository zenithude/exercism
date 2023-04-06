"""Function who find anagram of word in list of candidates"""

def find_anagrams(word, candidates):
    word = word.lower()
    anagram = list(word)
    anagram.sort()
    anagrams = []
    for candidate in candidates:
        if candidate.lower() == word:
            continue
        isanagram = list(candidate.lower())
        isanagram.sort()
        if anagram == isanagram and isanagram not in anagrams:
            anagrams.append(candidate)
    return anagrams
