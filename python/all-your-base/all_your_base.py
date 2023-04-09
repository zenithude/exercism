"""convert digits from input_base to output_base."""

def rebase(input_base, digits, output_base):
    if input_base < 2:
        raise ValueError("input base must be >= 2")
    
    if output_base < 2:
        raise ValueError("output base must be >= 2")

    if any(digit >= input_base for digit in digits) or any(digit < 0 for digit in digits):
        raise ValueError("all digits must satisfy 0 <= d < input base")
    
    num = sum(digit * input_base**index for index, digit in enumerate(digits[::-1]))

    if num == 0:
        return [0]
    
    digit_new_base = []
    while num != 0:
        digit_new_base.insert(0, num % output_base)
        num = num // output_base

    return digit_new_base
