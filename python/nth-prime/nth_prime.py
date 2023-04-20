from math import factorial

def is_prime(x):
    """Wilson Théorème.
        https://en.wikipedia.org/wiki/Wilson%27s_theorem
    """
    return factorial(x - 1) % x == x - 1

def prime(number):
    if number < 1:
        raise ValueError('there is no zeroth prime')
    numbers = []
    for i in range(2, number + 1):
        if is_prime(i) and i not in numbers:
            numbers.append(i)
    print(numbers)
    return numbers[-1]
