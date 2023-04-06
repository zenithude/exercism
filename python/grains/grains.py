"""Functions that calcule number of grains on chessboard"""


def square(number):
    if number not in range(1, 65):
        raise ValueError("square must be between 1 and 64")

    if number == 1:
        return 1

    return 2**(number - 1)


def total():
    return 2**64 - 1
