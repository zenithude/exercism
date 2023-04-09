plain = "abcdefghijklmnopqrstuvwxyz"
cipher = "zyxwvutsrqponmlkjihgfedcba"

def encode(plain_text):
    plain_text = ''.join(caracter.lower() for caracter in plain_text if caracter.isalnum())
    plain_text = plain_text.translate(plain_text.maketrans(plain, cipher))
    return ' '.join(plain_text[index:index + 5] for index in range(0, len(plain_text), 5))


def decode(ciphered_text):
    return ciphered_text.translate(ciphered_text.maketrans(plain, cipher)).replace(" ", "")
