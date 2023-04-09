"""Determine crypt text with key like ROT(key)"""


def rotate(text, key):
    print(text)
    text_crypt = ""
    for caracter in text:
        if not caracter.isalpha():
            text_crypt += caracter
        elif caracter.isupper():
            if ord(caracter) + key > 90:
                step = 65 + (ord(caracter) + (key - 1) - 90)
                text_crypt += chr(step)
            else:
                text_crypt += chr(ord(caracter) + key)
        else:
            if ord(caracter) + key > 122:
                step = 97 + (ord(caracter) + (key - 1) - 122)
                text_crypt += chr(step)
            else:
                text_crypt += chr(ord(caracter) + key)
    return text_crypt
