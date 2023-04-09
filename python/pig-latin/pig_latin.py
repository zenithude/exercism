"""Translate a text in pig latin"""

VOWELS = {'a', 'e' ,'i', 'o', 'u'}
VOWELS_Y = {'a', 'e' ,'i', 'o', 'u', 'y'}
SPECIALS = {'xr', 'yt'}


def translate(text):
    pigtext = []
    for word in text.split():
        if word[0] in VOWELS or word[0:2] in SPECIALS:
            pigtext.append(f'{word}ay')
            continue
        
        for position in range(1, len(word)):
            if word[position] in VOWELS_Y:
                position += 1 if word[position] == 'u' and word[position - 1] == "q" else 0
                pigtext.append(f'{word[position:]}{word[:position]}ay')
                break
    return ' '.join(pigtext)
