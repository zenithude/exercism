"""Determine actions with binary number."""

ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump']

def commands(binary_str):
    secret_handshake = []
    index = 0
    print(binary_str, binary_str[::-1], sep='===')
    for binary in binary_str[::-1]:
        print(secret_handshake)
        if index == 4 and binary == '1':
            secret_handshake = secret_handshake[::-1]
            break
        if binary == '1':
            secret_handshake.append(ACTIONS[index])
        index += 1
    return secret_handshake
