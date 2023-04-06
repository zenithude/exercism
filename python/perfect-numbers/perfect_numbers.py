"""Determine classification of positive number."""

def get_sum_factors(number):
    factors = []
    for num in range(1, number):
        if number % num == 0:
            factors.append(num)
    return sum(factors)


def classify(number):
    """ A perfect number equals the sum of its positive divisors.

    :param number: int a positive integer
    :return: str the classification of the input integer
    """
    if number <= 0:
        raise ValueError("Classification is only possible for positive integers.")
    sum_factors = get_sum_factors(number)    
    if number == sum_factors:
        return 'perfect'
    elif number < sum_factors:
        return 'abundant'
    else:
        return 'deficient'
