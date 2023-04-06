"""Compute Sum of unique multiple."""

def sum_of_multiples(limit, multiples):
    unique_multiple = []
    for multiple in multiples:
        for number in range(multiple, limit):
            if multiple == 0:
                break
            if number % multiple == 0:
                if number not in unique_multiple:
                    unique_multiple.append(number)
    return sum(unique_multiple)
