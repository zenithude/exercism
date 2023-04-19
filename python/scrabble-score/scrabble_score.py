table_score_letters = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
}

def score(word):
    score_word = 0
    for letter in word:
        for point, letters in table_score_letters.items():
            if letter.upper() in letters:
                score_word += point
    return score_word
