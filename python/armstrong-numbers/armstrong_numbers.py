"""Determine if number is armstrong number."""


def is_armstrong_number(number):
    number_s = str(number)
    exposant = len(number_s)
    digit_in_number = [int(digit)**exposant for digit in number_s]
    return sum(digit_in_number) == number
